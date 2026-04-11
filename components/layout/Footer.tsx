import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { CONTACT } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 border-t-4 border-[#FFD100]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & Links - Scaled appropriately */}
          <div className="flex flex-col gap-6">
            <div className="relative h-14 w-52 mb-4">
              <Image
                src="/Archivo/CONSTRUVIAL_logo.png"
                alt="Construvial Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-4">
              Más de 35 años construyendo infraestructura vial y civil en Argentina. Ingeniería de excelencia y equipamiento de primera línea.
            </p>
            <ul className="flex flex-col gap-3 font-body text-sm font-bold uppercase tracking-wide">
              <li>
                <Link href="/quienes-somos" className="text-white/80 hover:text-[#FFD100] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FFD100]" />
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/obras" className="text-white/80 hover:text-[#FFD100] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FFD100]" />
                  Nuestros Proyectos
                </Link>
              </li>
              <li>
                <Link href="/equipos" className="text-white/80 hover:text-[#FFD100] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FFD100]" />
                  Equipamiento
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Servicios Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">Soluciones</h3>
            <ul className="flex flex-col gap-4 font-body text-white/50 text-sm">
              <li>
                <Link href="/servicios/ingenieria-civil" className="hover:text-[#FFD100] transition-colors">Ingeniería Civil</Link>
              </li>
              <li>
                <Link href="/servicios/movimiento-suelos" className="hover:text-[#FFD100] transition-colors">Movimiento de Suelos</Link>
              </li>
              <li>
                <Link href="/servicios/alquiler-equipos" className="hover:text-[#FFD100] transition-colors">Alquiler de Equipos</Link>
              </li>
              <li>
                <Link href="/servicios/logistica" className="hover:text-[#FFD100] transition-colors">Logística y Distribución</Link>
              </li>
              <li>
                <Link href="/servicios/departamento-tecnico" className="hover:text-[#FFD100] transition-colors">Departamento Técnico</Link>
              </li>
            </ul>
          </div>

           {/* Column 3: Contacto Info */}
           <div className="flex flex-col gap-6">
            <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">Sede Central</h3>
            <ul className="flex flex-col gap-5 font-body text-white/50 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-[#FFD100] shrink-0" />
                <span className="leading-tight">{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={20} className="text-[#FFD100] shrink-0" />
                <div className="flex flex-col">
                  <span>{CONTACT.phone1}</span>
                  <span>{CONTACT.phone2}</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={20} className="text-[#FFD100] shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors break-all">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Certificaciones y Redes */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">Certificaciones</h3>
            <div className="flex flex-col gap-3 font-body text-sm text-white/50">
              <p className="leading-relaxed">
                ISO 9001:2015 <br /> ISO 14001:2015
              </p>
            </div>

            <h3 className="font-display text-xl uppercase tracking-wider text-white mt-4 mb-1">Redes Sociales</h3>
            <div className="flex items-center gap-4">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 text-white hover:bg-[#FFD100] hover:text-[#1A1A1A] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 text-white hover:bg-[#FFD100] hover:text-[#1A1A1A] transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
                 </svg>
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 text-white hover:bg-[#FFD100] hover:text-[#1A1A1A] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-[10px] sm:text-xs text-white/30 uppercase tracking-[0.2em]">
          <p>© 2026 Construvial S.A. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/legal/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/legal/terminos" className="hover:text-white transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
