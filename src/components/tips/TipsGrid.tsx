import { Link } from 'react-router-dom';
import { Tip } from '../../lib/types';
import TipCardItem from '../tips-components/TipCardItem';

interface TipsGridProps {
  tips: Tip[];
  onOpenTip?: (tip: Tip) => void;
}

export default function TipsGrid({ tips, onOpenTip }: TipsGridProps) {
  return (
    <section className="tips-grid-section" id="tips-grid">
      <div className="tips-grid-inner">
        <div className="tips-grid-header">
          <div>
            <p className="section-label"><span>✳</span> 01 · hot tips tuần này</p>
            <h2 className="section-heading">Tips <em>đang hot.</em></h2>
          </div>
          <Link to="/tips" className="tips-grid-header-right">Xem tất cả tips →</Link>
        </div>
        <div className="tips-grid">
          {tips.map((tip) => (
            <TipCardItem
              key={tip.id}
              tip={tip}
              onOpen={onOpenTip}
              isHot={tip.isHot}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
