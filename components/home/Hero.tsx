"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt="Construvial S.A. Obra principal"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-dark/80 -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-col items-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-wider mb-6"
          >
            Hacemos <span className="text-accent">realidad</span> los proyectos de nuestros clientes
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="font-body text-xl md:text-2xl text-gray-200 mb-10 tracking-wide font-light"
          >
            35 años construyendo infraestructura para Argentina
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button asChild size="lg" className="w-full sm:w-auto text-lg font-bold px-8">
              <Link href="/obras">Ver nuestras obras</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg font-bold px-8 border-white text-white hover:bg-white/10">
              <Link href="/contacto">Contactanos</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent" />
      </motion.div>
    </section>
  )
}
