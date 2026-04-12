"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const servicios = [
  {
    slug: 'ingenieria-civil',
    numero: '01',
    titulo: 'Ingeniería Civil',
    descripcion: 'Hormigón armado, estructuras metálicas, naves industriales y pavimentaciones de alto estándar.',
    items: ['Hormigón Armado', 'Estructuras Metálicas', 'Naves Industriales', 'Pavimentaciones'],
    imagen: '/media/servicios/desktop/ingenieria-civil.png',
  },
  {
    slug: 'movimiento-suelos',
    numero: '02',
    titulo: 'Movimiento de Suelos',
    descripcion: 'Obras viales, terraplenados, canalizaciones, puentes y excavaciones de gran envergadura.',
    items: ['Obras Viales', 'Terraplenados', 'Canalizaciones', 'Puentes y Alcantarillas'],
    imagen: '/media/servicios/desktop/movimiento-suelos.png',
  },
  {
    slug: 'alquiler-equipos',
    numero: '03',
    titulo: 'Alquiler de Equipos',
    descripcion: 'Flota certificada de equipamiento vial, transporte y logística disponible para tu obra.',
    items: ['Equipos Viales', 'Transporte Pesado', 'Carretones Viales', 'Carretones Agrícolas'],
    imagen: '/media/servicios/desktop/alquiler-equipos.png',
  },
  {
    slug: 'logistica',
    numero: '04',
    titulo: 'Logística y Distribución',
    descripcion: 'Transporte especializado de equipos pesados, áridos y logística integral de obras en todo el país.',
    items: ['Carretones para Maquinaria', 'Transporte de Áridos', 'Logística de Obra'],
    imagen: '/media/servicios/desktop/logistica.png',
  },
  {
    slug: 'departamento-tecnico',
    numero: '05',
    titulo: 'Departamento Técnico',
    descripcion: 'Gerenciamiento integral de proyectos complejos con especialistas en piping y grandes obras.',
    items: ['Gerenciamiento de Proyectos', 'Piping', 'Administración de M.O.'],
    imagen: '/media/servicios/desktop/departamento-tecnico.png',
  },
]

export function ServicesCards() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-[#F5F7FA] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header de sección */}
        <div className="mb-12">
          <p className="font-body text-[#facc15] text-xs tracking-[0.3em] uppercase mb-3">
            Nuestras Capacidades
          </p>
          <h2 className="font-display text-[#0A1628] uppercase leading-none"
              style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
            Soluciones<br/>
            <span className="text-[#facc15]">Integrales</span>
          </h2>
        </div>

        {/* Tabs de selección */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {servicios.map((s, i) => (
            <button
              key={s.slug}
              onClick={() => setActive(i)}
              className={`font-body text-sm tracking-wide pb-3 px-1 border-b-2 
                         transition-all duration-200 mr-6
                         ${active === i 
                           ? 'border-[#facc15] text-[#facc15] font-semibold' 
                           : 'border-transparent text-gray-500 hover:text-gray-800'}`}
            >
              {s.numero} {s.titulo}
            </button>
          ))}
        </div>

        {/* Card activa — layout horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#0A1628] overflow-hidden"
             style={{ minHeight: '420px' }}>
          
          {/* Imagen */}
          <div className="relative h-64 md:h-auto">
            <Image
              src={servicios[active].imagen}
              alt={servicios[active].titulo}
              fill
              className="object-cover"
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-[#0A1628]/30" />
            
            {/* Número grande de fondo */}
            <div className="absolute bottom-4 right-4 font-display text-white/10 
                            leading-none select-none"
                 style={{ fontSize: '120px' }}>
              {servicios[active].numero}
            </div>
          </div>

          {/* Contenido */}
          <div className="p-10 flex flex-col justify-between">
            <div>
              {/* Número + título */}
              <p className="font-body text-[#facc15] text-xs tracking-[0.3em] uppercase mb-4">
                Servicio {servicios[active].numero}
              </p>
              <h3 className="font-display text-white uppercase mb-4"
                  style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                {servicios[active].titulo}
              </h3>
              
              {/* Línea naranja */}
              <div className="w-12 h-[2px] bg-[#facc15] mb-6" />
              
              {/* Descripción */}
              <p className="font-body text-white/60 text-base leading-relaxed mb-6">
                {servicios[active].descripcion}
              </p>

              {/* Bullets */}
              <ul className="space-y-2">
                {servicios[active].items.map(item => (
                  <li key={item} className="flex items-center gap-3 font-body text-white/80 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#facc15] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href={`/servicios/${servicios[active].slug}`}
                className="inline-flex items-center gap-2 bg-[#facc15] text-[#0A1628]
                           font-body font-semibold text-sm tracking-widest uppercase
                           px-8 py-4 hover:bg-white transition-colors duration-200">
                Explorar servicio →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
