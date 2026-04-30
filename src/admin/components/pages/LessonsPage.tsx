'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  createCourse,
  createLesson,
  createLessonBlock,
  deleteCourse,
  deleteLesson,
  deleteLessonBlock,
  fetchAdminContentTree,
  updateLessonBlock,
} from '@/app/content/content-api'
import type { AdminBlockType, AdminContentStatus, AdminCourse } from '@/app/content/content-types'
import ConfirmModal from '../modals/ConfirmModal'

type EditorMode = string | null
type LessonsPageMode = 'structure' | 'content'

const BLOCK_TYPES: AdminBlockType[] = ['text', 'video', 'code', 'interactive_image']
const STATUS_LABELS: Record<AdminContentStatus, string> = {
  draft: 'Nháp',
  published: 'Đã xuất bản',
  archived: 'Lưu trữ',
}
const BLOCK_LABELS: Record<AdminBlockType, string> = {
  text: 'Văn bản',
  video: 'Video',
  code: 'Code',
  interactive_image: 'Ảnh tương tác',
}
const BLOCK_TEMPLATES: Record<AdminBlockType, string> = {
  text: '{\n  "html": "<p>Nội dung bài học</p>"\n}',
  video: '{\n  "video_url": "",\n  "caption": ""\n}',
  code: '{\n  "language": "bash",\n  "code": "",\n  "filename": ""\n}',
  interactive_image:
    '{\n  "image_url": "",\n  "alt": "",\n  "hotspots": [\n    {\n      "id": "step-1",\n      "x_percent": 24,\n      "y_percent": 36,\n      "label": "1",\n      "title": "Tên hotspot",\n      "description": "Giải thích ngắn cho hotspot này."\n    }\n  ]\n}',
}

const newLesson = {
  slug: '',
  title: '',
  summary: '',
  status: 'draft' as AdminContentStatus,
  sortOrder: 0,
  estimatedMinutes: 15,
}

const newBlock = {
  blockType: 'text' as AdminBlockType,
  title: '',
  sortOrder: 0,
  isRequired: true,
  contentJsonText: BLOCK_TEMPLATES.text,
}

const stringifyJson = (value: Record<string, unknown>) => JSON.stringify(value ?? {}, null, 2)
const statusTone = (status: AdminContentStatus) =>
  status === 'published' ? 'live' : status === 'archived' ? 'archived' : 'draft'
const slugifyValue = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="editor-field">
      <span className="editor-field-label">{label}</span>
      {hint ? <span className="editor-field-hint">{hint}</span> : null}
      {children}
    </label>
  )
}

function SelectorPanel({
  title,
  description,
  actionLabel,
  actionDisabled,
  onAction,
  children,
}: {
  title: string
  description?: string
  actionLabel?: string
  actionDisabled?: boolean
  onAction?: () => void
  children: ReactNode
}) {
  return (
    <div className="selector-panel">
      <div className="selector-panel-head">
        <div>
          <h3>{title}</h3>
          {description ? <p>{description}</p> : null}
        </div>
        {actionLabel && onAction ? (
          <button className="btn" disabled={actionDisabled} onClick={onAction}>
            {actionLabel}
          </button>
        ) : null}
      </div>
      <div className="content-list">{children}</div>
    </div>
  )
}

