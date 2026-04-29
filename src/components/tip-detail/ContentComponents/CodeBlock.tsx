import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'code' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        background: 'var(--ink)',
        border: '1px solid #2a2a2a',
        marginBottom: '1.5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.6rem 1rem',
          borderBottom: '1px solid #2a2a2a',
          background: '#1a1a1a',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '10px',
            color: '#555',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          {language}
        </span>
        <button
          onClick={handleCopy}
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '10px',
            color: copied ? '#28CA41' : '#555',
            cursor: 'pointer',
            letterSpacing: '0.04em',
            transition: 'color 0.15s',
            background: 'transparent',
            border: 'none',
          }}
        >
          {copied ? 'Đã copy ✓' : 'Copy'}
        </button>
      </div>
      <pre
        style={{
          padding: '1.2rem 1rem',
          overflowX: 'auto',
          margin: 0,
        }}
      >
        <code
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '13px',
            lineHeight: 1.7,
            color: 'var(--bg)',
          }}
        >
          {code}
        </code>
      </pre>
    </div>
  );
}
