import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

type PreviewBlock = {
  id: string
  blockType: 'text' | 'video' | 'code' | 'interactive_image'
  title: string | null
  contentJson: Record<string, unknown>
  sortOrder: number
  isRequired: boolean
}

type PreviewPayload = {
  course: {
    slug: string
    title: string
    shortDescription: string | null
  }
  lesson: {
    slug: string
    title: string
    summary: string | null
    estimatedMinutes: number
    status: 'draft' | 'published' | 'archived'
    previewToken: string
    blocks: PreviewBlock[]
  }
}

export default function LessonPreviewPage() {
  const { previewToken } = useParams<{ previewToken: string }>()
  const [payload, setPayload] = useState<PreviewPayload | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!previewToken) return

    setIsLoading(true)
    setErrorMessage(null)

    fetch(`/api/lesson-preview/${previewToken}`)
      .then(async (response) => {
        const data = await response.json().catch(() => ({}))
        if (!response.ok) {
          throw new Error((data as { message?: string }).message ?? 'Khong tai duoc lesson preview.')
        }
        return data as PreviewPayload
      })
      .then((data) => {
        setPayload(data)
        document.title = `${data.lesson.title} · Preview · markAI.vn`
      })
      .catch((error) => {
        setErrorMessage(error instanceof Error ? error.message : 'Khong tai duoc lesson preview.')
      })
      .finally(() => setIsLoading(false))
  }, [previewToken])

  if (isLoading) {
    return <div className="lesson-preview-state">Dang tai lesson preview...</div>
  }

  if (errorMessage || !payload) {
    return (
      <div className="lesson-preview-state">
        <h1>Khong mo duoc lesson preview</h1>
        <p>{errorMessage ?? 'Preview token khong hop le.'}</p>
      </div>
    )
  }

  const { course, lesson } = payload

  return (
    <div className="lesson-preview-page">
      <div className="breadcrumb-wrap">
        <div className="breadcrumb-content">
          <div className="breadcrumb">
            <Link to="/">markAI</Link>
            <span>/</span>
            <Link to="/vibecode">Preview</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink)' }}>{lesson.title}</span>
          </div>
        </div>
      </div>

      <section className="lesson-preview-hero">
        <div className="lesson-preview-hero-inner">
          <div>
            <p className="lesson-preview-kicker">Lesson preview · {lesson.status}</p>
            <h1>{lesson.title}</h1>
            <p className="lesson-preview-summary">{lesson.summary || course.shortDescription || 'Dang xem lesson draft tu admin content.'}</p>
          </div>
          <div className="lesson-preview-meta">
            <div className="lesson-preview-meta-item">
              <span>Course</span>
              <strong>{course.title}</strong>
            </div>
            <div className="lesson-preview-meta-item">
              <span>Slug</span>
              <strong>{lesson.slug}</strong>
            </div>
            <div className="lesson-preview-meta-item">
              <span>Thoi luong</span>
              <strong>{lesson.estimatedMinutes} phut</strong>
            </div>
          </div>
        </div>
      </section>

      <main className="lesson-preview-main">
        {lesson.blocks.map((block) => (
          <article key={block.id} className="lesson-preview-block">
            <div className="lesson-preview-block-head">
              <div>
                <span className="lesson-preview-block-type">{block.blockType}</span>
                <h2>{block.title || 'Block chua co tieu de'}</h2>
              </div>
              <span className="lesson-preview-block-order">#{block.sortOrder}</span>
            </div>
            <PreviewBlockContent block={block} />
          </article>
        ))}
      </main>
    </div>
  )
}

function PreviewBlockContent({ block }: { block: PreviewBlock }) {
  if (block.blockType === 'text') {
    const html = typeof block.contentJson.html === 'string' ? block.contentJson.html : ''
    return <div className="lesson-preview-richtext" dangerouslySetInnerHTML={{ __html: html }} />
  }

  if (block.blockType === 'video') {
    const videoUrl = typeof block.contentJson.video_url === 'string' ? block.contentJson.video_url : ''
    const caption = typeof block.contentJson.caption === 'string' ? block.contentJson.caption : ''
    return (
      <div className="lesson-preview-note">
        <strong>Video:</strong> {videoUrl || 'Chua co URL'}
        {caption ? <p>{caption}</p> : null}
      </div>
    )
  }

  if (block.blockType === 'code') {
    const code = typeof block.contentJson.code === 'string' ? block.contentJson.code : ''
    return <pre className="lesson-preview-code"><code>{code || '// Chua co code snippet'}</code></pre>
  }

  const imageUrl = typeof block.contentJson.image_url === 'string' ? block.contentJson.image_url : ''
  const alt = typeof block.contentJson.alt === 'string' ? block.contentJson.alt : ''
  const hotspots = Array.isArray(block.contentJson.hotspots) ? block.contentJson.hotspots : []

  return (
    <div className="lesson-preview-image-wrap">
      {imageUrl ? <img src={imageUrl} alt={alt} className="lesson-preview-image" /> : <div className="lesson-preview-note">Chua co image_url de preview.</div>}
      {hotspots.length ? (
        <ul className="lesson-preview-hotspots">
          {hotspots.map((hotspot, index) => {
            const item = hotspot as { label?: string; title?: string; description?: string }
            return (
              <li key={`${item.label ?? 'hotspot'}-${index}`}>
                <strong>{item.label ?? index + 1}. {item.title ?? 'Hotspot'}</strong>
                <span>{item.description ?? 'Chua co mo ta.'}</span>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
