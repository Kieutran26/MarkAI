import { useEffect, useRef } from 'react';

const items = [
  "✳ Vibecode ra mắt tháng 4/2026",
  "✳ 7 bài học lộ trình zero",
  "✳ Miễn phí 100%",
  "✳ Analytics sắp ra",
  "✳ Generate Image sắp ra",
  "✳ Motion Video sắp ra",
  "✳ Blog · Tips · Prompt Library",
  "✳ Dành riêng dân Marketing"
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
