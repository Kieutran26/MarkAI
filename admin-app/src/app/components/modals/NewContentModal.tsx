'use client'

import Modal from '../Modal'

interface NewContentModalProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (type: string) => void
}

export default function NewContentModal({ isOpen, onClose, onSelect }: NewContentModalProps) {
  const options = [
    { type: 'new-lesson', icon: '▤', title: 'Bài học Vibecode', desc: 'Thêm bài học mới vào lộ trình' },
    { type: 'edit-blog', icon: '◷', title: 'Bài blog mới', desc: 'Viết bài đăng blog' },
    { type: 'edit-tip', icon: '✳', title: 'Tips & Mẹo', desc: 'Thêm tip ngắn thực dụng' },
    { type: 'edit-prompt', icon: '⌘', title: 'Prompt mới', desc: 'Thêm vào Prompt Library' },
  ]

  return (
    <Modal
      id="new-content"
      isOpen={isOpen}
      onClose={onClose}
      title={`TẠO NỘI DUNG MỚI · markAI Admin`}
      width={400}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {options.map((opt) => (
          <div
            key={opt.type}
            onClick={() => {
              onClose()
              onSelect(opt.type)
            }}
            style={{
              padding: '1rem',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              transition: 'background .15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '')}
          >
            <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', marginBottom: '.3rem' }}>
              {opt.icon} {opt.title}
            </div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: '12px', color: 'var(--muted)' }}>
              {opt.desc}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  )
}
