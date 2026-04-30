import { pool } from '../db';

type PublicLessonRow = {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  estimated_minutes: number;
  sort_order: number;
};

type PublicModuleRow = {
  id: string;
  lesson_id: string;
  slug: string;
  module_code: string;
  title: string;
  summary: string | null;
  sort_order: number;
  estimated_minutes: number;
};

type PublicBlockRow = {
  id: string;
  module_id: string;
  title: string | null;
  content_json: Record<string, unknown>;
  sort_order: number;
};

export async function getPublicLessonBySlug(lessonSlug: string) {
  const lessonResult = await pool.query<PublicLessonRow>(
    `select id, slug, title, summary, estimated_minutes, sort_order
      from public.lessons
      where slug = $1
      order by updated_at desc
      limit 1`,
    [lessonSlug],
  );

  const lesson = lessonResult.rows[0];
  if (!lesson) return null;

  const modulesResult = await pool.query<PublicModuleRow>(
    `select id, lesson_id, slug, module_code, title, summary, sort_order, estimated_minutes
      from public.lesson_modules
      where lesson_id = $1
      order by sort_order asc, created_at asc`,
    [lesson.id],
  );

  const blocksResult = await pool.query<PublicBlockRow>(
    `select id, module_id, title, content_json, sort_order
      from public.lesson_blocks
      where module_id in (select id from public.lesson_modules where lesson_id = $1)
      order by sort_order asc, created_at asc`,
    [lesson.id],
  );

  const blocksByModule = new Map<string, PublicBlockRow[]>();
  for (const block of blocksResult.rows) {
    const bucket = blocksByModule.get(block.module_id) ?? [];
    bucket.push(block);
    blocksByModule.set(block.module_id, bucket);
  }

  return {
    lesson: {
      id: lesson.id,
      slug: lesson.slug,
      title: lesson.title,
      summary: lesson.summary,
      estimatedMinutes: lesson.estimated_minutes,
      sortOrder: lesson.sort_order,
      modules: modulesResult.rows.map((module) => ({
        id: module.id,
        lessonId: module.lesson_id,
        slug: module.slug,
        moduleCode: module.module_code,
        title: module.title,
        summary: module.summary,
        sortOrder: module.sort_order,
        estimatedMinutes: module.estimated_minutes,
        blocks: (blocksByModule.get(module.id) ?? []).map((block) => ({
          id: block.id,
          title: block.title,
          contentJson: block.content_json ?? {},
          sortOrder: block.sort_order,
        })),
      })),
    },
  };
}
