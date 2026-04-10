import type { Metadata } from "next"
import { Bebas_Neue, Inter_Tight } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { constructMetadata } from "@/lib/metadata"
import "./globals.css"

// Bebas Neue — display font for titles, numbers, labels
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

// Inter Tight — body font for text, nav, buttons, specs
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${interTight.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
