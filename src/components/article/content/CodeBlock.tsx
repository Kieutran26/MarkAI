'use client';

import { useState } from 'react';

type CodeBlockProps = {
  filename: string;
  code: string;
};

export default function CodeBlock({ filename, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    // Strip HTML tags for plain text copy
    const plainText = code.replace(/<[^>]*>/g, '');
    await navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span>{filename}</span>
        <button onClick={handleCopy} className="font-mono text-[10px] text-[#555] hover:text-[#888] cursor-pointer transition-colors">
          {copied ? '✓ Đã copy' : 'Copy'}
        </button>
      </div>
      <pre className="font-mono text-[12.5px] leading-[1.75] text-[#ccc] overflow-x-auto whitespace-pre-wrap p-5">
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
}
