import { ReactNode } from 'react';

interface InsightBlockProps {
  children: ReactNode;
  className?: string;
}

export default function InsightBlock({ children, className = '' }: InsightBlockProps) {
  return (
    <div className={`insight ${className}`}>
      {children}
    </div>
  );
}
