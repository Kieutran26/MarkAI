import type { AdminBlockType, AdminContentStatus } from '../../content/content-types'

const ALLOWED_HTML_TAGS = new Set(['h2', 'h3', 'p', 'strong', 'em', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'br'])
const FORBIDDEN_HTML_PATTERN = /<(script|style|iframe|form|input|button|select|textarea|section|article|main|aside|header|footer|div|img|table)\b|(?:\s)(style|class|id|on\w+)\s*=/i

export type PreviewBlock = {
  blockType: AdminBlockType;
  title: string;
  sortOrder: number;
  isRequired: boolean;
  contentJson: Record<string, unknown>;
}

export type PreviewLesson = {
  slug: string;
  title: string;
  summary: string;
  status: AdminContentStatus;
  sortOrder: number;
  estimatedMinutes: number;
  blocks: PreviewBlock[];
}

export type PreviewCourse = {
  slug: string;
  title: string;
  shortDescription: string;
  coverImageUrl: string;
  status: AdminContentStatus;
  sortOrder: number;
  lessons: PreviewLesson[];
}

export function parseCoursePreviewJson(raw: string): PreviewCourse {
  const payload = JSON.parse(raw) as { course?: unknown }
  const course = ensureRecord(payload.course, 'Khong tim thay object course o root JSON.')

  return {
    slug: ensureString(course.slug, 'course.slug'),
    title: ensureString(course.title, 'course.title'),
    shortDescription: ensureString(course.shortDescription, 'course.shortDescription'),
    coverImageUrl: ensureString(course.coverImageUrl ?? '', 'course.coverImageUrl'),
    status: ensureStatus(course.status, 'course.status'),
    sortOrder: ensureNumber(course.sortOrder, 'course.sortOrder'),
    lessons: ensureArray(course.lessons, 'course.lessons').map((lesson, index) => parseLesson(lesson, index)),
  }
}

function parseLesson(value: unknown, index: number): PreviewLesson {
  const lesson = ensureRecord(value, `course.lessons[${index}]`)
  return {
    slug: ensureString(lesson.slug, `course.lessons[${index}].slug`),
    title: ensureString(lesson.title, `course.lessons[${index}].title`),
    summary: ensureString(lesson.summary, `course.lessons[${index}].summary`),
    status: ensureStatus(lesson.status, `course.lessons[${index}].status`),
    sortOrder: ensureNumber(lesson.sortOrder, `course.lessons[${index}].sortOrder`),
    estimatedMinutes: ensureNumber(lesson.estimatedMinutes, `course.lessons[${index}].estimatedMinutes`),
    blocks: ensureArray(lesson.blocks, `course.lessons[${index}].blocks`).map((block, blockIndex) =>
      parseBlock(block, index, blockIndex),
    ),
  }
}

function parseBlock(value: unknown, lessonIndex: number, blockIndex: number): PreviewBlock {
  const block = ensureRecord(value, `course.lessons[${lessonIndex}].blocks[${blockIndex}]`)
  const blockType = ensureBlockType(block.blockType, `course.lessons[${lessonIndex}].blocks[${blockIndex}].blockType`)
  const contentJson = ensureRecord(
    block.contentJson,
    `course.lessons[${lessonIndex}].blocks[${blockIndex}].contentJson`,
  )

  if (blockType === 'text') {
    validateTextHtml(ensureString(contentJson.html, `course.lessons[${lessonIndex}].blocks[${blockIndex}].contentJson.html`))
  }

  return {
    blockType,
    title: ensureString(block.title, `course.lessons[${lessonIndex}].blocks[${blockIndex}].title`),
    sortOrder: ensureNumber(block.sortOrder, `course.lessons[${lessonIndex}].blocks[${blockIndex}].sortOrder`),
    isRequired: ensureBoolean(block.isRequired, `course.lessons[${lessonIndex}].blocks[${blockIndex}].isRequired`),
    contentJson,
  }
}

function validateTextHtml(html: string) {
  if (FORBIDDEN_HTML_PATTERN.test(html)) {
    throw new Error('HTML preview co tag hoac attribute bi cam. Hay giu fragment o muc an toan giao dien.')
  }

  const tags = html.matchAll(/<\/?([a-z0-9-]+)/gi)
  for (const [, tagName] of tags) {
    if (!ALLOWED_HTML_TAGS.has(tagName.toLowerCase())) {
      throw new Error(`HTML preview dang dung tag khong duoc phep: <${tagName}>.`)
    }
  }
}

function ensureRecord(value: unknown, label: string): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${label} phai la object.`)
  return value as Record<string, unknown>
}

function ensureArray(value: unknown, label: string): unknown[] {
  if (!Array.isArray(value)) throw new Error(`${label} phai la array.`)
  return value
}

function ensureString(value: unknown, label: string): string {
  if (typeof value !== 'string') throw new Error(`${label} phai la string.`)
  return value
}

function ensureNumber(value: unknown, label: string): number {
  if (typeof value !== 'number' || Number.isNaN(value)) throw new Error(`${label} phai la number.`)
  return value
}

function ensureBoolean(value: unknown, label: string): boolean {
  if (typeof value !== 'boolean') throw new Error(`${label} phai la boolean.`)
  return value
}

function ensureStatus(value: unknown, label: string): AdminContentStatus {
  if (value === 'draft' || value === 'published' || value === 'archived') return value
  throw new Error(`${label} phai la draft, published hoac archived.`)
}

function ensureBlockType(value: unknown, label: string): AdminBlockType {
  if (value === 'text' || value === 'video' || value === 'code' || value === 'interactive_image') return value
  throw new Error(`${label} phai la text, video, code hoac interactive_image.`)
}
