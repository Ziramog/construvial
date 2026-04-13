"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideConfig {
  headline: string
  subtitle: string
  cta: string
  ctaLink: string
  image: string
  isVideo?: boolean
  alt: string
  // Slide-dependent behavior
  cinematic?: boolean   // video slides: less text, single CTA
  singleCta?: boolean   // show only primary CTA
}

const slides: SlideConfig[] = [
  {
    headline: "Ejecución eficiente.\nSin desvíos.\nSin excusas.",
    subtitle: "Reducimos tiempos y errores en obra con ingeniería propia, flota certificada y 35 años de trayectoria",
    cta: "Solicitar presupuesto",
    ctaLink: "/contacto",
    image: "/media/hero/desktop/hero-slide-1.jpg",
    alt: "Maquinaria pesada en obra vial",
    cinematic: false,
    singleCta: false,
  },
  {
    headline: "Equipos listos\npara operar\ncuando los necesités",
    subtitle: "Flota propia de excavadoras, motoniveladoras, compactadores y camiones. Sin intermediarios, tu obra nunca se detiene.",
    cta: "Ver equipamiento",
    ctaLink: "/equipos",
    image: "/media/hero/desktop/hero-slide-2.mp4",
    isVideo: true,
    alt: "Maquinaria pesada trabajando en proyecto",
    cinematic: true,
    singleCta: true,
  },
  {
    headline: "Obras que\ncumplen plazos\ny estándares",
    subtitle: "Rutas, autopistas y pavimentaciones con ISO 9001 y 500+ obras que siguen en pie.",
    cta: "Ver proyectos",
    ctaLink: "/obras",
    image: "/media/hero/video/hero-bg.mp4",
    isVideo: true,
    alt: "Pavimentación en obra vial",
    cinematic: true,
    singleCta: true,
  },
  {
    headline: "Construí tu\npróximo\nproyecto",
    subtitle: "Sumate a más de 19 empresas líderes que confían en nosotros para sus obras de infraestructura",
    cta: "Hablar con nosotros",
    ctaLink: "/contacto",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=85",
    alt: "Equipo de construcción en obra civil",
    cinematic: false,
    singleCta: false,
  },
]

export function MobileHero() {
  const [current, setCurrent] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Scroll listener for parallax (throttled via rAF)
  useEffect(() => {
    if (isReducedMotion) return
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isReducedMotion])

  // Reduced motion check
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]
  const isCinematic = slide.cinematic ?? false

  // Parallax offset: max 15px, rate 0.12
  const parallaxY = isReducedMotion ? 0 : Math.min(scrollY * 0.12, 15)

  // Slide-dependent sizing
  const headlineSize = isCinematic ? 'clamp(26px, 8vw, 34px)' : 'clamp(28px, 8.5vw, 36px)'
  const bottomPadding = isCinematic ? 'pb-14' : 'pb-16'
  const overlayOpacity = slide.isVideo ? 'from-black/55' : 'from-black/70'

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background with subtle parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div
            style={{ transform: `translateY(${parallaxY}px)`, willChange: 'transform' }}
            className="absolute inset-0 -top-4"
          >
            {slide.isVideo ? (
              <video
                src={slide.image}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover object-center w-full h-[calc(100%+30px)]"
              />
            ) : (
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                priority={current === 0}
                sizes="100vw"
                quality={75}
              />
            )}
          </div>
          {/* Overlay - lighter on video slides */}
          <div className={`absolute inset-0 bg-gradient-to-b ${overlayOpacity} via-black/50 to-black/80`} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className={`relative z-10 h-full flex flex-col justify-end ${bottomPadding} px-6`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Badge - hidden on cinematic slides */}
            {!isCinematic && (
              <p className="text-[#facc15] text-[10px] tracking-[0.25em] uppercase mb-3 font-bold opacity-80">
                Desde 1989 · Córdoba, Argentina
              </p>
            )}

            {/* Headline - size depends on slide type */}
            <h1
              className="font-display text-white uppercase leading-[1.05] mb-3"
              style={{ fontSize: headlineSize }}
            >
              {slide.headline}
            </h1>

            {/* Subtitle - hidden or smaller on cinematic slides */}
            {slide.subtitle && (
              <p
                className={`text-white/80 ${isCinematic ? 'text-[13px] mb-5' : 'text-[14px] mb-6'} leading-[1.6]`}
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
              >
                {slide.subtitle}
              </p>
            )}

            {/* CTAs - single or double depending on slide */}
            <div className="flex flex-col gap-2.5">
              <Link
                href={slide.ctaLink}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#facc15] text-[#0a0a0a] font-bold text-[14px] tracking-wider uppercase px-6 py-[12px] hover:bg-yellow-400 active:bg-yellow-500 active:scale-[0.98] transition-all duration-150"
              >
                {slide.cta}
                <span className="text-lg">→</span>
              </Link>
              {!slide.singleCta && (
                <Link
                  href="https://wa.link/ocm4yr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold text-[14px] tracking-wider uppercase px-6 py-[12px] hover:border-white hover:bg-white/10 active:bg-white/20 active:scale-[0.98] transition-all duration-150"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hablar por WhatsApp
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators + arrows - semi-transparent on cinematic */}
        <div className={`absolute bottom-8 left-6 right-6 flex items-center justify-between ${isCinematic ? 'opacity-50' : 'opacity-70'}`}>
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === current ? "w-8 bg-[#FFD100]" : "w-3 bg-white/30"
                }`}
                aria-label={`Ir a slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={prev}
              className={`w-8 h-8 flex items-center justify-center border border-white/30 text-white active:bg-white/20 transition-all ${isCinematic ? '' : ''}`}
              aria-label="Slide anterior"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-8 h-8 flex items-center justify-center border border-white/30 text-white active:bg-white/20 transition-all"
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
