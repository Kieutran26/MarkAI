import React from 'react';
import { Link } from 'react-router-dom';
import type { SubLessonFull } from '../../lib/subLessons';
import { getLessonSlug } from '../../lib/lessons';

interface SubLessonNavCardsProps {
  subLesson: SubLessonFull;
  lessonSlug: string;
}

export default function SubLessonNavCards({ subLesson, lessonSlug }: SubLessonNavCardsProps) {
  const { prevSlug, nextSlug, prevTitle, nextTitle, id, currentIndex, totalSubs, lessonId } = subLesson;

  const prevHref = prevSlug ? `/vibecode/${lessonSlug}/${prevSlug}` : null;
  const isLast = currentIndex === totalSubs;

  let nextHref: string;
  let nextLabel: string;
  let nextMeta: string;

  if (nextSlug) {
    nextHref = `/vibecode/${lessonSlug}/${nextSlug}`;
    nextLabel = nextTitle || 'Phần tiếp theo';
    nextMeta = `${id.split('.')[0]}.${currentIndex + 1} · ~5 phút`;
  } else if (isLast) {
    const nextLessonSlug = getLessonSlug(lessonId + 1);
    nextHref = nextLessonSlug ? `/vibecode/${nextLessonSlug}` : `/vibecode/${lessonSlug}`;
    nextLabel = `Bài ${(lessonId + 1).toString().padStart(2, '0')}`;
    nextMeta = 'Bài tiếp theo trong lộ trình';
  } else {
    nextHref = `/vibecode/${lessonSlug}`;
    nextLabel = 'Quay về bài học';
    nextMeta = 'Xem tổng quan bài học';
  }

  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {/* Previous Card */}
      {prevHref ? (
        <Link
          to={prevHref}
          className="border border-[#DAD8D2] rounded-[20px] p-6 bg-white/40 hover:border-[#141414] transition-all group block"
        >
          <div className="font-[family-name:var(--mono)] text-[11px] text-[#8A8883]">
            ← Phần trước
          </div>
          <div className="mt-7 text-[16px] sm:text-[17px] font-semibold text-[#141414] truncate">
            {prevTitle || 'Phần trước'}
          </div>
        </Link>
      ) : (
        <div className="border border-[#E6E4DE] rounded-[20px] p-6 text-[#B8B6B0] bg-white/40">
          <div className="font-[family-name:var(--mono)] text-[11px]">← Phần trước</div>
          <div className="mt-7 text-[16px]">Không có phần trước</div>
        </div>
      )}

      {/* Next Card */}
      <Link
        to={nextHref}
        className="bg-[#141414] text-[#F6F5F1] rounded-[20px] p-6 block hover:bg-[#E8772E] transition-all group shadow-sm active:scale-[0.98]"
      >
        <div className="flex justify-between font-[family-name:var(--mono)] text-[11px] opacity-75">
          <span>Phần tiếp theo</span>
          <span>{nextMeta}</span>
        </div>
        <div className="mt-7 flex justify-between items-center gap-4 text-[18px] sm:text-[19px] font-semibold tracking-[-0.02em] leading-[1.3]">
          <span className="truncate">{nextLabel}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </Link>
    </div>
  );
}
