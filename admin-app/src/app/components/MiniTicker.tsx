'use client'

import { useEffect, useRef } from 'react'

interface MiniTickerProps {
  items: string[]
}

export default function MiniTicker({ items }: MiniTickerProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.innerHTML += trackRef.current.innerHTML
    }
  }, [])

  return (
    <div className="mini-ticker">
      <div className="mini-ticker-track" ref={trackRef}>
        {items.map((item, i) => (
          <span key={i} className="mini-ticker-item" dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </div>
    </div>
  )
}
