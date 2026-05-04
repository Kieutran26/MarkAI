import { Fragment, useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import '../components/glossary/glossary.css';
import ApiPracticePanel from '../components/glossary/ApiPracticePanel';
import AuthPracticePanel from '../components/glossary/AuthPracticePanel';
import SpacingPracticePanel from '../components/glossary/SpacingPracticePanel';
import LetterSpacingPracticePanel from '../components/glossary/LetterSpacingPracticePanel';
import { getTermById, getTermDeepDiveNotes, GlossaryTerm } from '../lib/glossary';
import apiDemoHtml from '../../gif-api-demo.html?raw';
import authDemoHtml from '../../gif-auth-demo.html?raw';
import spacingDemoHtml from '../../gif-spacing-demo.html?raw';
import letterSpacingDemoHtml from '../../gif-letter-spacing-demo.html?raw';
import lineSpacingDemoHtml from '../../gif-line-spacing-demo.html?raw';
import lineSpacingPracticeHtml from '../../gif-line-spacing-practice.html?raw';
import marginDemoHtml from '../../gif-margin-demo.html?raw';
import marginPracticeHtml from '../../gif-margin-practice.html?raw';
import paddingDemoHtml from '../../gif-padding-demo.html?raw';
import paddingPracticeHtml from '../../gif-padding-practice.html?raw';
import borderDemoHtml from '../../gif-border-demo.html?raw';
import borderPracticeHtml from '../../gif-border-practice.html?raw';
import radiusDemoHtml from '../../gif-radius-demo.html?raw';
import radiusPracticeHtml from '../../gif-radius-practice.html?raw';
import cornerDemoHtml from '../../gif-corner-demo.html?raw';
import cornerPracticeHtml from '../../gif-corner-practice.html?raw';
import cardDemoHtml from '../../gif-card-demo.html?raw';
import cardPracticeHtml from '../../gif-card-practice.html?raw';
import frontendDemoHtml from '../../gif-frontend-demo.html?raw';
import frontendPracticeHtml from '../../gif-frontend-practice.html?raw';
import backendDemoHtml from '../../gif-backend-demo.html?raw';
import backendPracticeHtml from '../../gif-backend-practice.html?raw';
import breadcrumbDemoHtml from '../../gif-breadcrumb-demo.html?raw';
import breadcrumbPracticeHtml from '../../gif-breadcrumb-practice.html?raw';
import databaseDemoHtml from '../../gif-database-demo.html?raw';
import databasePracticeHtml from '../../gif-database-practice.html?raw';
import componentDemoHtml from '../../gif-component-demo.html?raw';
import componentPracticeHtml from '../../gif-component-practice.html?raw';
import deployDemoHtml from '../../gif-deploy-demo.html?raw';
import deployPracticeHtml from '../../gif-deploy-practice.html?raw';
import navbarDemoHtml from '../../gif-navbar-demo.html?raw';
import navbarPracticeHtml from '../../gif-navbar-practice.html?raw';
import strokeDemoHtml from '../../gif-stroke-demo.html?raw';
import strokePracticeHtml from '../../gif-stroke-practice.html?raw';
import responsiveDemoHtml from '../../gif-responsive-demo.html?raw';
import responsivePracticeHtml from '../../gif-responsive-practice.html?raw';
import sliderDemoHtml from '../../gif-slider-demo.html?raw';
import sliderPracticeHtml from '../../gif-slider-practice.html?raw';
import dropdownDemoHtml from '../../gif-dropdown-demo.html?raw';
import dropdownPracticeHtml from '../../gif-dropdown-practice.html?raw';
import elementDemoHtml from '../../gif-element-demo.html?raw';
import elementPracticeHtml from '../../gif-element-practice.html?raw';
import footerDemoHtml from '../../gif-footer-demo.html?raw';
import footerPracticeHtml from '../../gif-footer-practice.html?raw';
import toggleDemoHtml from '../../gif-toggle-demo.html?raw';
import togglePracticeHtml from '../../gif-toggle-practice.html?raw';
import sidebarDemoHtml from '../../gif-sidebar-demo.html?raw';
import sidebarPracticeHtml from '../../gif-sidebar-practice.html?raw';
import accordionDemoHtml from '../../gif-accordion-demo.html?raw';
import accordionPracticeHtml from '../../gif-accordion-practice.html?raw';
import headerDemoHtml from '../../gif-header-demo.html?raw';
import headerPracticeHtml from '../../gif-header-practice.html?raw';
import breakpointDemoHtml from '../../gif-breakpoint-demo.html?raw';
import breakpointPracticeHtml from '../../gif-breakpoint-practice.html?raw';
import gridDemoHtml from '../../gif-grid-demo.html?raw';
import gridPracticeHtml from '../../gif-grid-practice.html?raw';
import gutterDemoHtml from '../../gif-gutter-demo.html?raw';
import gutterPracticeHtml from '../../gif-gutter-practice.html?raw';
import carouselDemoHtml from '../../gif-carousel-demo.html?raw';
import carouselPracticeHtml from '../../gif-carousel-practice.html?raw';
import stickyDemoHtml from '../../gif-sticky-demo.html?raw';
import stickyPracticeHtml from '../../gif-sticky-practice.html?raw';
import paginationDemoHtml from '../../gif-pagination-demo.html?raw';
import paginationPracticeHtml from '../../gif-pagination-practice.html?raw';


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


  const getInteractiveHtml = (id: string) => {
    if (id === 'api') return apiDemoHtml;
    if (id === 'auth') return authDemoHtml;
    if (id === 'spacing') return spacingDemoHtml;
    if (id === 'letter-spacing') return letterSpacingDemoHtml;
    if (id === 'line-spacing') return lineSpacingDemoHtml;
    if (id === 'margin') return marginDemoHtml;
    if (id === 'padding') return paddingDemoHtml;
    if (id === 'border') return borderDemoHtml;
    if (id === 'radius') return radiusDemoHtml;
    if (id === 'corner') return cornerDemoHtml;
    if (id === 'card') return cardDemoHtml;
    if (id === 'frontend') return frontendDemoHtml;
    if (id === 'backend') return backendDemoHtml;
    if (id === 'breadcrumb') return breadcrumbDemoHtml;
    if (id === 'database') return databaseDemoHtml;
    if (id === 'component') return componentDemoHtml;
    if (id === 'deploy') return deployDemoHtml;
    if (id === 'navbar') return navbarDemoHtml;
    if (id === 'stroke') return strokeDemoHtml;
    if (id === 'responsive') return responsiveDemoHtml;
    if (id === 'slider') return sliderDemoHtml;
    if (id === 'dropdown') return dropdownDemoHtml;
    if (id === 'element') return elementDemoHtml;
    if (id === 'footer') return footerDemoHtml;
    if (id === 'toggle') return toggleDemoHtml;
    if (id === 'sidebar') return sidebarDemoHtml;
    if (id === 'accordion') return accordionDemoHtml;
    if (id === 'header') return headerDemoHtml;
    if (id === 'breakpoint') return breakpointDemoHtml;
    if (id === 'grid') return gridDemoHtml;
    if (id === 'gutter') return gutterDemoHtml;
    if (id === 'carousel') return carouselDemoHtml;
    if (id === 'sticky') return stickyDemoHtml;
    if (id === 'pagination') return paginationDemoHtml;
    return null;
  };

  const getPracticeHtml = (id: string) => {
    if (id === 'margin') return marginPracticeHtml;
    if (id === 'padding') return paddingPracticeHtml;
    if (id === 'line-spacing') return lineSpacingPracticeHtml;
    if (id === 'border') return borderPracticeHtml;
    if (id === 'radius') return radiusPracticeHtml;
    if (id === 'corner') return cornerPracticeHtml;
    if (id === 'card') return cardPracticeHtml;
    if (id === 'frontend') return frontendPracticeHtml;
    if (id === 'backend') return backendPracticeHtml;
    if (id === 'breadcrumb') return breadcrumbPracticeHtml;
    if (id === 'database') return databasePracticeHtml;
    if (id === 'component') return componentPracticeHtml;
    if (id === 'deploy') return deployPracticeHtml;
    if (id === 'navbar') return navbarPracticeHtml;
    if (id === 'stroke') return strokePracticeHtml;
    if (id === 'responsive') return responsivePracticeHtml;
    if (id === 'slider') return sliderPracticeHtml;
    if (id === 'dropdown') return dropdownPracticeHtml;
    if (id === 'element') return elementPracticeHtml;
    if (id === 'footer') return footerPracticeHtml;
    if (id === 'toggle') return togglePracticeHtml;
    if (id === 'sidebar') return sidebarPracticeHtml;
    if (id === 'accordion') return accordionPracticeHtml;
    if (id === 'header') return headerPracticeHtml;
    if (id === 'breakpoint') return breakpointPracticeHtml;
    if (id === 'grid') return gridPracticeHtml;
    if (id === 'gutter') return gutterPracticeHtml;
    if (id === 'carousel') return carouselPracticeHtml;
    if (id === 'sticky') return stickyPracticeHtml;
    if (id === 'pagination') return paginationPracticeHtml;
    return null;
  };

  const interactiveDemoHtml = getInteractiveHtml(term.id);
  const interactivePracticeHtml = getPracticeHtml(term.id);


  const extendedTerms = (term.id === 'spacing' || term.id === 'letter-spacing')
    ? [
        term.id === 'spacing' ? getTermById('letter-spacing') : null,
        getTermById('line-spacing')
      ].filter((t): t is GlossaryTerm => !!t && t.id !== term.id)
    : [];

  return (
    <div className="glossary-page bg-[var(--bg)] text-ink">
      <TermDisplaySection 
        term={term} 
        interactiveDemoHtml={interactiveDemoHtml}
        interactivePracticeHtml={interactivePracticeHtml}
        showBackLink={true}
      />

      {extendedTerms.map((extTerm) => (
        <Fragment key={extTerm.id}>
          <TermDisplaySection 
            term={extTerm} 
            interactiveDemoHtml={getInteractiveHtml(extTerm.id)}
            interactivePracticeHtml={getPracticeHtml(extTerm.id)}
          />
        </Fragment>
      ))}
    </div>
  );
}

