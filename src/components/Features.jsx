import { CalendarCheck2, Truck, Package, MessageSquare, FileBarChart2, ShieldCheck, MapPin, Smartphone, Workflow } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: CalendarCheck2,
      title: 'Smart Scheduling',
      desc: 'Auto-assign jobs based on location, workload, and skill. Reduce travel time and hit SLAs consistently.'
    },
    {
      icon: Truck,
      title: 'Dispatch & Tracking',
      desc: 'See technician status in real time. Route optimizations and ETA updates keep customers informed.'
    },
    {
      icon: Package,
      title: 'Spare Parts Control',
      desc: 'Track stock, reserve parts for upcoming jobs, and prevent revenue leakage with audit trails.'
    },
    {
      icon: MessageSquare,
      title: 'Customer Requests',
      desc: 'Centralize WhatsApp, calls, and web requests. Ticketing with SLAs, notes, and attachments.'
    },
    {
      icon: FileBarChart2,
      title: 'Automated Reporting',
      desc: 'Daily summaries, technician productivity, first-time fix rate, and revenue dashboards.'
    },
    {
      icon: ShieldCheck,
      title: 'Maintenance Contracts',
      desc: 'Contract templates, renewals, asset registers, and preventive schedules — all in one place.'
    },
  ]

  const extras = [
    { icon: MapPin, text: 'Geo-tagged job photos' },
    { icon: Smartphone, text: 'Offline mobile workflows' },
    { icon: Workflow, text: 'Drag-and-drop job board' },
  ]

  return (
    <section id="features" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything your field team needs</h2>
          <p className="mt-4 text-lg text-gray-600">
            Replace scattered chats and spreadsheets with a single, reliable system of record.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-md">
              <f.icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {extras.map((e) => (
            <div key={e.text} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              <e.icon className="h-4 w-4 text-blue-600" /> {e.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
