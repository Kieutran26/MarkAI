import type { TermGroup } from '../../lib/glossary';
import { groupLabels, totalGroupCounts } from '../../lib/glossary';

interface FilterBarProps {
  activeGroup: TermGroup | 'all';
  onGroupChange: (group: TermGroup | 'all') => void;
  sortAZ: boolean;
  onToggleSort: () => void;
}

const groups: Array<TermGroup | 'all'> = ['all', 'code', 'design', 'infra', 'data', 'ai', 'workflow'];

export default function FilterBar({ activeGroup, onGroupChange, sortAZ, onToggleSort }: FilterBarProps) {
  return (
    <div className="sticky top-[52px] z-40 border-b border-border bg-[var(--bg)]">
      <div className="glossary-scroll flex overflow-x-auto">
          {groups.map((group) => (
            <button key={group} type="button" onClick={() => onGroupChange(group)} className={`flex h-11 shrink-0 items-center gap-2 border-r border-border px-[1.1rem] font-mono text-[11px] transition-colors ${activeGroup === group ? 'border-b-2 border-b-accent text-ink' : 'text-muted hover:bg-bg2 hover:text-ink'}`}>
              <span>{groupLabels[group]}</span>
              <span className={`text-[10px] ${activeGroup === group ? 'text-accent' : 'text-border'}`}>{totalGroupCounts[group]}</span>
            </button>
          ))}
          <div className="flex-1 border-r border-border" />
          <button type="button" onClick={onToggleSort} className="flex h-11 shrink-0 items-center border-l border-border px-[1.1rem] font-mono text-[11px] text-muted transition-colors hover:bg-bg2 hover:text-ink">{sortAZ ? 'A → Z ↕' : 'Z → A ↕'}</button>
      </div>
    </div>
  );
}
