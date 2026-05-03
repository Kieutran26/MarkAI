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

const glossaryStats = [
  {
    label: 'Tổng thuật ngữ',
    value: totalGroupCounts.all,
    note: 'Toàn bộ từ đang có trong thư viện.',
  },
  {
    label: 'Nhóm chủ đề',
    value: 6,
    note: 'Chia theo Code, Design, Hạ tầng, Data, AI, Workflow.',
  },
  {
    label: 'Có ví dụ thực tế',
    value: '100%',
    note: 'Mỗi thuật ngữ đều có ví dụ để dễ hình dung.',
  },
] as const;

export default function GlossaryHero({ searchQuery, onSearchChange, filteredCount, activeGroup, onGroupChange }: GlossaryHeroProps) {
  return (
    <section className="border-b border-border">
      <div className="page-shell">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_500px] xl:grid-cols-[minmax(0,1fr)_560px]">
          <div className="border-b border-border px-[1.2rem] py-12 lg:border-b-0 lg:border-r lg:px-8 lg:py-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">✳ <span className="text-accent">Bài 02</span> · Vibecode Web · Từ ngữ chuyên ngành</p>
            <h1 className="mt-6 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-ink">Từ điển chuyên ngành<br />mà dân Marketer <em className="text-accent italic">phải biết.</em></h1>
            <p className="mt-6 max-w-[540px] font-sans text-[16px] leading-[1.6] font-light text-ink2">62+ thuật ngữ kỹ thuật giải thích bằng ngôn ngữ Marketing, kèm ví dụ thực tế. Không cần nhớ hết, chỉ cần biết đủ để không bị mù khi làm việc với AI và dev.</p>
            <label className="relative mt-8 block max-w-[480px]">
              <input value={searchQuery} onChange={(event) => onSearchChange(event.target.value)} placeholder="Tìm từ ngữ... vd: API, deploy, frontend" className="w-full border border-border bg-[var(--bg)] px-[14px] py-[11px] pr-11 font-mono text-[13px] text-ink outline-none transition-colors placeholder:text-muted focus:border-ink" />
              <span className="pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2 font-mono text-[13px] text-muted">⌕</span>
            </label>
            <p className="mt-2 font-mono text-[11px] text-ink2">Đang hiển thị <span className="text-accent">{filteredCount}</span> thuật ngữ phù hợp</p>
          </div>

          <div className="px-[1.2rem] py-12 lg:px-8 lg:py-12">
            {glossaryStats.map((stat, index) => (
              <div key={stat.label} className={`grid grid-cols-[1fr_auto] items-start gap-x-6 gap-y-2 border-border py-4 ${index === 0 ? 'border-y' : 'border-b'}`}>
                <div>
                  <p className="font-mono text-[11px] font-semibold tracking-[0.02em] text-ink">{stat.label}</p>
                  <p className="mt-1 max-w-[24ch] font-sans text-[13px] leading-[1.55] text-muted">{stat.note}</p>
                </div>
                <span className={`pt-1 text-right font-serif text-[2rem] leading-none lg:text-[2.25rem] ${stat.label === 'Có ví dụ thực tế' ? 'text-accent' : 'text-ink'}`}>{stat.value}</span>
              </div>
            ))}

            <div className="mt-8">
              <div className="mb-4 flex items-end justify-between gap-4 border-b border-border pb-3">
                <div>
                  <p className="font-mono text-[11px] font-semibold tracking-[0.02em] text-ink">Lọc theo chủ đề</p>
                  <p className="mt-1 max-w-[26ch] font-sans text-[13px] leading-[1.55] text-muted">Chọn 1 nhóm để thu gọn glossary theo ngữ cảnh bạn đang học.</p>
                </div>
                <span className="shrink-0 font-mono text-[11px] text-muted">{heroGroups.length - 1} nhóm</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {heroGroups.map((group) => (
                  <button
                    key={group}
                    type="button"
                    onClick={() => onGroupChange(group)}
                    className={`flex items-center gap-2 border px-3 py-[0.45rem] font-mono text-[12px] transition-colors ${activeGroup === group ? 'border-ink bg-ink text-[var(--bg)]' : 'border-border bg-[var(--bg)] text-ink2 hover:bg-bg2 hover:text-ink'}`}
                  >
                    <span>{groupLabels[group]}</span>
                    <span className={`border-l pl-2 ${activeGroup === group ? 'border-white/20 opacity-70' : 'border-border opacity-60'}`}>{totalGroupCounts[group]}</span>
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
