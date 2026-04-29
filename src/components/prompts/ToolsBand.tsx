'use client';

import { useState } from 'react';
import { TOOLS_DATA } from '../../lib/prompts-types';

interface ToolsBandProps {
  onToolChange?: (tool: string) => void;
}

export default function ToolsBand({ onToolChange }: ToolsBandProps) {
  const [activeTool, setActiveTool] = useState('Claude');

  const handleClick = (toolName: string) => {
    setActiveTool(toolName);
    onToolChange?.(toolName);
  };

  return (
    <section className="tools-band">
      <div className="tools-band-inner">
        <p className="tools-label"><span>✳</span> 04 · lọc theo ai tool</p>
        <div className="tools-grid">
          {TOOLS_DATA.map((tool) => (
            <div
              key={tool.name}
              className={`tool-item ${activeTool === tool.name ? 'active' : ''}`}
              onClick={() => handleClick(tool.name)}
            >
              <div className="tool-name">{tool.name}</div>
              <div className="tool-count">{tool.count} prompts</div>
              <div className="tool-desc">{tool.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
