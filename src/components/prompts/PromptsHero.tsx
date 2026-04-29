import { promptsData } from '../../lib/prompts-data';

export default function PromptsHero() {
  const featuredPrompt = promptsData['042'];

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
          <p className="hero-note">✳ miễn phí · không cần đăng ký · copy xài ngay</p>
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
              <pre className="prompt-preview-text">
<span className="kw">Act as</span> a senior Next.js developer.
I'm building <span className="val">[tên dự án]</span> — a <span className="val">[mô tả ngắn]</span>.

<span className="kw">Tech stack:</span> Next.js 15 · TypeScript
· Tailwind v4 · Supabase

<span className="kw">Task:</span> Build the <span className="val">[tên component]</span> component.
Requirements:
- <span className="val">[yêu cầu 1]</span>
- <span className="val">[yêu cầu 2]</span>

<span className="kw">Rules:</span> No border-radius · No box-shadow
· DM Mono for UI text</pre>
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
