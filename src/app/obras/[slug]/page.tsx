import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, User } from "lucide-react"
import { constructMetadata } from "@/lib/metadata"
import { Button } from "@/components/ui/Button"
import { notFound } from "next/navigation"

// Mock data - replace with Sanity when connected
const mockWorks = [
  {
    slug: "pavimentacion-ruta-6",
    title: "Pavimentación RP N° 6",
    category: "Obras Viales",
    client: "Vialidad Provincial de Córdoba",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1200&q=80",
    description: "Ejecución de obras de pavimentación en la Ruta Provincial N° 6, incluyendo la construcción de calzada de hormigón, aceras, cunetas y señalización horizontal y vertical.",
    ubicacion: "Córdoba, Argentina",
    anio: 2024,
    galeria: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "nave-industrial-bunge",
    title: "Nave Industrial Bunge",
    category: "Obras Industriales",
    client: "Bunge Argentina",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
    description: "Construcción de nave industrial para almacenamiento y distribución de granos, incluyendo estructura metálica, piso de hormigón armado e instalaciones complementarias.",
    ubicacion: "Puerto General San Martín, Santa Fe",
    anio: 2023,
    galeria: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "acueducto-norte",
    title: "Acueducto Norte",
    category: "Obras Civiles",
    client: "Municipio Río Tercero",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
    description: "Construcción de acueducto para la red de agua potable de la zona norte de la ciudad, incluyendo excavaciones, colocación de cañerías y recomposición de la vía pública.",
    ubicacion: "Río Tercero, Córdoba",
    anio: 2023,
    galeria: [
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094768347-a88a37897895?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "estructura-metalica-ypf",
    title: "Estructura Metálica YPF",
    category: "Obras Civiles",
    client: "YPF S.A.",
    image: "https://images.unsplash.com/photo-1508003318809-b381e35588b4?auto=format&fit=crop&w=1200&q=80",
    description: "Fabricación y montaje de estructura metálica para planta de servicios en instalaciones de YPF, incluyendo cimentación, montaje y cerramientos.",
    ubicacion: "Luján de Cuyo, Mendoza",
    anio: 2024,
    galeria: [
      "https://images.unsplash.com/photo-1508003318809-b381e35588b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587393855522-2657e40f1060?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "puente-rio-cuarto",
    title: "Puente sobre Río Cuarto",
    category: "Obras Viales",
    client: "Ministerio de Obras Públicas",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
    description: "Construcción de puente de hormigón armado sobre el Río Cuarto, incluyendo accesos, pilares, tablero y barandas.",
    ubicacion: "Río Cuarto, Córdoba",
    anio: 2022,
    galeria: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546561891-ebd18e805728?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "planta-axion",
    title: "Planta de Distribución Axion",
    category: "Obras Industriales",
    client: "Axion Energy",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=1200&q=80",
    description: "Ejecución de obra civil para planta de distribución de combustibles, incluyendo tanques de almacenamiento, oficinas y playa de carga.",
    ubicacion: "Campana, Buenos Aires",
    anio: 2024,
    galeria: [
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "terraplenado-ruta-9",
    title: "Terraplenado Ruta 9",
    category: "Movimiento de Suelos",
    client: "Cámara de Vialidad",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    description: "Ejecución de terraplenes y movimientos de suelo para la ampliación de la Ruta 9, incluyendo compactación, drenajes y obra complementaria.",
    ubicacion: "Ruta 9, Córdoba",
    anio: 2023,
    galeria: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580901368968-1fce724884eb?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "subestacion-electrica",
    title: "Subestación Electroingeniería",
    category: "Electromecánica",
    client: "Electroingeniería S.A.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    description: "Construcción de fundaciones y edificios técnicos para subestación eléctrica de media tensión, incluyendo montaje de equipamiento electromecánico.",
    ubicacion: "Córdoba Capital",
    anio: 2024,
    galeria: [
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498087339409-c642e4c88a2b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548872591-cb07db56576b?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "canalizacion-arroyo",
    title: "Canalización Arroyo Las Mojarras",
    category: "Movimiento de Suelos",
    client: "Municipio de Embalse",
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?auto=format&fit=crop&w=1200&q=80",
    description: "Trabajos de canalización y encauzamiento del Arroyo Las Mojarras, incluyendo excavaciones, construcción de alcantarillas y recomposición del cauce.",
    ubicacion: "Embalse, Córdoba",
    anio: 2022,
    galeria: [
      "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80",
    ],
  },
]

interface ObraDetallePageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return mockWorks.map((work) => ({ slug: work.slug }))
}

export async function generateMetadata({ params }: ObraDetallePageProps): Promise<Metadata> {
  const work = mockWorks.find((w) => w.slug === params.slug)
  if (!work) return { title: "Obra no encontrada" }
  
  return constructMetadata({
    title: `${work.title} | Construvial S.A.`,
    description: work.description,
  })
}

export default function ObraDetallePage({ params }: ObraDetallePageProps) {
  const work = mockWorks.find((w) => w.slug === params.slug)
  
  if (!work) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={work.image}
          alt={work.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 pb-16">
          <Link href="/obras" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} />
            Volver a Obras
          </Link>
          <span className="inline-block bg-accent text-white text-sm font-bold uppercase tracking-wider px-4 py-1 rounded-full mb-4">
            {work.category}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white uppercase tracking-wider mb-4">
            {work.title}
          </h1>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-primary mb-6 uppercase">Descripción del Proyecto</h2>
              <p className="font-body text-text text-lg leading-relaxed mb-8">{work.description}</p>
              
              {/* Gallery */}
              <h3 className="font-display text-xl font-bold text-primary mb-6 uppercase">Galería de Imágenes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {work.galeria.map((img, idx) => (
                  <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${work.title} - Imagen ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-light p-6 rounded-lg border border-gray-100">
                <h3 className="font-display text-lg font-bold text-primary mb-4 uppercase">Datos del Proyecto</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="text-accent shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-muted text-sm">Cliente</p>
                      <p className="font-body font-medium text-text">{work.client}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-muted text-sm">Ubicación</p>
                      <p className="font-body font-medium text-text">{work.ubicacion}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="text-accent shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-muted text-sm">Año</p>
                      <p className="font-body font-medium text-text">{work.anio}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <h3 className="font-display text-lg font-bold mb-2 uppercase">¿Te interesa este proyecto?</h3>
                <p className="font-body text-gray-300 text-sm mb-4">Contactanos para conocer más detalles o solicitar un presupuesto.</p>
                <Button asChild variant="accent" className="w-full font-bold">
                  <Link href="/contacto">Contactanos</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
