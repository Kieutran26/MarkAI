'use client';

interface TopicSelectorProps {
  selected: string;
  onChange: (topic: string) => void;
}

export default function TopicSelector({ selected, onChange }: TopicSelectorProps) {
  const topics = [
    'Góp ý nội dung',
    'Hỏi về dự án',
    'Hợp tác / Chia sẻ',
    'Câu hỏi kỹ thuật',
    'Khác',
    'Chỉ muốn nói xin chào 👋'
  ];

  return (
    <div className="topic-grid">
      {topics.map((topic) => (
        <button
          key={topic}
          type="button"
          className={`topic-btn ${selected === topic ? 'active' : ''}`}
          onClick={() => onChange(topic)}
        >
          {topic}
        </button>
      ))}
    </div>
  );
}
