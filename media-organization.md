# PROMPT PARA CLAUDE CODE — ORGANIZACIÓN DE MEDIA · CONSTRUVIAL S.A.

> Copiá este prompt completo y pegalo en Claude Code para auditar y reorganizar todos los archivos de imágenes y videos del proyecto.

---

## OBJETIVO

Reorganizar todos los archivos de imágenes y videos actualmente en `/public` en una estructura de carpetas semántica, con variantes separadas para **desktop** y **mobile**, y actualizar todas las referencias en el código.

---

## PASO 1 — AUDITORÍA: listar todos los archivos actuales

Ejecutar los siguientes comandos para inventariar todo el contenido multimedia del proyecto:

```bash
# 1. Listar todos los archivos de imagen y video en /public (recursivo)
find public/ -type f \( \
  -iname "*.jpg" -o -iname "*.jpeg" -o \
  -iname "*.png" -o -iname "*.webp" -o \
  -iname "*.avif" -o -iname "*.gif" -o \
  -iname "*.svg" -o \
  -iname "*.mp4" -o -iname "*.webm" -o -iname "*.mov" \
\) | sort

# 2. Para cada archivo, mostrar dimensiones y tamaño
find public/ -type f \( \
  -iname "*.jpg" -o -iname "*.jpeg" -o \
  -iname "*.png" -o -iname "*.webp" \
\) -exec sh -c 'echo "$1: $(du -sh "$1" | cut -f1)"' _ {} \;

# 3. Buscar TODAS las referencias a imágenes/videos en el código
grep -r \
  --include="*.tsx" --include="*.ts" --include="*.js" --include="*.css" \
  -E '(src=|url\(|from )["'"'"'][^"'"'"']*\.(jpg|jpeg|png|webp|avif|gif|svg|mp4|webm|mov)["'"'"']' \
  app/ components/ lib/ \
  | grep -v node_modules \
  | sort
```

Con ese inventario, clasificar cada archivo según la tabla de la siguiente sección.

---

## PASO 2 — ESTRUCTURA DE CARPETAS DESTINO

Crear la siguiente estructura en `/public/media/`:

