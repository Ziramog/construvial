"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  headline: string
  subtitle: string
  cta: string
  ctaLink: string
  image: string
  isVideo?: boolean
  mobileImage?: string
  isMobileVideo?: boolean
  alt: string
}

const slides: Slide[] = [
  {
    headline: "Ejecución eficiente.\nSin desvíos.\nSin excusas.",
    subtitle: "Reducimos tiempos y errores en obra con ingeniería propia, flota certificada y 35 años de trayectoria comprobada",
    cta: "Solicitar presupuesto",
    ctaLink: "/contacto",
    image: "/media/hero/desktop/hero-slide-1.jpg",
    mobileImage: "/media/hero/mobile/hero-mobile-01.mp4",
    isMobileVideo: true,
    isVideo: false,
    alt: "Galpón corporativo especializado con flota de maquinaria vial",
  },
  {
    headline: "Equipos listos\npara operar\ncuando los necesités",
    subtitle: "Flota propia de excavadoras, motoniveladoras, compactadores y camiones. Sin intermediarios, tu obra nunca se detiene.",
    cta: "Ver equipamiento",
    ctaLink: "/equipos",
    image: "/media/hero/desktop/hero-slide-2.mp4",
    isVideo: true,
    mobileImage: undefined,
    isMobileVideo: undefined,
    alt: "Maquinaria pesada trabajando de manera eficiente en proyecto de infraestructura",
  },
  {
    headline: "Obras que\ncumplen plazos\ny estándares",
    subtitle: "Rutas, autopistas y pavimentaciones con ISO 9001 y 500+ obras que siguen en pie.",
    cta: "Ver proyectos",
    ctaLink: "/obras",
    image: "/media/hero/video/hero-bg.mp4",
    isVideo: true,
    mobileImage: undefined,
    isMobileVideo: undefined,
    alt: "Maquinaria vial trabajando en pavimentación",
  },
  {
    headline: "Construí tu\npróximo\nproyecto",
    subtitle: "Sumate a más de 19 empresas líderes que confían en nosotros para sus obras de infraestructura",
    cta: "Hablar con nosotros",
    ctaLink: "/contacto",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=85",
    isVideo: false,
    mobileImage: undefined,
    isMobileVideo: undefined,
    alt: "Equipo de construcción trabajando en obra civil",
  },

]


export function Hero() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Window resize handler for mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]
  
  // Decide media based on screen size
  const currentMedia = (isMobile && slide.mobileImage) ? slide.mobileImage : slide.image
  const currentIsVideo = (isMobile && slide.mobileImage) ? (slide.isMobileVideo ?? slide.isVideo) : slide.isVideo

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${current}-${isMobile}`} // Re-animate if screen size changes source
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {currentIsVideo ? (
            <video
              src={currentMedia}
              autoPlay
              loop
              muted
              playsInline
              className={`object-cover object-center w-full h-full ${
                (current === 0 && !isMobile) || current === 1 ? '-scale-x-100' : ''
              }`}
            />
          ) : (
            <Image
              src={currentMedia}
              alt={slide.alt || "Background image"}
              fill
              className={`object-cover object-center ${
                (current === 0 && !isMobile) || current === 1 ? '-scale-x-100' : ''
              }`}
              priority={current === 0 || current === 1}
              sizes="100vw"
              quality={85}
            />
          )}
          {/* CAPA 1: Gradient solo en la zona del texto (izq) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          {/* CAPA 2: Gradient inferior para CTAs */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content - Bottom aligned for better mobile UX */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-20 md:pb-24 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="font-body text-[#facc15] text-xs tracking-[0.3em] uppercase mb-4"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
            >
              Desde 1989 · Córdoba, Argentina
            </motion.p>

            {/* Headline with text shadow for clear visibility */}
            <h1
              className="font-display text-[clamp(64px,8vw,112px)] leading-[0.95] tracking-[0.02em] text-white uppercase mb-4 whitespace-pre-line"
              style={{
                textShadow: "0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.8)",
              }}
            >
              {slide.headline}
            </h1>

            {/* Subtitle with drop shadow */}
            <p
              className="font-body text-white/90 text-lg md:text-xl max-w-xl mb-6 leading-relaxed"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
            >
              {slide.subtitle}
            </p>

            {/* CTAs - Primary: Solicitar presupuesto, Secondary: WhatsApp */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contacto"
                className="w-full sm:w-auto flex-1 sm:flex-none inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#facc15] text-[#0a0a0a] font-body font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-yellow-400 active:bg-yellow-500 transition-colors duration-200 group"
              >
                Solicitar presupuesto
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
              <Link
                href="https://wa.link/ocm4yr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border border-white/60 text-white font-body font-medium px-8 py-4 text-sm tracking-widest uppercase hover:border-white hover:bg-white/10 active:bg-white/20 transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hablar por WhatsApp
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
