import React from 'react';
import { Link } from 'react-router-dom';
import type { Lesson } from '../../lib/lessons';

interface LessonNextUpProps {
  currentLesson: Lesson;
  nextLesson: Lesson | undefined;
  remainingLessons: Lesson[];
}

export default function LessonNextUp({
  nextLesson,
  remainingLessons,
}: LessonNextUpProps) {
  if (!nextLesson) return null;

  const nextNumStr = String(nextLesson.id).padStart(2, '0');

  return (
    <section data-screen-label="Next" className="px-4 sm:px-6 pb-20 sm:pb-28">
      <div className="max-w-[1280px] mx-auto bg-[#141414] text-[#F6F5F1] rounded-[28px] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 shadow-xl">
        {/* Left Column: Next Lesson */}
        <div>
          <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] mb-5">
            Bài tiếp theo trong lộ trình
          </div>
          <h2 className="m-0 text-[clamp(28px,3.4vw,44px)] leading-[1.12] tracking-[-0.04em] font-semibold text-balance">
            <span className="text-[#E8772E]">Bài {nextNumStr} —</span> {nextLesson.title}
          </h2>
          <p className="mt-5 text-[15px] leading-[1.65] text-[#A8A6A0] max-w-[460px]">
            {nextLesson.desc}
          </p>
          <Link
            to={`/vibecode/${nextLesson.slug}`}
            className="inline-block mt-7 bg-[#E8772E] text-white px-6 py-3.5 rounded-full text-[14px] font-medium whitespace-nowrap hover:bg-white hover:text-[#141414] transition-all shadow-sm active:scale-[0.98]"
          >
            Học bài {nextNumStr} →
          </Link>
        </div>

        {/* Right Column: Remaining Lessons */}
        <div>
          <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] mb-3">
            Các bài còn lại
          </div>
          <div className="divide-y divide-[#2A2927]">
            {remainingLessons.slice(0, 4).map((lesson) => (
              <Link
                key={lesson.id}
                to={`/vibecode/${lesson.slug}`}
                className="grid grid-cols-[72px_minmax(0,1fr)_20px] gap-3 items-center py-[15px] text-[#EDEBE6] hover:text-[#E8772E] transition-colors group"
              >
                <span className="font-[family-name:var(--mono)] text-[11px] text-[#6E6C67] group-hover:text-[#E8772E] transition-colors">
                  {String(lesson.id).padStart(2, '0')}
                </span>
                <span className="text-[15px] truncate text-[#EDEBE6] group-hover:text-[#E8772E] transition-colors">
                  {lesson.title}
                </span>
                <span className="text-right text-[14px] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </Link>
            ))}

            {remainingLessons.length > 4 && (
              <div className="grid grid-cols-[72px_minmax(0,1fr)_20px] gap-3 items-center py-[15px] text-[#EDEBE6]/80">
                <span className="font-[family-name:var(--mono)] text-[11px] text-[#6E6C67]">
                  {String(remainingLessons[4].id).padStart(2, '0')}–10
                </span>
                <span className="text-[15px] truncate text-[#A8A6A0]">
                  Công cụ · Prompt · Debug · Workflow · Deploy
                </span>
                <span className="text-right text-[14px] opacity-50">
                  →
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
