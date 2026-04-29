'use client'

import MiniTicker from '@/app/components/MiniTicker'
import Sidebar from '@/app/components/Sidebar'
import { miniTickerItems } from '@/app/data/content'
import {
  DeployModal,
  EditBlogModal,
  EditModuleModal,
  EditNavModal,
  EditPromptModal,
  EditStepModal,
  EditTickerItemModal,
  EditTipModal,
  NewContentModal,
  NewLessonModal,
} from '@/app/components/modals'
import AdminTopbar from './AdminTopbar'
import { AdminUiProvider, useAdminUi } from './AdminUiProvider'

function AdminShellInner({ children }: { children: React.ReactNode }) {
  const { closeAdminModal, openAdminModal, openModal } = useAdminUi()

  return (
    <>
      <Sidebar />
      <div className="main">
        <AdminTopbar />
        <MiniTicker items={miniTickerItems} />
        <div className="content">{children}</div>
      </div>

      <EditStepModal isOpen={openModal === 'edit-step'} onClose={closeAdminModal} />
      <EditBlogModal isOpen={openModal === 'edit-blog'} onClose={closeAdminModal} />
      <EditPromptModal isOpen={openModal === 'edit-prompt'} onClose={closeAdminModal} />
      <EditModuleModal isOpen={openModal === 'edit-module'} onClose={closeAdminModal} />
      <EditTickerItemModal isOpen={openModal === 'edit-ticker-item'} onClose={closeAdminModal} />
      <EditNavModal isOpen={openModal === 'edit-nav'} onClose={closeAdminModal} />
      <NewLessonModal isOpen={openModal === 'new-lesson'} onClose={closeAdminModal} />
      <NewContentModal
        isOpen={openModal === 'new-content'}
        onClose={closeAdminModal}
        onSelect={openAdminModal}
      />
      <DeployModal isOpen={openModal === 'deploy-modal'} onClose={closeAdminModal} />
      <EditTipModal isOpen={openModal === 'edit-tip'} onClose={closeAdminModal} />
    </>
  )
}

export default function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <AdminUiProvider>
      <AdminShellInner>{children}</AdminShellInner>
    </AdminUiProvider>
  )
}
