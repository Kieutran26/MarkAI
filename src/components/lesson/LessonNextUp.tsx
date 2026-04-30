import { Link } from 'react-router-dom';
import type { Lesson } from '../lib/lessons';

interface LessonNextUpProps {
  currentLesson: Lesson;
  nextLesson: Lesson | undefined;
  remainingLessons: Lesson[];
}

export default function LessonNextUp({
  currentLesson,
  nextLesson,
  remainingLessons
}: LessonNextUpProps) {
  if (!nextLesson) return null;

  const nextSlug = nextLesson.slug;

  return (
    <section className="bg-ink py-12 lg:py-16">
      <div className="page-shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Next Lesson CTA */}
          <div className="next-cta">
            <p className="font-mono text-[10px] text-[var(--text-dim)] tracking-[0.06em] uppercase mb-4">
              ✳ Bài tiếp theo trong lộ trình
            </p>
            <h3 className="font-serif text-[1.6rem] text-bg leading-[1.15] mb-4">
              Bài {nextLesson.id.toString().padStart(2, '0')} — {nextLesson.title.split('—')[0].trim()}{' '}
              <em className="text-accent italic">
                {nextLesson.title.split('—')[1]?.trim() || nextLesson.titleEm}
              </em>
            </h3>
            <p className="font-sans text-[14px] font-light text-[var(--text-soft)] leading-[1.7] mb-8 max-w-[480px]">
              {nextLesson.desc}
            </p>
            <Link to={`/vibecode/${nextSlug}`} className="btn-accent">
              Học bài {nextLesson.id.toString().padStart(2, '0')} →
            </Link>
          </div>

          {/* Right - Remaining Lessons */}
          <div className="next-lessons">
            <p className="font-mono text-[10px] text-[var(--text-dim)] tracking-[0.06em] uppercase mb-4">
              ✳ Các bài còn lại
            </p>
            <div className="next-lesson-list">
              {remainingLessons.slice(0, 4).map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/vibecode/${lesson.slug}`}
                  className="next-lesson-item"
                >
                  <span className="next-lesson-num">
                    {lesson.id.toString().padStart(2, '0')}
                  </span>
                  <span className="next-lesson-title">
                    {lesson.title.split('—')[0].trim()}
                  </span>
                  <span className="next-lesson-arrow">→</span>
                </Link>
              ))}
              {remainingLessons.length > 4 && (
                <div className="next-lesson-item">
                  <span className="next-lesson-num">
                    {remainingLessons.slice(4).map(l => l.id.toString().padStart(2, '0')).join('–')}
                  </span>
                  <span className="next-lesson-title">
                    Công cụ · Prompt · Debug · Workflow · Deploy
                  </span>
                  <span className="next-lesson-arrow">→</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