export default function LessonsPage({ mode = 'structure' }: { mode?: LessonsPageMode }) {
  const [courses, setCourses] = useState<AdminCourse[]>([])
  const [selectedCourseId, setSelectedCourseId] = useState<EditorMode>(null)
  const [selectedLessonId, setSelectedLessonId] = useState<EditorMode>(null)
  const [selectedBlockId, setSelectedBlockId] = useState<EditorMode>(null)
  const [blockForm, setBlockForm] = useState(newBlock)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [searchParams] = useSearchParams()
  const [confirmState, setConfirmState] = useState<{
    isOpen: boolean
    title: string
    message: string
    onConfirm: () => void | Promise<void>
  }>({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {},
  })

  const selectedCourse =
    selectedCourseId && selectedCourseId !== 'new'
      ? courses.find((course) => course.id === selectedCourseId) ?? null
      : null
  const lessons = selectedCourse?.lessons ?? []
  const selectedLesson =
    selectedLessonId && selectedLessonId !== 'new'
      ? lessons.find((lesson) => lesson.id === selectedLessonId) ?? null
      : null
  const blocks = selectedLesson?.blocks ?? []
  const selectedBlock =
    selectedBlockId && selectedBlockId !== 'new'
      ? blocks.find((block) => block.id === selectedBlockId) ?? null
      : null

  const pageSummary = useMemo(
    () => ({
      courseCount: courses.length,
      lessonCount: courses.reduce((total, course) => total + course.lessons.length, 0),
      blockCount: courses.reduce(
        (total, course) => total + course.lessons.reduce((lessonTotal, lesson) => lessonTotal + lesson.blocks.length, 0),
        0,
      ),
    }),
    [courses],
  )

  const refresh = async (next?: { courseId?: EditorMode; lessonId?: EditorMode; blockId?: EditorMode }) => {
    const tree = await fetchAdminContentTree()
    setCourses(tree.courses)

    const nextCourse =
      next?.courseId && next.courseId !== 'new'
        ? tree.courses.find((course) => course.id === next.courseId) ?? tree.courses[0] ?? null
        : tree.courses[0] ?? null
    const nextLesson =
      next?.lessonId && next.lessonId !== 'new'
        ? nextCourse?.lessons.find((lesson) => lesson.id === next.lessonId) ?? nextCourse?.lessons[0] ?? null
        : nextCourse?.lessons[0] ?? null

    setSelectedCourseId(next?.courseId ?? nextCourse?.id ?? null)
    setSelectedLessonId(next?.lessonId ?? nextLesson?.id ?? null)
    setSelectedBlockId(next?.blockId ?? nextLesson?.blocks[0]?.id ?? null)
  }

  useEffect(() => {
    const cId = searchParams.get('courseId')
    const lId = searchParams.get('lessonId')
    const bId = searchParams.get('blockId')

    refresh({
      courseId: cId || undefined,
      lessonId: lId || undefined,
      blockId: bId || undefined,
    }).finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    if (!selectedBlock) return
    setBlockForm({
      blockType: selectedBlock.blockType,
      title: selectedBlock.title ?? '',
      sortOrder: selectedBlock.sortOrder,
      isRequired: selectedBlock.isRequired,
      contentJsonText: stringifyJson(selectedBlock.contentJson),
    })
  }, [selectedBlock])

  const runSave = async (task: () => Promise<void>) => {
    try {
      setIsSaving(true)
      setFeedback(null)
      await task()
      setFeedback('Đã lưu vào Neon.')
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : 'Có lỗi xảy ra.')
    } finally {
      setIsSaving(false)
      setTimeout(() => setFeedback(null), 3000)
    }
  }

  const quickCreateCourse = () =>
    void runSave(async () => {
      const title = window.prompt('Tên course mới?')?.trim() ?? ''
      if (!title) return
      const suggestedSlug = slugifyValue(title)
      const slug = window.prompt('Slug cho course mới?', suggestedSlug)?.trim() ?? suggestedSlug
      if (!slug) return

      const result = await createCourse({
        slug,
        title,
        shortDescription: '',
        coverImageUrl: '',
        status: 'draft',
        sortOrder: courses.length + 1,
      })
      await refresh({ courseId: result.item.id, lessonId: null, blockId: null })
    })

  const quickCreateLesson = (courseId: string) =>
    void runSave(async () => {
      const title = window.prompt('Tên lesson mới?')?.trim() ?? ''
      if (!title) return
      const suggestedSlug = slugifyValue(title)
      const slug = window.prompt('Slug cho lesson mới?', suggestedSlug)?.trim() ?? suggestedSlug
      if (!slug) return

      const lessonCount = courses.find((course) => course.id === courseId)?.lessons.length ?? 0
      const result = await createLesson({
        ...newLesson,
        courseId,
        title,
        slug,
        sortOrder: lessonCount + 1,
      })
      await refresh({ courseId, lessonId: result.item.id, blockId: null })
    })

  const saveBlock = () =>
    void runSave(async () => {
      const lessonId = selectedLesson?.id
      if (!lessonId) throw new Error('Hãy chọn lesson trước.')
      const contentJson = JSON.parse(blockForm.contentJsonText || '{}') as Record<string, unknown>

      if (selectedBlockId === 'new' || !selectedBlockId) {
        const result = await createLessonBlock({ lessonId, ...blockForm, contentJson })
        await refresh({ courseId: selectedCourse?.id, lessonId, blockId: result.item.id })
        return
      }

      await updateLessonBlock({ id: selectedBlockId, lessonId, ...blockForm, contentJson })
      await refresh({ courseId: selectedCourse?.id, lessonId, blockId: selectedBlockId })
    })

  const handleBlockTypeChange = (nextType: AdminBlockType) => {
    const isFreshTemplate =
      !blockForm.contentJsonText.trim() || Object.values(BLOCK_TEMPLATES).includes(blockForm.contentJsonText.trim())

    setBlockForm({
      ...blockForm,
      blockType: nextType,
      contentJsonText: isFreshTemplate ? BLOCK_TEMPLATES[nextType] : blockForm.contentJsonText,
    })
  }

  const handleDeleteCourse = (id: string, title: string) => {
    setConfirmState({
      isOpen: true,
      title: 'Xóa Course',
      message: `Xác nhận xóa course "${title}"? Thao tác này không thể hoàn tác và sẽ xóa toàn bộ lesson bên trong.`,
      onConfirm: async () => {
        await runSave(async () => {
          await deleteCourse(id)
          await refresh()
        })
      },
    })
  }

  const handleDeleteLesson = (id: string, title: string, courseId: string) => {
    setConfirmState({
      isOpen: true,
      title: 'Xóa Lesson',
      message: `Xác nhận xóa lesson "${title}"?`,
      onConfirm: async () => {
        await runSave(async () => {
          await deleteLesson(id)
          await refresh({ courseId })
        })
      },
    })
  }

  const handleDeleteBlock = (id: string, title: string, courseId?: string, lessonId?: string) => {
    setConfirmState({
      isOpen: true,
      title: 'Xóa Block',
      message: `Xác nhận xóa block "${title}"?`,
      onConfirm: async () => {
        await runSave(async () => {
          await deleteLessonBlock(id)
          await refresh({ courseId: courseId || null, lessonId: lessonId || null, blockId: null })
        })
      },
    })
  }

  if (isLoading) {
    return (
      <div className="page">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Đang tải</strong> · Trình quản lý nội dung Vibecode
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="page" id="page-lessons">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Nội dung Vibecode</strong> · Tách riêng quản lý danh sách và soạn nội dung
          </span>
          <div className="section-header-spacer" />
          <button className="section-header-action" onClick={quickCreateCourse}>
            + Course mới
          </button>
        </div>
      </div>

      {feedback ? (
        <div className="alert-bar">
          <span className="alert-bar-text">{feedback}</span>
        </div>
      ) : null}

      <div className="manager-switch">
        <Link className={`manager-switch-link ${mode === 'structure' ? 'active' : ''}`} href="/lessons/structure">
          1. Quản lý bài học và module
        </Link>
        <Link className={`manager-switch-link ${mode === 'content' ? 'active' : ''}`} href="/lessons/editor">
          2. Soạn nội dung chi tiết
        </Link>
      </div>

      {mode === 'structure' ? (
        <section className="lesson-structure-shell">
          <div className="manager-stats">
            <div className="manager-stat-card">
              <strong>{pageSummary.courseCount}</strong>
              <span>course</span>
            </div>
            <div className="manager-stat-card">
              <strong>{pageSummary.lessonCount}</strong>
              <span>lesson</span>
            </div>
            <div className="manager-stat-card">
              <strong>{pageSummary.blockCount}</strong>
              <span>block</span>
            </div>
          </div>

          <div className="editor-card lesson-structure-card">
            <div className="editor-card-head">
              <div>
                <h3>Tất cả bài học Vibecode</h3>
                <p>Thay vì điền form bên phải, màn này chỉ tập trung hiện tất cả course, lesson và bài nhỏ để quản lý nhanh.</p>
              </div>
              <button className="btn btn-primary" disabled={isSaving} onClick={quickCreateCourse}>
                + Tạo course
              </button>
            </div>

            {courses.length ? (
              <div className="lesson-structure-list">
                {courses.map((course) => (
                  <article key={course.id} className="lesson-structure-course">
                    <div className="lesson-structure-course-head">
                      <div>
                        <div className="lesson-structure-kicker">Course</div>
                        <h4>{course.sortOrder}. {course.title}</h4>
                        <p>{course.shortDescription || course.slug}</p>
                      </div>
                      <div className="lesson-structure-course-actions">
                        <span className={`status-pill ${statusTone(course.status)}`}>{STATUS_LABELS[course.status]}</span>
                        <a href="/vibecode" target="_blank" className="btn">
                          Xem trực tiếp
                        </a>
                        <a href={`/admin/lessons/editor?courseId=${course.id}`} className="btn">
                          Sửa
                        </a>
                        <button className="btn" disabled={isSaving} onClick={() => quickCreateLesson(course.id)}>
                          + Tạo lesson
                        </button>
                        <button className="btn btn-danger" disabled={isSaving} onClick={() => handleDeleteCourse(course.id, course.title)}>
                          Xóa
                        </button>
                      </div>
                    </div>

                    {course.lessons.length ? (
                      <div className="lesson-structure-lessons">
                        {course.lessons.map((lesson) => (
                          <div key={lesson.id} className="lesson-structure-lesson">
                            <div className="lesson-structure-lesson-head">
                              <div>
                                <div className="lesson-structure-kicker">Lesson {String(lesson.sortOrder).padStart(2, '0')}</div>
                                 <h5>{lesson.sortOrder}. {lesson.title}</h5>
                                 <p>{lesson.summary || lesson.slug}</p>
                              </div>
                              <div className="lesson-structure-lesson-meta">
                                <span className="content-meta">{lesson.estimatedMinutes} phút</span>
                                <span className={`status-pill ${statusTone(lesson.status)}`}>{STATUS_LABELS[lesson.status]}</span>
                                <a href={`/vibecode/${lesson.slug}`} target="_blank" className="btn">
                                  Xem
                                </a>
                                <a href={`/admin/lessons/editor?courseId=${course.id}&lessonId=${lesson.id}`} className="btn">
                                  Sửa
                                </a>
                                <button className="btn btn-danger" disabled={isSaving} onClick={() => handleDeleteLesson(lesson.id, lesson.title, course.id)}>
                                  Xóa
                                </button>
                              </div>
                            </div>

                            {lesson.blocks.length ? (
                              <div className="lesson-structure-blocks">
                                {lesson.blocks.map((block) => (
                                  <div key={block.id} className="lesson-structure-block">
                                    <strong>{lesson.sortOrder}.{block.sortOrder} {block.title || 'Block chưa có tiêu đề'}</strong>
                                    <span>{BLOCK_LABELS[block.blockType]}</span>
                                    <span className="content-meta">Thứ tự {block.sortOrder}</span>
                                    <div className="lesson-structure-block-actions" style={{ marginTop: 'auto', display: 'flex', gap: '4px' }}>
                                      <a
                                        href={`/vibecode/${lesson.slug}/bai-${lesson.sortOrder}-${block.sortOrder}`}
                                        target="_blank"
                                        className="btn"
                                        style={{ flex: 1, padding: '4px 8px', fontSize: '9px', textAlign: 'center' }}
                                      >
                                        Xem
                                      </a>
                                      <a
                                        href={`/admin/lessons/editor?courseId=${course.id}&lessonId=${lesson.id}&blockId=${block.id}`}
                                        className="btn"
                                        style={{ flex: 1, padding: '4px 8px', fontSize: '9px', textAlign: 'center' }}
                                      >
                                        Sửa
                                      </a>
                                      <button
                                        className="btn btn-danger"
                                        style={{ flex: 1, padding: '4px 8px', fontSize: '9px' }}
                                        disabled={isSaving}
                                        onClick={() => handleDeleteBlock(block.id, block.title || 'không tiêu đề', course.id, lesson.id)}
                                      >
                                        Xóa
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="empty-inline">Lesson này chưa có bài nhỏ nào.</div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="empty-inline">Course này chưa có lesson nào. Bấm "+ Tạo lesson" để thêm nhanh.</div>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-inline">Chưa có course nào. Bấm "Tạo course" để bắt đầu.</div>
            )}
          </div>
        </section>
      ) : (
        <div className="content-manager-shell content-manager-shell-editor">
          <aside className="content-manager-sidebar">

            <SelectorPanel title="Bài học (Lessons)">
              {lessons.length ? (
                lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    className={`content-list-item ${selectedLessonId === lesson.id ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedLessonId(lesson.id)
                      setSelectedBlockId(lesson.blocks[0]?.id ?? 'new')
                    }}
                  >
                    <strong>{lesson.sortOrder}. {lesson.title}</strong>
                    <span>{lesson.slug}</span>
                    <span className="content-meta">{lesson.estimatedMinutes} phút · {STATUS_LABELS[lesson.status]}</span>
                  </button>
                ))
              ) : (
                <div className="empty-inline">Chua co lesson trong course nay.</div>
              )}
            </SelectorPanel>

            <SelectorPanel
              title="Phần nội dung (Blocks)"
              actionLabel="+ Tạo"
              actionDisabled={!selectedLesson}
              onAction={() => setSelectedBlockId('new')}
            >
              {blocks.length ? (
                blocks.map((block) => (
                  <button
                    key={block.id}
                    className={`content-list-item ${selectedBlockId === block.id ? 'active' : ''}`}
                    onClick={() => setSelectedBlockId(block.id)}
                  >
                    <strong>{selectedLesson?.sortOrder}.{block.sortOrder} {block.title || 'Block chưa có tiêu đề'}</strong>
                    <span>{BLOCK_LABELS[block.blockType]}</span>
                    <span className="content-meta">Thứ tự {block.sortOrder} · {block.isRequired ? 'Bắt buộc' : 'Tùy chọn'}</span>
                  </button>
                ))
              ) : (
                <div className="empty-inline">Chua co block trong lesson nay.</div>
              )}
            </SelectorPanel>
          </aside>

          <section className="content-manager-editor">
            <div className="editor-stack">
              <div className="editor-card">
                <div className="editor-card-head">
                  <div>
                    <h3>Soạn nội dung chi tiết</h3>
                    <p>Chọn bài học và block bên trái, rồi soạn nội dung chi tiết ở đây.</p>
                  </div>
                  {selectedBlock ? <span className="status-pill neutral">{BLOCK_LABELS[selectedBlock.blockType]}</span> : null}
                </div>

                <div className="detail-context-grid">
                  <div className="detail-context-card">
                    <span className="editor-field-label">Khóa học</span>
                    <strong>{selectedCourse?.title ?? 'Chưa chọn khóa học'}</strong>
                    <span>{selectedCourse?.slug ?? 'Hãy chọn khóa học ở cột trái.'}</span>
                  </div>
                  <div className="detail-context-card">
                    <span className="editor-field-label">Bài học</span>
                    <strong>{selectedLesson?.title ?? 'Chưa chọn bài học'}</strong>
                    <span>{selectedLesson ? `${selectedLesson.estimatedMinutes} phút · ${STATUS_LABELS[selectedLesson.status]}` : 'Chọn bài học để mở soạn thảo.'}</span>
                  </div>
                  <div className="detail-context-card">
                    <span className="editor-field-label">Block</span>
                    <strong>{selectedBlock?.title || 'Chưa chọn block'}</strong>
                    <span>{selectedBlock ? `${BLOCK_LABELS[selectedBlock.blockType]} · Thứ tự ${selectedBlock.sortOrder}` : 'Chọn block để soạn nội dung.'}</span>
                  </div>
                </div>
              </div>


              <div className={`editor-card ${!selectedLesson && selectedBlockId !== 'new' ? 'is-disabled' : ''}`}>
                <div className="editor-card-head">
                  <div>
                    <h3>{selectedBlockId === 'new' ? 'Tạo block nội dung mới' : 'Soạn nội dung block'}</h3>
                    <p>Phần này dành riêng cho việc viết, dán code, gắn video hoặc sửa JSON nội dung.</p>
                  </div>
                </div>

                {!selectedLesson ? <div className="editor-note">Hãy chọn bài học trước. Sau đó chọn một block để soạn.</div> : null}

                <div className="editor-form-grid">
                  <Field label="Loại block">
                    <select value={blockForm.blockType} onChange={(e) => handleBlockTypeChange(e.target.value as AdminBlockType)} disabled={!selectedLesson}>
                      {BLOCK_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {BLOCK_LABELS[type]}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Tiêu đề block">
                    <input
                      value={blockForm.title}
                      onChange={(e) => setBlockForm({ ...blockForm, title: e.target.value })}
                      placeholder="Ví dụ: Phần mở đầu, ví dụ minh họa, checklist..."
                      disabled={!selectedLesson}
                    />
                  </Field>
                  <Field label="Thứ tự">
                    <input type="number" value={blockForm.sortOrder} onChange={(e) => setBlockForm({ ...blockForm, sortOrder: Number(e.target.value) })} disabled={!selectedLesson} />
                  </Field>
                  <Field label="Bắt buộc hoàn thành">
                    <select value={blockForm.isRequired ? 'yes' : 'no'} onChange={(e) => setBlockForm({ ...blockForm, isRequired: e.target.value === 'yes' })} disabled={!selectedLesson}>
                      <option value="yes">Có</option>
                      <option value="no">Không</option>
                    </select>
                  </Field>
                  <Field label="content_json chi tiết" hint="Bạn có thể viết full nội dung HTML, code, caption, hotspot... ngay trong box này.">
                    <textarea
                      className="editor-json editor-json-lg"
                      value={blockForm.contentJsonText}
                      onChange={(e) => setBlockForm({ ...blockForm, contentJsonText: e.target.value })}
                      disabled={!selectedLesson}
                    />
                  </Field>
                </div>

                <div className="editor-actions">
                  <button className="btn" disabled={!selectedLesson} onClick={() => setBlockForm({ ...blockForm, contentJsonText: BLOCK_TEMPLATES[blockForm.blockType] })}>
                    Chèn JSON mẫu
                  </button>
                  <button className="btn btn-primary" disabled={isSaving || !selectedLesson} onClick={saveBlock}>
                    {selectedBlockId === 'new' ? 'Lưu block mới' : 'Lưu nội dung chi tiết'}
                  </button>
                  {selectedBlock ? (
                    <button
                      className="btn btn-danger"
                      disabled={isSaving}
                      onClick={() => handleDeleteBlock(selectedBlock.id, selectedBlock.title || 'không tiêu đề', selectedCourse?.id, selectedLesson?.id)}
                    >
                      Xóa block
                    </button>
                  ) : null}
                </div>

                {blockForm.blockType === 'interactive_image' ? (
                  <div className="editor-note">
                    Dùng các key `image_url`, `alt`, `hotspots`. Mỗi hotspot nên có `id`, `x_percent`, `y_percent`, `label`, `title`, `description`.
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        </div>
      )}

      <ConfirmModal
        isOpen={confirmState.isOpen}
        title={confirmState.title}
        message={confirmState.message}
        onConfirm={confirmState.onConfirm}
        onClose={() => setConfirmState({ ...confirmState, isOpen: false })}
      />
    </div>
  )
}
