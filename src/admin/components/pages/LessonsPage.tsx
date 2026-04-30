'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  createCourse,
  createLesson,
  createLessonBlock,
  createLessonModule,
  deleteCourse,
  deleteLesson,
  deleteLessonBlock,
  deleteLessonModule,
  fetchAdminContentTree,
  updateLessonBlock,
} from '@/app/content/content-api'
import type { AdminBlockType, AdminContentStatus, AdminCourse, AdminLessonModule } from '@/app/content/content-types'
import ConfirmModal from '../modals/ConfirmModal'
import { parseCoursePreviewJson } from './course-json-preview-utils'

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
  interactive_image: '{\n  "image_url": "",\n  "alt": "",\n  "hotspots": []\n}',
}
const COURSE_IMPORT_SAMPLE = `{
  "course": {
    "slug": "vibecode-web",
    "title": "Vibecode Web",
    "shortDescription": "",
    "coverImageUrl": "",
    "status": "draft",
    "sortOrder": 1,
    "lessons": [
      {
        "slug": "vibecode-la-gi",
        "title": "Vibecode la gi?",
        "summary": "",
        "status": "draft",
        "sortOrder": 1,
        "estimatedMinutes": 8,
        "blocks": [
          {
            "blockType": "text",
            "title": "Mo bai",
            "sortOrder": 1,
            "isRequired": true,
            "contentJson": {
              "html": "<p>Noi dung block</p>"
            }
          }
        ]
      }
    ]
  }
}`

const newBlock = {
  blockType: 'text' as AdminBlockType,
  title: '',
  sortOrder: 1,
  isRequired: true,
  contentJsonText: BLOCK_TEMPLATES.text,
}

const stringifyJson = (value: Record<string, unknown>) => JSON.stringify(value ?? {}, null, 2)
const statusTone = (status: AdminContentStatus) => (status === 'published' ? 'live' : status === 'archived' ? 'archived' : 'draft')
const slugifyValue = (value: string) =>
  value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

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
  actionLabel,
  actionDisabled,
  onAction,
  children,
}: {
  title: string
  actionLabel?: string
  actionDisabled?: boolean
  onAction?: () => void
  children: ReactNode
}) {
  return (
    <div className="selector-panel">
      <div className="selector-panel-head">
        <h3>{title}</h3>
        {actionLabel && onAction ? <button className="btn" disabled={actionDisabled} onClick={onAction}>{actionLabel}</button> : null}
      </div>
      <div className="content-list">{children}</div>
    </div>
  )
}