```
public/
└── media/
    ├── brand/
    │   ├── logo.svg                      # Logo principal
    │   ├── logo-white.svg                # Variante blanca (para header oscuro)
    │   ├── logo-dark.svg                 # Variante oscura (para fondos claros)
    │   ├── favicon.ico
    │   ├── og-image.jpg                  # Open Graph 1200×630
    │   └── apple-touch-icon.png
    │
    ├── hero/
    │   ├── desktop/
    │   │   ├── hero-slide-1.jpg          # ≥ 1920×1080px — slide principal
    │   │   ├── hero-slide-2.jpg
    │   │   ├── hero-slide-3.jpg
    │   │   └── hero-slide-4.jpg
    │   ├── mobile/
    │   │   ├── hero-slide-1.jpg          # ≤ 828×1200px — recortado vertical
    │   │   ├── hero-slide-2.jpg
    │   │   ├── hero-slide-3.jpg
    │   │   └── hero-slide-4.jpg
    │   └── video/
    │       ├── hero-bg.mp4               # Video de fondo (si existe)
    │       └── hero-bg.webm              # Variante WebM para mejor compresión
    │
    ├── servicios/
    │   ├── desktop/
    │   │   ├── ingenieria-civil.jpg      # ≥ 800×600px
    │   │   ├── movimiento-suelos.jpg
    │   │   ├── alquiler-equipos.jpg
    │   │   ├── logistica.jpg
    │   │   └── departamento-tecnico.jpg
    │   └── mobile/
    │       ├── ingenieria-civil.jpg      # ≤ 600×400px — más compacto
    │       ├── movimiento-suelos.jpg
    │       ├── alquiler-equipos.jpg
    │       ├── logistica.jpg
    │       └── departamento-tecnico.jpg
    │
    ├── mercados/
    │   ├── desktop/
    │   │   ├── rutas.jpg
    │   │   ├── puentes.jpg
    │   │   ├── urbanizacion.jpg
    │   │   ├── hidraulica.jpg
    │   │   ├── edificacion.jpg
    │   │   └── mineria.jpg
    │   └── mobile/
    │       ├── rutas.jpg
    │       ├── puentes.jpg
    │       ├── urbanizacion.jpg
    │       ├── hidraulica.jpg
    │       ├── edificacion.jpg
    │       └── mineria.jpg
    │
    ├── obras/
    │   ├── desktop/
    │   │   ├── pavimentacion-ruta-6.jpg
    │   │   ├── nave-industrial-bunge.jpg
    │   │   ├── acueducto-norte.jpg
    │   │   ├── estructura-metalica-ypf.jpg
    │   │   ├── puente-rio-cuarto.jpg
    │   │   ├── planta-axion.jpg
    │   │   ├── terraplenado-ruta-9.jpg
    │   │   ├── subestacion-electrica.jpg
    │   │   └── canalizacion-arroyo.jpg
    │   ├── mobile/
    │   │   └── [mismos nombres, versión cuadrada o recortada]
    │   └── galeria/
    │       └── [slug-de-obra]/
    │           ├── 01.jpg
    │           ├── 02.jpg
    │           └── 03.jpg
    │
    ├── equipos/
    │   ├── desktop/
    │   │   ├── motocargador-frontal.jpg
    │   │   ├── retroexcavadora-cat320.jpg
    │   │   ├── rodillo-compactador.jpg
    │   │   ├── camion-volcador.jpg
    │   │   ├── camion-grua.jpg
    │   │   ├── carreton-vial-40tn.jpg
    │   │   ├── carreton-agricola.jpg
    │   │   ├── motoniveladora.jpg
    │   │   └── planta-stabilizado.jpg
    │   └── mobile/
    │       └── [mismos nombres]
    │
    ├── empresa/
    │   ├── desktop/
    │   │   ├── historia-obra.jpg         # Foto para sección "35 años"
    │   │   ├── equipo-tecnico.jpg        # Foto para sección "80 especialistas"
    │   │   └── instalaciones.jpg
    │   └── mobile/
    │       ├── historia-obra.jpg
    │       ├── equipo-tecnico.jpg
    │       └── instalaciones.jpg
    │
    └── logos/
        ├── nca.svg
        ├── axion.svg
        ├── ypf.svg
        ├── soenergy.svg
        ├── agd.svg
        ├── bunge.svg
        ├── fm.svg
        ├── pan-american-energy.svg
        ├── henisa.svg
        ├── municipio-rio-tercero.svg
        ├── embalse.svg
        ├── tecna.svg
        ├── agricultores-federados.svg
        ├── electroingenieria.svg
        ├── boetto.svg
        ├── andrade.svg
        ├── grupo-edisur.svg
        ├── intesar.svg
        ├── nasa.svg
        ├── ansaldo.svg
        ├── eastel.svg
        ├── transener.svg
        ├── coirini.svg
        └── invap.svg
```

---

## PASO 3 — REGLAS DE NOMENCLATURA

Aplicar estas reglas a **todos** los archivos al moverlos:

| Regla | Correcto | Incorrecto |
|---|---|---|
| Solo minúsculas | `hero-slide-1.jpg` | `Hero-Slide-1.jpg` |
| Guiones, no espacios ni underscores | `equipo-tecnico.jpg` | `equipo tecnico.jpg` / `equipo_tecnico.jpg` |
| Nombres descriptivos en español | `motoniveladora.jpg` | `img_307.jpg` / `picsum-300.jpg` |
| Formato explícito al final | `.jpg` para fotos, `.svg` para logos/íconos | `.jpeg` (renombrar a `.jpg`) |
| Sin números al azar | `hero-slide-1.jpg` | `hero1920x1080_v3_final.jpg` |

---

## PASO 4 — CRITERIO DESKTOP vs MOBILE

