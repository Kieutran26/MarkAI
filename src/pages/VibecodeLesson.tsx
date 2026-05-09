import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getLessonBySlug, getLessonSlug } from '../lib/lessons';
import LessonLayout from '../components/lesson/LessonLayout';

export default function VibecodeLesson() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(getLessonBySlug(slug || 'vibecode-la-gi'));

  useEffect(() => {
    if (!slug) return;

    const foundLesson = getLessonBySlug(slug);
    setLesson(foundLesson);

    if (!foundLesson) return;

    localStorage.setItem('lesson_progress', String(foundLesson.id));
    document.title = `${foundLesson.title} · markAI.vn`;
  }, [slug]);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4 text-ink">Bài học không tìm thấy</h1>
          <p className="font-mono text-muted mb-6">Trang bạn đang tìm không tồn tại.</p>
          <button onClick={() => navigate(-1)} className="btn-primary">
            Quay lại lộ trình →
          </button>
        </div>
      </div>
    );
  }

  const lessonNum = String(lesson.id).padStart(2, '0');

  return (
    <div>
      <div className="breadcrumb-wrap">
        <div className="breadcrumb-content">
          <div className="breadcrumb">
            <Link to="/">markAI</Link>
            <span>/</span>
            <Link to="/vibecode">Vibecode Web</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink)' }}>Bài {lessonNum}</span>
          </div>

          <div className="nav-lesson-top">
            {lesson.prevLesson ? (
              <Link to={`/vibecode/${getLessonSlug(lesson.prevLesson.id)}`} className="nav-item-top">
                ← Trước
              </Link>
            ) : (
              <span className="nav-item-top disabled">← Trước</span>
            )}

            {lesson.nextLesson ? (
              <Link
                to={`/vibecode/${getLessonSlug(lesson.nextLesson.id)}`}
                className="nav-item-top nav-item-top-black"
              >
                Bài {lesson.nextLesson.id.toString().padStart(2, '0')} →
              </Link>
            ) : (
              <span className="nav-item-top disabled">Kết thúc →</span>
            )}
          </div>
        </div>
      </div>

      <LessonLayout lesson={lesson} />
    </div>
  );
}
