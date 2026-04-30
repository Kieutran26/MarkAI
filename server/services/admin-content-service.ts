import { pool } from '../db';

export type AdminCourseRecord = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string | null;
  coverImageUrl: string | null;
  status: 'draft' | 'published' | 'archived';
  sortOrder: number;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type AdminLessonRecord = {
  id: string;
  courseId: string;
  slug: string;
  title: string;
  summary: string | null;
  status: 'draft' | 'published' | 'archived';
  previewToken: string | null;
  previewUpdatedAt: string | null;
  sortOrder: number;
  estimatedMinutes: number;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type AdminLessonBlockRecord = {
  id: string;
  lessonId: string;
  blockType: 'text' | 'video' | 'code' | 'interactive_image';
  title: string | null;
  contentJson: Record<string, unknown>;
  sortOrder: number;
  isRequired: boolean;
  createdAt: string;
  updatedAt: string;
};

type DbCourseRow = {
  id: string;
  slug: string;
  title: string;
  short_description: string | null;
  cover_image_url: string | null;
  status: 'draft' | 'published' | 'archived';
  sort_order: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

type DbLessonRow = {
  id: string;
  course_id: string;
  slug: string;
  title: string;
  summary: string | null;
  status: 'draft' | 'published' | 'archived';
  preview_token: string | null;
  preview_updated_at: string | null;
  sort_order: number;
  estimated_minutes: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

type DbBlockRow = {
  id: string;
  lesson_id: string;
  block_type: 'text' | 'video' | 'code' | 'interactive_image';
  title: string | null;
  content_json: Record<string, unknown>;
  sort_order: number;
  is_required: boolean;
  created_at: string;
  updated_at: string;
};

function mapCourse(row: DbCourseRow): AdminCourseRecord {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    shortDescription: row.short_description,
    coverImageUrl: row.cover_image_url,
    status: row.status,
    sortOrder: row.sort_order,
    publishedAt: row.published_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function mapLesson(row: DbLessonRow): AdminLessonRecord {
  return {
    id: row.id,
    courseId: row.course_id,
    slug: row.slug,
    title: row.title,
    summary: row.summary,
    status: row.status,
    previewToken: row.preview_token,
    previewUpdatedAt: row.preview_updated_at,
    sortOrder: row.sort_order,
    estimatedMinutes: row.estimated_minutes,
    publishedAt: row.published_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function mapBlock(row: DbBlockRow): AdminLessonBlockRecord {
  return {
    id: row.id,
    lessonId: row.lesson_id,
    blockType: row.block_type,
    title: row.title,
    contentJson: row.content_json ?? {},
    sortOrder: row.sort_order,
    isRequired: row.is_required,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function listAdminContentTree() {
  const [coursesResult, lessonsResult, blocksResult] = await Promise.all([
    pool.query<DbCourseRow>(
      `select id, slug, title, short_description, cover_image_url, status, sort_order, published_at, created_at, updated_at
        from public.courses
        order by sort_order asc, created_at asc`,
    ),
    pool.query<DbLessonRow>(
      `select id, course_id, slug, title, summary, status, preview_token, preview_updated_at, sort_order, estimated_minutes, published_at, created_at, updated_at
        from public.lessons
        order by sort_order asc, created_at asc`,
    ),
    pool.query<DbBlockRow>(
      `select id, lesson_id, block_type, title, content_json, sort_order, is_required, created_at, updated_at
        from public.lesson_blocks
        order by sort_order asc, created_at asc`,
    ),
  ]);

  const courses = coursesResult.rows.map(mapCourse);
  const lessons = lessonsResult.rows.map(mapLesson);
  const blocks = blocksResult.rows.map(mapBlock);

  const lessonsByCourse = new Map<string, AdminLessonRecord[]>();
  for (const lesson of lessons) {
    const bucket = lessonsByCourse.get(lesson.courseId) ?? [];
    bucket.push(lesson);
    lessonsByCourse.set(lesson.courseId, bucket);
  }

  const blocksByLesson = new Map<string, AdminLessonBlockRecord[]>();
  for (const block of blocks) {
    const bucket = blocksByLesson.get(block.lessonId) ?? [];
    bucket.push(block);
    blocksByLesson.set(block.lessonId, bucket);
  }

  return {
    courses: courses.map((course) => ({
      ...course,
      lessons: (lessonsByCourse.get(course.id) ?? []).map((lesson) => ({
        ...lesson,
        blocks: blocksByLesson.get(lesson.id) ?? [],
      })),
    })),
  };
}

type CourseInput = {
  slug: string;
  title: string;
  shortDescription?: string | null;
  coverImageUrl?: string | null;
  status: 'draft' | 'published' | 'archived';
  sortOrder?: number;
  adminUserId: string;
};

export async function createCourse(input: CourseInput) {
  const result = await pool.query<DbCourseRow>(
    `insert into public.courses (
        slug, title, short_description, cover_image_url, status, sort_order, created_by, updated_by, published_at
      )
      values ($1, $2, $3, $4, $5, $6, $7, $7, case when $5 = 'published' then timezone('utc', now()) else null end)
      returning id, slug, title, short_description, cover_image_url, status, sort_order, published_at, created_at, updated_at`,
    [
      input.slug,
      input.title,
      input.shortDescription ?? null,
      input.coverImageUrl ?? null,
      input.status,
      input.sortOrder ?? 0,
      input.adminUserId,
    ],
  );

  return mapCourse(result.rows[0]);
}

type CourseUpdateInput = Omit<CourseInput, 'adminUserId'> & { id: string; adminUserId: string };

export async function updateCourse(input: CourseUpdateInput) {
  const result = await pool.query<DbCourseRow>(
    `update public.courses
      set slug = $2,
          title = $3,
          short_description = $4,
          cover_image_url = $5,
          status = $6,
          sort_order = $7,
          updated_by = $8,
          published_at = case
            when $6 = 'published' and published_at is null then timezone('utc', now())
            when $6 <> 'published' then null
            else published_at
          end
      where id = $1
      returning id, slug, title, short_description, cover_image_url, status, sort_order, published_at, created_at, updated_at`,
    [
      input.id,
      input.slug,
      input.title,
      input.shortDescription ?? null,
      input.coverImageUrl ?? null,
      input.status,
      input.sortOrder ?? 0,
      input.adminUserId,
    ],
  );

  return result.rows[0] ? mapCourse(result.rows[0]) : null;
}

export async function deleteCourse(id: string) {
  const result = await pool.query<{ id: string }>('delete from public.courses where id = $1 returning id', [id]);
  return Boolean(result.rows[0]);
}

type LessonInput = {
  courseId: string;
  slug: string;
  title: string;
  summary?: string | null;
  status: 'draft' | 'published' | 'archived';
  sortOrder?: number;
  estimatedMinutes?: number;
  adminUserId: string;
};

export async function createLesson(input: LessonInput) {
  const result = await pool.query<DbLessonRow>(
    `insert into public.lessons (
        course_id, slug, title, summary, status, preview_updated_at, sort_order, estimated_minutes, created_by, updated_by, published_at
      )
      values ($1, $2, $3, $4, $5, timezone('utc', now()), $6, $7, $8, $8, case when $5 = 'published' then timezone('utc', now()) else null end)
      returning id, course_id, slug, title, summary, status, preview_token, preview_updated_at, sort_order, estimated_minutes, published_at, created_at, updated_at`,
    [
      input.courseId,
      input.slug,
      input.title,
      input.summary ?? null,
      input.status,
      input.sortOrder ?? 0,
      input.estimatedMinutes ?? 0,
      input.adminUserId,
    ],
  );

  return mapLesson(result.rows[0]);
}

type LessonUpdateInput = Omit<LessonInput, 'courseId' | 'adminUserId'> & {
  id: string;
  courseId: string;
  adminUserId: string;
};

export async function updateLesson(input: LessonUpdateInput) {
  const result = await pool.query<DbLessonRow>(
    `update public.lessons
      set course_id = $2,
          slug = $3,
          title = $4,
          summary = $5,
          status = $6,
          preview_updated_at = timezone('utc', now()),
          sort_order = $7,
          estimated_minutes = $8,
          updated_by = $9,
          published_at = case
            when $6 = 'published' and published_at is null then timezone('utc', now())
            when $6 <> 'published' then null
            else published_at
          end
      where id = $1
      returning id, course_id, slug, title, summary, status, preview_token, preview_updated_at, sort_order, estimated_minutes, published_at, created_at, updated_at`,
    [
      input.id,
      input.courseId,
      input.slug,
      input.title,
      input.summary ?? null,
      input.status,
      input.sortOrder ?? 0,
      input.estimatedMinutes ?? 0,
      input.adminUserId,
    ],
  );

  return result.rows[0] ? mapLesson(result.rows[0]) : null;
}

export async function deleteLesson(id: string) {
  const result = await pool.query<{ id: string }>('delete from public.lessons where id = $1 returning id', [id]);
  return Boolean(result.rows[0]);
}

type LessonBlockInput = {
  lessonId: string;
  blockType: 'text' | 'video' | 'code' | 'interactive_image';
  title?: string | null;
  contentJson?: Record<string, unknown>;
  sortOrder?: number;
  isRequired?: boolean;
};

export async function createLessonBlock(input: LessonBlockInput) {
  const result = await pool.query<DbBlockRow>(
    `insert into public.lesson_blocks (
        lesson_id, block_type, title, content_json, sort_order, is_required
      )
      values ($1, $2, $3, $4::jsonb, $5, $6)
      returning id, lesson_id, block_type, title, content_json, sort_order, is_required, created_at, updated_at`,
    [
      input.lessonId,
      input.blockType,
      input.title ?? null,
      JSON.stringify(input.contentJson ?? {}),
      input.sortOrder ?? 0,
      input.isRequired ?? true,
    ],
  );

  return mapBlock(result.rows[0]);
}

type LessonBlockUpdateInput = LessonBlockInput & { id: string };

export async function updateLessonBlock(input: LessonBlockUpdateInput) {
  const result = await pool.query<DbBlockRow>(
    `update public.lesson_blocks
      set lesson_id = $2,
          block_type = $3,
          title = $4,
          content_json = $5::jsonb,
          sort_order = $6,
          is_required = $7
      where id = $1
      returning id, lesson_id, block_type, title, content_json, sort_order, is_required, created_at, updated_at`,
    [
      input.id,
      input.lessonId,
      input.blockType,
      input.title ?? null,
      JSON.stringify(input.contentJson ?? {}),
      input.sortOrder ?? 0,
      input.isRequired ?? true,
    ],
  );

  return result.rows[0] ? mapBlock(result.rows[0]) : null;
}

export async function deleteLessonBlock(id: string) {
  const result = await pool.query<{ id: string }>(
    'delete from public.lesson_blocks where id = $1 returning id',
    [id],
  );
  return Boolean(result.rows[0]);
}
