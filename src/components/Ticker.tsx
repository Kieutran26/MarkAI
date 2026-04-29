import { useEffect, useRef } from 'react';

const items = [
  "✳ 150+ prompt đã test thực tế",
  "✳ Vibecode ra mắt tháng 4/2026",
  "✳ Miễn phí 100%",
  "✳ Claude · Cursor · ChatGPT · Gemini",
  "✳ Analytics sắp ra",
  "✳ Generate Image sắp ra",
  "✳ Dành riêng dân Marketing",
  "✳ Submit prompt của bạn"
];

export default function Ticker() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (track && track.children.length > 0 && track.children.length < items.length * 2) {
      const originalHTML = track.innerHTML;
      track.innerHTML = originalHTML + originalHTML;
    }
  }, []);

  return (
    <div className="ticker">
      <div className="ticker-track" ref={trackRef}>
        {items.map((item, idx) => (
          <div key={idx} className="ticker-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
