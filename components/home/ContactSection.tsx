import { FadeIn } from "@/components/ui/FadeIn"
import { CONTACT } from "@/lib/constants"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-[#F6F6F6]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-12">
          <FadeIn delay={0} direction="up">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] uppercase leading-[0.95] mb-2">
              Solicite Su Presupuesto
            </h2>
          </FadeIn>
          <FadeIn delay={100} direction="none">
            <div className="w-16 h-[2px] bg-[#FFD100] mt-4" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn delay={200} direction="up">
              <form className="bg-white p-8 md:p-12 border border-[#e7e8e8] shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center border-b-2 border-[#1A1A1A]/20 focus-within:border-[#FFD100] transition-colors bg-[#f6f6f6]">
                    <input
                      type="text"
                      placeholder="Nombre Completo"
                      className="w-full bg-transparent px-4 py-4 outline-none font-body text-[#1A1A1A] placeholder:text-[#5a5c5c]"
                      required
                    />
                  </div>
                  <div className="flex items-center border-b-2 border-[#1A1A1A]/20 focus-within:border-[#FFD100] transition-colors bg-[#f6f6f6]">
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="w-full bg-transparent px-4 py-4 outline-none font-body text-[#1A1A1A] placeholder:text-[#5a5c5c]"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center border-b-2 border-[#1A1A1A]/20 focus-within:border-[#FFD100] transition-colors bg-[#f6f6f6] mb-6">
                  <input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="w-full bg-transparent px-4 py-4 outline-none font-body text-[#1A1A1A] placeholder:text-[#5a5c5c]"
                    required
                  />
                </div>

                <div className="flex items-start border-b-2 border-[#1A1A1A]/20 focus-within:border-[#FFD100] transition-colors bg-[#f6f6f6] mb-8">
                  <textarea
                    placeholder="Mensaje o detalle del proyecto"
                    rows={4}
                    className="w-full bg-transparent px-4 py-4 outline-none font-body text-[#1A1A1A] placeholder:text-[#5a5c5c] resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFD100] text-[#1A1A1A] font-body font-bold text-sm uppercase tracking-wider py-5 hover:bg-yellow-400 transition-colors duration-200"
                >
                  Enviar Consulta
                </button>
              </form>
            </FadeIn>
          </div>

          {/* Right Column: Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <FadeIn delay={300} direction="left">
              <div className="bg-[#1A1A1A] text-white p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD100] opacity-10 rounded-bl-full" />
                
                <h3 className="font-display text-3xl uppercase mb-8 text-white relative z-10">
                  Información de Contacto
                </h3>
                
                <ul className="flex flex-col gap-8 relative z-10">
                  <li className="flex items-start gap-4">
                    <div className="bg-[#FFD100] text-[#1A1A1A] p-3">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-body text-sm text-gray-400 uppercase tracking-widest mb-1">Dirección</p>
                      <p className="font-body text-base">{CONTACT.address}</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="bg-[#FFD100] text-[#1A1A1A] p-3">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-body text-sm text-gray-400 uppercase tracking-widest mb-1">Teléfonos</p>
                      <p className="font-body text-base">{CONTACT.phone1}</p>
                      <p className="font-body text-base">{CONTACT.phone2}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="bg-[#FFD100] text-[#1A1A1A] p-3">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-body text-sm text-gray-400 uppercase tracking-widest mb-1">Email</p>
                      <a href={`mailto:${CONTACT.email}`} className="font-body text-base hover:text-[#FFD100] transition-colors">
                        {CONTACT.email}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
