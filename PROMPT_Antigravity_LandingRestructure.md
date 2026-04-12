# PROMPT ANTIGRAVITY — LANDING CONSTRUVIAL — REESTRUCTURA FINAL
## Solo modificar app/page.tsx y componentes home/
## No tocar: Header, Footer, páginas internas, Hero, Stats, Logo Marquee

---

## CONTEXTO

El landing actual tiene estos problemas a resolver en esta sesión:
1. Sección "Nuestra Historia / 35 Años Construyendo Argentina" — ELIMINAR
2. Sección "Hablemos" duplicada debajo de Servicios — ELIMINAR  
3. Formulario de contacto completo en la home — ELIMINAR
4. Servicios en tabs/acordeón — REEMPLAZAR por cards visuales
5. Agregar sección EQUIPOS con carrusel usando fotos reales
6. Agregar sección QUIÉNES SOMOS simplificada (banda de presentación)
7. Agregar CTA FINAL simple al cierre del landing

Antes de tocar cualquier archivo:
1. Corré `find . -path ./node_modules -prune -o -name "*.tsx" -print | grep -E "(page|Hero|Stats|Service|Equip|History|Contact|CTA)" | head -30`
2. Corré `ls public/equipos/desktop/` y mostrá los nombres exactos de los archivos
3. Mostrá el contenido actual de `app/page.tsx`
Recién después empezá a modificar.

---

## PASO 1 — ELIMINAR SECCIONES

En `app/page.tsx`, eliminar completamente:
- El componente o sección que contiene "35 Años Construyendo Argentina" / "Nuestra Historia"
- El componente o sección "Hablemos" que aparece debajo de Servicios (si hay dos CTAs, eliminar el primero)
- El formulario de contacto completo (campos nombre, email, teléfono, mensaje, botón "Enviar Requerimiento")
- La sección "Oficinas Centrales" con el mapa que está en la home

---

## PASO 2 — NUEVA SECCIÓN: QUIÉNES SOMOS (banda simple)

Crear `components/home/CompanyBand.tsx`:

```tsx
'use client'

export default function CompanyBand() {
  return (
    <section className="bg-[#111827] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row 
                      items-center justify-between gap-8">
        
        {/* Texto izquierda */}
        <div className="flex-1">
          {/* Overline */}
          <p className="font-body text-[#E8720C] text-xs tracking-[0.3em] 
                        uppercase mb-4">
            Río Tercero, Córdoba · Est. 1989
          </p>
          
          {/* Título */}
          <h2 className="font-display text-white uppercase leading-tight mb-4"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
            Construimos la infraestructura<br/>
            <span className="text-[#E8720C]">que Argentina necesita.</span>
          </h2>
          
          {/* Descripción — breve, contundente */}
          <p className="font-body text-white/60 text-base leading-relaxed 
                        max-w-xl">
            Empresa constructora especializada en obras viales, civiles, 
            metálicas y electromecánicas. Sector público y privado. 
            500 obras ejecutadas en 40 ciudades del país.
          </p>
        </div>

        {/* CTA derecha */}
        <div className="flex-shrink-0">
          <a href="/quienes-somos"
             className="inline-flex items-center gap-2 border border-white/30 
                        text-white font-body text-sm tracking-widest uppercase 
                        px-8 py-4 hover:border-[#E8720C] hover:text-[#E8720C] 
                        transition-all duration-300">
            Conocer la empresa →
          </a>
        </div>
      </div>
    </section>
  )
}
```

Agregar `<CompanyBand />` en `app/page.tsx` ANTES de la sección de Servicios.

---

## PASO 3 — SERVICIOS: REEMPLAZAR tabs por cards visuales

Crear `components/home/ServicesCards.tsx`:

