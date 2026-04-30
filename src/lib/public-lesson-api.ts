export type PublicLessonPayload = {
  lesson: {
    id: string;
    slug: string;
    title: string;
    summary: string | null;
    estimatedMinutes: number;
    sortOrder: number;
    modules: Array<{
      id: string;
      lessonId: string;
      slug: string;
      moduleCode: string;
      title: string;
      summary: string | null;
      sortOrder: number;
      estimatedMinutes: number;
      blocks: Array<{
        id: string;
        title: string | null;
        contentJson: Record<string, unknown>;
        sortOrder: number;
      }>;
    }>;
  };
};

export async function fetchPublicLesson(lessonSlug: string) {
  const response = await fetch(`/api/public-lessons/${lessonSlug}`);
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = (payload as { message?: string }).message ?? 'Khong tai duoc lesson tu database.';
    throw new Error(message);
  }

  return payload as PublicLessonPayload;
}
