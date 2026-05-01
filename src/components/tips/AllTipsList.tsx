import { Link } from 'react-router-dom';
import { Tip } from '../../lib/types';

interface AllTipsListProps {
  tips: Tip[];
  onOpenTip?: (tip: Tip) => void;
}

export default function AllTipsList({ tips, onOpenTip }: AllTipsListProps) {
  return (
    <section className="all-tips-section">
      <div className="all-tips-inner">
        <div className="all-tips-header">
          <div>
            <p className="section-label"><span>✳</span> 04 · tất cả tips</p>
            <h2 className="section-heading">Đọc hết — <em>đừng bỏ sót.</em></h2>
          </div>
          <span className="font-mono text-[11px] text-muted">60 tips</span>
        </div>

        {tips.map((tip) => (
          <div
            key={tip.id}
            className={`tip-row ${tip.type === 'short' ? 'cursor-pointer' : ''}`}
            onClick={() => {
              if (tip.type === 'short' && onOpenTip) {
                onOpenTip(tip);
              }
            }}
          >
            <div className="tip-row-num">
              <span className="tip-row-num-text">TIP</span>
              <span className="tip-row-num-big">{tip.id}</span>
            </div>
            <div className="tip-row-body">
              <div className="tip-row-title">{tip.title}</div>
              <div className="tip-row-meta">
                {tip.categoryLabel} · {tip.date} · <span className={tip.type === 'long' ? 'tip-type-long' : 'tip-type-quick'}>
                  {tip.type === 'long' ? 'Bài dài' : 'Nhanh'}
                </span>
              </div>
            </div>
            <div className="tip-row-arrow">{tip.type === 'long' ? '→' : '⊕'}</div>
          </div>
        ))}

        <div className="py-8 text-center border-t border-border">
          <Link to="/tips" className="btn-primary">Xem thêm 52 tips →</Link>
        </div>
      </div>
    </section>
  );
}
