import { Tip } from '../../lib/types';

interface TipCardProps {
  tip: Tip;
  onOpen?: (tip: Tip) => void;
  isHot?: boolean;
}

export default function TipCard({ tip, onOpen, isHot }: TipCardProps) {
  const handleClick = () => {
    if (tip.type === 'short' && onOpen) {
      onOpen(tip);
    }
  };

  const cardClass = `tip-card ${isHot ? 'hot-card' : ''} ${tip.type === 'short' ? 'cursor-pointer' : ''}`;

  return (
    <div
      className={cardClass}
      onClick={handleClick}
    >
      <div className="tip-card-top">
        <span className="tip-num">TIP · {tip.id}</span>
        <div className="flex items-center gap-2">
          {tip.isHot && <span className="badge badge-accent">HOT</span>}
          {tip.isNew && <span className="badge badge-outline">MỚI</span>}
          <span className="tip-category">{tip.categoryLabel}</span>
          {tip.type === 'long' && (
            <span className="tip-type-long">Bài dài</span>
          )}
          {tip.type === 'short' && (
            <span className="tip-type-quick">Nhanh</span>
          )}
        </div>
      </div>
      <div className="tip-text">{tip.title}</div>
      {tip.type === 'long' && (
        <div className="insight">✳ Đặt file này ở root project, Claude sẽ đọc tự động mỗi session.</div>
      )}
      <div className="tip-meta">
        {tip.categoryLabel} · {tip.date}
      </div>
      <span className="tip-arrow">{tip.type === 'long' ? '→' : '⊕'}</span>
    </div>
  );
}
