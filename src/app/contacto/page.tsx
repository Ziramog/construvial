import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react"
import { constructMetadata } from "@/lib/metadata"
import { ContactForm } from "@/components/contact/ContactForm"
import { CONTACT } from "@/lib/constants"

export const metadata: Metadata = constructMetadata({
  title: "Contacto | Construvial S.A.",
  description: "Contactanos por teléfono, email o WhatsApp. Estamos en Río Tercero, Córdoba. Respuesta en menos de 24 horas.",
})

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://picsum.photos/1920/800?random=80"
            alt="Contacto Construvial"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark/80 -z-10" />
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">
            <span className="text-accent">Contacto</span>
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-2xl mx-auto">
            Estamos para ayudarte. Escribinos o llamanos.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-primary uppercase mb-2">
                Envianos tu consulta
              </h2>
              <p className="font-body text-muted mb-8">
                Completá el formulario y te responderemos a la brevedad.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold text-primary uppercase mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-text">Dirección</p>
                      <p className="font-body text-muted text-sm">
                        Ángel V. Peñaloza 1154<br />
                        Río Tercero, Córdoba, Argentina
                      </p>
                    </div>
                  </div>

                  {/* Phones */}
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-text">Teléfonos</p>
                      <div className="flex flex-col gap-1">
                        <a href={`tel:${CONTACT.phone1.replace(/\s/g, '')}`} className="font-body text-muted text-sm hover:text-accent transition-colors">
                          {CONTACT.phone1}
                        </a>
                        <a href={`tel:${CONTACT.phone2.replace(/\s/g, '')}`} className="font-body text-muted text-sm hover:text-accent transition-colors">
                          {CONTACT.phone2}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-text">Email</p>
                      <a href={`mailto:${CONTACT.email}`} className="font-body text-muted text-sm hover:text-accent transition-colors">
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <MessageCircle className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-text">WhatsApp</p>
                      <a
                        href={CONTACT.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-muted text-sm hover:text-accent transition-colors"
                      >
                        Chateá con nosotros
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-text">Horario de Atención</p>
                      <p className="font-body text-muted text-sm">
                        Lunes a Viernes: 8:00 - 17:00 hs<br />
                        Sábados: 8:00 - 12:00 hs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-display text-xl font-bold text-primary uppercase mb-4">
                  Seguinos
                </h3>
                <div className="flex gap-4">
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark text-white p-3 rounded-full hover:bg-accent transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href={CONTACT.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark text-white p-3 rounded-full hover:bg-accent transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
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
    </>
  )
}
