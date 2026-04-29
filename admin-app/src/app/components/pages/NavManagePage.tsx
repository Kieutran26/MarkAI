'use client'

import { useAdminUi } from '@/app/components/AdminUiProvider'
import Badge from '@/app/components/Badge'
import Toggle from '@/app/components/Toggle'
import { navData } from '@/app/data/content'

export default function NavManagePage() {
  const { openAdminModal } = useAdminUi()

  return (
    <div className="page" id="page-nav-manage">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Navigation</strong> · Quan ly menu
          </span>
          <div className="section-header-spacer" />
          <button className="section-header-action" onClick={() => openAdminModal('edit-nav')}>
            + Them link
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
              <th>Trang thai</th>
              <th>Hien thi</th>
              <th>Thao tac</th>
            </tr>
          </thead>
          <tbody>
            {navData.map((nav, index) => (
              <tr key={index} style={nav.disabled ? { opacity: 0.6 } : undefined}>
                <td className="td-mono">{nav.num}</td>
                <td className="td-mono" style={nav.disabled ? { color: 'var(--muted)' } : undefined}>{nav.label}</td>
                <td className="td-muted">{nav.url}</td>
                <td>
                  <Badge variant={nav.statusColor.replace('badge-', '') as 'green' | 'outline'}>{nav.status}</Badge>
                </td>
                <td><Toggle defaultOn={nav.enabled} /></td>
                <td>
                  <div className="row-actions">
                    <button className="row-btn primary" onClick={() => openAdminModal('edit-nav')}>Sua</button>
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
