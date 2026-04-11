# DIAGNÓSTICO COMPLETO — construvial.vercel.app
### Auditoría de integridad, contenido y nivel de diseño premium
**Fecha:** Abril 2025 | **Para usar con:** Qwen Code

---

## RESUMEN EJECUTIVO

El sitio tiene dos versiones de UI conviviendo en la misma URL — un problema grave de integridad que hay que resolver antes que cualquier otra cosa. Las páginas internas (`/quienes-somos`, `/servicios`, `/contacto`, `/blog`) usan un diseño completamente diferente al de la home y el portfolio. Desde ahí se desencadenan todos los demás problemas.

**Nivel actual de diseño:** 5/10 — Funcional, incompleto, inconsistente.
**Nivel objetivo:** 9/10 — Premium, cohesivo, memorable.

---

## 🚨 PROBLEMA CRÍTICO #0 — DOS SISTEMAS DE DISEÑO EN CONFLICTO

Este es el problema más urgente de todo el sitio.

### Sistema A (Home + /obras + /equipos)
- Header: Logo "CONSTRUVIAL" + links de texto + botón naranja "Consultanos"
- Navigation links van a rutas reales: `/obras`, `/equipos`, `/blog`, `/contacto`
- Estilo visual: oscuro, moderno, coherente

### Sistema B (/quienes-somos + /servicios + /servicios/* + /contacto + /blog)
- Header: Logo "CONSTRUVIAL® / Construcciones Viales y Civiles" + links DISTINTOS
- Navigation links van a **anclas de home** que no existen en páginas internas: `/#servicios`, `/#mercados`, `/#proyectos`, `/#empresa`
- Footer diferente, tipografía diferente, estructura diferente
- Tiene sección "Certificaciones" con imágenes `/iso-9001.png` y `/iso-14001.png` que **no existen** (broken images)
- Tiene línea "Diseño: [logo de Construvial]" al final del footer — texto de maqueta que nunca se eliminó

### Impacto
Un usuario que navega desde la home a "Quiénes Somos" llega a una página que parece otro sitio web. Los links del header interno no llevan a ningún lado útil. Es una experiencia rota.

**FIX REQUERIDO:** Unificar en un solo sistema de diseño. Eliminar el Sistema B completo. Todas las páginas deben usar el header/footer del Sistema A.

---

## AUDITORÍA POR SECCIÓN

---

### SECCIÓN 1 — HEADER / NAVEGACIÓN
**Página:** Global (System A)
**Estado:** ⚠️ Parcialmente funcional

#### Problemas detectados:

**1.1 — Inconsistencia de navegación entre sistemas**
- Sistema A: links correctos a rutas
- Sistema B: links a `#mercados` y `#proyectos` — anclas que no existen en ninguna página
- **Fix:** Eliminar Sistema B, usar solo Sistema A en todas las páginas

**1.2 — Dropdown de Servicios no tiene indicación visual de submenu en mobile**
- En desktop el dropdown funciona, en mobile la experiencia no está especificada

**1.3 — El header no tiene link activo resaltado**
- No hay indicación visual de en qué página está el usuario
- **Fix:** Agregar `aria-current="page"` y estilos de link activo en naranja

**1.4 — Teléfonos pegados en el footer**
- "03571 42135003571 423514" — los dos números están concatenados sin separador
- **Fix:** `03571 421350 · 03571 423514`

---

### SECCIÓN 2 — HERO (Home)
**Estado:** ⚠️ Diseño genérico, imagen placeholder

#### Problemas detectados:

**2.1 — Imagen de Unsplash genérica**
- La imagen del hero es de stock (Unsplash). No muestra una obra real de Construvial.
- Esto es el primer impacto visual. Un cliente que conoce la empresa lo nota inmediatamente.
- **Fix:** Reemplazar con imagen real de obra de Construvial en cuanto esté disponible. Mientras tanto, usar una imagen de mejor calidad y más específica al rubro (no una foto genérica de construcción).

**2.2 — Layout fullscreen con texto centrado**
- Idéntico al patrón de 10.000 sitios de construcción
- Texto: "Hacemos realidad los proyectos de nuestros clientes" sobre overlay oscuro
- **Fix:** Aplicar el split layout asimétrico definido en el prompt de level-up

