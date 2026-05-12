'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '../../lib/posts';

type ArticleHeroProps = {
  post: Post;
};

export default function ArticleHero({ post }: ArticleHeroProps) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-wrap">
        <div className="page-shell flex items-center gap-2 py-3 font-mono text-[11px] text-muted">
          <Link to="/" className="hover:text-ink">markAI</Link>
          <span className="text-border">/</span>
          <Link to="/blog" className="hover:text-ink">Blog</Link>
          <span className="text-border">/</span>
          <span className="text-ink truncate max-w-[300px]">{post.title}</span>
        </div>
      </div>

      {/* Article Hero */}
      <div className="border-b border-border bg-bg overflow-hidden">
        <div className="page-shell">
          <div className="md:grid md:grid-cols-10 gap-0 items-stretch min-h-[400px] lg:min-h-[500px]">
            {/* Text Content - 4 parts */}
            <div className="md:col-span-4 py-8 md:py-12 lg:py-16 pr-6 lg:pr-12 flex flex-col justify-center">
              <span className="inline-block self-start font-mono text-[10px] bg-ink text-bg px-3 py-1 tracking-wide uppercase mb-5">
                {post.category}
              </span>
              <h1 className="font-serif text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.05] tracking-tight mb-6">
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
              <p className="font-sans text-[15px] font-light text-ink2 leading-[1.7] mb-8">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 flex-wrap mb-6">
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

            {/* Feature Image - 6 parts */}
            <div className="md:col-span-6 relative bg-bg3 border-l border-border group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" 
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-ink/5 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
