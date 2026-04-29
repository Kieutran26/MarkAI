'use client'

import { useState } from 'react'
import Sidebar from '@/app/components/Sidebar'
import MiniTicker from '@/app/components/MiniTicker'
import { miniTickerItems } from '@/app/data/content'
import { pageTitles } from '@/app/data/navigation'
import {
  DashboardPage,
  ActivityPage,
  LessonsPage,
  BlogPage,
  TipsPage,
  PromptsPage,
  ModulesPage,
  TickerPage,
  NavManagePage,
  SettingsPage,
  DeployPage,
} from '@/app/components/pages'
import {
  EditStepModal,
  EditBlogModal,
  EditPromptModal,
  EditModuleModal,
  EditTickerItemModal,
  EditNavModal,
  NewLessonModal,
  NewContentModal,
  DeployModal,
  EditTipModal,
} from '@/app/components/modals'

type PageId = 'overview' | 'activity' | 'lessons' | 'blog' | 'tips' | 'prompts' | 'modules' | 'ticker' | 'nav-manage' | 'settings' | 'deploy'

export default function AdminPage() {
  const [activePage, setActivePage] = useState<PageId>('overview')
  const [openModal, setOpenModal] = useState<string | null>(null)

  const handleNavigate = (pageId: string) => {
    setActivePage(pageId as PageId)
  }

  const handleOpenModal = (modalId: string) => {
    setOpenModal(modalId)
  }

  const handleCloseModal = () => {
    setOpenModal(null)
  }

  const handleNewContentSelect = (type: string) => {
    setOpenModal(type)
  }

  const title = pageTitles[activePage] || ['markAI Admin', '']

  return (
    <>
      <Sidebar activePage={activePage} onNavigate={handleNavigate} />

      <div className="main">
        {/* Top Bar */}
        <div className="topbar">
          <span className="topbar-title">
            <strong>{title[0]}</strong> · {title[1]}
          </span>
          <div className="topbar-spacer" />
          <div className="topbar-actions">
            <button className="topbar-btn" onClick={() => handleOpenModal('new-content')}>
              + Nội dung mới
            </button>
            <button className="topbar-btn" onClick={() => window.open('#', '_blank')}>
              ↗ Xem trang web
            </button>
            <button className="topbar-btn primary" onClick={() => handleOpenModal('deploy-modal')}>
              ⬆ Deploy
            </button>
          </div>
        </div>

        {/* Mini Ticker */}
        <MiniTicker items={miniTickerItems} />

        {/* Content */}
        <div className="content">
          {activePage === 'overview' && (
            <DashboardPage onNavigate={handleNavigate} onOpenModal={handleOpenModal} />
          )}
          {activePage === 'activity' && <ActivityPage />}
          {activePage === 'lessons' && (
            <LessonsPage onOpenModal={handleOpenModal} />
          )}
          {activePage === 'blog' && (
            <BlogPage onOpenModal={handleOpenModal} />
          )}
          {activePage === 'tips' && (
            <TipsPage onOpenModal={handleOpenModal} />
          )}
          {activePage === 'prompts' && (
            <PromptsPage onOpenModal={handleOpenModal} />
          )}
          {activePage === 'modules' && (
            <ModulesPage onOpenModal={handleOpenModal} />
          )}
          {activePage === 'ticker' && (
            <TickerPage onOpenModal={handleOpenModal} />
          )}
          {activePage === 'nav-manage' && (
            <NavManagePage onOpenModal={handleOpenModal} />
          )}
          {activePage === 'settings' && <SettingsPage />}
          {activePage === 'deploy' && (
            <DeployPage onOpenModal={handleOpenModal} />
          )}
        </div>
      </div>

      {/* Modals */}
      <EditStepModal 
        isOpen={openModal === 'edit-step'} 
        onClose={handleCloseModal} 
      />
      <EditBlogModal 
        isOpen={openModal === 'edit-blog'} 
        onClose={handleCloseModal} 
      />
      <EditPromptModal 
        isOpen={openModal === 'edit-prompt'} 
        onClose={handleCloseModal} 
      />
      <EditModuleModal 
        isOpen={openModal === 'edit-module'} 
        onClose={handleCloseModal} 
      />
      <EditTickerItemModal 
        isOpen={openModal === 'edit-ticker-item'} 
        onClose={handleCloseModal} 
      />
      <EditNavModal 
        isOpen={openModal === 'edit-nav'} 
        onClose={handleCloseModal} 
      />
      <NewLessonModal 
        isOpen={openModal === 'new-lesson'} 
        onClose={handleCloseModal} 
      />
      <NewContentModal 
        isOpen={openModal === 'new-content'} 
        onClose={handleCloseModal}
        onSelect={handleNewContentSelect}
      />
      <DeployModal 
        isOpen={openModal === 'deploy-modal'} 
        onClose={handleCloseModal} 
      />
      <EditTipModal 
        isOpen={openModal === 'edit-tip'} 
        onClose={handleCloseModal} 
      />
    </>
  )
}
