"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Quiénes Somos", href: "/quienes-somos" },
    { name: "Servicios", href: "/servicios" },
    { name: "Obras", href: "/obras" },
    { name: "Equipos", href: "/equipos" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-[#1A1A1A] border-b border-white/10 shadow-lg ${
        isScrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
      }`}
    >
      <div className="w-full h-full px-4 sm:px-6 md:px-8 xl:px-12 relative z-10 flex flex-col justify-center">
        <div className="flex items-center justify-between">

          {/* Official Logo */}
          <Link href="/" className="z-50 relative h-10 w-44 sm:h-12 sm:w-56" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/Archivo/CONSTRUVIAL_logo.png"
              alt="Construvial Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Nav - Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 font-body">
            {navLinks.map((link) => (
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
              className="bg-[#FFD100] text-[#1A1A1A] font-body font-bold tracking-wider uppercase text-sm px-5 xl:px-7 py-2.5 xl:py-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-yellow-400"
            >
              Solicitar Presupuesto
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 relative z-50 text-white transition-colors duration-300 hover:text-[#FFD100]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#1A1A1A] z-40 flex flex-col transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8 p-6 sm:p-8">
          {navLinks.map((link) => (
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
            className="w-full text-center bg-[#FFD100] text-[#1A1A1A] font-body font-bold tracking-wider uppercase text-base sm:text-lg px-6 py-4 shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </div>
    </header>
  )
}
