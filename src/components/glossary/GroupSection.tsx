import React from 'react';
import type { DictionaryTermItem } from '../../lib/tuDienTerms';
import TermCard from './TermCard';

interface GroupSectionProps {
  key?: string;
  letter: string;
  items: DictionaryTermItem[];
  onOpenTerm: (item: DictionaryTermItem) => void;
}

export default function GroupSection({ letter, items, onOpenTerm }: GroupSectionProps) {
  return (
    <div id={`L-${letter}`} data-letter={letter} className="border-b border-[#DAD8D2] pb-10 pt-[18px] scroll-mt-[76px] md:scroll-mt-[92px]">
      <div className="sticky top-[60px] md:top-[76px] z-20 mb-5 flex items-baseline gap-4 border-b border-[#E6E4DE] bg-[rgba(246,245,241,0.96)] py-[18px] backdrop-blur-[8px]">
        <span className="font-sans text-[clamp(44px,6vw,72px)] font-light leading-[0.85] tracking-[-0.06em] text-[#E8772E]">
          {letter}
        </span>
        <span className="font-mono text-[12px] text-[#8A8883]">
          {items.length} thuật ngữ
        </span>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,280px),1fr))] gap-3">
        {items.map((item) => (
          <TermCard key={item.term} item={item} onClick={onOpenTerm} />
        ))}
      </div>
    </div>
  );
}
