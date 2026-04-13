import type { Metadata } from "next"
import { Bebas_Neue, DM_Sans } from "next/font/google"
import { MobileHeader } from "@/components/mobile/MobileHeader"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { constructMetadata } from "@/lib/metadata"
import "../globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = constructMetadata()

export default function MobileLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased selection:bg-[#FFD100] selection:text-black bg-[#0a0a0a]">
        <MobileHeader />
        <main className="min-h-screen">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  )
}
