import { Mail, Phone, ArrowRight, Shield } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 py-16 text-white">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Switch from WhatsApp and spreadsheets to a system that scales</h2>
            <p className="mt-4 text-lg text-blue-100">Onboard your team in days, not months. Migrate your customer list, contracts, and open jobs with guided support.</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50">
                Start free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Talk to sales
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-blue-100">
              <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4" /> Secure & GDPR-ready</span>
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> Local support</span>
              <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@fieldflow.africa</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Stat label="Avg. response time" value="-32%" hint="after 60 days" />
              <Stat label="First-time fix" value="+21%" hint="with parts control" />
              <Stat label="Billing time" value="-45%" hint="with auto reports" />
              <Stat label="Customer NPS" value="+18" hint="with live updates" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value, hint }) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/5 p-4">
      <div className="text-blue-100">{label}</div>
      <div className="mt-1 text-3xl font-bold">{value}</div>
      <div className="text-xs text-blue-200">{hint}</div>
    </div>
  )
}
