/* eslint-disable @next/next/no-img-element */
"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ProximamenteModal, useProximamente } from "@/components/ui/ProximamenteModal"

export function CompanyBand() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { show, setShow } = useProximamente()

  // Desktop Parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -35])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -40])

  // Mobile Parallax
  const xLeftMobile = useTransform(scrollYProgress, [0, 1], [0, -30])
  const xRightTopMobile = useTransform(scrollYProgress, [0, 1], [0, 20])
  const xRightBottomMobile = useTransform(scrollYProgress, [0, 1], [0, 35])
  const yMobile = useTransform(scrollYProgress, [0, 1], [0, 15])
  const scaleMobile = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  const collageImages = [
    { src: "/media/soluciones-integradas/01.png", aspect: "aspect-[3/4]" },
    { src: "/media/soluciones-integradas/02.png", aspect: "aspect-auto" }, // desktop
    { src: "/media/soluciones-integradas/03.png", aspect: "aspect-square" },
    { src: "/media/soluciones-integradas/04.png", aspect: "aspect-[3/4]" },
  ]

  const parallaxValues = [y1, y2, y3, y4]

  return (
    <section ref={ref} className="bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#141414] pt-[70px] pb-[90px] md:pt-[180px] md:pb-40 px-5 md:px-6 border-none relative overflow-hidden">

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 relative z-10 items-center">

        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 14, mass: 0.8 }}
          className="flex flex-col items-start lg:pr-12"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="hidden md:block h-1 bg-[#facc15] mb-6"
          />

          {/* LABEL */}
          <p className="font-body text-[#facc15] text-[14px] md:text-xs tracking-[1.5px] md:tracking-[0.3em] font-[600] md:font-bold uppercase opacity-75 md:opacity-100 mb-[10px] md:mb-8">
            Control total de principio a fin
          </p>

          {/* HEADLINE */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            className="font-display text-white uppercase text-[32px] md:text-[clamp(44px,5.5vw,72px)] font-[800] md:font-normal leading-[1.1] md:leading-[1.05] max-w-[85%] md:max-w-none mb-0 md:mb-10">
            Ejecución <br className="hidden lg:block" /> sin intermediarios
          </motion.h2>

          {/* SHORT LINE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
            className="font-body text-white/85 md:text-white/70 text-[14px] md:text-lg mt-[10px] md:mt-0 font-[500] md:leading-relaxed mb-0 md:mb-12">
            Ingeniería propia. Equipos propios. Un solo responsable.
          </motion.p>

          {/* MOBILE CTA */}
          <button
            onClick={() => setShow(true)}
            className="md:hidden mt-[20px] inline-flex items-center justify-center gap-2 bg-[#facc15] text-[#0a0a0a] font-body font-[600] text-[14px] tracking-widest uppercase px-[18px] py-[14px] w-[85%] hover:bg-white transition-colors cursor-pointer">
            Conocer la empresa →
          </button>

          {/* DESKTOP CTA */}
          <button
            onClick={() => setShow(true)}
            className="hidden md:inline-flex mt-0 items-center gap-3 text-white font-body text-sm tracking-widest uppercase hover:text-[#facc15] transition-colors duration-300 group cursor-pointer">
            <span className="border-b border-white/30 group-hover:border-[#facc15] pb-1 transition-colors">Conocer la empresa</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>

        {/* MOBILE COLLAGE */}
        <div className="md:hidden grid grid-cols-2 gap-[14px] mt-2 pb-4 will-change-transform">
          {/* Left Column (1 large vertical) */}
          <div className="flex flex-col pt-8">
            <motion.div 
              style={{ x: xLeftMobile, y: yMobile, scale: scaleMobile }}
              className="relative w-full aspect-[3/4] overflow-hidden rounded-[10px]"
            >
              <img src={collageImages[0].src} className="w-full h-full object-cover" alt="Obra Construvial" />
            </motion.div>
          </div>
          
          {/* Right Column (2 stacked shorter) */}
          <div className="flex flex-col gap-[14px]">
            <motion.div 
              style={{ x: xRightTopMobile, y: yMobile, scale: scaleMobile }}
              className="relative w-full aspect-square overflow-hidden rounded-[10px]"
            >
              <img src={collageImages[2].src} className="w-full h-full object-cover" alt="Maquinaria Construvial" />
            </motion.div>
            <motion.div 
              style={{ x: xRightBottomMobile, y: yMobile, scale: scaleMobile }}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-[10px]"
            >
              <img src={collageImages[3].src} className="w-full h-full object-cover" alt="Proyecto Construvial" />
            </motion.div>
          </div>
        </div>

        {/* DESKTOP COLLAGE */}
        <motion.div
          className="hidden md:grid grid-cols-2 gap-3 lg:gap-4 lg:pl-8"
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 14, mass: 0.8, delay: 0.15 }}
        >
          {/* Left col */}
          <div className="flex flex-col gap-3 lg:gap-4 mt-8 sm:mt-12 md:mt-16">
            <motion.div className={`relative w-full ${collageImages[0].aspect} overflow-hidden rounded-sm group`} style={{ y: parallaxValues[0] }}>
              <img src={collageImages[0].src} alt="Proyecto 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
            <motion.div className={`relative w-full ${collageImages[1].aspect} overflow-hidden rounded-sm group`} style={{ y: parallaxValues[1] }}>
              <img src={collageImages[1].src} alt="Proyecto 2" className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
          </div>

          {/* Right col */}
          <div className="flex flex-col gap-3 lg:gap-4">
            <motion.div className={`relative w-full ${collageImages[2].aspect} overflow-hidden rounded-sm group`} style={{ y: parallaxValues[2] }}>
              <img src={collageImages[2].src} alt="Proyecto 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
            <motion.div className={`relative w-full ${collageImages[3].aspect} overflow-hidden rounded-sm group`} style={{ y: parallaxValues[3] }}>
              <img src={collageImages[3].src} alt="Proyecto 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
          </div>
        </motion.div>

      </div>

      <ProximamenteModal visible={show} onClose={() => setShow(false)} />
    </section>
  )
}
