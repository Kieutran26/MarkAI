'use client'

import Badge from '@/app/components/Badge'
import { promptsData } from '@/app/data/content'

interface PromptsPageProps {
  onOpenModal: (modalId: string) => void
}

export default function PromptsPage({ onOpenModal }: PromptsPageProps) {
  return (
    <div className="page" id="page-prompts">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Prompt Library</strong> · 150 prompts · 12 chờ duyệt
          </span>
          <div className="section-header-spacer" />
          <button 
            className="section-header-action" 
            style={{ marginRight: '8px', borderColor: 'var(--accent)', color: 'var(--accent)' }}
          >
            ✳ Duyệt draft (12)
          </button>
          <button className="section-header-action" onClick={() => onOpenModal('edit-prompt')}>
            + Thêm prompt
          </button>
        </div>
      </div>

      <div className="prompt-grid">
        {promptsData.map((prompt, i) => (
          <div 
            key={i} 
            className="prompt-card" 
            onClick={() => onOpenModal('edit-prompt')}
          >
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
        
        {/* Add new card */}
        <div 
          className="prompt-card" 
          style={{ background: 'var(--bg2)', border: '1px dashed var(--border)' }}
          onClick={() => onOpenModal('edit-prompt')}
        >
          <div className="prompt-card-category" style={{ color: 'var(--accent)' }}>+ Thêm mới</div>
          <div className="prompt-card-title" style={{ color: 'var(--muted)' }}>Thêm prompt mới vào thư viện</div>
          <div className="prompt-card-preview">Click để tạo prompt mới — điền category, tiêu đề, nội dung đầy đủ.</div>
          <div className="prompt-card-footer" />
          <span className="prompt-arrow" style={{ color: 'var(--accent)' }}>+</span>
        </div>
      </div>
    </div>
  )
}
