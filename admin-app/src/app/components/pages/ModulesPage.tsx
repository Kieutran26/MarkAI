'use client'

import Toggle from '@/app/components/Toggle'
import Badge from '@/app/components/Badge'
import { modulesData } from '@/app/data/content'

interface ModulesPageProps {
  onOpenModal: (modalId: string) => void
}

export default function ModulesPage({ onOpenModal }: ModulesPageProps) {
  return (
    <div className="page" id="page-modules">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Module Picker</strong> · Quản lý 8 modules
          </span>
          <div className="section-header-spacer" />
          <button className="section-header-action" onClick={() => onOpenModal('edit-module')}>
            + Module mới
          </button>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Module</th>
              <th>Tags/Tools</th>
              <th>Trạng thái</th>
              <th>Hiển thị</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {modulesData.map((mod, i) => (
              <tr key={i} style={mod.disabled ? { opacity: 0.6 } : undefined}>
                <td>
                  <span className="td-serif" style={mod.disabled ? { color: 'var(--muted)' } : undefined}>
                    {mod.prefix && mod.prefix} {mod.name}
                  </span>
                </td>
                <td className="td-muted">{mod.meta}</td>
                <td>
                  <Badge variant={mod.statusColor.replace('badge-', '') as 'green' | 'outline'}>
                    {mod.status}
                  </Badge>
                </td>
                <td><Toggle defaultOn={mod.enabled} /></td>
                <td>
                  <div className="row-actions">
                    <button className="row-btn primary" onClick={() => onOpenModal('edit-module')}>Sửa</button>
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
