export default function StatsBar() {
  const stats = [
    { num: '10', label: 'Bài học Vibecode\nđang live' },
    { num: '150+', label: 'Prompt trong\nthư viện' },
    { num: '0đ', label: 'Chi phí để học\nmãi mãi' },
    { num: '4', label: 'Module AI sắp\nra mắt' }
  ];

  return (
    <div className="stats-section">
      <div className="stats-inner">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-num">{stat.num}</div>
            <div className="stat-label whitespace-pre-line">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
