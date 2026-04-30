'use client'

import { useAdminUi } from '@/app/components/AdminUiProvider'
import Toggle from '@/app/components/Toggle'
import { tickerData } from '@/app/data/content'

export default function TickerPage() {
  const { openAdminModal } = useAdminUi()

  return (
    <div className="page" id="page-ticker">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Ticker</strong> · Dark scrolling bar
          </span>
          <div className="section-header-spacer" />
          <button className="section-header-action" onClick={() => openAdminModal('edit-ticker-item')}>
            + Them item
          </button>
        </div>
      </div>

      <div style={{ background: 'var(--ink)', padding: '1rem 2rem', borderBottom: '1px solid var(--surface-2)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text-dim)', marginBottom: '.5rem', letterSpacing: '.06em', textTransform: 'uppercase' }}>
          Preview ticker hien tai:
        </div>
        <div className="mini-ticker" style={{ background: 'transparent', height: 'auto', overflow: 'visible' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text-soft)', lineHeight: '2' }}>
            ✳ Vibecode ra mat thang 4/2026 · ✳ 7 bai hoc lo trinh zero · ✳ Mien phi 100% · ✳ Analytics sap ra · ✳ Generate Image sap ra · ✳ Motion Video sap ra · ✳ Blog · Tips · Prompt Library · ✳ Danh rieng dan Marketing
          </div>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Noi dung</th>
              <th>Hien thi</th>
              <th>Thao tac</th>
            </tr>
          </thead>
          <tbody>
            {tickerData.map((item, index) => (
              <tr key={index}>
                <td className="td-mono">{item.num}</td>
                <td className="td-sans">{item.text}</td>
                <td><Toggle defaultOn={item.visible} /></td>
                <td>
                  <div className="row-actions">
                    <button className="row-btn primary" onClick={() => openAdminModal('edit-ticker-item')}>Sua</button>
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
