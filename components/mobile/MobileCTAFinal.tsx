"use client"

export function MobileCTAFinal() {
  return (
    <section className="bg-[#facc15] py-16 px-5">
      <div className="bg-[#0a0a0a] p-8 shadow-2xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#facc15]/10 blur-[80px] pointer-events-none" />

        {/* Headline */}
        <h2 className="font-display text-white uppercase leading-[1.05] mb-6 relative z-10 text-center"
            style={{ fontSize: 'clamp(28px, 8vw, 36px)' }}>
          ¿TENÉS UN PROYECTO?
        </h2>

        {/* Content */}
        <div className="relative z-10 text-center mb-8">
          <p className="text-[#facc15] text-[16px] mb-6 tracking-wide font-semibold">
            Hacelo realidad con quien ya entregó<br/>500+ obras en 35 años.
          </p>
          
          <ul className="text-white/90 text-[14px] text-left inline-flex flex-col space-y-3 mx-auto">
            <li className="flex items-center gap-3">
              <span className="text-[#facc15] font-bold text-base">✓</span> Presupuesto sin compromiso
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#facc15] font-bold text-base">✓</span> Respuesta en menos de 24 hs
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#facc15] font-bold text-base">✓</span> Sin intermediarios
            </li>
          </ul>
        </div>

        {/* CTAs - full width, thumb-friendly */}
        <div className="flex flex-col gap-3 relative z-10">
          <a href="/contacto"
             className="w-full inline-flex items-center justify-center gap-2
                        bg-[#facc15] text-[#0a0a0a] font-bold
                        text-[15px] tracking-wider uppercase px-6 py-[16px]
                        hover:bg-white active:bg-white/90 transition-colors">
            SOLICITAR PRESUPUESTO →
          </a>
        </div>
      </div>
    </section>
  )
}
