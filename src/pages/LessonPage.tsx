import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getLessonBySlug, lessons } from '../lib/lessons';
import LessonLayout from '../components/lesson/LessonLayout';

export default function LessonPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Không tìm thấy bài học</h1>
          <button 
            onClick={() => navigate('/vibecode')}
            className="btn-primary"
          >
            Quay lại lộ trình
          </button>
        </div>
      </div>
    );
  }

  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Bài học không tồn tại</h1>
          <p className="text-muted mb-6">Slug: {slug}</p>
          <button 
            onClick={() => navigate('/vibecode')}
            className="btn-primary"
          >
            Quay lại lộ trình
          </button>
        </div>
      </div>
    );
  }

  return <LessonLayout lesson={lesson} />;
}
