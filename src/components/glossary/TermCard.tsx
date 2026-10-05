import React from 'react';
import type { DictionaryTermItem } from '../../lib/tuDienTerms';

interface TermCardProps {
  key?: string;
  item: DictionaryTermItem;
  onClick: (item: DictionaryTermItem) => void;
}

export default function TermCard({ item, onClick }: TermCardProps) {
  return (
    <div
      onClick={() => onClick(item)}
      className="group relative flex flex-col gap-[10px] rounded-[16px] border border-[#E6E4DE] bg-white p-[22px_22px_24px] transition-all hover:border-[#141414] hover:shadow-sm cursor-pointer"
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="m-0 font-sans text-[20px] font-semibold tracking-[-0.02em] text-[#141414] transition-colors group-hover:text-[#E8772E]">
          {item.term}
        </h3>
        <span className="flex items-center gap-[6px] font-mono text-[11px] text-[#6B6B6B] whitespace-nowrap">
          <span
            className="h-[6px] w-[6px] rounded-full shrink-0"
            style={{ backgroundColor: item.dot }}
          />
          {item.categoryName}
        </span>
      </div>
      <p className="m-0 font-sans text-[14px] leading-[1.6] text-[#55534F] text-pretty">
        {item.def}
      </p>
    </div>
  );
}
