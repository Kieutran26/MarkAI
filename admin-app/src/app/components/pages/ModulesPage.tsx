'use client'

import { useAdminUi } from '@/app/components/AdminUiProvider'
import Badge from '@/app/components/Badge'
import Toggle from '@/app/components/Toggle'
import { modulesData } from '@/app/data/content'

export default function ModulesPage() {
  const { openAdminModal } = useAdminUi()

  return (
    <div className="page" id="page-modules">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Module Picker</strong> · Quan ly 8 modules
          </span>
          <div className="section-header-spacer" />
          <button className="section-header-action" onClick={() => openAdminModal('edit-module')}>
            + Module moi
          </button>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Module</th>
              <th>Tags/Tools</th>
              <th>Trang thai</th>
              <th>Hien thi</th>
              <th>Thao tac</th>
            </tr>
          </thead>
          <tbody>
            {modulesData.map((mod, index) => (
              <tr key={index} style={mod.disabled ? { opacity: 0.6 } : undefined}>
                <td>
                  <span className="td-serif" style={mod.disabled ? { color: 'var(--muted)' } : undefined}>
                    {mod.prefix && mod.prefix} {mod.name}
                  </span>
                </td>
                <td className="td-muted">{mod.meta}</td>
                <td>
                  <Badge variant={mod.statusColor.replace('badge-', '') as 'green' | 'outline'}>{mod.status}</Badge>
                </td>
                <td><Toggle defaultOn={mod.enabled} /></td>
                <td>
                  <div className="row-actions">
                    <button className="row-btn primary" onClick={() => openAdminModal('edit-module')}>Sua</button>
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
