'use client'

import Modal from '../Modal'
import Toggle from '../Toggle'

interface EditModuleModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EditModuleModal({ isOpen, onClose }: EditModuleModalProps) {
  return (
    <Modal
      id="edit-module"
      isOpen={isOpen}
      onClose={onClose}
      title={`SỬA MODULE · markAI Admin`}
      footer={
        <>
          <button className="btn" onClick={onClose}>Huỷ</button>
          <button className="btn btn-primary" onClick={onClose}>Lưu</button>
        </>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Tên module</div>
          <input type="text" defaultValue="Vibecode ra Web" />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Meta / Tools</div>
          <input type="text" defaultValue="7 bài · đang học" />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Trạng thái</div>
          <select defaultValue="Available">
            <option>Available</option>
            <option>Sắp ra</option>
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
          <div className="form-label">Hiển thị trong grid</div>
          <Toggle defaultOn={true} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
          <div className="form-label">Clickable</div>
          <Toggle defaultOn={true} />
        </div>
      </div>
    </Modal>
  )
}
