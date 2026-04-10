import type { Metadata } from "next"
import Image from "next/image"
import { constructMetadata } from "@/lib/metadata"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { WorksGrid } from "@/components/obras/WorksGrid"

export const metadata: Metadata = constructMetadata({
  title: "Obras | Construvial S.A.",
  description: "Conocé nuestro portfolio de más de 500 obras finalizadas: viales, civiles, industriales y electromecánicas en todo el país.",
})

// Mock data - replace with Sanity data when CMS is connected
const mockWorks = [
  {
    slug: "pavimentacion-ruta-6",
    title: "Pavimentación RP N° 6",
    category: "viales",
    client: "Vialidad Provincial de Córdoba",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "nave-industrial-bunge",
    title: "Nave Industrial Bunge",
    category: "industriales",
    client: "Bunge Argentina",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "acueducto-norte",
    title: "Acueducto Norte",
    category: "civiles",
    client: "Municipio Río Tercero",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "estructura-metalica-ypf",
    title: "Estructura Metálica YPF",
    category: "civiles",
    client: "YPF S.A.",
    image: "https://images.unsplash.com/photo-1508003318809-b381e35588b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "puente-rio-cuarto",
    title: "Puente sobre Río Cuarto",
    category: "viales",
    client: "Ministerio de Obras Públicas",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "planta-axion",
    title: "Planta de Distribución Axion",
    category: "industriales",
    client: "Axion Energy",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "terraplenado-ruta-9",
    title: "Terraplenado Ruta 9",
    category: "suelos",
    client: "Cámara de Vialidad",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "subestacion-electrica",
    title: "Subestación Electroingeniería",
    category: "electromecanica",
    client: "Electroingeniería S.A.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "canalizacion-arroyo",
    title: "Canalización Arroyo Las Mojarras",
    category: "suelos",
    client: "Municipio de Embalse",
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?auto=format&fit=crop&w=800&q=80",
  },
]

export default function ObrasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
            alt="Obras Construvial"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark/80 -z-10" />
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">
            Nuestras <span className="text-accent">Obras</span>
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-2xl mx-auto">
            Más de 500 proyectos finalizados con éxito en todo el país
          </p>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Portfolio de Obras"
            subtitle="Explorá nuestros proyectos filtrados por categoría."
            centered
          />
          <WorksGrid works={mockWorks} className="mt-12" />
        </div>
      </section>
    </>
  )
}
