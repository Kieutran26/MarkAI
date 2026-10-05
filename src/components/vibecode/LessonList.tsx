import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { lessons } from '../../lib/lessons';

export default function LessonList() {
  const [open, setOpen] = useState(0);
  const [step, setStep] = useState(356);
  const [maxX, setMaxX] = useState(99999);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    const children = track.children;
    const calculatedStep =
      children.length > 1
        ? (children[1] as HTMLElement).offsetLeft - (children[0] as HTMLElement).offsetLeft
        : 356;
    const calculatedMaxX = Math.max(0, track.scrollWidth - wrap.clientWidth);
    setStep(calculatedStep);
    setMaxX(calculatedMaxX);
  }, []);

  useEffect(() => {
    measure();
    const handleResize = () => measure();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [measure]);

  const go = (i: number) => {
    const nextIdx = Math.max(0, Math.min(i, lessons.length - 1));
    setOpen(nextIdx);
  };

  const handlePrev = () => {
    setOpen((prev) => (prev + lessons.length - 1) % lessons.length);
  };

  const handleNext = () => {
    setOpen((prev) => (prev + 1) % lessons.length);
  };

  const fillPercent = (open / (lessons.length - 1)) * 100;
  const translateX = -Math.min(open * step, maxX);

  return (
    <section className="pt-24 sm:pt-32 overflow-hidden select-none">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        {/* Header row */}
        <div className="flex justify-between items-end gap-6 flex-wrap">
          <div>
            <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] mb-4">
              (02) 10 bài học
            </div>
            <h2 className="m-0 text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
              Lộ trình <span className="font-light italic text-[#E8772E]">từng bước.</span>
            </h2>
          </div>
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Bài trước"
              className="w-12 h-12 rounded-full border border-[#CFCDC6] bg-transparent flex items-center justify-center text-[18px] text-[#141414] hover:border-[#141414] transition-colors cursor-pointer active:scale-95"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Bài tiếp theo"
              className="w-12 h-12 rounded-full bg-[#141414] text-white flex items-center justify-center text-[18px] hover:bg-[#E8772E] transition-colors cursor-pointer active:scale-95 shadow-sm"
            >
              →
            </button>
          </div>
        </div>

        {/* Stepper timeline */}
        <div className="mt-12 sm:mt-14 grid grid-cols-10 relative">
          {/* Base track */}
          <div className="absolute left-0 right-0 top-[5px] h-[1px] bg-[#DAD8D2]" />
          {/* Animated fill track */}
          <div
            className="absolute left-0 top-[5px] h-[1px] bg-[#141414] transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
            style={{ width: `${fillPercent}%` }}
          />
          {lessons.map((lesson, i) => {
            const isActive = i === open;
            const isCompleted = i < open;

            let dotBg = '#F6F5F1';
            let dotBorder = '#CFCDC6';
            let numColor = '#C9C7C0';

            if (isActive) {
              dotBg = '#E8772E';
              dotBorder = '#E8772E';
              numColor = '#E8772E';
            } else if (isCompleted) {
              dotBg = '#141414';
              dotBorder = '#141414';
              numColor = '#141414';
            }

            return (
              <button
                key={lesson.id}
                type="button"
                onClick={() => go(i)}
                className="relative flex flex-col items-start gap-2.5 bg-transparent border-0 p-0 cursor-pointer group text-left"
              >
                <span
                  className="w-[11px] h-[11px] rounded-full transition-all duration-300"
                  style={{ background: dotBg, borderColor: dotBorder, borderWidth: 1, borderStyle: 'solid' }}
                />
                <span
                  className="font-[family-name:var(--mono)] text-[11px] transition-colors duration-300 font-medium"
                  style={{ color: numColor }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </div>

        {/* Carousel Window */}
        <div ref={wrapRef} className="mt-8 overflow-hidden py-4 -my-4">
          <div
            ref={trackRef}
            className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {lessons.map((lesson, i) => {
              const isActive = i === open;
              const numStr = String(i + 1).padStart(2, '0');

              return (
                <div
                  key={lesson.id}
                  id={`bai-${numStr}`}
                  onClick={() => {
                    if (!isActive) {
                      go(i);
                    } else {
                      navigate(`/vibecode/${lesson.slug}`);
                    }
                  }}
                  className={`cursor-pointer shrink-0 w-[min(340px,82vw)] min-h-[420px] rounded-[22px] p-7 flex flex-col transition-all duration-400 border select-none ${
                    isActive
                      ? 'bg-[#141414] text-[#F6F5F1] border-[#141414] shadow-xl scale-[1.01]'
                      : 'bg-[#FFFFFF] text-[#141414] border-[#E6E4DE] hover:border-[#CFCDC6] hover:shadow-sm'
                  }`}
                >
                  {/* Card Header: Tag & Duration */}
                  <div className="flex justify-between items-center font-[family-name:var(--mono)] text-[11px]">
                    <span className={isActive ? 'text-[#A8A6A0]' : 'text-[#8A8883]'}>
                      {lesson.badge}
                    </span>
                    <span className={isActive ? 'text-[#A8A6A0]' : 'text-[#8A8883]'}>
                      {lesson.duration}
                    </span>
                  </div>

                  {/* Lesson Number */}
                  <span
                    className={`mt-5 text-[64px] font-light tracking-[-0.05em] leading-none transition-colors duration-300 ${
                      isActive ? 'text-[#E8772E]' : 'text-[#C9C7C0]'
                    }`}
                  >
                    {numStr}
                  </span>

                  {/* Title */}
                  <h3 className="mt-5 text-[20px] leading-[1.3] tracking-[-0.02em] font-semibold">
                    {lesson.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-3 text-[14px] leading-[1.6] line-clamp-3 ${
                      isActive ? 'text-[#A8A6A0]' : 'text-[#8A8883]'
                    }`}
                  >
                    {lesson.desc}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex gap-1.5 flex-wrap">
                    {(lesson.tags || []).slice(0, 5).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className={`font-[family-name:var(--mono)] text-[10px] px-2.5 py-1 rounded-full border whitespace-nowrap ${
                          isActive
                            ? 'border-[#3A3935] text-[#A8A6A0]'
                            : 'border-[#E6E4DE] text-[#8A8883]'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="mt-auto pt-6">
                    <Link
                      to={`/vibecode/${lesson.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className={`inline-flex items-center gap-1 text-[13px] font-medium transition-colors ${
                        isActive ? 'text-[#E8772E] hover:underline' : 'text-[#141414] hover:text-[#E8772E]'
                      }`}
                    >
                      Bắt đầu ngay →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
