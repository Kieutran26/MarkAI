import { Link } from 'react-router-dom';

const topics = [
  { label: 'Topic 01', title: 'Tips', count: 12 },
  { label: 'Topic 02', title: 'Tin tức AI mới nhất', count: 8 },
  { label: 'Topic 03', title: 'Hướng dẫn', count: 15 },
];

export default function TopicsGrid() {
  return (
    <div className="topics-section">
      <div className="py-8 px-[1.2rem] md:px-8">
        <p className="font-mono text-[11px] text-muted tracking-widest uppercase mb-4">
          <span className="text-accent mr-1">✳</span> Chủ đề · duyệt theo topic
        </p>
        <h2 className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] leading-[1.12] mb-8">
          Tìm bài viết theo <em className="text-accent">chủ đề.</em>
        </h2>
        <div className="topics-grid">
          {topics.map((topic) => (
            <Link key={topic.label} to="/blog" className="topic-card">
              <div className="font-mono text-[9px] text-muted tracking-widest uppercase mb-2">
                {topic.label}
              </div>
              <div className="font-serif text-[1.05rem] leading-[1.3] mb-2">
                {topic.title}
              </div>
              <div className="font-mono text-[10px] text-muted">
                {topic.count} bài viết
              </div>
              <span className="topic-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