**2.3 — Indicador "Scroll" visible pero sin animación**
- El texto "Scroll" aparece sin el chevron animado o indicador visual
- **Fix:** Agregar flecha animada (bounce) o línea que crece

**2.4 — Botón "Inicio" visible en el nav sobre el hero**
- El link "Inicio" en el nav es redundante cuando ya se está en la home
- **Fix:** Ocultar el link "Inicio" en la home o no incluirlo en la nav

---

### SECCIÓN 3 — STATS (Contadores animados)
**Estado:** 🔴 BUG CONFIRMADO — Los contadores no funcionan

#### Problemas detectados:

**3.1 — Contadores muestran "0" — No animan**
- Todos los stats muestran el valor inicial "0" o "0+" sin animar
- El IntersectionObserver o el trigger de animación no está funcionando
- Esto es un bug funcional, no estético
- **Fix:** Revisar el componente `AnimatedCounter`. Probablemente el observer no detecta correctamente el viewport en SSR. Usar `useEffect` con `IntersectionObserver` client-side, asegurar `'use client'` en el componente.

**3.2 — "0K" en metros cuadrados**
- Si el contador no anima, muestra literalmente "0K" — confuso para el usuario
- **Fix:** Usar `suppressHydrationWarning` o valor inicial visible mientras carga

**3.3 — Diseño de la sección**
- Sección azul separada, fondo sólido uniforme
- Se ve como bloque independiente sin relación con el resto
- **Fix:** Integrar como banda entre hero y servicios, tipografía más agresiva

---

### SECCIÓN 4 — SERVICIOS (Home)
**Estado:** ⚠️ Funcional pero genérico

#### Problemas detectados:

**4.1 — Cards uniformes sin jerarquía**
- 5 cards idénticas en grid
- No hay diferenciación visual entre servicios más importantes y secundarios
- Hover states no especificados (¿hay alguno?)

**4.2 — Subtítulo genérico**
- "Soluciones integrales para la construcción e infraestructura, respaldadas por un equipo de profesionales y equipamiento de última generación."
- Este texto podría ser de cualquier constructora del mundo
- **Fix:** Ser específico: "Desde movimiento de suelos a gran escala hasta estructuras metálicas para el sector nuclear. 5 especialidades, un solo equipo."

**4.3 — Sin imágenes en las cards de servicios (home)**
- En la home las cards de servicio no tienen imagen de fondo ni ícono relevante
- En `/servicios` sí tienen imagen — inconsistencia
- **Fix:** Agregar imagen o ícono representativo en cada card de la home

---

### SECCIÓN 5 — OBRAS DESTACADAS (Home)
**Estado:** ⚠️ Datos placeholder, layout mejorable

#### Problemas detectados:

**5.1 — Obras con datos falsos / placeholder**
- "Pavimentación RP N° 6 — Vialidad Provincial" — posiblemente real pero sin verificar
- "Nave Industrial Bunge" — cliente real, obra no verificada
- "Acueducto Norte — Municipio Río Tercero" — no verificado
- Todas usan imágenes de Unsplash genéricas
- **Fix:** Reemplazar con datos reales de obras ejecutadas y fotos reales

**5.2 — La misma imagen aparece dos veces**
- La foto del hero (foto-1504307651254) aparece también como imagen del "Acueducto Norte"
- Esto es notorio y hace el sitio ver descuidado
- **Fix:** Usar imágenes únicas para cada obra

**5.3 — Grid de 4 cards iguales, sin layout asimétrico**
- Oportunidad perdida de jerarquía visual
- **Fix:** Layout asimétrico tipo magazine (1 grande + 3 pequeñas)

**5.4 — Título de sección débil**
- "Obras Destacadas / Una selección de nuestros proyectos más relevantes."
- **Fix:** "500 obras. Estas son algunas." — directo y con personalidad

---

### SECCIÓN 6 — LOGO WALL DE CLIENTES (Home)
**Estado:** 🔴 El problema más amateur del sitio

#### Problemas detectados:

