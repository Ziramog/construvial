import { FadeIn } from "@/components/ui/FadeIn"
import { CLIENTES } from "@/lib/constants"

export function ClientLogos() {
  const featuredClients = ["YPF", "INVAP", "NASA", "Bunge", "Pan American Energy", "Transener"]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#0D1B2A]">
      <div className="container mx-auto px-4 sm:px-6 md:px-6">
        {/* Section header */}
        <div className="mb-10 sm:mb-12 md:mb-16 max-w-3xl">
          <FadeIn delay={0} direction="left">
            <p className="font-body text-[#FFD100] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Confianza
            </p>
          </FadeIn>
          <FadeIn delay={100} direction="up">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white uppercase leading-[0.95] mb-4 sm:mb-6">
              Las empresas más importantes del país confían en nosotros
            </h2>
          </FadeIn>
          <FadeIn delay={400} direction="none">
            <div className="w-16 h-[2px] bg-[#FFD100] mb-4 sm:mb-6" />
          </FadeIn>
          <FadeIn delay={200} direction="up">
            <p className="font-body text-gray-400 text-sm sm:text-base lg:text-lg">
              <span className="text-white font-semibold">{featuredClients.join(" · ")}</span>
              {" "}y {CLIENTES.length - featuredClients.length} más.
            </p>
          </FadeIn>
        </div>

        {/* Client tiles - Improved visual design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
          {CLIENTES.map((cliente, idx) => (
            <FadeIn key={cliente} delay={idx * 20} direction="up">
              <div className="group border border-white/10 p-4 sm:p-5 flex items-center justify-center hover:border-[#FFD100]/50 hover:bg-[#FFD100]/5 transition-all duration-300 cursor-default">
                <span className="font-display text-base sm:text-lg text-gray-400 group-hover:text-white transition-colors duration-300 text-center leading-tight font-medium tracking-wide">
                  {cliente}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
