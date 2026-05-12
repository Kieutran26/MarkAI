import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../../lib/posts';
import type { Post } from '../../lib/posts';

type ArticleSidebarProps = {
  post: Post;
};

export default function ArticleSidebar({ post }: ArticleSidebarProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    document.querySelectorAll('h2[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);



  return (
    <aside className="article-sidebar lg:pl-10 border-l border-border">
      <div className="sticky top-16 flex flex-col gap-10">
        {/* TOC */}
        <div>
          <div className="font-mono text-[11px] text-muted tracking-widest uppercase mb-6 pl-2">
            Nội dung
          </div>
          <ul className="flex flex-col gap-1 list-none p-0 m-0">
            {post.toc.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`flex items-center gap-3 py-2.5 px-2 transition-all duration-200 no-underline ${
                    activeId === section.id
                      ? 'bg-bg3 border-l-[3px] border-accent pl-[5px] text-ink'
                      : 'text-muted hover:text-ink hover:pl-4'
                  }`}
                >
                  <span className="font-mono text-[13px] shrink-0">
                    {section.label}
                  </span>
                  <span className="text-muted/30 font-mono text-[13px]">—</span>
                  <span className="font-mono text-[13px] leading-snug">
                    {section.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>



      </div>
    </aside>
  );
}