```tsx
'use client'

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
    imagen: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'movimiento-suelos',
    numero: '02',
    titulo: 'Movimiento de Suelos',
    descripcion: 'Obras viales, terraplenados, canalizaciones, puentes y excavaciones de gran envergadura.',
    items: ['Obras Viales', 'Terraplenados', 'Canalizaciones', 'Puentes y Alcantarillas'],
    imagen: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'alquiler-equipos',
    numero: '03',
    titulo: 'Alquiler de Equipos',
    descripcion: 'Flota certificada de equipamiento vial, transporte y logística disponible para tu obra.',
    items: ['Equipos Viales', 'Transporte Pesado', 'Carretones Viales', 'Carretones Agrícolas'],
    imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'logistica',
    numero: '04',
    titulo: 'Logística y Distribución',
    descripcion: 'Transporte especializado de equipos pesados, áridos y logística integral de obras en todo el país.',
    items: ['Carretones para Maquinaria', 'Transporte de Áridos', 'Logística de Obra'],
    imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'departamento-tecnico',
    numero: '05',
    titulo: 'Departamento Técnico',
    descripcion: 'Gerenciamiento integral de proyectos complejos con especialistas en piping y grandes obras.',
    items: ['Gerenciamiento de Proyectos', 'Piping', 'Administración de M.O.'],
    imagen: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  },
]

export default function ServicesCards() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-[#F5F7FA] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header de sección */}
        <div className="mb-12">
          <p className="font-body text-[#E8720C] text-xs tracking-[0.3em] uppercase mb-3">
            Nuestras Capacidades
          </p>
          <h2 className="font-display text-[#0A1628] uppercase leading-none"
              style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
            Soluciones<br/>
            <span className="text-[#E8720C]">Integrales</span>
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
                           ? 'border-[#E8720C] text-[#E8720C] font-semibold' 
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
              <p className="font-body text-[#E8720C] text-xs tracking-[0.3em] uppercase mb-4">
                Servicio {servicios[active].numero}
              </p>
              <h3 className="font-display text-white uppercase mb-4"
                  style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                {servicios[active].titulo}
              </h3>
              
              {/* Línea naranja */}
              <div className="w-12 h-[2px] bg-[#E8720C] mb-6" />
              
              {/* Descripción */}
              <p className="font-body text-white/60 text-base leading-relaxed mb-6">
                {servicios[active].descripcion}
              </p>

              {/* Bullets */}
              <ul className="space-y-2">
                {servicios[active].items.map(item => (
                  <li key={item} className="flex items-center gap-3 font-body text-white/80 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#E8720C] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href={`/servicios/${servicios[active].slug}`}
                className="inline-flex items-center gap-2 bg-[#E8720C] text-white
                           font-body font-semibold text-sm tracking-widest uppercase
                           px-8 py-4 hover:bg-orange-500 transition-colors duration-200">
                Explorar servicio →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
```

En `app/page.tsx`, reemplazar el componente de Servicios actual por `<ServicesCards />`.

**IMPORTANTE:** Si hay imágenes reales de cada servicio en `/public/`, usarlas en lugar de las URLs de Unsplash. Verificar con `ls public/` primero.

---

## PASO 4 — EQUIPOS: Carrusel con fotos reales

Primero corré `ls public/equipos/desktop/` y mostrá el output completo.
Construí el array con los nombres exactos de archivos que encuentres.

Crear `components/home/EquiposCarousel.tsx`:

```tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'

// IMPORTANTE: Reemplazar este array con los archivos reales encontrados en /public/equipos/desktop/
// Correr: ls public/equipos/desktop/ para ver los nombres exactos
const equipos = [
  {
    nombre: 'Motoniveladora',
    tipo: 'Vial',
    spec: '235 HP · Hoja 3.6m',
    disponible: true,
    imagen: '/equipos/desktop/[NOMBRE_REAL_1]',
  },
  {
    nombre: 'Retroexcavadora CAT 320',
    tipo: 'Vial',
    spec: '162 HP · 20 Tn',
    disponible: true,
    imagen: '/equipos/desktop/[NOMBRE_REAL_2]',
  },
  {
    nombre: 'Rodillo Compactador',
    tipo: 'Vial',
    spec: '12 Tn · 28/33 Hz',
    disponible: true,
    imagen: '/equipos/desktop/[NOMBRE_REAL_3]',
  },
  {
    nombre: 'Camión Volcador',
    tipo: 'Transporte',
    spec: '420 HP · 20m³',
    disponible: true,
    imagen: '/equipos/desktop/[NOMBRE_REAL_4]',
  },
  {
    nombre: 'Carretón Vial 40 Tn',
    tipo: 'Carretón',
    spec: '40 Tn · 3 ejes',
    disponible: true,
    imagen: '/equipos/desktop/[NOMBRE_REAL_5]',
  },
  // Agregar más según los archivos encontrados
]

export default function EquiposCarousel() {
  const [current, setCurrent] = useState(0)
  const visible = 3 // cards visibles en desktop

  const prev = () => setCurrent(c => Math.max(0, c - 1))
  const next = () => setCurrent(c => Math.min(equipos.length - visible, c + 1))

  return (
    <section className="bg-[#0A1628] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-body text-[#E8720C] text-xs tracking-[0.3em] uppercase mb-3">
              Flota Propia
            </p>
            <h2 className="font-display text-white uppercase leading-none"
                style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
              Equipamiento<br/>
              <span className="text-[#E8720C]">Certificado</span>
            </h2>
          </div>
          
          {/* Flechas desktop */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-12 h-12 border border-white/20 text-white flex items-center 
                         justify-center hover:border-[#E8720C] hover:text-[#E8720C] 
                         transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              ←
            </button>
            <button
              onClick={next}
              disabled={current >= equipos.length - visible}
              className="w-12 h-12 border border-white/20 text-white flex items-center 
                         justify-center hover:border-[#E8720C] hover:text-[#E8720C] 
                         transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              →
            </button>
          </div>
        </div>

        {/* Carrusel */}
        <div className="overflow-hidden">
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
                <div className="relative h-52 overflow-hidden">
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
                                     ? 'bg-green-500 text-white' 
                                     : 'bg-gray-500 text-white'}`}>
                    {equipo.disponible ? 'Disponible' : 'Ocupado'}
                  </div>
                  {/* Badge tipo */}
                  <div className="absolute top-3 right-3 bg-[#E8720C] text-white 
                                  px-2 py-1 text-xs font-body font-semibold uppercase">
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
                    className="font-body text-[#E8720C] text-xs tracking-widest uppercase 
                               border-b border-[#E8720C]/40 pb-0.5
                               hover:border-[#E8720C] transition-colors">
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
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors
                         ${i === current ? 'bg-[#E8720C]' : 'bg-white/20'}`}
            />
          ))}
        </div>

        {/* CTA final */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <a href="/equipos"
             className="inline-flex items-center gap-2 bg-[#E8720C] text-white
                        font-body font-semibold text-sm tracking-widest uppercase
                        px-8 py-4 hover:bg-orange-500 transition-colors">
            Ver catálogo completo →
          </a>
          <a href="https://wa.link/ocm4yr"
             target="_blank"
             className="inline-flex items-center gap-2 border border-white/30 text-white
                        font-body text-sm tracking-widest uppercase
                        px-8 py-4 hover:border-white transition-colors">
            Consultar disponibilidad
          </a>
        </div>

      </div>
    </section>
  )
}
```

Agregar `<EquiposCarousel />` en `app/page.tsx` DESPUÉS de ServicesCards y ANTES del logo marquee de clientes.

---

## PASO 5 — CTA FINAL: Reemplazar formulario + "Hablemos"

Crear `components/home/CTAFinal.tsx`:

```tsx
export default function CTAFinal() {
  return (
    <section className="bg-[#E8720C] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="font-display text-white uppercase leading-none mb-4"
            style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
          ¿Tenés un proyecto?
        </h2>
        <p className="font-body text-white/80 text-lg mb-10">
          35 años de experiencia respaldan cada presupuesto.<br/>
          Respondemos en menos de 24 horas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contacto"
             className="inline-flex items-center justify-center gap-2 
                        bg-white text-[#E8720C] font-body font-bold 
                        text-sm tracking-widest uppercase px-10 py-5
                        hover:bg-orange-50 transition-colors duration-200">
            Solicitar presupuesto →
          </a>
          <a href="tel:+543571421350"
             className="inline-flex items-center justify-center gap-2 
                        border-2 border-white text-white font-body font-semibold
                        text-sm tracking-widest uppercase px-10 py-5
                        hover:bg-white/10 transition-colors duration-200">
            📞 03571 421350
          </a>
        </div>

      </div>
    </section>
  )
}
```

Reemplazar el bloque de formulario + "Hablemos" + "Oficinas Centrales" por `<CTAFinal />`.

---

## ORDEN FINAL DE SECCIONES EN app/page.tsx

```tsx
export default function Home() {
  return (
    <>
      <Hero />              {/* No tocar */}
      <Stats />             {/* No tocar */}
      <ClientMarquee />     {/* No tocar — logos corriendo */}
      <CompanyBand />       {/* NUEVO — presentación breve */}
      <ServicesCards />     {/* NUEVO — reemplaza tabs */}
      <EquiposCarousel />   {/* NUEVO — carrusel de equipos */}
      <CTAFinal />          {/* NUEVO — reemplaza formulario */}
    </>
  )
}
```

---

## VERIFICACIÓN ANTES DEL PUSH

Abrí el browser integrado y verificá sección por sección:

```
□ CompanyBand: ¿Se ve la banda oscura con texto en 2 líneas y CTA?
□ ServicesCards: ¿Las tabs cambian el contenido? ¿Hay imagen + info en cada tab?
□ EquiposCarousel: ¿Las flechas funcionan? ¿Se ven las fotos reales?
□ CTAFinal: ¿Hay dos botones? ¿El fondo es naranja?
□ El formulario completo ya NO aparece en la home
□ "35 Años Construyendo Argentina" ya NO aparece
□ Solo hay UN CTA de contacto en todo el landing (el CTAFinal)
```

Después: `git add -A && git commit -m "feat: restructure home landing - services cards, equipment carousel, clean CTAs" && git push origin main`

---

*construvial.vercel.app · Sesión de reestructura del landing · Abril 2025*
