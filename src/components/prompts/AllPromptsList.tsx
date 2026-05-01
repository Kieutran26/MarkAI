import { Prompt } from '../../lib/prompts-types';
import PromptRow from './PromptRow';

interface AllPromptsListProps {
  promptIds: string[];
  onPromptClick: (prompt: Prompt) => void;
}

export default function AllPromptsList({ promptIds, onPromptClick }: AllPromptsListProps) {
  return (
    <section className="all-section">
      <div className="all-inner">
        <div className="all-header">
          <div>
            <p className="section-label"><span>✳</span> 05 · tất cả prompts</p>
            <h2 className="section-heading">Toàn bộ — <em>lấy về xài liền.</em></h2>
          </div>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)' }}>150 prompts</span>
        </div>

        {promptIds.map((id) => (
          <PromptRow id={id} onClick={onPromptClick} />
        ))}

        <div style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
          <a href="#" className="all-prompts-more">Xem thêm 142 prompts →</a>
        </div>
      </div>
    </section>
  );
}
