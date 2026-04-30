import { pool } from '../db'

type PreviewCourseRow = {
  course_slug: string
  course_title: string
  short_description: string | null
  lesson_slug: string
  lesson_title: string
  lesson_summary: string | null
  estimated_minutes: number
  lesson_status: 'draft' | 'published' | 'archived'
  preview_token: string
}

type PreviewBlockRow = {
  id: string
  block_type: 'text' | 'video' | 'code' | 'interactive_image'
  title: string | null
  content_json: Record<string, unknown>
  sort_order: number
  is_required: boolean
}

export async function getLessonPreviewByToken(previewToken: string) {
  const lessonResult = await pool.query<PreviewCourseRow>(
    `select
        c.slug as course_slug,
        c.title as course_title,
        c.short_description,
        l.slug as lesson_slug,
        l.title as lesson_title,
        l.summary as lesson_summary,
        l.estimated_minutes,
        l.status as lesson_status,
        l.preview_token::text as preview_token
      from public.lessons l
      join public.courses c on c.id = l.course_id
      where l.preview_token = $1::uuid
      limit 1`,
    [previewToken],
  )

  const lesson = lessonResult.rows[0]
  if (!lesson) return null

  const blocksResult = await pool.query<PreviewBlockRow>(
    `select id, block_type, title, content_json, sort_order, is_required
      from public.lesson_blocks
      where lesson_id = (
        select id from public.lessons where preview_token = $1::uuid limit 1
      )
      order by sort_order asc, created_at asc`,
    [previewToken],
  )

  return {
    course: {
      slug: lesson.course_slug,
      title: lesson.course_title,
      shortDescription: lesson.short_description,
    },
    lesson: {
      slug: lesson.lesson_slug,
      title: lesson.lesson_title,
      summary: lesson.lesson_summary,
      estimatedMinutes: lesson.estimated_minutes,
      status: lesson.lesson_status,
      previewToken: lesson.preview_token,
      blocks: blocksResult.rows.map((block) => ({
        id: block.id,
        blockType: block.block_type,
        title: block.title,
        contentJson: block.content_json ?? {},
        sortOrder: block.sort_order,
        isRequired: block.is_required,
      })),
    },
  }
}
