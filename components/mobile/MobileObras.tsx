"use client"

import { FadeIn } from "@/components/ui/FadeIn"

export function MobileObras() {
  return (
    <section className="bg-[#0a0a0a] py-12 px-5">
      <div className="flex flex-col gap-8">
        {/* Overline + accent */}
        <FadeIn direction="up">
          <div className="w-12 h-1 bg-[#facc15] mb-4" />
          <p className="text-[#facc15] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Obras ejecutadas
          </p>
        </FadeIn>

        {/* Headline */}
        <FadeIn direction="up" delay={100}>
          <h2 className="font-display text-white uppercase leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 8vw, 36px)' }}>
            Obras que<br/>
            <span className="text-[#facc15]">hablan por sí solas</span>
          </h2>
        </FadeIn>

        {/* Body */}
        <FadeIn direction="up" delay={200}>
          <p className="text-white/60 text-[16px] leading-[1.7]">
            Planificación precisa, ejecución eficiente y control total en cada etapa.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={250}>
          <p className="text-white/60 text-[16px] leading-[1.7]">
            Más de 500 obras entregadas a tiempo, cumpliendo plazos y superando los estándares del sector.
          </p>
        </FadeIn>

        {/* Video - full width */}
        <FadeIn direction="up" delay={300}>
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              src="/media/obras/desktop/obra.mov"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn direction="up" delay={400}>
          <a href="/obras"
             className="inline-flex items-center gap-3 text-white text-[14px] tracking-[0.15em] uppercase font-semibold hover:text-[#facc15] transition-colors py-2">
            <span className="border-b border-white/30 pb-1">Ver proyectos</span>
            <span className="text-lg">→</span>
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
