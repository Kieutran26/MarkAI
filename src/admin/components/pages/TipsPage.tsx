'use client'

import { useState } from 'react'
import { useAdminUi } from '@/app/components/AdminUiProvider'
import Badge from '@/app/components/Badge'
import { Tip, tipsData } from '@/app/data/content'

export default function TipsPage() {
  const { openAdminModal } = useAdminUi()
  const [tips] = useState<Tip[]>(tipsData)

  return (
    <div className="page" id="page-tips">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Tips & Meo</strong> · 12 tips
          </span>
          <div className="section-header-spacer" />
          <button className="section-header-action" onClick={() => openAdminModal('edit-tip')}>
            + Them tip
          </button>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Noi dung tip</th>
              <th>Category</th>
              <th>Status</th>
              <th>Thao tac</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr key={tip.num}>
                <td className="td-mono">TIP · {tip.num}</td>
                <td className="td-serif" style={{ fontSize: '.88rem' }}>{tip.text}</td>
                <td>
                  <Badge variant="outline" style={{ textTransform: 'uppercase', fontSize: '9px' }}>
                    {tip.cat}
                  </Badge>
                </td>
                <td>{tip.on ? <Badge variant="green">Active</Badge> : <Badge variant="outline">Hidden</Badge>}</td>
                <td>
                  <div className="row-actions">
                    <button className="row-btn primary" onClick={() => openAdminModal('edit-tip')}>Sua</button>
                    <button className="row-btn danger">Xoa</button>
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
