# PROMPT ANTIGRAVITY — CONSTRUVIAL LEVEL UP
## Tipografía · Hero legibility · Logo Marquee · CTA Density
## Stack: Next.js 14 · Tailwind CSS · Framer Motion

---

### CONTEXTO

Estamos mejorando construvial.vercel.app — sitio de una constructora argentina de 35 años.
Tenemos 4 problemas concretos a resolver en esta sesión. Ejecutalos en orden.
Antes de tocar cualquier archivo, corré `find . -name "*.tsx" | grep -v node_modules | grep -v .next | head -40` y mostrá la estructura real del proyecto.

---

## PROBLEMA 1 — TIPOGRAFÍA GLOBAL

### Diagnóstico
La tipografía actual es genérica y los títulos no tienen el peso visual que requiere una empresa de infraestructura. Los H1 del hero necesitan escala dramática y legibilidad perfecta.

### Fix requerido

**Paso 1 — Instalar las fuentes en `app/layout.tsx`:**

```tsx
import { Bebas_Neue, DM_Sans } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

// En el <html> o <body>:
// className={`${bebasNeue.variable} ${dmSans.variable}`}
```

**Paso 2 — Actualizar `tailwind.config.ts`:**

```ts
fontFamily: {
  display: ['var(--font-display)', 'sans-serif'],
  body: ['var(--font-body)', 'sans-serif'],
},
```

**Paso 3 — Aplicar en `globals.css`:**

```css
/* Regla global: todos los h1, h2 usan display por defecto */
h1, h2 {
  font-family: var(--font-display);
  letter-spacing: 0.02em;
}

body, p, span, a, button, input, textarea, select {
  font-family: var(--font-body);
}
```

**Paso 4 — Escala tipográfica para el Hero H1:**
- Desktop: `text-[clamp(72px,8vw,120px)]` — masivo, impactante
- Mobile: mínimo `text-6xl` (60px)
- `leading-none` o `leading-[0.92]` — muy compacto, industrial
- `tracking-wider` en Bebas Neue (letra espaciada)
- Color: `text-white` siempre en el hero

**Paso 5 — Escala para secciones internas:**
- H2 de sección: `font-display text-5xl md:text-6xl text-white` o `text-[#0F1F3D]` según fondo
- H3 de cards: `font-display text-2xl md:text-3xl`
- Body: `font-body text-base md:text-lg` (16-18px)
- Labels/overlines: `font-body text-xs tracking-[0.25em] uppercase text-[#E8720C]`

---

## PROBLEMA 2 — HERO: LEGIBILIDAD SIN ARRUINAR LAS IMÁGENES

### Diagnóstico
El texto del hero es difícil de leer sobre las imágenes. La solución anterior (overlay oscuro uniforme) tapaba las fotos. Necesitamos legibilidad quirúrgica sin matar la imagen.

### Fix requerido — Técnica de "text shadow + gradient localizado"

Buscá el componente Hero (probablemente `components/home/Hero.tsx` o similar).

**Reemplazá el overlay actual por este sistema de 3 capas:**

```tsx
{/* CAPA 1: Gradient solo en la zona del texto — no cubre toda la imagen */}
<div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

{/* CAPA 2: Gradient adicional en la zona inferior para los CTAs */}
<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />

{/* CAPA 3: El contenido del hero */}
<div className="relative z-10 ...">
  <h1
    className="font-display text-white uppercase"
    style={{
      fontSize: 'clamp(64px, 8vw, 112px)',
      lineHeight: '0.95',
      letterSpacing: '0.03em',
      textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.8)',
    }}
  >
    Ingeniería.<br/>
    Construcción.<br/>
    Soluciones.
  </h1>
  
  {/* Subtítulo con fondo semi-transparente sutil detrás del texto */}
  <p
    className="font-body text-white/90 text-lg md:text-xl mt-4"
    style={{ textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}
  >
    Más de 35 años construyendo infraestructura para Argentina
  </p>
</div>
```

**El resultado:** el lado izquierdo de la imagen tiene oscurecimiento progresivo que da legibilidad total. El lado derecho (60% de la imagen) se ve con todo su detalle y color. Las fotos respiran. El texto es perfectamente legible.

**Adicionalmente — El label "Desde 1989 · Córdoba, Argentina":**
```tsx
<p className="font-body text-xs tracking-[0.3em] uppercase text-[#E8720C] mb-4"
   style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}>
  Desde 1989 · Córdoba, Argentina
</p>
```

