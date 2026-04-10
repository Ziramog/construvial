"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { CONTACT } from "@/lib/constants"
import { useEffect, useState } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <Link 
      href={CONTACT.whatsapp}
      title="¡Chateá con nosotros!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <MessageCircle size={28} />
      <span className="sr-only">Contactar por WhatsApp</span>
    </Link>
  )
}
