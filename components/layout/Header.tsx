"use client"

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
    { name: "Servicios", href: "/#servicios" },
    { name: "Mercados", href: "/#mercados" },
    { name: "Proyectos", href: "/#proyectos" },
    { name: "Empresa", href: "/#empresa" },
    { name: "Contacto", href: "/#contacto" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-[#1A1A1A] border-b border-white/10 shadow-lg ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="w-full h-full px-4 md:px-8 xl:px-12 relative z-10 flex flex-col justify-center">
        <div className="flex items-center justify-between">
          
          {/* Structural Typographic Logo */}
          <Link href="/" className="z-50 relative flex flex-col justify-center" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="font-display text-4xl sm:text-5xl font-black tracking-tighter leading-none flex items-start">
              <span className="text-white">CONSTRU</span>
              <span className="text-[#FFD100]">VIAL</span>
              <span className="text-[#FFD100] text-[10px] sm:text-xs ml-1 mt-1 font-bold">®</span>
            </div>
            <div className="text-[9px] sm:text-[11px] font-body tracking-[0.25em] text-white/50 uppercase mt-1 pl-1">
              Construcciones Viales y Civiles
            </div>
          </Link>

          {/* Desktop Nav - Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-8 font-body">
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
              href="/#contacto"
              className="bg-[#FFD100] text-[#1A1A1A] font-body font-bold tracking-wider uppercase text-sm px-7 py-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-yellow-400"
            >
              Solicitar Presupuesto
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 relative z-50 text-white transition-colors duration-300 hover:text-[#FFD100]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`lg:hidden fixed inset-0 bg-[#1A1A1A] z-40 flex flex-col transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-display text-4xl text-white/80 uppercase tracking-wider hover:text-white transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-16 h-1 bg-white/10 mt-4 mb-4" />
          <Link
            href="/#contacto"
            className="w-full text-center bg-[#FFD100] text-[#1A1A1A] font-body font-bold tracking-wider uppercase text-lg px-6 py-4 shadow-lg transition-all duration-300 hover:scale-[1.02]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </div>
    </header>
  )
}
