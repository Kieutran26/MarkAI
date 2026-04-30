import type { IncomingMessage, ServerResponse } from 'node:http';
import { requireAdminSession, type AdminRequest } from './admin-auth-controller';
import { decorateJsonResponse } from './http-response';
import {
  createCourse,
  createLesson,
  createLessonModule,
  createLessonBlock,
  deleteCourse,
  deleteLesson,
  deleteLessonModule,
  deleteLessonBlock,
  listAdminContentTree,
  updateCourse,
  updateLesson,
  updateLessonModule,
  updateLessonBlock,
} from '../services/admin-content-service';

type AdminResponse = ReturnType<typeof decorateJsonResponse>;

async function readJsonBody(req: IncomingMessage) {
  const expressLikeBody = (req as IncomingMessage & { body?: unknown }).body;
  if (typeof expressLikeBody === 'object' && expressLikeBody !== null) {
    return expressLikeBody as Record<string, unknown>;
  }

  if (typeof expressLikeBody === 'string') {
    return JSON.parse(expressLikeBody) as Record<string, unknown>;
  }

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const rawBody = Buffer.concat(chunks).toString('utf8').trim();
  return rawBody ? (JSON.parse(rawBody) as Record<string, unknown>) : {};
}

function asString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function asNullableString(value: unknown) {
  const normalized = asString(value);
  return normalized || null;
}