**Los botones CTA del hero:**
```tsx
{/* Botón primario — naranja sólido, esquinas rectas */}
<a href="/servicios"
   className="inline-flex items-center gap-2 bg-[#E8720C] text-white 
              font-body font-semibold text-sm tracking-widest uppercase
              px-8 py-4 hover:bg-orange-500 transition-colors duration-200">
  Explorar Servicios
  <span className="text-lg">→</span>
</a>

{/* Botón secundario — borde blanco, fondo transparente */}
<a href="tel:+543571421350"
   className="inline-flex items-center gap-2 border border-white/60 text-white 
              font-body font-medium text-sm tracking-widest uppercase
              px-8 py-4 hover:border-white hover:bg-white/10 transition-all duration-200">
  03571 421350
</a>
```

---

## PROBLEMA 3 — LOGO MARQUEE (Cinta corriendo de clientes)

### Concepto
Una cinta infinita que corre horizontalmente con los logos reales de los 24 clientes. Movimiento suave y continuo. Se pausa al hacer hover. Fondo oscuro con logos en blanco/gris que se iluminan al pasar.

### Implementación

**Paso 1 — Crear `/public/logos/` y verificar que los logos estén ahí.**
Los logos deben estar en: `/public/logos/ypf.svg`, `/public/logos/bunge.svg`, etc.
Si no están, usá nombres de texto como placeholder visual por ahora.

**Paso 2 — Agregar en `globals.css`:**

```css
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-reverse {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.animate-marquee {
  animation: marquee 35s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

.marquee-track {
  display: flex;
  width: max-content;
}
```

**Paso 3 — Crear `components/home/ClientMarquee.tsx`:**

```tsx
'use client'

import Image from 'next/image'

const clients = [
  { name: 'YPF', logo: '/logos/ypf.svg' },
  { name: 'Bunge', logo: '/logos/bunge.svg' },
  { name: 'AGD', logo: '/logos/agd.svg' },
  { name: 'Axion', logo: '/logos/axion.svg' },
  { name: 'Pan American Energy', logo: '/logos/pae.svg' },
  { name: 'Transener', logo: '/logos/transener.svg' },
  { name: 'INVAP', logo: '/logos/invap.svg' },
  { name: 'ANSALDO', logo: '/logos/ansaldo.svg' },
  { name: 'Electroingeniería', logo: '/logos/electroingenieria.svg' },
  { name: 'SoEnergy', logo: '/logos/soenergy.svg' },
  { name: 'NCA', logo: '/logos/nca.svg' },
  { name: 'Grupo Edisur', logo: '/logos/edisur.svg' },
  // Agregar los 24 clientes
]

export default function ClientMarquee() {
  // Duplicamos el array para el loop infinito visual
  const doubled = [...clients, ...clients]

  return (
    <section className="bg-[#080F1E] py-14 overflow-hidden">
      
      {/* Label superior */}
      <p className="font-body text-center text-xs tracking-[0.3em] uppercase 
                    text-[#E8720C] mb-10">
        Más de 35 años de confianza — Sector público y privado
      </p>

      {/* Contenedor con fade lateral */}
      <div className="relative">
        
        {/* Fade izquierdo */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10
                        bg-gradient-to-r from-[#080F1E] to-transparent pointer-events-none" />
        
        {/* Fade derecho */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10
                        bg-gradient-to-l from-[#080F1E] to-transparent pointer-events-none" />

        {/* Track animado */}
        <div className="marquee-track animate-marquee">
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center mx-10 flex-shrink-0
                         opacity-40 hover:opacity-100 transition-opacity duration-300
                         grayscale hover:grayscale-0"
              style={{ minWidth: '120px', height: '48px' }}
            >
              {/* Si tiene logo SVG/PNG real */}
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={48}
                className="object-contain max-h-10 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }} // Hace el logo blanco
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contador de clientes */}
      <p className="font-body text-center text-xs text-white/30 mt-10 tracking-widest">
        24 EMPRESAS LÍDERES · ENERGÍA · INDUSTRIA · INFRAESTRUCTURA · ESTADO
      </p>
    </section>
  )
}
```

**Paso 4 — Si algún logo no existe como archivo, usarlo como texto estilizado temporalmente:**
```tsx
{/* Fallback para logos sin archivo */}
<span className="font-display text-white text-xl tracking-widest">
  {client.name}
</span>
```

**Paso 5 — Reemplazar la sección de clientes actual en la home por `<ClientMarquee />`.**
Eliminar el grid de texto plano actual de clientes.

---

## PROBLEMA 4 — CTA DENSITY

### Diagnóstico
Hay secciones largas sin ningún CTA. La regla de las Top 5 (Bechtel, Kiewit): nunca más de 2 scrolls sin un botón de acción.

### Fix requerido — Agregar CTAs en estas secciones específicas:

