"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function EquiposCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section ref={ref} className="relative min-h-[85vh] overflow-hidden">
      {/* Full-width video background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="absolute inset-0"
      >
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src="/media/equipos/desktop/Loader_filling_truck_202604130031.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay — gradient from right (text on right) */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 min-h-[85vh] flex items-center justify-end px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left — empty for video to show through */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right — Text with dramatic side slide */}
          <motion.div
            initial={{ opacity: 0, x: 120, rotate: 2 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 14, mass: 0.9, delay: 0.2 }}
            className="flex flex-col items-end lg:col-span-1 text-right"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="h-1 bg-[#facc15] mb-6 ml-auto"
            />
            <p className="font-body text-[#facc15] text-xs tracking-[0.3em] uppercase mb-4 font-bold">
              40+ equipos propios, listos para operar
            </p>
            <h2 className="font-display text-white uppercase leading-none mb-8"
                style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
              Equipos<br/>
              <span className="text-[#facc15]">listos para operar</span>
            </h2>
            <p className="font-body text-white/70 text-[17px] leading-relaxed mb-10 max-w-lg">
              Maquinaria propia certificada — motoniveladoras, excavadoras, compactadores y cargadoras. Sin dependencia de terceros, sin retrasos por disponibilidad. Tu obra avanza cuando lo necesita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a href="/equipos"
                 className="inline-flex items-center justify-center gap-2 bg-[#facc15] text-[#0a0a0a]
                            font-body font-semibold text-sm tracking-widest uppercase
                            px-8 py-4 hover:bg-white transition-colors">
                Ver catálogo →
              </a>
              <a href="https://wa.link/ocm4yr"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 border border-white/30 text-white
                            font-body text-sm tracking-widest uppercase
                            px-8 py-4 hover:border-white transition-colors">
                Consultar disponibilidad
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
