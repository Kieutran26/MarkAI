'use client';

import { type MouseEvent } from 'react';
import { Prompt } from '../../lib/prompts-types';
import { promptsData } from '../../lib/prompts-data';

interface PromptCardProps {
  id: string;
  onClick: (prompt: Prompt) => void;
  onCopy?: (prompt: Prompt) => void;
  variant?: 'light' | 'cream';
}

export default function PromptCard({ id, onClick, onCopy, variant = 'light' }: PromptCardProps) {
  const prompt = promptsData[id];
  if (!prompt) return null;

  const handleCopy = (e: MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.prompt);
    const btn = e.currentTarget as HTMLButtonElement;
    btn.textContent = '✓';
    setTimeout(() => {
      btn.textContent = 'Copy';
    }, 2000);
    onCopy?.(prompt);
  };

  const preview = prompt.prompt.slice(0, 80) + '...';

  return (
    <div
      className={`prompt-card ${variant === 'cream' ? 'prompt-card-cream' : ''}`}
      onClick={() => onClick(prompt)}
    >
      <div className="prompt-card-top">
        <span className="prompt-card-num">{prompt.num}</span>
        <div className="prompt-card-badges">
          {prompt.hot && <span className="badge badge-accent">HOT</span>}
          {prompt.isNew && <span className="badge badge-outline">MỚI</span>}
          <span className="prompt-card-cat">{prompt.categoryLabel}</span>
          {prompt.tools.map((tool) => (
            <span key={tool} className="prompt-card-tool">{tool}</span>
          ))}
        </div>
      </div>
      <div className="prompt-card-title">{prompt.title}</div>
      <div className="prompt-card-preview">{preview}</div>
      <div className="prompt-card-meta">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>{prompt.tools[0]} · {prompt.date}</span>
          <button className="prompt-copy-btn" onClick={handleCopy}>Copy</button>
        </div>
      </div>
      <span className="prompt-arrow">→</span>
    </div>
  );
}