**4.1 — Después de la sección de Servicios (Soluciones Integrales):**
```tsx
{/* CTA intermedio entre servicios y portafolio */}
<div className="bg-[#E8720C] py-8 px-6 text-center">
  <p className="font-display text-white text-3xl md:text-4xl tracking-wide mb-4">
    ¿Tu proyecto requiere una solución específica?
  </p>
  <a href="/contacto"
     className="inline-flex items-center gap-2 bg-white text-[#E8720C]
                font-body font-semibold text-sm tracking-widest uppercase
                px-8 py-4 hover:bg-orange-50 transition-colors">
    Hablar con un especialista →
  </a>
</div>
```

**4.2 — En la sección de Historia/Trayectoria:**
```tsx
{/* CTA inline dentro de la sección de historia */}
<div className="mt-8 flex flex-col sm:flex-row gap-4">
  <a href="/quienes-somos"
     className="font-body text-sm tracking-widest uppercase text-[#E8720C]
                border-b border-[#E8720C] pb-1 hover:opacity-70 transition-opacity
                inline-flex items-center gap-2">
    Ver nuestra trayectoria completa →
  </a>
  <a href="/obras"
     className="font-body text-sm tracking-widest uppercase text-white/60
                border-b border-white/30 pb-1 hover:text-white hover:border-white 
                transition-all inline-flex items-center gap-2">
    Ver las 500 obras →
  </a>
</div>
```

**4.3 — Sección de Equipos (si existe en home) — CTA de alquiler:**
```tsx
<div className="text-center mt-10">
  <p className="font-body text-white/60 text-sm mb-4">
    Flota certificada disponible para alquiler inmediato
  </p>
  <a href="https://wa.link/ocm4yr" target="_blank"
     className="inline-flex items-center gap-3 bg-[#25D366] text-white
                font-body font-semibold text-sm tracking-widest uppercase
                px-8 py-4 hover:bg-green-500 transition-colors">
    {/* WhatsApp icon */}
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.862L.057 23.886a.5.5 0 00.611.637l6.218-1.634A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.91 0-3.694-.526-5.218-1.435l-.374-.222-3.89 1.022.984-3.798-.245-.392A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
    Consultar disponibilidad
  </a>
</div>
```

**4.4 — Sticky CTA bar en mobile (aparece después del hero):**
```tsx
{/* Solo visible en mobile — fixed bottom */}
'use client'
// En un componente separado MobileCTA.tsx
<div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden
                bg-[#0A1628] border-t border-white/10 p-3 gap-2">
  <a href="tel:+543571421350"
     className="flex-1 text-center bg-white/10 text-white font-body text-sm
                py-3 rounded-none font-medium tracking-wide">
    📞 Llamar
  </a>
  <a href="https://wa.link/ocm4yr" target="_blank"
     className="flex-1 text-center bg-[#E8720C] text-white font-body text-sm
                py-3 rounded-none font-semibold tracking-wide">
    WhatsApp →
  </a>
</div>
```

---

## VERIFICACIÓN FINAL

Después de aplicar los 4 cambios, verificá visualmente en el browser de Antigravity:

```
CHECKLIST:
□ Hero H1: ¿Se lee perfectamente sobre la foto? ¿El tamaño es masivo (>64px)?
□ Hero H1: ¿Usa Bebas Neue? ¿Tiene letterSpacing?
□ Hero: ¿El overlay es gradient lateral (no capa uniforme oscura)?
□ Clientes: ¿La cinta corre suavemente? ¿Se pausa al hover?
□ Clientes: ¿Hay fades en los bordes laterales?
□ CTAs: ¿Hay al menos un CTA cada 2 secciones al hacer scroll?
□ Mobile: ¿Hay sticky bar de contacto en la parte inferior?
□ Tipografía: ¿Los H2 de sección también usan Bebas Neue?
```

**NO marcar nada como ✅ sin abrir el browser y verificar visualmente.**

---

## NOTA SOBRE LOS LOGOS

Cuando tengas los archivos de logo listos:
- Copiá los SVG/PNG a `/public/logos/`
- Nombralos en minúsculas sin espacios: `ypf.svg`, `bunge.svg`, `pae.svg`, `invap.svg`, etc.
- El componente ClientMarquee ya está preparado para cargarlos automáticamente
- Ajustá el array `clients` con los nombres exactos de los archivos

Si los logos son PNG oscuros sobre fondo blanco:
- Usá `filter: 'brightness(0) invert(1)'` para hacerlos blancos sobre fondo oscuro
- Si son logos en color, usá `grayscale` por defecto y `grayscale-0` en hover

---

*construvial.vercel.app · Antigravity session · Abril 2025*
