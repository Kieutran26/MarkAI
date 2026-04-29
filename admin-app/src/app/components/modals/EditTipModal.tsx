'use client'

import Modal from '../Modal'
import Toggle from '../Toggle'

interface EditTipModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EditTipModal({ isOpen, onClose }: EditTipModalProps) {
  return (
    <Modal
      id="edit-tip"
      isOpen={isOpen}
      onClose={onClose}
      title={`THÊM / SỬA TIP · markAI Admin`}
      footer={
        <>
          <button className="btn" onClick={onClose}>Huỷ</button>
          <button className="btn btn-primary" onClick={onClose}>Lưu tip</button>
        </>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Số tip (#)</div>
          <input type="text" placeholder="13" />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Nội dung tip (1–2 câu)</div>
          <textarea placeholder="Mẹo ngắn, thực dụng..." />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Category</div>
          <select defaultValue="vibecode">
            <option value="vibecode">vibecode</option>
            <option value="deploy">deploy</option>
            <option value="workflow">workflow</option>
            <option value="tool">tool</option>
            <option value="prompt">prompt</option>
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
          <div className="form-label">Hiển thị</div>
          <Toggle defaultOn={true} />
        </div>
      </div>
    </Modal>
  )
}
