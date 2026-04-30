'use client'

import Modal from '../Modal'
import Toggle from '../Toggle'

interface EditNavModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EditNavModal({ isOpen, onClose }: EditNavModalProps) {
  return (
    <Modal
      id="edit-nav"
      isOpen={isOpen}
      onClose={onClose}
      title={`SỬA NAVIGATION LINK · markAI Admin`}
      footer={
        <>
          <button className="btn" onClick={onClose}>Huỷ</button>
          <button className="btn btn-primary" onClick={onClose}>Lưu</button>
        </>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Label hiển thị</div>
          <input type="text" defaultValue="Vibecode" />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>URL / Anchor</div>
          <input type="text" defaultValue="#vibecode" />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Trạng thái</div>
          <select defaultValue="Active">
            <option>Active</option>
            <option>Disabled (sắp ra)</option>
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
