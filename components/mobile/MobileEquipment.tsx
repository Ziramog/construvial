"use client"

import { FadeIn } from "@/components/ui/FadeIn"

export function MobileEquipment() {
  return (
    <section className="bg-white py-12 px-5">
      <div className="flex flex-col gap-8">
        {/* Overline + accent */}
        <FadeIn direction="up">
          <div className="w-12 h-1 bg-[#facc15] mb-4" />
          <p className="text-[#0a0a0a]/50 text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            40+ equipos propios, listos para operar
          </p>
        </FadeIn>

        {/* Headline */}
        <FadeIn direction="up" delay={100}>
          <h2 className="font-display text-[#0a0a0a] uppercase leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 8vw, 36px)' }}>
            Equipos<br/>
            <span className="text-[#facc15]">listos para operar</span>
          </h2>
        </FadeIn>

        {/* Body */}
        <FadeIn direction="up" delay={200}>
          <p className="text-[#0a0a0a]/60 text-[16px] leading-[1.7]">
            Maquinaria propia certificada — motoniveladoras, excavadoras, compactadores y cargadoras.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={250}>
          <p className="text-[#0a0a0a]/60 text-[16px] leading-[1.7]">
            Sin dependencia de terceros, sin retrasos por disponibilidad. Tu obra avanza cuando lo necesita.
          </p>
        </FadeIn>

        {/* Video - full width */}
        <FadeIn direction="up" delay={300}>
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              src="/media/equipos/desktop/Loader_filling_truck_202604130031.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </FadeIn>

        {/* CTAs */}
        <FadeIn direction="up" delay={400}>
          <div className="flex flex-col gap-3">
            <a href="/equipos"
               className="w-full inline-flex items-center justify-center gap-2 bg-[#0a0a0a] text-white font-bold text-[14px] tracking-wider uppercase px-6 py-[16px] hover:bg-[#facc15] hover:text-[#0a0a0a] active:scale-[0.98] transition-all">
              Ver catálogo →
            </a>
            <a href="https://wa.link/ocm4yr"
               target="_blank"
               rel="noopener noreferrer"
               className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#0a0a0a]/30 text-[#0a0a0a] font-semibold text-[14px] tracking-wider uppercase px-6 py-[16px] hover:border-[#0a0a0a] active:bg-[#0a0a0a]/5 transition-all">
              Consultar disponibilidad
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
