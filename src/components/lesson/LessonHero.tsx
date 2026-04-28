import { Link } from 'react-router-dom';
import type { Lesson } from '../lib/lessons';

interface LessonHeroProps {
  lesson: Lesson;
  progress: number;
}

export default function LessonHero({ lesson, progress }: LessonHeroProps) {
  const lessonNum = lesson.id.toString().padStart(2, '0');
  const prevSlug = lesson.prevLesson ? `vibecode-la-gi` : null;
  const nextSlug = lesson.nextLesson ? `tu-ngu-chuyen-nganh` : null;
  
  // Actually get the correct slug
  const getSlug = (id: number) => {
    const slugMap: Record<number, string> = {
      1: 'vibecode-la-gi',
      2: 'tu-ngu-chuyen-nganh',
      3: 'cai-dat-moi-truong',
      4: 'lam-quen-vscode-cursor',
      5: 'lam-quen-claude-code',
      6: 'cong-cu-website-huu-ich',
      7: 'cach-prompt-cho-ai',
      8: 'khi-ai-code-sai',
      9: 'tao-skills-va-workflow',
      10: 'deploy-va-tracking'
    };
    return slugMap[id];
  };

  const prevSlugCorrect = lesson.prevLesson ? getSlug(lesson.prevLesson.id) : null;
  const nextSlugCorrect = lesson.nextLesson ? getSlug(lesson.nextLesson.id) : null;

  return (
    <section className="border-b border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px]">
          {/* Left Column */}
          <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border">
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
            <h1 className="font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.15] mb-5">
              {lesson.title.split(lesson.titleEm)[0]}
              <em className="text-accent italic">{lesson.titleEm}</em>
              {lesson.title.split(lesson.titleEm)[1]}
            </h1>

            {/* Description */}
            <p className="font-sans text-[15px] text-ink2 leading-[1.75] max-w-[560px] mb-7">
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
          <div className="p-6 lg:p-8">
            {/* Stats Box */}
            <div className="border border-border mb-6">
              <div className="lesson-stat">
                <span className="lesson-stat-label">THỜI GIAN ĐỌC</span>
                <span className="lesson-stat-value">{lesson.duration}</span>
              </div>
              <div className="lesson-stat">
                <span className="lesson-stat-label">SỐ BÀI NHỎ</span>
                <span className="lesson-stat-value">{lesson.subLessonCount} bài</span>
              </div>
              <div className="lesson-stat">
                <span className="lesson-stat-label">ĐỘ KHÓ</span>
                <span className="lesson-stat-value">{lesson.difficulty}</span>
              </div>
              <div className="lesson-stat">
                <span className="lesson-stat-label">TIẾP THEO</span>
                <span className="lesson-stat-value">
                  {lesson.nextLesson 
                    ? `Bài ${(lesson.id + 1).toString().padStart(2, '0')} · ${lesson.nextLesson.title}` 
                    : '— Kết thúc lộ trình'}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              to={`#sub-${lesson.id}01`}
              className="btn-primary w-full justify-center mb-4"
            >
              Bắt đầu bài này →
            </Link>

            {/* Prev/Next Navigation */}
            <div className="nav-lesson">
              {lesson.prevLesson ? (
                <Link to={`/vibecode/${prevSlugCorrect}`} className="hover:bg-bg2">
                  <span className="dir">← Trước</span>
                  <span className="font-serif text-[.85rem] text-ink">
                    Bài {(lesson.id - 1).toString().padStart(2, '0')}
                  </span>
                </Link>
              ) : (
                <div className="disabled opacity-40">
                  <span className="dir">← Trước</span>
                  <span className="font-serif text-[.85rem] text-ink">—</span>
                </div>
              )}
              {lesson.nextLesson ? (
                <Link to={`/vibecode/${nextSlugCorrect}`} className="hover:bg-bg2">
                  <span className="dir">Tiếp →</span>
                  <span className="font-serif text-[.85rem] text-ink">
                    Bài {(lesson.id + 1).toString().padStart(2, '0')}
                  </span>
                </Link>
              ) : (
                <div className="disabled opacity-40">
                  <span className="dir">Kết thúc →</span>
                  <span className="font-serif text-[.85rem] text-ink">—</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
