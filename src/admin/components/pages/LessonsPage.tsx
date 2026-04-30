'use client'

import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import {
  createCourse,
  createLesson,
  createLessonBlock,
  deleteCourse,
  deleteLesson,
  deleteLessonBlock,
  fetchAdminContentTree,
  updateCourse,
  updateLesson,
  updateLessonBlock,
} from '@/app/content/content-api'
import type { AdminBlockType, AdminContentStatus, AdminCourse } from '@/app/content/content-types'

type EditorMode = string | null

const COURSE_STATUSES: AdminContentStatus[] = ['draft', 'published', 'archived']
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

const newCourse = {
  slug: '',
  title: '',
  shortDescription: '',
  coverImageUrl: '',
  status: 'draft' as AdminContentStatus,
  sortOrder: 0,
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
const statusTone = (status: AdminContentStatus) => (status === 'published' ? 'live' : status === 'archived' ? 'archived' : 'draft')

function Field({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: ReactNode
}) {
  return (
    <label className="editor-field">
      <span className="editor-field-label">{label}</span>
      {hint ? <span className="editor-field-hint">{hint}</span> : null}
      {children}
    </label>
  )
}

export default function LessonsPage() {
  const [courses, setCourses] = useState<AdminCourse[]>([])
  const [selectedCourseId, setSelectedCourseId] = useState<EditorMode>(null)
  const [selectedLessonId, setSelectedLessonId] = useState<EditorMode>(null)
  const [selectedBlockId, setSelectedBlockId] = useState<EditorMode>(null)
  const [courseForm, setCourseForm] = useState(newCourse)
  const [lessonForm, setLessonForm] = useState(newLesson)
  const [blockForm, setBlockForm] = useState(newBlock)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)

  const selectedCourse =
    selectedCourseId && selectedCourseId !== 'new' ? courses.find((course) => course.id === selectedCourseId) ?? null : null
  const lessons = selectedCourse?.lessons ?? []
  const selectedLesson =
    selectedLessonId && selectedLessonId !== 'new' ? lessons.find((lesson) => lesson.id === selectedLessonId) ?? null : null
  const blocks = selectedLesson?.blocks ?? []
  const selectedBlock =
    selectedBlockId && selectedBlockId !== 'new' ? blocks.find((block) => block.id === selectedBlockId) ?? null : null

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
    const fallbackCourseId = next?.courseId ?? tree.courses[0]?.id ?? 'new'
    const nextCourse =
      fallbackCourseId && fallbackCourseId !== 'new'
        ? tree.courses.find((course) => course.id === fallbackCourseId) ?? tree.courses[0] ?? null
        : null
    const fallbackLessonId = next?.lessonId ?? nextCourse?.lessons[0]?.id ?? 'new'
    const nextLesson =
      fallbackLessonId && fallbackLessonId !== 'new'
        ? nextCourse?.lessons.find((lesson) => lesson.id === fallbackLessonId) ?? nextCourse?.lessons[0] ?? null
        : null
    const fallbackBlockId = next?.blockId ?? nextLesson?.blocks[0]?.id ?? 'new'

    setSelectedCourseId(next?.courseId ?? (nextCourse ? nextCourse.id : 'new'))
    setSelectedLessonId(next?.lessonId ?? (nextLesson ? nextLesson.id : 'new'))
    setSelectedBlockId(next?.blockId ?? (nextLesson?.blocks[0] ? nextLesson.blocks[0].id : 'new'))

    if (fallbackCourseId === 'new' && !tree.courses.length) {
      setSelectedCourseId('new')
      setSelectedLessonId(null)
      setSelectedBlockId(null)
    }
    if (fallbackLessonId === 'new' && nextCourse) {
      setSelectedLessonId('new')
      setSelectedBlockId(null)
    }
    if (fallbackBlockId === 'new' && nextLesson) {
      setSelectedBlockId('new')
    }
  }

  useEffect(() => {
    refresh().finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    if (selectedCourse) {
      setCourseForm({
        slug: selectedCourse.slug,
        title: selectedCourse.title,
        shortDescription: selectedCourse.shortDescription ?? '',
        coverImageUrl: selectedCourse.coverImageUrl ?? '',
        status: selectedCourse.status,
        sortOrder: selectedCourse.sortOrder,
      })
      return
    }
    if (selectedCourseId === 'new') setCourseForm(newCourse)
  }, [selectedCourse, selectedCourseId])

  useEffect(() => {
    if (selectedLesson) {
      setLessonForm({
        slug: selectedLesson.slug,
        title: selectedLesson.title,
        summary: selectedLesson.summary ?? '',
        status: selectedLesson.status,
        sortOrder: selectedLesson.sortOrder,
        estimatedMinutes: selectedLesson.estimatedMinutes,
      })
      return
    }
    if (selectedLessonId === 'new') setLessonForm(newLesson)
  }, [selectedLesson, selectedLessonId])

  useEffect(() => {
    if (selectedBlock) {
      setBlockForm({
        blockType: selectedBlock.blockType,
        title: selectedBlock.title ?? '',
        sortOrder: selectedBlock.sortOrder,
        isRequired: selectedBlock.isRequired,
        contentJsonText: stringifyJson(selectedBlock.contentJson),
      })
      return
    }
    if (selectedBlockId === 'new') setBlockForm(newBlock)
  }, [selectedBlock, selectedBlockId])

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
    }
  }

  const saveCourse = () =>
    runSave(async () => {
      if (selectedCourseId === 'new' || !selectedCourseId) {
        const result = await createCourse(courseForm)
        await refresh({ courseId: result.item.id, lessonId: 'new', blockId: null })
        return
      }
      await updateCourse({ id: selectedCourseId, ...courseForm })
      await refresh({ courseId: selectedCourseId, lessonId: selectedLessonId, blockId: selectedBlockId })
    })

  const saveLesson = () =>
    runSave(async () => {
      const courseId = selectedCourse?.id
      if (!courseId) throw new Error('Hãy chọn hoặc tạo course trước.')
      if (selectedLessonId === 'new' || !selectedLessonId) {
        const result = await createLesson({ courseId, ...lessonForm })
        await refresh({ courseId, lessonId: result.item.id, blockId: 'new' })
        return
      }
      await updateLesson({ id: selectedLessonId, courseId, ...lessonForm })
      await refresh({ courseId, lessonId: selectedLessonId, blockId: selectedBlockId })
    })

  const saveBlock = () =>
    runSave(async () => {
      const lessonId = selectedLesson?.id
      if (!lessonId) throw new Error('Hãy chọn hoặc tạo lesson trước.')
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
            <strong>Nội dung Vibecode</strong> · Quản lý course, lesson và block
          </span>
          <div className="section-header-spacer" />
          <button
            className="section-header-action"
            onClick={() => {
              setSelectedCourseId('new')
              setSelectedLessonId(null)
              setSelectedBlockId(null)
            }}
          >
            + Course mới
          </button>
        </div>
      </div>

      {feedback ? <div className="alert-bar"><span className="alert-bar-text">{feedback}</span></div> : null}

      <div className="content-manager-shell">
        <aside className="content-manager-sidebar">
          <div className="manager-stats">
            <div className="manager-stat-card"><strong>{pageSummary.courseCount}</strong><span>course</span></div>
            <div className="manager-stat-card"><strong>{pageSummary.lessonCount}</strong><span>lesson</span></div>
            <div className="manager-stat-card"><strong>{pageSummary.blockCount}</strong><span>block</span></div>
          </div>

          <div className="selector-panel">
            <div className="selector-panel-head">
              <div>
                <h3>Courses</h3>
                <p>Chọn khóa học để sửa nội dung.</p>
              </div>
              <button className="btn" onClick={() => { setSelectedCourseId('new'); setSelectedLessonId(null); setSelectedBlockId(null) }}>
                + Tạo
              </button>
            </div>
            <div className="content-list">
              {courses.length ? courses.map((course) => (
                <button
                  key={course.id}
                  className={`content-list-item ${selectedCourseId === course.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCourseId(course.id)
                    setSelectedLessonId(course.lessons[0]?.id ?? 'new')
                    setSelectedBlockId(course.lessons[0]?.blocks[0]?.id ?? null)
                  }}
                >
                  <strong>{course.title}</strong>
                  <span>{course.slug}</span>
                  <span className={`status-pill ${statusTone(course.status)}`}>{STATUS_LABELS[course.status]}</span>
                </button>
              )) : <div className="empty-inline">Chưa có course nào. Tạo course đầu tiên để bắt đầu.</div>}
            </div>
          </div>

          <div className="selector-panel">
            <div className="selector-panel-head">
              <div>
                <h3>Lessons</h3>
                <p>{selectedCourse ? `Đang thuộc ${selectedCourse.title}` : 'Chọn course trước để thêm lesson.'}</p>
              </div>
              <button className="btn" disabled={!selectedCourse} onClick={() => { setSelectedLessonId('new'); setSelectedBlockId(null) }}>
                + Tạo
              </button>
            </div>
            <div className="content-list">
              {lessons.length ? lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  className={`content-list-item ${selectedLessonId === lesson.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedLessonId(lesson.id)
                    setSelectedBlockId(lesson.blocks[0]?.id ?? 'new')
                  }}
                >
                  <strong>{lesson.title}</strong>
                  <span>{lesson.slug}</span>
                  <span className="content-meta">{lesson.estimatedMinutes} phút · {STATUS_LABELS[lesson.status]}</span>
                </button>
              )) : <div className="empty-inline">Chưa có lesson trong course này.</div>}
            </div>
          </div>

          <div className="selector-panel">
            <div className="selector-panel-head">
              <div>
                <h3>Blocks</h3>
                <p>{selectedLesson ? `Đang thuộc ${selectedLesson.title}` : 'Chọn lesson trước để thêm block.'}</p>
              </div>
              <button className="btn" disabled={!selectedLesson} onClick={() => setSelectedBlockId('new')}>
                + Tạo
              </button>
            </div>
            <div className="content-list">
              {blocks.length ? blocks.map((block) => (
                <button
                  key={block.id}
                  className={`content-list-item ${selectedBlockId === block.id ? 'active' : ''}`}
                  onClick={() => setSelectedBlockId(block.id)}
                >
                  <strong>{block.title || 'Block chưa có tiêu đề'}</strong>
                  <span>{BLOCK_LABELS[block.blockType]}</span>
                  <span className="content-meta">Thứ tự {block.sortOrder} · {block.isRequired ? 'Bắt buộc' : 'Tùy chọn'}</span>
                </button>
              )) : <div className="empty-inline">Chưa có block trong lesson này.</div>}
            </div>
          </div>
        </aside>

        <section className="content-manager-editor">
          <div className="editor-stack">
            <div className="editor-card">
              <div className="editor-card-head">
                <div>
                  <h3>{selectedCourseId === 'new' ? 'Tạo course mới' : 'Thông tin course'}</h3>
                  <p>Điền các trường cơ bản trước. Bạn có thể sửa lại sau bất kỳ lúc nào.</p>
                </div>
                {selectedCourse ? <span className={`status-pill ${statusTone(selectedCourse.status)}`}>{STATUS_LABELS[selectedCourse.status]}</span> : null}
              </div>
              <div className="editor-form-grid">
                <Field label="Tên course">
                  <input value={courseForm.title} onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })} placeholder="Ví dụ: Vibecode Web cho Marketer" />
                </Field>
                <Field label="Slug" hint="Dùng chữ thường và dấu gạch ngang.">
                  <input value={courseForm.slug} onChange={(e) => setCourseForm({ ...courseForm, slug: e.target.value })} placeholder="vibecode-web-cho-marketer" />
                </Field>
                <Field label="Mô tả ngắn" hint="Hiện ở danh sách hoặc thẻ giới thiệu khóa học.">
                  <textarea value={courseForm.shortDescription} onChange={(e) => setCourseForm({ ...courseForm, shortDescription: e.target.value })} placeholder="Mô tả ngắn gọn khóa học này dành cho ai và giúp gì." />
                </Field>
                <Field label="Cover image URL">
                  <input value={courseForm.coverImageUrl} onChange={(e) => setCourseForm({ ...courseForm, coverImageUrl: e.target.value })} placeholder="https://..." />
                </Field>
                <Field label="Trạng thái">
                  <select value={courseForm.status} onChange={(e) => setCourseForm({ ...courseForm, status: e.target.value as AdminContentStatus })}>
                    {COURSE_STATUSES.map((status) => <option key={status} value={status}>{STATUS_LABELS[status]}</option>)}
                  </select>
                </Field>
                <Field label="Thứ tự">
                  <input type="number" value={courseForm.sortOrder} onChange={(e) => setCourseForm({ ...courseForm, sortOrder: Number(e.target.value) })} />
                </Field>
              </div>
              <div className="editor-actions">
                <button className="btn btn-primary" disabled={isSaving} onClick={() => void saveCourse()}>
                  {selectedCourseId === 'new' ? 'Lưu course mới' : 'Cập nhật course'}
                </button>
                {selectedCourse ? (
                  <button
                    className="btn btn-danger"
                    disabled={isSaving}
                    onClick={() => void runSave(async () => {
                      await deleteCourse(selectedCourse.id)
                      await refresh({ courseId: null, lessonId: null, blockId: null })
                    })}
                  >
                    Xóa course
                  </button>
                ) : null}
              </div>
            </div>

            <div className={`editor-card ${!selectedCourse && selectedLessonId !== 'new' ? 'is-disabled' : ''}`}>
              <div className="editor-card-head">
                <div>
                  <h3>{selectedLessonId === 'new' ? 'Tạo lesson mới' : 'Thông tin lesson'}</h3>
                  <p>{selectedCourse ? `Lesson sẽ nằm trong course ${selectedCourse.title}.` : 'Hãy chọn course trước khi tạo lesson.'}</p>
                </div>
                {selectedLesson ? <span className={`status-pill ${statusTone(selectedLesson.status)}`}>{STATUS_LABELS[selectedLesson.status]}</span> : null}
              </div>
              <div className="editor-form-grid">
                <Field label="Tên lesson">
                  <input value={lessonForm.title} onChange={(e) => setLessonForm({ ...lessonForm, title: e.target.value })} placeholder="Ví dụ: Hiểu Vibecode là gì" disabled={!selectedCourse} />
                </Field>
                <Field label="Slug">
                  <input value={lessonForm.slug} onChange={(e) => setLessonForm({ ...lessonForm, slug: e.target.value })} placeholder="hieu-vibecode-la-gi" disabled={!selectedCourse} />
                </Field>
                <Field label="Tóm tắt lesson">
                  <textarea value={lessonForm.summary} onChange={(e) => setLessonForm({ ...lessonForm, summary: e.target.value })} placeholder="Mô tả ngắn lesson này dạy gì." disabled={!selectedCourse} />
                </Field>
                <Field label="Trạng thái">
                  <select value={lessonForm.status} onChange={(e) => setLessonForm({ ...lessonForm, status: e.target.value as AdminContentStatus })} disabled={!selectedCourse}>
                    {COURSE_STATUSES.map((status) => <option key={status} value={status}>{STATUS_LABELS[status]}</option>)}
                  </select>
                </Field>
                <Field label="Thứ tự">
                  <input type="number" value={lessonForm.sortOrder} onChange={(e) => setLessonForm({ ...lessonForm, sortOrder: Number(e.target.value) })} disabled={!selectedCourse} />
                </Field>
                <Field label="Thời lượng ước tính (phút)">
                  <input type="number" value={lessonForm.estimatedMinutes} onChange={(e) => setLessonForm({ ...lessonForm, estimatedMinutes: Number(e.target.value) })} disabled={!selectedCourse} />
                </Field>
                {selectedLesson?.previewToken ? (
                  <Field label="Preview token" hint="Dùng cho route preview lesson draft sau này.">
                    <input readOnly value={selectedLesson.previewToken} />
                  </Field>
                ) : null}
              </div>
              <div className="editor-actions">
                <button className="btn btn-primary" disabled={isSaving || !selectedCourse} onClick={() => void saveLesson()}>
                  {selectedLessonId === 'new' ? 'Lưu lesson mới' : 'Cập nhật lesson'}
                </button>
                {selectedLesson ? (
                  <button
                    className="btn btn-danger"
                    disabled={isSaving}
                    onClick={() => void runSave(async () => {
                      await deleteLesson(selectedLesson.id)
                      await refresh({ courseId: selectedCourse?.id, lessonId: null, blockId: null })
                    })}
                  >
                    Xóa lesson
                  </button>
                ) : null}
              </div>
            </div>

            <div className={`editor-card ${!selectedLesson && selectedBlockId !== 'new' ? 'is-disabled' : ''}`}>
              <div className="editor-card-head">
                <div>
                  <h3>{selectedBlockId === 'new' ? 'Tạo block mới' : 'Thông tin block'}</h3>
                  <p>{selectedLesson ? `Block sẽ nằm trong lesson ${selectedLesson.title}.` : 'Hãy chọn lesson trước khi tạo block.'}</p>
                </div>
                {selectedBlock ? <span className="status-pill neutral">{BLOCK_LABELS[selectedBlock.blockType]}</span> : null}
              </div>
              <div className="editor-form-grid">
                <Field label="Loại block">
                  <select value={blockForm.blockType} onChange={(e) => handleBlockTypeChange(e.target.value as AdminBlockType)} disabled={!selectedLesson}>
                    {BLOCK_TYPES.map((type) => <option key={type} value={type}>{BLOCK_LABELS[type]}</option>)}
                  </select>
                </Field>
                <Field label="Tiêu đề block">
                  <input value={blockForm.title} onChange={(e) => setBlockForm({ ...blockForm, title: e.target.value })} placeholder="Ví dụ: Giải thích khái niệm chính" disabled={!selectedLesson} />
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
                <Field label="content_json" hint="Có thể chèn nhanh JSON mẫu theo loại block.">
                  <textarea
                    className="editor-json"
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
                <button className="btn btn-primary" disabled={isSaving || !selectedLesson} onClick={() => void saveBlock()}>
                  {selectedBlockId === 'new' ? 'Lưu block mới' : 'Cập nhật block'}
                </button>
                {selectedBlock ? (
                  <button
                    className="btn btn-danger"
                    disabled={isSaving}
                    onClick={() => void runSave(async () => {
                      await deleteLessonBlock(selectedBlock.id)
                      await refresh({ courseId: selectedCourse?.id, lessonId: selectedLesson?.id, blockId: null })
                    })}
                  >
                    Xóa block
                  </button>
                ) : null}
              </div>
              {blockForm.blockType === 'interactive_image' ? (
                <div className="editor-note">
                  Dùng các key `image_url`, `alt`, `hotspots`. Mỗi hotspot nên có `id`, `x_percent`, `y_percent`,
                  `label`, `title`, `description`.
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
