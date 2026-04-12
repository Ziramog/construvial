"use client"

export function CTAFinal() {
  return (
    <section className="bg-[#facc15] py-24 px-6 border-t border-black/5">
      <div className="max-w-4xl mx-auto text-center border border-black/10 p-12 lg:p-20 shadow-2xl bg-[#0a0a0a] relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#facc15]/10 blur-[100px] pointer-events-none" />

        <h2 className="font-display text-white uppercase leading-none mb-6 relative z-10"
            style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
          ¿Tenés un proyecto?
        </h2>
        
        <p className="font-body text-[#facc15] text-lg mb-10 tracking-wide font-medium relative z-10">
          35 años de experiencia respaldan cada presupuesto.<br className="hidden sm:block" />
          <span className="text-white/60">Respondemos en menos de 24 horas.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
          <a href="/contacto"
             className="inline-flex items-center justify-center gap-2 
                        bg-[#facc15] text-[#0a0a0a] font-body font-bold 
                        text-sm tracking-widest uppercase px-10 py-5
                        hover:bg-white transition-colors duration-200">
            Solicitar presupuesto →
          </a>
          <a href="tel:+543571421350"
             className="inline-flex items-center justify-center gap-2 
                        border-2 border-white/20 text-white font-body font-semibold
                        text-sm tracking-widest uppercase px-10 py-5
                        hover:border-[#facc15] hover:text-[#facc15] transition-colors duration-200">
            📞 03571 421350
          </a>
        </div>

      </div>
    </section>
  )
}
