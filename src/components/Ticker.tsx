import { useLocation } from 'react-router-dom';
import { glossaryTickerItems } from '../lib/glossary';

const defaultItems = [
  "✳ 150+ prompt đã test thực tế",
  "✳ Vibecode ra mắt tháng 4/2026",
  "✳ Miễn phí 100%",
  "✳ Claude · Cursor · ChatGPT · Gemini",
  "✳ Analytics sắp ra",
  "✳ Generate Image sắp ra",
  "✳ Dành riêng dân Marketing",
  "✳ Submit prompt của bạn"
];

interface TickerProps {
  items?: string[];
}

export default function Ticker({ items = defaultItems }: TickerProps) {
  const location = useLocation();
  const isGlossaryRoute = location.pathname === '/tu-dien-thuat-ngu' || location.pathname.startsWith('/tu-dien-thuat-ngu/');
  const activeItems = isGlossaryRoute ? glossaryTickerItems : items;

  return (
    <div className={`ticker ${isGlossaryRoute ? 'glossary-route' : ''}`}>
      <div className="ticker-track">
        {[...activeItems, ...activeItems].map((item, idx) => (
          <div key={idx} className="ticker-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
