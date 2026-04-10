"use client"

import { useRef, useEffect, useState } from "react"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "none"
  duration?: number
}

export function FadeIn({ children, className = "", delay = 0, direction = "up", duration = 600 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const translate = {
    up: "translateY(30px)",
    left: "translateX(-30px)",
    right: "translateX(30px)",
    none: "none",
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : translate[direction],
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
