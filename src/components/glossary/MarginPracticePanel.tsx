import React, { useState } from 'react';

export default function MarginPracticePanel() {
  const [margin, setMargin] = useState(32);

  const updateMargin = (value: number) => {
    const nextValue = Math.max(0, Math.min(120, Number.isFinite(value) ? value : 0));
    setMargin(nextValue);
  };

  return (
    <section className="mt-6 border border-[#2a2a33] bg-[#0f0f12]">
      <div className="border-b border-[#2a2a33] bg-[#e88c2e] px-4 py-2">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.06em] text-[#0f0f12]">Thực hành nâng cao</p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="border-b border-[#2a2a33] px-4 py-5 lg:border-b-0 lg:border-r">
          <h3 className="font-serif text-[1.9rem] leading-[0.95] text-[#e8e4dc]">Thử nghiệm khoảng cách (Margin) thực tế</h3>
          <p className="mt-3 font-sans text-[14px] leading-[1.75] text-[#a0a0ab]">
            Margin giúp tạo ra "sân vườn" bao quanh các khối. Hãy thử thay đổi margin của khối tiêu đề bên dưới để thấy nó "đẩy" nội dung khác ra xa như thế nào.
          </p>

          <div className="mt-6">
            <div className="grid grid-cols-[70px_minmax(0,1fr)_72px] items-center gap-3">
              <label htmlFor="margin-practice" className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#6e6e7a]">
                Margin
              </label>
              <input
                id="margin-practice"
                type="range"
                min={0}
                max={120}
                value={margin}
                onChange={(event) => updateMargin(Number(event.target.value))}
                className="h-[4px] w-full cursor-pointer appearance-none bg-[#2a2a33] accent-[#e88c2e]"
              />
              <input
                type="number"
                min={0}
                max={120}
                value={margin}
                onChange={(event) => updateMargin(Number(event.target.value))}
                className="w-full border border-[#2a2a33] bg-[#17171c] px-2 py-2 font-mono text-[12px] text-[#e8e4dc] outline-none"
              />
            </div>
          </div>

          <div className="mt-6 border-l-2 border-l-[#e88c2e] bg-[#1e1e25] px-4 py-3 font-mono text-[11px] leading-[1.7] text-[#a0a0ab]">
            Ghi nhớ: Margin là khoảng cách <strong>bên ngoài</strong>. Nếu bạn muốn tăng diện tích clickable của nút, hãy dùng Padding. Nếu muốn nút cách xa ảnh, hãy dùng Margin.
          </div>
        </div>

        <div className="px-4 py-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h4 className="font-serif text-[1.4rem] leading-none text-[#e8e4dc]">Xem trước layout</h4>
            <div className="border border-[rgba(232,117,58,0.25)] bg-[rgba(232,117,58,0.06)] px-3 py-1 font-mono text-[11px] text-accent">
              margin-bottom: {margin}px
            </div>
          </div>

          <div className="practice-preview-area rounded-lg bg-[#050505] p-6">
            <div 
              className="border border-accent bg-[rgba(232,140,46,0.1)] p-4 text-center"
              style={{ marginBottom: `${margin}px` }}
            >
              <h5 className="font-serif text-[1.3rem] text-white">Khối Tiêu đề (Element A)</h5>
              <p className="font-mono text-[10px] text-accent mt-1">Sử dụng margin-bottom: {margin}px</p>
            </div>
            
            <div className="border border-[#2a2a33] bg-[#17171c] p-6 opacity-60">
              <div className="h-4 w-2/3 bg-[#2a2a33] mb-3"></div>
              <div className="h-3 w-full bg-[#2a2a33] mb-2"></div>
              <div className="h-3 w-4/5 bg-[#2a2a33]"></div>
              <p className="font-mono text-[10px] text-[#6e6e7a] mt-4">Khối Nội dung (Neighbor)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
