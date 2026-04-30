import { useEffect, useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import LessonPreviewReader from '../components/reader/LessonPreviewReader';

type PreviewBlock = {
  id: string;
  blockType: 'text' | 'video' | 'code' | 'interactive_image';
  title: string | null;
  contentJson: Record<string, unknown>;
  sortOrder: number;
  isRequired: boolean;
};

type PreviewPayload = {
  course: {
    slug: string;
    title: string;
    shortDescription: string | null;
  };
  lesson: {
    slug: string;
    title: string;
    summary: string | null;
    estimatedMinutes: number;
    status: 'draft' | 'published' | 'archived';
    previewToken: string;
    blocks: PreviewBlock[];
  };
};

export default function LessonPreviewPage() {
  const { previewToken } = useParams<{ previewToken: string }>();
  const [searchParams] = useSearchParams();
  const [payload, setPayload] = useState<PreviewPayload | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const activeBlockIndex = useMemo(() => {
    const block = Number(searchParams.get('block') || '1');
    return Number.isFinite(block) && block > 0 ? block - 1 : 0;
  }, [searchParams]);

  useEffect(() => {
    if (!previewToken) return;

    setIsLoading(true);
    setErrorMessage(null);

    fetch(`/api/lesson-preview/${previewToken}`)
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error((data as { message?: string }).message ?? 'Khong tai duoc lesson preview.');
        }
        return data as PreviewPayload;
      })
      .then((data) => {
        setPayload(data);
        document.title = `${data.lesson.title} · Preview · markAI.vn`;
      })
      .catch((error) => {
        setErrorMessage(error instanceof Error ? error.message : 'Khong tai duoc lesson preview.');
      })
      .finally(() => setIsLoading(false));
  }, [previewToken]);

  if (isLoading) {
    return <div className="lesson-preview-state">Dang tai lesson preview...</div>;
  }

  if (errorMessage || !payload || !previewToken) {
    return (
      <div className="lesson-preview-state">
        <h1>Khong mo duoc lesson preview</h1>
        <p>{errorMessage ?? 'Preview token khong hop le.'}</p>
      </div>
    );
  }

  return (
    <LessonPreviewReader
      lesson={payload.lesson}
      previewToken={previewToken}
      activeBlockIndex={activeBlockIndex}
    />
  );
}
