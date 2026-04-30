export type AdminContentStatus = 'draft' | 'published' | 'archived';
export type AdminBlockType = 'text' | 'video' | 'code' | 'interactive_image';

export type AdminLessonBlock = {
  id: string;
  lessonId: string;
  blockType: AdminBlockType;
  title: string | null;
  contentJson: Record<string, unknown>;
  sortOrder: number;
  isRequired: boolean;
  createdAt: string;
  updatedAt: string;
};

export type AdminLesson = {
  id: string;
  courseId: string;
  slug: string;
  title: string;
  summary: string | null;
  status: AdminContentStatus;
  previewToken: string | null;
  previewUpdatedAt: string | null;
  sortOrder: number;
  estimatedMinutes: number;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  blocks: AdminLessonBlock[];
};

export type AdminCourse = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string | null;
  coverImageUrl: string | null;
  status: AdminContentStatus;
  sortOrder: number;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  lessons: AdminLesson[];
};

export type AdminContentTree = {
  courses: AdminCourse[];
};
