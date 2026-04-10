import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

interface CTABannerProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
  className?: string
}

export function CTABanner({
  title = "¿Tenés un proyecto en mente?",
  subtitle = "Contactanos y te ayudamos a hacerlo realidad. Nuestro equipo está listo para asesorarte.",
  buttonText = "Contactanos ahora",
  buttonLink = "/contacto",
  className,
}: CTABannerProps) {
  return (
    <section className={`bg-gradient-to-r from-primary to-dark text-white py-16 md:py-20 relative overflow-hidden ${className}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            {title}
          </h2>
          <p className="font-body text-lg text-gray-200 mb-8">
            {subtitle}
          </p>
          <Button asChild size="lg" className="text-lg font-bold px-8 bg-accent hover:bg-accent/90">
            <Link href={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
