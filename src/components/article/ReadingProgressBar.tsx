import { useEffect, useState } from 'react';

type ReadingProgressBarProps = {
  targetSelector: string;
};

function clampProgress(value: number) {
  return Math.min(100, Math.max(0, value));
}

export default function ReadingProgressBar({ targetSelector }: ReadingProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const target = document.querySelector<HTMLElement>(targetSelector);

      if (!target) {
        setProgress(0);
        return;
      }

      const rect = target.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const maxScrollable = Math.max(target.offsetHeight - window.innerHeight, 1);
      const scrolled = window.scrollY - start;
      const nextProgress = clampProgress((scrolled / maxScrollable) * 100);

      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [targetSelector]);

  return (
    <div className="reading-progress" aria-hidden="true">
      <div className="reading-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
