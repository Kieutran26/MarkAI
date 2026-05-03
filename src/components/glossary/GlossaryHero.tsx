import type { TermGroup } from '../../lib/glossary';
import { groupLabels, totalGroupCounts } from '../../lib/glossary';

interface GlossaryHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  filteredCount: number;
  activeGroup: TermGroup | 'all';
  onGroupChange: (group: TermGroup | 'all') => void;
}

const heroGroups: Array<TermGroup | 'all'> = ['all', 'code', 'design', 'infra', 'data', 'ai', 'workflow'];

export default function GlossaryHero({ searchQuery, onSearchChange, filteredCount, activeGroup, onGroupChange }: GlossaryHeroProps) {
  return (
    <section className="border-b border-border">
      <div className="page-shell">
        <div className="grid lg:grid-cols-[1fr_340px]">
          <div className="border-b border-border px-[1.2rem] py-12 lg:border-b-0 lg:border-r lg:px-8 lg:py-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">✳ <span className="text-accent">Bài 02</span> · Vibecode Web · Từ ngữ chuyên ngành</p>
            <h1 className="mt-5 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.02em]">Từ điển chuyên ngành<br />mà dân Marketer <em className="text-accent italic">phải biết.</em></h1>
            <p className="glossary-body mt-4 max-w-[480px] text-[15px] leading-[1.75] text-ink2">62+ thuật ngữ kỹ thuật giải thích bằng ngôn ngữ Marketing, kèm ví dụ thực tế. Không cần nhớ hết, chỉ cần biết đủ để không bị mù khi làm việc với AI và dev.</p>
            <label className="relative mt-8 block max-w-[480px]">
              <input value={searchQuery} onChange={(event) => onSearchChange(event.target.value)} placeholder="Tìm từ ngữ... vd: API, deploy, frontend" className="w-full border border-border bg-[var(--bg)] px-[14px] py-[11px] pr-11 font-mono text-[13px] text-ink outline-none transition-colors placeholder:text-muted focus:border-ink" />
              <span className="pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2 font-mono text-[13px] text-muted">⌕</span>
            </label>
            <p className="mt-2 font-mono text-[11px] text-muted">Hiển thị <span className="text-accent">{filteredCount}</span> thuật ngữ</p>
          </div>

          <div className="px-[1.2rem] py-12 lg:px-8 lg:py-12">
            {[
              ['Tổng từ ngữ', totalGroupCounts.all],
              ['Nhóm chủ đề', 6],
              ['Có ví dụ thực tế', '100%'],
            ].map(([label, value], index) => (
              <div key={label} className={`flex items-center justify-between border-border py-[0.85rem] ${index === 0 ? 'border-y' : 'border-b'}`}>
                <span className="font-mono text-[10px] uppercase tracking-[0.04em] text-muted">{label}</span>
                <span className={`font-serif text-[1.5rem] leading-none ${label === 'Có ví dụ thực tế' ? 'text-accent' : 'text-ink'}`}>{value}</span>
              </div>
            ))}

            <div className="mt-6">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.05em] text-muted">Nhóm chủ đề</p>
              <div className="flex flex-wrap gap-[0.3rem]">
                {heroGroups.map((group) => (
                  <button key={group} type="button" onClick={() => onGroupChange(group)} className={`flex items-center gap-2 border px-[10px] py-1 font-mono text-[10px] transition-colors ${activeGroup === group ? 'border-ink bg-ink text-[var(--bg)]' : 'border-border bg-[var(--bg)] text-muted hover:bg-bg2 hover:text-ink'}`}>
                    <span>{groupLabels[group]}</span>
                    <span className={activeGroup === group ? 'opacity-50' : 'opacity-60'}>{totalGroupCounts[group]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
