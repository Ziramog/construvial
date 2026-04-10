import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface WorkCardProps {
  title: string
  category: string
  client: string
  image: string
  slug: string
}

export function WorkCard({ title, category, client, image, slug }: WorkCardProps) {
  return (
    <Link href={`/obras/${slug}`} className="group block">
      <div className="relative rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-accent/30">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-dark mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="font-body text-muted text-sm mb-4">{client}</p>
          <div className="flex items-center gap-2 font-body font-semibold text-primary group-hover:text-accent transition-colors">
            Ver más
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}
