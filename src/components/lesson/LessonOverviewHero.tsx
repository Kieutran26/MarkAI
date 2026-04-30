import { Link } from 'react-router-dom';
import type { Lesson } from '../lib/lessons';

interface LessonOverviewHeroProps {
  lesson: Lesson;
}

export default function LessonOverviewHero({ lesson }: LessonOverviewHeroProps) {
  const lessonNum = lesson.id.toString().padStart(2, '0');
  const firstSubSlug = lesson.subLessons[0]?.id.replace('.', '-').replace(/^/, 'bai-');

  return (
    <section className="border-b border-border">
      <div className="page-shell">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px]">
          {/* Left Column */}
          <div className="py-8 lg:py-10 xl:py-12 pr-0 lg:pr-10 xl:pr-12 border-b lg:border-b-0 lg:border-r border-border">
            {/* Badges */}
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
              <span className="badge badge-outline">{lesson.subLessonCount} bài nhỏ</span>
            </div>

            {/* Lesson Number */}
            <p className="font-mono text-[11px] text-muted tracking-[0.08em] uppercase mb-2">
              BÀI · {lessonNum} / 10
            </p>

            {/* Title */}
            <h1 className="font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.15] mb-6">
              {lesson.title.split(lesson.titleEm)[0]}
              <em className="text-accent italic">{lesson.titleEm}</em>
              {lesson.title.split(lesson.titleEm)[1]}
            </h1>

            {/* Description */}
            <p className="font-sans text-[15px] font-light text-ink2 leading-[1.75] max-w-[560px] mb-8">
              {lesson.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {lesson.tags.map((tag, idx) => (
                <span key={idx} className="step-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="py-6 lg:py-8 pl-0 lg:pl-8 flex flex-col">
            {/* Stats Title */}
            <div className="pb-3 border-b border-border">
              <p className="font-mono text-[10px] text-muted tracking-[0.06em] uppercase">
                Thông tin bài học
              </p>
            </div>

            {/* Stats */}
            <div className="border border-t-0 border-border">
              <div className="lesson-stat">
                <span className="lesson-stat-label">Thời gian đọc</span>
                <span className="lesson-stat-value">{lesson.duration}</span>
              </div>
              <div className="lesson-stat">
                <span className="lesson-stat-label">Số bài nhỏ</span>
                <span className="lesson-stat-value">{lesson.subLessonCount} bài</span>
              </div>
              <div className="lesson-stat">
                <span className="lesson-stat-label">Độ khó</span>
                <span className="lesson-stat-value text-accent">{lesson.difficulty}</span>
              </div>
              <div className="lesson-stat">
                <span className="lesson-stat-label">Tiếp theo</span>
                <span className="lesson-stat-value">
                  {lesson.nextLesson
                    ? `Bài ${(lesson.id + 1).toString().padStart(2, '0')} · ${lesson.nextLesson.title}`
                    : '— Kết thúc lộ trình'}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to={`/vibecode/${lesson.slug}/${firstSubSlug}`}
              className="btn-primary mt-6 flex items-center justify-between group"
            >
              <span>Bắt đầu từ bài 1.1</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