interface TermDisplaySectionProps {
  term: any;
  interactiveDemoHtml?: string | null;
  interactivePracticeHtml?: string | null;
  showBackLink?: boolean;
}

interface InteractiveFrameProps {
  html: string;
  title: string;
  caption?: string;
}

function InteractiveFrame({ html, title, caption }: InteractiveFrameProps) {
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  const syncHeight = () => {
    const frame = frameRef.current;
    const doc = frame?.contentDocument;
    if (!frame || !doc) return;

    const root = doc.getElementById('app-root');
    const nextHeight = Math.ceil(
      root 
        ? root.getBoundingClientRect().height 
        : Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)
    );
    
    const currentHeight = parseInt(frame.style.height || '0', 10);
    // Increase threshold to 15px to prevent micro-adjustments causing jitter
    if (Math.abs(currentHeight - nextHeight) > 15) {
      frame.style.height = `${nextHeight}px`;
    }
  };

  const bindAutoHeight = () => {
    observerRef.current?.disconnect();
    const frame = frameRef.current;
    const doc = frame?.contentDocument;
    if (!frame || !doc) return;

    syncHeight();

    const resizeObserver = new ResizeObserver(() => {
      syncHeight();
    });

    resizeObserver.observe(doc.documentElement);
    resizeObserver.observe(doc.body);
    observerRef.current = resizeObserver;

    if (doc.fonts?.ready) {
      void doc.fonts.ready.then(() => syncHeight());
    }

    frame.contentWindow?.addEventListener('resize', syncHeight);
  };

  useEffect(() => {
    if (!html) return;
    const timer = window.setTimeout(bindAutoHeight, 100);
    window.addEventListener('resize', syncHeight);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', syncHeight);
      frameRef.current?.contentWindow?.removeEventListener('resize', syncHeight);
      observerRef.current?.disconnect();
    };
  }, [html]);

  return (
    <div className="glossary-demo-frame-wrap">
      <iframe
        ref={frameRef}
        title={title}
        srcDoc={html}
        className="glossary-demo-frame"
        sandbox="allow-scripts allow-same-origin"
        scrolling="no"
        onLoad={bindAutoHeight}
      />
      {caption ? (
        <p className="border-t border-border px-4 py-3 font-sans text-[12px] leading-[1.65] text-ink2">
          {caption}
        </p>
      ) : null}
    </div>
  );
}

