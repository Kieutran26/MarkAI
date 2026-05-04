interface AlphaSidebarProps {
  groupedLetters: Array<{ letter: string; count: number }>;
  activeLetter: string;
}

const dividerAfter = new Set(['E', 'I', 'N', 'T']);

export default function AlphaSidebar({ groupedLetters, activeLetter }: AlphaSidebarProps) {
  return (
    <aside className="glossary-alpha hidden border-r border-border lg:block lg:w-full lg:sticky lg:top-[96px] lg:h-[calc(100vh-96px)] lg:overflow-y-auto lg:scrollbar-hide">
      <p className="px-5 pb-1 pt-2 font-mono text-[9px] uppercase tracking-[0.08em] text-muted">Chữ cái</p>
      {groupedLetters.map(({ letter, count }) => (
        <div key={letter}>
          <a
            href={`#letter-${letter}`}
            className={`flex items-center justify-between gap-3 px-5 py-[0.3rem] font-mono text-[11px] transition-colors hover:bg-bg2 hover:text-ink ${activeLetter === letter ? 'border-l-2 border-l-accent bg-bg2 pl-[calc(1.25rem-2px)] font-medium text-accent' : 'text-ink2'}`}
          >
            <span>{letter}</span>
            <span className={`text-[9px] ${activeLetter === letter ? 'text-accent opacity-50' : 'text-border'}`}>{count}</span>
          </a>
          {dividerAfter.has(letter) ? <div className="mx-0 my-1 h-px bg-border" /> : null}
        </div>
      ))}
    </aside>
  );
}
