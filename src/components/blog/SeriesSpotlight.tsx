import { Link } from 'react-router-dom';
import { posts } from '../../lib/posts';

const seriesPosts = [
  { num: '01', title: 'Cài Cursor và chạy dự án đầu tiên trong 30 phút', category: 'Vibecode', time: '6 phút đọc' },
  { num: '02', title: 'Viết Cursor Rules để AI hiểu project của bạn', category: 'Workflow', time: '5 phút đọc' },
  { num: '03', title: 'Build landing page từ brief đến live trong 1 buổi', category: 'Case Study', time: '9 phút đọc' },
  { num: '04', title: 'Debug khi AI làm vỡ cả project — checklist từng bước', category: 'Vibecode', time: '7 phút đọc' },
  { num: '05', title: 'Deploy lên Vercel và gắn domain riêng — step by step', category: 'Deploy', time: '8 phút đọc' },
];

export default function SeriesSpotlight() {
  const firstPostSlug = posts.find(p => p.seriesId === 'vibecode-zero')?.slug || posts[0].slug;

  return (
    <div className="spotlight">
      <div className="page-shell grid grid-cols-1 md:grid-cols-2 gap-0 py-8">
        {/* Left column */}
        <div className="pr-8 border-b md:border-b-0 md:border-r border-[var(--surface-3)] pb-8 md:pb-0">
          <p className="font-mono text-[10px] text-[var(--text-dim)] tracking-widest uppercase mb-4">
            <span className="text-accent">✳</span> Series nổi bật
          </p>
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-bg leading-[1.15] mb-4">
            Vibecode từ zero —<br />
            <em className="text-accent">đọc theo thứ tự.</em>
          </h2>
          <p className="font-sans text-[14px] font-light text-[var(--text-soft)] leading-[1.7] mb-6">
            5 bài viết liên quan, đọc theo thứ tự để hiểu toàn bộ quy trình từ cài Cursor đến deploy web thật. Mỗi bài ~5–8 phút.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Cursor', 'Claude Code', 'Next.js', 'Vercel', 'Deploy'].map((tag) => (
              <span key={tag} className="font-mono text-[10px] text-[var(--text-dim)] border border-[var(--surface-3)] px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
          <Link to={`/blog/${firstPostSlug}`} className="btn-accent inline-flex items-center gap-2">
            Đọc series →
          </Link>
        </div>

        {/* Right column */}
        <div className="pl-0 md:pl-8 pt-6 md:pt-0">
          <p className="font-mono text-[10px] text-[var(--text-dim)] tracking-widest uppercase mb-4">
            ✳ Trong series này
          </p>
          <div className="flex flex-col">
            {seriesPosts.map((post, idx) => (
              <Link
                key={post.num}
                to={idx === 0 ? `/blog/${firstPostSlug}` : '/blog'}
                className="flex gap-4 py-4 border-b border-[var(--surface-2)] hover:opacity-70 transition-opacity"
              >
                <span className="font-mono text-[10px] text-[var(--text-subtle)] min-w-[22px] pt-1">{post.num}</span>
                <div className="flex-1">
                  <div className="font-sans text-[13px] font-light text-[var(--text-soft)] leading-[1.4] mb-1">
                    {post.title}
                  </div>
                  <div className="font-mono text-[10px] text-[var(--text-dim)]">
                    {post.category} · {post.time}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
