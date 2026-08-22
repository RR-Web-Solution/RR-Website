import Hero from '../sections/Hero'
import Ticker from '../sections/Ticker'
import About from '../sections/About'
import Services from '../sections/Services'
import Why from '../sections/Why'
import Process from '../sections/Process'
import Pricing from '../sections/Pricing'
import Portfolio from '../sections/Portfolio'
import Testimonials from '../sections/Testimonials'
import AgencyPartner from '../sections/AgencyPartner'
import FinalCTA from '../sections/FinalCTA'
import Footer from '../components/layout/Footer'

export default function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Why />
        <Process />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <AgencyPartner />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}