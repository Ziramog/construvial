import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { constructMetadata } from "@/lib/metadata"
import { SectionHeader } from "@/components/ui/SectionHeader"

export const metadata: Metadata = constructMetadata({
  title: "Blog y Novedades | Construvial S.A.",
  description: "Enterate de las últimas novedades del sector construcción y los proyectos más recientes de Construvial S.A.",
})

// Mock data - replace with Sanity data when CMS is connected
const mockPosts = [
  {
    slug: "finalizacion-obra-ruta-6",
    titulo: "Finalización de la obra en Ruta Provincial N° 6",
    resumen: "Completamos la pavimentación de 15 km en la Ruta Provincial N° 6, incluyendo obra complementaria de señalización y drenaje.",
    imagenPortada: "https://picsum.photos/id/40/800/500",
    fechaPublicacion: "2024-03-15",
    categoria: "Obras",
  },
  {
    slug: "incorporacion-nueva-maquinaria",
    titulo: "Incorporación de nueva maquinaria vial",
    resumen: "Renovamos nuestra flota con 5 equipos de última generación para mejorar la eficiencia en nuestras obras.",
    imagenPortada: "https://picsum.photos/id/41/800/500",
    fechaPublicacion: "2024-02-28",
    categoria: "Equipos",
  },
  {
    slug: "certificacion-calidad-iso",
    titulo: "Obtención de la certificación ISO 9001",
    resumen: "Construvial S.A. recibió la certificación ISO 9001 en reconocimiento a sus procesos de gestión de calidad.",
    imagenPortada: "https://picsum.photos/id/42/800/500",
    fechaPublicacion: "2024-02-10",
    categoria: "Empresa",
  },
  {
    slug: "inicio-obra-planta-ypf",
    titulo: "Inicio de obra para YPF en Mendoza",
    resumen: "Comenzamos la construcción de una nueva planta de servicios para YPF en la provincia de Mendoza.",
    imagenPortada: "https://picsum.photos/id/43/800/500",
    fechaPublicacion: "2024-01-20",
    categoria: "Obras",
  },
  {
    slug: "crecimiento-sector-construccion",
    titulo: "El sector construcción creció un 8% en el último trimestre",
    resumen: "Análisis del crecimiento del sector de la construcción en Argentina y las perspectivas para el próximo año.",
    imagenPortada: "https://picsum.photos/id/44/800/500",
    fechaPublicacion: "2024-01-05",
    categoria: "Sector",
  },
  {
    slug: "expansion-cordoba",
    titulo: "Construvial expande su presencia en Córdoba Capital",
    resumen: "La empresa abrió una nueva sede operativa en Córdoba Capital para atender la creciente demanda de proyectos en la región.",
    imagenPortada: "https://picsum.photos/id/45/800/500",
    fechaPublicacion: "2023-12-15",
    categoria: "Empresa",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://picsum.photos/1920/800?random=70"
            alt="Blog Construvial"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark/80 -z-10" />
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">
            Blog y <span className="text-accent">Novedades</span>
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-2xl mx-auto">
            Enterate de las últimas novedades del sector y nuestros proyectos
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Últimas Publicaciones"
            subtitle="Mantenete informado sobre el mundo de la construcción y nuestros proyectos."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {mockPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-accent/30"
              >
                <div className="relative h-48">
                  <Image
                    src={post.imagenPortada}
                    alt={post.titulo}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {post.categoria}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted text-sm mb-3">
                    <Calendar size={14} />
                    <time dateTime={post.fechaPublicacion}>
                      {new Date(post.fechaPublicacion).toLocaleDateString("es-AR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="font-display text-xl font-bold text-dark mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.titulo}
                  </h3>
                  <p className="font-body text-muted text-sm line-clamp-3 mb-4">{post.resumen}</p>
                  <div className="flex items-center gap-2 font-body font-semibold text-primary group-hover:text-accent transition-colors">
                    Leer más
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
