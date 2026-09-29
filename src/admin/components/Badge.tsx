import type { CSSProperties, ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'accent' | 'dark' | 'outline' | 'green' | 'yellow' | 'blue' | 'danger'
  style?: CSSProperties
}

export default function Badge({ children, variant = 'outline', style }: BadgeProps) {
  const variantClass = `badge-${variant}`
  const customStyle = variant === 'blue'
    ? { background: 'var(--info)', ...style }
    : variant === 'danger'
    ? { background: 'var(--danger)', color: '#fff', ...style }
    : style

  return (
    <span className={`badge ${variantClass}`} style={customStyle}>
      {children}
    </span>
  )
}
