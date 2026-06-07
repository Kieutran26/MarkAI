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
    nextDisplayText = (nextTitle || '').trim();
  } else if (isLastInLesson) {
    nextHref = `/vibecode/${getNextLessonSlug(lessonSlug)}`;
    nextDisplayText = getNextLessonLabel(lessonSlug);
  } else {
    nextHref = `/vibecode/${lessonSlug}`;
    nextDisplayText = 'Quay về bài học';
  }

  return (
    <div className="content-footer">
      {prevHref ? (
        <Link to={prevHref} className="cf-btn">
          <span className="cf-dir">← Phần trước</span>
          <span className="cf-title">{(prevTitle || '').trim()}</span>
          <span className="cf-sub">{id.split('.')[0]}.{currentIndex - 1} · ~5 phút</span>
        </Link>
      ) : (
        <div className="cf-btn disabled opacity-35 pointer-events-none">
          <span className="cf-dir">← Phần trước</span>
          <span className="cf-title">—</span>
          <span className="cf-sub">Không có phần trước</span>
        </div>
      )}

      <Link to={nextHref} className="cf-btn cf-btn-next">
        <span className="cf-dir">Phần tiếp theo →</span>
        <span className="cf-title">{nextDisplayText}</span>
        <span className="cf-sub">
          {nextSlug ? `${id.split('.')[0]}.${currentIndex + 1} · ~5 phút` : `Bài ${lessonId + 1} · ~${getNextDuration(lessonId)} phút`}
        </span>
      </Link>
    </div>
  );
}

function getNextLessonSlug(currentSlug: string): string {
  const slugMap: Record<string, string> = {
    'vibecode-la-gi': 'tu-ngu-chuyen-nganh',
    'tu-ngu-chuyen-nganh': 'cai-dat-moi-truong',
    'cai-dat-moi-truong': 'dung-giao-dien-web-nhanh-voi-ai',
    'dung-giao-dien-web-nhanh-voi-ai': 'lam-quen-claude-code',
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

function getNextLessonLabel(currentSlug: string): string {
  const labels: Record<string, string> = {
    'vibecode-la-gi': 'Bài 02 · AI đang “nói gì” với bạn?',
    'tu-ngu-chuyen-nganh': 'Bài 03 · Cài đặt môi trường',
    'cai-dat-moi-truong': 'Bài 04 · Dựng giao diện web nhanh với AI',
    'dung-giao-dien-web-nhanh-voi-ai': 'Bài 05 · Làm quen Claude Code',
    'lam-quen-claude-code': 'Bài 06 · Công cụ & website hữu ích',
    'cong-cu-website-huu-ich': 'Bài 07 · Cách prompt cho AI',
    'cach-prompt-cho-ai': 'Bài 08 · Khi AI code sai',
    'khi-ai-code-sai': 'Bài 09 · Tạo Skills & Workflow',
    'tao-skills-va-workflow': 'Bài 10 · Deploy + Tracking',
  };
  return labels[currentSlug] || 'Quay về lộ trình';
}
