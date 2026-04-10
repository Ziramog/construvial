import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building, Truck, Map as Route, Settings as Blueprint, Compass as Excavator } from "lucide-react"
import { constructMetadata } from "@/lib/metadata"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { SERVICIOS } from "@/lib/constants"

export const metadata: Metadata = constructMetadata({
  title: "Servicios | Construvial S.A.",
  description: "Descubrí nuestros 5 servicios principales: Ingeniería Civil, Movimiento de Suelos, Alquiler de Equipos, Logística y Departamento Técnico.",
})

const iconMap: Record<string, React.ReactNode> = {
  building: <Building size={48} strokeWidth={1.5} />,
  excavator: <Excavator size={48} strokeWidth={1.5} />,
  truck: <Truck size={48} strokeWidth={1.5} />,
  route: <Route size={48} strokeWidth={1.5} />,
  blueprint: <Blueprint size={48} strokeWidth={1.5} />,
}

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://picsum.photos/1920/800?random=20"
            alt="Servicios Construvial"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark/80 -z-10" />
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">
            Nuestros <span className="text-accent">Servicios</span>
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-2xl mx-auto">
            Soluciones integrales para la construcción e infraestructura
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Soluciones Integrales"
            subtitle="Ofrecemos un servicio completo que abarca desde la planificación y el diseño hasta la ejecución y el mantenimiento de obras, con un equipo profesional y equipamiento de última generación."
            centered
          />
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {SERVICIOS.map((servicio, index) => (
              <div
                key={servicio.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:direction-ltr" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-accent/10 w-20 h-20 rounded-2xl flex items-center justify-center text-accent">
                      {iconMap[servicio.icon] || <Building size={48} strokeWidth={1.5} />}
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-primary uppercase">
                      {servicio.titulo}
                    </h2>
                  </div>
                  <p className="font-body text-lg text-muted mb-6 leading-relaxed">
                    {servicio.descripcion}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {servicio.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-body text-text">
                        <span className="text-accent font-bold mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/servicios/${servicio.slug}`}
                    className="inline-flex items-center gap-2 font-body font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Ver más detalles
                    <ArrowRight size={18} />
                  </Link>
                </div>
                <div className="relative h-[350px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={`https://picsum.photos/800/600?random=${30 + index}`}
                    alt={servicio.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            ¿Necesitás un presupuesto?
          </h2>
          <p className="font-body text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contactanos y te asesoramos sobre el servicio que mejor se adapte a tu proyecto.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Contactanos ahora
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
