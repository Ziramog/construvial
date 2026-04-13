"use client"

export function CompanyBand() {
  return (
    <section className="bg-[#111827] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row 
                      items-center justify-between gap-8">
        
        {/* Texto izquierda */}
        <div className="flex-1">
          {/* Overline */}
          <p className="font-body text-[#facc15] text-xs tracking-[0.3em] 
                        uppercase mb-4">
            Río Tercero, Córdoba · Est. 1989
          </p>
          
          {/* Título */}
          <h2 className="font-display text-white uppercase leading-tight mb-4"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
            Ejecución con estándar<br/>
            <span className="text-[#facc15]">industrial</span>
          </h2>
          
          {/* Subtítulo */}
          <p className="font-body text-white/80 text-lg leading-relaxed max-w-xl mb-8 font-medium">
            Convertimos proyectos complejos en ejecuciones eficientes mediante procesos definidos, maquinaria propia y control técnico en cada etapa.
          </p>

          {/* 3 Bloques (Párrafos separados con títulos claros) */}
          <div className="max-w-xl space-y-6">
            <div>
              <h3 className="font-display text-[#facc15] tracking-widest uppercase text-sm mb-1">
                Ingeniería y planificación
              </h3>
              <p className="font-body text-white/60 text-sm leading-relaxed">
                Analizamos cada proyecto para anticipar riesgos, optimizar recursos y asegurar una ejecución precisa desde el inicio.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-[#facc15] tracking-widest uppercase text-sm mb-1">
                Equipos y tecnología
              </h3>
              <p className="font-body text-white/60 text-sm leading-relaxed">
                Operamos con maquinaria propia y equipos certificados, adaptándonos a cada tipo de obra y condición de terreno.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-[#facc15] tracking-widest uppercase text-sm mb-1">
                Control y cumplimiento
              </h3>
              <p className="font-body text-white/60 text-sm leading-relaxed">
                Supervisamos cada etapa con estándares estrictos, garantizando calidad y cumplimiento de plazos.
              </p>
            </div>
          </div>
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
