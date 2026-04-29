'use client';

import { useState } from 'react';
import { posts } from '../../lib/posts';
import type { PostCategory } from '../../lib/posts';

const categories: (PostCategory | 'Tất cả')[] = ['Tất cả', 'Vibecode', 'Workflow', 'Tool Review', 'Case Study', 'Analytics', 'Deploy'];

export default function CategoryBar() {
  const [active, setActive] = useState<PostCategory | 'Tất cả'>('Tất cả');

  return (
    <div className="border-b border-border sticky top-[52px] z-40 bg-bg">
      <div className="max-w-[1200px] mx-auto flex items-stretch">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-mono text-[11px] px-3 md:px-4 h-11 flex items-center border-r border-border transition-colors ${
              active === cat
                ? 'text-ink border-b-2 border-b-accent'
                : 'text-muted hover:bg-bg2 hover:text-ink'
            }`}
          >
            {cat}
          </button>
        ))}
        <div className="flex-1"></div>
        <span className="font-mono text-[11px] text-muted px-4 h-11 flex items-center border-l border-border">
          {posts.length} bài viết
        </span>
      </div>
    </div>
  );
}
