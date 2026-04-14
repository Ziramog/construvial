"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const clients = [
  { name: "Cliente 1", logo: "/media/logos/10001.png" },
  { name: "Cliente 2", logo: "/media/logos/10002.png" },
  { name: "Cliente 3", logo: "/media/logos/10003.png" },
  { name: "Cliente 4", logo: "/media/logos/10004.png" },
  { name: "Cliente 5", logo: "/media/logos/10005.png" },
  { name: "Cliente 6", logo: "/media/logos/10006.png" },
  { name: "Cliente 7", logo: "/media/logos/10007.png" },
  { name: "Cliente 8", logo: "/media/logos/10008.png" },
  { name: "Cliente 9", logo: "/media/logos/10009.png" },
  { name: "Cliente 10", logo: "/media/logos/10010.png" },
  { name: "Cliente 11", logo: "/media/logos/10011.jpg" },
  { name: "Cliente 12", logo: "/media/logos/10012.jpg" },
  { name: "Cliente 13", logo: "/media/logos/10013.jpg" },
  { name: "Cliente 14", logo: "/media/logos/10014.jpg" },
  { name: "Cliente 15", logo: "/media/logos/10015.jpg" },
  { name: "Cliente 16", logo: "/media/logos/10016.jpg" },
  { name: "Cliente 17", logo: "/media/logos/10017.jpg" },
  { name: "Cliente 18", logo: "/media/logos/10018.jpg" },
  { name: "Cliente 19", logo: "/media/logos/10019.jpg" },
]

export function MobileClientMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const doubled = [...clients, ...clients]

  return (
    <section ref={ref} className="bg-[#F5F7FA] py-10 overflow-hidden">
      {/* Credibility heading */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 100, damping: 14 }}
        className="text-center mb-6 px-5"
      >
        <p className="text-[13px] tracking-[0.2em] uppercase text-[#0a0a0a] mb-2 font-bold">
          Más de 24 empresas líderes confían en nosotros
        </p>
        <p className="text-[10px] tracking-[0.15em] uppercase text-[#0a0a0a]/50">
          Sector público y privado · Energía · Industria · Infraestructura
        </p>
      </motion.div>

      {/* Marquee with fades */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        className="relative"
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-[#F5F7FA] to-transparent pointer-events-none" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-[#F5F7FA] to-transparent pointer-events-none" />

        {/* Animated track - FASTER: 20s instead of 35s */}
        <div className="marquee-track flex items-center" style={{ animation: 'marquee 20s linear infinite' }}>
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center mx-5 flex-shrink-0"
              style={{ minWidth: '90px', height: '56px' }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={56}
                className="object-contain max-h-14 w-auto"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
