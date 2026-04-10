"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? "bg-white py-3 shadow-lg" 
          : "py-5 md:py-6"
      }`}
    >
      {/* Background gradients for non-scrolled state */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 -z-20 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Global dark gradient falling from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
        
        {/* Left cinematic white panel blending into transparent */}
        <div className="absolute top-0 left-0 bottom-0 w-[85%] sm:w-[450px] lg:w-[500px] xl:w-[550px] bg-gradient-to-r from-white via-white/95 to-transparent" />
      </div>

      {/* Header Content - Full width layout for structural logo integration */}
      <div className="w-full h-full px-4 md:px-8 xl:px-12 relative z-10 flex flex-col justify-center">
        <div className="flex items-center justify-between">
          
          {/* Structural Logo */}
          <Link href="/" className="z-50 relative flex items-center h-full" onClick={() => setIsMobileMenuOpen(false)}>
            <div className={`relative transition-all duration-300 ${isScrolled ? "w-[150px] h-[45px]" : "w-[220px] h-[65px] md:w-[260px] md:h-[75px]"}`}>
              <Image
                src="/Construvial-LogoNegro-300x138.png"
                alt="Construvial S.A."
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav - Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-8 font-body">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`text-sm tracking-wider uppercase transition-colors duration-200 font-bold ${
                    pathname === link.href 
                      ? "text-[#FFD100]" 
                      : isScrolled 
                        ? "text-[#1A1A1A] hover:text-[#FFD100]" 
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
                {/* Hover line */}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#FFD100] transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </nav>

          {/* CTA - Right */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/#contacto"
              className={`font-body font-bold tracking-wider uppercase text-sm px-6 py-3 transition-colors duration-200 shadow-sm ${
                isScrolled
                  ? "bg-[#FFD100] text-[#1A1A1A] hover:bg-yellow-400"
                  : "bg-[#FFD100] text-[#1A1A1A] hover:bg-yellow-400"
              }`}
            >
              Solicitar Presupuesto
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 relative z-50 transition-colors duration-300 ${
              isMobileMenuOpen ? "text-white" : isScrolled ? "text-[#1A1A1A]" : "text-[#1A1A1A] sm:text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`lg:hidden fixed inset-0 bg-[#0C0F0F] z-40 flex flex-col transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-display text-4xl text-white uppercase tracking-wider hover:text-[#FFD100] transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-16 h-1 bg-gray-800 mt-4 mb-4" />
          <Link
            href="/#contacto"
            className="w-full text-center bg-[#FFD100] text-[#1A1A1A] font-body font-bold tracking-wider uppercase text-lg px-6 py-4 hover:bg-yellow-400 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </div>
    </header>
  )
}
