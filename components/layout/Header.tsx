"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { CONTACT, SERVICIOS } from "@/lib/constants"
import { Button } from "@/components/ui/Button"

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
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-200 py-3 text-text" : "bg-transparent border-transparent py-4 text-white"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold tracking-wider">
              CONSTRU<span className="text-accent">VIAL</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-body font-medium">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 hover:text-accent transition-colors",
                    pathname === link.href && "text-accent"
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </Link>
                
                {link.dropdown && (
                  <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-56">
                    <div className="bg-white rounded-md shadow-lg border border-gray-100 py-2 flex flex-col">
                      {link.dropdown.map((drop) => (
                        <Link 
                          key={drop.name} 
                          href={drop.href}
                          className="px-4 py-2 text-sm text-text hover:bg-gray-50 hover:text-accent transition-colors"
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

          <div className="hidden lg:flex items-center">
            <Button asChild variant="accent" className="font-bold">
              <Link href={CONTACT.whatsapp} target="_blank">Consultanos</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 flex flex-col overflow-y-auto max-h-[calc(100vh-80px)]">
          <nav className="flex flex-col p-4 font-body font-medium text-text">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col border-b border-gray-100 last:border-0">
                <Link 
                  href={link.href}
                  className="py-4 hover:text-accent font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="flex flex-col pl-4 pb-2 pb-4">
                    {link.dropdown.map((drop) => (
                      <Link 
                        key={drop.name} 
                        href={drop.href}
                        className="py-2 text-sm text-muted hover:text-accent"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pb-4">
              <Button asChild variant="accent" className="w-full">
                <Link href={CONTACT.whatsapp} target="_blank">Consultanos</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
