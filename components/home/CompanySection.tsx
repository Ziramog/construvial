import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/ui/FadeIn"
import { ArrowRight } from "lucide-react"

export function CompanySection() {
  return (
    <section id="empresa" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
          
          {/* Left Column: Text & CTA */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <FadeIn delay={0} direction="up">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] uppercase leading-[0.95] mb-6">
                35 Años Construyendo Argentina
              </h2>
            </FadeIn>
            
            <FadeIn delay={100} direction="none">
              <div className="w-16 h-[2px] bg-[#FFD100] mb-8" />
            </FadeIn>

            <FadeIn delay={200} direction="up">
              <p className="font-body text-[#5a5c5c] text-lg leading-relaxed mb-6">
                Desde 1989, Construvial S.A. se ha consolidado como un referente indiscutido en la ejecución de obras viales, civiles y de gran envergadura.
              </p>
              <p className="font-body text-[#5a5c5c] text-lg leading-relaxed mb-10">
                Afrontamos cada proyecto con la máxima solvencia técnica, respaldados por una flota de equipos de última generación y un equipo humano comprometido con la excelencia estructural y la seguridad.
              </p>
            </FadeIn>

            <FadeIn delay={300} direction="up">
              <Link
                href="/quienes-somos"
                className="inline-flex items-center justify-center gap-3 bg-[#FFD100] text-[#1A1A1A] font-body font-bold text-sm uppercase tracking-wider px-8 py-4 hover:bg-yellow-400 transition-colors duration-200 group self-start"
              >
                Conocer Más
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </FadeIn>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-7/12 relative min-h-[400px] lg:min-h-[600px]">
             <FadeIn delay={200} direction="left" className="h-full w-full">
               <div className="relative h-full w-full bg-[#f6f6f6]">
                 <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                    alt="Equipo de Construvial trabajando en obra"
                    fill
                    className="object-cover"
                 />
                 {/* Decorative block */}
                 <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FFD100] hidden md:block" />
               </div>
             </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
