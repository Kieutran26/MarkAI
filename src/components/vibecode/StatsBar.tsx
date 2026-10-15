import React from 'react';

export default function StatsBar() {
  const stats = [
    { v: '18+', l: 'Case thực chiến · làm xong trong 20p', c: '#E8772E' },
    { v: '10', l: 'Chương bài học · từ A đến Z', c: '#141414' },
    { v: '100%', l: 'Miễn phí · không bán khóa học', c: '#141414' },
    { v: '0', l: 'Yêu cầu kiến thức lập trình', c: '#141414' },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-8 pt-20 sm:pt-28">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="border-l border-[#DAD8D2] pl-6 py-2 mb-4">
            <div
              className="text-[clamp(44px,5.5vw,84px)] font-light tracking-[-0.05em] leading-none"
              style={{ color: stat.c }}
            >
              {stat.v}
            </div>
            <div className="mt-3 text-[13.5px] sm:text-[14px] text-[#6B6B6B]">
              {stat.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
