# PROMPT PARA CLAUDE CODE — MODIFICACIONES v1 · CONSTRUVIAL S.A.

> Copiá este prompt completo y pegalo en Claude Code para implementar todas las mejoras detectadas en la auditoría del sitio construvial.vercel.app

---

## CONTEXTO

Este prompt cubre **8 modificaciones concretas** sobre el proyecto Next.js 14 ya existente de Construvial S.A. El sitio implementa aproximadamente el 72% del spec original. Las modificaciones están ordenadas por impacto en conversión.

**Stack existente:**
- Next.js 14 con App Router + TypeScript
- Tailwind CSS
- Sanity.io como CMS
- Framer Motion
- Lucide React
- Deploy en Vercel

---

## MOD 1 — ClientLogos: logo wall de los 24 clientes

### Archivo a crear: `components/home/ClientLogos.tsx`

```tsx
'use client'

import { motion } from 'framer-motion'

const CLIENTES = [
  'NCA', 'Axion', 'YPF', 'SoEnergy', 'AGD', 'Bunge',
  'FM', 'Pan American Energy', 'HENISA', 'Municipio Río Tercero',
  'Embalse', 'TECNA', 'Agricultores Federados', 'Electroingeniería',
  'Boetto', 'Andrade', 'Grupo Edisur', 'INTESAR', 'NASA',
  'ANSALDO', 'EASTEL', 'Transener', 'COIRINI', 'INVAP',
]

export default function ClientLogos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">
            Más de 35 años de confianza
          </p>
          <h2 className="font-display text-3xl font-bold text-dark uppercase">
            Empresas que confían en nosotros
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px bg-gray-100 border border-gray-100 rounded-lg overflow-hidden">
          {CLIENTES.map((cliente, i) => (
            <motion.div
              key={cliente}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center bg-white px-4 py-6 hover:bg-gray-50 transition-colors duration-200 group"
            >
              <span className="text-xs font-semibold text-gray-400 group-hover:text-primary text-center leading-tight transition-colors duration-200 uppercase tracking-wide">
                {cliente}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted mt-6">
          Sector público y privado · Industria · Energía · Agro · Infraestructura
        </p>
      </div>
    </section>
  )
}
```

### Integración en `app/page.tsx`

Importar y ubicar el componente **después de `<Stats />`** y **antes de `<FeaturedWorks />`**:

```tsx
import ClientLogos from '@/components/home/ClientLogos'

// En el JSX de la página home, agregar:
<Stats />
<ClientLogos />          {/* ← AGREGAR ACÁ */}
<FeaturedWorks />
```

**Nota sobre imágenes de logos:** Cuando el cliente provea los logos reales en PNG/SVG, reemplazar el `<span>` con `<Image>` de next/image. La estructura de grilla está lista para eso. Colocar los logos en `public/logos/{nombre-cliente}.svg` y referenciarlos así:

```tsx
import Image from 'next/image'
// dentro del map:
<Image
  src={`/logos/${cliente.toLowerCase().replace(/\s/g, '-')}.svg`}
  alt={cliente}
  width={120}
  height={40}
  className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 object-contain"
/>
```

---

## MOD 2 — WhatsAppButton: botón flotante

### Archivo a crear: `components/ui/WhatsAppButton.tsx`

```tsx
'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WA_LINK = 'https://wa.link/ocm4yr'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`
          bg-dark text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg
          transition-all duration-200 whitespace-nowrap pointer-events-none
          ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
        `}
      >
        ¡Chateá con nosotros!
      </div>

      {/* Botón */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="
          w-14 h-14 rounded-full flex items-center justify-center shadow-lg
          bg-[#25D366] hover:bg-[#1ebe5d] active:scale-95
          transition-all duration-200
        "
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  )
}
```

### Integración en `app/layout.tsx`

```tsx
import WhatsAppButton from '@/components/ui/WhatsAppButton'

// En el body, después de {children} y antes de </body>:
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />   {/* ← AGREGAR ACÁ */}
      </body>
    </html>
  )
}
```

---

## MOD 3 — Header: dropdown de servicios + navegación real

### Modificar `components/layout/Header.tsx`

**Problema actual:** La home usa anchor links (`#servicios`, `#mercados`, etc.) en lugar de rutas reales. El nav debe ser consistente entre home y páginas internas.

**Cambios requeridos:**

#### 3a. Reemplazar anchor links por rutas reales en la home

En `app/page.tsx`, eliminar los IDs de sección que sean solo anclas de navegación. La home debe tener:
- Hero → botones a `/obras` y `/contacto`
- El nav apunta siempre a rutas `/servicios`, `/obras`, `/equipos`, `/blog`, `/contacto`

