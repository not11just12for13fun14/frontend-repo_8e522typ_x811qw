import Hero from './components/Hero'
import Features from './components/Features'
import Industries from './components/Industries'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Features />
      <Industries />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
