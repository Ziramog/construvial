"use client"

import React from "react"

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] flex md:hidden bg-[#0a0a0a] border-t border-white/5 p-3 gap-2">
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
