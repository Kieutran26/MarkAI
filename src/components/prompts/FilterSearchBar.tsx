'use client';

import { useState, type ChangeEvent } from 'react';
import { CATEGORY_COUNTS } from '../../lib/prompts-types';

interface FilterSearchBarProps {
  onSearchChange?: (query: string) => void;
  onFilterChange?: (category: string) => void;
}

const categories = Object.entries(CATEGORY_COUNTS).map(([name, count]) => ({
  name,
  count,
}));

export default function FilterSearchBar({ onSearchChange, onFilterChange }: FilterSearchBarProps) {
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    onFilterChange?.(category);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange?.(value);
  };

  return (
    <div className="filter-bar" id="prompts">
      <div className="filter-bar-inner">
        <div className="filter-search">
          <span className="filter-search-icon">⌕</span>
          <input
            type="text"
            placeholder="Tìm prompt..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="filter-cats">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`filter-btn ${activeFilter === cat.name ? 'active' : ''}`}
              onClick={() => handleFilterClick(cat.name)}
            >
              {cat.name} <span className="filter-count">{cat.count}</span>
            </button>
          ))}
        </div>
        <div className="filter-sort">
          <select>
            <option>Mới nhất</option>
            <option>Phổ biến nhất</option>
            <option>A → Z</option>
          </select>
        </div>
      </div>
    </div>
  );
}
