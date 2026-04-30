import { Link } from 'react-router-dom';
import type { Post } from '../../lib/posts';

type ArticleFooterProps = {
  post: Post;
};

export default function ArticleFooter({ post }: ArticleFooterProps) {
  return (
    <div className="border-t border-border">
      <div className="page-shell">
        {/* Tags */}
        <div className="flex items-center gap-3 flex-wrap py-5 border-b border-border">
          <span className="font-mono text-[10px] text-muted tracking-wide">Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-muted border border-border bg-bg2 px-2 py-0.5 hover:border-ink transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author card */}
        <div className="flex gap-6 py-8 border-b border-border">
          <div className="w-[52px] h-[52px] flex-shrink-0 bg-bg3 border border-border flex items-center justify-center font-serif text-[1.3rem] text-ink2">
            M
          </div>
          <div>
            <div className="font-mono text-[9px] text-muted tracking-widest uppercase mb-1">Tác giả</div>
            <div className="font-serif text-[1.1rem] mb-2">{post.author}</div>
            <p className="font-sans text-[13px] font-light text-ink2 leading-[1.6]">
              Nhóm nghiên cứu và thực chiến AI ứng dụng cho dân Marketing tại Việt Nam. Viết từ kinh nghiệm thật — không lý thuyết suông.
            </p>
          </div>
        </div>

        {/* Post navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Previous */}
          <Link
            to={post.prevSlug ? `/blog/${post.prevSlug}` : '#'}
            className={`py-6 md:py-8 border-b md:border-b-0 md:border-r border-border flex flex-col gap-2 ${
              !post.prevSlug ? 'opacity-35 pointer-events-none' : 'hover:bg-bg2 transition-colors'
            }`}
          >
            <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
              ← Bài trước
            </span>
            <span className="font-serif text-[1rem] leading-[1.3]">
              {post.prevTitle || '—'}
            </span>
            {post.prevCategory && (
              <span className="font-mono text-[10px] text-muted">
                {post.prevCategory}
              </span>
            )}
          </Link>

          {/* Next */}
          <Link
            to={post.nextSlug ? `/blog/${post.nextSlug}` : '#'}
            className={`py-6 md:py-8 flex flex-col gap-2 text-right ${
              !post.nextSlug ? 'opacity-35 pointer-events-none' : 'bg-ink hover:bg-accent transition-colors'
            }`}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: post.nextSlug ? 'var(--text-dim)' : 'inherit' }}>
              Bài tiếp theo →
            </span>
            <span className="font-serif text-[1rem] leading-[1.3]" style={{ color: post.nextSlug ? 'var(--bg)' : 'inherit' }}>
              {post.nextTitle || '—'}
            </span>
            {post.nextCategory && (
              <span className="font-mono text-[10px]" style={{ color: post.nextSlug ? 'var(--text-dim)' : 'inherit' }}>
                {post.nextCategory}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
