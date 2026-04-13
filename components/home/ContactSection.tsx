import { FadeIn } from "@/components/ui/FadeIn"
import { CONTACT } from "@/lib/constants"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-[#f5f5f4] text-[#0a0a0a] overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="mb-16">
          <FadeIn delay={0} direction="up">
            <span className="font-body text-[#FFD100] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 block text-center font-bold">
              Contacto Técnico
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-[#0a0a0a] uppercase leading-[0.9] text-center mb-8 font-bold">
              Ponerse en <span className="text-[#FFD100]">Contacto</span>
            </h2>
            <div className="w-20 h-[3px] bg-[#FFD100] mx-auto" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* Left Column: Form (7 cols) - Dark Card on Light Background */}
          <div className="lg:col-span-7">
            <FadeIn delay={200} direction="up">
              <form className="bg-[#0a0a0a] p-8 md:p-12 border border-black/5 shadow-2xl relative overflow-hidden group">
                {/* Decorative Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#FFD100] transition-opacity" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <label className="font-body text-[10px] text-white/40 uppercase tracking-widest">Nombre Completo</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border-b border-white/20 px-4 py-3 outline-none font-body text-white focus:border-[#FFD100] transition-colors placeholder:text-white/20"
                      placeholder="Ej: Ing. Juan Pérez"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-[10px] text-white/40 uppercase tracking-widest">Teléfono Directo</label>
                    <input
                      type="tel"
                      className="w-full bg-white/5 border-b border-white/20 px-4 py-3 outline-none font-body text-white focus:border-[#FFD100] transition-colors placeholder:text-white/20"
                      placeholder="+54 351 000 0000"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <label className="font-body text-[10px] text-white/40 uppercase tracking-widest">Correo Corporativo</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border-b border-white/20 px-4 py-3 outline-none font-body text-white focus:border-[#FFD100] transition-colors placeholder:text-white/20"
                    placeholder="ejemplo@empresa.com"
                    required
                  />
                </div>

                <div className="space-y-2 mb-10">
                  <label className="font-body text-[10px] text-white/40 uppercase tracking-widest">Detalles del Proyecto</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border-b border-white/20 px-4 py-3 outline-none font-body text-white focus:border-[#FFD100] transition-colors placeholder:text-white/20 resize-none"
                    placeholder="Describa brevemente su requerimiento..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#facc15] text-[#0a0a0a] font-body font-bold text-sm uppercase tracking-[0.2em] py-5 hover:bg-white transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
                >
                  Enviar Requerimiento
                  <ArrowRight size={20} />
                </button>

                <p className="text-center text-white/30 text-[11px] font-body mt-4 tracking-wide">
                  Te respondemos en menos de 24 horas hábiles.
                </p>
              </form>
            </FadeIn>
          </div>

          {/* Right Column: Contact Info (5 cols) - Dark Card on Light Background */}
          <div className="lg:col-span-5 flex">
            <FadeIn delay={300} direction="left" className="w-full h-full">
              <div className="bg-[#141414] text-white p-8 md:p-12 h-full flex flex-col justify-center border border-black/5 shadow-2xl relative overflow-hidden group">
                <h3 className="font-display text-3xl uppercase mb-12 text-white relative z-10 leading-tight font-bold">
                  Oficinas <span className="text-[#FFD100]">Centrales</span>
                </h3>

                <ul className="flex flex-col gap-10 relative z-10">
                  <li className="flex items-start gap-4">
                    <div className="bg-[#FFD100] text-[#0b0f14] w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-body text-[10px] text-[#FFD100] uppercase tracking-[0.2em] mb-2 font-bold">Ubicación</p>
                      <p className="font-body text-base lg:text-lg leading-snug">{CONTACT.address}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="bg-[#FFD100] text-[#0b0f14] w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-body text-[10px] text-[#FFD100] uppercase tracking-[0.2em] mb-2 font-bold">Líneas Directas</p>
                      <p className="font-body text-base lg:text-lg font-bold">{CONTACT.phone1}</p>
                      <p className="font-body text-base lg:text-lg font-bold">{CONTACT.phone2}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="bg-[#facc15] text-[#0a0a0a] w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-body text-[10px] text-[#FFD100] uppercase tracking-[0.2em] mb-2 font-bold">Consultas Generales</p>
                      <a href={`mailto:${CONTACT.email}`} className="font-body text-base lg:text-lg hover:text-[#FFD100] transition-colors break-all underline decoration-[#FFD100]/30 underline-offset-4">
                        {CONTACT.email}
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="mt-16 pt-8 border-t border-white/5 text-[10px] font-body text-white/30 uppercase tracking-widest font-bold">
                  Atención Lunes a Viernes: 08:30 - 18:30 hs
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
