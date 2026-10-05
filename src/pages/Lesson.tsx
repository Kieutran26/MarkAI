import { useParams, Navigate } from 'react-router-dom';
import { getLessonSlug } from '../lib/lessons';

export default function Lesson() {
  const { id } = useParams<{ id: string }>();
  const currentId = parseInt(id || '1', 10);
  const slug = getLessonSlug(currentId) || 'vibecode-la-gi';
  return <Navigate to={`/vibecode/${slug}`} replace />;
}
