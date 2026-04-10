# Public Assets — Image Guide

Place your real images here. All paths are referenced from the app as `/filename` or `/folder/filename`.

## 📁 Folder Structure

### `clients/` — Client Logos (24 logos)
Used in: `components/home/ClientLogos.tsx`

| File | Client |
|---|---|
| `nca.png` | NCA |
| `axion.png` | Axion |
| `ypf.png` | YPF |
| `soenergy.png` | SoEnergy |
| `agd.png` | AGD |
| `bunge.png` | Bunge |
| `fm.png` | FM |
| `pae.png` | Pan American Energy |
| `henisa.png` | HENISA |
| `rio-tercero.png` | Municipio Río Tercero |
| `embalse.png` | Embalse |
| `tecna.png` | TECNA |
| `agricultores.png` | Agricultores Federados |
| `electroingenieria.png` | Electroingeniería |
| `boetto.png` | Boetto |
| `andrade.png` | Andrade |
| `edisur.png` | Grupo Edisur |
| `intesat.png` | INTESAR |
| `nasa.png` | NASA |
| `ansaldo.png` | ANSALDO |
| `eastel.png` | EASTEL |
| `transener.png` | Transener |
| `coirini.png` | COIRINI |
| `invap.png` | INVAP |

**Recommendation:** PNG with transparent background, grayscale. The component adds color on hover.

---

### `heroes/` — Hero Background Images
Used in: `components/home/Hero.tsx`

| File | Purpose |
|---|---|
| `hero-main.jpg` | Home page hero background (large, 1920x1080 recommended) |
| `hero-mobile.jpg` | Mobile-optimized hero background (1080x1920 recommended) |

**Recommendation:** High-quality photos of real construction sites. Dark overlay is applied in the component.

---

### `about/` — About Page Images
Used in: `src/app/quienes-somos/page.tsx`

| File | Purpose |
|---|---|
| `team.jpg` | Team / office photo |
| `history.jpg` | Historical / founding image |
| `values.jpg` | Values / culture image |

---

### `services/` — Service Section Images
Used in: Individual service pages (`/servicios/*`)

| File | Purpose |
|---|---|
| `ingenieria-civil.jpg` | Ingeniería Civil page hero |
| `movimiento-suelos.jpg` | Movimiento de Suelos page hero |
| `alquiler-equipos.jpg` | Alquiler de Equipos page hero |
| `logistica.jpg` | Logística page hero |
| `departamento-tecnico.jpg` | Departamento Técnico page hero |

---

### Root Level (already exists)
| File | Purpose |
|---|---|
| `logo.svg` | Site header logo |
| `og-image.jpg` | Open Graph / social share image (1200x630) |
| `favicon.ico` | Browser favicon |

---

## 📝 Tips
- Use **WebP** format for better performance (Next.js auto-optimizes with `next/image`)
- Keep client logos under **50KB** each
- Hero images should be **1920x1080** minimum
- Use descriptive, lowercase filenames with hyphens
