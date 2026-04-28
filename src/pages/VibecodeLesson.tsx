import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getLessonBySlug, lessons } from '../lib/lessons';
import LessonHero from '../components/lesson/LessonHero';
import LessonLayout from '../components/lesson/LessonLayout';
import SubLesson from '../components/lesson/SubLesson';
import NextUp from '../components/lesson/NextUp';

export default function VibecodeLesson() {
  const { slug } = useParams<{ slug: string }>();
  const [lesson, setLesson] = useState(getLessonBySlug(slug || 'vibecode-la-gi'));

  useEffect(() => {
    if (slug) {
      const foundLesson = getLessonBySlug(slug);
      setLesson(foundLesson);
      window.scrollTo(0, 0);
      
      // Save progress and update title
      if (foundLesson) {
        localStorage.setItem('lesson_progress', String(foundLesson.id));
        document.title = `${foundLesson.title} · markAI.vn`;
      }
    }
  }, [slug]);

  // Duplicate ticker content for smooth loop
  useEffect(() => {
    const ticker = document.getElementById('ticker');
    if (ticker && ticker.innerHTML) {
      ticker.innerHTML += ticker.innerHTML;
    }
  }, []);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4 text-ink">Bài học không tìm thấy</h1>
          <p className="font-mono text-muted mb-6">Trang bạn đang tìm không tồn tại.</p>
          <Link to="/vibecode" className="btn-primary">
            Quay lại lộ trình →
          </Link>
        </div>
      </div>
    );
  }

  const lessonNum = String(lesson.id).padStart(2, '0');

  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-wrap">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="breadcrumb">
            <Link to="/">markAI</Link>
            <span>/</span>
            <Link to="/vibecode">Vibecode Web</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink)' }}>Bài {lessonNum}</span>
          </div>
        </div>
      </div>

      {/* Lesson Hero */}
      <LessonHero lesson={lesson} />

      {/* Progress Bar */}
      <div className="progress-bar-wrap">
        <div className="progress-bar-inner">
          <span className="progress-label">LỘ TRÌNH · {lesson.id}/10</span>
          <div className="progress-steps">
            {Array.from({ length: 10 }, (_, i) => {
              const stepNum = i + 1;
              const isDone = stepNum < lesson.id;
              const isActive = stepNum === lesson.id;
              
              return (
                <div 
                  key={i}
                  className={`progress-step ${isDone ? 'done' : ''} ${isActive ? 'active' : ''}`}
                />
              );
            })}
          </div>
          <span className="progress-label" style={{ color: 'var(--accent)' }}>
            BÀI {lessonNum}
          </span>
        </div>
      </div>

      {/* Main Layout with Sidebar */}
      <LessonLayout lesson={lesson}>
        {lesson.subLessons.map((subLesson, index) => (
          <SubLesson
            key={subLesson.id}
            subLesson={subLesson}
            lessonId={lesson.id}
            lessonSlug={lesson.slug}
            totalLessons={lesson.subLessons.length}
            prevSubLesson={index > 0 ? lesson.subLessons[index - 1] : undefined}
            nextSubLesson={index < lesson.subLessons.length - 1 ? lesson.subLessons[index + 1] : undefined}
          />
        ))}
      </LessonLayout>

      {/* Next Up Section */}
      <NextUp currentLesson={lesson} />
    </div>
  );
}
