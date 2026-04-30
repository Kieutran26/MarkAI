import 'dotenv/config'
import { lessons, type SubLesson } from '../src/lib/lessons'
import { closePool, pool } from '../server/db'

type CourseRow = { id: string }
type LessonRow = { id: string; preview_token: string }

function parseMinutes(duration: string) {
  const match = duration.match(/(\d+)/)
  return match ? Number(match[1]) : 0
}

function renderCompare(subLesson: SubLesson) {
  if (!subLesson.compareHeaders || !subLesson.compareRows?.length) return ''
  const [leftHeader, rightHeader] = subLesson.compareHeaders
  const rows = subLesson.compareRows
    .map(
      (row) =>
        `<li><strong>${leftHeader}:</strong> ${row[0]}<br><strong>${rightHeader}:</strong> ${row[1]}</li>`,
    )
    .join('')
  return `<ul>${rows}</ul>`
}

function renderGrid(subLesson: SubLesson) {
  if (!subLesson.gridItems?.length) return ''
  const items = subLesson.gridItems
    .map((item) => `<li><strong>${item.label} · ${item.title}</strong><br>${item.desc}</li>`)
    .join('')
  return `<ul>${items}</ul>`
}

function renderUseCases(subLesson: SubLesson) {
  if (!subLesson.useCases?.length) return ''
  const items = subLesson.useCases
    .map((item) => `<li><strong>${item.title}</strong><br>${item.desc}</li>`)
    .join('')
  return `<ul>${items}</ul>`
}

function renderTextBlockHtml(subLesson: SubLesson) {
  const parts: string[] = [
    `<p><strong>${subLesson.eyebrow}</strong></p>`,
    `<p>${subLesson.desc}</p>`,
  ]

  subLesson.paragraphs?.forEach((paragraph) => parts.push(`<p>${paragraph}</p>`))
  subLesson.paragraphs_extra?.forEach((paragraph) => parts.push(`<p>${paragraph}</p>`))

  if (subLesson.contentType === 'compare') parts.push(renderCompare(subLesson))
  if (subLesson.contentType === 'grid') parts.push(renderGrid(subLesson))
  if (subLesson.contentType === 'usecases') parts.push(renderUseCases(subLesson))
  if (subLesson.contentType === 'mixed') {
    parts.push(renderGrid(subLesson))
    parts.push(renderCompare(subLesson))
    parts.push(renderUseCases(subLesson))
  }

  if (subLesson.insight) parts.push(`<blockquote>${subLesson.insight}</blockquote>`)

  return parts.filter(Boolean).join('')
}

async function upsertCourse() {
  const result = await pool.query<CourseRow>(
    `insert into public.courses (slug, title, short_description, cover_image_url, status, sort_order)
      values ($1, $2, $3, $4, $5, $6)
      on conflict (slug) do update
      set title = excluded.title,
          short_description = excluded.short_description,
          cover_image_url = excluded.cover_image_url,
          status = excluded.status,
          sort_order = excluded.sort_order
      returning id`,
    [
      'vibecode-web',
      'Vibecode Web',
      'Lo trinh 10 bai cho marketer hoc vibecode tu zero den luc co the tu build, debug va deploy san pham web.',
      null,
      'draft',
      1,
    ],
  )

  return result.rows[0].id
}

async function upsertLesson(courseId: string, lesson: (typeof lessons)[number]) {
  const result = await pool.query<LessonRow>(
    `insert into public.lessons (course_id, slug, title, summary, status, preview_updated_at, sort_order, estimated_minutes)
      values ($1, $2, $3, $4, $5, timezone('utc', now()), $6, $7)
      on conflict (course_id, slug) do update
      set title = excluded.title,
          summary = excluded.summary,
          status = excluded.status,
          preview_updated_at = timezone('utc', now()),
          sort_order = excluded.sort_order,
          estimated_minutes = excluded.estimated_minutes
      returning id, preview_token::text`,
    [courseId, lesson.slug, lesson.title, lesson.desc, 'draft', lesson.id, parseMinutes(lesson.duration)],
  )

  return result.rows[0]
}

async function replaceLessonBlocks(lessonId: string, lesson: (typeof lessons)[number]) {
  await pool.query('delete from public.lesson_blocks where lesson_id = $1', [lessonId])

  for (const [index, subLesson] of lesson.subLessons.entries()) {
    await pool.query(
      `insert into public.lesson_blocks (lesson_id, block_type, title, content_json, sort_order, is_required)
        values ($1, 'text', $2, $3::jsonb, $4, true)`,
      [
        lessonId,
        subLesson.title,
        JSON.stringify({
          html: renderTextBlockHtml(subLesson),
          source_sub_lesson_id: subLesson.id,
          eyebrow: subLesson.eyebrow,
          description: subLesson.desc,
          content_type: subLesson.contentType,
        }),
        index + 1,
      ],
    )
  }
}

async function main() {
  await pool.query('begin')

  try {
    const courseId = await upsertCourse()
    const previewLinks: string[] = []

    for (const lesson of lessons) {
      const savedLesson = await upsertLesson(courseId, lesson)
      await replaceLessonBlocks(savedLesson.id, lesson)
      previewLinks.push(`http://localhost:3000/vibecode/preview/${savedLesson.preview_token}`)
    }

    await pool.query('commit')

    console.log(`Migrated ${lessons.length} lessons into Neon for course vibecode-web.`)
    previewLinks.forEach((link) => console.log(link))
  } catch (error) {
    await pool.query('rollback')
    throw error
  } finally {
    await closePool()
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
