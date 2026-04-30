'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems, navGroups } from '@/app/data/navigation'

export default function Sidebar() {
  const pathname = usePathname()

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
                <Link
                  key={item.id}
                  href={item.href}
                  className={`nav-item ${pathname === item.href ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                  {item.count !== undefined && (
                    <span className="nav-count">{item.count}</span>
                  )}
                </Link>
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
