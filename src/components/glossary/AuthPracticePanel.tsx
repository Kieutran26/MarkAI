import { useEffect, useRef } from 'react';
import authPracticeHtml from '../../../gif-auth-practice.html?raw';

export default function AuthPracticePanel() {
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  const syncHeight = () => {
    const frame = frameRef.current;
    const doc = frame?.contentDocument;
    if (!frame || !doc) return;
    const root = doc.getElementById('app-root');
    const nextHeight = Math.ceil(root ? root.getBoundingClientRect().height : Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight));
    const currentHeight = parseInt(frame.style.height || '0', 10);
    if (Math.abs(currentHeight - nextHeight) > 15) frame.style.height = `${nextHeight}px`;
  };

  const bindAutoHeight = () => {
    observerRef.current?.disconnect();
    const frame = frameRef.current;
    const doc = frame?.contentDocument;
    if (!frame || !doc) return;
    syncHeight();
    const resizeObserver = new ResizeObserver(syncHeight);
    resizeObserver.observe(doc.documentElement);
    resizeObserver.observe(doc.body);
    observerRef.current = resizeObserver;
    if (doc.fonts?.ready) void doc.fonts.ready.then(syncHeight);
    frame.contentWindow?.addEventListener('resize', syncHeight);
  };

  useEffect(() => {
    const timer = window.setTimeout(bindAutoHeight, 100);
    window.addEventListener('resize', syncHeight);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', syncHeight);
      frameRef.current?.contentWindow?.removeEventListener('resize', syncHeight);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="mt-8 border border-[#2a2a33] bg-[#0f0f12]">
      <div className="flex items-center justify-between border-b border-[#2a2a33] bg-[#e88c2e] px-4 py-2">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.05em] text-[#0f0f12]">Thực hành</span>
        <span className="font-mono text-[10px] font-bold text-[#0f0f12]">Auth</span>
      </div>
      <div className="glossary-demo-frame-wrap">
        <iframe
          ref={frameRef}
          title="Auth Practice"
          srcDoc={authPracticeHtml}
          className="glossary-demo-frame"
          sandbox="allow-scripts allow-same-origin"
          scrolling="no"
          onLoad={bindAutoHeight}
        />
      </div>
    </div>
  );
}
