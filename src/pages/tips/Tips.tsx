import { useState, useCallback, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

  // Get 6 hot tips for grid
  const hotTips = tips
    .filter((t) => [60, 59, 58, 57, 56, 55].includes(t.id))
    .sort((a, b) => b.id - a.id);

  // Get 5 featured tips for dark section
  const featuredTips = getShortTips().slice(0, 5).map((t) => {
    const longTip = tips.find((tip) => tip.id === 60);
    return longTip && t.id === 60 ? t : t;
  });

  // Replace first item with TIP 60 (long)
  const gridTips = [
    tips.find((t) => t.id === 60)!,
    ...getShortTips().slice(0, 5),
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
      <footer className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-border">
            <div>
              <div className="font-mono text-[15px] font-medium tracking-tight mb-4">
                mark<span className="text-accent">AI</span>.vn
              </div>
              <p className="font-sans text-[13px] text-ink2 leading-[1.6] max-w-[200px]">
                Học AI ứng dụng dành riêng cho dân Marketing Việt Nam. Miễn phí 100% · mãi mãi.
              </p>
            </div>
            <div>
              <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6">VIBECODE</div>
              <ul className="flex flex-col gap-3 list-none p-0">
                <li><Link to="/vibecode" className="font-mono text-[12px] text-ink2 hover:text-ink transition-colors no-underline">Bài 01 — Vibecode là gì?</Link></li>
                <li><Link to="/vibecode" className="font-mono text-[12px] text-ink2 hover:text-ink transition-colors no-underline">Bài 02 — Từ ngữ code & design</Link></li>
                <li><Link to="/vibecode" className="font-mono text-[12px] text-ink2 hover:text-ink transition-colors no-underline">Bài 03 — Cài gì vào máy?</Link></li>
                <li><Link to="/vibecode" className="font-mono text-[12px] text-ink2 hover:text-ink transition-colors no-underline">Bài 04 — VS Code & Cursor</Link></li>
                <li><Link to="/vibecode" className="font-mono text-[12px] text-ink2 hover:text-ink transition-colors no-underline">Bài 05 — Claude Code</Link></li>
                <li><Link to="/vibecode" className="font-mono text-[12px] text-ink2 hover:text-accent transition-colors no-underline">Xem tất cả 10 bài →</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6">KHÁM PHÁ</div>
              <ul className="flex flex-col gap-3 list-none p-0">
                <li><Link to="/blog" className="font-mono text-[12px] text-ink2 hover:text-ink transition-colors no-underline">Blog</Link></li>
                <li><Link to="/tips" className="font-mono text-[12px] text-ink2 hover:text-ink transition-colors no-underline">Tips & Mẹo</Link></li>
                <li><Link to="/prompts" className="font-mono text-[12px] text-ink2 hover:text-ink transition-colors no-underline">Prompt Library</Link></li>
                <li><span className="font-mono text-[12px] text-muted opacity-50">Analytics (sắp ra)</span></li>
                <li><span className="font-mono text-[12px] text-muted opacity-50">Generate Image (sắp ra)</span></li>
                <li><span className="font-mono text-[12px] text-muted opacity-50">Motion Video (sắp ra)</span></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6">MARKAI</div>
              <ul className="flex flex-col gap-3 list-none p-0">
                <li><Link to="/about" className="font-mono text-[12px] text-ink2 hover:text-ink transition-colors no-underline">Về markAI.vn</Link></li>
                <li><Link to="/feedback" className="font-mono text-[12px] text-ink2 hover:text-ink transition-colors no-underline">Góp ý</Link></li>
                <li><Link to="/report" className="font-mono text-[12px] text-ink2 hover:text-ink transition-colors no-underline">Báo lỗi</Link></li>
                <li><Link to="/contact" className="font-mono text-[12px] text-ink2 hover:text-ink transition-colors no-underline">Liên hệ</Link></li>
              </ul>
            </div>
          </div>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono text-[11px] text-muted">
              © 2026 markAI.vn · Miễn phí 100% · Không quảng cáo · Không tracking
            </div>
            <div className="font-mono text-[11px] text-muted">
              Dành riêng cho dân Marketing Việt Nam ✳
            </div>
          </div>
        </div>
      </footer>

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
