import type { GlossaryTerm } from '../../lib/glossary';
import { getTermViewMode } from '../../lib/glossary';
import TermCard from './TermCard';

interface GroupSectionProps {
  key?: string;
  letter: string;
  terms: GlossaryTerm[];
  onOpenTerm: (term: GlossaryTerm) => void;
}

export default function GroupSection({ letter, terms, onOpenTerm }: GroupSectionProps) {
  return (
    <section id={`letter-${letter}`} className="group-section border-b border-border scroll-mt-[136px]">
      <div className="sticky top-[96px] z-30 flex items-baseline gap-4 border-b border-border bg-bg2 pl-[1.2rem] pr-0 py-[1rem] md:pl-8 md:pr-0 md:py-[1.4rem]">
        <span className="font-serif text-[2.2rem] leading-none">{letter}</span>
        <span className="font-mono text-[10px] tracking-[0.04em] text-muted">{terms.length} thuật ngữ</span>
      </div>
      <div className="glossary-term-grid pl-[1.2rem] pr-0 py-5 md:pl-8 md:pr-0 md:py-8">
        {terms.map((term) => (
          <TermCard key={term.id} term={term} viewMode={getTermViewMode(term)} onOpenTerm={onOpenTerm} />
        ))}
      </div>
    </section>
  );
}
