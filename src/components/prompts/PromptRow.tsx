'use client';

import { Prompt } from '../../lib/prompts-types';
import { promptsData } from '../../lib/prompts-data';

interface PromptRowProps {
  id: string;
  onClick: (prompt: Prompt) => void;
}

export default function PromptRow({ id, onClick }: PromptRowProps) {
  const prompt = promptsData[id];
  if (!prompt) return null;

  return (
    <div className="prompt-row" onClick={() => onClick(prompt)}>
      <div className="prompt-row-num">
        <span className="prompt-row-num-text">P</span>
        <span className="prompt-row-num-big">{prompt.id}</span>
      </div>
      <div className="prompt-row-body">
        <div className="prompt-row-title">{prompt.title}</div>
        <div className="prompt-row-meta">
          {prompt.categoryLabel}
          {prompt.hot && <span className="badge badge-accent" style={{ fontSize: '9px', padding: '1px 5px' }}>HOT</span>}
          {prompt.isNew && <span className="badge badge-outline" style={{ fontSize: '9px', padding: '1px 5px' }}>MỚI</span>}
          · {prompt.tools.join(' · ')} · {prompt.date}
        </div>
      </div>
      <div className="prompt-row-arrow">→</div>
    </div>
  );
}
