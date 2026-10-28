import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-canvas">
      <Header />
      <div className="flow-content">
        <main className="relative w-full pt-16">
          <Hero />
          <Services />
          <Projects />
          <ContactSection />
        </main>
      </div>

      <div className="reveal-footer-sticky">
        <Footer />
      </div>
    </div>
  )
}

export default App
