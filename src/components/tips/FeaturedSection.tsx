import { Link } from 'react-router-dom';
import { Tip } from '../../lib/types';

interface FeaturedSectionProps {
  tips: Tip[];
  onOpenTip?: (tip: Tip) => void;
}

export default function FeaturedSection({ tips, onOpenTip }: FeaturedSectionProps) {
  return (
    <section className="featured-section">
      <div className="featured-inner">
        <div>
          <p className="featured-label"><span>✳</span> 02 · tip của tuần</p>
          <h2 className="featured-h2">Tips được chọn lọc —<br /><em>đáng bookmark ngay.</em></h2>
          <p className="featured-desc">
            Mỗi tuần mình chọn ra 1 tip "must-know" — loại tip mà biết sớm 1 ngày là tiết kiệm cả buổi làm việc.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/tips" className="btn-be">Xem tất cả tips →</Link>
            <Link to="#submit-tip" className="btn-ghost-inv">Submit tip của bạn</Link>
          </div>
        </div>
        <div className="featured-right">
          {tips.map((tip, idx) => (
            <div
              key={tip.id}
              className={`featured-tip-row ${idx === tips.length - 1 ? 'no-border' : ''}`}
              onClick={() => {
                if (tip.type === 'short' && onOpenTip) {
                  onOpenTip(tip);
                }
              }}
              style={{ cursor: tip.type === 'short' ? 'pointer' : 'default' }}
            >
              <div className="featured-tip-num">TIP · {tip.id}</div>
              <div className="featured-tip-content">
                <div className="featured-tip-text">{tip.title}</div>
                <div className="featured-tip-cat">
                  {tip.categoryLabel} · {tip.date}
                  {tip.type === 'long' && <> · <span className="featured-type-long">Bài dài</span></>}
                  {tip.type === 'short' && <> · <span className="featured-type-quick">Nhanh</span></>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
