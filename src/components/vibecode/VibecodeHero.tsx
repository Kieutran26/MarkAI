import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function VibecodeHero() {
  const [typedText, setTypedText] = useState('');
  const [caretVisible, setCaretVisible] = useState(true);

  useEffect(() => {
    const targetWord = 'ý tưởng.';
    let tick = 0;
    const interval = setInterval(() => {
      tick = (tick + 1) % 200;
      if (tick < 10) {
        setTypedText('');
      } else if (tick < 60) {
        const charIndex = Math.min(targetWord.length, Math.floor((tick - 10) / 6));
        setTypedText(targetWord.slice(0, charIndex));
      } else if (tick < 170) {
        setTypedText(targetWord);
      } else if (tick < 190) {
        const deleteIdx = Math.max(0, targetWord.length - Math.floor((tick - 170) / 3));
        setTypedText(targetWord.slice(0, deleteIdx));
      } else {
        setTypedText('');
      }
      setCaretVisible(Math.floor(tick / 8) % 2 === 0);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-8 pt-16 sm:pt-20">
      {/* Top Meta */}
      <div className="flex justify-between items-center gap-4 flex-wrap font-[family-name:var(--mono)] text-[12px] text-[#8A8883]">
        <span>Vibecode Web</span>
        <span>Lộ trình từ zero</span>
        <span>2026</span>
      </div>

      {/* Main Massive Headline */}
      <h1 className="mt-10 sm:mt-12 font-semibold tracking-[-0.06em] leading-[0.98] text-[clamp(44px,9vw,120px)] flex flex-col text-[#141414]">
        <span>Tự build web</span>
        <span>
          không cần{' '}
          <span className="font-light text-[#B8B6B0] line-through decoration-[#E8772E] decoration-[0.05em] whitespace-nowrap">
            lập trình.
          </span>
        </span>
        <span className="flex items-center gap-[0.25em] flex-wrap">
          Chỉ cần{' '}
          <span className="inline-flex items-center bg-[#E8772E] text-white rounded-[0.2em] px-[0.18em] pb-[0.06em] font-light italic min-w-[1.2em] whitespace-nowrap shadow-sm">
            {typedText}
            <span
              className={`inline-block w-[0.05em] h-[0.8em] bg-white ml-[0.04em] transition-opacity duration-75 ${
                caretVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </span>
        </span>
      </h1>

      {/* Description & CTAs */}
      <div className="mt-12 sm:mt-16 pt-7 border-t border-[#141414] flex justify-between gap-8 items-center flex-wrap">
        <p className="m-0 text-[16px] sm:text-[17px] leading-[1.6] text-[#3A3935] max-w-[560px]">
          10 bài học thực chiến — từ tư duy đến deploy thật. Không cần nền tảng code. Không slide. Không lý thuyết suông. Học xong hôm nay, dùng được ngay hôm nay.
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link
            to="/vibecode/vibecode-la-gi"
            className="bg-[#141414] text-white px-[26px] py-[16px] rounded-full text-[14px] font-medium whitespace-nowrap hover:bg-[#E8772E] hover:text-white transition-all shadow-sm active:scale-[0.98]"
          >
            Bắt đầu bài 01 →
          </Link>
          <a
            href="#lo-trinh"
            className="px-[22px] py-[16px] rounded-full text-[14px] font-medium border border-[#141414] text-[#141414] whitespace-nowrap hover:bg-[#141414] hover:text-white transition-all active:scale-[0.98]"
          >
            Xem lộ trình
          </a>
        </div>
      </div>
    </section>
  );
}
