import 'dotenv/config'
import { closePool, pool } from '../server/db'
import { lessons, type Lesson, type SubLesson as LegacySubLesson } from '../src/lib/lessons'
import { getSubLessonsByLesson, type ContentBlock, type SubLessonFull } from '../src/lib/subLessons'

type CourseRow = { id: string }
type LessonRow = { id: string }

type ReaderModule = {
  slug: string
  moduleCode: string
  title: string
  summary: string
  estimatedMinutes: number
  content: ContentBlock[]
}

function parseMinutes(value: string) {
  const match = value.match(/(\d+)/)
  return match ? Number(match[1]) : 0
}

function moduleSlug(moduleCode: string) {
  return `bai-${moduleCode.replace('.', '-')}`
}

function legacyToContentBlocks(subLesson: LegacySubLesson): ContentBlock[] {
  const blocks: ContentBlock[] = []

  subLesson.paragraphs?.forEach((text) => blocks.push({ type: 'p', text }))
  subLesson.paragraphs_extra?.forEach((text) => blocks.push({ type: 'p', text }))

  if (subLesson.contentType === 'compare' || subLesson.contentType === 'mixed') {
    const headers = subLesson.compareHeaders
    const rows = subLesson.compareRows
    if (headers && rows?.length) {
      blocks.push({
        type: 'compare',
        headers,
        rows: rows.map(([left, right]) => ({
          left,
          leftStyle: 'normal',
          right,
          rightStyle: 'normal',
        })),
      })
    }
  }

  if (subLesson.contentType === 'grid' || subLesson.contentType === 'mixed') {
    if (subLesson.gridItems?.length) {
      blocks.push({
        type: 'grid2',
        items: subLesson.gridItems.map((item) => ({
          label: item.label,
          title: item.title,
          desc: item.desc,
        })),
      })
    }
  }

  if (subLesson.contentType === 'usecases' || subLesson.contentType === 'mixed') {
    if (subLesson.useCases?.length) {
      blocks.push({
        type: 'usecases',
        items: subLesson.useCases.map((item, index) => ({
          icon: String(index + 1).padStart(2, '0'),
          title: item.title,
          desc: item.desc,
        })),
      })
    }
  }

  if (subLesson.insight) {
    blocks.push({
      type: 'insight',
      label: 'Insight',
      text: subLesson.insight,
    })
  }

  return blocks.length ? blocks : [{ type: 'p', text: subLesson.desc }]
}

function fullToModule(subLesson: SubLessonFull): ReaderModule {
  return {
    slug: subLesson.slug,
    moduleCode: subLesson.id,
    title: subLesson.title,
    summary: subLesson.desc,
    estimatedMinutes: parseMinutes(subLesson.duration) || 5,
    content: subLesson.content,
  }
}

function legacyToModule(lesson: Lesson, subLesson: LegacySubLesson): ReaderModule {
  const estimatedMinutes = Math.max(1, Math.round(parseMinutes(lesson.duration) / Math.max(lesson.subLessonCount, 1)))

  return {
    slug: moduleSlug(subLesson.id),
    moduleCode: subLesson.id,
    title: subLesson.title,
    summary: subLesson.desc,
    estimatedMinutes,
    content: legacyToContentBlocks(subLesson),
  }
}

function getModulesForLesson(lesson: Lesson) {
  const fullSubLessons = getSubLessonsByLesson(lesson.slug)
  if (fullSubLessons.length) {
    return fullSubLessons.map(fullToModule)
  }

  return lesson.subLessons.map((subLesson) => legacyToModule(lesson, subLesson))
}

async function ensureCourse() {
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
      'Lo trinh 10 bai cho marketer hoc vibecode voi shell giao dien co dinh va content thay the duoc.',
      null,
      'draft',
      1,
    ],
  )

  return result.rows[0].id
}

async function upsertLesson(courseId: string, lesson: Lesson) {
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
      returning id`,
    [courseId, lesson.slug, lesson.title, lesson.desc, 'draft', lesson.id, parseMinutes(lesson.duration)],
  )

  return result.rows[0].id
}

async function replaceModulesAndBlocks(lessonId: string, lesson: Lesson) {
  const modules = getModulesForLesson(lesson)

  await pool.query('delete from public.lesson_blocks where lesson_id = $1', [lessonId])
  await pool.query('delete from public.lesson_modules where lesson_id = $1', [lessonId])

  for (const [index, module] of modules.entries()) {
    const moduleResult = await pool.query<{ id: string }>(
      `insert into public.lesson_modules (lesson_id, slug, module_code, title, summary, status, sort_order, estimated_minutes)
        values ($1, $2, $3, $4, $5, 'draft', $6, $7)
        returning id`,
      [lessonId, module.slug, module.moduleCode, module.title, module.summary, index + 1, module.estimatedMinutes],
    )

    await pool.query(
      `insert into public.lesson_blocks (lesson_id, module_id, block_type, title, content_json, sort_order, is_required)
        values ($1, $2, 'text', $3, $4::jsonb, 1, true)`,
      [
        lessonId,
        moduleResult.rows[0].id,
        module.title,
        JSON.stringify({
          format: 'structured',
          blocks: module.content,
          source: 'hardcoded-reader-shell',
          version: 1,
        }),
      ],
    )
  }
}

async function main() {
  await pool.query('begin')

  try {
    const courseId = await ensureCourse()

    for (const lesson of lessons) {
      const lessonId = await upsertLesson(courseId, lesson)
      await replaceModulesAndBlocks(lessonId, lesson)
    }

    await pool.query('commit')
    console.log(`Migrated ${lessons.length} vibecode lessons into lesson_modules + lesson_blocks.`)
  } catch (error) {
    await pool.query('rollback')
    throw error
  } finally {
    await closePool()
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exit(1)
  })
