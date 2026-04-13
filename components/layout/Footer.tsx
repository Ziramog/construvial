"use client"

import { usePathname } from "next/navigation"
import { MapPin, Phone, Mail, ShieldCheck, Leaf } from "lucide-react"
import { CONTACT } from "@/lib/constants"

export function Footer() {
  const pathname = usePathname()
  if (pathname.startsWith('/studio')) return null

  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#141414] w-full border-t-4 border-[#facc15]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">

        {/* Branding + Social Column */}
        <div className="space-y-6">
          <div className="text-2xl font-black text-white mb-2 font-display tracking-tighter">
            CONSTRUVIAL<span className="text-[#facc15]">.</span>
          </div>
          <p className="text-[#c6c6cc] text-sm leading-relaxed font-body">
            Más de 35 años construyendo infraestructura vial en Argentina. Excelencia operativa y compromiso con el desarrollo nacional.
          </p>

          {/* Social Media */}
          <div className="flex gap-3 pt-2">
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:border-[#facc15] hover:text-[#facc15] transition-all duration-300"
               aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:border-[#facc15] hover:text-[#facc15] transition-all duration-300"
               aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:border-[#facc15] hover:text-[#facc15] transition-all duration-300"
               aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Column */}
        <div className="space-y-6">
          <h4 className="text-[#FFD100] font-bold uppercase tracking-widest text-sm font-display border-b border-white/10 pb-2">Contacto</h4>
          <div className="space-y-4 font-body">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[#FFD100] mt-0.5 shrink-0" />
              <span className="text-[#c6c6cc] text-xs leading-tight">{CONTACT.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#facc15] shrink-0" />
              <div className="flex flex-col gap-0.5">
                <a href={`tel:${CONTACT.phone1.replace(/\s/g, '')}`} className="text-[#c6c6cc] text-xs hover:text-white transition-colors">{CONTACT.phone1}</a>
                <a href={`tel:${CONTACT.phone2.replace(/\s/g, '')}`} className="text-[#c6c6cc] text-xs hover:text-white transition-colors">{CONTACT.phone2}</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#facc15] shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="text-[#c6c6cc] text-xs hover:text-white transition-colors">{CONTACT.email}</a>
            </div>
          </div>
        </div>

        {/* Google Maps Column — spans 2 cols */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="text-white/50 font-bold uppercase tracking-widest text-xs font-display border-b border-white/10 pb-2">Ubicación</h4>
          <div className="w-full h-52 md:h-56 overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.7!2d-64.1143!3d-32.1728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9547b4e83e2b0001%3A0x1!2sAngel+V.+Penaloza+1154%2C+Rio+Tercero%2C+Cordoba%2C+Argentina!5e0!3m2!1ses!2sar!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(90%) brightness(80%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Construvial — Ángel V. Peñaloza 1154, Río Tercero"
            />
          </div>
          <a
            href="https://maps.app.goo.gl/vvPgrXHtUwWU7Ea79"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#facc15] text-[10px] uppercase tracking-widest hover:underline font-body"
          >
            <MapPin size={12} />
            Ver en Google Maps →
          </a>
        </div>

      </div>

      {/* Certifications Section */}
      <div className="bg-white/5 py-8 border-t border-white/5">
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
        </div>
      </div>
    </footer>
  )
}