function TermDisplaySection({ 
  term, 
  interactiveDemoHtml, 
  interactivePracticeHtml,
  showBackLink = false 
}: TermDisplaySectionProps) {
  const deepDiveNotes = getTermDeepDiveNotes(term);
  const practiceCaption = undefined;
  return (
    <section className="border-b border-border">
      <div className="page-shell grid gap-0 lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] items-start">
        <div className="border-b border-border px-[1.2rem] py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-14 lg:sticky lg:top-[52px] lg:h-fit">
          {showBackLink && (
            <Link
              to="/tu-dien-thuat-ngu"
              className="inline-flex items-center border border-[var(--ink)] bg-[var(--ink)] px-[10px] py-[7px] font-mono text-[10px] uppercase tracking-[0.04em] text-[var(--bg)] no-underline transition-colors hover:border-accent hover:bg-accent hover:text-[var(--ink)] active:border-accent active:bg-accent active:text-[var(--ink)]"
            >
              ← Quay lại từ điển
            </Link>
          )}
          <h1 className={`${showBackLink ? 'mt-5' : 'mt-0'} font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95]`}>{term.name}</h1>
          <p className="mt-3 font-mono text-[11px] tracking-[0.04em] text-muted">{term.nameEn}</p>
          <p className="mt-8 max-w-[46rem] font-sans text-[17px] leading-[1.8] text-ink2">{term.definition}</p>

          {deepDiveNotes.length ? (
            <div className="mt-8 max-w-[52rem] border-l-2 border-l-accent bg-bg2 px-4 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted">Hiểu nhanh</p>
              <div className="mt-3 space-y-3">
                {deepDiveNotes.map((note) => (
                  <p key={note} className="font-sans text-[14px] leading-[1.75] text-ink2">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          ) : null}

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
          <div className="mt-8 border border-[#2a2a33] bg-[#0f0f12]">
            <div className="flex items-center justify-between border-b border-[#2a2a33] bg-[#e88c2e] px-4 py-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.05em] text-[#0f0f12]">Demo / GIF</span>
              <span className="font-mono text-[10px] font-bold text-[#0f0f12]">{term.name}</span>
            </div>
            {term.demo?.kind === 'interactive' && interactiveDemoHtml ? (
              <InteractiveFrame
                html={interactiveDemoHtml}
                title={term.demo.alt ?? `${term.name} demo`}
                caption={term.demo.caption}
              />
            ) : term.demo?.src ? (
              <img src={term.demo.src} alt={term.demo.alt ?? `${term.name} demo`} className="block aspect-[4/3] w-full object-cover" />
            ) : (
              <div className="glossary-demo-placeholder p-4">
                <div className="aspect-[4/3] border border-border bg-[var(--bg2)]" />
                <p className="mt-4 font-sans text-[12px] leading-[1.65] text-ink2">
                  {term.id === 'letter-spacing' 
                    ? "Phần mô phỏng Letter Spacing đang được hoàn thiện. GIF sẽ được cập nhật sớm."
                    : "Trang riêng này đang chừa sẵn chỗ cho GIF mô phỏng chi tiết của term phức tạp."}
                </p>
              </div>
            )}
          </div>
          {interactivePracticeHtml ? (
            <div className="mt-6 border border-[#2a2a33] bg-[#0f0f12]">
              <div className="flex items-center justify-between border-b border-[#2a2a33] bg-[#e88c2e] px-4 py-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.05em] text-[#0f0f12]">Thực hành / GIF</span>
                <span className="font-mono text-[10px] font-bold text-[#0f0f12]">{term.name}</span>
              </div>
              <InteractiveFrame
                html={interactivePracticeHtml}
                title={`${term.name} practice`}
                caption={practiceCaption}
              />
            </div>
          ) : null}
          {term.id === 'api' ? <ApiPracticePanel /> : null}
          {term.id === 'auth' ? <AuthPracticePanel /> : null}
          {term.id === 'spacing' ? <SpacingPracticePanel /> : null}
          {term.id === 'letter-spacing' ? <LetterSpacingPracticePanel /> : null}
        </div>
      </div>
    </section>
  );
}
