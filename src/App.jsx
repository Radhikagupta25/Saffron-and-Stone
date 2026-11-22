import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SignatureMenu from './components/SignatureMenu'
import WhyChooseUs from './components/WhyChooseUs'
import ExperienceBanner from './components/ExperienceBanner'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-saffron focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <SignatureMenu />
        <WhyChooseUs />
        <ExperienceBanner />
        <Testimonials />
        <Gallery />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </>
  )
}