### ¿Qué va en `desktop/`?
- Imágenes con relación de aspecto **horizontal** (16:9, 4:3, 3:2)
- Resolución mínima: **1200px de ancho**
- Uso: hero backgrounds, cards de obras, grillas de servicios en pantallas grandes
- Calidad JPEG: **85%**

### ¿Qué va en `mobile/`?
- Imágenes con relación de aspecto **cuadrada o vertical** (1:1, 4:5, 9:16)
- Resolución máxima: **828px de ancho** (iPhone max-width)
- Uso: hero en portrait, cards en grilla de 1 columna, thumbnails
- Calidad JPEG: **80%** (más compresión para ahorrar datos en celular)

### Regla práctica
Si hoy solo existe la versión desktop, crear una versión mobile **recortando al centro** con `sharp` o `squoosh`. No es necesario tener dos fotos distintas — alcanza con dos exports del mismo archivo.

### Cuándo NO separar
Los archivos que **no** necesitan variante mobile/desktop van directo en la carpeta de categoría (sin subcarpeta):
- `brand/` — logos y OG image siempre iguales
- `logos/` — SVG son vectoriales, escalan solos
- `obras/galeria/` — las galerías solo se ven en desktop

---

## PASO 5 — MIGRAR LOS ARCHIVOS

```bash
# Crear toda la estructura de carpetas
mkdir -p public/media/brand
mkdir -p public/media/hero/desktop
mkdir -p public/media/hero/mobile
mkdir -p public/media/hero/video
mkdir -p public/media/servicios/desktop
mkdir -p public/media/servicios/mobile
mkdir -p public/media/mercados/desktop
mkdir -p public/media/mercados/mobile
mkdir -p public/media/obras/desktop
mkdir -p public/media/obras/mobile
mkdir -p public/media/obras/galeria
mkdir -p public/media/equipos/desktop
mkdir -p public/media/equipos/mobile
mkdir -p public/media/empresa/desktop
mkdir -p public/media/empresa/mobile
mkdir -p public/media/logos

# Mover y renombrar archivos según el mapa de la sección anterior
# EJEMPLO — ajustar según lo que encontró la auditoría del Paso 1:

# Logos de marca
mv public/Construvial-LogoNegro-300x138.png   public/media/brand/logo-dark.png
mv public/CONSTRUVIAL_logo.png                 public/media/brand/logo-white.png
mv public/Archivo/CONSTRUVIAL_logo.png         public/media/brand/logo-white.png  # si hay duplicado, conservar uno
mv public/logo.svg                             public/media/brand/logo.svg

# Hero slides (los que están directamente en /public)
mv public/hero-slide-1.jpg  public/media/hero/desktop/hero-slide-1.jpg
mv public/hero-slide-2.jpg  public/media/hero/desktop/hero-slide-2.jpg
mv public/hero-slide-3.jpg  public/media/hero/desktop/hero-slide-3.jpg
mv public/hero-slide-4.jpg  public/media/hero/desktop/hero-slide-4.jpg

# OG image
mv public/og-image.jpg      public/media/brand/og-image.jpg

# Nota: ajustar estos comandos según los archivos reales encontrados en el Paso 1
```

---

## PASO 6 — ACTUALIZAR REFERENCIAS EN EL CÓDIGO

Después de mover los archivos, buscar y reemplazar **todas** las rutas en el código fuente.

### 6a. Búsqueda global de rutas antiguas

```bash
# Encontrar todos los archivos que referencian /public directamente
grep -rn \
  --include="*.tsx" --include="*.ts" --include="*.js" \
  -E '["'"'"'](/hero-slide|/logo|/og-image|/Construvial|/Archivo)' \
  app/ components/ lib/
```

### 6b. Patrón de actualización en componentes con `next/image`

**Antes:**
```tsx
<Image src="/hero-slide-1.jpg" ... />
<Image src="/Construvial-LogoNegro-300x138.png" ... />
```

