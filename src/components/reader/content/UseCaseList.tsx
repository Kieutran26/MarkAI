interface UseCaseListProps {
  items: {
    icon: string;
    title: string;
    desc: string;
  }[];
}

export default function UseCaseList({ items }: UseCaseListProps) {
  return (
    <div className="use-case-list">
      {items.map((item, index) => (
        <div key={index} className="use-case-item">
          <span className="uc-icon">{item.icon}</span>
          <div className="uc-content">
            <div className="uc-title">{item.title}</div>
            <div className="uc-desc">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
