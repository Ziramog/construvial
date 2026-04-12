"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MapPin, Phone, Mail, ShieldCheck, Leaf } from "lucide-react"
import { CONTACT } from "@/lib/constants"

export function Footer() {
  const pathname = usePathname()
  if (pathname.startsWith('/studio')) return null

  return (
    <footer className="bg-[#090e1b] w-full border-t-4 border-[#FFD100]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        {/* Branding Column */}
        <div className="space-y-6">
          <div className="text-2xl font-black text-white mb-2 font-display tracking-tighter">
            CONSTRUVIAL<span className="text-[#FFD100]">.</span>
          </div>
          <p className="text-[#c6c6cc] text-sm leading-relaxed font-body">
            Más de 35 años construyendo infraestructura vial en Argentina. Excelencia operativa y compromiso con el desarrollo nacional.
          </p>
        </div>

        {/* Empresa Column */}
        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm font-display border-b border-white/10 pb-2">Empresa</h4>
          <ul className="space-y-3 font-body">
            <li><Link className="text-[#c6c6cc] hover:translate-x-1 hover:text-[#FFD100] transition-all duration-200 text-sm uppercase tracking-wider block" href="/quienes-somos">Quiénes Somos</Link></li>
            <li><Link className="text-[#c6c6cc] hover:translate-x-1 hover:text-[#FFD100] transition-all duration-200 text-sm uppercase tracking-wider block" href="/obras">Proyectos</Link></li>
            <li><Link className="text-[#c6c6cc] hover:translate-x-1 hover:text-[#FFD100] transition-all duration-200 text-sm uppercase tracking-wider block" href="/equipos">Equipamiento</Link></li>
            <li><Link className="text-[#c6c6cc] hover:translate-x-1 hover:text-[#FFD100] transition-all duration-200 text-sm uppercase tracking-wider block" href="/servicios/ingenieria-civil">Soluciones</Link></li>
          </ul>
        </div>

        {/* Servicios Column */}
        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm font-display border-b border-white/10 pb-2">Servicios</h4>
          <ul className="space-y-3 font-body">
            <li><Link className="text-[#c6c6cc] hover:translate-x-1 hover:text-[#FFD100] transition-all duration-200 text-sm uppercase tracking-wider block" href="/servicios/ingenieria-civil">Ingeniería Civil</Link></li>
            <li><Link className="text-[#c6c6cc] hover:translate-x-1 hover:text-[#FFD100] transition-all duration-200 text-sm uppercase tracking-wider block" href="/servicios/movimiento-suelos">Movimiento de Suelos</Link></li>
            <li><Link className="text-[#c6c6cc] hover:translate-x-1 hover:text-[#FFD100] transition-all duration-200 text-sm uppercase tracking-wider block" href="/servicios/alquiler-equipos">Alquiler de Equipos</Link></li>
            <li><Link className="text-[#c6c6cc] hover:translate-x-1 hover:text-[#FFD100] transition-all duration-200 text-sm uppercase tracking-wider block" href="/servicios/logistica">Logística y Distribución</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-6 relative group">
          {/* Highlight Focus (Desktop only) */}
          <div className="hidden md:block absolute -inset-4 bg-white/[0.02] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <h4 className="text-[#FFD100] font-bold uppercase tracking-widest text-sm font-display border-b border-white/10 pb-2 relative z-10">Contacto</h4>
          <div className="space-y-4 font-body relative z-10">
            <div className="flex items-start gap-3 group">
              <MapPin size={18} className="text-[#FFD100] mt-0.5 shrink-0" />
              <span className="text-[#c6c6cc] text-xs leading-tight">{CONTACT.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#FFD100] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[#c6c6cc] text-xs">{CONTACT.phone1}</span>
                <span className="text-[#c6c6cc] text-xs">{CONTACT.phone2}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#FFD100] shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="text-[#c6c6cc] text-xs hover:text-white transition-colors">{CONTACT.email}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-[#0e1320] py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#c6c6cc] font-bold uppercase tracking-widest text-xs font-display">Certificaciones Internacionales</div>
          <div className="flex gap-4 flex-wrap justify-center md:gap-8">
            <div className="flex items-center gap-3 border border-white/10 bg-black/20 px-4 py-2 hover:border-[#FFD100]/30 transition-colors cursor-default">
              <ShieldCheck size={18} className="text-white" />
              <span className="text-white font-bold text-[10px] tracking-widest">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-3 border border-white/10 bg-black/20 px-4 py-2 hover:border-[#FFD100]/30 transition-colors cursor-default">
              <Leaf size={18} className="text-white" />
              <span className="text-white font-bold text-[10px] tracking-widest">ISO 14001:2015</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#c6c6cc] text-[10px] uppercase tracking-widest font-body text-center md:text-left">
            © {(new Date().getFullYear())} Construvial S.A. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 font-body">
            <Link className="text-[#c6c6cc] hover:text-white text-[10px] uppercase tracking-widest transition-colors" href="/legal/privacidad">Privacidad</Link>
            <Link className="text-[#c6c6cc] hover:text-white text-[10px] uppercase tracking-widest transition-colors" href="/legal/terminos">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
