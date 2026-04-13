"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface Equipo {
  nombre: string
  tipo: string
  descripcion: string
  specs: { capacidad: string; peso: string; potencia: string; ano: string }
  disponibleParaAlquiler: boolean
  imagen: string
}

const tipos = ["Todos", "Vial", "Transporte", "Carretón", "Logística"]

function EquipoRow({ equipo, index }: { equipo: Equipo; index: number }) {
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(mq.matches)
  }, [])

  const RowContent = () => (
    <div className="group border-b border-black/10 py-8 lg:py-10 hover:bg-black/[0.03] transition-colors duration-300 -mx-4 md:-mx-6 px-4 md:px-6">
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-10">
        {/* Image */}
        <div className="relative w-full lg:w-[35%] aspect-[16/10] lg:aspect-auto overflow-hidden">
          <Image
            src={equipo.imagen}
            alt={equipo.nombre}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-[#FFD100]/20 text-[#FFD100] text-xs font-bold uppercase tracking-wider px-2.5 py-1">
                    {equipo.tipo}
                  </span>
                  {equipo.disponibleParaAlquiler ? (
                    <span className="bg-[#16A34A]/20 text-[#16A34A] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                      Disponible
                    </span>
                  ) : (
                    <span className="bg-gray-700/50 text-gray-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                      No disponible
                    </span>
                  )}
                </div>
                <h3 className="font-display text-3xl text-[#1A1A1A] uppercase leading-tight">
                  {equipo.nombre}
                </h3>
                <p className="font-body text-black/50 text-sm mt-2 max-w-xl leading-relaxed">
                  {equipo.descripcion}
                </p>
              </div>
            </div>

            {/* Specs grid — monospace for technical feel */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {equipo.specs.capacidad !== "—" && (
                <div>
                  <p className="font-body text-black/40 text-xs uppercase tracking-wider">Capacidad</p>
                  <p className="font-mono text-[#1A1A1A] text-sm mt-1">{equipo.specs.capacidad}</p>
                </div>
              )}
              {equipo.specs.peso !== "—" && (
                <div>
                  <p className="font-body text-black/40 text-xs uppercase tracking-wider">Peso</p>
                  <p className="font-mono text-[#1A1A1A] text-sm mt-1">{equipo.specs.peso}</p>
                </div>
              )}
              {equipo.specs.potencia !== "—" && (
                <div>
                  <p className="font-body text-black/40 text-xs uppercase tracking-wider">Potencia</p>
                  <p className="font-mono text-[#1A1A1A] text-sm mt-1">{equipo.specs.potencia}</p>
                </div>
              )}
              {equipo.specs.ano !== "—" && (
                <div>
                  <p className="font-body text-black/40 text-xs uppercase tracking-wider">Año</p>
                  <p className="font-mono text-[#1A1A1A] text-sm mt-1">{equipo.specs.ano}</p>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          {equipo.disponibleParaAlquiler && (
            <div className="mt-6">
              <Link
                href="https://wa.link/ocm4yr"
                target="_blank"
                className="link-underline inline-flex items-center gap-2 text-[#FFD100] font-body text-sm hover:text-yellow-400 transition-colors group/link"
              >
                Consultar disponibilidad
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return isReducedMotion ? (
    <RowContent />
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
    >
      <RowContent />
    </motion.div>
  )
}

export function EquiposClient({ equipos }: { equipos: Equipo[] }) {
  const [activeTipo, setActiveTipo] = useState("Todos")

  const filteredEquipos =
    activeTipo === "Todos"
      ? equipos
      : equipos.filter((e) => e.tipo === activeTipo)

  // Count per type
  const counts = tipos.reduce((acc, tipo) => {
    if (tipo === "Todos") {
      acc[tipo] = equipos.length
    } else {
      acc[tipo] = equipos.filter((e) => e.tipo === tipo).length
    }
    return acc
  }, {} as Record<string, number>)

  return (
    <section className="py-20 bg-[#F4F1EC]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Filter tabs with counts */}
        <div className="flex flex-wrap gap-0 border-b border-black/10 mb-12">
          {tipos.map((tipo) => (
            <button
              key={tipo}
              onClick={() => setActiveTipo(tipo)}
              className={`font-body text-sm font-medium px-5 py-3 relative transition-colors duration-200 ${
                activeTipo === tipo
                  ? "text-[#1A1A1A]"
                  : "text-black/40 hover:text-black/80"
              }`}
            >
              {tipo} ({counts[tipo]})
              {activeTipo === tipo && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFD100]" />
              )}
            </button>
          ))}
        </div>

        {/* Equipment rows */}
        <motion.div
          key={activeTipo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filteredEquipos.map((equipo, index) => (
            <EquipoRow key={equipo.nombre} equipo={equipo} index={index} />
          ))}

          {filteredEquipos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-black/40 text-lg font-body">No hay equipos en esta categoría.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
