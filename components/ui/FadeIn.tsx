"use client"

import { useRef, useEffect, useState } from "react"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "none"
  duration?: number
}

export function FadeIn({ children, className = "", delay = 0, direction = "up", duration = 400 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  // Check reduced motion safely (works in client only)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(mediaQuery.matches)

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: "0px" } // Removed negative root margin for faster trigger
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const translate = {
    up: "translateY(20px)", // Reduced from 30px to 20px for subtlety
    left: "translateX(-20px)",
    right: "translateX(20px)",
    none: "none",
  }

  // If reduced motion is preferred, render immediately without animations
  if (isReducedMotion) {
    return (
      <div className={className} style={{ opacity: 1, transform: "none" }}>
        {children}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : translate[direction],
        // Changed to ease-out (more natural for entering elements)
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
