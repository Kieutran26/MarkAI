import { useLocation } from 'react-router-dom';
import { glossaryTickerItems } from '../lib/glossary';

const defaultItems = [
  "Dành riêng cho dân Marketing",
  "Submit prompt của bạn",
  "150+ prompt đã test thực tế",
  "Vibecode ra mắt tháng 4/2026",
  "Miễn phí 100%",
  "Claude · Cursor · ChatGPT · Gemini",
  "Analytics sắp ra",
  "Generate Image sắp ra"
];

interface TickerProps {
  items?: string[];
}

export default function Ticker({ items = defaultItems }: TickerProps) {
  const location = useLocation();
  const isGlossaryRoute = location.pathname === '/tu-dien-thuat-ngu' || location.pathname.startsWith('/tu-dien-thuat-ngu/');
  const activeItems = isGlossaryRoute ? glossaryTickerItems.map(i => i.replace(/^✳\s*/, '')) : items;

  return (
    <div className="bg-[#E8772E] text-[#141414] overflow-hidden border-t border-b border-[#141414] select-none">
      <div className="flex w-max animate-[mkq_40s_linear_infinite] hover:[animation-play-state:paused]">
        <div className="flex items-center gap-14 px-7 py-3 font-mono text-[12px] tracking-[0.06em] uppercase whitespace-nowrap">
          {activeItems.map((item, idx) => (
            <span key={`t1-${idx}`} className="inline-flex items-center gap-3.5">
              <span className="font-sans font-bold">✳</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
        <div aria-hidden="true" className="flex items-center gap-14 px-7 py-3 font-mono text-[12px] tracking-[0.06em] uppercase whitespace-nowrap">
          {activeItems.map((item, idx) => (
            <span key={`t2-${idx}`} className="inline-flex items-center gap-3.5">
              <span className="font-sans font-bold">✳</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
