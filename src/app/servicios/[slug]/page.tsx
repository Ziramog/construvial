import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { constructMetadata } from "@/lib/metadata"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { SERVICIOS } from "@/lib/constants"
import { notFound } from "next/navigation"

interface ServicioDetallePageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return SERVICIOS.map((servicio) => ({ slug: servicio.slug }))
}

export async function generateMetadata({ params }: ServicioDetallePageProps): Promise<Metadata> {
  const servicio = SERVICIOS.find((s) => s.slug === params.slug)
  if (!servicio) return { title: "Servicio no encontrado" }
  
  return constructMetadata({
    title: `${servicio.titulo} | Construvial S.A.`,
    description: servicio.descripcion,
  })
}

export default function ServicioDetallePage({ params }: ServicioDetallePageProps) {
  const servicio = SERVICIOS.find((s) => s.slug === params.slug)
  
  if (!servicio) {
    notFound()
  }

  const randomId = SERVICIOS.indexOf(servicio) + 40

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src={`https://picsum.photos/1920/800?random=${randomId}`}
            alt={servicio.titulo}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark/80 -z-10" />
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">
            {servicio.titulo.split(" ").map((word, i) => (
              <span key={i}>
                {i === 1 ? <span className="text-accent">{word} </span> : `${word} `}
              </span>
            ))}
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-2xl mx-auto">
            {servicio.descripcion}
          </p>
        </div>
      </section>

      {/* Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader title={servicio.titulo} subtitle="Nuestros servicios especializados" />
            
            <div className="prose prose-lg max-w-none mt-8">
              <p className="font-body text-text text-lg leading-relaxed">
                {servicio.descripcion} En Construvial S.A. contamos con más de 35 años de experiencia en este rubro, ejecutando proyectos de gran envergadura para el sector público y privado.
              </p>

              <h3 className="font-display text-2xl font-bold text-primary mt-12 mb-6 uppercase">
                Especialidades
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicio.items.map((item, index) => (
                  <div
                    key={item}
                    className="bg-light p-6 rounded-lg border border-gray-100 hover:border-accent/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                        {index + 1}
                      </span>
                      <span className="font-body font-medium text-text">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Image */}
      <section className="relative h-[400px]">
        <Image
          src={`https://picsum.photos/1920/600?random=${randomId + 10}`}
          alt={servicio.titulo}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/60" />
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            ¿Te interesa este servicio?
          </h2>
          <p className="font-body text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contactanos para recibir asesoramiento personalizado y un presupuesto adaptado a tu proyecto.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Solicitar presupuesto
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
