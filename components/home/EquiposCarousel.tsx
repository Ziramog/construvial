"use client"

export function EquiposCarousel() {
  return (
    <section className="relative bg-white py-24 px-6">
      {/* Smooth transition FROM the black Servicios section above */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
      {/* Smooth transition TO the black Obras section below */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left — Video (alternated from ServicesCards) */}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right — Text */}
        <div className="flex flex-col items-start">
          <div className="w-16 h-1 bg-[#facc15] mb-6" />
          <p className="font-body text-[#0a0a0a]/50 text-xs tracking-[0.3em] uppercase mb-4 font-bold">
            Flota Propia
          </p>
          <h2 className="font-display text-[#0a0a0a] uppercase leading-none mb-8"
              style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
            Equipos<br/>
            <span className="text-[#facc15]">Certificados</span>
          </h2>
          <p className="font-body text-[#0a0a0a]/60 text-[17px] leading-relaxed mb-10 max-w-lg">
            Operamos con flota propia de maquinaria pesada certificada — motoniveladoras, excavadoras, compactadores, cargadoras y carretones adaptados a cada tipo de obra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/equipos"
               className="inline-flex items-center justify-center gap-2 bg-[#0a0a0a] text-white
                          font-body font-semibold text-sm tracking-widest uppercase
                          px-8 py-4 hover:bg-[#facc15] hover:text-[#0a0a0a] transition-colors">
              Ver catálogo completo →
            </a>
            <a href="https://wa.link/ocm4yr"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 border border-[#0a0a0a]/30 text-[#0a0a0a]
                          font-body text-sm tracking-widest uppercase
                          px-8 py-4 hover:border-[#0a0a0a] transition-colors">
              Consultar disponibilidad
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
