import React from 'react';
import { Link } from 'react-router-dom';
import type { SubLessonFull } from '../../lib/subLessons';

export interface TocEntry {
  id: string;
  n: string;
  t: string;
}

interface SubLessonAsideProps {
  toc: TocEntry[];
  activeId: string;
  lessonSlug: string;
  currentSubLessonId: string;
  subLessons: SubLessonFull[];
  lessonId: number;
}

export default function SubLessonAside({
  toc,
  activeId,
  lessonSlug,
  currentSubLessonId,
  subLessons,
  lessonId,
}: SubLessonAsideProps) {
  const lessonNumStr = lessonId.toString().padStart(2, '0');

  return (
    <aside className="hidden lg:flex flex-col gap-10 w-[280px] shrink-0 sticky top-[72px] pt-[72px] pb-12 self-start">
      {/* 1. In this section (TOC) */}
      {toc && toc.length > 0 && (
        <div>
          <div className="font-[family-name:var(--mono)] text-[11px] text-[#8A8883] mb-3 uppercase tracking-wider">
            Trong phần này
          </div>
          <div className="flex flex-col">
            {toc.map((t) => {
              const isActive = t.id === activeId;
              return (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className={`grid grid-cols-[28px_1fr] gap-2 py-2.5 text-[14px] leading-[1.4] transition-all border-l-2 pl-3.5 ${
                    isActive
                      ? 'border-[#E8772E] text-[#141414] font-semibold'
                      : 'border-[#E6E4DE] text-[#8A8883] font-normal hover:text-[#141414] hover:border-[#CFCDC6]'
                  }`}
                >
                  <span className="font-[family-name:var(--mono)] text-[11px] pt-0.5 opacity-80">
                    {t.n}
                  </span>
                  <span className="truncate">{t.t}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Sibling Sub-lessons */}
      <div>
        <div className="font-[family-name:var(--mono)] text-[11px] text-[#8A8883] mb-3 uppercase tracking-wider">
          Bài {lessonNumStr} · {subLessons.length} phần
        </div>
        <div className="border-t border-[#141414]">
          {subLessons.map((p) => {
            const isCurrent = p.id === currentSubLessonId;
            return (
              <Link
                key={p.id}
                to={`/vibecode/${lessonSlug}/${p.slug}`}
                className={`grid grid-cols-[32px_1fr] gap-2 py-3 border-b border-[#DAD8D2] text-[14px] leading-[1.4] transition-colors group ${
                  isCurrent ? 'text-[#141414]' : 'text-[#55534F] hover:text-[#E8772E]'
                }`}
              >
                <span
                  className={`font-[family-name:var(--mono)] text-[11px] pt-0.5 transition-colors ${
                    isCurrent
                      ? 'text-[#E8772E] font-medium'
                      : 'text-[#A8A6A0] group-hover:text-[#E8772E]'
                  }`}
                >
                  {p.id}
                </span>
                <div>
                  <span
                    className={`block ${
                      isCurrent ? 'font-semibold text-[#141414]' : 'font-normal'
                    }`}
                  >
                    {p.title.split('—')[0].trim()}
                  </span>
                  <span className="block mt-0.5 font-[family-name:var(--mono)] text-[11px] text-[#A8A6A0]">
                    {p.duration}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
