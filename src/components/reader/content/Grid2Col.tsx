interface Grid2ColProps {
  key?: string | number;
  items: {
    label: string;
    title: string;
    desc: string;
  }[];
}

export default function Grid2Col({ items }: Grid2ColProps) {
  return (
    <div className="grid-2col">
      {items.map((item, index) => (
        <div key={index} className="grid2-cell">
          <div className="grid2-label">{item.label}</div>
          <div className="grid2-title">{item.title}</div>
          <div className="grid2-desc">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}
