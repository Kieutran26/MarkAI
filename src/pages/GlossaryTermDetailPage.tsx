import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import '../components/glossary/glossary.css';
import { getTermById, getTermDeepDiveNotes } from '../lib/glossary';

export default function GlossaryTermDetailPage() {
  const { termId } = useParams<{ termId: string }>();
  const term = termId ? getTermById(termId) : undefined;

  useEffect(() => {
    if (!term) return;
    document.title = `${term.name} · Từ điển chuyên ngành · markAI.vn`;
  }, [term]);

  if (!term) {
    return <Navigate to="/tu-dien-thuat-ngu" replace />;
  }

  const deepDiveNotes = getTermDeepDiveNotes(term);

  return (
    <div className="glossary-page bg-[var(--bg)] text-ink">
      <section className="border-b border-border">
        <div className="page-shell grid gap-0 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="border-b border-border px-[1.2rem] py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-14">
            <Link
              to="/tu-dien-thuat-ngu"
              className="inline-flex items-center border border-[var(--ink)] bg-[var(--ink)] px-[10px] py-[7px] font-mono text-[10px] uppercase tracking-[0.04em] text-[var(--bg)] no-underline transition-colors hover:border-accent hover:bg-accent hover:text-[var(--ink)] active:border-accent active:bg-accent active:text-[var(--ink)]"
            >
              ← Quay lại từ điển
            </Link>
            <h1 className="mt-5 font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95]">{term.name}</h1>
            <p className="mt-3 font-mono text-[11px] tracking-[0.04em] text-muted">{term.nameEn}</p>
            <p className="mt-8 max-w-[46rem] font-sans text-[17px] leading-[1.8] text-ink2">{term.definition}</p>
          </div>

          <div className="px-[1.2rem] py-10 lg:px-8 lg:py-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted">Ví dụ thực tế</p>
            <div className="mt-3 border-l-2 border-l-accent bg-bg2 px-4 py-4 font-mono text-[12px] leading-[1.75] text-ink2">
              {term.example}
            </div>
            <div className="mt-8 border border-border bg-[var(--bg)]">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-muted">Demo / GIF</span>
                <span className="font-mono text-[10px] text-muted">{term.name}</span>
              </div>
              {term.demo?.src ? (
                <img src={term.demo.src} alt={term.demo.alt ?? `${term.name} demo`} className="block aspect-[4/3] w-full object-cover" />
              ) : (
                <div className="glossary-demo-placeholder p-4">
                  <div className="aspect-[4/3] border border-border bg-[var(--bg2)]" />
                  <p className="mt-4 font-sans text-[12px] leading-[1.65] text-ink2">Trang riêng này đang chừa sẵn chỗ cho GIF mô phỏng chi tiết của term phức tạp.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="page-shell px-[1.2rem] py-10 md:px-8 md:py-12">
          <div className="max-w-[860px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted">Giải thích kỹ hơn</p>
            <div className="mt-4 grid gap-4">
              {deepDiveNotes.length ? (
                deepDiveNotes.map((note) => (
                  <div key={note} className="border border-border bg-[var(--bg)] px-5 py-4 font-sans text-[15px] leading-[1.8] text-ink2">
                    {note}
                  </div>
                ))
              ) : (
                <div className="border border-border bg-[var(--bg)] px-5 py-4 font-sans text-[15px] leading-[1.8] text-ink2">
                  Term này đã được tách ra trang riêng để bạn có thể gắn thêm GIF, case study, hoặc phần giải thích sâu hơn sau này mà không làm card ngoài trang chính bị dài.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
