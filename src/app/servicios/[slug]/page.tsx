import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { constructMetadata } from "@/lib/metadata"
import { SERVICIOS } from "@/lib/constants"
import { notFound } from "next/navigation"
import { FadeIn } from "@/components/ui/FadeIn"

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

  return (
    <div className="bg-[#1A1A1A] text-white font-body">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1920&q=80`}
            alt={servicio.titulo}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn delay={0} direction="up">
            <Link href="/servicios" className="inline-flex items-center gap-2 text-[#FFD100] hover:text-white mb-6 transition-colors font-body text-sm uppercase tracking-widest">
              <ArrowLeft size={16} />
              Volver a Servicios
            </Link>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase tracking-wider mb-4 drop-shadow-xl">
              {servicio.titulo.split(" ").map((word, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-[#FFD100]">{word} </span> : `${word} `}
                </span>
              ))}
            </h1>
            <p className="font-body text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-lg">
              {servicio.descripcion}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Detail - Warm White Section */}
      <section className="py-24 bg-[#F4F1EC]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeIn delay={0} direction="up">
              <span className="font-body text-[#FFD100] text-xs tracking-[0.3em] uppercase mb-4 block">Detalles del Servicio</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] uppercase leading-tight mb-8">
                {servicio.titulo}
              </h2>
              <p className="font-body text-[#1A1A1A]/70 text-lg leading-relaxed">
                {servicio.descripcion} En Construvial S.A. contamos con más de 35 años de experiencia en este rubro, ejecutando proyectos de gran envergadura para el sector público y privado con la más alta precisión técnica.
              </p>
            </FadeIn>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <FadeIn delay={200} direction="up">
              <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-8 uppercase tracking-wide text-center">
                Áreas de Especialización
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicio.items.map((item, index) => (
                  <div
                    key={item}
                    className="bg-[#1A1A1A] p-8 border border-white/10 hover:border-[#FFD100]/50 transition-all group"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-[#FFD100] font-display text-3xl font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="font-body font-bold text-white text-lg uppercase tracking-wider">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Related Image - Industrial Separator */}
      <section className="relative h-[45vh] min-h-[350px]">
        <Image
          src={`https://images.unsplash.com/photo-1504307651254-19d1b5d0a46b?auto=format&fit=crop&w=1920&q=80`}
          alt={servicio.titulo}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/60" />
        <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-1 h-20 bg-[#FFD100]" />
        </div>
      </section>

      {/* CTA - Final Dark Section */}
      <section className="py-24 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn delay={0} direction="up">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-6 leading-tight">
              ¿Tenés un proyecto <br /> <span className="text-[#FFD100]">en mente?</span>
            </h2>
            <p className="font-body text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Nuestro equipo técnico está listo para brindarte el asesoramiento y presupuesto que tu obra necesita.
            </p>
            <Link
              href="https://wa.me/5493571578542"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#FFD100] text-[#1A1A1A] font-body font-bold py-5 px-10 text-sm tracking-[0.3em] uppercase hover:bg-white transition-all shadow-xl hover:-translate-y-1"
            >
              Consultar por WhatsApp
              <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
