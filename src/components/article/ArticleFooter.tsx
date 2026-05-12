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

      </div>
    </div>
  );
}
