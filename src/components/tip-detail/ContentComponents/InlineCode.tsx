import type { ReactNode } from 'react';

interface InlineCodeProps {
  children: ReactNode;
}

export default function InlineCode({ children }: InlineCodeProps) {
  return (
    <code
      style={{
        fontFamily: 'var(--mono)',
        fontSize: '0.88em',
        background: 'var(--bg3)',
        padding: '1px 6px',
        color: 'var(--ink)',
        border: '1px solid var(--border)',
      }}
    >
      {children}
    </code>
  );
}
