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

/**
 * Centralized brand assets paths
 */
export const BRAND = {
  logoWhite: '/media/brand/logo-white.png',
  logoDark:  '/media/brand/logo-dark.png',
  logoSvg:   '/media/brand/logo.svg',
  ogImage:   '/media/brand/og-image.jpg',
} as const
