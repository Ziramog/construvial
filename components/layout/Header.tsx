"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
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
  { name: "Equipos", href: "/equipos" },
  { name: "Obras", href: "/obras" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [servOpen, setServOpen] = useState(false)
  const [mobileServOpen, setMobileServOpen] = useState(false)
  const servRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servRef.current && !servRef.current.contains(e.target as Node)) {
        setServOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setMobileServOpen(false)
    setServOpen(false)
  }, [pathname])

  if (pathname.startsWith('/studio')) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-2 sm:py-3"
          : "bg-[#0a0a0a] border-b border-white/5 shadow-2xl py-3 sm:py-5"
      }`}
    >
      <div className="w-full h-full px-4 sm:px-6 md:px-8 xl:px-12 relative z-10 flex flex-col justify-center">
        <div className="flex items-center justify-between">

          {/* Official Logo */}
          <Link href="/" className="z-50 relative h-[62px] w-[229px] sm:h-[73px] sm:w-[270px]" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/media/brand/logo-white.png"
              alt="Construvial Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Nav - Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 font-body">
            {/* Quiénes Somos first */}
            <div className="relative group">
              <Link
                href="/quienes-somos"
                className={`text-sm tracking-wider uppercase transition-colors duration-300 font-bold ${
                  pathname === "/quienes-somos"
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Quiénes Somos
              </Link>
              <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${pathname === "/quienes-somos" ? "w-full" : ""}`} />
            </div>

            {/* Servicios dropdown */}
            <div ref={servRef} className="relative group">
              <button
                onClick={() => setServOpen(!servOpen)}
                className={`flex items-center gap-1 text-sm tracking-wider uppercase transition-colors duration-300 font-bold ${
                  pathname.startsWith('/servicios')
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Servicios
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {/* Hover underline */}
              <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${pathname.startsWith('/servicios') ? "w-full" : ""}`} />

              {servOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[#0a0a0a] border border-white/5 shadow-2xl overflow-hidden z-50">
                  {SERVICIOS_LINKS.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServOpen(false)}
                      className="block px-6 py-4 text-sm text-white/70 hover:text-white hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors font-body tracking-wide"
                    >
                      {s.label}
                    </Link>
                  ))}
                  <Link
                    href="/servicios"
                    onClick={() => setServOpen(false)}
                    className="block px-6 py-4 text-sm font-bold text-[#FFD100] hover:bg-white/5 transition-colors font-body tracking-wide uppercase"
                  >
                    Ver todos los servicios →
                  </Link>
                </div>
              )}
            </div>

            {/* Rest of nav */}
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`text-sm tracking-wider uppercase transition-colors duration-300 font-bold ${
                    pathname === link.href
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
                {/* Hover line */}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${pathname === link.href ? "w-full" : ""}`} />
              </div>
            ))}
          </nav>

          {/* CTA - Right */}
          <div className="hidden lg:flex items-center">
            <Link
              href="https://wa.link/ocm4yr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#facc15] text-[#0a0a0a] font-body font-bold tracking-wider uppercase text-sm px-5 xl:px-7 py-2.5 xl:py-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-yellow-400"
            >
              Solicitar Presupuesto
            </Link>
          </div>

          {/* Mobile Menu Toggle — always clickable, above overlay */}
          <button
            className="lg:hidden p-2 relative z-[95] text-white transition-colors duration-300 hover:text-[#FFD100] touch-manipulation select-none"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav — rendered only when open to prevent click-through issues */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-[#0a0a0a] z-[55] flex flex-col"
        >
          <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-6 p-6 sm:p-8 overflow-y-auto">
            {/* Quiénes Somos first on mobile */}
            <Link
              href="/quienes-somos"
              className="font-display text-3xl sm:text-4xl text-white/80 uppercase tracking-wider hover:text-white transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quiénes Somos
            </Link>

            {/* Servicios expandable section */}
            <div className="w-full max-w-xs text-center">
              <button
                onClick={() => setMobileServOpen(!mobileServOpen)}
                className="font-display text-3xl sm:text-4xl text-white/80 uppercase tracking-wider hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 w-full touch-manipulation"
              >
                Servicios
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${mobileServOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileServOpen && (
                <div className="mt-3 space-y-2">
                  {SERVICIOS_LINKS.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-2 text-sm text-white/60 hover:text-[#FFD100] transition-colors font-body tracking-wide"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                  <Link
                    href="/servicios"
                    className="block py-2 text-sm font-bold text-[#FFD100] transition-colors font-body tracking-wide uppercase"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Ver todos →
                  </Link>
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-display text-3xl sm:text-4xl text-white/80 uppercase tracking-wider hover:text-white transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-16 h-1 bg-white/10 my-2 sm:my-4" />
            <Link
              href="https://wa.link/ocm4yr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs text-center bg-[#facc15] text-[#0a0a0a] font-body font-bold tracking-wider uppercase text-base sm:text-lg px-6 py-4 shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solicitar Presupuesto
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
