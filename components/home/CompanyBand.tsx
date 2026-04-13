"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function CompanyBand() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Different speeds for parallax depth (max 12px movement)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -12])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -8])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -10])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -6])

  const collageImages = [
    { src: "/media/soluciones-integradas/01.png", aspect: "aspect-[3/4]" },
    { src: "/media/soluciones-integradas/02.png", aspect: "aspect-auto" },
    { src: "/media/soluciones-integradas/03.png", aspect: "aspect-square" },
    { src: "/media/soluciones-integradas/04.png", aspect: "aspect-[3/4]" },
  ]

  const parallaxValues = [y1, y2, y3, y4]

  return (
    <section ref={ref} className="bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#141414] pt-[140px] pb-32 md:pt-[180px] md:pb-40 px-6 border-none relative overflow-hidden">
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 items-center">
        
        {/* Texto izquierda */}
        <div className="flex flex-col items-start lg:pr-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-1 bg-[#facc15] mb-6" />
            <p className="font-body text-[#facc15] text-xs tracking-[0.3em] uppercase mb-8 font-bold">
              Control total de principio a fin
            </p>
            <h2 className="font-display text-white uppercase leading-[1.05] mb-10"
                style={{ fontSize: 'clamp(44px, 5.5vw, 72px)' }}>
              Ejecución eficiente<br className="hidden lg:block" /> sin intermediarios
            </h2>
            <p className="font-body text-white/70 text-[17px] md:text-lg leading-relaxed font-medium mb-12">
              Controlamos cada etapa: ingeniería propia, maquinaria sin intermediarios, 35 años de trayectoria. Un solo responsable. Sin excusas. Sin sobrecostos sorpresa.
            </p>
            <a href="/quienes-somos"
               className="inline-flex items-center gap-3 text-white font-body text-sm tracking-widest uppercase hover:text-[#facc15] transition-colors duration-300 group">
              <span className="border-b border-white/30 group-hover:border-[#facc15] pb-1 transition-colors">Conocer la empresa</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        {/* Collage derecha — 2 columnas, offset vertical */}
        <motion.div
          className="grid grid-cols-2 gap-3 lg:gap-4 lg:pl-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Columna izquierda — desplazada hacia abajo */}
          <div className="flex flex-col gap-3 lg:gap-4 mt-8 sm:mt-12 md:mt-16">
            <motion.div className={`relative w-full ${collageImages[0].aspect} overflow-hidden rounded-sm group`} style={{ y: parallaxValues[0] }}>
              <img
                src={collageImages[0].src}
                alt="Proyecto Construvial 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div className={`relative w-full ${collageImages[1].aspect} overflow-hidden rounded-sm group`} style={{ y: parallaxValues[1] }}>
              <img
                src={collageImages[1].src}
                alt="Proyecto Construvial 2"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col gap-3 lg:gap-4">
            <motion.div className={`relative w-full ${collageImages[2].aspect} overflow-hidden rounded-sm group`} style={{ y: parallaxValues[2] }}>
              <img
                src={collageImages[2].src}
                alt="Proyecto Construvial 3"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div className={`relative w-full ${collageImages[3].aspect} overflow-hidden rounded-sm group`} style={{ y: parallaxValues[3] }}>
              <img
                src={collageImages[3].src}
                alt="Proyecto Construvial 4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}



