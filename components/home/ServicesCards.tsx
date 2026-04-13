"use client"

export function ServicesCards() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left — Text */}
        <div className="flex flex-col items-start">
          <div className="w-16 h-1 bg-[#facc15] mb-6" />
          <p className="font-body text-[#facc15] text-xs tracking-[0.3em] uppercase mb-4 font-bold">
            Nuestras Capacidades
          </p>
          <h2 className="font-display text-white uppercase leading-none mb-8"
              style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
            Servicios<br/>
            <span className="text-[#facc15]">Integrales</span>
          </h2>
          <p className="font-body text-white/60 text-[17px] leading-relaxed mb-10 max-w-lg">
            Desde ingeniería civil y movimiento de suelos hasta alquiler de equipos y logística especializada. Ejecutamos proyectos de infraestructura de cualquier escala con flota propia y equipos certificados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/servicios/ingenieria-civil"
               className="inline-flex items-center justify-center gap-2 bg-[#facc15] text-[#0a0a0a]
                          font-body font-semibold text-sm tracking-widest uppercase
                          px-8 py-4 hover:bg-white transition-colors">
              Ver todos los servicios →
            </a>
            <a href="https://wa.link/ocm4yr"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 border border-white/30 text-white
                          font-body text-sm tracking-widest uppercase
                          px-8 py-4 hover:border-white transition-colors">
              Consultar proyecto
            </a>
          </div>
        </div>

        {/* Right — Video */}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  )
}
