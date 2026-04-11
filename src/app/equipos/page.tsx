import type { Metadata } from "next"
import { constructMetadata } from "@/lib/metadata"
import { EquiposClient } from "./EquiposClient"

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
    specs: { capacidad: "3m³", peso: "15 Tn", potencia: "—", ano: "2020" },
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/300/600/400",
  },
  {
    nombre: "Retroexcavadora CAT 320",
    tipo: "Vial",
    descripcion: "Excavadora hidráulica de oruga para excavaciones y movimientos de suelo de gran envergadura.",
    specs: { capacidad: "—", peso: "20 Tn", potencia: "162 HP", ano: "2019" },
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/301/600/400",
  },
  {
    nombre: "Rodillo Compactador",
    tipo: "Vial",
    descripcion: "Rodillo vibratorio de tambor liso para compactación de suelos y aglomerados.",
    specs: { capacidad: "—", peso: "12 Tn", potencia: "—", ano: "2019" },
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/302/600/400",
  },
  {
    nombre: "Camión Volcador 20m³",
    tipo: "Transporte",
    descripcion: "Camión volcador de gran capacidad para transporte de áridos y materiales de obra.",
    specs: { capacidad: "20m³", peso: "—", potencia: "420 HP", ano: "2021" },
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/303/600/400",
  },
  {
    nombre: "Camión Grúa",
    tipo: "Transporte",
    descripcion: "Camión equipado con grúa hidráulica para carga y transporte de piezas pesadas.",
    specs: { capacidad: "20 Tn", peso: "—", potencia: "—", ano: "2021" },
    disponibleParaAlquiler: false,
    imagen: "https://picsum.photos/id/304/600/400",
  },
  {
    nombre: "Carretón Vial 40 Tn",
    tipo: "Carretón",
    descripcion: "Carretón de bajo perfil para transporte de maquinaria vial y equipos pesados.",
    specs: { capacidad: "40 Tn", peso: "—", potencia: "—", ano: "2020" },
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/305/600/400",
  },
  {
    nombre: "Carretón Agrícola",
    tipo: "Carretón",
    descripcion: "Carretón especializado para transporte de maquinaria agrícola y cosechadoras.",
    specs: { capacidad: "35 Tn", peso: "—", potencia: "—", ano: "2021" },
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/306/600/400",
  },
  {
    nombre: "Motoniveladora",
    tipo: "Vial",
    descripcion: "Motoniveladora para perfilado de suelos, apertura de cunetas y mantenimiento vial.",
    specs: { capacidad: "—", peso: "—", potencia: "235 HP", ano: "2018" },
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/307/600/400",
  },
  {
    nombre: "Planta de Stabilizado",
    tipo: "Logística",
    descripcion: "Planta móvil para producción de suelo estabilizado en obra.",
    specs: { capacidad: "400 Tn/h", peso: "—", potencia: "—", ano: "2022" },
    disponibleParaAlquiler: true,
    imagen: "https://picsum.photos/id/308/600/400",
  },
]

export default function EquiposPage() {
  return (
    <>
      {/* Hero — with watermark number */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        <span className="absolute font-display text-[20vw] text-white/[0.03] leading-none select-none pointer-events-none">
          40+
        </span>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <p className="font-body text-[#FFD100] text-sm tracking-[0.3em] uppercase mb-6">
            Maquinaria
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wider mb-4 leading-[0.9]">
            Flota de <span className="text-[#FFD100]">40+</span> equipos<br />certificados
          </h1>
          <p className="font-body text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Equipos viales, de transporte y logística disponibles para alquiler.
          </p>
        </div>
      </section>

      {/* Client-side interactive content */}
      <EquiposClient equipos={mockEquipos} />

      {/* CTA */}
      <section className="py-20 bg-[#111111] border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wide mb-4">
            ¿Necesitás equipos para tu obra?
          </h2>
          <p className="font-body text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Contactanos y te asesoramos sobre la disponibilidad y tarifas de nuestra flota.
          </p>
          <a
            href="https://wa.link/ocm4yr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FFD100] text-black font-body font-semibold px-8 py-4 hover:bg-yellow-400 transition-colors duration-200"
          >
            Consultar disponibilidad
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </section>
    </>
  )
}
