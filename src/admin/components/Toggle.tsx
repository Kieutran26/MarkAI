'use client'

import { useState } from 'react'

interface ToggleProps {
  defaultOn?: boolean
  onToggle?: (on: boolean) => void
}

export default function Toggle({ defaultOn = false, onToggle }: ToggleProps) {
  const [isOn, setIsOn] = useState(defaultOn)

  const handleClick = () => {
    const newState = !isOn
    setIsOn(newState)
    onToggle?.(newState)
  }

  return (
    <div 
      className={`toggle ${isOn ? 'on' : ''}`} 
      onClick={handleClick}
    />
  )
}
