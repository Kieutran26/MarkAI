'use client'

import { useState } from 'react'
import { navItems, navGroups } from '@/app/data/navigation'

interface SidebarProps {
  activePage: string
  onNavigate: (pageId: string) => void
}

export default function Sidebar({ activePage, onNavigate }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-text">mark<em>AI</em></span>
        <span className="sidebar-badge">Admin</span>
      </div>
      
      <nav className="sidebar-nav">
        {navGroups.map((group) => (
          <div key={group.key}>
            <div className="sidebar-section-label">{group.label}</div>
            {navItems
              .filter((item) => item.group === group.key)
              .map((item) => (
                <div
                  key={item.id}
                  className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => onNavigate(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                  {item.count !== undefined && (
                    <span className="nav-count">{item.count}</span>
                  )}
                </div>
              ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-user">
          <div className="user-avatar">A</div>
          <div className="user-info">
            <span className="user-name">Admin</span>
            <span className="user-role">markAI · Super Admin</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
