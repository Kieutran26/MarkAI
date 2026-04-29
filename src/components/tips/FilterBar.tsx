import { useState } from 'react';
import { CATEGORY_COUNTS } from '../../lib/types';

interface FilterBarProps {
  onFilterChange?: (category: string) => void;
}

const categories = Object.entries(CATEGORY_COUNTS).map(([name, count]) => ({
  name,
  count,
}));

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const handleClick = (category: string) => {
    setActiveFilter(category);
    onFilterChange?.(category);
  };

  return (
    <div className="filter-bar">
      <div className="filter-bar-inner">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`filter-btn ${activeFilter === cat.name ? 'active' : ''}`}
            onClick={() => handleClick(cat.name)}
          >
            {cat.name}
            <span className="filter-count">{cat.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
