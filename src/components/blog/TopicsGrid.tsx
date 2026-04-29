import { Link } from 'react-router-dom';

const topics = [
  { label: 'Topic 01', title: 'Vibecode', count: 9 },
  { label: 'Topic 02', title: 'Workflow & Automation', count: 5 },
  { label: 'Topic 03', title: 'Tool Review', count: 4 },
  { label: 'Topic 04', title: 'Case Study thực tế', count: 3 },
  { label: 'Topic 05', title: 'Analytics với AI', count: 2 },
  { label: 'Topic 06', title: 'Deploy & Infra', count: 1 },
];

export default function TopicsGrid() {
  return (
    <div className="topics-section">
      <div className="max-w-[1200px] mx-auto p-8">
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
