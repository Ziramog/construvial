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
            Construimos la infraestructura<br/>
            <span className="text-[#facc15]">que Argentina necesita.</span>
          </h2>
          
          {/* Descripción — breve, contundente */}
          <p className="font-body text-white/60 text-base leading-relaxed 
                        max-w-xl">
            Empresa constructora especializada en obras viales, civiles, 
            metálicas y electromecánicas. Sector público y privado. 
            500 obras ejecutadas en 40 ciudades del país.
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
