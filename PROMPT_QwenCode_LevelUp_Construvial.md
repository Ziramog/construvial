# LEVEL-UP PROMPT — CONSTRUVIAL.VERCEL.APP
# Para Qwen Code — Refactor visual y UX completo del sitio existente

---

## DIAGNÓSTICO DEL SITIO ACTUAL

El sitio en construvial.vercel.app funciona bien técnicamente pero es visualmente genérico.
Problemas concretos a resolver:

1. Hero con foto Unsplash + texto centrado = igual a 10.000 sitios de construcción
2. Stats section con contadores animados en fondo azul = cliché del sector
3. Logo wall de clientes es texto plano, no logos reales
4. Portfolio: grilla de cards 3 columnas sin jerarquía visual ni storytelling
5. Equipos: cards uniformes tipo catálogo, sin drama visual
6. Tipografía sin personalidad — funcional pero olvidable
7. Cero sensación de escala — no se siente que son 500 obras y 35 años

## DIRECCIÓN DE DISEÑO

**Concepto:** "Tierra, acero y escala"
La identidad visual debe evocar lo que Construvial realmente hace:
mover tierra, levantar estructuras de acero, construir la infraestructura del país.
Materiales, texturas, peso. No corporativo genérico.

**Referencias de tono visual:**
- Bjarke Ingels Group (big.dk) — uso del espacio, tipografía bold, proyectos como protagonistas
- Caterpillar.com — drama industrial, maquinaria como objetos de diseño
- Züblin (zueblin.de) — constructora alemana con presencia visual brutal

