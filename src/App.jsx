import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './components/Features'
import Industries from './components/Industries'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'

function Landing() {
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

function App() {
  const location = useLocation()
  return (
    <>
      <Routes location={location}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Auth mode="login" />} />
        <Route path="/register" element={<Auth mode="register" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
