import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/ui/FadeIn"
import { ArrowRight } from "lucide-react"

export function CompanySection() {
  return (
    <section id="empresa" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#141414] text-white overflow-hidden relative">
      {/* Background Detail */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0a0a0a]/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column: Text & CTA */}
          <div className="w-full lg:w-1/2">
            <FadeIn delay={0} direction="up">
              <span className="font-body text-[#facc15] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 block">
                Nuestra Historia
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white uppercase leading-[0.9] mb-8 font-bold">
                35 Años <br /> <span className="text-[#facc15]">Construyendo</span> <br /> Argentina
              </h2>
              <div className="w-20 h-[3px] bg-[#facc15] mb-12" />
            </FadeIn>

            <FadeIn delay={200} direction="up">
              <p className="font-body text-white/60 text-lg leading-relaxed mb-6">
                Desde 1989, Construvial S.A. se ha consolidado como un referente indiscutido en la ejecución de obras viales, civiles y de gran envergadura.
              </p>
              <p className="font-body text-white/60 text-lg leading-relaxed mb-10">
                Afrontamos cada proyecto con la máxima solvencia técnica, respaldados por una flota de equipos de última generación y un equipo humano comprometido con la excelencia estructural y la seguridad técnica.
              </p>
            </FadeIn>

            <FadeIn delay={300} direction="up">
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/quienes-somos"
                  className="inline-flex items-center justify-center gap-3 bg-[#facc15] text-[#0a0a0a] font-body font-bold text-sm uppercase tracking-widest px-10 py-5 hover:bg-white transition-all shadow-xl hover:-translate-y-1 group"
                >
                  Nuestra Trayectoria
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Image with Industrial Design */}
          <div className="w-full lg:w-1/2">
             <FadeIn delay={400} direction="left">
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-3 shadow-2xl">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                       src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1200&q=80"
                       alt="Equipo de Construvial trabajando en obra"
                       fill
                       className="object-cover brightness-90 hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-1 -right-1 w-32 h-32 border-b-4 border-r-4 border-[#facc15]/30 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
             </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
