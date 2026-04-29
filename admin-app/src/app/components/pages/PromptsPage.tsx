'use client'

import { useAdminUi } from '@/app/components/AdminUiProvider'
import Badge from '@/app/components/Badge'
import { promptsData } from '@/app/data/content'

export default function PromptsPage() {
  const { openAdminModal } = useAdminUi()

  return (
    <div className="page" id="page-prompts">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Prompt Library</strong> · 150 prompts · 12 cho duyet
          </span>
          <div className="section-header-spacer" />
          <button
            className="section-header-action"
            style={{ marginRight: '8px', borderColor: 'var(--accent)', color: 'var(--accent)' }}
          >
            ✳ Duyet draft (12)
          </button>
          <button className="section-header-action" onClick={() => openAdminModal('edit-prompt')}>
            + Them prompt
          </button>
        </div>
      </div>

      <div className="prompt-grid">
        {promptsData.map((prompt, index) => (
          <div key={index} className="prompt-card" onClick={() => openAdminModal('edit-prompt')}>
            <div className="prompt-card-category">{prompt.category}</div>
            <div className="prompt-card-title">{prompt.title}</div>
            <div className="prompt-card-preview">{prompt.preview}</div>
            <div className="prompt-card-footer">
              <Badge variant={prompt.statusColor.replace('badge-', '') as 'green' | 'yellow'}>{prompt.status}</Badge>
              <span className="td-muted">{prompt.usage}</span>
            </div>
            <span className="prompt-arrow">→</span>
          </div>
        ))}

        <div
          className="prompt-card"
          style={{ background: 'var(--bg2)', border: '1px dashed var(--border)' }}
          onClick={() => openAdminModal('edit-prompt')}
        >
          <div className="prompt-card-category" style={{ color: 'var(--accent)' }}>+ Them moi</div>
          <div className="prompt-card-title" style={{ color: 'var(--muted)' }}>Them prompt moi vao thu vien</div>
          <div className="prompt-card-preview">Click de tao prompt moi — dien category, tieu de, noi dung day du.</div>
          <div className="prompt-card-footer" />
          <span className="prompt-arrow" style={{ color: 'var(--accent)' }}>+</span>
        </div>
      </div>
    </div>
  )
}
