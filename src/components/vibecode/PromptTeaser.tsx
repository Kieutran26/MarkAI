import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const Char = ({ children, delay }: { children: string, delay: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0 }}
    >
      {children}
    </motion.span>
  );
};

const TypewriterText = ({ text, delay = 0, speed = 0.015, className = "" }: { text: string, delay?: number, speed?: number, className?: string }) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <Char key={i} delay={delay + i * speed}>{char}</Char>
      ))}
    </span>
  );
};

export default function PromptTeaser() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 15000); // Restart every 15 seconds
    return () => clearInterval(timer);
  }, []);

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
              <div className="dots">
                <div className="dot r" />
                <div className="dot y" />
                <div className="dot g" />
              </div>
              Prompt mẫu · Vibecode · Landing page
            </div>
            <div className="font-[family-name:var(--mono)] text-[12px] leading-[1.8]" key={animationKey}>
              <div className="cc"><TypewriterText text="# Tạo landing page campaign" delay={0.2} /></div>
              <div className="h-3"></div>
              <div>
                <TypewriterText text="Mục đích:" className="ck mr-2" delay={0.6} />
                <TypewriterText text="Ra mắt sản phẩm mới tháng 5" className="cv" delay={0.8} />
              </div>
              <div>
                <TypewriterText text="Stack:" className="ck mr-2" delay={1.2} />
                <TypewriterText text="Next.js + Tailwind CSS" className="cv" delay={1.4} />
              </div>
              <div>
                <TypewriterText text="Sections:" className="ck mr-2" delay={1.8} />
                <TypewriterText text="Hero → Features → CTA" className="cv" delay={2.0} />
              </div>
              <div className="h-3"></div>
              <div><TypewriterText text="Hero:" className="ck" delay={2.5} /></div>
              <div><TypewriterText text="  - Headline chính: [tên sản phẩm]" className="cv" delay={2.7} /></div>
              <div><TypewriterText text="  - Subheadline: 1 câu lợi ích rõ" className="cv" delay={3.2} /></div>
              <div><TypewriterText text={'  - CTA button: "Đăng ký ngay"'} className="cv" delay={3.7} /></div>
              <div><TypewriterText text="  - Countdown timer: 3 ngày" className="cv" delay={4.2} /></div>
              <div className="h-3"></div>
              <div><TypewriterText text="Yêu cầu:" className="ck" delay={4.8} /></div>
              <div><TypewriterText text="  - Mobile responsive" className="cv" delay={5.0} /></div>
              <div><TypewriterText text="  - Không dùng thư viện ngoài" className="cv" delay={5.5} /></div>
              <div><TypewriterText text="  - Dark mode support" className="cv" delay={6.0} /></div>
            </div>
            <div className="code-box-footer">
              ✓ Copy-paste ngay
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
