"use client"

import Image, { ImageProps } from "next/image"
import { useEffect, useRef, useState } from "react"

interface ParallaxImageProps extends Omit<ImageProps, 'src'> {
  src: string
  /** Scroll speed: 0.05 (very subtle) to 0.15 (noticeable). Default: 0.1 */
  speed?: number
  /** Max vertical movement in px. Default: 15 */
  maxMove?: number
  /** Optional: add a subtle floating motion (2-4px oscillation) */
  float?: boolean
}

/**
 * ParallaxImage: A next/image wrapper with subtle scroll-based translateY.
 * Background moves slower than content → creates depth.
 * Respects prefers-reduced-motion (disables parallax).
 */
export function ParallaxImage({
  src,
  speed = 0.1,
  maxMove = 15,
  float = false,
  alt,
  className,
  ...imageProps
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (isReducedMotion) return
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isReducedMotion])

  const parallaxY = isReducedMotion ? 0 : Math.min(scrollY * speed, maxMove)

  // Floating oscillation (only when scroll is minimal, e.g., already in viewport)
  const floatStyle = float && !isReducedMotion
    ? { animation: 'float-gentle 4s ease-in-out infinite' }
    : {}

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className ?? ''}`}
      style={{
        transform: `translateY(${parallaxY}px)`,
        willChange: 'transform',
        ...floatStyle,
      }}
    >
      <Image src={src} alt={alt} {...imageProps} />
    </div>
  )
}