**6.1 — Texto plano en vez de logos reales**
- Los 24 clientes aparecen como texto: "NCA", "YPF", "Bunge", "NASA"
- YPF, Bunge, INVAP, NASA son marcas reconocidas internacionalmente
- Mostrarlos como texto plano sugiere que no se tienen los logos o no se cuidó el detalle
- **Fix URGENTE:** Conseguir los SVG/PNG de los logos principales (YPF, Bunge, AGD, Transener, INVAP están disponibles públicamente) y reemplazar el texto

**6.2 — Sin tratamiento visual de los "tiles"**
- Los nombres están en grilla sin borde, sin fondo, sin tratamiento
- **Fix temporal (hasta tener logos reales):** Cada nombre en celda con `border border-white/10`, hover con `bg-[#E8720C]/10`, tipografía Bebas Neue

**6.3 — Título de sección correcto pero presentación pobre**
- "Empresas que confían en nosotros" — está bien
- "Trabajamos con las principales empresas del sector energético, industrial y gubernamental de Argentina." — texto correcto

---

### SECCIÓN 7 — CTA BANNER (Home)
**Estado:** ⚠️ Funcional pero olvidable

#### Problemas detectados:

**7.1 — Copy genérico**
- "¿Tenés un proyecto en mente? Contactanos y te ayudamos a hacerlo realidad."
- **Fix:** Ser más específico y urgente: "¿Tu proyecto requiere maquinaria certificada y 35 años de experiencia? Hablemos." + número de teléfono visible directo

**7.2 — Un solo CTA**
- Solo botón "Contactanos ahora"
- **Fix:** Agregar segundo CTA: "O llamanos: 03571 421350" inline con el número clickeable

---

### SECCIÓN 8 — /obras (Portfolio)
**Estado:** ⚠️ Funcional, datos placeholder

#### Problemas detectados:

**8.1 — 9 obras en total — número bajo**
- La empresa tiene 500 obras pero muestra 9
- Aunque vengan de Sanity, hay que cargar muchas más
- **Fix de contenido:** Objetivo mínimo 20 obras, con descripción real y fotos reales

**8.2 — Filtros sin contador**
- Tabs: "Todas Viales Civiles Industriales Electromecánicas Movimiento de Suelos"
- No muestran cuántas obras hay en cada categoría
- **Fix:** "Viales (3) Civiles (2) Industriales (2)..."

**8.3 — Cards sin número de proyecto**
- Sin numeración editorial (001, 002...) que daría profundidad visual
- Sin año de ejecución visible en la card

**8.4 — "Ver más" como CTA de cada card**
- Texto muy genérico
- **Fix:** "Ver proyecto →"

**8.5 — Header de página**
- Usa imagen de Unsplash genérica de construcción
- "Nuestras Obras / Más de 500 proyectos finalizados con éxito en todo el país"
- El subtítulo está bien pero la imagen no representa la empresa

---

### SECCIÓN 9 — /obras/[slug] (Detalle de obra)
**Estado:** ❓ No se pudo acceder al detalle

- La URL `/obras/pavimentacion-ruta-6` devolvió error de permisos en el fetch
- Si las páginas de detalle existen, revisar que el contenido sea completo:
  - Galería de imágenes
  - Ficha técnica del proyecto (superficie, plazo, tipo de obra, año)
  - Descripción extendida
  - Obras relacionadas al final

---

### SECCIÓN 10 — /equipos
**Estado:** ✅ Mejor sección del sitio — con issues menores

#### Lo que funciona bien:
- Layout con imagen, nombre, specs técnicas reales (HP, capacidad, año)
- Badge "Disponible" / estado de disponibilidad
- CTA a WhatsApp directo por equipo
- 9 equipos con descripciones técnicas creíbles

#### Problemas detectados:

**10.1 — Imágenes de Picsum (Lorem Picsum)**
- Todas las fotos de equipos son de `picsum.photos` — imágenes de stock aleatorias
- Una foto de "Motocargador Frontal" puede estar mostrando una foto de paisaje
- **Fix:** Fotos reales de la flota. Es la prioridad #1 de contenido.

**10.2 — "Camión Grúa" sin badge de disponibilidad**
- Todos los equipos tienen badge excepto el Camión Grúa
- Bug menor o equipo marcado como no disponible sin indicación

**10.3 — Typo en specs**
- "Año: Year: 2022" en la Planta de Stabilizado — texto en inglés mezclado con español
- **Fix:** Corregir a "Año: 2022"

