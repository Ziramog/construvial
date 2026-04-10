"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { CONTACT, SERVICIOS } from "@/lib/constants"

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
    { name: "Inicio", href: "/" },
    { name: "Quiénes somos", href: "/quienes-somos" },
    {
      name: "Servicios",
      href: "/servicios",
      dropdown: SERVICIOS.map(s => ({ name: s.titulo, href: `/servicios/${s.slug}` }))
    },
    { name: "Obras", href: "/obras" },
    { name: "Equipos", href: "/equipos" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
      isScrolled
        ? "bg-[#0A1628]/95 backdrop-blur-sm border-b border-white/10 py-3"
        : "bg-transparent border-b border-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50 relative">
            <span className="font-display text-3xl font-normal tracking-wider text-white">
              CONSTRU<span className="text-[#E8720C]">VIAL</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-body font-medium">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 text-white/70 hover:text-white transition-colors duration-200 text-sm tracking-wide",
                    pathname === link.href && "text-[#E8720C]"
                  )}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>

                {link.dropdown && (
                  <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-56">
                    <div className="bg-[#0D1B2A] border border-white/10 rounded-sm py-2 flex flex-col shadow-xl">
                      {link.dropdown.map((drop) => (
                        <Link
                          key={drop.name}
                          href={drop.href}
                          className="px-4 py-2.5 text-sm text-white/70 hover:bg-[#E8720C]/10 hover:text-white transition-colors duration-200"
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href={CONTACT.whatsapp}
              target="_blank"
              className="bg-[#E8720C] text-white font-body font-semibold tracking-wider uppercase text-xs px-6 py-2.5 hover:bg-orange-600 transition-colors duration-200"
            >
              Consultanos
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav — fullscreen with Bebas Neue titles */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-[#0A1628] z-40 flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="font-display text-3xl font-normal tracking-wider text-white">
                CONSTRU<span className="text-[#E8720C]">VIAL</span>
              </span>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col p-6">
            {navLinks.map((link, idx) => (
              <div key={link.name} className="flex flex-col">
                <Link
                  href={link.href}
                  className="font-display text-4xl text-white uppercase py-4 hover:text-[#E8720C] transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {idx < navLinks.length - 1 && <div className="h-px bg-white/10" />}
                {link.dropdown && (
                  <div className="flex flex-col pl-6 pb-4">
                    {link.dropdown.map((drop) => (
                      <Link
                        key={drop.name}
                        href={drop.href}
                        className="font-body text-white/50 text-sm py-2 hover:text-[#E8720C] transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-8">
              <Link
                href={CONTACT.whatsapp}
                target="_blank"
                className="block text-center bg-[#E8720C] text-white font-body font-semibold tracking-wider uppercase text-sm px-6 py-4 hover:bg-orange-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Consultanos
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
