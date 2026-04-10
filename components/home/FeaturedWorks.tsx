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
    title: "Urbanización Barrio Norte", 
    location: "Villa María, Córdoba", 
    category: "Obra Civil", 
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9h0esgajXpTPGjZu3TkyzSfHOnM6eSECmsywBVvnsT7PoVriPnZEfBxqJQJQ5DBI6W1-4wiJKhQTZEtw8RD8tLPIkSR0ft4gvLXruNlKU3IVQ6_UoOxNqkdaVBgcmjjko-AKcW_hh3sspsq-Spx4QLyKj4J1Lp7FP5AEY-4Y834yZiqk3LTpuZ36ANBndMNhJbJnr4fm0n2pAIyMGo1PuCMo-3gTNho2OwlelQeZu0PymW1pEqujR3yWPy6WLK3QyUt_mrOhkKNw" 
  },
]

export function FeaturedWorks() {
  return (
    <section id="proyectos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <FadeIn delay={0} direction="up">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] uppercase leading-[0.95] mb-2">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#FFD100] px-2 sm:px-3 py-1">
                    <span className="font-body text-[9px] sm:text-[10px] font-bold text-[#1A1A1A] uppercase tracking-wider">
                      {work.category}
                    </span>
                  </div>
                </div>

                {/* Content Container - Monolithic utility feel */}
                <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-between" style={{ minHeight: '160px' }}>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#1A1A1A] uppercase group-hover:text-[#6e5900] transition-colors leading-tight mb-2">
                      {work.title}
                    </h3>
                    <p className="font-body text-[#5a5c5c] text-xs sm:text-sm tracking-wide">
                      {work.location}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-6 flex items-center text-[#1A1A1A] font-body text-xs sm:text-sm font-bold uppercase">
                    Ver proyecto
                    <ArrowRight size={14} className="ml-1.5 sm:ml-2 text-[#FFD100] group-hover:translate-x-2 transition-transform duration-300" />
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