**Después — usando variantes responsive con `next/image`:**
```tsx
// Para imágenes con versión desktop/mobile usar el prop `src` condicional
// o la prop `sizes` de next/image para que sirva la correcta automáticamente

import Image from 'next/image'

// Opción A: una sola imagen con sizes (next/image elige el tamaño)
<Image
  src="/media/hero/desktop/hero-slide-1.jpg"
  alt="..."
  fill
  sizes="100vw"
  priority
/>

// Opción B: dos imágenes, una visible por breakpoint (recomendado para hero)
<>
  {/* Desktop: oculto en mobile */}
  <Image
    src="/media/hero/desktop/hero-slide-1.jpg"
    alt="..."
    fill
    className="hidden md:block object-cover"
    sizes="100vw"
    priority
  />
  {/* Mobile: oculto en desktop */}
  <Image
    src="/media/hero/mobile/hero-slide-1.jpg"
    alt="..."
    fill
    className="block md:hidden object-cover"
    sizes="100vw"
    priority
  />
</>
```

### 6c. Actualizar `lib/constants.ts` o donde estén definidas las rutas de imágenes

Si las rutas están centralizadas en un archivo de constantes, actualizarlas ahí:

```ts
// ANTES
export const HERO_SLIDES = [
  { src: '/hero-slide-1.jpg', ... },
  { src: '/hero-slide-2.jpg', ... },
]

// DESPUÉS
export const HERO_SLIDES = [
  {
    desktop: '/media/hero/desktop/hero-slide-1.jpg',
    mobile:  '/media/hero/mobile/hero-slide-1.jpg',
    alt: 'Flota de maquinaria vial Construvial',
  },
  {
    desktop: '/media/hero/desktop/hero-slide-2.jpg',
    mobile:  '/media/hero/mobile/hero-slide-2.jpg',
    alt: 'Obra vial en Córdoba',
  },
]

export const SERVICIOS_IMAGES = {
  'ingenieria-civil':      { desktop: '/media/servicios/desktop/ingenieria-civil.jpg',     mobile: '/media/servicios/mobile/ingenieria-civil.jpg' },
  'movimiento-suelos':     { desktop: '/media/servicios/desktop/movimiento-suelos.jpg',    mobile: '/media/servicios/mobile/movimiento-suelos.jpg' },
  'alquiler-equipos':      { desktop: '/media/servicios/desktop/alquiler-equipos.jpg',     mobile: '/media/servicios/mobile/alquiler-equipos.jpg' },
  'logistica':             { desktop: '/media/servicios/desktop/logistica.jpg',            mobile: '/media/servicios/mobile/logistica.jpg' },
  'departamento-tecnico':  { desktop: '/media/servicios/desktop/departamento-tecnico.jpg', mobile: '/media/servicios/mobile/departamento-tecnico.jpg' },
}

export const BRAND = {
  logoWhite: '/media/brand/logo-white.svg',
  logoDark:  '/media/brand/logo-dark.svg',
  ogImage:   '/media/brand/og-image.jpg',
}
```

### 6d. Actualizar `app/layout.tsx` — OG image y favicon

```tsx
export const metadata: Metadata = {
  // ...
  openGraph: {
    images: [{ url: '/media/brand/og-image.jpg', width: 1200, height: 630 }],
  },
}
```

### 6e. Actualizar `next.config.js` — si hay dominios remotos, no cambia nada

Solo aplica a archivos locales en `/public`. Las imágenes desde `cdn.sanity.io`, `lh3.googleusercontent.com` o `picsum.photos` ya tienen su URL completa y no necesitan cambios.

---

## PASO 7 — HELPER TYPESCRIPT PARA IMÁGENES RESPONSIVE

Crear `lib/media.ts` para centralizar la lógica de selección desktop/mobile:

```ts
export interface ResponsiveImage {
  desktop: string
  mobile: string
  alt: string
}

/**
 * Retorna la imagen correcta según el breakpoint.
 * Usar en componentes cliente con window.innerWidth,
 * o pasar ambas al componente y dejar que CSS controle la visibilidad.
 */
export function getImagePath(img: ResponsiveImage, variant: 'desktop' | 'mobile' = 'desktop') {
  return variant === 'mobile' ? img.mobile : img.desktop
}

/**
 * Genera el prop `sizes` correcto para next/image
 * según si la imagen ocupa el ancho completo o una fracción
 */
export const IMAGE_SIZES = {
  fullWidth:    '100vw',
  halfWidth:    '(max-width: 768px) 100vw, 50vw',
  thirdWidth:   '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  card:         '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',
} as const
```

