import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react"
import { constructMetadata } from "@/lib/metadata"
import { ContactForm } from "@/components/contact/ContactForm"
import { CONTACT } from "@/lib/constants"
import { FadeIn } from "@/components/ui/FadeIn"

export const metadata: Metadata = constructMetadata({
  title: "Contacto | Construvial S.A.",
  description: "Contactanos por teléfono, email o WhatsApp. Estamos en Río Tercero, Córdoba. Respuesta en menos de 24 horas.",
})

const contactItems = [
  {
    icon: <MapPin size={22} />,
    label: "Dirección",
    content: <><p className="font-body text-white/60 text-sm">Ruta 36 Km 711<br />Almafuerte, Córdoba, Argentina</p></>,
  },
  {
    icon: <Phone size={22} />,
    label: "Teléfonos",
    content: (
      <div className="flex flex-col gap-1">
        <a href={`tel:${CONTACT.phone1.replace(/\s/g, '')}`} className="font-body text-white/60 text-sm hover:text-[#FFD100] transition-colors">{CONTACT.phone1}</a>
        <a href={`tel:${CONTACT.phone2.replace(/\s/g, '')}`} className="font-body text-white/60 text-sm hover:text-[#FFD100] transition-colors">{CONTACT.phone2}</a>
      </div>
    ),
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    content: <a href={`mailto:${CONTACT.email}`} className="font-body text-white/60 text-sm hover:text-[#FFD100] transition-colors">{CONTACT.email}</a>,
  },
  {
    icon: <MessageCircle size={22} />,
    label: "WhatsApp",
    content: <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="font-body text-white/60 text-sm hover:text-[#FFD100] transition-colors">Chateá con nosotros</a>,
  },
  {
    icon: <Clock size={22} />,
    label: "Horario de Atención",
    content: <p className="font-body text-white/60 text-sm">Lunes a Viernes: 8:00 - 17:00 hs<br />Sábados: 8:00 - 12:00 hs</p>,
  },
]

export default function ContactoPage() {
  return (
    <div className="bg-[#1A1A1A] text-white font-body">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-19d1b5d0a46b?auto=format&fit=crop&w=1920&q=80"
            alt="Contacto Construvial"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn delay={0} direction="up">
            <span className="font-body text-[#FFD100] text-xs tracking-[0.3em] uppercase mb-6 block">
              Hablemos
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase tracking-wider mb-4 drop-shadow-xl">
              <span className="text-[#FFD100]">Contacto</span>
            </h1>
            <p className="font-body text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-lg">
              Estamos para ayudarte. Escribinos o llamanos.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section — warm white alternated */}
      <section className="py-20 bg-[#F4F1EC]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeIn delay={0} direction="up">
                <span className="font-body text-[#FFD100] text-xs tracking-[0.3em] uppercase mb-3 block">Formulario</span>
                <h2 className="font-display text-3xl font-bold text-[#1A1A1A] uppercase mb-2">
                  Envianos tu consulta
                </h2>
                <p className="font-body text-black/50 mb-8">
                  Completá el formulario y te responderemos a la brevedad.
                </p>
                <ContactForm />
              </FadeIn>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <FadeIn delay={100} direction="right">
                <h3 className="font-display text-xl font-bold text-[#1A1A1A] uppercase mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-5">
                  {contactItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-4 bg-[#1A1A1A] p-4">
                      <div className="text-[#FFD100] shrink-0 mt-0.5">{item.icon}</div>
                      <div>
                        <p className="font-body font-bold text-white text-sm uppercase tracking-wider mb-1">{item.label}</p>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-8">
                  <h3 className="font-display text-lg font-bold text-[#1A1A1A] uppercase mb-4">Seguinos</h3>
                  <div className="flex gap-3">
                    <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer"
                      className="bg-[#1A1A1A] text-white p-3 hover:bg-[#FFD100] hover:text-[#1A1A1A] transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer"
                      className="bg-[#1A1A1A] text-white p-3 hover:bg-[#FFD100] hover:text-[#1A1A1A] transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer"
                      className="bg-[#1A1A1A] text-white p-3 hover:bg-[#FFD100] hover:text-[#1A1A1A] transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.576!2d-64.2157!3d-32.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDExJzAwLjAiUyA2NMKwMTInNTYuNSJX!5e0!3m2!1ses!2sar!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </section>
    </div>
  )
}
