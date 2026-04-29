'use client';

interface SeverityPickerProps {
  selected: string;
  onChange: (severity: string) => void;
}

export default function SeverityPicker({ selected, onChange }: SeverityPickerProps) {
  const severities = [
    { value: 'high', icon: '🔴', label: 'Nghiêm trọng', sub: 'Không dùng được' },
    { value: 'mid', icon: '🟡', label: 'Trung bình', sub: 'Dùng được nhưng sai' },
    { value: 'low', icon: '🟢', label: 'Nhỏ', sub: 'Typo / giao diện' }
  ];

  return (
    <div className="severity-grid">
      {severities.map((sev) => (
        <button
          key={sev.value}
          type="button"
          className={`sev-btn ${sev.value} ${selected === sev.value ? 'active' : ''}`}
          onClick={() => onChange(sev.value)}
        >
          <span className="sev-icon">{sev.icon}</span>
          {sev.label}
          <span style={{ fontSize: '9px', opacity: 0.7 }}>{sev.sub}</span>
        </button>
      ))}
    </div>
  );
}
