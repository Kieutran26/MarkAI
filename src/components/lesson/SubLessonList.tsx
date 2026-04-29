import { Link } from 'react-router-dom';
import type { SubLesson } from '../lib/lessons';

interface SubLessonListProps {
  subLessons: SubLesson[];
  lessonSlug: string;
}

export default function SubLessonList({ subLessons, lessonSlug }: SubLessonListProps) {
  return (
    <div className="border-b border-border">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="px-8 py-6 border-b border-border flex justify-between items-baseline">
          <h2 className="font-serif text-[1.2rem]">
            {subLessons.length} phần trong bài này
          </h2>
          <span className="font-mono text-[11px] text-muted">Đọc theo thứ tự hoặc chọn phần bất kỳ</span>
        </div>

        {/* Sub Lessons */}
        {subLessons.map((sub, index) => {
          const subSlug = `bai-${sub.id.replace('.', '-')}`;
          const href = `/vibecode/${lessonSlug}/${subSlug}`;

          return (
            <Link
              key={sub.id}
              to={href}
              className="sub-lesson-item"
            >
              {/* Number Column */}
              <div className="sub-lesson-num">
                <span className="sub-lesson-num-label">MỤC</span>
                <span className="sub-lesson-num-value">{sub.id}</span>
              </div>

              {/* Content Column */}
              <div className="sub-lesson-body">
                <span className="sub-lesson-eyebrow">{sub.eyebrow}</span>
                <span className="sub-lesson-title">{sub.title}</span>
                <span className="sub-lesson-desc">{sub.desc}</span>
                <div className="sub-lesson-meta">
                  <span className="sub-lesson-time">
                    {getDuration(sub.id)}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="sub-lesson-arrow">→</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function getDuration(id: string): string {
  const durations: Record<string, string> = {
    '1.1': '~4 phút',
    '1.2': '~5 phút',
    '1.3': '~4 phút',
    '1.4': '~4 phút',
    '1.5': '~3 phút',
    '2.1': '~6 phút',
    '2.2': '~5 phút',
    '2.3': '~7 phút',
    '2.4': '~6 phút',
    '2.5': '~8 phút',
    '2.6': '~8 phút',
    '3.1': '~4 phút',
    '3.2': '~5 phút',
    '3.3': '~5 phút',
    '3.4': '~6 phút',
    '3.5': '~6 phút',
    '3.6': '~4 phút',
    '4.1': '~5 phút',
    '4.2': '~6 phút',
    '4.3': '~6 phút',
    '4.4': '~5 phút',
    '4.5': '~7 phút',
    '4.6': '~6 phút',
    '5.1': '~5 phút',
    '5.2': '~6 phút',
    '5.3': '~6 phút',
    '5.4': '~6 phút',
    '5.5': '~7 phút',
    '6.1': '~4 phút',
    '6.2': '~4 phút',
    '6.3': '~4 phút',
    '6.4': '~5 phút',
    '6.5': '~4 phút',
    '6.6': '~4 phút',
    '7.1': '~5 phút',
    '7.2': '~6 phút',
    '7.3': '~6 phút',
    '7.4': '~5 phút',
    '7.5': '~7 phút',
    '7.6': '~6 phút',
    '8.1': '~4 phút',
    '8.2': '~5 phút',
    '8.3': '~6 phút',
    '8.4': '~5 phút',
    '8.5': '~5 phút',
    '8.6': '~5 phút',
    '9.1': '~8 phút',
    '9.2': '~8 phút',
    '9.3': '~10 phút',
    '9.4': '~10 phút',
    '9.5': '~9 phút',
    '10.1': '~10 phút',
    '10.2': '~8 phút',
    '10.3': '~12 phút',
    '10.4': '~10 phút',
    '10.5': '~10 phút',
  };
  return durations[id] || '~5 phút';
}
