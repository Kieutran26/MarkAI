import { Link } from 'react-router-dom';
import type { SubLesson } from '../../lib/lessons';
import type { PublicOverviewModule } from '../../lib/public-lesson-mapper';

interface SubLessonListProps {
  subLessons: Array<SubLesson | PublicOverviewModule>;
  lessonSlug: string;
}

export default function SubLessonList({ subLessons, lessonSlug }: SubLessonListProps) {
  return (
    <div className="border-b border-border bg-bg">
      <div className="page-shell">
        <div className="py-6 border-b border-border flex justify-between items-baseline">
          <h2 className="font-serif text-[1.2rem]">Nội dung bài học</h2>
          <span className="font-mono text-[11px] text-muted">{subLessons.length} phần · Đọc theo thứ tự</span>
        </div>

        <div className="sub-lesson-list-flat">
          {subLessons.map((sub, index) => {
            const moduleCode = 'moduleCode' in sub ? sub.moduleCode : sub.id;
            const subSlug = 'moduleCode' in sub ? sub.slug : `bai-${sub.id.replace('.', '-')}`;
            const href = `/vibecode/${lessonSlug}/${subSlug}`;
            const summary = 'moduleCode' in sub ? sub.summary : sub.desc;

            return (
              <Link key={subSlug || `${moduleCode}-${index}`} to={href} className="sub-lesson-item-flat">
                <div className="sub-lesson-num">
                  <span className="sub-lesson-num-label">MỤC</span>
                  <span className="sub-lesson-num-value">{moduleCode}</span>
                </div>
                <div className="sub-lesson-body-flat">
                  <span className="sub-lesson-title">{sub.title}</span>
                  <span className="sub-lesson-desc-simple">{summary}</span>
                </div>
                <div className="sub-lesson-action-flat">
                  <span className="btn-vao-hoc">Vào học</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
