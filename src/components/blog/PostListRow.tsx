import { Link } from 'react-router-dom';
import { posts } from '../../lib/posts';

export default function PostListRow() {
  const listPosts = posts.slice(6, 12); // Skip featured and grid posts

  return (
    <div>
      <div>
        <div className="py-6 md:py-8 px-[1.2rem] md:px-8 flex justify-between items-baseline border-b border-border">
          <h2 className="font-serif text-[1.2rem]">Tất cả bài viết</h2>
          <span className="font-mono text-[11px] text-muted">Sắp xếp: Mới nhất</span>
        </div>

        <div className="post-list">
          {listPosts.map((post, index) => {
            const displayNum = (index + 7).toString().padStart(2, '0');
            return (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="post-row">
                <div className="post-row-num">
                  <span className="font-serif text-[1.4rem] text-muted">{displayNum}</span>
                </div>
                <div className="py-5 pl-6 pr-6 flex flex-col gap-1">
                  <span className="font-mono text-[9px] text-muted tracking-widest uppercase">
                    {post.category}
                  </span>
                  <div className="font-serif text-[1.05rem] leading-[1.3]">{post.title}</div>
                  <div className="font-mono text-[10px] text-muted">
                    <span>{post.date}</span>
                    <span className="mx-2">·</span>
                    <span>{post.readTime.replace('đọc', '').trim()}</span>
                  </div>
                </div>
                <div className="post-row-arrow self-center px-4 md:px-6">
                  →
                </div>
              </Link>
            );
          })}
        </div>

        <div className="py-8 border-t border-border flex justify-center">
          <button className="btn-primary">
            Xem thêm bài viết →
          </button>
        </div>
      </div>
    </div>
  );
}
