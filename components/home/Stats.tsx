import { STATS } from "@/lib/constants"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"

export function Stats() {
  return (
    <section className="bg-dark text-white py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 text-center">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="h-1 w-12 bg-accent mb-6 rounded-full transform transition-transform group-hover:scale-x-150" />
              <div className="font-display font-bold text-5xl md:text-6xl text-white mb-2 flex items-baseline">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-body text-gray-400 font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