function asNumber(value: unknown, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function asBoolean(value: unknown, fallback = false) {
  return typeof value === 'boolean' ? value : fallback;
}

function parseBlockType(value: unknown) {
  if (value === 'text' || value === 'video' || value === 'code' || value === 'interactive_image') {
    return value;
  }
  return 'text' as const;
}

export async function handleAdminContentRequest(req: AdminRequest, res: ServerResponse) {
  const response = decorateJsonResponse(res) as AdminResponse;
  const adminUser = await requireAdminSession(req, response);
  if (!adminUser) {
    return;
  }

  try {
    if (req.method === 'GET') {
      return response.status(200).json(await listAdminContentTree());
    }

    const body = await readJsonBody(req);
    const resource = asString(body.resource);
    const action = asString(body.action);

    if (resource === 'course') {
      if (action === 'create') {
        const course = await createCourse({
          slug: asString(body.slug),
          title: asString(body.title),
          shortDescription: asNullableString(body.shortDescription),
          coverImageUrl: asNullableString(body.coverImageUrl),
          status: (asString(body.status) as 'draft' | 'published' | 'archived') || 'draft',
          sortOrder: asNumber(body.sortOrder),
          adminUserId: adminUser.id,
        });
        return response.status(201).json({ item: course });
      }

      if (action === 'update') {
        const course = await updateCourse({
          id: asString(body.id),
          slug: asString(body.slug),
          title: asString(body.title),
          shortDescription: asNullableString(body.shortDescription),
          coverImageUrl: asNullableString(body.coverImageUrl),
          status: (asString(body.status) as 'draft' | 'published' | 'archived') || 'draft',
          sortOrder: asNumber(body.sortOrder),
          adminUserId: adminUser.id,
        });
        return course
          ? response.status(200).json({ item: course })
          : response.status(404).json({ message: 'Khong tim thay course.' });
      }

      if (action === 'delete') {
        const deleted = await deleteCourse(asString(body.id));
        return deleted
          ? response.status(200).json({ success: true })
          : response.status(404).json({ message: 'Khong tim thay course.' });
      }
    }

    if (resource === 'lesson') {
      if (action === 'create') {
        const lesson = await createLesson({
          courseId: asString(body.courseId),
          slug: asString(body.slug),
          title: asString(body.title),
          summary: asNullableString(body.summary),
          status: (asString(body.status) as 'draft' | 'published' | 'archived') || 'draft',
          sortOrder: asNumber(body.sortOrder),
          estimatedMinutes: asNumber(body.estimatedMinutes),
          adminUserId: adminUser.id,
        });
        return response.status(201).json({ item: lesson });
      }

      if (action === 'update') {
        const lesson = await updateLesson({
          id: asString(body.id),
          courseId: asString(body.courseId),
          slug: asString(body.slug),
          title: asString(body.title),
          summary: asNullableString(body.summary),
          status: (asString(body.status) as 'draft' | 'published' | 'archived') || 'draft',
          sortOrder: asNumber(body.sortOrder),
          estimatedMinutes: asNumber(body.estimatedMinutes),
          adminUserId: adminUser.id,
        });
        return lesson
          ? response.status(200).json({ item: lesson })
          : response.status(404).json({ message: 'Khong tim thay lesson.' });
      }

      if (action === 'delete') {
        const deleted = await deleteLesson(asString(body.id));
        return deleted
          ? response.status(200).json({ success: true })
          : response.status(404).json({ message: 'Khong tim thay lesson.' });
      }
    }

    if (resource === 'lesson_module') {
      if (action === 'create') {
        const module = await createLessonModule({
          lessonId: asString(body.lessonId),
          slug: asString(body.slug),
          moduleCode: asString(body.moduleCode),
          title: asString(body.title),
          summary: asNullableString(body.summary),
          status: (asString(body.status) as 'draft' | 'published' | 'archived') || 'draft',
          sortOrder: asNumber(body.sortOrder),
          estimatedMinutes: asNumber(body.estimatedMinutes),
        });
        return response.status(201).json({ item: module });
      }

      if (action === 'update') {
        const module = await updateLessonModule({
          id: asString(body.id),
          lessonId: asString(body.lessonId),
          slug: asString(body.slug),
          moduleCode: asString(body.moduleCode),
          title: asString(body.title),
          summary: asNullableString(body.summary),
          status: (asString(body.status) as 'draft' | 'published' | 'archived') || 'draft',
          sortOrder: asNumber(body.sortOrder),
          estimatedMinutes: asNumber(body.estimatedMinutes),
        });
        return module
          ? response.status(200).json({ item: module })
          : response.status(404).json({ message: 'Khong tim thay module.' });
      }

      if (action === 'delete') {
        const deleted = await deleteLessonModule(asString(body.id));
        return deleted
          ? response.status(200).json({ success: true })
          : response.status(404).json({ message: 'Khong tim thay module.' });
      }
    }

    if (resource === 'lesson_block') {
      if (action === 'create') {
        const block = await createLessonBlock({
          lessonId: asString(body.lessonId),
          moduleId: asString(body.moduleId),
          blockType: parseBlockType(body.blockType),
          title: asNullableString(body.title),
          contentJson: typeof body.contentJson === 'object' && body.contentJson ? (body.contentJson as Record<string, unknown>) : {},
          sortOrder: asNumber(body.sortOrder),
          isRequired: asBoolean(body.isRequired, true),
        });
        return response.status(201).json({ item: block });
      }

      if (action === 'update') {
        const block = await updateLessonBlock({
          id: asString(body.id),
          lessonId: asString(body.lessonId),
          moduleId: asString(body.moduleId),
          blockType: parseBlockType(body.blockType),
          title: asNullableString(body.title),
          contentJson: typeof body.contentJson === 'object' && body.contentJson ? (body.contentJson as Record<string, unknown>) : {},
          sortOrder: asNumber(body.sortOrder),
          isRequired: asBoolean(body.isRequired, true),
        });
        return block
          ? response.status(200).json({ item: block })
          : response.status(404).json({ message: 'Khong tim thay block.' });
      }

      if (action === 'delete') {
        const deleted = await deleteLessonBlock(asString(body.id));
        return deleted
          ? response.status(200).json({ success: true })
          : response.status(404).json({ message: 'Khong tim thay block.' });
      }
    }

    console.error('Invalid admin content payload', { method: req.method, body });
    return response.status(400).json({ message: 'Request CRUD khong hop le.' });
  } catch (error) {
    console.error('Failed to handle admin content request', error);
    return response.status(500).json({ message: 'Khong xu ly duoc yeu cau CRUD luc nay.' });
  }
}
