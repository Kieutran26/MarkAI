import React from 'react';
import { Link } from 'react-router-dom';
import { lessons } from '../../lib/lessons';

export default function LessonList() {
  const getBadgeClass = (type: 'accent' | 'dark' | 'green' | undefined) => {
    switch (type) {
      case 'accent': return 'badge badge-accent';
      case 'dark': return 'badge badge-dark';
      case 'green': return 'badge badge-green';
      default: return 'badge badge-dark';
    }
  };

  return (
    <div className="border-b border-[var(--border)] overflow-hidden">
      <div className="page-shell py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-4">
          {lessons.map((lesson, index) => (
            <React.Fragment key={lesson.id}>
              <div className="relative group">
                <Link
                  to={`/vibecode/${lesson.slug}`}
                  className="flex flex-col h-full border border-[var(--border)] p-6 hover:border-[var(--accent)] transition-all bg-white relative z-10 no-underline text-inherit"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <span className="font-[family-name:var(--mono)] text-[10px] text-[var(--muted)] uppercase tracking-widest mb-1">Bài</span>
                      <span className="font-[family-name:var(--mono)] text-3xl font-bold text-[var(--accent)]">{lesson.id.toString().padStart(2, '0')}</span>
                    </div>
                    <span className={getBadgeClass(lesson.badgeType)}>
                      {lesson.badge}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--serif)] text-[1.25rem] leading-[1.2] mb-3 group-hover:text-[var(--accent)] transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="font-[family-name:var(--sans)] text-[13.5px] font-light text-[var(--ink2)] leading-[1.6] mb-6 line-clamp-3">
                      {lesson.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                    <span className="badge badge-outline text-[10px]">{lesson.duration}</span>
                    <span className="badge badge-outline text-[10px]">{lesson.subLessonCount} bài nhỏ</span>
                  </div>
                </Link>

                {/* Arrow to next lesson */}
                {index < lessons.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-20 pointer-events-none">
                    {/* Only show horizontal arrow if not at the end of a row of 3 */}
                    {(index + 1) % 3 !== 0 ? (
                      <span className="text-[var(--border)] text-xl">→</span>
                    ) : (
                      /* This is the end of a row of 3, show a "down and return" indicator or just hide it */
                      null
                    )}
                  </div>
                )}
                
                {index < lessons.length - 1 && (
                  <div className="hidden md:block lg:hidden absolute top-1/2 -right-6 -translate-y-1/2 z-20 pointer-events-none">
                    {/* Only show horizontal arrow if not at the end of a row of 2 */}
                    {(index + 1) % 2 !== 0 ? (
                      <span className="text-[var(--border)] text-xl">→</span>
                    ) : null}
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
