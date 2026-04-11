"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ value, suffix = "", duration = 2, className = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isInView && mounted) {
      let start = 0
      const end = value
      if (start === end) return

      const totalMiliseconds = duration * 1000
      const incrementTime = totalMiliseconds / end

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        }
      }, Math.max(incrementTime, 16))

      return () => clearInterval(timer)
    }
  }, [isInView, mounted, value, duration])

  return (
    <span ref={ref} className={className}>
      {mounted ? count : 0}{suffix}
    </span>
  )
}
