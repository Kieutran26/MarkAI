import React from 'react';

export default function PathHeader() {
  const stats = [
    { label: 'Tổng thời gian', value: '~6 tiếng đọc' },
    { label: 'Số bài lớn', value: '10 bài' },
    { label: 'Số bài nhỏ', value: '52 bài nhỏ' },
    { label: 'Hình thức', value: 'Text · không video' },
    { label: 'Yêu cầu', value: 'Không cần nền tảng code', accent: true },
  ];

  return (
    <div className="bg-[var(--ink)] border-b border-[#1a1a1a]" id="lo-trinh">
      <div 
        className="max-w-[1200px] mx-auto px-5 py-16 lg:py-20 grid gap-16 grid-cols-1 lg:grid-cols-2 items-end"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        {/* Left Column */}
        <div>
          <div className="mb-5">
            <span className="badge badge-accent">VIBECODE WEB ⚡</span>
          </div>
          <h2 className="font-[family-name:var(--serif)] text-[clamp(2rem,4vw,3.2rem)] text-[var(--bg)] leading-[1.1] tracking-[-0.02em] mb-4">
            Từ <em className="text-[var(--accent)] italic">zero</em> đến có web<br />trong 1 buổi sáng.
          </h2>
          <p className="font-[family-name:var(--sans)] text-[15px] font-light text-[#888] leading-[1.7]">
            10 bài — từ tư duy đến deploy thực tế. Mỗi bài chia nhỏ thành 5–6 phần, đọc từng phần trong 5–10 phút.
          </p>
        </div>
        
        {/* Right Column - Stats Table */}
        <div>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`flex justify-between items-center py-4 border-b ${index === 0 ? 'border-t' : ''} border-[#1a1a1a]`}
            >
              <span className="font-[family-name:var(--mono)] text-[10px] text-[#555] tracking-[0.04em] uppercase">
                {stat.label}
              </span>
              <span className={`font-[family-name:var(--mono)] text-[12px] ${stat.accent ? 'text-[var(--accent)]' : 'text-[#888]'}`}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
