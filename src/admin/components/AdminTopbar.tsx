'use client'

import { getPageTitle } from '@/app/data/navigation'
import { usePathname } from 'next/navigation'
import { useAdminUi } from './AdminUiProvider'

export default function AdminTopbar() {
  const pathname = usePathname()
  const { openAdminModal } = useAdminUi()
  const title = getPageTitle(pathname)

  return (
    <div className="topbar">
      <span className="topbar-title">
        <strong>{title[0]}</strong> · {title[1]}
      </span>
      <div className="topbar-spacer" />
      <div className="topbar-actions">
        <button className="topbar-btn" onClick={() => openAdminModal('new-content')}>
          + Nội dung mới
        </button>
        <button className="topbar-btn" onClick={() => window.open('https://markai.vn', '_blank')}>
          ↗ Xem trang web
        </button>
        <button className="topbar-btn primary" onClick={() => openAdminModal('deploy-modal')}>
          ⬆ Deploy
        </button>
      </div>
    </div>
  )
}
