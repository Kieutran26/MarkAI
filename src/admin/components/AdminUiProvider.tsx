'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

type AdminUiContextValue = {
  openModal: string | null
  openAdminModal: (modalId: string) => void
  closeAdminModal: () => void
  navigateTo: (href: string) => void
}

const AdminUiContext = createContext<AdminUiContextValue | null>(null)

export function AdminUiProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [openModal, setOpenModal] = useState<string | null>(null)

  const value = useMemo<AdminUiContextValue>(
    () => ({
      openModal,
      openAdminModal: (modalId: string) => setOpenModal(modalId),
      closeAdminModal: () => setOpenModal(null),
      navigateTo: (href: string) => router.push(href),
    }),
    [openModal, router]
  )

  return <AdminUiContext.Provider value={value}>{children}</AdminUiContext.Provider>
}

export function useAdminUi() {
  const context = useContext(AdminUiContext)

  if (!context) {
    throw new Error('useAdminUi must be used within AdminUiProvider')
  }

  return context
}