**10.4 — "Tambro liso" en descripción del Rodillo**
- "Rodillo vibratorio de tambro liso" — "tambro" no es una palabra en español
- Debería ser "tambor liso"
- **Fix:** Corregir typo

**10.5 — Layout de cards en grid 3 columnas**
- Funciona pero es formato catálogo, no premium
- **Fix:** Layout horizontal por equipo (imagen 40% + contenido 60%) como se describió en el prompt anterior

---

### SECCIÓN 11 — /quienes-somos
**Estado:** ⚠️ El contenido es bueno, el diseño tiene problemas de integridad

#### Lo que funciona bien:
- Timeline con hitos desde 1989 — excelente contenido
- Sección "80 Especialistas" con descripción
- Misión, Visión, Valores bien redactados
- Stats section incluida

#### Problemas detectados:

**11.1 — Usa el Sistema B (header/footer diferente)**
- Ver Problema Crítico #0 arriba
- El header lleva links a `/#mercados` y `/#proyectos` que no existen

**11.2 — Stats muestran "0+" igual que en la home**
- El bug del AnimatedCounter se repite aquí
- Tiene 4 stats: Años, Obras, Provincias, Ciudades
- La home tiene 5 stats — inconsistencia en los datos mostrados

**11.3 — Broken images en footer**
- `/iso-9001.png` y `/iso-14001.png` — imágenes que no existen en el proyecto
- Si Construvial NO tiene certificaciones ISO reales, eliminar esta sección
- Si SÍ las tiene, agregar los archivos reales
- **Fix:** Confirmar con el cliente si tienen ISO y actuar en consecuencia

**11.4 — "Diseño: [logo]" en el footer**
- Texto de maqueta que nunca se eliminó
- **Fix:** Eliminar inmediatamente

**11.5 — Imágenes de Google Aida (generadas por AI)**
- Las fotos de "Historia Construvial" y "Equipo Técnico" son imágenes generadas por AI (URLs con `lh3.googleusercontent.com/aida-public`)
- Se ven artificiales y genéricas
- **Fix:** Reemplazar con fotos reales de la empresa

**11.6 — Logo wall repite el mismo error que la home**
- 24 clientes como texto plano

---

### SECCIÓN 12 — /servicios
**Estado:** ⚠️ Contenido correcto, diseño del Sistema B

#### Lo que funciona bien:
- Los 5 servicios con sus sub-ítems listados
- Imágenes (aunque de Google Aida) por cada servicio
- CTA a página de detalle de cada servicio

#### Problemas detectados:

**12.1 — Usa el Sistema B**
- Header con links incorrectos

**12.2 — Imágenes de Google Aida**
- Todas las imágenes de los servicios son AI-generated
- Se ven bien a primera vista pero no muestran obras reales de Construvial
- **Fix:** Reemplazar con fotos reales de obras del servicio correspondiente

**12.3 — Página muy larga sin separación visual fuerte**
- 5 servicios apilados verticalmente, sin breaks de sección diferenciados
- Cada servicio es imagen izquierda / texto derecha alternando — patrón repetitivo
- **Fix:** Alternancia de fondos (oscuro/claro) entre servicios para separar visualmente

---

### SECCIÓN 13 — /servicios/[slug] (Detalle de cada servicio)
**Estado:** 🔴 Página casi vacía — contenido insuficiente

#### Lo encontrado en `/servicios/ingenieria-civil`:
- Header con imagen de Picsum aleatoria
- Título + descripción genérica (1 párrafo)
- Lista numerada de especialidades (1-7)
- Imagen de Picsum aleatoria
- CTA "Solicitar presupuesto"

#### Problemas:
**13.1 — Contenido extremadamente escaso**
- Un párrafo + una lista + una imagen = página que no convierte
- No hay descripción detallada de cada especialidad
- No hay obras relacionadas a ese servicio
- No hay datos técnicos ni capacidades de la empresa en esa área
- **Fix:** Cada página de servicio debe tener: descripción extendida (3-4 párrafos), galería de obras del servicio, casos de uso reales, equipos utilizados para ese servicio, CTA con formulario pre-filled con el servicio seleccionado

**13.2 — Imágenes de Picsum random**
- La imagen de cabecera es aleatoria de Picsum
- No representa el servicio