#### 3b. Agregar dropdown de servicios en el Header

```tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

const SERVICIOS_LINKS = [
  { href: '/servicios/ingenieria-civil',    label: 'Ingeniería Civil' },
  { href: '/servicios/movimiento-suelos',   label: 'Movimiento de Suelos' },
  { href: '/servicios/alquiler-equipos',    label: 'Alquiler de Equipos' },
  { href: '/servicios/logistica',           label: 'Logística y Distribución' },
  { href: '/servicios/departamento-tecnico',label: 'Departamento Técnico' },
]

const NAV_LINKS = [
  { href: '/quienes-somos', label: 'Quiénes somos' },
  { href: '/obras',         label: 'Obras' },
  { href: '/equipos',       label: 'Equipos' },
  { href: '/blog',          label: 'Blog' },
  { href: '/contacto',      label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled]         = useState(false)
  const [menuOpen, setMenuOpen]         = useState(false)
  const [servOpen, setServOpen]         = useState(false)
  const servRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servRef.current && !servRef.current.contains(e.target as Node)) {
        setServOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const headerBg = scrolled || !isHome
    ? 'bg-dark shadow-lg'
    : 'bg-transparent'

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Mantener el logo existente */}
        </Link>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Servicios con dropdown */}
          <div ref={servRef} className="relative">
            <button
              onClick={() => setServOpen(!servOpen)}
              className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Servicios
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${servOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {servOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-dark border border-white/10 rounded-lg shadow-xl overflow-hidden">
                {SERVICIOS_LINKS.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setServOpen(false)}
                    className="block px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
                <Link
                  href="/servicios"
                  onClick={() => setServOpen(false)}
                  className="block px-5 py-3 text-sm font-semibold text-accent hover:bg-white/5 transition-colors"
                >
                  Ver todos los servicios →
                </Link>
              </div>
            )}
          </div>

          {/* Resto del nav */}
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.link/ocm4yr"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Consultanos
        </a>

        {/* Hamburger mobile */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {/* Mantener el hamburger icon existente */}
        </button>
      </div>

      {/* Mobile menu — agregar servicios como lista expandible */}
      {menuOpen && (
        <div className="lg:hidden bg-dark border-t border-white/10 px-6 py-4 space-y-3">
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Servicios</p>
            {SERVICIOS_LINKS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm text-white/80 hover:text-white"
              >
                {s.label}
              </Link>
            ))}
          </div>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-white/80 hover:text-white border-t border-white/5"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
```

---

## MOD 4 — AnimatedCounter: corregir hidratación SSR

### Problema
Los contadores arrancan en `0+` porque el componente intenta animar en el servidor. Se necesita renderizar solo en el cliente.

### Archivo a modificar: `components/ui/AnimatedCounter.tsx`

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({
  target,
  suffix = '',
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount]     = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed  = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Easing: ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [started, target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
```

### Archivo a modificar: `components/home/Stats.tsx`

Usar importación dinámica para evitar el render en servidor:

```tsx
import dynamic from 'next/dynamic'

const AnimatedCounter = dynamic(
  () => import('@/components/ui/AnimatedCounter'),
  {
    ssr: false,
    loading: () => <span>0</span>,  // placeholder mientras carga
  }
)
```

---

## MOD 5 — CTABanner: banner entre secciones

### Archivo a crear: `components/home/CTABanner.tsx`

```tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Línea de acento */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      {/* Patrón decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 right-16 w-64 h-64 border border-white rounded-full" />
        <div className="absolute -bottom-16 left-8 w-96 h-96 border border-white rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            ¿Tenés un proyecto?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-6">
            Hablemos.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            35 años de experiencia respaldan cada presupuesto. Respondemos en menos de 24 horas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Solicitar presupuesto
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+543571421350"
              className="flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/80 hover:text-white font-medium px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              03571 421350
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

### Integración en `app/page.tsx`

```tsx
import CTABanner from '@/components/home/CTABanner'

// Ubicar entre FeaturedWorks y la sección de empresa/historia:
<FeaturedWorks />
<CTABanner />             {/* ← AGREGAR ACÁ */}
{/* Sección empresa... */}
```

---

## MOD 6 — Canonical URL + dominio propio

### Paso 1: Configurar dominio en Vercel

1. Ir a Vercel Dashboard → proyecto `construvial` → Settings → Domains
2. Agregar `construvialsa.com.ar` y `www.construvialsa.com.ar`
3. Actualizar los DNS del dominio (Registro A o CNAME según indique Vercel)

### Paso 2: Actualizar variables de entorno

En `.env.local` (y en Vercel Dashboard → Environment Variables):

```bash
NEXT_PUBLIC_SITE_URL=https://construvialsa.com.ar
```

### Paso 3: Actualizar `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  // ... resto igual ...
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://construvialsa.com.ar'),
  alternates: {
    canonical: '/',  // Next.js resuelve automáticamente con metadataBase
  },
}
```

### Paso 4: Redirect de vercel.app a dominio propio

En `next.config.js`:

```js
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'construvial.vercel.app' }],
        destination: 'https://construvialsa.com.ar/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
}
module.exports = nextConfig
```

---

## MOD 7 — Redes sociales en footer

### Modificar `components/layout/Footer.tsx`

Localizar la sección "Redes Sociales" y agregar los links reales:

```tsx
import { Instagram, Facebook } from 'lucide-react'

