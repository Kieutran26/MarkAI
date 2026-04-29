'use client'

import Toggle from '@/app/components/Toggle'
import { tickerData } from '@/app/data/content'

interface TickerPageProps {
  onOpenModal: (modalId: string) => void
}

export default function TickerPage({ onOpenModal }: TickerPageProps) {
  return (
    <div className="page" id="page-ticker">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Ticker</strong> · Dark scrolling bar
          </span>
          <div className="section-header-spacer" />
          <button className="section-header-action" onClick={() => onOpenModal('edit-ticker-item')}>
            + Thêm item
          </button>
        </div>
      </div>

      {/* Preview */}
      <div style={{ background: 'var(--ink)', padding: '1rem 2rem', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: '#555', marginBottom: '.5rem', letterSpacing: '.06em', textTransform: 'uppercase' }}>
          Preview ticker hiện tại:
        </div>
        <div className="mini-ticker" style={{ background: 'transparent', height: 'auto', overflow: 'visible' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#888', lineHeight: '2' }}>
            ✳ Vibecode ra mắt tháng 4/2026 · ✳ 7 bài học lộ trình zero · ✳ Miễn phí 100% · ✳ Analytics sắp ra · ✳ Generate Image sắp ra · ✳ Motion Video sắp ra · ✳ Blog · Tips · Prompt Library · ✳ Dành riêng dân Marketing
          </div>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nội dung</th>
              <th>Hiển thị</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {tickerData.map((item, i) => (
              <tr key={i}>
                <td className="td-mono">{item.num}</td>
                <td className="td-sans">{item.text}</td>
                <td><Toggle defaultOn={item.visible} /></td>
                <td>
                  <div className="row-actions">
                    <button className="row-btn primary" onClick={() => onOpenModal('edit-ticker-item')}>Sửa</button>
                    <button className="row-btn danger">Xóa</button>
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
