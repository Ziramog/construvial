import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { constructMetadata } from "@/lib/metadata"
import { FadeIn } from "@/components/ui/FadeIn"

export const metadata: Metadata = constructMetadata({
  title: "Blog y Novedades | Construvial S.A.",
  description: "Próximamente: enterate de las últimas novedades del sector construcción y los proyectos de Construvial S.A.",
})

export default function BlogPage() {
  return (
    <div className="bg-black text-white font-body">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-19d1b5d0a46b?auto=format&fit=crop&w=1920&q=80"
            alt="Blog Construvial"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn delay={0} direction="up">
            <span className="font-body text-[#FFD100] text-xs tracking-[0.3em] uppercase mb-6 block">
              Noticias y Proyectos
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase tracking-wider mb-4 drop-shadow-xl">
              Blog y <span className="text-[#FFD100]">Novedades</span>
            </h1>
            <p className="font-body text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-lg">
              Próximamente: novedades del sector y nuestros proyectos
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn delay={0} direction="up">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 md:p-16 hover:border-[#FFD100]/30 transition-all">
                <div className="w-20 h-1 bg-[#FFD100] mx-auto mb-8" />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-6">
                  Contenido en Preparación
                </h2>
                <p className="font-body text-lg text-gray-400 leading-relaxed mb-8">
                  Estamos preparando contenido relevante y verificado sobre nuestros proyectos,
                  novedades del sector construcción y casos de éxito.
                </p>
                <p className="font-body text-base text-gray-500 mb-10">
                  Mientras tanto, podés conocer nuestros{" "}
                  <Link href="/obras" className="text-[#FFD100] hover:text-white transition-colors font-semibold">
                    proyectos realizados
                  </Link>{" "}
                  o{" "}
                  <Link href="/contacto" className="text-[#FFD100] hover:text-white transition-colors font-semibold">
                    contactarnos
                  </Link>{" "}
                  directamente.
                </p>
                <Link
                  href="https://wa.me/5493571578542"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#FFD100] text-black font-body font-bold text-sm uppercase tracking-wider px-8 py-4 hover:bg-white transition-all shadow-xl"
                >
                  Consultanos por WhatsApp
                  <ArrowRight size={18} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
