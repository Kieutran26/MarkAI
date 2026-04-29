import { Link } from 'react-router-dom';
import { posts } from '../../lib/posts';
import BlogCard from './BlogCard';

export default function BlogGrid() {
  const latestPosts = posts.slice(0, 6);

  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <div className="p-6 md:p-8 flex justify-between items-baseline border-b border-border">
          <h2 className="font-serif text-[1.2rem]">Bài viết mới nhất</h2>
          <Link to="/blog" className="font-mono text-[11px] text-muted hover:text-accent transition-colors">
            Xem tất cả →
          </Link>
        </div>
        <div className="blog-grid">
          {latestPosts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime.replace('đọc', '').trim()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
