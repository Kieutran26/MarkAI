import { Link } from 'react-router-dom';
import { posts } from '../../lib/posts';
import type { Post } from '../../lib/posts';

type ArticleSidebarProps = {
  currentSlug: string;
  currentCategory: string;
};

export default function ArticleSidebar({ currentSlug, currentCategory }: ArticleSidebarProps) {
  const relatedPosts: Post[] = posts
    .filter(p => p.slug !== currentSlug && p.category === currentCategory)
    .slice(0, 3);

  // If not enough related by category, fill with recent posts
  if (relatedPosts.length < 3) {
    const additionalPosts = posts
      .filter(p => p.slug !== currentSlug && !relatedPosts.some(rp => rp.slug === p.slug))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  return (
    <aside className="article-sidebar">
      {/* Related posts */}
      <div>
        <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-3">
          ✳ Bài liên quan
        </p>
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block p-4 border border-border mb-3 hover:bg-bg2 transition-colors"
          >
            <div className="font-mono text-[9px] text-muted tracking-widest uppercase mb-2">
              {post.category}
            </div>
            <div className="font-serif text-[0.95rem] leading-[1.3] mb-2">
              {post.title.length > 60 ? post.title.slice(0, 60) + '...' : post.title}
            </div>
            <div className="font-mono text-[10px] text-muted">
              {post.readTime}
            </div>
          </Link>
        ))}
      </div>

      {/* Promo box */}
      <div className="border border-border">
        <div className="p-3 bg-ink">
          <span className="font-mono text-[10px] text-[var(--text-dim)] tracking-wide uppercase">
            ✳ Khóa học · Vibecode Web
          </span>
        </div>
        <div className="p-4">
          <div className="font-serif text-[1rem] leading-[1.3] mb-2">
            Học vibecode từ zero — miễn phí
          </div>
          <p className="font-sans text-[12px] font-light text-ink2 leading-[1.6] mb-4">
            10 bài học từ cài đặt đến deploy. Không cần nền tảng code. Miễn phí mãi mãi.
          </p>
          <Link to="/vibecode" className="btn-small">
            Bắt đầu học →
          </Link>
        </div>
      </div>
    </aside>
  );
}
