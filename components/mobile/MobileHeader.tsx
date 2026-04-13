"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

const SERVICIOS_LINKS = [
  { href: '/servicios/ingenieria-civil',     label: 'Ingeniería Civil' },
  { href: '/servicios/movimiento-suelos',    label: 'Movimiento de Suelos' },
  { href: '/servicios/alquiler-equipos',     label: 'Alquiler de Equipos' },
  { href: '/servicios/logistica',            label: 'Logística y Distribución' },
  { href: '/servicios/departamento-tecnico', label: 'Departamento Técnico' },
]

const NAV_LINKS = [
  { name: "Quiénes Somos", href: "/quienes-somos" },
  { name: "Obras", href: "/obras" },
  { name: "Equipos", href: "/equipos" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
]

export function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileServOpen, setMobileServOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setMobileServOpen(false)
  }, [pathname])

  if (pathname.startsWith('/studio')) return null

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-2"
            : "bg-[#0a0a0a] border-b border-white/5 shadow-lg py-3"
        }`}
      >
        <div className="flex items-center justify-between px-5">
          {/* Logo */}
          <Link href="/" className="h-[48px] w-[175px] relative" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/media/brand/logo-white.png"
              alt="Construvial"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white hover:text-[#facc15] transition-colors"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col transition-all duration-300 ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: '80px' }}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 py-8 overflow-y-auto">
          {/* Servicios expand */}
          <div className="w-full text-center">
            <button
              onClick={() => setMobileServOpen(!mobileServOpen)}
              className="font-display text-[28px] text-white/80 uppercase tracking-wider hover:text-white transition-colors flex items-center justify-center gap-2 w-full"
            >
              Servicios
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${mobileServOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServOpen && (
              <div className="mt-4 space-y-3 pb-2">
                {SERVICIOS_LINKS.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block py-2 text-[15px] text-white/60 hover:text-[#facc15] transition-colors font-medium tracking-wide"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
                <Link
                  href="/servicios"
                  className="block py-2 text-[14px] font-bold text-[#facc15] transition-colors uppercase tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ver todos →
                </Link>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-white/10" />

          {/* Nav links - large, tappable */}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-display text-[28px] text-white/80 uppercase tracking-wider hover:text-[#facc15] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Divider */}
          <div className="w-12 h-[1px] bg-white/10" />

          {/* CTA - full width */}
          <Link
            href="https://wa.link/ocm4yr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-[#facc15] text-[#0a0a0a] font-bold tracking-wider uppercase text-[15px] px-6 py-[16px] shadow-lg active:scale-[0.98] transition-transform"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </div>
    </>
  )
}
