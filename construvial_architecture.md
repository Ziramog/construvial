# PROMPT PARA CLAUDE CODE — SITIO WEB CONSTRUVIAL S.A.

> Copiá este prompt completo y pegalo en Claude Code para generar el proyecto.

---

## CONTEXTO DE LA EMPRESA

**Construvial S.A.** es una empresa constructora argentina con 35 años de trayectoria, sede en Río Tercero, Córdoba. Ejecuta obras viales, civiles, metálicas, electromecánicas y alquiler de equipos para el sector público y privado. Sus clientes incluyen YPF, INVAP/NASA, Axion, Pan American Energy, Bunge, AGD, Transener y Ansaldo, entre otros.

**Datos clave para el sitio:**
- 35 años de experiencia
- 500 obras finalizadas
- 30.000 m² construidos
- 80 personas en el equipo
- 40 ciudades de presencia
- Teléfonos: 03571 421350 / 423514
- Email: info@construvialsa.com.ar
- Dirección: Ángel V. Peñaloza 1154, Río Tercero, Córdoba, Argentina
- WhatsApp: https://wa.link/ocm4yr
- Instagram: @construvial_sa
- Facebook: https://www.facebook.com/profile.php?id=100068820263821

**Los 5 servicios principales:**
1. Ingeniería Civil (hormigón armado, estructuras metálicas, naves industriales, pavimentaciones, norias de acopio)
2. Movimientos de Suelo (obras viales, hidráulica, terraplenados, canalizaciones, puentes, excavaciones)
3. Alquiler y Venta de Equipos (equipos viales, transporte, carretones)
4. Logística y Distribución (carretones para equipos pesados, transporte de áridos)
5. Departamento Técnico (gerenciamiento de proyectos, piping, grandes proyectos)

---

## TAREA

Generá un proyecto web completo y production-ready para Construvial S.A. con el siguiente stack:

- **Framework:** Next.js 14 con App Router y TypeScript
- **Estilos:** Tailwind CSS
- **CMS:** Sanity.io (para que el cliente pueda cargar obras, equipos y posts sin tocar código)
- **Deploy target:** Vercel
- **Imágenes:** next/image con optimización automática
- **Formulario de contacto:** Resend o Nodemailer (a elección, con API route)
- **SEO:** Metadata API nativa de Next.js 14 (no next-seo)
- **Animaciones:** Framer Motion para page transitions y reveals on scroll

---

## IDENTIDAD VISUAL

**Paleta de colores:**
```
--color-primary: #1B3A6B       /* Azul institucional profundo */
--color-accent: #E8720C        /* Naranja construcción */
--color-dark: #0F1F3D          /* Casi negro azulado para fondos */
--color-light: #F5F7FA         /* Gris muy claro para fondos alternos */
--color-text: #1A1A2E          /* Texto principal */
--color-muted: #6B7280         /* Texto secundario */
```

**Tipografía:**
- Display/Títulos: `Barlow Condensed` (700, 800) — potencia industrial
- Body: `DM Sans` (400, 500) — legible y moderno
- Ambas desde Google Fonts via `next/font/google`

**Estilo general:** Industrial refinado. Robusto pero profesional. No genérico. Usar fondos oscuros en hero y secciones clave, fondos claros en contenido. Líneas de acento en naranja. Espaciado generoso. Fotografías como protagonistas.

---

## ESTRUCTURA DE CARPETAS A GENERAR

