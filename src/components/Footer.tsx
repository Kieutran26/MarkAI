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
    <>
      <footer className="w-full bg-[#F6F5F1] border-t border-[#E6E4DE] text-[#141414] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 pt-20 md:pt-24 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {/* Col 1: Brand */}
            <div>
              <div className="flex items-center gap-2.5 font-semibold text-[17px] tracking-[-0.02em]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8772E] shrink-0" />
                <span>markAI.vn</span>
              </div>
              <p className="mt-4 text-[14px] leading-[1.65] text-[#6B6B6B] max-w-[260px]">
                Học AI ứng dụng dành riêng cho dân Marketing Việt Nam. Miễn phí 100% · mãi mãi.
              </p>
            </div>

            {/* Col 2: Learning Tracks */}
            <div className="flex flex-col gap-3 text-[14px]">
              <div className="font-mono text-[11px] text-[#A8A6A0] uppercase tracking-wider mb-1">
                Lộ trình học
              </div>
              <Link to="/vibecode" className="text-[#141414] hover:text-[#E8772E] no-underline transition-colors flex items-center gap-1.5">
                <span>Vibecode Web</span>
                <span className="font-mono text-[11px] text-[#E8772E] font-medium ml-1">Live</span>
              </Link>
              <span className="text-[#A8A6A0] select-none">Vibecode App · sắp ra</span>
              <span className="text-[#A8A6A0] select-none">Analytics AI · sắp ra</span>
              <span className="text-[#A8A6A0] select-none">Generate Image · sắp ra</span>
              <span className="text-[#A8A6A0] select-none">Motion Video · sắp ra</span>
            </div>

            {/* Col 3: Explore */}
            <div className="flex flex-col gap-3 text-[14px]">
              <div className="font-mono text-[11px] text-[#A8A6A0] uppercase tracking-wider mb-1">
                Khám phá
              </div>
              <Link to="/blog" className="text-[#141414] hover:text-[#E8772E] no-underline transition-colors">
                Blog
              </Link>
              <Link to="/tips" className="text-[#141414] hover:text-[#E8772E] no-underline transition-colors">
                Tips &amp; Mẹo
              </Link>
              <Link to="/tu-dien-thuat-ngu" className="text-[#141414] hover:text-[#E8772E] no-underline transition-colors">
                Từ điển chuyên ngành
              </Link>
            </div>

            {/* Col 4: Project Info & Donation */}
            <div className="flex flex-col gap-3 text-[14px]">
              <div className="font-mono text-[11px] text-[#A8A6A0] uppercase tracking-wider mb-1">
                markAI
              </div>
              <Link to="/about" className="text-[#141414] hover:text-[#E8772E] no-underline transition-colors">
                Về dự án này
              </Link>
              <Link to="/feedback" className="text-[#141414] hover:text-[#E8772E] no-underline transition-colors">
                Góp ý module
              </Link>
              <Link to="/report" className="text-[#141414] hover:text-[#E8772E] no-underline transition-colors">
                Báo lỗi
              </Link>
              <Link to="/contact" className="text-[#141414] hover:text-[#E8772E] no-underline transition-colors">
                Liên hệ tác giả
              </Link>
              <button
                type="button"
                onClick={() => setIsDonationOpen(true)}
                className="text-left text-[#E8772E] hover:underline font-medium cursor-pointer transition-colors p-0 bg-transparent border-0 text-[14px]"
              >
                Ủng hộ tác giả ☕
              </button>
            </div>
          </div>

          {/* Huge MarkAI Brand Watermark */}
          <div className="mt-20 font-semibold tracking-[-0.06em] leading-[0.8] text-[clamp(80px,19vw,280px)] text-[#E6E4DE] select-none pointer-events-none">
            markAI
          </div>

          {/* Bottom Copyright Row */}
          <div className="mt-8 pt-6 border-t border-[#DAD8D2] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[12px] text-[#A8A6A0]">
            <span>© 2026 markAI.vn · Miễn phí 100% · Không quảng cáo · Không tracking</span>
            <span>Dành riêng cho dân Marketing Việt Nam</span>
          </div>
        </div>
      </footer>

      {/* Donation Popup Modal */}
      {isDonationVisible && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="donation-title"
          onClick={handleOverlayClick}
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-200 ${
            isDonationOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`w-full max-w-[420px] rounded-3xl bg-[#F6F5F1] border border-[#DAD8D2] p-7 text-[#141414] shadow-2xl transition-all duration-200 ${
              isDonationOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 id="donation-title" className="font-serif text-2xl font-bold text-[#141414]">
                Ủng hộ tác giả ☕
              </h3>
              <button
                type="button"
                onClick={closeDonationPopup}
                className="w-8 h-8 rounded-full border border-[#DAD8D2] bg-white text-[#55534F] hover:text-[#141414] hover:bg-[#F1EFEA] flex items-center justify-center text-sm transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-[14px] text-[#6B6B6B] leading-relaxed mb-6">
              markAI là dự án hoàn toàn miễn phí và phi lợi nhuận. Mọi sự ủng hộ dù nhỏ đều là động lực to lớn giúp mình tiếp tục duy trì và cập nhật nội dung mới.
            </p>
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white border border-[#E6E4DE] rounded-2xl shadow-sm">
                <img
                  src={donationQrImage}
                  alt="QR Code ủng hộ tác giả markAI"
                  className="w-56 h-56 object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="text-center font-mono text-[12px] text-[#8A8883]">
              Quét mã VietQR bằng app ngân hàng bất kỳ
            </div>
          </div>
        </div>
      )}
    </>
  );
}
