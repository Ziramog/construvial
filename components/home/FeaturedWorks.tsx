import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/ui/FadeIn"
import { ArrowRight } from "lucide-react"

const mockWorks = [
  { 
    title: "Ruta Nacional 19", 
    location: "Córdoba, Argentina", 
    category: "Obras Viales", 
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    title: "Puente Río Cuarto", 
    location: "Río Cuarto, Córdoba", 
    category: "Obras Hidráulicas", 
    image: "https://images.unsplash.com/photo-1545652981-d21212dcda28?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    title: "Urbanización Barrio Norte", 
    location: "Villa María, Córdoba", 
    category: "Obra Civil", 
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80" 
  },
]

export function FeaturedWorks() {
  return (
    <section id="proyectos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <FadeIn delay={0} direction="up">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] uppercase leading-[0.95] mb-2">
                Proyectos Destacados
              </h2>
            </FadeIn>
            <FadeIn delay={100} direction="none">
              <div className="w-16 h-[2px] bg-[#FFD100] mt-4" />
            </FadeIn>
          </div>
          
          <FadeIn delay={200} direction="left">
            <Link
              href="/obras"
              className="inline-flex items-center gap-2 text-[#1A1A1A] font-body font-bold text-sm uppercase hover:text-[#FFD100] transition-colors duration-200 group"
            >
              Ver todos los proyectos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </FadeIn>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {mockWorks.map((work, index) => (
            <FadeIn key={index} delay={index * 150} direction="up">
              <Link href="/obras" className="group block bg-[#f6f6f6] h-full transition-transform duration-300 hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Badge - No border radius */}
                  <div className="absolute top-4 left-4 bg-[#FFD100] px-3 py-1">
                    <span className="font-body text-[10px] font-bold text-[#1A1A1A] uppercase tracking-wider">
                      {work.category}
                    </span>
                  </div>
                </div>
                
                {/* Content Container - Monolithic utility feel */}
                <div className="p-6 md:p-8 flex flex-col justify-between" style={{ minHeight: '180px' }}>
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl text-[#1A1A1A] uppercase group-hover:text-[#6e5900] transition-colors leading-tight mb-2">
                      {work.title}
                    </h3>
                    <p className="font-body text-[#5a5c5c] text-sm tracking-wide">
                      {work.location}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-center text-[#1A1A1A] font-body text-sm font-bold uppercase">
                    Ver proyecto
                    <ArrowRight size={16} className="ml-2 text-[#FFD100] group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
