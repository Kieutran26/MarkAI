'use client';

interface PagePickerProps {
  selected: string;
  onChange: (page: string) => void;
}

export default function PagePicker({ selected, onChange }: PagePickerProps) {
  const pages = [
    { value: '/vibecode', label: 'Vibecode — trang học' },
    { value: '/blog', label: 'Blog' },
    { value: '/tips', label: 'Tips & Mẹo' },
    { value: '/prompts', label: 'Prompt Library' },
    { value: 'other', label: 'Trang khác / Không rõ' }
  ];

  return (
    <div className="page-group">
      {pages.map((page) => (
        <div
          key={page.value}
          className={`page-option ${selected === page.value ? 'active' : ''}`}
          onClick={() => onChange(page.value)}
        >
          <div className="page-radio"></div>
          <span className="page-name">{page.label}</span>
        </div>
      ))}
    </div>
  );
}
