import type { Metadata } from "next"
import { Barlow_Condensed, DM_Sans } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { constructMetadata } from "@/lib/metadata"
import "./globals.css"

// Google Fonts
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-barlow",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${barlow.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
