import React from 'react';
import { Link } from 'react-router-dom';
import { lessons, getLessonSlug } from '../../lib/lessons';

interface SubLessonNextBannerProps {
  currentLessonId: number;
}

export default function SubLessonNextBanner({ currentLessonId }: SubLessonNextBannerProps) {
  const currentNumStr = currentLessonId.toString().padStart(2, '0');
  const remaining = lessons.filter((l) => l.id > currentLessonId).slice(0, 3);

  if (remaining.length === 0) return null;

  return (
    <section data-screen-label="Next lessons" className="px-4 sm:px-6 pb-20 sm:pb-28">
      <div className="max-w-[1280px] mx-auto bg-[#141414] text-[#F6F5F1] rounded-[28px] p-8 sm:p-12 lg:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-end shadow-xl">
        <div>
          <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] mb-4">
            Bài tiếp theo trong lộ trình
          </div>
          <h2 className="m-0 text-[clamp(28px,3.4vw,40px)] leading-[1.1] tracking-[-0.04em] font-semibold text-balance">
            Học xong Bài {currentNumStr}?{' '}
            <span className="font-light italic text-[#E8772E]">Đi tiếp.</span>
          </h2>
        </div>

        <div>
          <div className="divide-y divide-[#2A2927]">
            {remaining.map((r) => {
              const slug = getLessonSlug(r.id);
              const numStr = r.id.toString().padStart(2, '0');
              return (
                <Link
                  key={r.id}
                  to={`/vibecode/${slug}`}
                  className="grid grid-cols-[48px_minmax(0,1fr)_20px] gap-3 items-center py-3.5 text-[#EDEBE6] hover:text-[#E8772E] transition-colors group"
                >
                  <span className="font-[family-name:var(--mono)] text-[11px] text-[#6E6C67] group-hover:text-[#E8772E] transition-colors">
                    {numStr}
                  </span>
                  <span className="text-[15px] truncate text-[#EDEBE6] group-hover:text-[#E8772E] transition-colors">
                    {r.title}
                  </span>
                  <span className="text-right text-[14px] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
