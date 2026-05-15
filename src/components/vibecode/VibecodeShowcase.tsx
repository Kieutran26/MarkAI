import React, { useRef, useEffect } from 'react';
import gifVibecodeHtml from '../../../docs/visual-demos/gif-vibecode.html?raw';

export default function VibecodeShowcase() {
  const frameRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    // Optional: Sync height if needed, but for hero section we can use fixed aspect ratio
    // frame.style.height = '480px'; 
  }, []);

  return (
    <div className="relative w-full aspect-[640/470] max-w-[640px] mx-auto scale-110 md:scale-100 overflow-hidden">
      <iframe
        ref={frameRef}
        title="Vibecode Animation"
        srcDoc={gifVibecodeHtml}
        className="w-full h-full border-none"
        sandbox="allow-scripts allow-same-origin"
        scrolling="no"
      />
    </div>
  );
}

