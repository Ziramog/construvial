import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react"
import { CONTACT } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-[#0C0F0F] text-white pt-20 pb-10 border-t-4 border-[#FFD100]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Empresa Info / Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">Empresa</h3>
            <p className="font-body text-[#acadad] text-sm leading-relaxed mb-4">
              Más de 35 años construyendo infraestructura vial y civil en Argentina. Ingeniería de excelencia y equipamiento de primera línea.
            </p>
            <ul className="flex flex-col gap-3 font-body text-sm font-bold uppercase tracking-wide">
              <li>
                <Link href="/quienes-somos" className="text-[#f5f2f1] hover:text-[#FFD100] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFD100]" />
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/obras" className="text-[#f5f2f1] hover:text-[#FFD100] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFD100]" />
                  Nuestros Proyectos
                </Link>
              </li>
              <li>
                <Link href="/equipos" className="text-[#f5f2f1] hover:text-[#FFD100] transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFD100]" />
                  Equipamiento
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Servicios Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">Soluciones</h3>
            <ul className="flex flex-col gap-4 font-body text-[#acadad] text-sm">
              <li>
                <Link href="/servicios/ingenieria-civil" className="hover:text-[#FFD100] transition-colors">Ingeniería Civil</Link>
              </li>
              <li>
                <Link href="/servicios/movimiento-suelos" className="hover:text-[#FFD100] transition-colors">Movimiento de Suelos</Link>
              </li>
              <li>
                <Link href="/servicios/alquiler-equipos" className="hover:text-[#FFD100] transition-colors">Alquiler de Equipos</Link>
              </li>
              <li>
                <Link href="/servicios/logistica" className="hover:text-[#FFD100] transition-colors">Logística y Distribución</Link>
              </li>
              <li>
                <Link href="/servicios/departamento-tecnico" className="hover:text-[#FFD100] transition-colors">Departamento Técnico</Link>
              </li>
            </ul>
          </div>

           {/* Column 3: Contacto Info */}
           <div className="flex flex-col gap-6">
            <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">Sede Central</h3>
            <ul className="flex flex-col gap-5 font-body text-[#acadad] text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-[#FFD100] shrink-0" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={20} className="text-[#FFD100] shrink-0" />
                <div className="flex flex-col">
                  <span>{CONTACT.phone1}</span>
                  <span>{CONTACT.phone2}</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={20} className="text-[#FFD100] shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Certificaciones y Redes */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">Certificaciones</h3>
            <div className="flex gap-4 items-center">
              <div className="w-20 h-20 bg-white p-2">
                <Image src="/iso-9001.png" alt="ISO 9001" width={80} height={80} className="object-contain w-full h-full opacity-60 grayscale" />
              </div>
               <div className="w-20 h-20 bg-white p-2">
                <Image src="/iso-14001.png" alt="ISO 14001" width={80} height={80} className="object-contain w-full h-full opacity-60 grayscale" />
              </div>
            </div>
            
            <h3 className="font-display text-xl uppercase tracking-wider text-white mt-4 mb-1">Redes Sociales</h3>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#1A1A1A] p-3 text-white hover:bg-[#FFD100] hover:text-[#1A1A1A] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="bg-[#1A1A1A] p-3 text-white hover:bg-[#FFD100] hover:text-[#1A1A1A] transition-colors">
                <Instagram size={20} />
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="bg-[#1A1A1A] p-3 text-white hover:bg-[#FFD100] hover:text-[#1A1A1A] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-xs text-[#767777] uppercase tracking-wider">
          <p>© 2026 Construvial S.A. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/legal/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/legal/terminos" className="hover:text-white transition-colors">Términos de Servicio</Link>
            <div className="flex items-center gap-3">
              <span>Diseño:</span>
              <Image src="/Construvial-LogoNegro-300x138.png" alt="Construvial Logo" width={60} height={28} className="brightness-0 invert opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
