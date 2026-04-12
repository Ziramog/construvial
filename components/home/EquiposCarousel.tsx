"use client"

import Image from 'next/image'
import { useState } from 'react'

const equipos = [
  {
    nombre: 'Motoniveladora',
    tipo: 'Vial',
    spec: '235 HP · Hoja 3.6m',
    disponible: true,
    imagen: '/media/equipos/desktop/10001.png',
  },
  {
    nombre: 'Retroexcavadora CAT 320',
    tipo: 'Vial',
    spec: '162 HP · 20 Tn',
    disponible: true,
    imagen: '/media/equipos/desktop/10002.png',
  },
  {
    nombre: 'Rodillo Compactador',
    tipo: 'Vial',
    spec: '12 Tn · 28/33 Hz',
    disponible: true,
    imagen: '/media/equipos/desktop/10003.png',
  },
  {
    nombre: 'Camión Volcador',
    tipo: 'Transporte',
    spec: '420 HP · 20m³',
    disponible: true,
    imagen: '/media/equipos/desktop/10004.png',
  },
  {
    nombre: 'Carretón Vial 40 Tn',
    tipo: 'Carretón',
    spec: '40 Tn · 3 ejes',
    disponible: true,
    imagen: '/media/equipos/desktop/10005.png',
  },
  {
    nombre: 'Excavadora Oruga',
    tipo: 'Vial',
    spec: '180 HP · 22 Tn',
    disponible: true,
    imagen: '/media/equipos/desktop/10006.png',
  },
  {
    nombre: 'Cargadora Frontal',
    tipo: 'Vial',
    spec: '200 HP · 3.5m³',
    disponible: true,
    imagen: '/media/equipos/desktop/10007.png',
  },
  {
    nombre: 'Topadora D8',
    tipo: 'Vial',
    spec: '300 HP · 35 Tn',
    disponible: true,
    imagen: '/media/equipos/desktop/10009.png',
  },
]

export function EquiposCarousel() {
  const [current, setCurrent] = useState(0)
  const visible = 3 // cards visibles en desktop

  const prev = () => setCurrent(c => Math.max(0, c - 1))
  const next = () => setCurrent(c => Math.min(equipos.length - visible, c + 1))

  return (
    <section className="bg-[#0A1628] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-body text-[#facc15] text-xs tracking-[0.3em] uppercase mb-3">
              Flota Propia
            </p>
            <h2 className="font-display text-white uppercase leading-none"
                style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
              Equipamiento<br/>
              <span className="text-[#facc15]">Certificado</span>
            </h2>
          </div>
          
          {/* Flechas desktop */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-12 h-12 border border-white/20 text-white flex items-center 
                         justify-center hover:border-[#facc15] hover:text-[#facc15] 
                         transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              ←
            </button>
            <button
              onClick={next}
              disabled={current >= equipos.length - visible}
              className="w-12 h-12 border border-white/20 text-white flex items-center 
                         justify-center hover:border-[#facc15] hover:text-[#facc15] 
                         transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              →
            </button>
          </div>
        </div>

        {/* Carrusel */}
        <div className="overflow-visible">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${current} * (100% / ${visible} + 16px)))` }}
          >
            {equipos.map((equipo, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-[#111827] overflow-hidden group"
                style={{ width: `calc(${100 / visible}% - ${(visible-1) * 16 / visible}px)` }}
              >
                {/* Imagen */}
                <div className="relative h-52 overflow-hidden bg-white/5">
                  <Image
                    src={equipo.imagen}
                    alt={equipo.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge disponibilidad */}
                  <div className={`absolute top-3 left-3 px-2 py-1 text-xs font-body 
                                   font-semibold tracking-wide uppercase
                                   ${equipo.disponible 
                                     ? 'bg-green-500/90 text-white' 
                                     : 'bg-gray-500/90 text-white'}`}>
                    {equipo.disponible ? 'Disponible' : 'Ocupado'}
                  </div>
                  {/* Badge tipo */}
                  <div className="absolute top-3 right-3 bg-[#facc15]/90 text-[#0a0a0a] 
                                  px-2 py-1 text-xs font-body font-bold uppercase">
                    {equipo.tipo}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display text-white uppercase text-xl mb-1">
                    {equipo.nombre}
                  </h3>
                  <p className="font-body text-white/40 text-sm font-mono mb-4">
                    {equipo.spec}
                  </p>
                  <a
                    href="https://wa.link/ocm4yr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[#facc15] text-xs tracking-widest uppercase 
                               border-b border-[#facc15]/40 pb-0.5
                               hover:border-[#facc15] transition-colors inline-block pt-2">
                    Consultar →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores mobile */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {equipos.map((_, i) => (
            i <= equipos.length - 1 && (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors
                         ${i === current ? 'bg-[#facc15]' : 'bg-white/20'}`}
            />
            )
          ))}
        </div>

        {/* CTA final */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <a href="/equipos"
             className="inline-flex items-center justify-center gap-2 bg-[#facc15] text-[#0a0a0a]
                        font-body font-semibold text-sm tracking-widest uppercase
                        px-8 py-4 hover:bg-white transition-colors">
            Ver catálogo completo →
          </a>
          <a href="https://wa.link/ocm4yr"
             target="_blank"
             className="inline-flex items-center justify-center gap-2 border border-white/30 text-white
                        font-body text-sm tracking-widest uppercase
                        px-8 py-4 hover:border-white transition-colors">
            Consultar disponibilidad
          </a>
        </div>

      </div>
    </section>
  )
}
