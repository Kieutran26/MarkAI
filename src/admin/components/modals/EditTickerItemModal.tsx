'use client'

import Modal from '../Modal'
import Toggle from '../Toggle'

interface EditTickerItemModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EditTickerItemModal({ isOpen, onClose }: EditTickerItemModalProps) {
  return (
    <Modal
      id="edit-ticker-item"
      isOpen={isOpen}
      onClose={onClose}
      title={`SỬA TICKER ITEM · markAI Admin`}
      footer={
        <>
          <button className="btn btn-danger">Xóa item</button>
          <div style={{ flex: 1 }} />
          <button className="btn" onClick={onClose}>Huỷ</button>
          <button className="btn btn-primary" onClick={onClose}>Lưu</button>
        </>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Nội dung (bắt đầu bằng ✳)</div>
          <input type="text" defaultValue="✳ Vibecode ra mắt tháng 4/2026" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
          <div className="form-label">Hiển thị</div>
          <Toggle defaultOn={true} />
        </div>
      </div>
    </Modal>
  )
}
