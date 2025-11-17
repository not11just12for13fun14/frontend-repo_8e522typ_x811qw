import Spline from '@splinetool/react-spline'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-white">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay for text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-10 pb-16 sm:pt-16 lg:px-8">
        {/* Nav */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600" />
            <span className="text-xl font-semibold tracking-tight text-gray-900">FieldFlow Africa</span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
            <a href="#features" className="hover:text-gray-900">Product</a>
            <a href="#industries" className="hover:text-gray-900">Industries</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a href="#cta" className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm transition hover:bg-blue-700">Get Started</a>
          </div>
        </div>

        {/* Hero copy */}
        <div className="mx-auto mt-20 max-w-3xl text-center sm:mt-28">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Run your service operations with speed, clarity, and control
          </h1>
          <p className="mt-5 text-lg leading-7 text-gray-600 sm:text-xl">
            The all‑in‑one Field Service Management platform built for Africa’s appliance repair, AC, electrical, cold-room, and facility maintenance teams.
            Schedule jobs, dispatch technicians, track parts, manage customer requests, automate reporting, and stay on top of maintenance contracts.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white shadow-sm transition hover:bg-blue-700">
              Start free trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 transition hover:border-gray-400">
              See how it works
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <span className="inline-flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-green-600" /> No credit card needed</span>
            <span className="inline-flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-green-600" /> WhatsApp-friendly updates</span>
            <span className="inline-flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-green-600" /> Works offline on mobile</span>
          </div>
        </div>

        {/* Social proof */}
        <div className="relative mt-14 w-full max-w-5xl rounded-2xl border border-gray-200 bg-white/70 p-6 backdrop-blur">
          <p className="text-center text-sm text-gray-600">
            Trusted by growing service companies across Lagos, Accra, Nairobi, and Johannesburg
          </p>
          <div className="mt-5 grid grid-cols-2 gap-6 opacity-80 sm:grid-cols-4">
            <div className="h-8 rounded bg-gray-200" />
            <div className="h-8 rounded bg-gray-200" />
            <div className="h-8 rounded bg-gray-200" />
            <div className="h-8 rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </section>
  )
}
