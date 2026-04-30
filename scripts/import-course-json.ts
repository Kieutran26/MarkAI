import 'dotenv/config'
import fs from 'node:fs'
import { closePool, pool } from '../server/db'

type BlockInput = {
  blockType: 'text' | 'video' | 'code' | 'interactive_image'
  title: string
  sortOrder: number
  isRequired: boolean
  contentJson: Record<string, unknown>
}

type LessonInput = {
  slug: string
  title: string
  summary: string
  status: 'draft' | 'published' | 'archived'
  sortOrder: number
  estimatedMinutes: number
  blocks: BlockInput[]
}

type CourseInput = {
  slug: string
  title: string
  shortDescription: string
  coverImageUrl: string
  status: 'draft' | 'published' | 'archived'
  sortOrder: number
  lessons: LessonInput[]
}

function readArg(name: string) {
  const entry = process.argv.find((arg) => arg.startsWith(`--${name}=`))
  return entry ? entry.slice(name.length + 3) : ''
}

function readCourseJson() {
  const filePath = readArg('file')
  if (!filePath) throw new Error('Usage: npm run import:course -- --file=path-to-course.json')
  const payload = JSON.parse(fs.readFileSync(filePath, 'utf8')) as { course?: CourseInput }
  if (!payload.course) throw new Error('JSON phai co object course o root.')
  return payload.course
}

async function upsertCourse(course: CourseInput) {
  const result = await pool.query<{ id: string }>(
    `insert into public.courses (slug, title, short_description, cover_image_url, status, sort_order)
      values ($1, $2, $3, $4, $5, $6)
      on conflict (slug) do update
      set title = excluded.title,
          short_description = excluded.short_description,
          cover_image_url = excluded.cover_image_url,
          status = excluded.status,
          sort_order = excluded.sort_order
      returning id`,
    [course.slug, course.title, course.shortDescription || null, course.coverImageUrl || null, course.status, course.sortOrder],
  )
  return result.rows[0].id
}

async function upsertLesson(courseId: string, lesson: LessonInput) {
  const result = await pool.query<{ id: string; preview_token: string }>(
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
    [courseId, lesson.slug, lesson.title, lesson.summary || null, lesson.status, lesson.sortOrder, lesson.estimatedMinutes],
  )
  return result.rows[0]
}

async function replaceBlocks(lessonId: string, blocks: BlockInput[]) {
  await pool.query('delete from public.lesson_blocks where lesson_id = $1', [lessonId])
  for (const block of blocks) {
    await pool.query(
      `insert into public.lesson_blocks (lesson_id, block_type, title, content_json, sort_order, is_required)
        values ($1, $2, $3, $4::jsonb, $5, $6)`,
      [lessonId, block.blockType, block.title || null, JSON.stringify(block.contentJson ?? {}), block.sortOrder, block.isRequired],
    )
  }
}

async function main() {
  const course = readCourseJson()
  await pool.query('begin')
  try {
    const courseId = await upsertCourse(course)
    const previewLinks: string[] = []

    for (const lesson of course.lessons) {
      const savedLesson = await upsertLesson(courseId, lesson)
      await replaceBlocks(savedLesson.id, lesson.blocks)
      previewLinks.push(`http://localhost:3000/vibecode/preview/${savedLesson.preview_token}`)
    }

    await pool.query('commit')
    console.log(`Imported course: ${course.title}`)
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
