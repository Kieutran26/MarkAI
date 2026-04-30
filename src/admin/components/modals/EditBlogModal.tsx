'use client'

import Modal from '../Modal'
import Toggle from '../Toggle'

interface EditBlogModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EditBlogModal({ isOpen, onClose }: EditBlogModalProps) {
  return (
    <Modal
      id="edit-blog"
      isOpen={isOpen}
      onClose={onClose}
      title={`SỬA BÀI BLOG · markAI Admin`}
      footer={
        <>
          <button className="btn btn-danger" onClick={onClose}>Xóa bài</button>
          <div style={{ flex: 1 }} />
          <button className="btn" onClick={onClose}>Huỷ</button>
          <button className="btn btn-primary" onClick={onClose}>Lưu thay đổi</button>
        </>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Category</div>
          <select defaultValue="VIBECODE">
            <option>VIBECODE</option>
            <option>DEPLOY</option>
            <option>TOOL REVIEW</option>
            <option>ANALYTICS</option>
            <option>WORKFLOW</option>
            <option>CASE STUDY</option>
          </select>
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Tiêu đề</div>
          <input type="text" defaultValue="Vibecode từ A–Z cho người chưa biết code" />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Excerpt (2 dòng)</div>
          <textarea defaultValue="Hướng dẫn toàn diện từ zero — cách tư duy, công cụ, và thực hành đầu tiên." style={{ minHeight: '60px' }} />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Thời gian đọc (phút)</div>
          <input type="text" defaultValue="7" />
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <div className="form-label" style={{ marginBottom: '.4rem' }}>Status</div>
            <select defaultValue="Published">
              <option>Draft</option>
              <option>Published</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <div className="form-label" style={{ marginBottom: '.4rem' }}>Ngày publish</div>
            <input type="text" defaultValue="20·04·2026" />
          </div>
        </div>
      </div>
    </Modal>
  )
}
