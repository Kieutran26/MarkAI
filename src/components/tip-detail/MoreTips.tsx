import { Link } from 'react-router-dom';
import { Tip } from '../../lib/types';

interface MoreTipsProps {
  tips: Tip[];
}

export default function MoreTips({ tips }: MoreTipsProps) {
  return (
    <section className="more-tips-section">
      <div className="more-tips-inner">
        <div className="more-tips-header">
          <div>
            <div className="more-tips-label">
              <span>✳</span> Tips khác · cùng chủ đề
            </div>
            <h2 className="more-tips-h2">
              Đọc thêm — <em>đừng dừng lại ở đây.</em>
            </h2>
          </div>
          <Link to="/tips" className="btn-primary" style={{ padding: '8px 16px', fontSize: '11px' }}>
            Xem tất cả tips →
          </Link>
        </div>
        <div className="more-tips-grid">
          {tips.map((tip) => (
            <Link key={tip.id} to={`/tips/${tip.slug}`} className="more-tip-card">
              <div className="more-tip-top">
                <span className="more-tip-num">TIP · {tip.id}</span>
                <span className="more-tip-cat">{tip.categoryLabel}</span>
              </div>
              <div className="more-tip-text">{tip.title}</div>
              <div className="more-tip-meta">
                {tip.categoryLabel} · {tip.date}
              </div>
              <span className="more-tip-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
