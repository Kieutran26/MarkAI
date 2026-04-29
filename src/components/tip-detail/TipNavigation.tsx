import { Link } from 'react-router-dom';
import { Tip } from '../../lib/types';

interface TipNavigationProps {
  prevTip?: Tip;
  nextTip?: Tip;
}

export default function TipNavigation({ prevTip, nextTip }: TipNavigationProps) {
  return (
    <div
      style={{
        padding: '2.5rem 0 0',
        borderTop: '1px solid var(--border)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
      }}
    >
      {prevTip ? (
        <Link
          to={`/tips/${prevTip.slug}`}
          className="tip-nav-item"
          style={{ borderRight: 'none' }}
        >
          <div className="tip-nav-dir">← Tip trước</div>
          <div className="tip-nav-title">{prevTip.title}</div>
          <div className="tip-nav-cat">
            {prevTip.categoryLabel} · TIP {prevTip.id}
          </div>
        </Link>
      ) : (
        <div className="tip-nav-item" style={{ borderRight: 'none', opacity: 0.3 }}>
          <div className="tip-nav-dir">← Tip trước</div>
          <div className="tip-nav-title">Không có tip trước</div>
        </div>
      )}

      {nextTip ? (
        <Link to={`/tips/${nextTip.slug}`} className="tip-nav-item next">
          <div className="tip-nav-dir">Tip tiếp →</div>
          <div className="tip-nav-title">{nextTip.title}</div>
          <div className="tip-nav-cat">
            {nextTip.categoryLabel} · TIP {nextTip.id}
          </div>
        </Link>
      ) : (
        <div className="tip-nav-item next" style={{ opacity: 0.3 }}>
          <div className="tip-nav-dir">Tip tiếp →</div>
          <div className="tip-nav-title">Không có tip tiếp theo</div>
        </div>
      )}
    </div>
  );
}
