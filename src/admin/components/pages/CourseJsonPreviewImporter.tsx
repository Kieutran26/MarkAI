import { useMemo, useState } from 'react'
import { parseCoursePreviewJson, type PreviewBlock, type PreviewCourse } from './course-json-preview-utils'

const SAMPLE_JSON = `{
  "course": {
    "slug": "vibecode-web",
    "title": "Vibecode Web",
    "shortDescription": "Dán JSON course vào đây để xem trước.",
    "coverImageUrl": "",
    "status": "draft",
    "sortOrder": 1,
    "lessons": []
  }
}`

export default function CourseJsonPreviewImporter() {
  const [rawJson, setRawJson] = useState(SAMPLE_JSON)
  const [previewCourse, setPreviewCourse] = useState<PreviewCourse | null>(null)
  const [selectedLessonSlug, setSelectedLessonSlug] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)

  const selectedLesson = useMemo(
    () => previewCourse?.lessons.find((lesson) => lesson.slug === selectedLessonSlug) ?? previewCourse?.lessons[0] ?? null,
    [previewCourse, selectedLessonSlug],
  )

  const loadPreview = () => {
    try {
      const nextCourse = parseCoursePreviewJson(rawJson)
      setPreviewCourse(nextCourse)
      setSelectedLessonSlug(nextCourse.lessons[0]?.slug ?? null)
      setFeedback(`Đã nạp preview: ${nextCourse.lessons.length} lesson, ${
        nextCourse.lessons.reduce((total, lesson) => total + lesson.blocks.length, 0)
      } block.`)
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : 'Không thể đọc JSON preview.')
    }
  }

  return (
    <div className="editor-card course-preview-card">
      <div className="editor-card-head">
        <div>
          <h3>Xem trước JSON course</h3>
          <p>Dán JSON từ agent, xem nội dung render ra sao trước khi import vào Neon.</p>
        </div>
        <span className="status-pill neutral">Chỉ preview · không lưu</span>
      </div>

      <div className="course-preview-shell">
        <div className="course-preview-input">
          <label className="editor-field">
            <span className="editor-field-label">Course JSON</span>
            <span className="editor-field-hint">Dùng đúng schema course - lesson - block. Phần text sẽ được kiểm tra HTML an toàn.</span>
            <textarea
              className="editor-json editor-json-lg course-preview-textarea"
              value={rawJson}
              onChange={(e) => setRawJson(e.target.value)}
            />
          </label>
          <div className="editor-actions">
            <button className="btn btn-primary" onClick={loadPreview}>Tải preview</button>
            <button
              className="btn"
              onClick={() => {
                setPreviewCourse(null)
                setSelectedLessonSlug(null)
                setFeedback('Đã xóa preview hiện tại.')
              }}
            >
              Xóa preview
            </button>
          </div>
          {feedback ? <div className="editor-note">{feedback}</div> : null}
        </div>

        <div className="course-preview-output">
          {previewCourse ? (
            <>
              <div className="course-preview-meta">
                <span className="editor-field-label">Course</span>
                <h4>{previewCourse.title}</h4>
                <p>{previewCourse.shortDescription}</p>
              </div>

              {previewCourse.lessons.length ? (
                <div className="course-preview-lessons">
                  {previewCourse.lessons.map((lesson) => (
                    <button
                      key={lesson.slug}
                      className={`content-list-item ${selectedLesson?.slug === lesson.slug ? 'active' : ''}`}
                      onClick={() => setSelectedLessonSlug(lesson.slug)}
                    >
                      <strong>{lesson.title}</strong>
                      <span>{lesson.slug}</span>
                      <span className="content-meta">{lesson.estimatedMinutes} phút · {lesson.blocks.length} block</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="empty-inline">JSON hợp lệ nhưng course này chưa có lesson nào để preview.</div>
              )}

              {selectedLesson ? (
                <div className="course-preview-lesson">
                  <div className="course-preview-lesson-head">
                    <div>
                      <span className="editor-field-label">Lesson đang xem</span>
                      <h4>{selectedLesson.title}</h4>
                    </div>
                    <span className="status-pill neutral">{selectedLesson.blocks.length} block</span>
                  </div>
                  <p className="course-preview-summary">{selectedLesson.summary}</p>

                  <div className="course-preview-blocks">
                    {selectedLesson.blocks.map((block) => (
                      <PreviewBlockCard key={`${selectedLesson.slug}-${block.sortOrder}-${block.title}`} block={block} />
                    ))}
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            <div className="editor-note">Chưa có preview. Dán JSON course rồi bấm "Tải preview" để xem lesson và block.</div>
          )}
        </div>
      </div>
    </div>
  )
}

function PreviewBlockCard({ block }: { block: PreviewBlock; key?: string }) {
  const html = typeof block.contentJson.html === 'string' ? block.contentJson.html : ''
  const videoUrl = typeof block.contentJson.video_url === 'string' ? block.contentJson.video_url : ''
  const caption = typeof block.contentJson.caption === 'string' ? block.contentJson.caption : ''
  const code = typeof block.contentJson.code === 'string' ? block.contentJson.code : ''
  const language = typeof block.contentJson.language === 'string' ? block.contentJson.language : 'text'
  const imageUrl = typeof block.contentJson.image_url === 'string' ? block.contentJson.image_url : ''
  const hotspots = Array.isArray(block.contentJson.hotspots) ? block.contentJson.hotspots : []

  return (
    <article className="course-preview-block">
      <div className="course-preview-block-head">
        <div>
          <span className="editor-field-label">{block.blockType}</span>
          <h5>{block.title || 'Block chưa có tiêu đề'}</h5>
        </div>
        <span className="course-preview-order">#{block.sortOrder}</span>
      </div>

      {block.blockType === 'text' ? <div className="course-preview-richtext" dangerouslySetInnerHTML={{ __html: html }} /> : null}
      {block.blockType === 'video' ? <div className="editor-note"><strong>Video:</strong> {videoUrl || 'Chưa có URL'} {caption ? `· ${caption}` : ''}</div> : null}
      {block.blockType === 'code' ? <pre className="course-preview-code"><code>{code || '// Chưa có code snippet'}</code></pre> : null}
      {block.blockType === 'code' ? <div className="course-preview-code-meta">Ngôn ngữ: {language}</div> : null}
      {block.blockType === 'interactive_image' ? (
        <div className="course-preview-image">
          {imageUrl ? <img src={imageUrl} alt="" /> : <div className="editor-note">Chưa có image_url để preview.</div>}
          <div className="course-preview-code-meta">Hotspots: {hotspots.length}</div>
        </div>
      ) : null}
    </article>
  )
}