**13.3 — Usa el Sistema B**
- Header con links incorrectos

---

### SECCIÓN 14 — /contacto
**Estado:** ⚠️ Funcional pero con issues

#### Lo que funciona bien:
- Formulario con campos: nombre, email, teléfono, tipo de consulta, mensaje
- Datos de contacto completos: teléfono, email, WhatsApp, horario
- Horario de atención visible (Lun-Vie 8-17hs, Sáb 8-12hs)

#### Problemas detectados:

**14.1 — Sin Google Maps embebido**
- Los datos dicen "Ángel V. Peñaloza 1154, Río Tercero" pero no hay mapa
- El prompt original especificaba incluir el mapa
- **Fix:** Agregar `<iframe>` de Google Maps con la dirección real

**14.2 — Sin íconos en los datos de contacto**
- Los datos son texto plano sin íconos (teléfono, email, ubicación)
- **Fix:** Agregar íconos de Lucide React correspondientes

**14.3 — Sección "Seguinos" vacía**
- Hay un título "Seguinos" sin links ni íconos a redes sociales
- **Fix:** Agregar links a Instagram (@construvial_sa) y Facebook con íconos

**14.4 — Usa el Sistema B**
- Header con links incorrectos

**14.5 — Sin confirmación visual de envío**
- No se puede confirmar desde el HTML si el formulario muestra mensaje de éxito/error
- **Fix:** Verificar que los estados idle/loading/success/error estén implementados visualmente

**14.6 — Broken images en footer**
- ISO 9001 y ISO 14001 rotas (igual que en /quienes-somos)

---

### SECCIÓN 15 — /blog
**Estado:** ⚠️ Contenido placeholder, diseño con issues

#### Problemas detectados:

**15.1 — Todo el contenido es placeholder**
- 6 posts con datos falsos (fechas de 2023-2024, noticias inventadas)
- "El sector construcción creció un 8% en el último trimestre" — dato no verificado
- "Construvial expande su presencia en Córdoba Capital" — información no confirmada
- **Fix:** Reemplazar o eliminar posts falsos. Publicar solo si hay contenido real.

**15.2 — Todas las imágenes son de Picsum**
- `picsum.photos/id/40`, `id/41`, etc. — imágenes aleatorias sin relación con el contenido
- **Fix:** Imágenes reales o al menos imágenes de Unsplash más específicas al tema

**15.3 — Usa el Sistema B**

**15.4 — Sin paginación**
- 6 posts listados sin paginación ni "cargar más"
- Para el futuro cuando haya más contenido

---

### SECCIÓN 16 — FOOTER
**Estado:** ⚠️ Dos footers diferentes, uno con bugs graves

#### Footer del Sistema A (home, obras, equipos):
- Links correctos a rutas reales
- Copyright "© 2026" — correcto para el año actual
- Sin broken images

#### Footer del Sistema B (páginas internas):
- Sección "Certificaciones" con `/iso-9001.png` y `/iso-14001.png` — BROKEN
- Sección "Redes Sociales" — vacía, sin links ni íconos
- "Diseño: [logo de Construvial]" — texto de maqueta sin eliminar
- **Fix:** Eliminar Sistema B footer completamente

---

## RESUMEN DE BUGS CRÍTICOS (Fix inmediato)

| # | Bug | Severidad | Página |
|---|-----|-----------|--------|
| 1 | Dos sistemas de diseño/nav en conflicto | 🔴 CRÍTICO | Global |
| 2 | Links del nav interno van a anclas inexistentes | 🔴 CRÍTICO | Páginas internas |
| 3 | Contadores de stats muestran "0" sin animar | 🔴 CRÍTICO | Home, /quienes-somos |
| 4 | Imágenes ISO 9001/14001 rotas (404) | 🔴 CRÍTICO | /quienes-somos, /contacto, /blog |
| 5 | "Diseño: [logo]" en footer — texto de maqueta | 🔴 CRÍTICO | Páginas internas |
| 6 | Teléfonos concatenados sin separador | 🟡 IMPORTANTE | Footer Sistema A |
| 7 | "Year: 2022" en inglés en specs de equipo | 🟡 IMPORTANTE | /equipos |
| 8 | "tambro liso" — typo en descripción | 🟡 IMPORTANTE | /equipos |
| 9 | Misma imagen repetida en hero y en obra | 🟡 IMPORTANTE | Home |
| 10 | Sección "Seguinos" vacía en /contacto | 🟡 IMPORTANTE | /contacto |
| 11 | Sin Google Maps en /contacto | 🟡 IMPORTANTE | /contacto |
| 12 | Camión Grúa sin badge de disponibilidad | 🟢 MENOR | /equipos |

