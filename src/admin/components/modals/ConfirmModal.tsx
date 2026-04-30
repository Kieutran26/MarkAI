'use client'

import Modal from '../Modal'

interface ConfirmModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void | Promise<void>
  title: string
  message: string
  confirmLabel?: string
  cancelLabel?: string
  isDanger?: boolean
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Xác nhận',
  cancelLabel = 'Hủy',
  isDanger = true,
}: ConfirmModalProps) {
  const handleConfirm = async () => {
    await onConfirm()
    onClose()
  }

  return (
    <Modal
      id="confirm-modal"
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      width={400}
      footer={
        <>
          <button className="btn" onClick={onClose}>
            {cancelLabel}
          </button>
          <button 
            className={`btn ${isDanger ? 'btn-danger' : 'btn-primary'}`} 
            onClick={handleConfirm}
          >
            {confirmLabel}
          </button>
        </>
      }
    >
      <div className="confirm-modal-body">
        <p>
          {message}
        </p>
      </div>
    </Modal>
  )
}
