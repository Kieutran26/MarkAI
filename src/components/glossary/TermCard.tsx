import { Link } from 'react-router-dom';
import type { GlossaryTerm, TermGroup, TermViewMode } from '../../lib/glossary';

interface TermCardProps {
  key?: string;
  term: GlossaryTerm;
  viewMode: TermViewMode;
  onOpenTerm: (term: GlossaryTerm) => void;
}

const badgeClasses: Record<TermGroup, string> = {
  code: 'bg-[var(--ink)] text-[var(--bg)]',
  design: 'bg-[var(--glossary-design)] text-white',
  infra: 'bg-[var(--glossary-infra)] text-white',
  data: 'bg-[var(--glossary-data)] text-white',
  ai: 'bg-[var(--accent)] text-white',
  workflow: 'bg-[var(--ink2)] text-[var(--bg)]',
};

const badgeLabels: Record<TermGroup, string> = {
  code: 'Code',
  design: 'Design',
  infra: 'Hạ tầng',
  data: 'Data',
  ai: 'AI',
  workflow: 'Workflow',
};

export default function TermCard({ term, viewMode, onOpenTerm }: TermCardProps) {
  const shortDescription = term.definition.split(/[.!?]/)[0]?.trim() ?? term.definition;

  const cardBody = (
    <>
      <div className="flex h-full flex-col gap-3 px-4 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="font-serif text-[1.9rem] leading-[0.95] text-ink">{term.name}</h3>
          </div>

          <div className="flex flex-wrap justify-end gap-[0.3rem]">
            {term.groups.map((group) => (
              <span key={group} className={`px-[7px] py-[2px] font-mono text-[9px] uppercase tracking-[0.04em] ${badgeClasses[group]}`}>
                {badgeLabels[group]}
              </span>
            ))}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="glossary-body max-w-[28ch] font-sans text-[12px] leading-[1.55] text-ink2">
            {shortDescription}
          </p>
          <div className="mt-3">
            <span className="inline-flex items-center border border-[var(--ink)] bg-[var(--ink)] px-2 py-[3px] font-mono text-[10px] uppercase tracking-[0.05em] text-[var(--bg)] transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-[var(--ink)]">
              Xem chi tiết →
            </span>
          </div>
        </div>
      </div>
    </>
  );

  if (viewMode === 'page') {
    return (
      <Link to={`/tu-dien-thuat-ngu/${term.id}`} className="glossary-mini-card group flex min-h-[138px] flex-col border border-border bg-[var(--bg)] text-inherit no-underline transition-colors hover:bg-bg2">
        {cardBody}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpenTerm(term)}
      className="glossary-mini-card group flex min-h-[138px] flex-col border border-border bg-[var(--bg)] text-left transition-colors hover:bg-bg2"
    >
      {cardBody}
    </button>
  );
}
