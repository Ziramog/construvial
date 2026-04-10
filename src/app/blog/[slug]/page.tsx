import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { constructMetadata } from "@/lib/metadata"
import { notFound } from "next/navigation"

// Mock data - same as blog index
const mockPosts = [
  {
    slug: "finalizacion-obra-ruta-6",
    titulo: "Finalización de la obra en Ruta Provincial N° 6",
    resumen: "Completamos la pavimentación de 15 km en la Ruta Provincial N° 6, incluyendo obra complementaria de señalización y drenaje.",
    contenido: `<p>Con gran satisfacción anunciamos la finalización de la obra de pavimentación en la Ruta Provincial N° 6, un proyecto de gran envergadura que demandó más de 18 meses de trabajo intensivo.</p>
    
    <p>La obra incluyó la construcción de 15 km de calzada de hormigón, cunetas, aceras y la completa señalización horizontal y vertical.</p>
    
    <p>Este proyecto refuerza nuestro compromiso con la infraestructura vial de la provincia de Córdoba y demuestra nuestra capacidad para ejecutar obras complejas en los plazos estipulados.</p>`,
    imagenPortada: "https://picsum.photos/id/40/1200/600",
    fechaPublicacion: "2024-03-15",
    categoria: "Obras",
  },
  {
    slug: "incorporacion-nueva-maquinaria",
    titulo: "Incorporación de nueva maquinaria vial",
    resumen: "Renovamos nuestra flota con 5 equipos de última generación para mejorar la eficiencia en nuestras obras.",
    contenido: `<p>Como parte de nuestra inversión continua en equipamiento, hemos incorporado 5 nuevos equipos viales de última generación.</p>
    
    <p>La nueva flota incluye una motoniveladora de 235 HP, una retroexcavadora CAT 320, un rodillo compactador vibratorio y dos camiones volcadores de 20m³.</p>
    
    <p>Estos equipos nos permitirán mejorar la eficiencia y productividad en nuestras obras, reduciendo tiempos de ejecución y mejorando la calidad final.</p>`,
    imagenPortada: "https://picsum.photos/id/41/1200/600",
    fechaPublicacion: "2024-02-28",
    categoria: "Equipos",
  },
  {
    slug: "certificacion-calidad-iso",
    titulo: "Obtención de la certificación ISO 9001",
    resumen: "Construvial S.A. recibió la certificación ISO 9001 en reconocimiento a sus procesos de gestión de calidad.",
    contenido: `<p>Nos complace anunciar que Construvial S.A. ha obtenido la certificación ISO 9001:2015 en su sistema de gestión de calidad.</p>
    
    <p>Este reconocimiento es el resultado de un proceso de mejora continua que hemos llevado adelante durante los últimos dos años, involucrando a todo nuestro equipo en la implementación de estándares internacionales.</p>
    
    <p>La certificación ISO 9001 valida nuestros procesos de planificación, ejecución y control de obras viales y civiles.</p>`,
    imagenPortada: "https://picsum.photos/id/42/1200/600",
    fechaPublicacion: "2024-02-10",
    categoria: "Empresa",
  },
  {
    slug: "inicio-obra-planta-ypf",
    titulo: "Inicio de obra para YPF en Mendoza",
    resumen: "Comenzamos la construcción de una nueva planta de servicios para YPF en la provincia de Mendoza.",
    contenido: `<p>Hemos dado inicio a un nuevo proyecto para YPF S.A. en la provincia de Mendoza, que incluye la construcción de una planta de servicios completa.</p>
    
    <p>La obra comprende la ejecución de fundaciones especiales, estructuras metálicas, edificios técnicos y todas las instalaciones complementarias.</p>
    
    <p>El plazo de ejecución estimado es de 12 meses y demanda una inversión significativa en equipamiento y personal especializado.</p>`,
    imagenPortada: "https://picsum.photos/id/43/1200/600",
    fechaPublicacion: "2024-01-20",
    categoria: "Obras",
  },
  {
    slug: "crecimiento-sector-construccion",
    titulo: "El sector construcción creció un 8% en el último trimestre",
    resumen: "Análisis del crecimiento del sector de la construcción en Argentina y las perspectivas para el próximo año.",
    contenido: `<p>Según los últimos datos publicados por el INDEC, el sector de la construcción en Argentina registró un crecimiento del 8% en el último trimestre.</p>
    
    <p>Este crecimiento se vio impulsado principalmente por la obra pública, con proyectos viales e hidroviales de gran envergadura.</p>
    
    <p>Las perspectivas para el próximo año son alentadoras, con una cartera de proyectos públicos y privados en aumento.</p>`,
    imagenPortada: "https://picsum.photos/id/44/1200/600",
    fechaPublicacion: "2024-01-05",
    categoria: "Sector",
  },
  {
    slug: "expansion-cordoba",
    titulo: "Construvial expande su presencia en Córdoba Capital",
    resumen: "La empresa abrió una nueva sede operativa en Córdoba Capital para atender la creciente demanda de proyectos en la región.",
    contenido: `<p>Con el objetivo de fortalecer nuestra presencia en la provincia de Córdoba, hemos inaugurado una nueva sede operativa en Córdoba Capital.</p>
    
    <p>Esta nueva oficina nos permitirá gestionar de manera más eficiente los proyectos en la región y estar más cerca de nuestros clientes y colaboradores.</p>
    
    <p>La apertura de esta sede forma parte de nuestro plan de expansión para los próximos años.</p>`,
    imagenPortada: "https://picsum.photos/id/45/1200/600",
    fechaPublicacion: "2023-12-15",
    categoria: "Empresa",
  },
]

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return mockPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = mockPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: "Publicación no encontrada" }
  
  return constructMetadata({
    title: `${post.titulo} | Construvial S.A.`,
    description: post.resumen,
  })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = mockPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={post.imagenPortada}
          alt={post.titulo}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 pb-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} />
            Volver al Blog
          </Link>
          <span className="inline-block bg-accent text-white text-sm font-bold uppercase tracking-wider px-4 py-1 rounded-full mb-4">
            {post.categoria}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white uppercase tracking-wider mb-4 max-w-4xl">
            {post.titulo}
          </h1>
          <div className="flex items-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime={post.fechaPublicacion}>
                {new Date(post.fechaPublicacion).toLocaleDateString("es-AR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-xl text-muted leading-relaxed mb-8">{post.resumen}</p>
            
            {/* Render HTML content */}
            <div
              className="prose prose-lg max-w-none font-body text-text leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.contenido }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl font-bold text-primary uppercase mb-8">Otras Publicaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="relative h-40">
                    <Image
                      src={relatedPost.imagenPortada}
                      alt={relatedPost.titulo}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-dark group-hover:text-accent transition-colors line-clamp-2">
                      {relatedPost.titulo}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
