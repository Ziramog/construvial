import { Metadata } from 'next'

interface DefaultMetadataProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export const defaultMetadata = {
  title: 'Construvial S.A. | Constructora Vial y Civil en Córdoba · 500+ Obras · 35 Años',
  description: '35 años ejecutando obras viales, civiles y electromecánicas con ISO 9001. 500+ obras. Flota propia de 40+ equipos. Río Tercero, Córdoba.',
  image: '/media/brand/og-image.jpg',
  url: 'https://construvialsa.com.ar'
}

export function constructMetadata({
  title = defaultMetadata.title,
  description = defaultMetadata.description,
  image = defaultMetadata.image,
  url = defaultMetadata.url
}: DefaultMetadataProps = {}): Metadata {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://construvialsa.com.ar'),
    title,
    description,
    keywords: ['constructora vial cordoba', 'obras civiles argentina', 'alquiler equipos viales', 'empresa constructora cordoba', 'constructora ISO 9001 argentina', 'movimiento de suelos cordoba', 'alquiler maquinaria pesada', 'pavimentacion rutas argentina'],
    openGraph: {
      title,
      description,
      url,
      siteName: 'Construvial S.A.',
      images: [{ url: image, width: 1200, height: 630 }],
      locale: 'es_AR',
      type: 'website',
    },
    robots: { index: true, follow: true },
    alternates: { canonical: '/' },
  }
}
