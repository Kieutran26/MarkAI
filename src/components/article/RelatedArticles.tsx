import { Link } from 'react-router-dom';
import { posts } from '../../lib/posts';

export default function RelatedArticles() {
  const related = posts.slice(0, 3);

  return (
    <div className="bg-bg2 border-t border-border">
      <div className="max-w-[1200px] mx-auto py-12 px-6 md:px-8">
        <h2 className="font-serif text-[1.4rem] mb-8">
          Có thể bạn cũng muốn <em className="text-accent">đọc thêm</em>
        </h2>
        <div className="related-grid">
          {related.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="related-card"
            >
              <span className="font-mono text-[9px] text-muted tracking-widest uppercase">
                {post.category}
              </span>
              <span className="font-serif text-[1rem] leading-[1.3] line-clamp-2">
                {post.title}
              </span>
              <span className="font-mono text-[10px] text-muted mt-auto">
                {post.readTime.replace('đọc', '').trim()} · {post.date}
              </span>
              <span className="rc-arrow self-end">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
