'use client';

import { type MouseEvent } from 'react';
import { promptsData, featuredPrompts } from '../../lib/prompts-data';
import { Prompt } from '../../lib/prompts-types';

interface FeaturedPromptsProps {
  onPromptClick: (prompt: Prompt) => void;
}

export default function FeaturedPrompts({ onPromptClick }: FeaturedPromptsProps) {
  const handleCopy = (e: MouseEvent, prompt: Prompt) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.prompt);
    const btn = e.currentTarget as HTMLButtonElement;
    btn.textContent = 'Đã copy ✓';
    setTimeout(() => {
      btn.textContent = 'Copy';
    }, 2000);
  };

  const renderSnippet = (prompt: Prompt) => {
    const snippet = prompt.prompt.slice(0, 120) + '...';
    return snippet
      .replace(/\[([^\]]+)\]/g, '<span class="val">[$1]</span>')
      .replace(/(Act as|Tech stack:|Task:|Rules:)/g, '<span class="kw">$1</span>');
  };

  return (
    <section className="featured-section">
      <div className="featured-inner prompts-feat-inner">
        <div className="featured-header">
          <div>
            <p className="featured-label"><span>✳</span> 01 · hot prompts tuần này</p>
            <h2 className="featured-h2">Prompt được dùng <em>nhiều nhất.</em></h2>
          </div>
          <a href="#" className="featured-link">Xem tất cả →</a>
        </div>
        <div className="featured-grid">
          {featuredPrompts.map((id, index) => {
            const prompt = promptsData[id];
            if (!prompt) return null;
            const isBig = index === 0;
            return (
              <div
                key={id}
                className={`feat-card ${isBig ? 'big' : ''}`}
                onClick={() => onPromptClick(prompt)}
              >
                <div className="feat-card-top">
                  <span className="feat-num">{prompt.num}</span>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    {prompt.hot && <span className="badge badge-accent" style={{ fontSize: '9px', padding: '2px 6px' }}>HOT</span>}
                    {prompt.isNew && <span className="badge badge-accent" style={{ fontSize: '9px', padding: '2px 6px' }}>MỚI</span>}
                    <span className="feat-cat">{prompt.categoryLabel}</span>
                  </div>
                </div>
                <div className="feat-title">{prompt.title}</div>
                <div
                  className="feat-snippet"
                  dangerouslySetInnerHTML={{ __html: renderSnippet(prompt) }}
                />
                <div className="feat-meta">
                  <span>{prompt.categoryLabel} · {prompt.tools.join(' · ')}</span>
                  <button
                    className="feat-copy"
                    onClick={(e) => handleCopy(e, prompt)}
                  >
                    Copy
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
