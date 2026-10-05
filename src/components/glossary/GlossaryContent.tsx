import React from 'react';
import type { DictionaryTermItem } from '../../lib/tuDienTerms';
import GroupSection from './GroupSection';

interface GlossaryContentProps {
  groups: Array<{ letter: string; items: DictionaryTermItem[] }>;
  searchQuery: string;
  onOpenTerm: (item: DictionaryTermItem) => void;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

export default function GlossaryContent({
  groups,
  searchQuery,
  onOpenTerm,
  contentRef,
}: GlossaryContentProps) {
  if (groups.length === 0) {
    return (
      <div ref={contentRef} className="mx-auto max-w-[1200px] w-full py-24 text-center">
        <div className="font-sans text-[32px] font-light tracking-[-0.03em] text-[#141414]">
          Chưa có từ “{searchQuery}”.
        </div>
        <p className="mt-3 font-sans text-[15px] text-[#6B6B6B]">
          Gửi góp ý ở cuối trang để markAI bổ sung.
        </p>
      </div>
    );
  }

  return (
    <div ref={contentRef} className="mx-auto max-w-[1200px] w-full">
      {groups.map((group) => (
        <GroupSection
          key={group.letter}
          letter={group.letter}
          items={group.items}
          onOpenTerm={onOpenTerm}
        />
      ))}
    </div>
  );
}
