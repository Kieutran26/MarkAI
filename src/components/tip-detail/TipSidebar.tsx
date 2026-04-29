import { Link } from 'react-router-dom';
import { Tip } from '../../lib/types';

interface TipSidebarProps {
  tip: Tip;
  relatedTips: Tip[];
}

export default function TipSidebar({ tip, relatedTips }: TipSidebarProps) {
  return (
    <div className="tip-sidebar">
      <div className="mb-8">
        <div className="sidebar-label mb-4">✳ Tags</div>
        <div className="tag-list">
          {tip.detailContent?.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="sidebar-label mb-4">✳ Tips liên quan</div>
        {relatedTips.map((relatedTip, idx) => (
          <Link
            key={relatedTip.id}
            to={`/tips/${relatedTip.slug}`}
            className="related-tip"
            style={{
              borderBottom: idx < relatedTips.length - 1 ? '1px solid var(--border)' : '1px solid var(--border)',
            }}
          >
            <div className="related-tip-num">TIP · {relatedTip.id}</div>
            <div className="related-tip-title">{relatedTip.title}</div>
            <div className="related-tip-cat">
              {relatedTip.categoryLabel} · {relatedTip.date}
            </div>
          </Link>
        ))}
      </div>

      <div className="sidebar-submit">
        <div className="sidebar-submit-header">
          <div className="sidebar-submit-title">✳ Bạn có tip hay hơn?</div>
        </div>
        <div className="sidebar-submit-body">
          <div className="sidebar-submit-desc">
            Submit tip của bạn — nếu được chọn mình sẽ credit tên bạn.
          </div>
          <Link to="/tips#submit-tip" className="btn-primary">
            Submit tip →
          </Link>
          <Link to="/tips" className="btn-ghost">
            Xem tất cả tips
          </Link>
        </div>
      </div>
    </div>
  );
}
