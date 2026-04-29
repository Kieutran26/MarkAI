'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '../../lib/posts';

type ArticleHeroProps = {
  post: Post;
};

export default function ArticleHero({ post }: ArticleHeroProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    document.querySelectorAll('h2[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const prog = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(prog);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShareX = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(post.title)}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="reading-progress">
        <div className="reading-progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb-wrap">
        <div className="max-w-[1200px] mx-auto flex items-center gap-2 py-3 px-4 md:px-8 font-mono text-[11px] text-muted">
          <Link to="/" className="hover:text-ink">markAI</Link>
          <span className="text-border">/</span>
          <Link to="/blog" className="hover:text-ink">Blog</Link>
          <span className="text-border">/</span>
          <span className="text-ink truncate max-w-[300px]">{post.title}</span>
        </div>
      </div>

      {/* Article Hero */}
      <div className="border-b border-border">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px]">
          {/* Left column */}
          <div className="p-8 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-border">
            <span className="inline-block font-mono text-[10px] bg-ink text-bg px-3 py-1 tracking-wide uppercase mb-5">
              {post.category}
            </span>
            <h1 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] tracking-tight mb-5">
              {post.title.includes(post.titleEm || '') ? (
                <>
                  {post.title.split(post.titleEm || '')[0]}
                  <em className="text-accent">{post.titleEm}</em>
                  {post.title.split(post.titleEm || '')[1]}
                </>
              ) : (
                post.title
              )}
            </h1>
            <p className="font-sans text-[15px] font-light text-ink2 leading-[1.75] max-w-[560px] mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 flex-wrap mb-4">
              <span className="font-mono text-[11px] text-ink">{post.author}</span>
              <span className="w-[3px] h-[3px] bg-border"></span>
              <span className="font-mono text-[11px] text-muted">{post.date}</span>
              <span className="w-[3px] h-[3px] bg-border"></span>
              <span className="font-mono text-[11px] text-muted">{post.readTime}</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span key={tag} className="font-mono text-[10px] text-muted border border-border bg-bg2 px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right column - TOC + Share */}
          <div className="p-6 md:p-8 flex flex-col gap-5">
            {/* TOC */}
            <div className="border border-border">
              <div className="p-3 border-b border-border bg-bg2 font-mono text-[10px] text-muted tracking-wide uppercase">
                ✳ Nội dung bài viết
              </div>
              <ul className="list-none p-0 m-0">
                {post.toc.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`flex items-start gap-3 p-3 border-b border-border text-[13px] font-sans font-light transition-colors ${
                        activeId === section.id
                          ? 'text-accent bg-bg2 border-l-2 border-l-accent pl-[11px]'
                          : 'text-ink2 hover:bg-bg2'
                      }`}
                    >
                      <span className={`font-mono text-[10px] min-w-[20px] pt-0.5 ${
                        activeId === section.id ? 'text-accent' : 'text-muted'
                      }`}>
                        {section.label}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Share */}
            <div className="border border-border">
              <div className="p-3 border-b border-border bg-bg2 font-mono text-[10px] text-muted tracking-wide uppercase">
                ✳ Chia sẻ bài viết
              </div>
              <div className="flex flex-col">
                <button
                  onClick={handleShareX}
                  className="flex items-center gap-3 p-3 border-b border-border text-[11px] font-mono text-ink2 hover:bg-bg2 transition-colors text-left"
                >
                  <span className="w-4 text-center">✕</span> Chia sẻ lên X
                </button>
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                  className="flex items-center gap-3 p-3 border-b border-border text-[11px] font-mono text-ink2 hover:bg-bg2 transition-colors text-left"
                >
                  <span className="w-4 text-center">f</span> Chia sẻ lên Facebook
                </button>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-3 p-3 text-[11px] font-mono text-ink2 hover:bg-bg2 transition-colors text-left"
                >
                  <span className="w-4 text-center">⎘</span> Copy link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