```
construvial-web/
├── app/
│   ├── layout.tsx                  # Root layout con fonts, metadata global, header, footer
│   ├── page.tsx                    # Home
│   ├── globals.css                 # Variables CSS + Tailwind base
│   ├── quienes-somos/
│   │   └── page.tsx
│   ├── servicios/
│   │   ├── page.tsx                # Overview de los 5 servicios
│   │   ├── ingenieria-civil/page.tsx
│   │   ├── movimiento-suelos/page.tsx
│   │   ├── alquiler-equipos/page.tsx
│   │   ├── logistica/page.tsx
│   │   └── departamento-tecnico/page.tsx
│   ├── obras/
│   │   ├── page.tsx                # Portfolio con filtros por categoría
│   │   └── [slug]/page.tsx         # Detalle de cada obra
│   ├── equipos/
│   │   └── page.tsx                # Catálogo de equipos
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contacto/
│   │   └── page.tsx
│   └── api/
│       └── contact/route.ts        # API route para formulario
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Nav sticky con logo + links + CTA WhatsApp
│   │   └── Footer.tsx              # Footer completo con links, contacto, redes
│   ├── home/
│   │   ├── Hero.tsx                # Hero fullscreen con video/imagen de fondo
│   │   ├── Stats.tsx               # Contador animado: 35 años, 500 obras, etc.
│   │   ├── ServicesGrid.tsx        # Grid de los 5 servicios con hover effects
│   │   ├── FeaturedWorks.tsx       # Obras destacadas en grid masonry
│   │   ├── ClientLogos.tsx         # Logo wall de los 24 clientes
│   │   └── CTABanner.tsx           # Banner de llamada a la acción
│   ├── obras/
│   │   ├── WorksGrid.tsx           # Grid filtrable de obras
│   │   ├── WorkCard.tsx            # Card de cada obra
│   │   └── WorkFilters.tsx         # Botones de filtro por categoría
│   ├── ui/
│   │   ├── Button.tsx              # Componente botón reutilizable (primary/secondary/ghost)
│   │   ├── SectionHeader.tsx       # Título + subtítulo de sección
│   │   ├── AnimatedCounter.tsx     # Contador numérico animado (para Stats)
│   │   └── WhatsAppButton.tsx      # Botón flotante de WhatsApp
│   └── contact/
│       └── ContactForm.tsx         # Formulario con validación
├── sanity/
│   ├── sanity.config.ts
│   ├── sanity.client.ts
│   ├── schemas/
│   │   ├── index.ts
│   │   ├── obra.ts                 # Schema de obra/proyecto
│   │   ├── equipo.ts               # Schema de equipo/maquinaria
│   │   └── post.ts                 # Schema de artículo del blog
│   └── queries/
│       ├── obras.ts                # GROQ queries para obras
│       ├── equipos.ts
│       └── posts.ts
├── lib/
│   ├── constants.ts                # Datos estáticos (servicios, clientes, contacto)
│   ├── utils.ts                    # Helpers
│   └── metadata.ts                 # Helper para generar metadata por página
├── public/
│   ├── logo.svg
│   └── og-image.jpg               # Open Graph default
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .env.local.example
└── package.json
```

---

## DETALLE DE COMPONENTES CLAVE

### `app/layout.tsx`
- Importar Barlow Condensed (700, 800) y DM Sans (400, 500) con `next/font/google`
- Variables CSS aplicadas al `:root`
- Metadata global con título, descripción, OG image, canonical URL
- Incluir `<Header />`, `{children}`, `<Footer />`, `<WhatsAppButton />`

### `components/home/Hero.tsx`
- Fullscreen (100vh) con imagen de fondo de obra (placeholder con `next/image` + priority)
- Overlay oscuro semitransparente
- Título grande en Barlow Condensed: "HACEMOS REALIDAD LOS PROYECTOS DE NUESTROS CLIENTES"
- Subtítulo: "35 años construyendo infraestructura para Argentina"
- Dos botones: "Ver nuestras obras" → /obras | "Contactanos" → /contacto
- Animación de entrada con Framer Motion (fade up staggered)

