'use client';

interface RatingGroupProps {
  selected: string;
  onChange: (rating: string) => void;
}

export default function RatingGroup({ selected, onChange }: RatingGroupProps) {
  const ratings = [
    { value: '1', label: '1 — Tệ' },
    { value: '2', label: '2' },
    { value: '3', label: '3 — OK' },
    { value: '4', label: '4' },
    { value: '5', label: '5 — Tốt' }
  ];

  return (
    <div className="rating-group">
      {ratings.map((rating) => (
        <button
          key={rating.value}
          type="button"
          className={`rating-btn ${selected === rating.value ? 'active' : ''}`}
          onClick={() => onChange(rating.value)}
        >
          {rating.label}
        </button>
      ))}
    </div>
  );
}
