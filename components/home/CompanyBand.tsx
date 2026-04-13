"use client"

import { motion, Variants } from "framer-motion"

export function CompanyBand() {
  const collageImages = [
    { src: "/media/soluciones-integradas/01.png", alt: "Infraestructura industrial avanzada" },
    { src: "/media/soluciones-integradas/02.png", alt: "Maquinaria vial especializada" },
    { src: "/media/soluciones-integradas/03.png", alt: "Procesos de construcción técnica" },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom premium cubic-bezier
      },
    },
  }

  return (
    <section className="bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#141414] pt-[140px] pb-32 md:pt-[180px] md:pb-40 px-6 border-none relative overflow-hidden">
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 relative z-10 items-center">
        
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
              Controlamos cada etapa del proceso: ingeniería propia, maquinaria sin terceros y experiencia operativa comprobada. Así garantizamos obras a tiempo, dentro del presupuesto y con la calidad que exigís.
            </p>
            <a href="/quienes-somos"
               className="inline-flex items-center gap-3 text-white font-body text-sm tracking-widest uppercase hover:text-[#facc15] transition-colors duration-300 group">
              <span className="border-b border-white/30 group-hover:border-[#facc15] pb-1 transition-colors">Conocer la empresa</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        {/* Dynamic Bold Collage Right */}
        <motion.div 
          className="relative h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* 1. Main HERO Image (MID LAYER - z-20) */}
          <motion.div 
            variants={itemVariants}
            className="absolute left-0 top-[15%] w-[85%] aspect-[16/10] z-20 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5"
            whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={collageImages[0].src} 
              alt={collageImages[0].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 2. Secondary Floating Front (FRONT LAYER - z-30) - Aggressive Overlap */}
          <motion.div 
            variants={itemVariants}
            className="absolute right-[-5%] top-[45%] w-[45%] aspect-[4/5] z-30 rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-2 border-[#0a0a0a] hover:z-40 transition-all"
            whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.4 } }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={collageImages[1].src} 
              alt={collageImages[1].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 3. Third Background Support (BACK LAYER - z-10) - Subtle Asymmetry */}
          <motion.div 
            variants={itemVariants}
            className="absolute right-[10%] top-[-5%] w-[55%] aspect-square z-10 rounded-2xl overflow-hidden shadow-xl opacity-80 grayscale-[0.5] hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={collageImages[2].src} 
              alt={collageImages[2].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Background Decorative glow */}
          <div className="absolute top-[20%] left-[20%] w-64 h-64 bg-[#facc15]/10 blur-[120px] rounded-full pointer-events-none z-0" />
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .relative.h-[450px], .relative.h-[550px], .relative.h-[650px], .relative.h-[750px] {
            height: auto !important;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding-top: 2rem;
          }
          .absolute {
            position: relative !important;
            width: 100% !important;
            left: auto !important;
            top: auto !important;
            right: auto !important;
            bottom: auto !important;
            aspect-ratio: 16/9 !important;
            opacity: 1 !important;
            filter: none !important;
            transform: none !important;
            margin-right: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}


