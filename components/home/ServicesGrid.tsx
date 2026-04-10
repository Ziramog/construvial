import Link from "next/link"
import { FadeIn } from "@/components/ui/FadeIn"
import { ArrowRight, Building, Truck, Map as Route, Settings as Blueprint, Compass as Excavator } from "lucide-react"
import { SERVICIOS } from "@/lib/constants"

const iconMap: Record<string, React.ReactNode> = {
  building: <Building size={28} strokeWidth={1.5} />,
  excavator: <Excavator size={28} strokeWidth={1.5} />,
  truck: <Truck size={28} strokeWidth={1.5} />,
  route: <Route size={28} strokeWidth={1.5} />,
  blueprint: <Blueprint size={28} strokeWidth={1.5} />,
}

const serviceNumber = (index: number) => String(index + 1).padStart(2, "0")

export function ServicesGrid() {
  return (
    <section className="py-24 bg-[#0D1B2A]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="mb-16">
          <FadeIn delay={0} direction="left">
            <p className="font-body text-[#E8720C] text-sm tracking-[0.3em] uppercase mb-4">
              Qué hacemos
            </p>
          </FadeIn>
          <FadeIn delay={100} direction="up">
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase leading-[0.95]">
              Nuestros Servicios
            </h2>
          </FadeIn>
          <FadeIn delay={400} direction="none">
            <div className="w-16 h-[2px] bg-[#E8720C] mt-6 animate-expand" />
          </FadeIn>
        </div>

        {/* Numbered editorial list */}
        <div className="flex flex-col">
          {SERVICIOS.map((servicio, index) => (
            <FadeIn
              key={servicio.slug}
              delay={index * 80}
              direction="up"
            >
              <Link href={`/servicios/${servicio.slug}`} className="group block">
                <div className="py-8 md:py-10 border-b border-gray-800 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:bg-white/[0.02] transition-colors duration-300 -mx-4 px-4">
                  {/* Number + icon */}
                  <div className="flex items-center gap-4 md:w-64 shrink-0">
                    <span className="font-display text-6xl text-gray-700 leading-none select-none">
                      {serviceNumber(index)}
                    </span>
                    <span className="text-[#E8720C] opacity-60 group-hover:opacity-100 transition-opacity">
                      {iconMap[servicio.icon] || <Building size={28} strokeWidth={1.5} />}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-3xl text-white uppercase tracking-wide group-hover:text-[#E8720C] transition-colors duration-200">
                      {servicio.titulo}
                    </h3>
                    <p className="font-body text-gray-400 text-sm mt-2 max-w-2xl leading-relaxed">
                      {servicio.descripcion}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="text-[#E8720C] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
