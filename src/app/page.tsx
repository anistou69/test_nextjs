import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { QuoteForm } from "@/components/quote-form"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { References } from "@/components/references"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <QuoteForm />
      <Testimonials />
      <FAQ />
      <References />
      <Contact />
    </>
  )
}