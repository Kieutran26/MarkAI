import React from 'react';

export default function StatsBar() {
  const stats = [
    { num: '10', label: 'Bài học · lộ trình vibecode' },
    { num: '50+', label: 'Bài nhỏ · học từng phần' },
    { num: '100%', label: 'Miễn phí · mãi mãi' },
    { num: '0', label: 'Yêu cầu kiến thức code' },
  ];

  return (
    <div className="border-b border-[var(--border)]">
      <div className="page-shell w-full grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`px-5 py-7 sm:px-8 sm:py-9 border-[var(--border)] ${
              index % 2 === 0 ? 'border-r' : ''
            } ${
              index < 2 ? 'border-b lg:border-b-0' : ''
            } ${
              index < stats.length - 1 ? 'lg:border-r' : 'lg:border-r-0'
            }`}
          >
            <div className="font-[family-name:var(--serif)] text-[2.4rem] leading-[1] mb-2">
              {stat.num}
            </div>
            <div className="font-[family-name:var(--mono)] text-[11px] text-[var(--muted)] tracking-[0.04em]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
