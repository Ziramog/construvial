"use client"

export function CompanyBand() {
  return (
    <section className="bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#141414] pt-[140px] pb-24 md:pt-[180px] md:pb-32 px-6 border-none relative overflow-hidden">
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row 
                      items-start md:items-center justify-between gap-16 lg:gap-24 relative z-10">
        
        {/* Texto izquierda */}
        <div className="flex-1">
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
          <p className="font-body text-white/70 text-[17px] md:text-lg leading-relaxed max-w-2xl font-medium">
            En CONSTRUVIAL ejecutamos obras con control total sobre cada etapa del proceso. Combinamos ingeniería, maquinaria propia y experiencia operativa para garantizar calidad, eficiencia y cumplimiento en proyectos de infraestructura de cualquier escala.
          </p>
        </div>

        {/* CTA derecha */}
        <div className="flex-shrink-0">
          <a href="/quienes-somos"
             className="inline-flex items-center gap-2 border border-white/30 
                        text-white font-body text-sm tracking-widest uppercase 
                        px-8 py-4 hover:border-[#facc15] hover:text-[#facc15] 
                        transition-all duration-300">
            Conocer la empresa →
          </a>
        </div>
      </div>
    </section>
  )
}
