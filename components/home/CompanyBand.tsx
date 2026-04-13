"use client"

export function CompanyBand() {
  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#0a0a0a]/90 py-20 px-6 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row 
                      items-center justify-between gap-12 relative z-10">
        
        {/* Texto izquierda */}
        <div className="flex-1">
          {/* Overline */}
          <p className="font-body text-[#facc15] text-xs tracking-[0.3em] 
                        uppercase mb-6 font-bold">
            Río Tercero, Córdoba · Est. 1989
          </p>
          
          {/* Título unificado */}
          <h2 className="font-display text-white uppercase leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
            Soluciones integradas<br className="hidden md:block" /> para proyectos complejos
          </h2>
          
          {/* Párrafo unificado */}
          <p className="font-body text-white/70 text-[17px] leading-relaxed max-w-2xl font-medium">
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
