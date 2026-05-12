import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getTipBySlug, getRelatedTips, getDetailTips, getTipDetailContent, shouldShowFullTipLink } from '../../lib/tips-data';
import ReadingProgressBar from '../../components/article/ReadingProgressBar';
import TipHero from '../../components/tip-detail/TipHero';
import TipContent from '../../components/tip-detail/TipContent';
import TipSidebar from '../../components/tip-detail/TipSidebar';
import TipNavigation from '../../components/tip-detail/TipNavigation';
import MoreTips from '../../components/tip-detail/MoreTips';
import Breadcrumb from '../../components/Breadcrumb';
import TipsCTA from '../../components/tips/TipsCTA';
import SubmitTipModal from '../../components/tips/SubmitTipModal';

export default function TipDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const tip = getTipBySlug(slug || '');
  const detailContent = tip ? getTipDetailContent(tip) : undefined;

  if (tip && !detailContent) {
    return <Navigate to="/tips" replace state={{ openTipId: tip.id }} />;
  }

  if (!tip || !detailContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Tip không tìm thấy</h1>
          <button onClick={() => navigate(-1)} className="btn-primary">Quay lại danh sách tips</button>
        </div>
      </div>
    );
  }

  const tipWithDetail = { ...tip, detailContent };
  const detailTips = getDetailTips();
  const relatedTips = getRelatedTips(detailContent.relatedTips).filter(shouldShowFullTipLink);

  const currentIdx = detailTips.findIndex((item) => item.id === tip.id);
  const prevTip = currentIdx < detailTips.length - 1 ? detailTips[currentIdx + 1] : undefined;
  const nextTip = currentIdx > 0 ? detailTips[currentIdx - 1] : undefined;
  const moreTips = detailTips.filter((item) => item.id !== tip.id).slice(0, 3);

  return (
    <>
      <ReadingProgressBar targetSelector=".tip-main" />
      <Breadcrumb
        items={[
          { label: 'markAI.vn', href: '/' },
          { label: 'Tips & Mẹo', href: '/tips' },
          { label: tip.categoryLabel, href: '/tips' },
          { label: `TIP ${tip.id}`, isCurrent: true },
        ]}
      />
      <TipHero tip={tipWithDetail} />
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          gap: '4rem',
          padding: '0 2rem',
        }}
      >
        <div className="tip-main">
          <TipContent sections={detailContent.sections} />
          <TipNavigation prevTip={prevTip} nextTip={nextTip} />
        </div>
        <TipSidebar 
          tip={tipWithDetail} 
          relatedTips={relatedTips} 
          onSubmitButtonClick={() => setIsSubmitModalOpen(true)}
        />
      </div>
      <MoreTips tips={moreTips} />
      <TipsCTA />

      <SubmitTipModal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)} 
      />
    </>
  );
}
