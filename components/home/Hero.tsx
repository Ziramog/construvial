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
  mobileImage?: string
  isMobileVideo?: boolean
  alt: string
  cinematic?: boolean
  singleCta?: boolean
}

const slides: SlideConfig[] = [
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
    cinematic: false,
    singleCta: true,
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
    mobileImage: "/media/hero/mobile/hero-mobile-03.mp4",
    isMobileVideo: true,
    alt: "Maquinaria vial trabajando en pavimentación",
    cinematic: true,
    singleCta: true,
  },
  {
    headline: "Construí tu\npróximo\nproyecto",
    subtitle: "Sumate a más de 19 empresas líderes que confían en nosotros para sus obras de infraestructura",
    cta: "Contactanos",
    ctaLink: "/contacto",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=85",
    isVideo: false,
    mobileImage: undefined,
    isMobileVideo: undefined,
    alt: "Equipo de construcción trabajando en obra civil",
    cinematic: false,
    singleCta: true,
  },
]


export function Hero() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

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

  // Reduced motion check
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
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

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  // Decide media based on screen size
  const currentMedia = (isMobile && slide.mobileImage) ? slide.mobileImage : slide.image
  const currentIsVideo = (isMobile && slide.mobileImage) ? (slide.isMobileVideo ?? slide.isVideo) : slide.isVideo
  const isCinematic = isMobile ? (slide.cinematic ?? false) : false

  // Parallax: background 120% height, moves at 0.3x scroll rate, max 60px
  const parallaxY = isReducedMotion ? 0 : Math.min(scrollY * 0.3, 60)

  // MOBILE-SPECIFIC SIZING
  const mobileHeadlineSize = isCinematic ? 'clamp(28px, 9vw, 36px)' : 'clamp(32px, 10vw, 40px)'
  const mobileSubtitleSize = isCinematic ? 'text-[13px]' : 'text-[14px]'
  const mobileSubtitleOpacity = isCinematic ? 'text-white/60' : 'text-white/80'
  const mobileTopPad = 'pt-[130px]' // clears the fixed header with breathing room
  const mobileOverlay = isCinematic ? 'bg-gradient-to-b from-black/30 via-black/15 to-black/40' : 'bg-gradient-to-b from-black/45 via-black/25 to-black/55'
  const mobileNavOpacity = isCinematic ? 'opacity-40' : 'opacity-70'

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background with parallax - 120% height for movement room */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${current}-${isMobile}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: isMobile ? 0.3 : 0.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute -top-[10%] left-0 w-full h-[120%]"
            style={{
              transform: `translateY(${parallaxY}px)`,
              willChange: 'transform',
            }}
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
          </div>

          {/* Overlays */}
          {isMobile ? (
            <>
              {/* Mobile: lighter gradient */}
              <div className={`absolute inset-0 ${mobileOverlay}`} />
            </>
          ) : (
            <>
              {/* Desktop: lighter side gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
              {/* Desktop: lighter bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#000000]/70 via-[#000000]/50 to-transparent" />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Content - TOP aligned */}
      <div className={`relative z-10 h-full flex flex-col justify-start ${isMobile ? `${mobileTopPad} px-6` : 'pt-32 sm:pt-36 md:pt-40 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: isMobile ? 12 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isMobile ? -12 : -10 }}
            transition={{ duration: isMobile ? 0.3 : 0.4, ease: "easeOut" }}
            className={isMobile ? 'w-full' : 'max-w-3xl'}
          >
            {/* Badge - hidden on mobile cinematic slides */}
            {!(isMobile && isCinematic) && (
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: isMobile ? 0.1 : 0.15, duration: 0.4 }}
                className={`font-body text-[#facc15] ${isMobile ? 'text-[10px] tracking-[0.25em] mb-3' : 'text-xs tracking-[0.3em] mb-4'} uppercase`}
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
              >
                Desde 1989 · Córdoba, Argentina
              </motion.p>
            )}

            {/* Headline */}
            <h1
              className={`font-display text-white uppercase mb-3 whitespace-pre-line ${isMobile ? '' : 'leading-[0.95] tracking-[0.02em]'}`}
              style={{
                fontSize: isMobile ? mobileHeadlineSize : 'clamp(64px,8vw,112px)',
                lineHeight: isMobile ? '1.05' : '0.95',
                textShadow: "0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.8)",
              }}
            >
              {slide.headline}
            </h1>

            {/* Subtitle - smaller/hidden on mobile cinematic */}
            {slide.subtitle && (
              <p
                className={`${isMobile ? `${mobileSubtitleSize} ${mobileSubtitleOpacity}` : 'text-lg md:text-xl text-white/90 max-w-xl'} ${isMobile ? 'mb-4' : 'mb-6'} leading-relaxed`}
                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
              >
                {slide.subtitle}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Single CTA — desktop only (mobile uses sticky bar) */}
        <div className="absolute bottom-12 sm:bottom-14 md:bottom-16 left-0 right-0 hidden md:flex md:justify-center md:px-12 lg:px-20">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 bg-[#facc15] text-[#0a0a0a] font-body font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-yellow-400 active:bg-yellow-500 group transition-colors duration-200"
          >
            Solicitar presupuesto
            <span className="text-lg group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>

        {/* Bottom navigation */}
        <div className={`absolute left-4 right-4 sm:left-12 sm:right-12 md:left-20 md:right-20 flex items-center justify-between ${isMobile ? `bottom-3 ${mobileNavOpacity}` : 'bottom-3 sm:bottom-5'}`}>
          {/* Slide indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === current
                    ? isMobile ? "w-8 bg-[#FFD100]" : "w-8 sm:w-12 bg-[#FFD100]"
                    : isMobile ? "w-3 bg-white/30" : "w-4 sm:w-6 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Ir a slide ${idx + 1}`}
              />
            ))}
            {!isMobile && (
              <span className="font-body text-white/50 text-[10px] sm:text-xs ml-2 sm:ml-4 tracking-widest">
                {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            )}
          </div>

          {/* Nav arrows */}
          <div className={`flex items-center gap-1.5 ${isMobile ? 'gap-1.5' : 'sm:gap-2'}`}>
            <button
              onClick={prev}
              className={`flex items-center justify-center border border-white/30 text-white hover:bg-[#FFD100] hover:text-black hover:border-[#FFD100] active:bg-yellow-500 transition-all duration-200 ${
                isMobile ? 'w-8 h-8' : 'w-9 h-9 sm:w-11 sm:h-11'
              }`}
              aria-label="Slide anterior"
            >
              <ChevronLeft size={isMobile ? 14 : 16} />
            </button>
            <button
              onClick={next}
              className={`flex items-center justify-center border border-white/30 text-white hover:bg-[#FFD100] hover:text-black hover:border-[#FFD100] active:bg-yellow-500 transition-all duration-200 ${
                isMobile ? 'w-8 h-8' : 'w-9 h-9 sm:w-11 sm:h-11'
              }`}
              aria-label="Slide siguiente"
            >
              <ChevronRight size={isMobile ? 14 : 16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
