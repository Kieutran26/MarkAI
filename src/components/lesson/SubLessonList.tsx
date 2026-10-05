import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { SubLesson } from '../../lib/lessons';
import type { PublicOverviewModule } from '../../lib/public-lesson-mapper';

interface SubLessonListProps {
  subLessons: Array<SubLesson | PublicOverviewModule>;
  lessonSlug: string;
}

export default function SubLessonList({ subLessons, lessonSlug }: SubLessonListProps) {
  const [readIds, setReadIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(`markai_read_${lessonSlug}`);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(`markai_read_${lessonSlug}`, JSON.stringify(readIds));
    } catch {}
  }, [readIds, lessonSlug]);

  const toggleRead = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setReadIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const total = subLessons.length;
  const readCount = subLessons.filter((s) => {
    const id = 'moduleCode' in s ? s.moduleCode : s.id;
    return readIds.includes(id);
  }).length;
  const readPercent = total > 0 ? (readCount / total) * 100 : 0;

  return (
    <section data-screen-label="Contents" className="max-w-[1280px] mx-auto px-6 sm:px-8 pt-20 sm:pt-28">
      {/* Header */}
      <div className="flex justify-between items-end gap-6 flex-wrap pb-2">
        <div>
          <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] mb-5">
            (01) Nội dung bài học
          </div>
          <h2 className="m-0 text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
            {total} phần,{' '}
            <span className="font-light italic text-[#E8772E]">
              đọc theo thứ tự.
            </span>
          </h2>
        </div>

        {/* Read Tracker */}
        <div className="flex items-center gap-3 font-[family-name:var(--mono)] text-[12px] text-[#55534F]">
          <span>{readCount} / {total} đã đọc</span>
          <span className="w-[120px] h-[4px] rounded-full bg-[#E6E4DE] relative overflow-hidden block">
            <span
              className="absolute left-0 top-0 bottom-0 bg-[#E8772E] transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
              style={{ width: `${readPercent}%` }}
            />
          </span>
        </div>
      </div>

      {/* Grid of Parts */}
      <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
        {subLessons.map((sub, index) => {
          const moduleCode = 'moduleCode' in sub ? sub.moduleCode : sub.id;
          const subSlug = 'moduleCode' in sub ? sub.slug : `bai-${sub.id.replace('.', '-')}`;
          const href = `/vibecode/${lessonSlug}/${subSlug}`;
          const summary = 'moduleCode' in sub ? sub.summary : sub.desc;
          const isRead = readIds.includes(moduleCode);
          const isLast = index === subLessons.length - 1;
          const elementId = `muc-${moduleCode.replace('.', '-')}`;

          return (
            <div
              key={subSlug || `${moduleCode}-${index}`}
              id={elementId}
              className="flex flex-col gap-5 pr-0 lg:pr-6 relative group"
            >
              {/* Checkmark circle & connecting horizontal segment */}
              <div className="flex items-center gap-0">
                <button
                  type="button"
                  onClick={(e) => toggleRead(moduleCode, e)}
                  title={isRead ? 'Đánh dấu chưa đọc' : 'Đánh dấu đã đọc'}
                  className={`flex-none w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold transition-all duration-300 cursor-pointer border-2 z-10 box-border ${
                    isRead
                      ? 'bg-[#E8772E] border-[#E8772E] text-white shadow-sm'
                      : 'bg-[#F6F5F1] border-[#CFCDC6] text-transparent hover:border-[#141414]'
                  }`}
                >
                  ✓
                </button>
                <span
                  className={`hidden lg:block flex-1 h-[2px] -mr-6 transition-colors duration-400 ${
                    isLast ? 'opacity-0' : 'opacity-100'
                  } ${isRead ? 'bg-[#E8772E]' : 'bg-[#DAD8D2]'}`}
                />
              </div>

              {/* Big step number */}
              <span
                className={`text-[56px] font-light tracking-[-0.06em] leading-[0.9] transition-colors duration-300 ${
                  isRead ? 'text-[#E8772E]' : 'text-[#C9C7C0]'
                }`}
              >
                {moduleCode}
              </span>

              {/* Title */}
              <h3
                className={`m-0 text-[18px] font-semibold tracking-[-0.02em] leading-[1.3] transition-colors duration-300 ${
                  isRead ? 'text-[#8A8883]' : 'text-[#141414]'
                }`}
              >
                {sub.title}
              </h3>

              {/* Summary */}
              <p className="m-0 text-[14px] leading-[1.6] text-[#6B6B6B] flex-1">
                {summary}
              </p>

              {/* Action Link Button */}
              <div className="mt-auto pt-3">
                <Link
                  to={href}
                  className={`inline-block px-[18px] py-[10px] rounded-full text-[13px] font-medium whitespace-nowrap transition-all border border-[#141414] ${
                    isRead
                      ? 'bg-transparent text-[#141414] hover:bg-[#E8772E] hover:border-[#E8772E] hover:text-white'
                      : 'bg-[#141414] text-white hover:bg-[#E8772E] hover:border-[#E8772E]'
                  }`}
                >
                  {isRead ? 'Đọc lại' : 'Vào học'}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
