import React from 'react';

export default function PromptTeaser() {
  return (
    <div className="prompt-teaser">
      <div className="page-shell py-16 lg:py-20 grid gap-10 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-start">
        {/* Left Column */}
        <div>
          <p className="prompt-label">
            <span>✳</span> 150+ prompt thực chiến
          </p>
          <h2 className="prompt-h2">
            Prompt sẵn dùng —<br /><em>lấy về xài liền.</em>
          </h2>
          <p className="prompt-desc">
            Không cần viết prompt từ đầu. Thư viện 150+ prompt đã test thực tế — cho Vibecode, Analytics, Content, Ads, báo cáo tự động và nhiều hơn nữa.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#" className="btn-accent">
              Xem Prompt Library →
            </a>
            <a href="#" className="btn-ghost-inv">
              Submit prompt của bạn
            </a>
          </div>
        </div>
        
        {/* Right Column - Code Box */}
        <div>
          <div className="code-box">
            <div className="code-box-header">
              Prompt mẫu · Vibecode · Landing page
            </div>
            <div className="font-[family-name:var(--mono)] text-[12px] leading-[1.8]">
              <div className="cc"># Tạo landing page campaign</div>
              <div className="h-3"></div>
              <div><span className="ck">Mục đích:</span> <span className="cv">Ra mắt sản phẩm mới tháng 5</span></div>
              <div><span className="ck">Stack:</span>     <span className="cv">Next.js + Tailwind CSS</span></div>
              <div><span className="ck">Sections:</span>  <span className="cv">Hero → Features → CTA</span></div>
              <div className="h-3"></div>
              <div><span className="ck">Hero:</span></div>
              <div>  <span className="cv">- Headline chính: [tên sản phẩm]</span></div>
              <div>  <span className="cv">- Subheadline: 1 câu lợi ích rõ</span></div>
              <div>  <span className="cv">- CTA button: "Đăng ký ngay"</span></div>
              <div>  <span className="cv">- Countdown timer: 3 ngày</span></div>
              <div className="h-3"></div>
              <div><span className="ck">Yêu cầu:</span></div>
              <div>  <span className="cv">- Mobile responsive</span></div>
              <div>  <span className="cv">- Không dùng thư viện ngoài</span></div>
              <div>  <span className="cv">- Dark mode support</span></div>
            </div>
            <div className="code-box-footer">
              ✓ Dùng với Cursor · Claude Code · v0.dev
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
