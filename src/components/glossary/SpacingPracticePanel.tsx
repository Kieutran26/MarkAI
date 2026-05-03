import React, { useState } from 'react';

const labels = ['Gap 01', 'Gap 02', 'Gap 03', 'Gap 04'] as const;
const initialGaps = [8, 8, 8, 8];

export default function SpacingPracticePanel() {
  const [gaps, setGaps] = useState(initialGaps);

  const updateGap = (index: number, value: number) => {
    const nextValue = Math.max(0, Math.min(80, Number.isFinite(value) ? value : 0));
    setGaps((current) => current.map((gap, gapIndex) => (gapIndex === index ? nextValue : gap)));
  };

  const totalGap = gaps.reduce((sum, gap) => sum + gap, 0);

  return (
    <section className="mt-6 border border-[#2a2a33] bg-[#0f0f12]">
      <div className="border-b border-[#2a2a33] bg-[#e88c2e] px-4 py-2">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.06em] text-[#0f0f12]">Thực hành</p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="border-b border-[#2a2a33] px-4 py-5 lg:border-b-0 lg:border-r">
          <h3 className="font-serif text-[1.9rem] leading-[0.95] text-[#e8e4dc]">Tự nhập spacing và xem layout đổi theo realtime</h3>
          <p className="mt-3 font-sans text-[14px] leading-[1.75] text-[#a0a0ab]">
            Đây là mô phỏng một đoạn content đang khá khít. Kéo slider hoặc nhập số để thấy khoảng thở giữa các block thay đổi ngay.
          </p>

          <div className="mt-5 grid gap-3">
            {labels.map((label, index) => (
              <div key={label} className="grid grid-cols-[70px_minmax(0,1fr)_72px] items-center gap-3">
                <label htmlFor={`spacing-practice-${index}`} className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#6e6e7a]">
                  {label}
                </label>
                <input
                  id={`spacing-practice-${index}`}
                  type="range"
                  min={0}
                  max={80}
                  value={gaps[index]}
                  onChange={(event) => updateGap(index, Number(event.target.value))}
                  className="h-[4px] w-full cursor-pointer appearance-none bg-[#2a2a33] accent-[#e88c2e]"
                />
                <input
                  type="number"
                  min={0}
                  max={80}
                  value={gaps[index]}
                  onChange={(event) => updateGap(index, Number(event.target.value))}
                  className="w-full border border-[#2a2a33] bg-[#17171c] px-2 py-2 font-mono text-[12px] text-[#e8e4dc] outline-none"
                />
              </div>
            ))}
          </div>

          <div className="mt-5 border-l-2 border-l-[#e88c2e] bg-[#1e1e25] px-4 py-3 font-mono text-[11px] leading-[1.7] text-[#a0a0ab]">
            Gợi ý: thử tăng từ `8px` lên `16px`, `24px`, `32px` để cảm nhận layout bớt bí và premium hơn.
          </div>
        </div>

        <div className="px-4 py-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h4 className="font-serif text-[1.4rem] leading-none text-[#e8e4dc]">Mô phỏng content stack</h4>
            <div className="border border-[rgba(232,117,58,0.25)] bg-[rgba(232,117,58,0.06)] px-3 py-1 font-mono text-[11px] text-accent">
              Tổng gap: {totalGap}px
            </div>
          </div>

          <div className="p-0">
            {[
              ['Hero', 'Ưu đãi workshop AI cho team marketing', 'Một câu mở đầu ngắn để người dùng nắm ngay lợi ích chính và có lý do kéo xuống tiếp.'],
              ['Social proof', 'Đã có 1.200 marketer tham gia', 'Block niềm tin nếu dính quá sát headline thường làm giao diện trông nặng và vội.'],
              ['Offer', 'Checklist + template prompt tặng kèm', 'Spacing vừa phải giúp phần lợi ích dễ quét và không bị cảm giác các ý đang đè lên nhau.'],
              ['CTA', 'Đăng ký ngay hôm nay', 'CTA nên có đủ khoảng thở để người dùng cảm nhận đây là điểm hành động chính.'],
              ['Footnote', 'Cam kết hoàn tiền trong 7 ngày', 'Thử kéo gap rất nhỏ rồi tăng dần để thấy giao diện chuyển từ chật sang thoáng ra sao.'],
            ].map(([eyebrow, title, body], index, items) => (
              <React.Fragment key={title}>
                <article
                  className="border border-[#2a2a33] glossary-tech-grid px-4 py-4"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#e88c2e]">{eyebrow}</p>
                  <h5 className="mt-2 font-serif text-[1.2rem] leading-[1.05] text-[#e8e4dc]">{title}</h5>
                  <p className="mt-2 font-sans text-[13px] leading-[1.7] text-[#a0a0ab]">{body}</p>
                </article>
                {index < items.length - 1 && (
                  <div 
                    className="flex items-center justify-center overflow-hidden bg-[rgba(232,140,46,0.08)] transition-all"
                    style={{ height: `${gaps[index]}px`, opacity: gaps[index] > 0 ? 1 : 0 }}
                  >
                    {gaps[index] >= 12 && (
                      <span className="font-mono text-[9px] text-[#e88c2e] opacity-60">{gaps[index]}px</span>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
