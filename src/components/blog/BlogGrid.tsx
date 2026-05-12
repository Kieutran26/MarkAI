import { Link } from 'react-router-dom';
import { posts } from '../../lib/posts';
import BlogCard from './BlogCard';

export default function BlogGrid() {
  const latestPosts = posts.slice(0, 6);

  return (
    <div>
    <div>
      <div>
        <div className="py-6 md:py-8 px-[1.2rem] md:px-8 flex justify-between items-baseline border-b border-border">
          <h2 className="font-serif text-[1.2rem]">Bài viết mới nhất</h2>
          <Link to="/blog" className="btn-primary !py-2 !px-4 !text-[10px]">
            Xem tất cả →
          </Link>
        </div>
        <div className="blog-grid px-[1.2rem] md:px-8 py-8">
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
