"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { CONTACT } from "@/lib/constants"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (pathname.startsWith('/studio') || !isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`
          bg-[#1A1A1A] text-white text-sm font-medium px-4 py-2 shadow-lg font-body
          transition-all duration-200 whitespace-nowrap pointer-events-none
          ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
        `}
      >
        ¡Chateá con nosotros!
      </div>

      {/* Button with subtle pulse animation */}
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="
          relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg
          bg-[#25D366] hover:bg-[#1ebe5d] active:scale-95
          transition-all duration-200
        "
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-40"
          style={{
            animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
          }}
        />
        <MessageCircle className="w-7 h-7 text-white fill-white relative z-10" />
      </a>
    </div>
  )
}
