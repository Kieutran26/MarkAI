import type { GlossaryTerm, TermGroup } from '../../lib/glossary';

interface TermCardProps {
  key?: string;
  term: GlossaryTerm;
  getTermName: (id: string) => string;
}

const badgeClasses: Record<TermGroup, string> = {
  code: 'bg-[var(--ink)] text-[var(--bg)]',
  design: 'bg-[var(--glossary-design)] text-white',
  infra: 'bg-[var(--glossary-infra)] text-white',
  data: 'bg-[var(--glossary-data)] text-white',
  ai: 'bg-[var(--accent)] text-white',
  workflow: 'bg-[var(--ink2)] text-[var(--bg)]',
};

const badgeLabels: Record<TermGroup, string> = { code: 'Code', design: 'Design', infra: 'Hạ tầng', data: 'Data', ai: 'AI', workflow: 'Workflow' };

function renderInlineStrong(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, index) => (
    chunk.startsWith('**') && chunk.endsWith('**') ? <strong key={index}>{chunk.slice(2, -2)}</strong> : <span key={index}>{chunk}</span>
  ));
}

export default function TermCard({ term, getTermName }: TermCardProps) {
  return (
    <article id={`term-${term.id}`} className="grid border-b border-border transition-colors hover:bg-bg2 md:grid-cols-[200px_1fr]">
      <div className="border-b border-border px-[1.2rem] py-5 md:border-b-0 md:border-r md:px-8">
        <h3 className="font-serif text-[1.2rem] leading-[1.2]">{term.name}</h3>
        <p className="mt-1 font-mono text-[10px] tracking-[0.02em] text-muted">{term.nameEn}</p>
        <div className="mt-2 flex flex-wrap gap-[0.3rem]">
          {term.groups.map((group) => <span key={group} className={`px-[7px] py-[2px] font-mono text-[9px] uppercase tracking-[0.04em] ${badgeClasses[group]}`}>{badgeLabels[group]}</span>)}
        </div>
      </div>

      <div className="flex flex-col gap-3 px-[1.2rem] py-5 md:px-8">
        <p className="glossary-body glossary-definition text-[14px] leading-[1.75] text-ink2">{renderInlineStrong(term.definition)}</p>
        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.05em] text-muted">Ví dụ thực tế</p>
          <div className="glossary-example border-l-2 border-l-accent bg-[var(--bg)] px-[0.9rem] py-[0.6rem] font-mono text-[12px] leading-[1.65] text-ink2">{term.example}</div>
        </div>
        {term.related?.length ? (
          <div className="flex flex-wrap items-center gap-[0.4rem]">
            <span className="font-mono text-[10px] tracking-[0.04em] text-muted">Liên quan</span>
            {term.related.map((relatedId) => <a key={relatedId} href={`#term-${relatedId}`} className="border border-border bg-[var(--bg)] px-2 py-[2px] font-mono text-[10px] text-muted transition-colors hover:border-ink hover:text-ink">{getTermName(relatedId)}</a>)}
          </div>
        ) : null}
      </div>
    </article>
  );
}
