import { Link } from 'react-router-dom';
import type { PostCategory } from '../../lib/posts';

type BlogCardProps = {
  slug: string;
  category: PostCategory;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

const categoryClasses: Record<PostCategory, string> = {
  'Vibecode': 'bg-ink text-bg',
  'Workflow': 'bg-ink2 text-bg',
  'Tool Review': 'bg-[#2d4a3e] text-white',
  'Case Study': 'bg-[#1a3a5c] text-white',
  'Analytics': 'bg-[#3d2a5c] text-white',
  'Deploy': 'bg-[#4a2a1a] text-white',
};

export default function BlogCard({ slug, category, title, excerpt, date, readTime }: BlogCardProps) {
  return (
    <Link to={`/blog/${slug}`} className="blog-card">
      <span className={`font-mono text-[10px] px-2 py-0.5 tracking-wide uppercase ${categoryClasses[category]}`}>
        {category}
      </span>
      <h3 className="font-serif text-[1.1rem] leading-[1.3] flex-1">{title}</h3>
      <p className="font-sans text-[13px] font-light text-ink2 leading-[1.6] line-clamp-2">
        {excerpt}
      </p>
      <div className="flex items-center gap-2 mt-auto pt-2">
        <span className="font-mono text-[10px] text-muted">{date}</span>
        <span className="w-[3px] h-[3px] bg-border"></span>
        <span className="font-mono text-[10px] text-muted">{readTime}</span>
      </div>
      <span className="card-arrow">→</span>
    </Link>
  );
}
