import React from 'react';

export default function StatsBar() {
  const stats = [
    { num: '10', label: 'Bài học · lộ trình vibecode' },
    { num: '50+', label: 'Bài nhỏ · học từng phần' },
    { num: '100%', label: 'Miễn phí · mãi mãi' },
    { num: '0', label: 'Yêu cầu kiến thức code' },
  ];

  return (
    <div className="flex flex-wrap border-b border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto w-full flex">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`flex-1 min-w-[140px] px-8 py-9 border-r border-[var(--border)] ${index === stats.length - 1 ? 'border-r-0' : ''}`}
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
