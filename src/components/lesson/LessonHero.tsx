import { Link } from 'react-router-dom';
import type { Lesson } from '../../lib/lessons';

interface LessonHeroProps {
  lesson: Lesson;
  progress: number;
}

export default function LessonHero({ lesson, progress }: LessonHeroProps) {
  const lessonNum = lesson.id.toString().padStart(2, '0');
  const firstSubId = lesson.subLessons[0]?.id;

  return (
    <section className="border-b border-border">
      <div className="page-shell">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px]">
          <div className="py-8 lg:py-10 pr-0 lg:pr-10 border-b lg:border-b-0 lg:border-r border-border">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {lesson.badgeType === 'accent' && (
                <span className="badge badge-accent">{lesson.badge}</span>
              )}
              {lesson.badgeType === 'dark' && (
                <span className="badge badge-dark">{lesson.badge}</span>
              )}
              {lesson.badgeType === 'green' && (
                <span className="badge badge-green">{lesson.badge}</span>
              )}
              {lesson.badgeExtra && (
                <span className="badge badge-green">{lesson.badgeExtra}</span>
              )}
              <span className="badge badge-outline">{lesson.duration}</span>
              <span className="badge badge-outline">{lesson.subLessonCount} bai nho</span>
            </div>

            <p className="font-mono text-[11px] text-muted tracking-[0.08em] uppercase mb-2">
              BAI · {lessonNum} / 10
            </p>

            <h1 className="font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.15] mb-5">
              {lesson.title.split(lesson.titleEm)[0]}
              <em className="text-accent italic">{lesson.titleEm}</em>
              {lesson.title.split(lesson.titleEm)[1]}
            </h1>

            <p className="font-sans text-[15px] text-ink2 leading-[1.75] max-w-[560px] mb-7">
              {lesson.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {lesson.tags.map((tag, idx) => (
                <span key={idx} className="step-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="py-6 lg:py-8 pl-0 lg:pl-8">
            <div className="border border-border mb-6">
              <div className="lesson-stat">
                <span className="lesson-stat-label">THOI GIAN DOC</span>
                <span className="lesson-stat-value">{lesson.duration}</span>
              </div>
              <div className="lesson-stat">
                <span className="lesson-stat-label">SO BAI NHO</span>
                <span className="lesson-stat-value">{lesson.subLessonCount} bai</span>
              </div>
              <div className="lesson-stat">
                <span className="lesson-stat-label">DO KHO</span>
                <span className="lesson-stat-value">{lesson.difficulty}</span>
              </div>
              <div className="lesson-stat">
                <span className="lesson-stat-label">TIEN DO</span>
                <span className="lesson-stat-value">Bai {progress.toString().padStart(2, '0')} / 10</span>
              </div>
              <div className="lesson-stat">
                <span className="lesson-stat-label">TIEP THEO</span>
                <span className="lesson-stat-value">
                  {lesson.nextLesson
                    ? `Bai ${(lesson.id + 1).toString().padStart(2, '0')} · ${lesson.nextLesson.title}`
                    : 'Ket thuc lo trinh'}
                </span>
              </div>
            </div>

            <Link
              to={firstSubId ? `#sub-${firstSubId}` : '#'}
              className="btn-primary w-full justify-center mb-4"
            >
              Bat dau bai nay →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
