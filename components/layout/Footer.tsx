"use client"

import { usePathname } from "next/navigation"
import Image from "next/image"
import { MapPin, Phone, Mail, ShieldCheck, Leaf, ExternalLink } from "lucide-react"
import { CONTACT } from "@/lib/constants"
import { StyledGoogleMap } from "@/components/ui/StyledGoogleMap"

export function Footer() {
  const pathname = usePathname()
  if (pathname.startsWith('/studio')) return null

  return (
    <footer className="bg-[#0a0a0a] w-full border-t-[3px] border-[#facc15]">
      {/* Main footer area */}
      <div className="bg-gradient-to-b from-[#0a0a0a] via-[#0c0c0c] to-[#111111]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 px-6 md:px-10 lg:px-12 py-14 md:py-18 max-w-7xl mx-auto">

          {/* Branding + Social — 3 cols */}
          <div className="md:col-span-3 flex flex-col gap-8">
            {/* Logo */}
            <div className="relative h-[52px] w-[200px]">
              <Image
                src="/media/brand/logo-white.png"
                alt="Construvial S.A."
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Description */}
            <p className="text-[#a0a0a5] text-[15px] leading-[1.75] font-body">
              Más de 35 años ejecutando obras de infraestructura en Argentina con precisión y experiencia comprobada.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 pt-1">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 flex items-center justify-center border border-white/15 text-white/50 hover:border-[#facc15] hover:text-[#facc15] hover:bg-[#facc15]/5 transition-all duration-300"
                 aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 flex items-center justify-center border border-white/15 text-white/50 hover:border-[#facc15] hover:text-[#facc15] hover:bg-[#facc15]/5 transition-all duration-300"
                 aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 flex items-center justify-center border border-white/15 text-white/50 hover:border-[#facc15] hover:text-[#facc15] hover:bg-[#facc15]/5 transition-all duration-300"
                 aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info — 3 cols */}
          <div className="md:col-span-3 flex flex-col gap-8">
            <h4 className="text-[#FFD100] font-bold uppercase tracking-[0.2em] text-[12px] font-display border-b border-white/10 pb-3">
              Contacto
            </h4>
            <div className="flex flex-col gap-6 font-body">
              {/* Address — clickable */}
              <a href="https://maps.app.goo.gl/vvPgrXHtUwWU7Ea79"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-start gap-4 group">
                <div className="w-9 h-9 rounded-lg bg-[#facc15]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#facc15]/20 transition-colors duration-300">
                  <MapPin size={16} className="text-[#FFD100]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.15em] font-semibold mb-1.5">Oficinas Centrales</span>
                  <span className="text-[#c6c6cc] text-[14px] leading-relaxed group-hover:text-white transition-colors">{CONTACT.address}</span>
                </div>
              </a>

              {/* Phones — clickable */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#facc15]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#facc15]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.15em] font-semibold mb-1.5">Líneas Directas</span>
                  <div className="flex flex-col gap-1">
                    <a href={`tel:${CONTACT.phone1.replace(/\s/g, '')}`} className="text-[#c6c6cc] text-[14px] hover:text-[#facc15] transition-colors">{CONTACT.phone1}</a>
                    <a href={`tel:${CONTACT.phone2.replace(/\s/g, '')}`} className="text-[#c6c6cc] text-[14px] hover:text-[#facc15] transition-colors">{CONTACT.phone2}</a>
                  </div>
                </div>
              </div>

              {/* Email — clickable */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#facc15]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#facc15]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.15em] font-semibold mb-1.5">Email</span>
                  <a href={`mailto:${CONTACT.email}`} className="text-[#c6c6cc] text-[14px] hover:text-[#facc15] transition-colors break-all">{CONTACT.email}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps — spans 6 cols */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <h4 className="text-white/40 font-bold uppercase tracking-[0.2em] text-[12px] font-display border-b border-white/10 pb-3">
              Ubicación
            </h4>

            {/* Map card — premium container */}
            <div className="relative group rounded-xl overflow-hidden border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(250,204,21,0.08)] hover:border-[#facc15]/20 hover:scale-[1.01]">
              {/* Map container */}
              <div className="relative w-full h-64 md:h-72 bg-[#111111]">
                <StyledGoogleMap />
                {/* Subtle dark overlay for blend */}
                <div className="absolute inset-0 bg-black/[0.08] pointer-events-none" />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* CTA — enhanced button */}
            <a
              href="https://maps.app.goo.gl/vvPgrXHtUwWU7Ea79"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 text-[#facc15] text-[13px] uppercase tracking-[0.15em] font-semibold border border-[#facc15]/25 px-5 py-3 rounded-lg hover:bg-[#facc15] hover:text-[#0a0a0a] hover:border-[#facc15] transition-all duration-300 font-body"
            >
              <MapPin size={15} />
              Ver en Google Maps
              <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </div>

        </div>
      </div>

      {/* Certifications Section — subtle separation */}
      <div className="bg-[#0d0d0d] py-9 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#888] font-bold uppercase tracking-[0.2em] text-[11px] font-display">Certificaciones Internacionales</div>
          <div className="flex gap-4 flex-wrap justify-center md:gap-6">
            <div className="flex items-center gap-3 border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 hover:border-[#FFD100]/25 transition-colors duration-300 cursor-default">
              <ShieldCheck size={16} className="text-white/70" />
              <span className="text-white/80 font-bold text-[10px] tracking-[0.15em]">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-3 border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 hover:border-[#FFD100]/25 transition-colors duration-300 cursor-default">
              <Leaf size={16} className="text-white/70" />
              <span className="text-white/80 font-bold text-[10px] tracking-[0.15em]">ISO 14001:2015</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar — distinct shade */}
      <div className="bg-[#080808] border-t border-white/[0.06] py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#666] text-[10px] uppercase tracking-[0.2em] font-body text-center md:text-left">
            © {new Date().getFullYear()} Construvial S.A. Todos los derechos reservados.
          </p>
          <p className="text-[#555] text-[9px] uppercase tracking-[0.15em] font-body">
            Ingeniería · Construcción · Infraestructura
          </p>
        </div>
      </div>
    </footer>
  )
}
