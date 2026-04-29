'use client';

import { Link } from 'react-router-dom';
import { posts, featuredPost } from '../../lib/posts';

export default function BlogHero() {
  return (
    <div className="border-b border-border">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Left column - Tagline */}
        <div className="p-8 md:p-12 md:pr-8 border-b md:border-b-0 md:border-r border-border flex flex-col justify-center">
          <p className="font-mono text-[11px] text-muted tracking-widest uppercase mb-5">
            <span className="text-accent mr-1">✳</span> Blog · markAI.vn · cập nhật hàng tuần
          </p>
          <h1 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] tracking-tight mb-4">
            Đọc · Hiểu ·<br />
            <em className="text-accent">Áp dụng ngay.</em>
          </h1>
          <p className="font-sans text-[15px] font-light text-ink2 leading-[1.75] max-w-[420px] mb-8">
            Bài viết thực chiến về AI, vibecode, và cách dân Marketing dùng AI để làm việc nhanh hơn. Không hàn lâm, không lý thuyết suông.
          </p>
          <div className="flex border border-border">
            <div className="flex-1 p-4 border-r border-border">
              <div className="font-serif text-[1.6rem] leading-none mb-1">{posts.length}</div>
              <div className="font-mono text-[10px] text-muted tracking-wide">Bài viết</div>
            </div>
            <div className="flex-1 p-4 border-r border-border">
              <div className="font-serif text-[1.6rem] leading-none mb-1">6</div>
              <div className="font-mono text-[10px] text-muted tracking-wide">Chủ đề</div>
            </div>
            <div className="flex-1 p-4">
              <div className="font-serif text-[1.6rem] leading-none mb-1">1/tuần</div>
              <div className="font-mono text-[10px] text-muted tracking-wide">Cập nhật</div>
            </div>
          </div>
        </div>

        {/* Right column - Featured post */}
        <Link to={`/blog/${featuredPost.slug}`} className="featured-post">
          <div className="featured-pattern"></div>
          <span className="featured-label">✳ Nổi bật</span>
          <div className="featured-content relative z-10">
            <div className="font-mono text-[10px] text-muted tracking-widest uppercase mb-3">
              {featuredPost.category}
            </div>
            <h2 className="font-serif text-[clamp(1.3rem,2.5vw,1.9rem)] leading-[1.2] mb-4">
              {featuredPost.title}
            </h2>
            <p className="font-sans text-[13px] font-light text-ink2 leading-[1.65] mb-4 line-clamp-3">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-muted">{featuredPost.date}</span>
              <span className="w-[3px] h-[3px] bg-border"></span>
              <span className="font-mono text-[10px] text-muted">{featuredPost.readTime}</span>
            </div>
          </div>
          <span className="featured-arrow">↗</span>
        </Link>
      </div>
    </div>
  );
}
