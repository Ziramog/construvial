"use client"

import { FadeIn } from "@/components/ui/FadeIn"

export function MobileServices() {
  return (
    <section className="bg-[#0a0a0a] py-12 px-5">
      <div className="flex flex-col gap-8">
        {/* Overline + accent */}
        <FadeIn direction="up">
          <div className="w-12 h-1 bg-[#facc15] mb-4" />
          <p className="text-[#facc15] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Servicios integrales
          </p>
        </FadeIn>

        {/* Headline */}
        <FadeIn direction="up" delay={100}>
          <h2 className="font-display text-white uppercase leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 8vw, 36px)' }}>
            Todo lo que<br/>
            <span className="text-[#facc15]">tu obra necesita</span>
          </h2>
        </FadeIn>

        {/* Body */}
        <FadeIn direction="up" delay={200}>
          <p className="text-white/60 text-[16px] leading-[1.7]">
            Ingeniería civil, movimiento de suelos, equipos certificados y logística especializada.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={250}>
          <p className="text-white/60 text-[16px] leading-[1.7]">
            Un solo interlocutor, menos coordinación, más eficiencia en cada etapa de tu proyecto.
          </p>
        </FadeIn>

        {/* Video */}
        <FadeIn direction="up" delay={300}>
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              src="/media/servicios/desktop/construvial.mov"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>
        </FadeIn>

        {/* CTAs */}
        <FadeIn direction="up" delay={400}>
          <div className="flex flex-col gap-3">
            <a href="/servicios"
               className="w-full inline-flex items-center justify-center gap-2 bg-[#facc15] text-[#0a0a0a] font-bold text-[14px] tracking-wider uppercase px-6 py-[16px] hover:bg-white active:bg-white/90 transition-colors">
              Ver servicios →
            </a>
            <a href="https://wa.link/ocm4yr"
               target="_blank"
               rel="noopener noreferrer"
               className="w-full inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold text-[14px] tracking-wider uppercase px-6 py-[16px] hover:border-white active:bg-white/10 transition-all">
              Consultar proyecto
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
