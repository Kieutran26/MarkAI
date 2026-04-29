import { Prompt } from '../../lib/prompts-types';
import PromptCard from './PromptCard';

interface PromptCategorySectionProps {
  id: string;
  num: string;
  title: string;
  promptIds: string[];
  variant?: 'light' | 'cream';
  onPromptClick: (prompt: Prompt) => void;
}

export default function PromptCategorySection({
  id,
  num,
  title,
  promptIds,
  variant = 'light',
  onPromptClick,
}: PromptCategorySectionProps) {
  return (
    <section className={`cat-section ${variant === 'cream' ? 'cat-section-cream' : ''}`} id={id}>
      <div className="cat-section-inner">
        <div className="cat-section-header">
          <div>
            <p className="section-label"><span>✳</span> {num}</p>
            <h2 className="section-heading" dangerouslySetInnerHTML={{ __html: title }} />
          </div>
          <a href="#" className="cat-section-right">Xem tất cả →</a>
        </div>
        <div className="prompt-grid">
          {promptIds.map((pid) => (
            <PromptCard
              id={pid}
              onClick={onPromptClick}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
