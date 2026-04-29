interface BadgeProps {
  children: React.ReactNode
  variant?: 'accent' | 'dark' | 'outline' | 'green' | 'yellow' | 'blue'
  style?: React.CSSProperties
}

export default function Badge({ children, variant = 'outline', style }: BadgeProps) {
  const variantClass = `badge-${variant}`
  const customStyle = variant === 'blue' ? { background: '#1d4ed8', ...style } : style

  return (
    <span className={`badge ${variantClass}`} style={customStyle}>
      {children}
    </span>
  )
}
