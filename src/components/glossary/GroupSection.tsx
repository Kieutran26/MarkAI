import type { GlossaryTerm } from '../../lib/glossary';
import TermCard from './TermCard';

interface GroupSectionProps {
  key?: string;
  letter: string;
  terms: GlossaryTerm[];
  getTermName: (id: string) => string;
}

export default function GroupSection({ letter, terms, getTermName }: GroupSectionProps) {
  return (
    <section id={`letter-${letter}`} className="group-section border-b border-border">
      <div className="sticky top-[96px] z-30 flex items-baseline gap-4 border-b border-border bg-bg2 px-[1.2rem] py-[1rem] md:px-8 md:py-[1.4rem]">
        <span className="font-serif text-[2.2rem] leading-none">{letter}</span>
        <span className="font-mono text-[10px] tracking-[0.04em] text-muted">{terms.length} thuật ngữ</span>
      </div>
      {terms.map((term) => <TermCard key={term.id} term={term} getTermName={getTermName} />)}
    </section>
  );
}