**Estética final:**
- Oscuro por defecto en secciones hero/highlight, claro en contenido de lectura
- Tipografía ultra-condensada para títulos (impacto visual inmediato)
- Fotografías tratadas con overlay sutil, no tapadas con gradientes agresivos
- Líneas de acento en naranja (#E8720C) usadas con precisión, no decorativamente
- Layouts asimétricos — romper la grilla en momentos clave
- Transiciones de scroll que den sensación de peso y movimiento real

---

## CAMBIOS ESPECÍFICOS A IMPLEMENTAR

### 1. TIPOGRAFÍA — Cambio completo

**Reemplazar** las fuentes actuales por:
```css
/* En app/layout.tsx y globals.css */
import { Bebas_Neue, Inter_Tight } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})
```

- **Bebas Neue**: todos los H1, H2, números grandes, labels de categoría
- **Inter Tight**: todo el body, navegación, botones, specs técnicas
- Escala tipográfica agresiva: H1 en desktop mínimo `text-8xl` (96px), en mobile `text-5xl`

---

### 2. HERO — Reescribir completamente `components/home/Hero.tsx`

**Concepto:** Split layout asimétrico. NO imagen fullscreen con texto encima.

```
Layout desktop:
┌─────────────────────────────────────────────────┐
│ 60% izquierda oscura          │ 40% imagen      │
│                               │ real de obra    │
│  HACEMOS                      │                 │
│  REALIDAD                     │ [foto que       │
│  LOS PROYECTOS                │  ocupa toda     │
│  DE NUESTROS                  │  la altura]     │
│  CLIENTES                     │                 │
│                               │                 │
│  [línea naranja 2px]          │                 │
│  35 años construyendo         │                 │
│  infraestructura              │                 │
│                               │                 │
│  [CTA] [CTA ghost]            │                 │
└─────────────────────────────────────────────────│
```

```tsx
// components/home/Hero.tsx — estructura base
export default function Hero() {
  return (
    <section className="min-h-screen flex">
      {/* Panel izquierdo — contenido */}
      <div className="w-full lg:w-[58%] bg-[#0A1628] flex flex-col justify-center
                      px-8 md:px-16 lg:px-20 py-24 relative overflow-hidden">
        
        {/* Textura de ruido sutil como fondo */}
        <div className="absolute inset-0 opacity-[0.03] bg-noise" />
        
        {/* Año fundación — detalle superior */}
        <p className="font-body text-[#E8720C] text-sm tracking-[0.3em] uppercase mb-8">
          Desde 1989 · Río Tercero, Córdoba
        </p>

        {/* Título — Bebas Neue, massive */}
        <h1 className="font-display text-[clamp(64px,8vw,120px)] leading-[0.9] 
                        text-white uppercase mb-6">
          Hacemos<br/>
          <span className="text-[#E8720C]">realidad</span><br/>
          los proyectos<br/>
          de nuestros<br/>
          clientes
        </h1>

        {/* Línea divisora naranja */}
        <div className="w-16 h-[2px] bg-[#E8720C] mb-6" />

        {/* Bajada */}
        <p className="font-body text-gray-400 text-lg max-w-md mb-12 leading-relaxed">
          Obras viales, civiles, metálicas y electromecánicas.
          500 proyectos finalizados en 40 ciudades de Argentina.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/obras" className="inline-flex items-center gap-3 bg-[#E8720C] 
              text-white font-body font-600 px-8 py-4 hover:bg-orange-600 
              transition-colors duration-200 group">
            Ver nuestras obras
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="/contacto" className="inline-flex items-center gap-3 border 
              border-white/20 text-white font-body px-8 py-4 
              hover:border-white/60 transition-colors duration-200">
            Contactanos
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-20 flex items-center gap-3 opacity-40">
          <div className="w-8 h-[1px] bg-white" />
          <span className="font-body text-white text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </div>

      {/* Panel derecho — imagen */}
      <div className="hidden lg:block lg:w-[42%] relative">
        <Image
          src="[imagen de obra real]"
          alt="Obra Construvial"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay mínimo para que respire la imagen */}
        <div className="absolute inset-0 bg-[#0A1628]/20" />
        
        {/* Badge flotante con stat */}
        <div className="absolute bottom-12 left-[-60px] bg-[#E8720C] p-6 z-10">
          <p className="font-display text-5xl text-white leading-none">500+</p>
          <p className="font-body text-white/80 text-sm mt-1">Obras finalizadas</p>
        </div>
      </div>
    </section>
  )
}
```

---

### 3. STATS — Rediseñar `components/home/Stats.tsx`

**Cambio:** De "sección separada azul" a una banda integrada entre el hero y servicios.
Diseño horizontal, números GRANDES con Bebas Neue, sin fondo azul sólido.
Usar borde superior/inferior en naranja para delimitar, fondo casi negro.

```tsx
// Stats rediseñadas — banda horizontal minimalista
const stats = [
  { number: '35', suffix: '', label: 'Años de\nexperiencia' },
  { number: '500', suffix: '+', label: 'Obras\nfinalizadas' },
  { number: '30', suffix: 'K', label: 'Metros²\nconstruidos' },
  { number: '80', suffix: '', label: 'Personas\ncapacitadas' },
  { number: '40', suffix: '', label: 'Ciudades\nde presencia' },
]

// Cada stat:
// Número en Bebas Neue text-7xl text-white
// Sufijo en text-[#E8720C] mismo tamaño
// Label en Inter Tight text-xs uppercase tracking-widest text-gray-500
// Separados por línea vertical 1px en gris oscuro
// Fondo: #080F1E (casi negro)
// Banda superior e inferior: border-t/b border-[#E8720C]/30
```

---

### 4. SERVICIOS — Rediseñar `components/home/ServicesGrid.tsx`

**Cambio:** De cards con fondo blanco y border-radius a un layout de lista numerada
con líneas de separación. Más editorial, menos corporativo.

```
01 — INGENIERÍA CIVIL                           →
     Hormigón armado, estructuras metálicas...

02 — MOVIMIENTO DE SUELOS                       →
     Obras viales, hidráulica, terraplenados...

[etc.]
```

```tsx
// Cada item del servicio:
// Número en Bebas Neue, text-6xl, color gray-700 (casi invisible — detalle)
// Guión separador naranja
// Título en Bebas Neue text-3xl text-white uppercase
// Descripción en Inter Tight text-sm text-gray-400
// Flecha → en naranja que aparece on hover + translate-x
// Border-bottom: 1px solid gray-800
// Hover: background se ilumina levemente (bg-white/[0.02])
// Fondo de toda la sección: #0D1B2A

// NO usar cards. NO usar iconos con border-radius.
// Es una lista con peso visual, no un grid de features.
```

---

### 5. PORTFOLIO HOME — Rediseñar `components/home/FeaturedWorks.tsx`

**Cambio:** De 4 cards iguales a un layout asimétrico tipo magazine.

```
Desktop layout:
┌─────────────────────┬──────────┐
│                     │  obra 2  │
│      obra 1         ├──────────┤
│  (70% del ancho)    │  obra 3  │
│                     │          │
└─────────────────────┴──────────┘
```

```tsx
// Obra 1 (destacada): imagen grande, overlay gradient abajo,
//   título en Bebas Neue text-4xl, categoría badge naranja top-left
//   al hover: imagen hace scale(1.03) suave

// Obras 2 y 3: apiladas a la derecha, mitad del ancho
//   mismos elementos pero compactos

// Título de sección: NO usar "Obras Destacadas" con subtitle genérico
// Usar: "500 obras. Estas son algunas." — directo, con personalidad

// CTA al final: link de texto con línea animada under, no botón
//   "Ver todas las obras →" con underline que se dibuja on hover
```

---

### 6. CLIENTES — Rediseñar `components/home/ClientLogos.tsx`

**Problema crítico:** Los logos son texto plano. No hay imágenes de logos.
Esto se ve amateur con clientes como YPF, NASA, Bunge.

**Solución inmediata:** Hasta tener los logos reales, cambiar el tratamiento visual.

```tsx
// Opción A (con logos reales — preferida):
// Grid de logos reales en PNG/SVG
// Filtro CSS: grayscale(100%) opacity(50%) por defecto
// On hover: grayscale(0%) opacity(100%) con transition 300ms

// Opción B (sin logos aún — temporal):
// En lugar de texto plano, cada cliente en una celda con:
//   - Borde sutil (border border-white/10)
//   - Nombre en Bebas Neue text-xl
//   - Fondo hover: bg-[#E8720C]/10
// Se ve como "tiles" en vez de lista de texto

// Título de sección: "Las empresas más importantes del país confían en nosotros"
// Sub: "YPF · INVAP · NASA · Bunge · Pan American Energy · Transener y 18 más"
// Esto es más impactante que el grid de 24 nombres iguales
```

---

### 7. PÁGINA /obras — Rediseñar completamente

**Cambio:** La grilla de 3 columnas uniforme no comunica la escala de lo que hacen.

```tsx
// Nueva estructura de /obras:

// 1. Header: "500 obras en 35 años" — número gigante en background
//    Estilo: el "500" en Bebas Neue text-[20vw] color white/5 como watermark,
//    encima el título real visible

// 2. Filtros: rediseñar como tabs con línea inferior animada,
//    no como botones con background

// 3. Grid asimétrico que se repite cada 5 obras:
//    [grande][chico][chico]
//    [chico][chico][grande]
//    La primera carta de cada grupo tiene imagen más alta

// 4. Cada WorkCard rediseñada:
//    - Imagen ocupa 100% del card (no card con padding)
//    - Overlay gradient de negro-transparente SOLO abajo
//    - Info (categoría, título, cliente) flotando sobre la imagen abajo
//    - Categoría: badge pequeño con fondo naranja
//    - Hover: overlay levemente más claro + aparece "Ver proyecto →"
//    - NO border-radius. Esquinas rectas. Industrial.

// 5. Numeración de cada obra: "001", "002"... en esquina top-right
//    color white/30 — detalle que da profundidad editorial
```

---

### 8. PÁGINA /equipos — Rediseñar

**Concepto:** Catálogo de maquinaria pesada tratado como si fuera automovilístico.
Cada máquina merece una presentación que transmita su tamaño real.

```tsx
// Nueva estructura de /equipos:

// 1. Hero con número grande: "Flota de 40+ equipos certificados"
//    El número en Bebas Neue gigante como fondo

// 2. Filtro por tipo: Vial | Transporte | Carretón | Logística
//    Tabs con número de equipos en cada categoría: "Vial (12)"

// 3. Layout de equipos — CAMBIO RADICAL:
//    Cada equipo en formato horizontal en desktop:
//    ┌──────────────────────────────────────────────────┐
//    │ [IMAGEN 40%] │ nombre grande    · DISPONIBLE  │
//    │              │ tipo de equipo                    │
//    │              │ ─────────────────────────────      │
//    │              │ descripción técnica breve          │
//    │              │                                    │
//    │              │ SPECS en grid 2x2:                 │
//    │              │ Capacidad: 3m³  Peso: 15 Tn       │
//    │              │ Potencia: 235HP Año: 2020          │
//    │              │                                    │
//    │              │ [Consultar disponibilidad →]       │
//    └──────────────────────────────────────────────────┘
//    Separados por border-b, NO cards flotantes

// 4. Badge DISPONIBLE: verde (#16A34A) | NO DISPONIBLE: gris
//    Badge pequeño, no llamativo — info, no decoración

// 5. Specs en monospace font (font-mono) — da sensación técnica/industrial
```

---

### 9. NAVEGACIÓN — Ajustes al Header existente

```tsx
// Cambios específicos al Header.tsx:

// 1. Logo: aumentar tamaño 20%, asegurar que sea SVG nítido

// 2. Links de navegación:
//    - Fuente: Inter Tight 500, text-sm, tracking-wide
//    - Color: text-white/70 por defecto
//    - Hover: text-white (no color, no underline)
//    - Link activo: text-[#E8720C]

// 3. Dropdown de Servicios:
//    - Fondo: #0D1B2A con border border-white/10
//    - Sin border-radius o border-radius mínimo (2px)
//    - Cada ítem: hover bg-[#E8720C]/10

// 4. CTA "Consultanos":
//    - Mantener naranja PERO: sin border-radius
//    - padding más generoso: px-6 py-2.5
//    - font-body font-600 tracking-wider uppercase text-xs

// 5. Scroll behavior:
//    - En top: header con bg-transparent border-b border-transparent
//    - Al scroll: bg-[#0A1628]/95 backdrop-blur-sm border-b border-white/10
//    - Transición: duration-300

// 6. Mobile menu:
//    - Fondo: bg-[#0A1628] full screen
//    - Links en Bebas Neue text-4xl — impacto visual
//    - Línea naranja horizontal entre cada item
```

---

### 10. GLOBALS.CSS — Agregar texturas y variables

```css
/* globals.css — agregar al final */

:root {
  --color-primary: #1B3A6B;
  --color-accent: #E8720C;
  --color-dark: #0A1628;
  --color-dark-2: #0D1B2A;
  --color-dark-3: #080F1E;
}

/* Textura de ruido sutil para fondos oscuros */
.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  background-size: 256px 256px;
}

/* Underline animado para links */
.link-underline {
  position: relative;
}
.link-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #E8720C;
  transition: width 0.3s ease;
}
.link-underline:hover::after {
  width: 100%;
}

/* Scrollbar custom */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #0A1628; }
::-webkit-scrollbar-thumb { background: #E8720C; border-radius: 0; }

/* Selection color */
::selection {
  background: #E8720C;
  color: white;
}
```

---

### 11. FRAMER MOTION — Animaciones con peso

```tsx
// Reemplazar las animaciones genéricas de fade-up por animaciones
// que transmitan la pesadez/escala del sector.

// Para títulos H1 — revelar por línea (no todo junto):
const titleVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

// Para imágenes — revelar con clip-path (cortina):
const imageReveal = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
  }
}

// Para stats — entran con slide desde abajo, escalonados:
const statVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' }
  })
}

// IMPORTANTE: usar whileInView con once: true para que solo animen al entrar al viewport
// <motion.div whileInView="visible" initial="hidden" viewport={{ once: true, margin: "-100px" }}>
```

---

### 12. PÁGINA /quienes-somos — Rediseñar con storytelling

**Concepto:** No "nosotros somos una empresa de..." — contar la historia.

```tsx
// Estructura nueva de /quienes-somos:

// 1. HERO: "1989 — 2025" en Bebas Neue gigante como fondo
//    Encima: "35 años construyendo la Argentina"

// 2. TIMELINE horizontal con hitos de la empresa:
//    1989 | Fundación en Río Tercero
//    1995 | Primera obra vial provincial
//    2003 | Incorporación de equipos certificados
//    2010 | Primeras obras para sector energético
//    2018 | Obras para INVAP y NASA
//    2025 | 500+ obras finalizadas
//    (Los años reales los completa el cliente)

// 3. MISIÓN/VISIÓN/VALORES:
//    No en 3 cards iguales. En layout tipo quote:
//    Fondo oscuro. Texto grande. Una idea por pantalla visible.

// 4. EQUIPO:
//    "80 profesionales" — foto grupal grande o grilla de retratos reales
//    No stock photos, no avatares genéricos.
```

---

## PACKAGE.JSON — Verificar dependencias

Asegurar que estén instaladas:
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "latest",
    "@sanity/client": "^6.0.0",
    "@sanity/image-url": "^1.0.0"
  }
}
```

---

## PRIORIDAD DE IMPLEMENTACIÓN

Hacer en este orden (de mayor a menor impacto visual):

1. **Tipografía** — Bebas Neue + Inter Tight en todo el sitio
2. **Hero** — Split layout asimétrico
3. **globals.css** — Variables, scrollbar, selection, noise texture
4. **Servicios home** — Lista numerada editorial
5. **Portfolio home** — Layout asimétrico tipo magazine
6. **Página /obras** — Grid asimétrico + cards sin border-radius
7. **Página /equipos** — Layout horizontal por equipo
8. **Stats** — Banda rediseñada
9. **Header** — Ajustes tipografía y hover states
10. **Quiénes somos** — Timeline + storytelling

---

## LO QUE NO TOCAR

- La estructura de rutas (App Router) — funciona bien
- La integración con Sanity — funciona bien
- El formulario de contacto y API route — funciona bien
- El componente WhatsAppButton flotante — mantener, solo ajustar estilo
- Los schemas de Sanity — no modificar

---

## RESULTADO ESPERADO

Un sitio que cuando lo ve un cliente de Construvial piense:
*"Esta empresa construye a esta escala"*

No: *"Tienen un buen sitio web"*

La diferencia es que el diseño debe comunicar la magnitud del trabajo,
no solo describirlo.

---

*construvial.vercel.app — Level-up visual y UX — Abril 2025*
