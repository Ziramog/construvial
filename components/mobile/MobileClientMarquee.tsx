"use client"

import Image from "next/image"

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
  // Duplicate for infinite loop
  const doubled = [...clients, ...clients]

  return (
    <section className="bg-[#F5F7FA] py-10 overflow-hidden">
      {/* Credibility heading */}
      <div className="text-center mb-8 px-5">
        <p className="text-[13px] tracking-[0.2em] uppercase text-[#0a0a0a]/70 mb-2 font-bold">
          Empresas líderes confían en nosotros
        </p>
        <p className="text-[11px] tracking-[0.15em] uppercase text-[#0a0a0a]/40">
          Sector público y privado · Energía · Industria · Infraestructura
        </p>
      </div>

      {/* Marquee with fades */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#F5F7FA] to-transparent pointer-events-none" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#F5F7FA] to-transparent pointer-events-none" />

        {/* Animated track */}
        <div className="marquee-track animate-marquee flex items-center">
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center mx-6 flex-shrink-0 opacity-100"
              style={{ minWidth: '100px', height: '48px' }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={110}
                height={48}
                className="object-contain max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
