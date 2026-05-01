interface WhatYoullLearnProps {
  items: { icon: string; title: string; desc: string }[];
  lessonId: number;
}

export default function WhatYoullLearn({ items, lessonId }: WhatYoullLearnProps) {
  return (
    <section className="bg-bg2 border-b border-border py-12 lg:py-16">
      <div className="page-shell">
        <h2 className="font-serif text-[2rem] mb-12">
          Sau bài này bạn sẽ <em className="text-accent italic">hiểu được</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 learn-grid">
          {items.map((item, index) => (
            <div
              key={index}
              className={`learn-card ${index === items.length - 1 ? 'learn-card-result' : ''}`}
            >
              <div className="learn-card-header">
                <span className="learn-card-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="learn-card-icon">{item.icon}</div>
              </div>
              <div className="learn-card-content">
                <div className="learn-card-title">{item.title}</div>
                <div className="learn-card-desc">{item.desc}</div>
              </div>
              <div className="learn-card-indicator" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
