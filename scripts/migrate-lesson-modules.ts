import 'dotenv/config'
import { lessons } from '../src/lib/lessons'
import { closePool, pool } from '../server/db'

type LessonDbRow = { id: string; slug: string; sort_order: number }
type BlockRow = { id: string; title: string | null; sort_order: number; content_json: Record<string, unknown> }
type ModuleRow = { id: string }

function moduleSlug(moduleCode: string) {
  return `bai-${moduleCode.replace('.', '-')}`
}

async function ensureSchema() {
  await pool.query(`
    create table if not exists public.lesson_modules (
      id uuid primary key default gen_random_uuid(),
      lesson_id uuid not null references public.lessons(id) on delete cascade,
      slug text not null,
      module_code text not null,
      title text not null,
      summary text,
      status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
      sort_order integer not null default 0,
      estimated_minutes integer not null default 0 check (estimated_minutes >= 0),
      created_at timestamptz not null default timezone('utc', now()),
      updated_at timestamptz not null default timezone('utc', now()),
      constraint lesson_modules_lesson_slug_unique unique (lesson_id, slug),
      constraint lesson_modules_lesson_code_unique unique (lesson_id, module_code)
    );
  `)
  await pool.query(`alter table public.lesson_blocks add column if not exists module_id uuid references public.lesson_modules(id) on delete cascade;`)
}

async function main() {
  await pool.query('begin')
  try {
    await ensureSchema()

    const lessonRows = await pool.query<LessonDbRow>('select id, slug, sort_order from public.lessons order by sort_order asc')

    for (const lessonRow of lessonRows.rows) {
      const staticLesson = lessons.find((item) => item.slug === lessonRow.slug)
      if (!staticLesson) continue

      const blocksResult = await pool.query<BlockRow>(
        'select id, title, sort_order, content_json from public.lesson_blocks where lesson_id = $1 order by sort_order asc, created_at asc',
        [lessonRow.id],
      )

      const hasModuleLinks = blocksResult.rows.some((row) => row.content_json && typeof row.content_json.source_sub_lesson_id === 'string')

      for (const [index, subLesson] of staticLesson.subLessons.entries()) {
        const savedModule = await pool.query<ModuleRow>(
          `insert into public.lesson_modules (lesson_id, slug, module_code, title, summary, status, sort_order, estimated_minutes)
            values ($1, $2, $3, $4, $5, 'draft', $6, $7)
            on conflict (lesson_id, slug) do update
            set module_code = excluded.module_code,
                title = excluded.title,
                summary = excluded.summary,
                sort_order = excluded.sort_order,
                estimated_minutes = excluded.estimated_minutes
            returning id`,
          [lessonRow.id, moduleSlug(subLesson.id), subLesson.id, subLesson.title, subLesson.desc, index + 1, 5],
        )

        const moduleId = savedModule.rows[0].id

        if (hasModuleLinks) {
          await pool.query(
            `update public.lesson_blocks
              set module_id = $2
              where lesson_id = $1 and content_json ->> 'source_sub_lesson_id' = $3`,
            [lessonRow.id, moduleId, subLesson.id],
          )
        } else if (index === 0) {
          await pool.query(
            `update public.lesson_blocks
              set module_id = $2
              where lesson_id = $1 and module_id is null`,
            [lessonRow.id, moduleId],
          )
        }
      }
    }

    await pool.query('commit')
    console.log('Backfilled lesson_modules and linked lesson_blocks.module_id successfully.')
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
