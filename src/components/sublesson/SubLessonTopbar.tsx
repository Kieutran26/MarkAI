import React from 'react';
import { Link } from 'react-router-dom';
import type { SubLessonFull } from '../../lib/subLessons';
import { getLessonSlug } from '../../lib/lessons';

interface SubLessonTopbarProps {
  subLesson: SubLessonFull;
  lessonSlug: string;
  progressPercent: number;
}

export default function SubLessonTopbar({
  subLesson,
  lessonSlug,
  progressPercent,
}: SubLessonTopbarProps) {
  const { id, lessonId, prevSlug, nextSlug, title } = subLesson;

  const prevHref = prevSlug ? `/vibecode/${lessonSlug}/${prevSlug}` : null;
  const nextHref = nextSlug
    ? `/vibecode/${lessonSlug}/${nextSlug}`
    : `/vibecode/${getLessonSlug(lessonId + 1) || lessonSlug}`;

  const currentLessonNumStr = lessonId.toString().padStart(2, '0');
  const nextLabel = nextSlug
    ? `Bài ${id.split('.')[0]}.${subLesson.currentIndex + 1} →`
    : `Bài ${(lessonId + 1).toString().padStart(2, '0')} →`;

  return (
    <div className="sticky top-0 z-20 bg-[#F6F5F1] border-b border-[#DAD8D2]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-3 flex justify-between items-center gap-4 flex-wrap font-[family-name:var(--mono)] text-[12px]">
        {/* Breadcrumbs */}
        <span className="flex items-center gap-2.5 text-[#8A8883] flex-wrap min-w-0">
          <Link to="/vibecode" className="text-[#8A8883] hover:text-[#141414] transition-colors">
            Vibecode Web
          </Link>
          <span>/</span>
          <Link
            to={`/vibecode/${lessonSlug}`}
            className="text-[#8A8883] hover:text-[#141414] transition-colors"
          >
            Bài {currentLessonNumStr}
          </Link>
          <span>/</span>
          <span className="text-[#141414] font-medium truncate max-w-[280px] sm:max-w-none">
            {id} {title.split('—')[0].trim()}
          </span>
        </span>

        {/* Next / Prev Controls */}
        <div className="flex items-center gap-1.5">
          {prevHref ? (
            <Link
              to={prevHref}
              className="px-3.5 py-1.5 rounded-full border border-[#E6E4DE] text-[#55534F] bg-white hover:border-[#141414] hover:text-[#141414] transition-all whitespace-nowrap"
            >
              ← Trước
            </Link>
          ) : (
            <span className="px-3.5 py-1.5 rounded-full border border-[#E6E4DE] text-[#C9C7C0] bg-white/50 cursor-not-allowed whitespace-nowrap">
              ← Trước
            </span>
          )}

          <Link
            to={nextHref}
            className="px-3.5 py-1.5 rounded-full bg-[#141414] text-white hover:bg-[#E8772E] transition-all whitespace-nowrap shadow-sm"
          >
            {nextLabel}
          </Link>
        </div>
      </div>

      {/* Reading Progress Line */}
      <div className="h-[2px] w-full bg-transparent overflow-hidden">
        <div
          className="h-full bg-[#E8772E] transition-all duration-150 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
