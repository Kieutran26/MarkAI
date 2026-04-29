import { Tip } from '../../lib/types';

interface TipHeroProps {
  tip: Tip;
}

export default function TipHero({ tip }: TipHeroProps) {
  return (
    <section className="tip-hero">
      <div className="tip-hero-inner">
        <div className="tip-hero-left">
          <div className="tip-hero-top">
            <span className="tip-number">TIP · {tip.id}</span>
            {tip.isHot && <span className="badge badge-accent">HOT</span>}
            <span className="badge badge-dark">{tip.categoryLabel}</span>
            <span className="badge badge-outline">{tip.readTime}</span>
          </div>
          <h1
            className="tip-hero-title"
            dangerouslySetInnerHTML={{ __html: tip.detailContent?.heroTitle || tip.title }}
          />
          <div className="tip-hero-meta">
            <span className="tip-meta-item">✳ {tip.date}</span>
            <span className="tip-meta-item">· {tip.categoryLabel}</span>
            <span className="tip-meta-item">· {tip.detailContent?.tools || 'Cursor · Claude Code'}</span>
          </div>
        </div>
        <div className="tip-hero-right">
          <div className="tip-info-box">
            <div className="tip-info-header">
              <div className="tip-info-header-text">✳ Thông tin tip</div>
            </div>
            <div className="tip-info-row">
              <span className="tip-info-label">Số tip</span>
              <span className="tip-info-val text-accent">#{tip.id}</span>
            </div>
            <div className="tip-info-row">
              <span className="tip-info-label">Danh mục</span>
              <span className="tip-info-val">{tip.categoryLabel}</span>
            </div>
            <div className="tip-info-row">
              <span className="tip-info-label">Tools liên quan</span>
              <span className="tip-info-val">{tip.detailContent?.tools || 'Cursor · Claude Code'}</span>
            </div>
            <div className="tip-info-row">
              <span className="tip-info-label">Độ khó</span>
              <span className="tip-info-val">{tip.detailContent?.difficulty || 'Cơ bản'}</span>
            </div>
            <div className="tip-info-row">
              <span className="tip-info-label">Thời gian áp dụng</span>
              <span className="tip-info-val">{tip.detailContent?.applyTime || '~5 phút'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
