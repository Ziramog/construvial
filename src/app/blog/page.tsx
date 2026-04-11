import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { constructMetadata } from "@/lib/metadata"

export const metadata: Metadata = constructMetadata({
  title: "Blog y Novedades | Construvial S.A.",
  description: "Próximamente: enterate de las últimas novedades del sector construcción y los proyectos de Construvial S.A.",
})

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-19d1b5d0a46b?auto=format&fit=crop&w=1920&q=80"
            alt="Blog Construvial"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark/80 -z-10" />
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">
            Blog y <span className="text-accent">Novedades</span>
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-2xl mx-auto">
            Próximamente: novedades del sector y nuestros proyectos
          </p>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white p-12 md:p-16 border border-gray-200 shadow-sm">
              <div className="w-20 h-1 bg-accent mx-auto mb-8" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark uppercase tracking-wide mb-6">
                Contenido en Preparación
              </h2>
              <p className="font-body text-lg text-gray-600 leading-relaxed mb-8">
                Estamos preparando contenido relevante y verificado sobre nuestros proyectos, 
                novedades del sector construcción y casos de éxito.
              </p>
              <p className="font-body text-base text-gray-500 mb-10">
                Mientras tanto, podés conocer nuestros <Link href="/obras" className="text-accent hover:underline font-semibold">proyectos realizados</Link> o <Link href="/contacto" className="text-accent hover:underline font-semibold">contactarnos</Link> directamente.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-accent text-white font-body font-bold text-sm uppercase tracking-wider px-8 py-4 hover:bg-accent/90 transition-colors"
              >
                Contactanos Ahora
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