export default function LessonsPage({ mode = 'structure' }: { mode?: LessonsPageMode }) {
  const [courses, setCourses] = useState<AdminCourse[]>([])
  const [selectedCourseId, setSelectedCourseId] = useState<EditorMode>(null)
  const [selectedLessonId, setSelectedLessonId] = useState<EditorMode>(null)
  const [selectedModuleId, setSelectedModuleId] = useState<EditorMode>(null)
  const [selectedBlockId, setSelectedBlockId] = useState<EditorMode>(null)
  const [blockForm, setBlockForm] = useState(newBlock)
  const [courseImportJson, setCourseImportJson] = useState(COURSE_IMPORT_SAMPLE)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [searchParams] = useSearchParams()
  const [confirmState, setConfirmState] = useState<{ isOpen: boolean; title: string; message: string; onConfirm: () => void | Promise<void> }>({
    isOpen: false, title: '', message: '', onConfirm: () => {},
  })

  const selectedCourse = selectedCourseId ? courses.find((course) => course.id === selectedCourseId) ?? null : null
  const lessons = selectedCourse?.lessons ?? []
  const selectedLesson = selectedLessonId ? lessons.find((lesson) => lesson.id === selectedLessonId) ?? null : null
  const modules = selectedLesson?.modules ?? []
  const selectedModule = selectedModuleId ? modules.find((module) => module.id === selectedModuleId) ?? null : null
  const blocks = selectedModule?.blocks ?? []
  const selectedBlock = selectedBlockId ? blocks.find((block) => block.id === selectedBlockId) ?? null : null

  const summary = useMemo(() => ({
    courseCount: courses.length,
    lessonCount: courses.reduce((total, course) => total + course.lessons.length, 0),
    moduleCount: courses.reduce((total, course) => total + course.lessons.reduce((lessonTotal, lesson) => lessonTotal + lesson.modules.length, 0), 0),
    blockCount: courses.reduce((total, course) => total + course.lessons.reduce((lessonTotal, lesson) => lessonTotal + lesson.modules.reduce((moduleTotal, module) => moduleTotal + module.blocks.length, 0), 0), 0),
  }), [courses])

  const refresh = async (next?: { courseId?: EditorMode; lessonId?: EditorMode; moduleId?: EditorMode; blockId?: EditorMode }) => {
    const tree = await fetchAdminContentTree()
    setCourses(tree.courses)
    const nextCourse = tree.courses.find((course) => course.id === next?.courseId) ?? tree.courses[0] ?? null
    const nextLesson = nextCourse?.lessons.find((lesson) => lesson.id === next?.lessonId) ?? nextCourse?.lessons[0] ?? null
    const nextModule = nextLesson?.modules.find((module) => module.id === next?.moduleId) ?? nextLesson?.modules[0] ?? null
    const nextBlock = nextModule?.blocks.find((block) => block.id === next?.blockId) ?? nextModule?.blocks[0] ?? null

    setSelectedCourseId(nextCourse?.id ?? null)
    setSelectedLessonId(nextLesson?.id ?? null)
    setSelectedModuleId(nextModule?.id ?? null)
    setSelectedBlockId(nextBlock?.id ?? null)
  }

  useEffect(() => {
    void refresh({
      courseId: searchParams.get('courseId') || undefined,
      lessonId: searchParams.get('lessonId') || undefined,
      moduleId: searchParams.get('moduleId') || undefined,
      blockId: searchParams.get('blockId') || undefined,
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
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : 'Có lỗi xảy ra.')
    } finally {
      setIsSaving(false)
    }
  }

  const quickCreateCourse = () => void runSave(async () => {
    const title = window.prompt('Tên course mới?')?.trim() ?? ''
    if (!title) return
    const result = await createCourse({ slug: slugifyValue(title), title, shortDescription: '', coverImageUrl: '', status: 'draft', sortOrder: courses.length + 1 })
    await refresh({ courseId: result.item.id })
    setFeedback('Đã tạo course mới.')
  })

  const quickCreateLesson = (courseId: string) => void runSave(async () => {
    const title = window.prompt('Tên bài (lesson) mới?')?.trim() ?? ''
    if (!title) return
    const course = courses.find((item) => item.id === courseId)
    const result = await createLesson({
      courseId, slug: slugifyValue(title), title, summary: '', status: 'draft', sortOrder: (course?.lessons.length ?? 0) + 1, estimatedMinutes: 15,
    })
    await refresh({ courseId, lessonId: result.item.id })
    setFeedback('Đã tạo lesson mới.')
  })

  const quickCreateModule = (lessonId: string, lessonSortOrder: number, lessonModules: AdminLessonModule[]) => void runSave(async () => {
    const title = window.prompt('Tên module mới?')?.trim() ?? ''
    if (!title) return
    const nextSort = lessonModules.length + 1
    const result = await createLessonModule({
      lessonId,
      slug: `bai-${lessonSortOrder}-${nextSort}`,
      moduleCode: `${lessonSortOrder}.${nextSort}`,
      title,
      summary: '',
      status: 'draft',
      sortOrder: nextSort,
      estimatedMinutes: 5,
    })
    await refresh({ courseId: selectedCourse?.id, lessonId, moduleId: result.item.id })
    setFeedback('Đã tạo module mới.')
  })

  const saveBlock = () => void runSave(async () => {
    if (!selectedLesson || !selectedModule) throw new Error('Hãy chọn module trước.')
    const contentJson = JSON.parse(blockForm.contentJsonText || '{}') as Record<string, unknown>
    if (!selectedBlockId) {
      const result = await createLessonBlock({
        lessonId: selectedLesson.id,
        moduleId: selectedModule.id,
        blockType: blockForm.blockType,
        title: blockForm.title,
        contentJson,
        sortOrder: blockForm.sortOrder,
        isRequired: blockForm.isRequired,
      })
      await refresh({ courseId: selectedCourse?.id, lessonId: selectedLesson.id, moduleId: selectedModule.id, blockId: result.item.id })
      setFeedback('Đã tạo block mới.')
      return
    }

    await updateLessonBlock({
      id: selectedBlockId,
      lessonId: selectedLesson.id,
      moduleId: selectedModule.id,
      blockType: blockForm.blockType,
      title: blockForm.title,
      contentJson,
      sortOrder: blockForm.sortOrder,
      isRequired: blockForm.isRequired,
    })
    await refresh({ courseId: selectedCourse?.id, lessonId: selectedLesson.id, moduleId: selectedModule.id, blockId: selectedBlockId })
    setFeedback('Đã lưu block.')
  })

  const importCourseJsonIntoModule = () => void runSave(async () => {
    if (!selectedLesson || !selectedModule) throw new Error('Hãy chọn module đích trước khi import.')
    const parsedCourse = parseCoursePreviewJson(courseImportJson)
    const sourceLesson = parsedCourse.lessons.find((lesson) => lesson.slug === selectedLesson.slug) ?? (parsedCourse.lessons.length === 1 ? parsedCourse.lessons[0] : null)
    if (!sourceLesson) throw new Error(`Không tìm thấy lesson slug "${selectedLesson.slug}" trong JSON.`)

    for (const block of selectedModule.blocks) {
      await deleteLessonBlock(block.id)
    }

    for (const block of sourceLesson.blocks) {
      await createLessonBlock({
        lessonId: selectedLesson.id,
        moduleId: selectedModule.id,
        blockType: block.blockType,
        title: block.title,
        contentJson: block.contentJson,
        sortOrder: block.sortOrder,
        isRequired: block.isRequired,
      })
    }

    await refresh({ courseId: selectedCourse?.id, lessonId: selectedLesson.id, moduleId: selectedModule.id })
    setFeedback(`Đã import ${sourceLesson.blocks.length} block vào module ${selectedModule.moduleCode}.`)
  })

  const askDelete = (title: string, message: string, task: () => Promise<void>) => {
    setConfirmState({ isOpen: true, title, message, onConfirm: () => runSave(task) })
  }

  if (isLoading) {
    return <div className="page"><div className="section-header"><span className="section-header-title"><strong>Đang tải</strong> · Trình quản lý nội dung Vibecode</span></div></div>
  }

  return (
    <div className="page" id="page-lessons">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title"><strong>Nội dung Vibecode</strong> · lesson -&gt; module -&gt; block</span>
          <div className="section-header-spacer" />
          <button className="section-header-action" onClick={quickCreateCourse}>+ Course mới</button>
        </div>
      </div>

      {feedback ? <div className="alert-bar"><span className="alert-bar-text">{feedback}</span></div> : null}

      <div className="manager-switch">
        <Link className={`manager-switch-link ${mode === 'structure' ? 'active' : ''}`} href="/lessons/structure">1. Quản lý bài học và module</Link>
        <Link className={`manager-switch-link ${mode === 'content' ? 'active' : ''}`} href="/lessons/editor">2. Soạn nội dung chi tiết</Link>
      </div>

      {mode === 'structure' ? (
        <section className="lesson-structure-shell">
          <div className="manager-stats">
            <div className="manager-stat-card"><strong>{summary.courseCount}</strong><span>course</span></div>
            <div className="manager-stat-card"><strong>{summary.lessonCount}</strong><span>lesson</span></div>
            <div className="manager-stat-card"><strong>{summary.moduleCount}</strong><span>module</span></div>
            <div className="manager-stat-card"><strong>{summary.blockCount}</strong><span>block</span></div>
          </div>

          <div className="editor-card lesson-structure-card">
            <div className="editor-card-head">
              <div><h3>Tất cả bài học Vibecode</h3><p>Module 1.1, 1.2, 1.3 là thực thể riêng. Block chỉ là nội dung bên trong module.</p></div>
              <button className="btn btn-primary" disabled={isSaving} onClick={quickCreateCourse}>+ Tạo course</button>
            </div>

            <div className="lesson-structure-list">
              {courses.map((course) => (
                <article key={course.id} className="lesson-structure-course">
                  <div className="lesson-structure-course-head">
                    <div><div className="lesson-structure-kicker">Course</div><h4>{course.sortOrder}. {course.title}</h4><p>{course.shortDescription || course.slug}</p></div>
                    <div className="lesson-structure-course-actions">
                      <span className={`status-pill ${statusTone(course.status)}`}>{STATUS_LABELS[course.status]}</span>
                      <button className="btn" disabled={isSaving} onClick={() => quickCreateLesson(course.id)}>+ Tạo lesson</button>
                      <button className="btn btn-danger" disabled={isSaving} onClick={() => askDelete('Xóa Course', `Xác nhận xóa course "${course.title}"?`, async () => { await deleteCourse(course.id); await refresh(); })}>Xóa</button>
                    </div>
                  </div>

                  {(course.lessons ?? []).map((lesson) => (
                    <div key={lesson.id} className="lesson-structure-lesson">
                      <div className="lesson-structure-lesson-head">
                        <div><div className="lesson-structure-kicker">Lesson {String(lesson.sortOrder).padStart(2, '0')}</div><h5>{lesson.sortOrder}. {lesson.title}</h5><p>{lesson.summary || lesson.slug}</p></div>
                        <div className="lesson-structure-lesson-meta">
                          <span className={`status-pill ${statusTone(lesson.status)}`}>{STATUS_LABELS[lesson.status]}</span>
                          <button className="btn" disabled={isSaving} onClick={() => quickCreateModule(lesson.id, lesson.sortOrder, lesson.modules)}>+ Tạo module</button>
                          <button className="btn btn-danger" disabled={isSaving} onClick={() => askDelete('Xóa Lesson', `Xác nhận xóa lesson "${lesson.title}"?`, async () => { await deleteLesson(lesson.id); await refresh({ courseId: course.id }); })}>Xóa</button>
                        </div>
                      </div>

                      <div className="lesson-structure-blocks">
                        {lesson.modules.map((module) => (
                          <div key={module.id} className="lesson-structure-block">
                            <strong>{module.moduleCode} {module.title}</strong>
                            <span>Module · {module.blocks.length} block</span>
                            <span className="content-meta">{module.estimatedMinutes} phút</span>
                            <div className="lesson-structure-block-actions" style={{ marginTop: 'auto', display: 'flex', gap: '4px' }}>
                              <a href={`/vibecode/${lesson.slug}/${module.slug}`} target="_blank" className="btn" style={{ flex: 1, padding: '4px 8px', fontSize: '9px', textAlign: 'center' }}>Xem</a>
                              <a href={`/admin/lessons/editor?courseId=${course.id}&lessonId=${lesson.id}&moduleId=${module.id}`} className="btn" style={{ flex: 1, padding: '4px 8px', fontSize: '9px', textAlign: 'center' }}>Sửa</a>
                              <button className="btn btn-danger" style={{ flex: 1, padding: '4px 8px', fontSize: '9px' }} disabled={isSaving} onClick={() => askDelete('Xóa Module', `Xác nhận xóa module "${module.title}"?`, async () => { await deleteLessonModule(module.id); await refresh({ courseId: course.id, lessonId: lesson.id }); })}>Xóa</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="content-manager-shell content-manager-shell-editor">
          <aside className="content-manager-sidebar">
            <SelectorPanel title="Lessons">
              {lessons.map((lesson) => (
                <button key={lesson.id} className={`content-list-item ${selectedLessonId === lesson.id ? 'active' : ''}`} onClick={() => { setSelectedLessonId(lesson.id); setSelectedModuleId(lesson.modules[0]?.id ?? null); setSelectedBlockId(lesson.modules[0]?.blocks[0]?.id ?? null); }}>
                  <strong>{lesson.sortOrder}. {lesson.title}</strong>
                  <span>{lesson.slug}</span>
                  <span className="content-meta">{lesson.modules.length} module</span>
                </button>
              ))}
            </SelectorPanel>

            <SelectorPanel title="Modules" actionLabel="+ Tạo" actionDisabled={!selectedLesson} onAction={() => selectedLesson && quickCreateModule(selectedLesson.id, selectedLesson.sortOrder, selectedLesson.modules)}>
              {modules.map((module) => (
                <button key={module.id} className={`content-list-item ${selectedModuleId === module.id ? 'active' : ''}`} onClick={() => { setSelectedModuleId(module.id); setSelectedBlockId(module.blocks[0]?.id ?? null) }}>
                  <strong>{module.moduleCode} {module.title}</strong>
                  <span>{module.slug}</span>
                  <span className="content-meta">{module.blocks.length} block · {module.estimatedMinutes} phút</span>
                </button>
              ))}
            </SelectorPanel>

            <SelectorPanel title="Blocks" actionLabel="+ Tạo" actionDisabled={!selectedModule} onAction={() => setSelectedBlockId(null)}>
              {blocks.map((block) => (
                <button key={block.id} className={`content-list-item ${selectedBlockId === block.id ? 'active' : ''}`} onClick={() => setSelectedBlockId(block.id)}>
                  <strong>{selectedModule?.moduleCode}.{block.sortOrder} {block.title || 'Block chưa có tiêu đề'}</strong>
                  <span>{BLOCK_LABELS[block.blockType]}</span>
                </button>
              ))}
            </SelectorPanel>
          </aside>

          <section className="content-manager-editor">
            <div className="editor-stack">
              <div className="editor-card">
                <div className="editor-card-head">
                  <div><h3>Soạn nội dung chi tiết</h3><p>Chọn lesson, module rồi mới chọn block. Import JSON sẽ đi vào module đang chọn.</p></div>
                  {selectedModule ? <span className="status-pill neutral">Module {selectedModule.moduleCode}</span> : null}
                </div>
                <div className="detail-context-grid">
                  <div className="detail-context-card"><span className="editor-field-label">Khóa học</span><strong>{selectedCourse?.title ?? 'Chưa chọn'}</strong><span>{selectedCourse?.slug ?? 'Chọn course ở cột trái.'}</span></div>
                  <div className="detail-context-card"><span className="editor-field-label">Lesson</span><strong>{selectedLesson?.title ?? 'Chưa chọn'}</strong><span>{selectedLesson?.slug ?? 'Chọn lesson trước.'}</span></div>
                  <div className="detail-context-card"><span className="editor-field-label">Module</span><strong>{selectedModule?.title ?? 'Chưa chọn'}</strong><span>{selectedModule ? `${selectedModule.moduleCode} · ${selectedModule.blocks.length} block` : 'Chọn module trước.'}</span></div>
                </div>
              </div>

              <div className={`editor-card ${!selectedModule ? 'is-disabled' : ''}`}>
                <div className="editor-card-head">
                  <div><h3>Import full course JSON</h3><p>Chỉ import block vào module đang chọn. Module 1.1, 1.2 được quản lý riêng, không bị tạo lại.</p></div>
                  {selectedModule ? <span className="status-pill neutral">Đích: {selectedModule.moduleCode}</span> : null}
                </div>
                <Field label="Course JSON đầy đủ" hint={selectedLesson ? `Sẽ lấy lesson slug "${selectedLesson.slug}" trong JSON, rồi import blocks vào module ${selectedModule?.moduleCode ?? ''}.` : 'Chọn lesson/module trước khi import.'}>
                  <textarea className="editor-json editor-json-lg" value={courseImportJson} onChange={(e) => setCourseImportJson(e.target.value)} disabled={!selectedModule} />
                </Field>
                <div className="editor-actions">
                  <button className="btn" disabled={!selectedModule} onClick={() => setCourseImportJson(COURSE_IMPORT_SAMPLE)}>Chèn JSON mẫu</button>
                  <button className="btn btn-primary" disabled={isSaving || !selectedModule} onClick={importCourseJsonIntoModule}>Import vào module này</button>
                </div>
              </div>

              <div className={`editor-card ${!selectedModule ? 'is-disabled' : ''}`}>
                <div className="editor-card-head">
                  <div><h3>{selectedBlockId ? 'Soạn nội dung block' : 'Tạo block mới'}</h3><p>Block chỉ là nội dung bên trong module đang chọn.</p></div>
                </div>
                <div className="editor-form-grid">
                  <Field label="Loại block">
                    <select value={blockForm.blockType} onChange={(e) => setBlockForm({ ...blockForm, blockType: e.target.value as AdminBlockType, contentJsonText: BLOCK_TEMPLATES[e.target.value as AdminBlockType] })} disabled={!selectedModule}>
                      {BLOCK_TYPES.map((type) => <option key={type} value={type}>{BLOCK_LABELS[type]}</option>)}
                    </select>
                  </Field>
                  <Field label="Tiêu đề block">
                    <input value={blockForm.title} onChange={(e) => setBlockForm({ ...blockForm, title: e.target.value })} disabled={!selectedModule} />
                  </Field>
                  <Field label="Thứ tự">
                    <input type="number" value={blockForm.sortOrder} onChange={(e) => setBlockForm({ ...blockForm, sortOrder: Number(e.target.value) })} disabled={!selectedModule} />
                  </Field>
                  <Field label="Bắt buộc">
                    <select value={blockForm.isRequired ? 'yes' : 'no'} onChange={(e) => setBlockForm({ ...blockForm, isRequired: e.target.value === 'yes' })} disabled={!selectedModule}>
                      <option value="yes">Có</option>
                      <option value="no">Không</option>
                    </select>
                  </Field>
                  <Field label="content_json">
                    <textarea className="editor-json editor-json-lg" value={blockForm.contentJsonText} onChange={(e) => setBlockForm({ ...blockForm, contentJsonText: e.target.value })} disabled={!selectedModule} />
                  </Field>
                </div>
                <div className="editor-actions">
                  <button className="btn" disabled={!selectedModule} onClick={() => setBlockForm({ ...blockForm, contentJsonText: BLOCK_TEMPLATES[blockForm.blockType] })}>Chèn JSON mẫu</button>
                  <button className="btn btn-primary" disabled={isSaving || !selectedModule} onClick={saveBlock}>{selectedBlockId ? 'Lưu block' : 'Tạo block'}</button>
                  {selectedBlock ? <button className="btn btn-danger" disabled={isSaving} onClick={() => askDelete('Xóa Block', `Xác nhận xóa block "${selectedBlock.title || 'không tiêu đề'}"?`, async () => { await deleteLessonBlock(selectedBlock.id); await refresh({ courseId: selectedCourse?.id, lessonId: selectedLesson?.id, moduleId: selectedModule?.id }); })}>Xóa block</button> : null}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      <ConfirmModal isOpen={confirmState.isOpen} title={confirmState.title} message={confirmState.message} onConfirm={confirmState.onConfirm} onClose={() => setConfirmState((state) => ({ ...state, isOpen: false }))} />
    </div>
  )
}
