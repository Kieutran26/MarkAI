import React from 'react';

export default function StatsBar() {
  const stats = [
    { v: '10', k: 'bài học Vibecode đang live', c: '#141414' },
    { v: '150+', k: 'prompt trong thư viện', c: '#141414' },
    { v: '0đ', k: 'chi phí để học · mãi mãi', c: '#E8772E' },
    { v: '4', k: 'module AI sắp ra mắt', c: '#141414' },
  ];

  return (
    <section
      data-screen-label="Stats"
      className="border-t border-[#141414] border-b border-[#DAD8D2]"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, index) => (
          <div key={index} className="py-9 pr-4 flex flex-col gap-3.5">
            <span
              className="text-[clamp(44px,5vw,72px)] font-light tracking-[-0.06em] leading-[0.9]"
              style={{ color: s.c }}
            >
              {s.v}
            </span>
            <span className="font-[family-name:var(--mono)] text-[12px] text-[#55534F]">
              {s.k}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
