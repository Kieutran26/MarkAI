import { useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import '../components/glossary/glossary.css';
import SpacingPracticePanel from '../components/glossary/SpacingPracticePanel';
import { getTermById, getTermDeepDiveNotes } from '../lib/glossary';
import spacingDemoHtml from '../../gif-spacing-demo.html?raw';

export default function GlossaryTermDetailPage() {
  const { termId } = useParams<{ termId: string }>();
  const term = termId ? getTermById(termId) : undefined;
  const demoFrameRef = useRef<HTMLIFrameElement | null>(null);
  const demoResizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (!term) return;
    document.title = `${term.name} · Từ điển chuyên ngành · markAI.vn`;
  }, [term]);

  if (!term) {
    return <Navigate to="/tu-dien-thuat-ngu" replace />;
  }


  const interactiveDemoHtml = term.id === 'spacing' ? spacingDemoHtml : null;

  const syncDemoFrameHeight = () => {
    const frame = demoFrameRef.current;
    const doc = frame?.contentDocument;
    if (!frame || !doc) return;

    frame.style.height = '0px';
    const bodyRect = doc.body.getBoundingClientRect();
    const docRect = doc.documentElement.getBoundingClientRect();
    const nextHeight = Math.ceil(
      Math.max(
        doc.body.scrollHeight,
        doc.documentElement.scrollHeight,
        bodyRect.height,
        docRect.height,
      ),
    );
    frame.style.height = `${nextHeight}px`;
  };

  const bindDemoFrameAutoHeight = () => {
    demoResizeObserverRef.current?.disconnect();
    const frame = demoFrameRef.current;
    const doc = frame?.contentDocument;
    if (!frame || !doc) return;

    syncDemoFrameHeight();

    const resizeObserver = new ResizeObserver(() => {
      syncDemoFrameHeight();
    });

    resizeObserver.observe(doc.documentElement);
    resizeObserver.observe(doc.body);
    demoResizeObserverRef.current = resizeObserver;

    if (doc.fonts?.ready) {
      void doc.fonts.ready.then(() => syncDemoFrameHeight());
    }

    frame.contentWindow?.addEventListener('resize', syncDemoFrameHeight);
  };

  useEffect(() => {
    if (!interactiveDemoHtml) return;
    const timer = window.setTimeout(bindDemoFrameAutoHeight, 80);
    window.addEventListener('resize', syncDemoFrameHeight);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', syncDemoFrameHeight);
      demoFrameRef.current?.contentWindow?.removeEventListener('resize', syncDemoFrameHeight);
      demoResizeObserverRef.current?.disconnect();
    };
  }, [interactiveDemoHtml]);

  return (
    <div className="glossary-page bg-[var(--bg)] text-ink">
      <section className="border-b border-border">
        <div className="page-shell grid gap-0 lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] items-start">
          <div className="border-b border-border px-[1.2rem] py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-14 lg:sticky lg:top-[52px] lg:h-fit">
            <Link
              to="/tu-dien-thuat-ngu"
              className="inline-flex items-center border border-[var(--ink)] bg-[var(--ink)] px-[10px] py-[7px] font-mono text-[10px] uppercase tracking-[0.04em] text-[var(--bg)] no-underline transition-colors hover:border-accent hover:bg-accent hover:text-[var(--ink)] active:border-accent active:bg-accent active:text-[var(--ink)]"
            >
              ← Quay lại từ điển
            </Link>
            <h1 className="mt-5 font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95]">{term.name}</h1>
            <p className="mt-3 font-mono text-[11px] tracking-[0.04em] text-muted">{term.nameEn}</p>
            <p className="mt-8 max-w-[46rem] font-sans text-[17px] leading-[1.8] text-ink2">{term.definition}</p>

            <div className="mt-10 max-w-[52rem]">
              <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted">Ví dụ thực tế</p>
                <div className="mt-4">
                  {term.example.includes('Prompt:') ? (
                    (() => {
                      const [desc, prompt] = term.example.split('Prompt:');
                      return (
                        <>
                          <p className="font-sans text-[15px] leading-[1.8] text-ink2 mb-4">{desc}</p>
                          <div className="terminal-box">
                            <div className="terminal-header">
                              <div className="terminal-dot red" />
                              <div className="terminal-dot yellow" />
                              <div className="terminal-dot green" />
                            </div>
                            <div className="terminal-content">
                              <span className="prompt-sym">$</span>
                              <span className="opacity-50 text-[#c9c9c9] mr-1">Prompt:</span>
                              <span className="text-accent">{prompt}</span>
                              <span className="terminal-cursor" />
                            </div>
                          </div>
                        </>
                      );
                    })()
                  ) : (
                    <div className="terminal-box">
                      <div className="terminal-header">
                        <div className="terminal-dot red" />
                        <div className="terminal-dot yellow" />
                        <div className="terminal-dot green" />
                      </div>
                      <div className="terminal-content">
                        <span className="prompt-sym">$</span>
                        {term.example}
                        <span className="terminal-cursor" />
                      </div>
                    </div>
                  )}
                </div>
            </div>
          </div>

          <div className="px-[1.2rem] py-10 lg:px-8 lg:py-14">

            <div className="mt-8 border border-border bg-[var(--bg)]">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-muted">Demo / GIF</span>
                <span className="font-mono text-[10px] text-muted">{term.name}</span>
              </div>
              {term.demo?.kind === 'interactive' && interactiveDemoHtml ? (
                <div className="glossary-demo-frame-wrap">
                  <iframe
                    ref={demoFrameRef}
                    title={term.demo.alt ?? `${term.name} demo`}
                    srcDoc={interactiveDemoHtml}
                    className="glossary-demo-frame"
                    sandbox="allow-scripts allow-same-origin"
                    scrolling="no"
                    onLoad={bindDemoFrameAutoHeight}
                  />
                  {term.demo.caption ? (
                    <p className="border-t border-border px-4 py-3 font-sans text-[12px] leading-[1.65] text-ink2">
                      {term.demo.caption}
                    </p>
                  ) : null}
                </div>
              ) : term.demo?.src ? (
                <img src={term.demo.src} alt={term.demo.alt ?? `${term.name} demo`} className="block aspect-[4/3] w-full object-cover" />
              ) : (
                <div className="glossary-demo-placeholder p-4">
                  <div className="aspect-[4/3] border border-border bg-[var(--bg2)]" />
                  <p className="mt-4 font-sans text-[12px] leading-[1.65] text-ink2">Trang riêng này đang chừa sẵn chỗ cho GIF mô phỏng chi tiết của term phức tạp.</p>
                </div>
              )}
            </div>
            {term.id === 'spacing' ? <SpacingPracticePanel /> : null}
          </div>
        </div>
      </section>

    </div>
  );
}
