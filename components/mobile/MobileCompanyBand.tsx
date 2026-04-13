"use client"

import { FadeIn } from "@/components/ui/FadeIn"

export function MobileCompanyBand() {
  return (
    <section className="bg-[#0a0a0a] py-12 px-5">
      <div className="flex flex-col gap-8">
        {/* Accent line + overline */}
        <FadeIn direction="up">
          <div className="w-12 h-1 bg-[#facc15] mb-4" />
          <p className="text-[#facc15] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Control total de principio a fin
          </p>
        </FadeIn>

        {/* Headline */}
        <FadeIn direction="up" delay={100}>
          <h2 className="font-display text-white uppercase leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 8vw, 36px)' }}>
            Ejecución eficiente<br/>sin intermediarios
          </h2>
        </FadeIn>

        {/* Body text - short blocks */}
        <FadeIn direction="up" delay={200}>
          <p className="text-white/70 text-[16px] leading-[1.7]">
            Controlamos cada etapa del proceso: ingeniería propia, maquinaria sin terceros y experiencia operativa comprobada.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={250}>
          <p className="text-white/70 text-[16px] leading-[1.7]">
            Así garantizamos obras a tiempo, dentro del presupuesto y con la calidad que exigís.
          </p>
        </FadeIn>

        {/* Image - full width with border radius */}
        <FadeIn direction="up" delay={300}>
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/soluciones-integradas/01.png"
              alt="Proyecto Construvial"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </FadeIn>

        {/* CTA link */}
        <FadeIn direction="up" delay={400}>
          <a href="/quienes-somos"
             className="inline-flex items-center gap-3 text-white text-[14px] tracking-[0.15em] uppercase font-semibold hover:text-[#facc15] transition-colors py-2">
            <span className="border-b border-white/30 pb-1">Conocer la empresa</span>
            <span className="text-lg">→</span>
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
