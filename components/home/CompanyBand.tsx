"use client"

import Image from "next/image"

export function CompanyBand() {
  return (
    <section className="bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#141414] pt-[140px] pb-24 md:pt-[180px] md:pb-32 px-6 border-none relative overflow-hidden">
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 items-center">
        
        {/* Texto izquierda */}
        <div className="flex flex-col items-start lg:pr-12">
          
          {/* Accent Line */}
          <div className="w-16 h-1 bg-[#facc15] mb-6" />

          {/* Overline */}
          <p className="font-body text-[#facc15] text-xs tracking-[0.3em] 
                        uppercase mb-8 font-bold">
            Río Tercero, Córdoba · Est. 1989
          </p>
          
          {/* Título unificado */}
          <h2 className="font-display text-white uppercase leading-[1.05] mb-10"
              style={{ fontSize: 'clamp(44px, 5.5vw, 72px)' }}>
            Soluciones integradas<br className="hidden lg:block" /> para proyectos complejos
          </h2>
          
          {/* Párrafo unificado */}
          <p className="font-body text-white/70 text-[17px] md:text-lg leading-relaxed font-medium mb-12">
            En CONSTRUVIAL ejecutamos obras con control total sobre cada etapa del proceso. Combinamos ingeniería, maquinaria propia y experiencia operativa para garantizar calidad, eficiencia y cumplimiento en proyectos de infraestructura de cualquier escala.
          </p>

          {/* CTA Solo texto */}
          <a href="/quienes-somos"
             className="inline-flex items-center gap-3 text-white font-body text-sm tracking-widest uppercase hover:text-[#facc15] transition-colors duration-300 group">
            <span className="border-b border-white/30 group-hover:border-[#facc15] pb-1 transition-colors">Conocer la empresa</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Collage derecha */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6 lg:pl-12">
          {/* Columna Izquierda del collage (Offset) */}
          <div className="flex flex-col gap-4 lg:gap-6 mt-12 lg:mt-24">
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden">
              <Image 
                src="/media/soluciones-integradas/01.png" 
                alt="Proyecto Construvial 1" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full aspect-[1/1] rounded-sm overflow-hidden">
              <Image 
                src="/media/soluciones-integradas/02.png" 
                alt="Proyecto Construvial 2" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
          
          {/* Columna Derecha del collage */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="relative w-full aspect-[1/1] rounded-sm overflow-hidden">
              <Image 
                src="/media/soluciones-integradas/03.png" 
                alt="Proyecto Construvial 3" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden">
              <Image 
                src="/media/soluciones-integradas/04.png" 
                alt="Proyecto Construvial 4" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
