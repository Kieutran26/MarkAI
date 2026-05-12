import { useCallback, useEffect, useState, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import donationQrImage from '../../QR Donation.jpg';

export default function Footer() {
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [isDonationVisible, setIsDonationVisible] = useState(false);

  useEffect(() => {
    if (isDonationOpen) {
      setIsDonationVisible(true);
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = '';
      };
    }

    const timer = window.setTimeout(() => setIsDonationVisible(false), 200);
    document.body.style.overflow = '';

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [isDonationOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDonationOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const closeDonationPopup = useCallback(() => {
    setIsDonationOpen(false);
  }, []);

  const handleOverlayClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeDonationPopup();
    }
  }, [closeDonationPopup]);

  return (
    <footer className="border-t border-border">
      <div className="px-[1.2rem] md:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-border py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 lg:py-16">
          <div>
            <div className="mb-4 font-mono text-[16px] font-medium tracking-tight">
              mark<span className="text-accent">AI</span>.vn
            </div>
            <p className="max-w-[220px] font-sans text-[13px] leading-[1.6] text-muted">
              Học AI ứng dụng dành riêng cho dân Marketing Việt Nam. Miễn phí 100% · mãi mãi.
            </p>
            <p className="mt-4 font-mono text-[10px] tracking-wide text-muted">
              ✳ FOMO thì nhiều · Dùng được thì ít
            </p>
          </div>

          <div>
            <div className="mb-6 font-mono text-[11px] uppercase tracking-widest text-muted">Lộ trình học</div>
            <ul className="flex list-none flex-col gap-3 p-0">
              <li><Link to="/vibecode" className="flex items-center gap-2 font-sans text-[13px] text-ink2 no-underline transition-colors hover:text-accent"><span className="text-[10px] text-accent">●</span> Vibecode Web <span className="bg-accent px-1.5 py-[1px] font-mono text-[10px] text-white">Live</span></Link></li>
              <li><Link to="/vibecode" className="flex items-center gap-2 font-sans text-[13px] text-ink2 no-underline transition-colors hover:text-accent"><span className="text-[10px] text-muted">○</span> Vibecode App <span className="font-mono text-[10px] text-muted">Sắp ra</span></Link></li>
              <li><span className="flex items-center gap-2 font-sans text-[13px] text-muted opacity-60"><span className="text-[10px] text-muted">○</span> Analytics AI <span className="font-mono text-[10px] text-muted">Sắp ra</span></span></li>
              <li><span className="flex items-center gap-2 font-sans text-[13px] text-muted opacity-60"><span className="text-[10px] text-muted">○</span> Generate Image <span className="font-mono text-[10px] text-muted">Sắp ra</span></span></li>
              <li><span className="flex items-center gap-2 font-sans text-[13px] text-muted opacity-60"><span className="text-[10px] text-muted">○</span> Motion Video <span className="font-mono text-[10px] text-muted">Sắp ra</span></span></li>
              <li className="mt-2 pt-3"><Link to="/feedback" className="inline-block bg-[#000] px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-white no-underline transition-colors hover:bg-accent">+ Góp ý module mới</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-6 font-mono text-[11px] uppercase tracking-widest text-muted">Khám phá</div>
            <ul className="flex list-none flex-col gap-3 p-0">
              <li><Link to="/blog" className="font-sans text-[13px] text-ink2 no-underline transition-colors hover:text-accent">Blog</Link></li>
              <li><Link to="/tips" className="font-sans text-[13px] text-ink2 no-underline transition-colors hover:text-accent">Tips & Mẹo</Link></li>
              <li><Link to="/prompts" className="font-sans text-[13px] text-ink2 no-underline transition-colors hover:text-accent">Prompt Library</Link></li>
              <li><span className="cursor-default font-sans text-[13px] text-muted opacity-50">Analytics (sắp ra)</span></li>
              <li><span className="cursor-default font-sans text-[13px] text-muted opacity-50">Image (sắp ra)</span></li>
              <li><span className="cursor-default font-sans text-[13px] text-muted opacity-50">Video (sắp ra)</span></li>
            </ul>
          </div>

          <div>
            <div className="mb-6 font-mono text-[11px] uppercase tracking-widest text-muted">MARKAI</div>
            <ul className="flex list-none flex-col gap-3 p-0">
              <li><Link to="/about" className="font-sans text-[13px] text-ink2 no-underline transition-colors hover:text-accent">Về dự án này</Link></li>
              <li><Link to="/feedback" className="font-sans text-[13px] text-ink2 no-underline transition-colors hover:text-accent">Góp ý module</Link></li>
              <li><Link to="/report" className="font-sans text-[13px] text-ink2 no-underline transition-colors hover:text-accent">Báo lỗi</Link></li>
              <li><Link to="/contact" className="font-sans text-[13px] text-ink2 no-underline transition-colors hover:text-accent">Liên hệ tác giả</Link></li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsDonationOpen(true)}
                  className="border-none bg-transparent p-0 text-left font-sans text-[13px] text-ink2 transition-colors hover:text-accent"
                >
                  Ủng hộ tác giả
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <div className="font-mono text-[11px] text-muted">
            © 2026 markAI.vn · Miễn phí 100% · Không quảng cáo · Không tracking
          </div>
          <div className="font-mono text-[11px] text-muted">
            Dành riêng cho dân Marketing Việt Nam ✳
          </div>
        </div>
      </div>

      {isDonationVisible ? (
        <div
          className={`popup-overlay ${isDonationOpen ? 'active' : ''}`}
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="donation-popup-title"
        >
          <div className="popup-box">
            <div className="popup-header">
              <div className="popup-header-left">
                <span className="popup-cat-badge">DONATION</span>
                <span className="popup-tool-badge">Giữ markAI free</span>
              </div>
              <button type="button" className="popup-close" onClick={closeDonationPopup}>✕</button>
            </div>

            <div className="popup-body">
              <div id="donation-popup-title" className="popup-title">Ủng hộ để markAI tiếp tục chạy miễn phí.</div>
              <div className="popup-desc">
                Nếu dự án này giúp bạn học nhanh hơn hoặc đỡ mất thời gian mò mẫm, bạn có thể ủng hộ tùy tâm để giúp mình duy trì web, giữ markAI không có quảng cáo, có thêm động lực ra thêm khóa và nâng cao chất lượng nội dung.
              </div>

              <div className="mb-5 grid gap-0 overflow-hidden border border-border bg-bg2 md:grid-cols-[260px_minmax(0,1fr)]">
                <div className="border-b border-border bg-white md:border-b-0 md:border-r">
                  <img
                    src={donationQrImage}
                    alt="QR donation markAI"
                    className="block h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center px-5 py-5 md:px-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Thông tin nhận ủng hộ</div>
                  <div className="mt-3">
                    <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Người nhận</div>
                    <div className="mt-1 font-sans text-[19px] leading-[1.3] text-ink">
                      <strong>NGUYỄN NGỌC KIỀU TRÂN</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="popup-insight">
                ✳ Nếu chưa tiện donation, cách ủng hộ tốt nhất vẫn là chia sẻ markAI cho bạn bè hoặc gửi góp ý module để mình làm đúng thứ mọi người cần.
              </div>
            </div>

            <div className="popup-footer">
              <span className="popup-meta">Không quảng cáo · không tracking · làm bởi 1 người</span>
              <div className="popup-actions">
                <button type="button" className="btn-primary" style={{ fontSize: '11px', padding: '6px 14px' }} onClick={closeDonationPopup}>
                  Đóng →
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </footer>
  );
}
