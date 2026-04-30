'use client'

import Modal from '../Modal'

interface DeployModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DeployModal({ isOpen, onClose }: DeployModalProps) {
  return (
    <Modal
      id="deploy-modal"
      isOpen={isOpen}
      onClose={onClose}
      title={`DEPLOY LÊN VERCEL · markAI Admin`}
      width={420}
      footer={
        <>
          <button className="btn" onClick={onClose}>Huỷ</button>
          <button className="btn btn-primary" onClick={onClose}>⬆ Deploy ngay</button>
        </>
      }
    >
      <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', marginBottom: '1rem' }}>
        Triển khai phiên bản mới nhất lên production
      </div>
      <div style={{
        background: 'var(--ink)',
        padding: '1rem',
        fontFamily: 'var(--mono)',
        fontSize: '11px',
        color: 'var(--text-soft)',
        lineHeight: '2',
        marginBottom: '1rem'
      }}>
        <div style={{ color: 'var(--text-dim)' }}>$ vercel deploy --prod</div>
        <div style={{ color: 'var(--success-bright)' }}>✓ Connected to markai-vn</div>
        <div style={{ color: 'var(--success-bright)' }}>✓ Ready to deploy</div>
        <div style={{ color: 'var(--accent)' }}>▶ Nhấn Deploy để bắt đầu...</div>
      </div>
      <div style={{ fontFamily: 'var(--sans)', fontSize: '12px', color: 'var(--muted)' }}>
        Build time ước tính: ~45 giây
      </div>
    </Modal>
  )
}
