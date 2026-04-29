import { Link } from 'react-router-dom';
import type { SubLessonFull } from '../../lib/subLessons';

interface ContentFooterProps {
  subLesson: SubLessonFull;
  lessonSlug: string;
}

export default function ContentFooter({ subLesson, lessonSlug }: ContentFooterProps) {
  const { id, lessonId, prevSlug, nextSlug, prevTitle, nextTitle, currentIndex, totalSubs } = subLesson;

  const prevHref = prevSlug ? `/vibecode/${lessonSlug}/${prevSlug}` : null;
  const isLastInLesson = currentIndex === totalSubs;

  let nextHref: string;
  let nextDisplayText: string;

  if (nextSlug) {
    nextHref = `/vibecode/${lessonSlug}/${nextSlug}`;
    nextDisplayText = nextTitle?.split('—')[0].trim() || '';
  } else if (isLastInLesson) {
    nextHref = `/vibecode/${getNextLessonSlug(lessonSlug)}`;
    nextDisplayText = `Bài ${lessonId + 1} · Từ ngữ chuyên ngành`;
  } else {
    nextHref = `/vibecode/${lessonSlug}`;
    nextDisplayText = ' Quay về bài học';
  }

  return (
    <div className="content-footer">
      {/* Previous */}
      {prevHref ? (
        <Link to={prevHref} className="cf-btn">
          <span className="cf-dir">← Phần trước</span>
          <span className="cf-title">{prevTitle?.split('—')[0].trim()}</span>
          <span className="cf-sub">{id.split('.')[0]}.{currentIndex - 1} · ~5 phút</span>
        </Link>
      ) : (
        <div className="cf-btn disabled opacity-35 pointer-events-none">
          <span className="cf-dir">← Phần trước</span>
          <span className="cf-title">—</span>
          <span className="cf-sub">Không có phần trước</span>
        </div>
      )}

      {/* Next */}
      <Link to={nextHref} className="cf-btn cf-btn-next">
        <span className="cf-dir">Phần tiếp theo →</span>
        <span className="cf-title">{nextDisplayText}</span>
        <span className="cf-sub">
          {nextSlug
            ? `${id.split('.')[0]}.${currentIndex + 1} · ~5 phút`
            : `Bài ${lessonId + 1} · ~${getNextDuration(lessonId)} phút`}
        </span>
      </Link>
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

function getNextDuration(lessonId: number): string {
  const durations: Record<number, string> = {
    1: '40',
    2: '30',
    3: '35',
    4: '30',
    5: '25',
    6: '35',
    7: '30',
    8: '45',
    9: '50',
  };
  return durations[lessonId] || '30';
}
