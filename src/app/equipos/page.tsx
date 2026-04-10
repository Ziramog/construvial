import type { Metadata } from "next"
import Image from "next/image"
import { constructMetadata } from "@/lib/metadata"
import { SectionHeader } from "@/components/ui/SectionHeader"

export const metadata: Metadata = constructMetadata({
  title: "Equipos | Construvial S.A.",
  description: "Conocé nuestra flota de equipos viales, de transporte y logística. Disponibles para alquiler.",
})

// Mock data - replace with Sanity data when CMS is connected
const mockEquipos = [
  {
    nombre: "Motocargador Frontal",
    tipo: "Vial",
    descripcion: "Equipo para carga frontal de materiales en obras viales y movimientos de suelo.",
    especificaciones: "Capacidad: 3m³ | Peso: 15 Tn | Año: 2020",
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/300/600/400",
  },
  {
    nombre: "Retroexcavadora CAT 320",
    tipo: "Vial",
    descripcion: "Excavadora hidráulica de oruga para excavaciones y movimientos de suelo de gran envergadura.",
    especificaciones: "Peso operativo: 20 Tn | Potencia: 162 HP | Profundidad máx: 6.7m",
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/301/600/400",
  },
  {
    nombre: "Rodillo Compactador",
    tipo: "Vial",
    descripcion: "Rodillo vibratorio de tambro liso para compactación de suelos y aglomerados.",
    especificaciones: "Peso: 12 Tn | Frecuencia: 28/33 Hz | Año: 2019",
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/302/600/400",
  },
  {
    nombre: "Camión Volcador 20m³",
    tipo: "Transporte",
    descripcion: "Camión volcador de gran capacidad para transporte de áridos y materiales de obra.",
    especificaciones: "Capacidad: 20m³ | Motor: 420 HP | Tracción: 8x4",
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/303/600/400",
  },
  {
    nombre: "Camión Grúa",
    tipo: "Transporte",
    descripcion: "Camión equipado con grúa hidráulica para carga y transporte de piezas pesadas.",
    especificaciones: "Capacidad grúa: 20 Tn | Longitud pluma: 24m | Año: 2021",
    disponibleParaAlquiler: false,
    imagen: "https://picsum.photos/id/304/600/400",
  },
  {
    nombre: "Carretón Vial 40 Tn",
    tipo: "Carretón",
    descripcion: "Carretón de bajo perfil para transporte de maquinaria vial y equipos pesados.",
    especificaciones: "Capacidad: 40 Tn | Ejes: 3 | Frenos: ABS",
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/305/600/400",
  },
  {
    nombre: "Carretón Agrícola",
    tipo: "Carretón",
    descripcion: "Carretón especializado para transporte de maquinaria agrícola y cosechadoras.",
    especificaciones: "Capacidad: 35 Tn | Plataforma extensible | Frenos neumáticos",
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/306/600/400",
  },
  {
    nombre: "Motoniveladora",
    tipo: "Vial",
    descripcion: "Motoniveladora para perfilado de suelos, apertura de cunetas y mantenimiento vial.",
    especificaciones: "Potencia: 235 HP | Hoja: 3.6m | Año: 2018",
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/307/600/400",
  },
  {
    nombre: "Planta de Stabilizado",
    tipo: "Logística",
    descripcion: "Planta móvil para producción de suelo estabilizado en obra.",
    especificaciones: "Producción: 400 Tn/h | Tolva: 60m³ | Year: 2022",
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/308/600/400",
  },
]

export default function EquiposPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://picsum.photos/1920/800?random=60"
            alt="Equipos Construvial"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark/80 -z-10" />
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">
            Nuestros <span className="text-accent">Equipos</span>
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-2xl mx-auto">
            Flota completa de maquinaria vial y logística disponible para alquiler
          </p>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Catálogo de Equipos"
            subtitle="Contamos con una amplia flota de maquinaria vial, transporte y logística para tus proyectos."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {mockEquipos.map((equipo, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-accent/30"
              >
                <div className="relative h-52">
                  <Image
                    src={equipo.imagen}
                    alt={equipo.nombre}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {equipo.tipo}
                    </span>
                    {equipo.disponibleParaAlquiler && (
                      <span className="bg-green-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        Disponible
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-dark mb-2">{equipo.nombre}</h3>
                  <p className="font-body text-muted text-sm mb-4">{equipo.descripcion}</p>
                  <div className="bg-light p-3 rounded-lg mb-4">
                    <p className="font-body text-xs text-muted">{equipo.especificaciones}</p>
                  </div>
                  {equipo.disponibleParaAlquiler && (
                    <a
                      href="https://wa.link/ocm4yr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-accent hover:bg-accent/90 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                    >
                      Consultar por WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            ¿Necesitás equipos para tu obra?
          </h2>
          <p className="font-body text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contactanos y te asesoramos sobre la disponibilidad y tarifas de nuestra flota.
          </p>
          <a
            href="https://wa.link/ocm4yr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Consultar disponibilidad
          </a>
        </div>
      </section>
    </>
  )
}
