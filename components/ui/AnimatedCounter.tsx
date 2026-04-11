'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  target: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ target, suffix = '', duration = 2000, className = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          const startTime = performance.now()

          const tick = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
            else setCount(target)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref} className={className}>{count}{suffix}</span>
}
