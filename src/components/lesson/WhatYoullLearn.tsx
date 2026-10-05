import React from 'react';

interface WhatYoullLearnProps {
  items: { icon?: React.ReactNode; title: string; desc: string }[];
  lessonId: number;
}

export default function WhatYoullLearn({ items }: WhatYoullLearnProps) {
  if (!items || items.length === 0) return null;

  const first = items[0];
  const others = items.slice(1);

  return (
    <section data-screen-label="Outcomes" className="max-w-[1280px] mx-auto px-6 sm:px-8 py-24 sm:py-32">
      <div className="font-[family-name:var(--mono)] text-[12px] text-[#8A8883] mb-5">
        (02) Kết quả
      </div>
      <h2 className="m-0 text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.045em] font-semibold text-[#141414]">
        Sau bài này bạn sẽ{' '}
        <span className="font-light italic text-[#E8772E]">
          hiểu được
        </span>
      </h2>

      {/* Bento Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-fr">
        {/* Featured First Item (Dark Card spanning 2 rows) */}
        {first && (
          <div className="lg:row-span-2 bg-[#141414] text-[#F6F5F1] rounded-[20px] p-8 sm:p-9 flex flex-col justify-between gap-8 shadow-sm">
            <span className="text-[84px] sm:text-[96px] font-light tracking-[-0.06em] leading-[0.85] text-[#E8772E]">
              01
            </span>
            <div>
              <h3 className="m-0 text-[26px] sm:text-[28px] font-semibold tracking-[-0.035em] leading-[1.15]">
                {first.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#A8A6A0]">
                {first.desc}
              </p>
            </div>
          </div>
        )}

        {/* Other Items (White Cards) */}
        {others.map((item, index) => {
          const numStr = String(index + 2).padStart(2, '0');
          return (
            <div
              key={index}
              className="bg-white border border-[#E6E4DE] rounded-[20px] p-7 flex flex-col justify-between gap-6 shadow-sm hover:border-[#CFCDC6] transition-all min-h-[190px]"
            >
              <span className="font-[family-name:var(--mono)] text-[12px] text-[#E8772E] font-medium">
                {numStr}
              </span>
              <div>
                <h3 className="m-0 text-[18px] sm:text-[19px] font-semibold tracking-[-0.02em] leading-[1.3] text-[#141414]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#6B6B6B]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
