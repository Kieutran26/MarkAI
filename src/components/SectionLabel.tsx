interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

import { ReactNode } from 'react';

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p className={`section-label ${className}`}>
      {children}
    </p>
  );
}
