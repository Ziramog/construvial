import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface WorkCardProps {
  title: string
  category: string
  client: string
  image: string
  video?: string
  slug: string
  index: number
}

export function WorkCard({ title, category, client, image, video, slug, index }: WorkCardProps) {
  const num = String(index + 1).padStart(3, "0")

  return (
    <Link href={`/obras/${slug}`} className="group block relative overflow-hidden">
      <div className="relative aspect-[4/3] bg-black">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {/* Overlay gradient only at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        {/* Work number — top right */}
        <span className="absolute top-4 right-4 font-display text-3xl text-white/30 leading-none select-none">
          {num}
        </span>

        {/* Category badge */}
        <span className="absolute bottom-20 left-5 bg-[#FFD100] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5">
          {category}
        </span>

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display text-xl text-white uppercase leading-tight mb-1 group-hover:text-[#FFD100] transition-colors duration-200">
            {title}
          </h3>
          <p className="font-body text-gray-400 text-sm">{client}</p>
        </div>

        {/* Hover overlay — "Ver proyecto" */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
            Ver proyecto <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  )
}
