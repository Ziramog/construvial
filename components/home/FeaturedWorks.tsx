import Image from "next/image"
import Link from "next/link"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Button } from "@/components/ui/Button"

export function FeaturedWorks() {
  // Provisorio: se mostrarán imágenes placeholder al no haber backend aún conectado
  const mockWorks = [
    { title: "Pavimentación RP N° 6", category: "Obras Viales", client: "Vialidad Provincial", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80" },
    { title: "Nave Industrial Bunge", category: "Obras Industriales", client: "Bunge Argentina", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80" },
    { title: "Acueducto Norte", category: "Hidráulica", client: "Municipio Río Tercero", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" },
    { title: "Estructura Metálica YPF", category: "Obras Civiles", client: "YPF S.A.", image: "https://images.unsplash.com/photo-1508003318809-b381e35588b4?auto=format&fit=crop&w=800&q=80" },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
          <SectionHeader 
            title="Obras Destacadas"
            subtitle="Una selección de nuestros proyectos más relevantes."
            className="mb-0"
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/obras">Ver todas las obras</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {mockWorks.map((work, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-xl overflow-hidden group ${idx === 1 ? 'lg:row-span-2' : ''} ${idx === 2 ? 'md:col-span-2' : ''}`}
            >
              <Image 
                src={work.image} 
                alt={work.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent flex flex-col justify-end p-6">
                <span className="text-accent text-sm font-bold uppercase tracking-wider mb-2 block">{work.category}</span>
                <h3 className="text-white font-display text-2xl md:text-3xl font-bold leading-tight mb-1">{work.title}</h3>
                <span className="text-gray-300 font-body text-sm">{work.client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
