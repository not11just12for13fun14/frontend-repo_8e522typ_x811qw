import { Check } from 'lucide-react'

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$49',
      cadence: 'per month',
      features: [
        'Up to 5 technicians',
        'Job scheduling & dispatch',
        'Customer request inbox',
        'Basic reporting',
      ],
      cta: 'Start free trial',
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$99',
      cadence: 'per month',
      features: [
        'Up to 20 technicians',
        'Parts & inventory tracking',
        'Maintenance contracts',
        'Automated dashboards',
      ],
      cta: 'Choose Growth',
      highlighted: true,
    },
    {
      name: 'Business',
      price: '$199',
      cadence: 'per month',
      features: [
        'Unlimited technicians',
        'Advanced SLAs & workflows',
        'API & integrations',
        'Priority support',
      ],
      cta: 'Talk to sales',
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-gray-600">Start small, scale as your team grows. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border p-6 ${t.highlighted ? 'border-blue-600 shadow-lg' : 'border-gray-200'}`}>
              {t.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-gray-900">{t.price}</span>
                <span className="pb-1 text-sm text-gray-500">{t.cadence}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700"><Check className="h-4 w-4 text-green-600" /> {f}</li>
                ))}
              </ul>
              <a href="#cta" className={`mt-8 block w-full rounded-md px-4 py-2 text-center font-medium transition ${t.highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-gray-300 text-gray-700 hover:border-gray-400'}`}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
