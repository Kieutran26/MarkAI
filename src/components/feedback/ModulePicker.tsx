'use client';

import { useState } from 'react';

const modules = [
  'Vibecode Web',
  'Analytics',
  'Generate Image',
  'Motion Video',
  'Prompt Library',
  'Blog / Tips'
];

interface ModulePickerProps {
  selected: string;
  onChange: (module: string) => void;
}

export default function ModulePicker({ selected, onChange }: ModulePickerProps) {
  return (
    <div className="module-grid">
      {modules.map((module) => (
        <button
          key={module}
          type="button"
          className={`module-btn ${selected === module ? 'active' : ''}`}
          onClick={() => onChange(module)}
        >
          {module}
        </button>
      ))}
    </div>
  );
}
