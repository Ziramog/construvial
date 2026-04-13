"use client"

export function CompanyBand() {
  const collageImages = [
    { src: "/media/soluciones-integradas/01.png", aspect: "aspect-[4/5]" },
    { src: "/media/soluciones-integradas/02.png", aspect: "aspect-[1/1]" },
    { src: "/media/soluciones-integradas/03.png", aspect: "aspect-[1/1]" },
    { src: "/media/soluciones-integradas/04.png", aspect: "aspect-[4/5]" },
  ]

  return (
    <section className="bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#141414] pt-[140px] pb-32 md:pt-[180px] md:pb-40 px-6 border-none relative overflow-hidden">
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 items-center">
        
        {/* Texto izquierda */}
        <div className="flex flex-col items-start lg:pr-12">
          
          {/* Accent Line */}
          <div className="w-16 h-1 bg-[#facc15] mb-6" />

          {/* Overline */}
          <p className="font-body text-[#facc15] text-xs tracking-[0.3em]
                        uppercase mb-8 font-bold">
            Control total de principio a fin
          </p>

          {/* Título unificado */}
          <h2 className="font-display text-white uppercase leading-[1.05] mb-10"
              style={{ fontSize: 'clamp(44px, 5.5vw, 72px)' }}>
            Ejecución eficiente<br className="hidden lg:block" /> sin intermediarios
          </h2>

          {/* Párrafo unificado */}
          <p className="font-body text-white/70 text-[17px] md:text-lg leading-relaxed font-medium mb-12">
            Controlamos cada etapa del proceso: ingeniería propia, maquinaria sin terceros y experiencia operativa comprobada. Así garantizamos obras a tiempo, dentro del presupuesto y con la calidad que exigís.
          </p>

          {/* CTA Solo texto */}
          <a href="/quienes-somos"
             className="inline-flex items-center gap-3 text-white font-body text-sm tracking-widest uppercase hover:text-[#facc15] transition-colors duration-300 group">
            <span className="border-b border-white/30 group-hover:border-[#facc15] pb-1 transition-colors">Conocer la empresa</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Collage derecha — 2 columnas, offset vertical */}
        <div className="grid grid-cols-2 gap-3 lg:gap-4 lg:pl-8">
          {/* Columna izquierda — desplazada hacia abajo */}
          <div className="flex flex-col gap-3 lg:gap-4 mt-16">
            <div className={`relative w-full ${collageImages[0].aspect} overflow-hidden rounded-sm`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={collageImages[0].src}
                alt="Proyecto Construvial 1"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className={`relative w-full ${collageImages[1].aspect} overflow-hidden rounded-sm`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={collageImages[1].src}
                alt="Proyecto Construvial 2"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Columna derecha */}
          <div className="flex flex-col gap-3 lg:gap-4">
            <div className={`relative w-full ${collageImages[2].aspect} overflow-hidden rounded-sm`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={collageImages[2].src}
                alt="Proyecto Construvial 3"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className={`relative w-full ${collageImages[3].aspect} overflow-hidden rounded-sm`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={collageImages[3].src}
                alt="Proyecto Construvial 4"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
