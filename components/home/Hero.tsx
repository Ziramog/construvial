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
  mobileHeadline?: string
  alt: string
  cinematic?: boolean
  singleCta?: boolean
}

const slides: SlideConfig[] = [
  {
    headline: "Ejecución eficiente.\nSin desvíos.\nSin excusas.",
    mobileHeadline: "EJECUCIÓN EFICIENTE.\nSIN DESVÍOS.",
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
    mobileHeadline: "EQUIPOS LISTOS.\nOPERACIÓN CONTINUA.",
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
    mobileHeadline: "OBRAS QUE CUMPLEN\nPLAZOS.",
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
    mobileHeadline: "CONSTRUÍ TU\nPRÓXIMO PROYECTO.",
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


// Preload the first slide's media on mount to avoid grey screen
function usePreloadFirstSlide() {
  useEffect(() => {
    const firstSlide = slides[0]
    // Preload desktop image
    if (!firstSlide.isVideo) {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = firstSlide.image
      document.head.appendChild(link)
    }
    // Preload mobile media
    const mobileSrc = firstSlide.mobileImage || firstSlide.image
    if (firstSlide.isMobileVideo || firstSlide.isVideo) {
      const video = document.createElement('video')
      video.src = mobileSrc
      video.preload = 'auto'
      video.muted = true
      video.playsInline = true
      video.load()
    } else {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = mobileSrc
      document.head.appendChild(link)
    }
  }, [])
}


export function Hero() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isMediaLoading, setIsMediaLoading] = useState(true)
  const [loadedMedia, setLoadedMedia] = useState<Record<number, boolean>>({})

  // 4-second fallback for loader
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setIsMediaLoading(false)
    }, 4000)
    return () => clearTimeout(fallbackTimer)
  }, [])

  // Check if all media is loaded
  useEffect(() => {
    if (Object.keys(loadedMedia).length >= slides.length) {
      setIsMediaLoading(false)
    }
  }, [loadedMedia])

  // Preload first slide media to prevent grey screen on load
  usePreloadFirstSlide()

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
  // Adjusted: disabled on mobile to fit vertical videos perfectly
  const parallaxY = (isReducedMotion || isMobile) ? 0 : Math.min(scrollY * 0.3, 60)

  // MOBILE-SPECIFIC SIZING
  const mobileTopPad = 'pt-[150px]' // clears the fixed header with significant breathing room
  const mobileOverlay = isCinematic ? 'bg-gradient-to-b from-black/40 via-black/20 to-black/50' : 'bg-gradient-to-b from-black/55 via-black/30 to-black/65'
  const mobileNavOpacity = isCinematic ? 'opacity-40' : 'opacity-70'

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">
      {/* Loading Overlay */}
      <div 
        className={`absolute inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-[600ms] ease-in-out ${
          isMediaLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMediaLoading}
      >
        <div className="w-12 h-12 border-4 border-white/10 border-t-[#FFD700] rounded-full animate-spin mb-4" />
        <p className="font-display text-white text-xs sm:text-sm tracking-[0.2em] font-medium uppercase animate-pulse">
          Cargando experiencia...
        </p>
      </div>

      {/* Solid black background — no grey screen while media loads */}

      {/* Backgrounds - all mounted to prevent black screens/reloads */}
      <div
        className={`absolute left-0 w-full ${isMobile ? 'top-0 h-full' : '-top-[10%] h-[120%]'}`}
        style={{
          transform: `translateY(${parallaxY}px)`,
          willChange: 'transform',
        }}
      >
        {slides.map((s, idx) => {
          const media = (isMobile && s.mobileImage) ? s.mobileImage : s.image
          const isVid = (isMobile && s.mobileImage) ? (s.isMobileVideo ?? s.isVideo) : s.isVideo
          const isActive = current === idx

          return (
            <div
              key={`${idx}-${isMobile ? 'm' : 'd'}`}
              className={`absolute inset-0 transition-opacity duration-[1000ms] ease-in-out ${
                isActive ? 'opacity-100 z-[2]' : 'opacity-0 z-[1]'
              }`}
            >
              {isVid ? (
                <video
                  src={media}
                  loop
                  muted
                  playsInline
                  preload="auto"
                  ref={(el) => {
                    if (el) {
                      if (isActive) {
                        el.play().catch(() => {})
                      } else {
                        el.pause()
                        if (el.currentTime !== 0) el.currentTime = 0 
                      }
                    }
                  }}
                  onCanPlayThrough={() => setLoadedMedia(prev => ({...prev, [idx]: true}))}
                  className={`object-cover object-center w-full h-full bg-black ${
                    (idx === 0 && !isMobile) || idx === 1 ? '-scale-x-100' : ''
                  }`}
                />
              ) : (
                <Image
                  src={media}
                  alt={s.alt || "Background image"}
                  fill
                  onLoad={() => setLoadedMedia(prev => ({...prev, [idx]: true}))}
                  className={`object-cover object-center ${
                    (idx === 0 && !isMobile) || idx === 1 ? '-scale-x-100' : ''
                  }`}
                  priority={idx === 0 || idx === 1}
                  sizes="100vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0dHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIB4gHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh3/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Static Overlays over backgrounds */}
      <div className="absolute inset-0 z-[5] pointer-events-none transition-colors duration-700">
        {isMobile ? (
          <div className={`absolute inset-0 ${mobileOverlay}`} />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#000000]/70 via-[#000000]/50 to-transparent" />
          </>
        )}
      </div>

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
            {/* Badge - Always visible on mobile, selectively hidden on desktop cinematic */}
            {(!isMobile && isCinematic ? false : true) && (
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: isMobile ? 0.1 : 0.15, duration: 0.4 }}
                className={`font-body text-[#facc15] uppercase ${isMobile ? 'text-[14px] font-semibold tracking-[1.5px] opacity-85 mb-[12px]' : 'text-xs tracking-[0.3em] mb-4'}`}
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
              >
                Desde 1989 · Córdoba, Argentina
              </motion.p>
            )}

            {/* Headline */}
            <h1
              className={`font-display text-white uppercase whitespace-pre-line ${isMobile ? 'mb-0 font-[800] max-w-[85%] [text-wrap:balance]' : 'mb-3 leading-[0.95] tracking-[0.02em]'}`}
              style={{
                fontSize: isMobile ? 'clamp(36px, 10vw, 40px)' : 'clamp(64px,8vw,112px)',
                lineHeight: isMobile ? '1.1' : '0.95',
                textShadow: "0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.8)",
              }}
            >
              {isMobile && slide.mobileHeadline ? slide.mobileHeadline : slide.headline}
            </h1>

            {/* Subtitle - hidden on mobile to reduce cognitive load */}
            {slide.subtitle && !isMobile && (
              <p
                className="text-lg md:text-xl text-white/90 max-w-xl mb-6 leading-relaxed"
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

        {/* WA Floating Button (Hero Only) */}
        <div className="absolute right-4 sm:right-12 md:right-20 bottom-16 sm:bottom-20 md:bottom-24 z-50">
          <a
            href="https://wa.me/5493571578542"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300"
            aria-label="Contactar por WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </a>
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
