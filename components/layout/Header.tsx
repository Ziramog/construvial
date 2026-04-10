"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
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
        ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 py-2"
        : "bg-transparent border-b border-transparent py-3"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-50 relative" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/Construvial-LogoNegro-300x138.png"
              alt="Construvial S.A."
              width={160}
              height={74}
              className="object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-body font-medium">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 text-white/80 hover:text-[#FFD100] transition-colors duration-200 text-sm tracking-wide",
                    isScrolled && "text-gray-700 hover:text-[#FFD100]",
                    pathname === link.href && "text-[#FFD100]"
                  )}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>

                {link.dropdown && (
                  <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-56">
                    <div className="bg-white border border-gray-200 rounded-sm py-2 flex flex-col shadow-xl">
                      {link.dropdown.map((drop) => (
                        <Link
                          key={drop.name}
                          href={drop.href}
                          className="px-4 py-2.5 text-sm text-gray-700 hover:bg-[#FFD100]/10 hover:text-[#FFD100] transition-colors duration-200"
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
              className="bg-[#FFD100] text-black font-body font-semibold tracking-wider uppercase text-xs px-6 py-2.5 hover:bg-yellow-400 transition-colors duration-200"
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
        <div className="lg:hidden fixed inset-0 top-0 bg-black z-40 flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <Link href="/" className="z-50 relative" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/Construvial-LogoNegro-300x138.png"
                alt="Construvial S.A."
                width={140}
                height={64}
                className="object-contain brightness-0 invert"
              />
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
                  className="font-display text-4xl text-white uppercase py-4 hover:text-[#FFD100] transition-colors duration-200"
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
                        className="font-body text-white/50 text-sm py-2 hover:text-[#FFD100] transition-colors duration-200"
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
                className="block text-center bg-[#FFD100] text-black font-body font-semibold tracking-wider uppercase text-sm px-6 py-4 hover:bg-yellow-400 transition-colors duration-200"
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
