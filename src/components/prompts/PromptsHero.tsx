import { useState, useEffect } from 'react';
import { promptsData } from '../../lib/prompts-data';
import { TypewriterText } from '../shared/Typewriter';

export default function PromptsHero() {
  const featuredPrompt = promptsData['042'];
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 15000); // Restart every 15 seconds
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(featuredPrompt.prompt);
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Left column */}
        <div className="hero-left">
          <p className="hero-eyebrow">✳ Prompt Library · 150+ prompt · đã test thực tế</p>
          <h1 className="hero-h1">
            Copy · paste ·<br />
            <em>ra kết quả ngay.</em>
          </h1>
          <p className="hero-desc">
            150+ prompt dành riêng cho dân Marketing — vibecode, content, data, research, deploy. Đã test thực tế, có biến thay thế, dùng được với Claude · Cursor · ChatGPT.
          </p>
          <div className="hero-cta">
            <a href="#prompts" className="btn-primary">Xem tất cả prompt →</a>
            <a href="#submit" className="btn-ghost">Submit prompt của bạn</a>
          </div>
          <p className="hero-note">✳ miễn phí · copy xài ngay · đã test thực tế</p>
        </div>

        {/* Right column */}
        <div className="hero-right">
          <p className="hero-right-label">✳ Ví dụ prompt thực tế</p>
          <div className="prompt-preview">
            <div className="prompt-preview-header">
              <div className="prompt-preview-meta">
                <span className="badge badge-accent">HOT</span>
                <span className="badge badge-dark">VIBECODE</span>
                <span className="prompt-preview-num">PROMPT · 042</span>
              </div>
              <button className="prompt-preview-copy" onClick={handleCopy}>Copy</button>
            </div>
            <div className="prompt-preview-body">
              <pre className="prompt-preview-text" key={animationKey}>
                <TypewriterText text="Act as" className="kw" delay={0.2} />
                <TypewriterText text=" a senior Next.js developer." delay={0.3} />
                {"\n"}
                <TypewriterText text="I'm building " delay={0.8} />
                <TypewriterText text="[tên dự án]" className="val" delay={1.0} />
                <TypewriterText text=" — a " delay={1.2} />
                <TypewriterText text="[mô tả ngắn]" className="val" delay={1.3} />
                <TypewriterText text="." delay={1.5} />
                {"\n\n"}
                <TypewriterText text="Tech stack:" className="kw" delay={1.8} />
                <TypewriterText text=" Next.js 15 · TypeScript · Tailwind v4 · Supabase" delay={2.0} />
                {"\n\n"}
                <TypewriterText text="Task:" className="kw" delay={2.8} />
                <TypewriterText text=" Build the " delay={3.0} />
                <TypewriterText text="[tên component]" className="val" delay={3.2} />
                <TypewriterText text=" component." delay={3.5} />
                {"\n"}
                <TypewriterText text="Requirements: " delay={3.8} />
                <TypewriterText text="[yêu cầu 1]" className="val" delay={4.1} />
                <TypewriterText text=" · " delay={4.3} />
                <TypewriterText text="[yêu cầu 2]" className="val" delay={4.4} />
                {"\n\n"}
                <TypewriterText text="Rules:" className="kw" delay={4.8} />
                <TypewriterText text=" No border-radius · No box-shadow · IBM Plex Mono for UI text" delay={5.0} />
              </pre>
            </div>
            <div className="prompt-preview-footer">
              <span className="ok">✓</span> Dùng với: Claude · Cursor AI · ChatGPT
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">150+</div>
              <div className="hero-stat-label">Prompts đã test</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">8</div>
              <div className="hero-stat-label">Danh mục</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">4</div>
              <div className="hero-stat-label">AI tools hỗ trợ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
