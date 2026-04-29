'use client'

import Modal from '../Modal'
import Toggle from '../Toggle'

interface EditStepModalProps {
  isOpen: boolean
  onClose: () => void
  stepData?: {
    num: string
    badge: string
    duration: string
    title: string
    description: string
    tags: string
    visible: boolean
  }
}

export default function EditStepModal({ isOpen, onClose, stepData }: EditStepModalProps) {
  const defaultData = {
    num: '01',
    badge: 'BẮT ĐẦU ĐÂY',
    duration: '~20 phút',
    title: 'Vibecode là gì? Khó không? Giúp gì cho Marketer?',
    description: 'Hiểu vibecode là gì, tại sao dân marketing cần biết, và bắt đầu từ đâu.',
    tags: 'tư duy · use case · marketer',
    visible: true,
  }

  const data = stepData || defaultData

  return (
    <Modal
      id="edit-step"
      isOpen={isOpen}
      onClose={onClose}
      title={`SỬA BÀI HỌC · markAI Admin`}
      footer={
        <>
          <button className="btn" onClick={onClose}>Huỷ</button>
          <button className="btn btn-primary" onClick={onClose}>Lưu thay đổi</button>
        </>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Số bài</div>
          <input type="text" defaultValue={data.num} />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Badge (ví dụ: BẮT ĐẦU ĐÂY)</div>
          <input type="text" defaultValue={data.badge} />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Thời gian (~X phút)</div>
          <input type="text" defaultValue={data.duration} />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Tiêu đề bài học</div>
          <input type="text" defaultValue={data.title} />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Mô tả ngắn</div>
          <textarea defaultValue={data.description} />
        </div>
        <div>
          <div className="form-label" style={{ marginBottom: '.4rem' }}>Tags (cách nhau dấu ·)</div>
          <input type="text" defaultValue={data.tags} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
          <div className="form-label">Hiển thị</div>
          <Toggle defaultOn={data.visible} />
        </div>
      </div>
    </Modal>
  )
}
