import React from 'react';

interface AlphaSidebarProps {
  letters: Array<{ letter: string; count: number }>;
  activeLetter: string;
  onLetterClick: (letter: string) => void;
}

export default function AlphaSidebar({ letters, activeLetter, onLetterClick }: AlphaSidebarProps) {
  return (
    <aside className="sticky top-[60px] md:top-[76px] self-start h-[calc(100vh-60px)] md:h-[calc(100vh-76px)] overflow-y-auto py-5 border-r border-[#DAD8D2] scrollbar-none w-[56px] shrink-0">
      <div className="font-mono text-[10px] text-[#A8A6A0] mb-2.5 text-center">A–Z</div>
      <div className="flex flex-col gap-[1px]">
        {letters.map(({ letter, count }) => {
          const isActive = letter === activeLetter;
          return (
            <button
              key={letter}
              type="button"
              onClick={() => onLetterClick(letter)}
              className={`relative flex items-baseline justify-center gap-[3px] py-1.5 font-mono text-[13px] transition-colors hover:bg-white cursor-pointer border-none ${
                isActive ? 'bg-white text-[#E8772E] font-medium' : 'bg-transparent text-[#3A3935]'
              }`}
            >
              <span
                className="absolute left-0 top-1 bottom-1 bg-[#E8772E] transition-all duration-300"
                style={{ width: isActive ? '2px' : '0px' }}
              />
              <span>{letter}</span>
              <span className={`text-[9px] ${isActive ? 'text-[#E8772E]' : 'text-[#B8B6B0]'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
