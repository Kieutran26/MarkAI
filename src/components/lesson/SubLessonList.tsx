import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { SubLesson } from '../lib/lessons';

interface SubLessonListProps {
  subLessons: SubLesson[];
  lessonSlug: string;
}

export default function SubLessonList({ subLessons, lessonSlug }: SubLessonListProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="border-b border-border bg-bg">
      <div className="page-shell">
        {/* Header */}
        <div className="py-6 border-b border-border flex justify-between items-baseline">
          <h2 className="font-serif text-[1.2rem]">
            Nội dung bài học
          </h2>
          <span className="font-mono text-[11px] text-muted">{subLessons.length} phần · Đọc theo thứ tự</span>
        </div>

        {/* Sub Lessons */}
        <div className="sub-lesson-accordion">
          {subLessons.map((sub) => {
            const isOpen = openIds[sub.id];
            const subSlug = `bai-${sub.id.replace('.', '-')}`;
            const href = `/vibecode/${lessonSlug}/${subSlug}`;

            return (
              <div 
                key={sub.id} 
                className={`sub-lesson-item-wrap ${isOpen ? 'is-open' : ''}`}
              >
                {/* Header: Always visible */}
                <div 
                  className="sub-lesson-item-header"
                  onClick={() => toggleItem(sub.id)}
                >
                  <div className="sub-lesson-num">
                    <span className="sub-lesson-num-label">MỤC</span>
                    <span className="sub-lesson-num-value">{sub.id}</span>
                  </div>
                  
                  <div className="sub-lesson-header-body">
                    <span className="sub-lesson-title">{sub.title}</span>
                  </div>

                  <div className="sub-lesson-toggle-icon">
                    {isOpen ? '−' : '+'}
                  </div>
                </div>

                {/* Content: Visible when open */}
                {isOpen && (
                  <div className="sub-lesson-item-content">
                    <div className="sub-lesson-content-inner">
                      <div className="sub-lesson-content-body">
                        <span className="sub-lesson-eyebrow">{sub.eyebrow}</span>
                        <p className="sub-lesson-desc-full">{sub.desc}</p>
                        
                        {sub.paragraphs && sub.paragraphs.length > 0 && (
                          <div className="sub-lesson-paragraphs">
                            {sub.paragraphs.map((p, i) => (
                              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                            ))}
                          </div>
                        )}

                        {sub.useCases && (
                          <div className="mt-4 space-y-2">
                            {sub.useCases.map((uc, i) => (
                              <div key={i} className="flex gap-2">
                                <span className="text-accent">•</span>
                                <div>
                                  <span className="font-bold">{uc.title}:</span> {uc.desc}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {sub.gridItems && (
                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {sub.gridItems.map((item, i) => (
                              <div key={i} className="border border-border p-3 bg-bg">
                                <div className="text-[10px] font-mono text-muted uppercase">{item.label}</div>
                                <div className="font-serif text-sm">{item.title}</div>
                                <div className="text-xs text-muted mt-1">{item.desc}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {sub.compareRows && (
                          <div className="mt-4 border border-border divide-y divide-border">
                            {sub.compareHeaders && (
                              <div className="grid grid-cols-2 bg-bg3 p-2 font-mono text-[10px] uppercase text-muted">
                                <div>{sub.compareHeaders[0]}</div>
                                <div>{sub.compareHeaders[1]}</div>
                              </div>
                            )}
                            {sub.compareRows.map((row, i) => (
                              <div key={i} className="grid grid-cols-2 p-2 text-xs">
                                <div className="pr-2 border-r border-border">{row[0]}</div>
                                <div className="pl-2">{row[1]}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {sub.insight && (
                          <div className="mt-4 p-3 bg-accent/10 border-l-2 border-accent text-xs italic">
                            {sub.insight}
                          </div>
                        )}

                        <div className="sub-lesson-meta-row">
                          <span className="sub-lesson-time">
                            {getDuration(sub.id)}
                          </span>
                          <Link to={href} className="sub-lesson-action-btn">
                            Bắt đầu học →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
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
