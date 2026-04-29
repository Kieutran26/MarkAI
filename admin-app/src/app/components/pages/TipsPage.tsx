'use client'

import { useEffect, useState } from 'react'
import Badge from '@/app/components/Badge'
import { tipsData, Tip } from '@/app/data/content'

interface TipsPageProps {
  onOpenModal: (modalId: string) => void
}

export default function TipsPage({ onOpenModal }: TipsPageProps) {
  const [tips, setTips] = useState<Tip[]>(tipsData)

  const renderTips = () => {
    return tips.map((tip) => (
      <tr key={tip.num}>
        <td className="td-mono">TIP · {tip.num}</td>
        <td className="td-serif" style={{ fontSize: '.88rem' }}>{tip.text}</td>
        <td>
          <Badge variant="outline" style={{ textTransform: 'uppercase', fontSize: '9px' }}>
            {tip.cat}
          </Badge>
        </td>
        <td>
          {tip.on ? (
            <Badge variant="green">Active</Badge>
          ) : (
            <Badge variant="outline">Hidden</Badge>
          )}
        </td>
        <td>
          <div className="row-actions">
            <button className="row-btn primary" onClick={() => onOpenModal('edit-tip')}>Sửa</button>
            <button className="row-btn danger">Xóa</button>
          </div>
        </td>
      </tr>
    ))
  }

  return (
    <div className="page" id="page-tips">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Tips & Mẹo</strong> · 12 tips
          </span>
          <div className="section-header-spacer" />
          <button className="section-header-action" onClick={() => onOpenModal('edit-tip')}>
            + Thêm tip
          </button>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nội dung tip</th>
              <th>Category</th>
              <th>Status</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody id="tips-tbody">
            {renderTips()}
          </tbody>
        </table>
      </div>
    </div>
  )
}
