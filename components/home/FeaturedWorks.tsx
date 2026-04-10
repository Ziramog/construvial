import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/ui/FadeIn"
import { ArrowRight } from "lucide-react"

const mockWorks = [
  { 
    title: "Ruta Nacional 19", 
    location: "Córdoba, Argentina", 
    category: "Obras Viales", 
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhIPPxAV0nDkkv50H5SRXNvLSYNVSU41OiAeBFw9XxtOHSNcs7sJqY3kKWVEb8o_4xyoPKwD4tQFtQQWZ7kyxPRxHhR6OHiIzzAHfWypfC1bR_CdvRvtLYjagL-YtKa2wHjNNwb4RVNJf7ucxuQZrG4KnqiQdI70Whd7YE7vCtGyhAoaIEttZXmB30if8Rcbx0OnPOQ1y0yYHQPSD1X3nFVtai_oN2pQC_GSzGia2GMlNIRMyh5QIycTu_ExobOSfV9iMR6Tv-ei4" 
  },
  { 
    title: "Puente Río Cuarto", 
    location: "Río Cuarto, Córdoba", 
    category: "Obras Hidráulicas", 
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmwrMXgLvdxICutAVEeUQNLnkrl7aK42cZlRG7q1QebDaRKGD1Bkpnyfosdg-QzXJz43M8Li1chF0MrogQU4ZkaMY1BZdqDU67myNR7j9jX3GKPOcQvrP5xlxYRpgvkR9Tv2wypTazojyK4LhYy6AbRgoP6VoC49YeSrULuPGbD3QNTlyg8jKeysgqlE7Qa62JLba6bXsVJ4fMJQwBFkIT9Krz4sGrgFx___mNqZx3-Cgttdoo69WI7GkISs-OHE4oIqQq9iQMtno" 
  },
  { 
    title: "Barrio Norte", 
    location: "Villa María, Córdoba", 
    category: "Obra Civil", 
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9h0esgajXpTPGjZu3TkyzSfHOnM6eSECmsywBVvnsT7PoVriPnZEfBxqJQJQ5DBI6W1-4wiJKhQTZEtw8RD8tLPIkSR0ft4gvLXruNlKU3IVQ6_UoOxNqkdaVBgcmjjko-AKcW_hh3sspsq-Spx4QLyKj4J1Lp7FP5AEY-4Y834yZiqk3LTpuZ34ANBndMNhJbJnr4fm0n2pAIyMGo1PuCMo-3gTNho2OwlelQeZu0PymW1pEqujR3yWPy6WLK3QyUt_mrOhkKNw" 
  },
]

export function FeaturedWorks() {
  return (
    <section id="proyectos" className="py-24 bg-gradient-to-b from-[#0B0B0B] to-[#0B1F3A] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <FadeIn delay={0} direction="up">
              <span className="font-body text-[#FFD100] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 block">
                Portafolio de Ingeniería
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white uppercase leading-[0.9] mb-2">
                Proyectos <br /> <span className="text-[#FFD100]">Destacados</span>
              </h2>
              <div className="w-20 h-[3px] bg-[#FFD100] mt-8" />
            </FadeIn>
          </div>

          <FadeIn delay={200} direction="left">
            <Link
              href="/obras"
              className="inline-flex items-center gap-3 text-white/60 font-body font-bold text-sm uppercase hover:text-[#FFD100] transition-all duration-200 group"
            >
              Ver todos los proyectos
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-200" />
            </Link>
          </FadeIn>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {mockWorks.map((work, index) => (
            <FadeIn key={index} delay={index * 150} direction="up">
              <Link href="/obras" className="group block h-full">
                {/* Image Container with Industrial Frame */}
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 p-1 bg-white/5 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02]">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                    />
                    
                    {/* Category Overlay */}
                    <div className="absolute top-0 right-0 p-4">
                      <div className="bg-[#FFD100] text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg">
                        {work.category}
                      </div>
                    </div>
                    
                    {/* Gradient Fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  </div>
                </div>

                {/* Content Overlay/Underlay feel */}
                <div className="py-8">
                  <span className="font-body text-[#FFD100]/60 text-[10px] uppercase tracking-widest mb-2 block">
                    {work.location}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl text-white uppercase group-hover:text-[#FFD100] transition-colors leading-tight mb-4">
                    {work.title}
                  </h3>
                  
                  <div className="flex items-center text-white/40 font-body text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors">
                    Ficha Técnica
                    <div className="h-[1px] w-8 bg-white/20 ml-4 group-hover:w-16 group-hover:bg-[#FFD100] transition-all duration-500" />
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
