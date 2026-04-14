"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function ServicesCards() {
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
          src="/media/servicios/desktop/construvial.mov"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 min-h-[85vh] flex items-start md:items-center px-5 md:px-12 lg:px-20 pt-[100px] md:pt-0 pb-[90px] md:pb-0">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left — Text with dramatic side slide */}
          <motion.div
            initial={{ opacity: 0, x: -120, rotate: -2 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 14, mass: 0.9, delay: 0.2 }}
            className="flex flex-col items-start lg:col-span-1"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="hidden md:block h-1 bg-[#facc15] mb-6"
            />
            
            <p className="font-body text-[#facc15] text-[14px] md:text-xs tracking-[1.5px] md:tracking-[0.3em] font-semibold md:font-bold uppercase opacity-85 mb-[12px] md:mb-4">
              Servicios integrales
            </p>

            <h2 className="font-display text-white uppercase text-[36px] md:text-[clamp(48px,6vw,80px)] font-[800] md:font-normal leading-[1.1] md:leading-none max-w-[85%] md:max-w-none mb-4 md:mb-8">
              <span className="md:hidden">TODO EN OBRA.<br/><span className="text-[#facc15] block">SIN FRICCIÓN.</span></span>
              <span className="hidden md:inline">Todo lo que<br/><span className="text-[#facc15]">tu obra necesita</span></span>
            </h2>

            <p className="font-body text-white/70 text-[14px] md:text-[17px] leading-[1.4] md:leading-relaxed max-w-[85%] md:max-w-lg mb-6 md:mb-10">
              <span className="md:hidden">De la ingeniería a la ejecución.</span>
              <span className="hidden md:inline">Ingeniería civil, movimiento de suelos, equipos certificados y logística especializada. Un solo responsable para toda tu obra: menos coordinar, más ejecutar.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-[85%] md:w-auto">
              <a href="/servicios"
                 className="inline-flex items-center justify-center gap-2 bg-[#facc15] text-[#0a0a0a]
                            font-body font-semibold text-[14px] md:text-sm tracking-widest uppercase
                            px-[18px] py-[14px] md:px-8 md:py-4 hover:bg-white transition-colors">
                Ver servicios →
              </a>
              <a href="https://wa.link/ocm4yr"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 border border-white/30 text-white
                            font-body text-[14px] md:text-sm tracking-widest uppercase opacity-80 md:opacity-100
                            px-[18px] py-[14px] md:px-8 md:py-4 hover:border-white transition-colors">
                Consultar proyecto
              </a>
            </div>
          </motion.div>

          {/* Right — empty for video to show through */}
          <div className="hidden lg:block lg:col-span-1" />
        </div>
      </div>
    </section>
  )
}