---

## RESUMEN DE ISSUES DE CONTENIDO (Requieren material real)

| # | Issue | Solución |
|---|-------|----------|
| 1 | Logo wall de 24 clientes es texto plano | Conseguir SVG/PNG de logos reales |
| 2 | Imágenes de equipos son de Picsum | Fotos reales de la flota |
| 3 | Fotos de obras son de Unsplash | Fotos reales de obras ejecutadas |
| 4 | Fotos de /quienes-somos son AI-generated | Fotos reales del equipo y obras |
| 5 | Posts del blog son placeholder | Contenido real o eliminar |
| 6 | Solo 9 obras en el portfolio | Mínimo 20 obras con datos reales |
| 7 | Páginas de servicio casi vacías | Contenido extendido por servicio |
| 8 | ¿Tiene ISO 9001/14001? | Confirmar — si sí: agregar logos reales, si no: quitar la sección |

---

## RESUMEN DE MEJORAS DE DISEÑO (Level-up visual)

| # | Mejora | Prioridad |
|---|--------|-----------|
| 1 | Tipografía: migrar a Bebas Neue + Inter Tight | 🔴 ALTA |
| 2 | Hero: split layout asimétrico | 🔴 ALTA |
| 3 | Servicios home: lista numerada editorial | 🟡 MEDIA |
| 4 | Portfolio home: layout asimétrico | 🟡 MEDIA |
| 5 | Equipos: layout horizontal tipo ficha técnica | 🟡 MEDIA |
| 6 | Cliente logos: tiles con borde hasta tener logos reales | 🟡 MEDIA |
| 7 | Animaciones con peso (clip-path reveal, stagger) | 🟡 MEDIA |
| 8 | Texture de ruido sutil en fondos oscuros | 🟢 BAJA |
| 9 | Scrollbar custom naranja | 🟢 BAJA |
| 10 | Link activo en nav con color naranja | 🟢 BAJA |

---

## ORDEN DE IMPLEMENTACIÓN RECOMENDADO PARA QWEN CODE

### SPRINT 1 — Bugs críticos (1-2 horas)
1. Unificar header/footer: eliminar Sistema B, aplicar Sistema A en todas las páginas
2. Corregir links del nav (anclas → rutas reales)
3. Fix del AnimatedCounter (bug SSR)
4. Eliminar imágenes ISO rotas o agregar archivos reales
5. Eliminar "Diseño: [logo]" del footer
6. Fix teléfonos concatenados
7. Fix "Year: 2022" y "tambro liso"

### SPRINT 2 — Contenido inmediato (2-4 horas)
1. Reemplazar imagen duplicada en hero/obra
2. Agregar Google Maps en /contacto
3. Agregar íconos de redes sociales en "Seguinos" (/contacto)
4. Agregar iconos a datos de contacto
5. Agregar íconos y hover states al logo wall (tiles temporales hasta tener logos reales)

### SPRINT 3 — Level-up visual (4-8 horas)
1. Migrar tipografía a Bebas Neue + Inter Tight
2. Rediseñar Hero con split layout
3. Rediseñar Stats como banda integrada
4. Rediseñar Servicios como lista editorial
5. Rediseñar Portfolio home con layout asimétrico
6. Rediseñar Equipos con layout horizontal

### SPRINT 4 — Contenido real (cuando esté disponible)
1. Subir logos reales de clientes a Sanity
2. Subir fotos reales de equipos
3. Subir fotos reales de obras
4. Expandir portfolio a 20+ obras
5. Completar páginas de detalle de cada servicio
6. Publicar posts reales en el blog (o desactivar la sección)

---

*Diagnóstico realizado sobre: construvial.vercel.app — Abril 2025*
*Stack: Next.js 14 + Tailwind CSS + Sanity + Vercel*
