import { Link } from 'react-router-dom';
import type { SubLessonFull } from '../../lib/subLessons';

interface LessonTopbarProps {
  subLesson: SubLessonFull;
  lessonSlug: string;
}

export default function LessonTopbar({ subLesson, lessonSlug }: LessonTopbarProps) {
  const { id, lessonId, lessonTitle, totalSubs, currentIndex, prevSlug, nextSlug, prevTitle, nextTitle } = subLesson;

  const prevHref = prevSlug ? `/vibecode/${lessonSlug}/${prevSlug}` : `/vibecode/${lessonSlug}`;
  const nextHref = nextSlug
    ? `/vibecode/${lessonSlug}/${nextSlug}`
    : `/vibecode/${getNextLessonSlug(lessonSlug)}`;

  const nextDisplay = nextSlug
    ? `Đến bài ${id.split('.')[0]}.${currentIndex + 1} →`
    : `Đến bài ${(lessonId + 1).toString().padStart(2, '0')} →`;

  return (
    <div className="topbar">
      {/* Back to Lesson */}
      <Link to={`/vibecode/${lessonSlug}`} className="topbar-back">
        ← Bài {lessonId.toString().padStart(2, '0')}
      </Link>

      {/* Context */}
      <div className="topbar-context">
        <span className="topbar-badge">Bài {lessonId.toString().padStart(2, '0')}</span>
        <span className="topbar-sep">/</span>
        <span className="topbar-title">{lessonTitle}</span>
      </div>

      {/* Progress */}
      <div className="topbar-progress">
        <div className="topbar-dots">
          {Array.from({ length: totalSubs }).map((_, i) => (
            <div
              key={i}
              className={`topbar-dot ${i < currentIndex - 1 ? 'done' : i === currentIndex - 1 ? 'active' : ''}`}
            />
          ))}
        </div>
        <span className="topbar-prog-text">{currentIndex} / {totalSubs}</span>
      </div>

      {/* Navigation */}
      <div className="topbar-nav">
        {prevHref ? (
          <Link to={prevHref} className="topbar-nav-btn">
            ← Trước
          </Link>
        ) : (
          <span className="topbar-nav-btn disabled opacity-35">← Trước</span>
        )}
        <Link to={nextHref} className="topbar-nav-btn next-active">
          {nextDisplay}
        </Link>
      </div>
    </div>
  );
}

function getNextLessonSlug(currentSlug: string): string {
  const slugMap: Record<string, string> = {
    'vibecode-la-gi': 'tu-ngu-chuyen-nganh',
    'tu-ngu-chuyen-nganh': 'cai-dat-moi-truong',
    'cai-dat-moi-truong': 'lam-quen-vscode-cursor',
    'lam-quen-vscode-cursor': 'lam-quen-claude-code',
    'lam-quen-claude-code': 'cong-cu-website-huu-ich',
    'cong-cu-website-huu-ich': 'cach-prompt-cho-ai',
    'cach-prompt-cho-ai': 'khi-ai-code-sai',
    'khi-ai-code-sai': 'tao-skills-va-workflow',
    'tao-skills-va-workflow': 'deploy-va-tracking',
    'deploy-va-tracking': 'vibecode',
  };
  return slugMap[currentSlug] || 'vibecode';
}
