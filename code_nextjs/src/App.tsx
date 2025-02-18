import React from 'react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { QuoteForm } from '@/components/quote-form';
import { Testimonials } from '@/components/testimonials';
import { FAQ } from '@/components/faq';
import { References } from '@/components/references';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <QuoteForm />
      <Testimonials />
      <FAQ />
      <References />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;