// En la sección de redes sociales del footer:
<div className="flex items-center gap-4 mt-4">
  <a
    href="https://www.instagram.com/construvial_sa/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram de Construvial"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-accent hover:bg-accent/10 text-white/60 hover:text-white transition-all duration-200"
  >
    <Instagram className="w-5 h-5" />
  </a>
  <a
    href="https://www.facebook.com/profile.php?id=100068820263821"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook de Construvial"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-accent hover:bg-accent/10 text-white/60 hover:text-white transition-all duration-200"
  >
    <Facebook className="w-5 h-5" />
  </a>
  <a
    href="https://wa.link/ocm4yr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp de Construvial"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-[#25D366] hover:bg-[#25D366]/10 text-white/60 hover:text-white transition-all duration-200"
  >
    {/* Ícono WhatsApp (lucide no lo incluye, usar SVG inline) */}
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
</div>
```

---

## MOD 8 — Contenido real en Sanity (instrucciones para el cliente)

### Acceder al Sanity Studio

Una vez desplegado, el Studio está en:
```
https://construvialsa.com.ar/studio
```
(o `https://construvial.vercel.app/studio` mientras no haya dominio propio)

### Obras prioritarias a cargar (mínimo viable)

Cargar al menos **6 obras reales** con la siguiente estructura:

| Campo | Descripción |
|---|---|
| `titulo` | Nombre de la obra (ej: "Pavimentación Ruta Provincial N° 6 — Tramo Villa María") |
| `slug` | Auto-generado desde el título |
| `cliente` | Nombre del cliente (ej: "Vialidad Provincial de Córdoba") |
| `categoria` | Viales / Civiles / Industriales / Electromecánicas / Movimiento de Suelos |
| `descripcion` | 2–3 párrafos con descripción técnica |
| `imagenPrincipal` | Foto de la obra (JPG/PNG, mínimo 1200px de ancho) |
| `galeria` | 3–5 fotos adicionales |
| `ubicacion` | Ciudad y provincia |
| `año` | Año de finalización |
| `destacada` | `true` para las 3 obras que aparecen en la home |

### Equipos a cargar

Cargar catálogo de equipos disponibles para alquiler:

| Campo | Descripción |
|---|---|
| `nombre` | Nombre del equipo (ej: "Motoniveladora Caterpillar 120M") |
| `categoria` | Viales / Transporte / Carretones Agrícolas / Carretones Viales |
| `descripcion` | Especificaciones técnicas |
| `imagen` | Foto del equipo |
| `disponible` | `true / false` |

---

## ORDEN DE IMPLEMENTACIÓN RECOMENDADO

```
Prioridad 1 (mismo día):
  MOD 2 — WhatsApp flotante          ← 15 min, máximo impacto
  MOD 4 — Fix AnimatedCounter        ← 20 min, corrige bug visible
  MOD 7 — Redes sociales en footer   ← 10 min

Prioridad 2 (esta semana):
  MOD 1 — ClientLogos                ← 30 min + conseguir logos
  MOD 5 — CTABanner                  ← 20 min
  MOD 3 — Header dropdown            ← 45 min

Prioridad 3 (próxima semana):
  MOD 6 — Canonical + dominio        ← requiere acceso al DNS
  MOD 8 — Contenido en Sanity        ← requiere fotos reales del cliente
```

---

## VERIFICACIÓN POST-IMPLEMENTACIÓN

Después de cada deploy, verificar en `construvial.vercel.app`:

- [ ] Botón WhatsApp visible en todas las páginas (bottom-right)
- [ ] Stats muestran números animados, no "0+"
- [ ] Logo wall de 24 clientes visible en home
- [ ] Nav tiene dropdown "Servicios" con 5 ítems
- [ ] CTABanner visible entre secciones
- [ ] Footer links Instagram y Facebook funcionan
- [ ] Canonical URL apunta al dominio correcto

---

*Proyecto: Construvial S.A. | construvialsa.com.ar | Modificaciones v1 · Abril 2026*
