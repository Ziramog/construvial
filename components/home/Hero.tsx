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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnCUxLNlY9fB2FNV2msGES86-CEi2uD6COe_ZDgIFdH5TGANIOIo_QI2HCiercH_TOfTbswOXjl38puiMZjnTGEU-rwzCwYrHAjLSeWrMAP1sg5Y0oyiV4TpQ6NVB6tuaX81AfFzzmIf7hLqVsrv8eMzkFaGw1Lj38V6buXFFo8OaUMH7OHoMCWsrPIHCh27TlllmJIOJtSUzybpFE5RbOLH241xcFqOjkgF8gsCQ3q8jqX1zhKUxLnZMmMj3GG4hh0XCobTKEUwzR",
    alt: "Galpón corporativo con flota de maquinaria vial",
  },
  {
    headline: "Equipamiento\nde Primera Línea",
    subtitle: "Flota propia de excavadoras, motoniveladoras, compactadores y camiones volcadores",
    cta: "Conocer Nuestro Equipamiento",
    ctaLink: "/equipos",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWIxzTy19jKMv_mfzEKVBQIRSE3igHdKFRu57XIGh5QT2dttsZ303tNzhPvT_mIkTcruasggI0Qu27Iqx4PQ-Maxa6rs_CK-10r4EMSUgAsZzrELNlvyPWiyg3_vUUzqLofrzq2TSLBGvq3_gVlVaPht7V6UtfnQBt6XgVDOqqMX_DK51uYkH_9E73HIVHsMzg50gNuSXnTAn56wpp6xSs0BI1uu4zZHX-cjCSFzGI2RtIPvILfoICaBj3OwqNZgKvV-xhI8kJ09jS",
    alt: "Maquinaria pesada trabajando de manera eficiente en proyecto de infraestructura",
  },
  {
    headline: "Obra Vial\nde Excelencia",
    subtitle: "Rutas, autopistas, pavimentaciones y mantenimiento vial con los más altos estándares",
    cta: "Ver Proyectos Viales",
    ctaLink: "/obras",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=85",
    alt: "Construcción de ruta con maquinaria vial",
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
    <section id="hero" className="relative h-screen min-h-[700px] max-h-[900px] w-full overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-6 md:px-12 lg:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="font-body text-[#FFD100] text-sm tracking-[0.3em] uppercase mb-6"
            >
              Desde 1989 · Córdoba, Argentina
            </motion.p>

            {/* Headline */}
            <h1 className="font-display text-[clamp(42px,7vw,96px)] leading-[0.92] text-white uppercase mb-6 whitespace-pre-line">
              {slide.headline}
            </h1>

            {/* Subtitle */}
            <p className="font-body text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={slide.ctaLink}
                className="inline-flex items-center justify-center gap-3 bg-[#FFD100] text-black font-body font-bold px-8 py-4 text-sm tracking-wider uppercase hover:bg-yellow-400 transition-all duration-200 group"
              >
                {slide.cta}
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white font-body font-medium px-8 py-4 text-sm tracking-wider uppercase hover:border-[#FFD100] hover:text-[#FFD100] transition-all duration-200"
              >
                Solicitar Presupuesto
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom bar: Nav arrows + slide indicators */}
        <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20 flex items-center justify-between">
          {/* Slide indicators */}
          <div className="flex items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrent(idx)
                }}
                className={`h-1 transition-all duration-300 ${
                  idx === current ? "w-12 bg-[#FFD100]" : "w-6 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Ir a slide ${idx + 1}`}
              />
            ))}
            <span className="font-body text-white/40 text-xs ml-4 tracking-widest">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-[#FFD100] hover:text-black hover:border-[#FFD100] transition-all duration-200"
              aria-label="Slide anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-[#FFD100] hover:text-black hover:border-[#FFD100] transition-all duration-200"
              aria-label="Slide siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
