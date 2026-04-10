"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex">
      {/* Left panel — content */}
      <div className="w-full lg:w-[58%] bg-[#0A1628] flex flex-col justify-center px-8 md:px-16 lg:px-20 py-24 relative overflow-hidden">
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-noise pointer-events-none" />

        {/* Founding year badge */}
        <p
          className={`font-body text-[#FFD100] text-sm tracking-[0.3em] uppercase mb-8 relative z-10 transition-all duration-700 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
          }`}
        >
          Desde 1989 · Río Tercero, Córdoba
        </p>

        {/* Title — Bebas Neue, massive */}
        <div className="relative z-10">
          <h1
            className={`font-display text-[clamp(56px,8vw,120px)] leading-[0.9] text-white uppercase mb-6 transition-all duration-800 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Hacemos<br />
            <span className="text-[#FFD100]">realidad</span>
            <br />
            los proyectos<br />
            de nuestros<br />
            clientes
          </h1>

          {/* Orange divider */}
          <div
            className={`w-16 h-[2px] bg-[#FFD100] mb-6 transition-all duration-700 delay-700 ${
              mounted ? "w-16" : "w-0"
            }`}
          />

          {/* Subtitle */}
          <p
            className={`font-body text-gray-400 text-lg max-w-md mb-12 leading-relaxed transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Obras viales, civiles, metálicas y electromecánicas.
            500 proyectos finalizados en 40 ciudades de Argentina.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[800ms] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <Link
              href="/obras"
              className="inline-flex items-center justify-center gap-3 bg-[#FFD100] text-black font-body font-semibold px-8 py-4 hover:bg-yellow-400 transition-colors duration-200 group"
            >
              Ver nuestras obras
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-body px-8 py-4 hover:border-white/60 transition-colors duration-200"
            >
              Contactanos
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-8 md:left-20 flex items-center gap-3 transition-opacity duration-1000 delay-[1500ms] ${
            mounted ? "opacity-40" : "opacity-0"
          }`}
        >
          <div className="w-8 h-[1px] bg-white" />
          <span className="font-body text-white text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </div>

      {/* Right panel — image */}
      <div className="hidden lg:block lg:w-[42%] relative">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
          alt="Obra Construvial"
          fill
          className="object-cover"
          priority
        />
        {/* Minimal overlay */}
        <div className="absolute inset-0 bg-[#0A1628]/10" />

        {/* Floating stat badge */}
        <div
          className={`absolute bottom-12 left-[-60px] bg-[#FFD100] p-6 z-10 transition-all duration-800 delay-[1200ms] ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <p className="font-display text-5xl text-white leading-none">500+</p>
          <p className="font-body text-white/80 text-sm mt-1">Obras finalizadas</p>
        </div>
      </div>
    </section>
  )
}
