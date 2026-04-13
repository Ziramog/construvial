"use client"

export function ObrasSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left — Video */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm order-2 lg:order-1">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src="/media/obras/desktop/obra.mov"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right — Text */}
        <div className="flex flex-col items-start order-1 lg:order-2">
          <div className="w-16 h-1 bg-[#facc15] mb-6" />
          <p className="font-body text-[#0a0a0a]/50 text-xs tracking-[0.3em] uppercase mb-4 font-bold">
            Portafolio
          </p>
          <h2 className="font-display text-[#0a0a0a] uppercase leading-none mb-6"
              style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
            Obras
          </h2>
          <h3 className="font-display text-[#0a0a0a]/70 uppercase leading-tight mb-8"
              style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}>
            Proyectos que definen nuestro estándar
          </h3>
          <p className="font-body text-[#0a0a0a]/60 text-[17px] leading-relaxed mb-10 max-w-lg">
            Cada obra es el resultado de planificación precisa, ejecución eficiente y control total en cada etapa. Desde movimientos de gran escala hasta desarrollos estructurales complejos, entregamos resultados que cumplen y superan las exigencias del sector.
          </p>
          <a href="/obras"
             className="inline-flex items-center gap-3 text-[#0a0a0a] font-body text-sm tracking-widest uppercase hover:text-[#facc15] transition-colors duration-300 group">
            <span className="border-b border-[#0a0a0a]/30 group-hover:border-[#facc15] pb-1 transition-colors">Explorar proyectos</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}
