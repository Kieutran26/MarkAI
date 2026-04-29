'use client'

import Modal from '../Modal'

interface NewLessonModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewLessonModal({ isOpen, onClose }: NewLessonModalProps) {
  return (
    <Modal
      id="new-lesson"
      isOpen={isOpen}
      onClose={onClose}
      title={`THÊM BÀI HỌC MỚI · markAI Admin`}
      footer={
        <>
          <button className="btn" onClick={onClose}>Huỷ</button>
          <button className="btn btn-primary" onClick={onClose}>Tạo bài học</button>
        </>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Số bài</div>
          <input type="text" placeholder="08" />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Badge</div>
          <input type="text" placeholder="MỚI" />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Thời gian</div>
          <input type="text" placeholder="~30 phút" />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Tiêu đề</div>
          <input type="text" placeholder="Tiêu đề bài học mới..." />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Mô tả</div>
          <textarea placeholder="Mô tả ngắn 1-2 câu..." />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Tags</div>
          <input type="text" placeholder="tag1 · tag2 · tag3" />
        </div>
      </div>
    </Modal>
  )
}
