import { Wrench, Snowflake, Plug, Building2, Factory } from 'lucide-react'

export default function Industries() {
  const items = [
    { icon: Wrench, title: 'Appliance Repair Companies', desc: 'Track warranties, parts usage, and first‑time fix rates.' },
    { icon: Snowflake, title: 'AC Technicians', desc: 'Plan PM schedules, refrigerant logs, and compliance reports.' },
    { icon: Plug, title: 'Electrical Maintenance Teams', desc: 'Manage callouts, fault codes, and asset histories.' },
    { icon: Factory, title: 'Cold‑room Service Providers', desc: 'Monitor breakdown patterns and speed up response times.' },
    { icon: Building2, title: 'Facility Managers', desc: 'Centralize requests, vendors, SLAs, and approvals.' },
  ]

  return (
    <section id="industries" className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built for African service teams</h2>
          <p className="mt-4 text-lg text-gray-600">Reliable in low‑connectivity environments, localized for workflows on WhatsApp and mobile.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <it.icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