**Uso en componentes:**

```tsx
import Image from 'next/image'
import { HERO_SLIDES, IMAGE_SIZES } from '@/lib/constants'

// En Hero.tsx
{HERO_SLIDES.map((slide) => (
  <>
    <Image
      src={slide.desktop}
      alt={slide.alt}
      fill
      sizes={IMAGE_SIZES.fullWidth}
      className="hidden md:block object-cover"
      priority
    />
    <Image
      src={slide.mobile}
      alt={slide.alt}
      fill
      sizes={IMAGE_SIZES.fullWidth}
      className="block md:hidden object-cover"
      priority
    />
  </>
))}
```

---

## PASO 8 — ELIMINAR ARCHIVOS HUÉRFANOS

Una vez migrado todo y verificado que el sitio carga correctamente:

```bash
# Buscar imágenes en la raíz de /public que ya no se usen
# (después de mover todo a /media/)
find public/ -maxdepth 1 -type f \( \
  -iname "*.jpg" -o -iname "*.jpeg" -o \
  -iname "*.png" -o -iname "*.webp" \
\)

# Si están todos movidos a /media/, se pueden borrar
# SIEMPRE verificar primero que no queden referencias en el código
grep -r "src=\"/hero-slide" app/ components/   # debe dar 0 resultados
grep -r "src=\"/logo"       app/ components/   # debe dar 0 resultados
```

---

## PASO 9 — VERIFICACIÓN FINAL

```bash
# El sitio no debe tener imágenes rotas. Correr el build y revisar warnings:
npm run build

# Buscar cualquier referencia que todavía apunte a rutas antiguas:
grep -rn \
  --include="*.tsx" --include="*.ts" \
  -E '["'"'"'](/hero-slide|/Construvial|/Archivo/|/og-image\.jpg)' \
  app/ components/
# → debe retornar vacío

# Confirmar que la nueva estructura existe correctamente:
find public/media -type f | sort
```

Checklist de verificación manual en el browser:
- [ ] Header: logo visible en home (fondo oscuro) y en páginas internas
- [ ] Hero: slideshow carga en desktop y en mobile (Chrome DevTools → iPhone 14)
- [ ] `/servicios`: imágenes de los 5 servicios cargan
- [ ] `/obras`: las 9 cards de obras cargan
- [ ] `/equipos`: las 9 fotos de equipos cargan
- [ ] `/quienes-somos`: foto de historia y equipo técnico cargan
- [ ] Open Graph: verificar con [opengraph.xyz](https://www.opengraph.xyz) que la imagen preview aparece

---

## RESUMEN DE LA NUEVA ESTRUCTURA

```
/public/media/
├── brand/          → logos, og-image, favicon
├── hero/
│   ├── desktop/    → slides 1920×1080
│   ├── mobile/     → slides 828×1200 (portrait)
│   └── video/      → .mp4 y .webm de fondo
├── servicios/
│   ├── desktop/    → 5 imágenes horizontales
│   └── mobile/     → 5 imágenes cuadradas
├── mercados/
│   ├── desktop/    → 6 imágenes
│   └── mobile/     → 6 imágenes
├── obras/
│   ├── desktop/    → thumbnails del portfolio
│   ├── mobile/     → thumbnails cuadrados
│   └── galeria/    → [slug]/ con fotos internas
├── equipos/
│   ├── desktop/    → fotos de maquinaria
│   └── mobile/     → fotos recortadas
├── empresa/
│   ├── desktop/    → fotos institucionales
│   └── mobile/     → versiones recortadas
└── logos/          → SVG de los 24 clientes (sin subcarpeta desktop/mobile)
```

---

*Proyecto: Construvial S.A. | Media Organization v1 · Abril 2026*
