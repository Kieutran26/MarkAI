'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems, navGroups, type AdminNavItem } from '@/app/data/navigation'
import { useAdminSession } from '../auth/AdminSessionProvider'

function isItemActive(pathname: string, item: AdminNavItem) {
  if (item.href && pathname === item.href) {
    return true
  }

  return item.children?.some((child) => pathname === child.href) ?? false
}

function SidebarNavItem({ item, pathname }: { item: AdminNavItem; pathname: string; key?: string }) {
  const active = isItemActive(pathname, item)
  const [open, setOpen] = useState(active)

  useEffect(() => {
    if (active) {
      setOpen(true)
    }
  }, [active])

  if (!item.children?.length || !item.href) {
    return (
      <Link href={item.href ?? '/'} className={`nav-item ${active ? 'active' : ''}`}>
        <span className="nav-icon">{item.icon}</span>
        {item.label}
        {item.count !== undefined ? <span className="nav-count">{item.count}</span> : null}
      </Link>
    )
  }

  return (
    <div className={`nav-item-group ${open ? 'open' : ''}`}>
      <div className={`nav-item nav-item-parent ${active ? 'active' : ''}`}>
        <Link href={item.href} className="nav-item-parent-link">
          <span className="nav-icon">{item.icon}</span>
          <span>{item.label}</span>
        </Link>
        <button
          type="button"
          className="nav-item-toggle"
          aria-label={`Mo nhom ${item.label}`}
          onClick={() => setOpen((current) => !current)}
        >
          <span className={`nav-chevron ${open ? 'open' : ''}`}>+</span>
        </button>
        {item.count !== undefined ? <span className="nav-count">{item.count}</span> : null}
      </div>

      <div className="nav-children">
        {item.children.map((child) => (
          <Link
            key={child.id}
            href={child.href}
            className={`nav-item-child ${pathname === child.href ? 'active' : ''}`}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Sidebar() {
  const pathname = usePathname()
  const { user } = useAdminSession()

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
                <SidebarNavItem key={item.id} item={item} pathname={pathname} />
              ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-user">
          <div className="user-avatar">{user?.displayName?.slice(0, 1).toUpperCase() ?? 'A'}</div>
          <div className="user-info">
            <span className="user-name">{user?.displayName ?? 'Admin'}</span>
            <span className="user-role">@{user?.username ?? 'admin'} · Super Admin</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
