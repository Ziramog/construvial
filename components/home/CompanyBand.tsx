"use client"

import { motion } from "framer-motion"

export function CompanyBand() {
  const collageImages = [
    { src: "/media/soluciones-integradas/01.png", alt: "Infraestructura industrial avanzada" },
    { src: "/media/soluciones-integradas/02.png", alt: "Maquinaria vial especializada" },
    { src: "/media/soluciones-integradas/03.png", alt: "Procesos de construcción técnica" },
    { src: "/media/soluciones-integradas/04.png", alt: "Control de calidad en obra" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#141414] pt-[140px] pb-32 md:pt-[180px] md:pb-40 px-6 border-none relative overflow-hidden">
      
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
              Controlamos cada etapa del proceso: ingeniería propia, maquinaria sin terceros y experiencia operativa comprobada. Así garantizamos obras a tiempo, dentro del presupuesto y con la calidad que exigís.
            </p>
            <a href="/quienes-somos"
               className="inline-flex items-center gap-3 text-white font-body text-sm tracking-widest uppercase hover:text-[#facc15] transition-colors duration-300 group">
              <span className="border-b border-white/30 group-hover:border-[#facc15] pb-1 transition-colors">Conocer la empresa</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        {/* Dynamic Collage Right */}
        <motion.div 
          className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Large Image - Focal Point */}
          <motion.div 
            variants={itemVariants}
            className="absolute left-0 top-[10%] w-[65%] aspect-[4/5] z-20 rounded-xl overflow-hidden shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={collageImages[0].src} 
              alt={collageImages[0].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Secondary Image 1 - Top Right Overlap */}
          <motion.div 
            variants={itemVariants}
            className="absolute right-0 top-0 w-[45%] aspect-square z-10 rounded-xl overflow-hidden shadow-xl grayscale-[0.4] hover:grayscale-0 transition-all duration-500"
            whileHover={{ scale: 1.03, zIndex: 30 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={collageImages[1].src} 
              alt={collageImages[1].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Secondary Image 2 - Bottom Right Offset */}
          <motion.div 
            variants={itemVariants}
            className="absolute right-[5%] bottom-[5%] w-[40%] aspect-[3/4] z-30 rounded-xl overflow-hidden shadow-2xl grayscale-[0.3] hover:grayscale-0 transition-all duration-500 border-2 border-[#0a0a0a]"
            whileHover={{ scale: 1.03, y: -5 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={collageImages[2].src} 
              alt={collageImages[2].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Decorative small element / 4th image - Optional back layer */}
          <motion.div 
            variants={itemVariants}
            className="absolute left-[40%] bottom-0 w-[25%] aspect-square z-0 rounded-xl overflow-hidden opacity-40 blur-[1px] grayscale"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={collageImages[3].src} 
              alt={collageImages[3].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Stack Fallback CSS (handled by Tailwind responsive classes usually, 
          but here we kept the absolute layout. Let's make it more mobile-friendly below) */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .relative.h-[350px] {
            height: auto !important;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
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
          }
        }
      `}</style>
    </section>
  )
}

