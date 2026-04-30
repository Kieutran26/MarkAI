import { Link } from 'react-router-dom';
import type { SubLessonFull } from '../../lib/subLessons';
import { getSubLessonsByLesson } from '../../lib/subLessons';

interface ReaderSidebarProps {
  subLesson: SubLessonFull;
  lessonSlug: string;
  subLessons?: SubLessonFull[];
  onClose?: () => void;
}

export default function ReaderSidebar({ subLesson, lessonSlug, subLessons, onClose }: ReaderSidebarProps) {
  const { id, lessonId, lessonTitle, totalSubs, currentIndex } = subLesson;
  const allSubLessons = subLessons ?? getSubLessonsByLesson(lessonSlug);

  const handleClick = () => {
    if (onClose) onClose();
  };

  return (
    <aside className="reader-sidebar" id="reader-sidebar">
      {/* Header */}
      <div className="sidebar-lesson-header">
        <p className="slh-label">Bài {lessonId.toString().padStart(2, '0')} · {totalSubs} phần</p>
        <p className="slh-title">{lessonTitle}</p>
      </div>

      {/* Section Label */}
      <p className="sidebar-section-label">Các phần trong bài này</p>

      {/* Sub Lessons */}
      {allSubLessons.map((sl, index) => {
        const subSlug = sl.slug;
        const isActive = sl.id === id;
        const isDone = index < currentIndex - 1;

        return (
          <Link
            key={sl.id}
            to={`/vibecode/${lessonSlug}/${subSlug}`}
            className={`sidebar-item ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
            onClick={handleClick}
          >
            <span className="si-num">{sl.id}</span>
            <div className="si-body">
              <span className="si-title">{sl.title.split('—')[0].trim()}</span>
              <span className="si-time">{sl.duration}</span>
            </div>
            {isDone && <span className="si-check">✓</span>}
          </Link>
        );
      })}

      {/* Next Lesson */}
      <div className="sidebar-next-lesson">
        <p className="snl-label">Bài tiếp theo</p>
        {getNextLessons(lessonSlug).map((next) => (
          <Link
            key={next.slug}
            to={`/vibecode/${next.slug}`}
            className="snl-item"
            onClick={handleClick}
          >
            <span className="snl-num">{next.id.toString().padStart(2, '0')}</span>
            <span>{next.title.split('—')[0].trim()}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}

function getNextLessons(currentSlug: string) {
  const allLessons = [
    { id: 1, slug: 'vibecode-la-gi', title: 'Vibecode là gì?' },
    { id: 2, slug: 'tu-ngu-chuyen-nganh', title: 'Từ ngữ chuyên ngành' },
    { id: 3, slug: 'cai-dat-moi-truong', title: 'Cài đặt môi trường' },
    { id: 4, slug: 'lam-quen-vscode-cursor', title: 'Làm quen VS Code & Cursor' },
    { id: 5, slug: 'lam-quen-claude-code', title: 'Làm quen Claude Code' },
    { id: 6, slug: 'cong-cu-website-huu-ich', title: 'Công cụ & website hữu ích' },
    { id: 7, slug: 'cach-prompt-cho-ai', title: 'Cách prompt cho AI' },
    { id: 8, slug: 'khi-ai-code-sai', title: 'Khi AI code sai' },
    { id: 9, slug: 'tao-skills-va-workflow', title: 'Tạo Skills & Workflow' },
    { id: 10, slug: 'deploy-va-tracking', title: 'Deploy + Tracking' },
  ];

  const currentIndex = allLessons.findIndex(l => l.slug === currentSlug);
  const nextLessons = allLessons.slice(currentIndex + 1, currentIndex + 4);

  if (nextLessons.length === 0) {
    return [{ id: 10, slug: 'deploy-va-tracking', title: 'Xem toàn bộ lộ trình →' }];
  }

  if (nextLessons.length < 3) {
    nextLessons.push({ id: 10, slug: 'deploy-va-tracking', title: 'Xem toàn bộ lộ trình →' });
  }

  return nextLessons;
}