### `components/home/Stats.tsx`
- Fondo azul oscuro (#0F1F3D)
- 5 stats en grid horizontal: 35 años | 500 obras | 30K m² | 80 personas | 40 ciudades
- Números animados con `AnimatedCounter` cuando entran al viewport (Intersection Observer)
- Línea de acento naranja arriba de cada número

### `components/home/ClientLogos.tsx`
- Grid de logos de los 24 clientes (imágenes en escala de grises, full color on hover)
- Fondo blanco o gris muy claro
- Título de sección: "Empresas que confían en nosotros"
- Los 24 clientes: NCA, Axion, YPF, SoEnergy, AGD, Bunge, FM, PAE, HENISA, Río Tercero, Embalse, TECNA, Agricultores, Electroingeniería, Boetto, Andrade, Grupo Edisur, INTESAR, NASA, ANSALDO, EASTEL, Transener, COIRINI, INVAP

### `components/obras/WorksGrid.tsx`
- Filtros por categoría: Todas | Viales | Civiles | Industriales | Electromecánicas
- Grid de 3 columnas en desktop, 2 en tablet, 1 en mobile
- Filtrado animado con Framer Motion (AnimatePresence)
- Cada card: imagen + categoría badge + título + cliente + CTA "Ver más"

### `app/contacto/page.tsx`
- Dos columnas: formulario izquierda, datos de contacto derecha
- Campos: Nombre, Email, Teléfono, Tipo de consulta (select), Mensaje, Botón enviar
- Validación del lado del cliente
- API route `/api/contact` para enviar el email
- Mapa de Google Maps embebido de la dirección
- Links directos a WhatsApp, teléfonos y email

### `components/layout/Header.tsx`
- Logo izquierda
- Nav links: Inicio | Quiénes somos | Servicios (con dropdown de los 5) | Obras | Equipos | Blog | Contacto
- Botón CTA naranja: "Consultanos" → abre WhatsApp
- Sticky con fondo transparente en top, sólido al hacer scroll (con transición)
- Hamburger menu en mobile

### `components/ui/WhatsAppButton.tsx`
- Botón flotante fijo abajo a la derecha
- Ícono de WhatsApp en verde
- Tooltip "¡Chateá con nosotros!" on hover
- Link a `https://wa.link/ocm4yr`

---

## SANITY SCHEMAS

### `sanity/schemas/obra.ts`
```typescript
export const obraSchema = {
  name: 'obra',
  title: 'Obras',
  type: 'document',
  fields: [
    { name: 'titulo', title: 'Título', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titulo' }, validation: (R: any) => R.required() },
    { name: 'cliente', title: 'Cliente', type: 'string' },
    {
      name: 'categoria', title: 'Categoría', type: 'string',
      options: { list: [
        { title: 'Obras Viales', value: 'viales' },
        { title: 'Obras Civiles', value: 'civiles' },
        { title: 'Obras Industriales', value: 'industriales' },
        { title: 'Electromecánica', value: 'electromecanica' },
        { title: 'Movimiento de Suelos', value: 'suelos' },
      ]}
    },
    { name: 'descripcion', title: 'Descripción', type: 'text' },
    { name: 'ubicacion', title: 'Ubicación', type: 'string' },
    { name: 'anio', title: 'Año', type: 'number' },
    { name: 'destacada', title: '¿Obra destacada?', type: 'boolean', description: 'Mostrar en la home' },
    { name: 'imagenPrincipal', title: 'Imagen Principal', type: 'image', options: { hotspot: true } },
    { name: 'galeria', title: 'Galería', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
  ],
  preview: { select: { title: 'titulo', subtitle: 'cliente', media: 'imagenPrincipal' } }
}
```

### `sanity/schemas/equipo.ts`
```typescript
export const equipoSchema = {
  name: 'equipo',
  title: 'Equipos',
  type: 'document',
  fields: [
    { name: 'nombre', title: 'Nombre del Equipo', type: 'string' },
    { name: 'tipo', title: 'Tipo', type: 'string',
      options: { list: ['Vial', 'Transporte', 'Carretón', 'Logística'] }
    },
    { name: 'descripcion', title: 'Descripción', type: 'text' },
    { name: 'especificaciones', title: 'Especificaciones técnicas', type: 'text' },
    { name: 'disponibleParaAlquiler', title: 'Disponible para alquiler', type: 'boolean' },
    { name: 'imagen', title: 'Imagen', type: 'image', options: { hotspot: true } },
  ]
}
```

### `sanity/schemas/post.ts`
```typescript
export const postSchema = {
  name: 'post',
  title: 'Blog / Noticias',
  type: 'document',
  fields: [
    { name: 'titulo', title: 'Título', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titulo' } },
    { name: 'resumen', title: 'Resumen', type: 'text' },
    { name: 'contenido', title: 'Contenido', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'imagenPortada', title: 'Imagen de portada', type: 'image', options: { hotspot: true } },
    { name: 'fechaPublicacion', title: 'Fecha de publicación', type: 'date' },
    { name: 'categoria', title: 'Categoría', type: 'string',
      options: { list: ['Obras', 'Equipos', 'Sector', 'Empresa'] }
    },
  ]
}
```

---

## `lib/constants.ts` — DATOS ESTÁTICOS

```typescript
export const CONTACT = {
  phone1: '03571 421350',
  phone2: '03571 423514',
  email: 'info@construvialsa.com.ar',
  address: 'Ángel V. Peñaloza 1154, Río Tercero, Córdoba, Argentina',
  whatsapp: 'https://wa.link/ocm4yr',
  instagram: 'https://www.instagram.com/construvial_sa/',
  facebook: 'https://www.facebook.com/profile.php?id=100068820263821',
}

export const STATS = [
  { value: 35, suffix: '', label: 'Años de experiencia' },
  { value: 500, suffix: '+', label: 'Obras finalizadas' },
  { value: 30, suffix: 'K', label: 'Metros cuadrados' },
  { value: 80, suffix: '', label: 'Personas capacitadas' },
  { value: 40, suffix: '', label: 'Ciudades con presencia' },
]

export const SERVICIOS = [
  {
    slug: 'ingenieria-civil',
    titulo: 'Ingeniería Civil',
    descripcion: 'Hormigón armado, estructuras metálicas, naves industriales, pavimentaciones e intersecciones.',
    items: ['Hormigón Armado', 'Estructuras Metálicas', 'Naves Industriales', 'Pavimentaciones', 'Norias de Acopio', 'Intersecciones', 'Consultoría'],
    icon: 'building',
  },
  {
    slug: 'movimiento-suelos',
    titulo: 'Movimiento de Suelos',
    descripcion: 'Obras viales, hidráulica, terraplenados, canalizaciones, puentes y excavaciones de gran envergadura.',
    items: ['Obras Viales', 'Hidráulica y Saneamiento', 'Terraplenados', 'Canalizaciones', 'Alcantarillas y Puentes', 'Lagos Artificiales', 'Mantenimiento Vial'],
    icon: 'excavator',
  },
  {
    slug: 'alquiler-equipos',
    titulo: 'Alquiler de Equipos',
    descripcion: 'Flota completa de equipamiento vial y logístico certificado disponible para alquiler.',
    items: ['Equipos Viales', 'Equipos de Transporte', 'Carretones Viales', 'Carretones Agrícolas'],
    icon: 'truck',
  },
  {
    slug: 'logistica',
    titulo: 'Logística y Distribución',
    descripcion: 'Transporte especializado de equipos pesados, áridos y logística integral de obras.',
    items: ['Carretones para Equipos Pesados', 'Transporte de Equipos', 'Transporte de Áridos'],
    icon: 'route',
  },
  {
    slug: 'departamento-tecnico',
    titulo: 'Departamento Técnico',
    descripcion: 'Gerenciamiento y desarrollo de grandes proyectos con especialistas en piping y administración de obras.',
    items: ['Gerenciamiento de Proyectos', 'Piping', 'Administración de M.O.', 'Grandes Proyectos'],
    icon: 'blueprint',
  },
]

export const CLIENTES = [
  'NCA', 'Axion', 'YPF', 'SoEnergy', 'AGD', 'Bunge',
  'FM', 'Pan American Energy', 'HENISA', 'Municipio Río Tercero',
  'Embalse', 'TECNA', 'Agricultores Federados', 'Electroingeniería',
  'Boetto', 'Andrade', 'Grupo Edisur', 'INTESAR', 'NASA',
  'ANSALDO', 'EASTEL', 'Transener', 'COIRINI', 'INVAP',
]
```

---

## `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B3A6B',
        accent: '#E8720C',
        dark: '#0F1F3D',
        'dark-2': '#162847',
        muted: '#6B7280',
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

---

## `.env.local.example`

```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=tu_token_de_lectura

# Email (Resend)
RESEND_API_KEY=tu_api_key
CONTACT_EMAIL_TO=info@construvialsa.com.ar

# URL
NEXT_PUBLIC_SITE_URL=https://construvialsa.com.ar
```

---

## `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
}
module.exports = nextConfig
```

---

## SEO — Metadata por página

Usar la Metadata API de Next.js 14. Ejemplo para la home:

```typescript
// app/page.tsx
export const metadata: Metadata = {
  title: 'Construvial S.A. | Empresa Constructora Vial y Civil | Córdoba, Argentina',
  description: '35 años ejecutando obras viales, civiles, metálicas y electromecánicas. 500 obras finalizadas. Alquiler de equipos. Río Tercero, Córdoba.',
  keywords: ['constructora vial cordoba', 'obras civiles argentina', 'alquiler equipos viales', 'empresa constructora cordoba'],
  openGraph: {
    title: 'Construvial S.A.',
    description: '35 años construyendo infraestructura para Argentina.',
    url: 'https://construvialsa.com.ar',
    siteName: 'Construvial S.A.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'es_AR',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://construvialsa.com.ar' },
}
```

Crear metadata equivalente para cada página bajo su ruta correspondiente.

---

## INSTRUCCIONES FINALES PARA CLAUDE CODE

1. Generá **todos los archivos** de la estructura listada arriba con código completo y funcional
2. Usá **TypeScript** en todos los archivos `.tsx` y `.ts`
3. Los componentes deben tener **props tipadas** con interfaces
4. Usá **Tailwind CSS** exclusivamente para estilos (no CSS modules ni styled-components)
5. Las páginas que consumen Sanity deben usar `fetch` con revalidación: `{ next: { revalidate: 3600 } }`
6. Agregá **placeholder images** con `next/image` donde no haya imágenes reales (usar `https://picsum.photos` o similar)
7. El formulario de contacto debe tener validación en el cliente y manejar estados: idle | loading | success | error
8. Generá el `package.json` con todas las dependencias necesarias:
   - next, react, react-dom, typescript
   - tailwindcss, postcss, autoprefixer
   - @sanity/client, next-sanity, @sanity/image-url
   - framer-motion
   - resend
   - lucide-react (para íconos)
   - @types/node, @types/react, @types/react-dom
9. Incluir `README.md` con instrucciones de setup: clonar, instalar, configurar `.env.local`, correr Sanity Studio y `npm run dev`
10. El código debe estar listo para hacer `npm install && npm run dev` sin errores

---

*Empresa: Construvial S.A. | construvialsa.com.ar | Río Tercero, Córdoba, Argentina*
