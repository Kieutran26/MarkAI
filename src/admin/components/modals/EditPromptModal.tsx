'use client'

import Modal from '../Modal'
import Toggle from '../Toggle'

interface EditPromptModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EditPromptModal({ isOpen, onClose }: EditPromptModalProps) {
  return (
    <Modal
      id="edit-prompt"
      isOpen={isOpen}
      onClose={onClose}
      title={`SỬA PROMPT · markAI Admin`}
      footer={
        <>
          <button className="btn" onClick={onClose}>Huỷ</button>
          <button className="btn btn-primary" onClick={onClose}>Lưu thay đổi</button>
        </>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Category</div>
          <input type="text" defaultValue="Vibecode · Cursor" />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Tiêu đề prompt</div>
          <input type="text" defaultValue="Tạo component Card đúng design system" />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Nội dung prompt đầy đủ</div>
          <textarea defaultValue="Tạo card component với border 1px solid var(--border), hover bg2, font-serif title, font-sans description, không border-radius, không box-shadow..." style={{ minHeight: '120px', fontSize: '11px' }} />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Dùng với công cụ</div>
          <input type="text" defaultValue="Cursor · Claude Code" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
          <div className="form-label">Status: Published</div>
          <Toggle defaultOn={true} />
        </div>
      </div>
    </Modal>
  )
}
