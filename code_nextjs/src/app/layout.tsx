import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Bilanis Propreté - Services professionnels de nettoyage",
  description: "Solutions professionnelles de nettoyage pour entreprises et particuliers. Nettoyage, débarras, rotation de conteneurs et plus.",
  keywords: ["nettoyage professionnel", "débarras", "conteneurs", "propreté", "entreprise nettoyage"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-open-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}