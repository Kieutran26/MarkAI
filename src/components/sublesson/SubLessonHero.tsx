import React from 'react';
import type { SubLessonFull } from '../../lib/subLessons';

interface SubLessonHeroProps {
  subLesson: SubLessonFull;
}

export default function SubLessonHero({ subLesson }: SubLessonHeroProps) {
  const { id, eyebrow, title, titleEm, desc, duration, lessonId, totalSubs, currentIndex } = subLesson;

  // Split title if it contains emphasis part
  const renderTitle = () => {
    if (id === '1.1') {
      return (
        <>
          Vibecode <span className="font-light italic text-[#E8772E]">là gì</span>
        </>
      );
    }

    if (titleEm && title.includes(titleEm)) {
      const idx = title.indexOf(titleEm);
      const before = title.slice(0, idx);
      const after = title.slice(idx + titleEm.length);
      return (
        <>
          {before}
          <span className="font-light italic text-[#E8772E]">{titleEm}</span>
          {after}
        </>
      );
    }

    const emMatch = title.match(/^(.*?)(\s+[^\s]+[\?]?)$/);
    if (emMatch && emMatch[2]) {
      return (
        <>
          {emMatch[1]} <span className="font-light italic text-[#E8772E]">{emMatch[2].trim()}</span>
        </>
      );
    }

    return title;
  };

  const lessonNumStr = lessonId.toString().padStart(2, '0');

  return (
    <section
      data-screen-label={`${id} Hero`}
      className="max-w-[1280px] mx-auto px-6 sm:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 border-b border-[#DAD8D2]"
    >
      <div className="font-[family-name:var(--mono)] text-[12px] text-[#E8772E]">
        {id} · {eyebrow || 'Định nghĩa'}
      </div>

      <h1 className="mt-5 text-[clamp(44px,7vw,104px)] leading-[0.98] tracking-[-0.055em] font-semibold text-[#141414] text-balance">
        {renderTitle()}
      </h1>

      <div className="mt-8 sm:mt-10 flex justify-between items-end gap-8 flex-wrap">
        <p className="m-0 text-[18px] sm:text-[19px] leading-[1.6] text-[#3A3935] max-w-[600px] text-balance">
          {desc}
        </p>

        <div className="flex gap-1.5 flex-wrap font-[family-name:var(--mono)] text-[11px]">
          <span className="px-3 py-1.5 rounded-full border border-[#DAD8D2] text-[#55534F] bg-white/60 whitespace-nowrap">
            {duration} đọc
          </span>
          <span className="px-3 py-1.5 rounded-full border border-[#DAD8D2] text-[#55534F] bg-white/60 whitespace-nowrap">
            Bài {lessonNumStr} / 10
          </span>
          <span className="px-3 py-1.5 rounded-full bg-[#141414] text-white whitespace-nowrap">
            Mục {currentIndex} / {totalSubs}
          </span>
        </div>
      </div>
    </section>
  );
}
