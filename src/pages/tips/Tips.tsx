import { useState, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tip } from '../../lib/types';
import { tips, getShortTips, getAllTipsForList } from '../../lib/tips-data';
import TipsHero from '../../components/tips/TipsHero';
import FilterBar from '../../components/tips/FilterBar';
import TipsGrid from '../../components/tips/TipsGrid';
import FeaturedSection from '../../components/tips/FeaturedSection';
import WeeklyTopics from '../../components/tips/WeeklyTopics';
import AllTipsList from '../../components/tips/AllTipsList';
import SubmitTip from '../../components/tips/SubmitTip';
import TipsCTA from '../../components/tips/TipsCTA';
import TipPopup from '../../components/tips/TipPopup';

export default function Tips() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState<Tip | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const shortTips = getShortTips();
  const allTips = getAllTipsForList();

  const featuredTips = shortTips.slice(0, 5);

  const gridTips = [
    tips.find((t) => t.id === 60)!,
    ...shortTips.slice(0, 5),
  ];

  const handleOpenTip = useCallback((tip: Tip) => {
    const index = shortTips.findIndex((t) => t.id === tip.id);
    setCurrentTip(tip);
    setCurrentIndex(index >= 0 ? index : 0);
    setIsPopupOpen(true);
  }, [shortTips]);

  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  const handleNavigateTip = useCallback((tip: Tip, index: number) => {
    setCurrentTip(tip);
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const openTipId = location.state?.openTipId;

    if (typeof openTipId !== 'number') {
      return;
    }

    const tipToOpen = shortTips.find((tip) => tip.id === openTipId);

    if (tipToOpen) {
      handleOpenTip(tipToOpen);
    }

    navigate(location.pathname, { replace: true, state: null });
  }, [handleOpenTip, location.pathname, location.state, navigate, shortTips]);

  return (
    <>
      <TipsHero />
      <FilterBar />
      <TipsGrid tips={gridTips.slice(0, 6)} onOpenTip={handleOpenTip} />
      <FeaturedSection tips={featuredTips} onOpenTip={handleOpenTip} />
      <WeeklyTopics />
      <AllTipsList tips={allTips.slice(0, 8)} onOpenTip={handleOpenTip} />
      <SubmitTip />
      <TipsCTA />

      <TipPopup
        isOpen={isPopupOpen}
        tip={currentTip}
        shortTips={shortTips}
        currentIndex={currentIndex}
        onClose={handleClosePopup}
        onNavigate={handleNavigateTip}
      />
    </>
  );
}
