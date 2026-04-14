"use client"

import { useState, useEffect } from "react"
import React from "react"

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if we're on the hero page (only hide on pages with hero)
    const hero = document.getElementById('hero')
    if (!hero) {
      // No hero on this page, always show
      setIsVisible(true)
      return
    }

    const handleScroll = () => {
      // Show CTA bar only after scrolling past 40% of the hero height
      const heroHeight = hero.offsetHeight
      const threshold = heroHeight * 0.4
      setIsVisible(window.scrollY > threshold)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] flex md:hidden bg-[#0a0a0a] border-t border-white/5 p-3 gap-2">
      <a href="tel:+543571421350"
         className="flex-1 text-center bg-white/10 text-white font-body text-sm py-3 rounded-none font-medium tracking-wide">
        📞 Llamar
      </a>
      <a href="https://wa.link/ocm4yr" target="_blank" rel="noopener noreferrer"
         className="flex-1 text-center bg-[#facc15] text-[#0a0a0a] font-body text-sm py-3 rounded-none font-semibold tracking-wide">
        WhatsApp →
      </a>
    </div>
  )
}
