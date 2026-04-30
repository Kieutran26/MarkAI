import type { AdminBlockType, AdminContentStatus, AdminContentTree } from './content-types';

async function readJson<T>(response: Response): Promise<T> {
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = (payload as { message?: string }).message ?? 'Co loi xay ra.';
    throw new Error(message);
  }

  return payload as T;
}

async function postAdminContent<T>(body: Record<string, unknown>) {
  const response = await fetch('/api/admin/content', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  return readJson<T>(response);
}

export function fetchAdminContentTree() {
  return fetch('/api/admin/content', { credentials: 'include' }).then(readJson<AdminContentTree>);
}

export function createCourse(payload: {
  slug: string;
  title: string;
  shortDescription: string;
  coverImageUrl: string;
  status: AdminContentStatus;
  sortOrder: number;
}) {
  return postAdminContent<{ item: { id: string } }>({ resource: 'course', action: 'create', ...payload });
}

export function updateCourse(payload: {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  coverImageUrl: string;
  status: AdminContentStatus;
  sortOrder: number;
}) {
  return postAdminContent<{ item: { id: string } }>({ resource: 'course', action: 'update', ...payload });
}

export function deleteCourse(id: string) {
  return postAdminContent<{ success: true }>({ resource: 'course', action: 'delete', id });
}

export function createLesson(payload: {
  courseId: string;
  slug: string;
  title: string;
  summary: string;
  status: AdminContentStatus;
  sortOrder: number;
  estimatedMinutes: number;
}) {
  return postAdminContent<{ item: { id: string } }>({ resource: 'lesson', action: 'create', ...payload });
}

export function createLessonModule(payload: {
  lessonId: string;
  slug: string;
  moduleCode: string;
  title: string;
  summary: string;
  status: AdminContentStatus;
  sortOrder: number;
  estimatedMinutes: number;
}) {
  return postAdminContent<{ item: { id: string } }>({ resource: 'lesson_module', action: 'create', ...payload });
}

export function updateLessonModule(payload: {
  id: string;
  lessonId: string;
  slug: string;
  moduleCode: string;
  title: string;
  summary: string;
  status: AdminContentStatus;
  sortOrder: number;
  estimatedMinutes: number;
}) {
  return postAdminContent<{ item: { id: string } }>({ resource: 'lesson_module', action: 'update', ...payload });
}

export function deleteLessonModule(id: string) {
  return postAdminContent<{ success: true }>({ resource: 'lesson_module', action: 'delete', id });
}

export function updateLesson(payload: {
  id: string;
  courseId: string;
  slug: string;
  title: string;
  summary: string;
  status: AdminContentStatus;
  sortOrder: number;
  estimatedMinutes: number;
}) {
  return postAdminContent<{ item: { id: string } }>({ resource: 'lesson', action: 'update', ...payload });
}

export function deleteLesson(id: string) {
  return postAdminContent<{ success: true }>({ resource: 'lesson', action: 'delete', id });
}

export function createLessonBlock(payload: {
  lessonId: string;
  moduleId: string;
  blockType: AdminBlockType;
  title: string;
  contentJson: Record<string, unknown>;
  sortOrder: number;
  isRequired: boolean;
}) {
  return postAdminContent<{ item: { id: string } }>({ resource: 'lesson_block', action: 'create', ...payload });
}

export function updateLessonBlock(payload: {
  id: string;
  lessonId: string;
  moduleId: string;
  blockType: AdminBlockType;
  title: string;
  contentJson: Record<string, unknown>;
  sortOrder: number;
  isRequired: boolean;
}) {
  return postAdminContent<{ item: { id: string } }>({ resource: 'lesson_block', action: 'update', ...payload });
}

export function deleteLessonBlock(id: string) {
  return postAdminContent<{ success: true }>({ resource: 'lesson_block', action: 'delete', id });
}
