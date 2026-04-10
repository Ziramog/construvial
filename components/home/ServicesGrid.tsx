import Link from "next/link"
import { Building, Truck, Map as Route, Settings as Blueprint, Compass as Excavator } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { SERVICIOS } from "@/lib/constants"

// Map icons manually to lucide icons
const iconMap: Record<string, React.ReactNode> = {
  building: <Building size={40} strokeWidth={1.5} />,
  excavator: <Excavator size={40} strokeWidth={1.5} />,
  truck: <Truck size={40} strokeWidth={1.5} />,
  route: <Route size={40} strokeWidth={1.5} />,
  blueprint: <Blueprint size={40} strokeWidth={1.5} />,
}

export function ServicesGrid() {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Nuestros Servicios"
          subtitle="Soluciones integrales para la construcción e infraestructura, respaldadas por un equipo de profesionales y equipamiento de última generación."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {SERVICIOS.map((servicio) => (
            <Link href={`/servicios/${servicio.slug}`} key={servicio.slug} className="group">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-accent/30 flex flex-col">
                <div className="text-accent mb-6 bg-accent/10 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {iconMap[servicio.icon] || <Building size={40} strokeWidth={1.5} />}
                </div>
                <h3 className="font-display text-2xl font-bold text-dark mb-4">{servicio.titulo}</h3>
                <p className="font-body text-muted flex-grow">{servicio.descripcion}</p>
                <div className="mt-8 font-body font-semibold text-primary group-hover:text-accent flex items-center gap-2 transition-colors">
                  Ver detalle
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
