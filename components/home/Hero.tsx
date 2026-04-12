"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    headline: "Ingeniería.\nConstrucción.\nSoluciones.",
    subtitle: "Más de 35 años construyendo infraestructura vial y civil en Argentina",
    cta: "Explorar Servicios",
    ctaLink: "/servicios",
    image: "/media/hero/desktop/hero-slide-1.jpg",
    alt: "Galpón corporativo extendido en 4K con flota masiva de maquinaria vial",
  },
  {
    headline: "Equipamiento\nde Primera Línea",
    subtitle: "Flota propia de excavadoras, motoniveladoras, compactadores y camiones volcadores",
    cta: "Conocer Nuestro Equipamiento",
    ctaLink: "/equipos",
    image: "/media/hero/desktop/hero-slide-2.jpg",
    alt: "Maquinaria pesada trabajando de manera eficiente en proyecto de infraestructura",
  },
  {
    headline: "Obra Vial\nde Excelencia",
    subtitle: "Rutas, autopistas, pavimentaciones y mantenimiento vial con los más altos estándares",
    cta: "Ver Proyectos Viales",
    ctaLink: "/obras",
    image: "/media/hero/video/hero-bg.mp4",
    isVideo: true,
    alt: "Maquinaria vial trabajando en pavimentación",
  },
  {
    headline: "Construí Tu\nFuturo Con\nNosotros",
    subtitle: "Sumate a un equipo de más de 80 profesionales apasionados por la construcción",
    cta: "Sumate al Equipo",
    ctaLink: "/contacto",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=85",
    alt: "Equipo de construcción trabajando en obra civil",
  },

]


export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {slide.isVideo ? (
            <video
              src={slide.image}
              autoPlay
              loop
              muted
              playsInline
              className={`object-cover object-center w-full h-full ${current === 0 || current === 1 ? '-scale-x-100' : ''}`}
            />
          ) : (
            <Image
              src={slide.image}
              alt={slide.alt || "Background image"}
              fill
              className={`object-cover object-center ${current === 0 || current === 1 ? '-scale-x-100' : ''}`}
              priority={current === 0 || current === 1}
              sizes="100vw"
              quality={85}
            />
          )}
          {/* Subtle overlay for readability - much clearer view */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
        </motion.div>
      </AnimatePresence>

      {/* Content - Bottom aligned for better mobile UX */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-20 md:pb-24 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="font-body text-[#FFD100] text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 drop-shadow-md"
            >
              Desde 1989 · Córdoba, Argentina
            </motion.p>

            {/* Headline with drop shadow for clarity */}
            <h1 className="font-display text-[clamp(26px,7vw,96px)] leading-[0.92] text-white uppercase mb-3 sm:mb-4 whitespace-pre-line drop-shadow-xl">
              {slide.headline}
            </h1>

            {/* Subtitle with drop shadow */}
            <p className="font-body text-gray-200 text-sm sm:text-base md:text-lg max-w-xl mb-5 sm:mb-6 leading-relaxed drop-shadow-lg">
              {slide.subtitle}
            </p>

            {/* CTAs - Improved mobile distribution with equal width */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href={slide.ctaLink}
                className="w-full sm:w-auto flex-1 sm:flex-none inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#FFD100] text-black font-body font-bold px-5 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm tracking-wider uppercase hover:bg-yellow-400 active:bg-yellow-500 transition-all duration-200 group shadow-lg"
              >
                {slide.cta}
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
              <Link
                href="https://wa.link/ocm4yr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 sm:flex-none inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-white/40 text-white font-body font-medium px-5 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm tracking-wider uppercase hover:border-[#FFD100] hover:text-[#FFD100] active:bg-white/10 transition-all duration-200"
              >
                Solicitar Presupuesto
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom bar: Nav arrows + slide indicators */}
        <div className="absolute bottom-3 sm:bottom-5 left-4 right-4 md:left-12 md:right-12 lg:left-20 lg:right-20 flex items-center justify-between">
          {/* Slide indicators */}
          <div className="flex items-center gap-2 sm:gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrent(idx)
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === current ? "w-8 sm:w-12 bg-[#FFD100]" : "w-4 sm:w-6 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Ir a slide ${idx + 1}`}
              />
            ))}
            <span className="font-body text-white/50 text-[10px] sm:text-xs ml-2 sm:ml-4 tracking-widest">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center border border-white/30 text-white hover:bg-[#FFD100] hover:text-black hover:border-[#FFD100] active:bg-yellow-500 transition-all duration-200"
              aria-label="Slide anterior"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center border border-white/30 text-white hover:bg-[#FFD100] hover:text-black hover:border-[#FFD100] active:bg-yellow-500 transition-all duration-200"
              aria-label="Slide siguiente"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
