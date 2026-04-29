'use client'

import Toggle from '@/app/components/Toggle'
import Badge from '@/app/components/Badge'
import { navData } from '@/app/data/content'

interface NavManagePageProps {
  onOpenModal: (modalId: string) => void
}

export default function NavManagePage({ onOpenModal }: NavManagePageProps) {
  return (
    <div className="page" id="page-nav-manage">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Navigation</strong> · Quản lý menu
          </span>
          <div className="section-header-spacer" />
          <button className="section-header-action" onClick={() => onOpenModal('edit-nav')}>
            + Thêm link
          </button>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Label</th>
              <th>URL</th>
              <th>Trạng thái</th>
              <th>Hiển thị</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {navData.map((nav, i) => (
              <tr key={i} style={nav.disabled ? { opacity: 0.6 } : undefined}>
                <td className="td-mono">{nav.num}</td>
                <td className="td-mono" style={nav.disabled ? { color: 'var(--muted)' } : undefined}>
                  {nav.label}
                </td>
                <td className="td-muted">{nav.url}</td>
                <td>
                  <Badge variant={nav.statusColor.replace('badge-', '') as 'green' | 'outline'}>
                    {nav.status}
                  </Badge>
                </td>
                <td><Toggle defaultOn={nav.enabled} /></td>
                <td>
                  <div className="row-actions">
                    <button className="row-btn primary" onClick={() => onOpenModal('edit-nav')}>Sửa</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
