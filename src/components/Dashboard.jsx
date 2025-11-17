import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function useToken() {
  return localStorage.getItem('token')
}

export default function Dashboard() {
  const [me, setMe] = useState(null)
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [newJob, setNewJob] = useState({ title: '', customer_name: '', customer_phone: '', address: '', scheduled_at: '' })

  const token = useToken()

  useEffect(() => {
    const fetchData = async () => {
      setError('')
      try {
        const meRes = await fetch(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
        if (!meRes.ok) throw new Error('Not authenticated')
        const meData = await meRes.json()
        setMe(meData)

        const jobsRes = await fetch(`${API_BASE}/jobs`, { headers: { Authorization: `Bearer ${token}` } })
        if (!jobsRes.ok) throw new Error('Could not load jobs')
        const jobsData = await jobsRes.json()
        setJobs(jobsData.items || [])
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    if (token) fetchData()
    else {
      setLoading(false)
      setError('Please sign in to view your dashboard.')
    }
  }, [token])

  const submitJob = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch(`${API_BASE}/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newJob),
      })
      if (!res.ok) throw new Error('Failed to create job')
      const data = await res.json()
      setJobs([{ id: data.id, ...newJob, status: 'scheduled' }, ...jobs])
      setNewJob({ title: '', customer_name: '', customer_phone: '', address: '', scheduled_at: '' })
    } catch (e) {
      setError(e.message)
    }
  }

  if (loading) return <div className="min-h-screen grid place-items-center text-slate-600">Loading...</div>

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-semibold">FSM Dashboard</div>
          <div className="text-sm text-slate-600">{me ? `${me.name} • ${me.organization || 'No org'}` : ''}</div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 text-red-700 px-3 py-2 text-sm">{error}</div>
        )}

        {!token ? (
          <div className="text-slate-700">You are signed out.</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 bg-white rounded-xl border border-slate-200 p-4">
              <h2 className="font-semibold mb-3">Quick create job</h2>
              <form onSubmit={submitJob} className="space-y-3">
                <input className="w-full border rounded-lg px-3 py-2" placeholder="Issue summary" value={newJob.title} onChange={(e)=>setNewJob({...newJob, title:e.target.value})} required />
                <input className="w-full border rounded-lg px-3 py-2" placeholder="Customer name" value={newJob.customer_name} onChange={(e)=>setNewJob({...newJob, customer_name:e.target.value})} required />
                <input className="w-full border rounded-lg px-3 py-2" placeholder="Customer phone" value={newJob.customer_phone} onChange={(e)=>setNewJob({...newJob, customer_phone:e.target.value})} required />
                <input className="w-full border rounded-lg px-3 py-2" placeholder="Address" value={newJob.address} onChange={(e)=>setNewJob({...newJob, address:e.target.value})} required />
                <input className="w-full border rounded-lg px-3 py-2" placeholder="Scheduled at (optional)" value={newJob.scheduled_at} onChange={(e)=>setNewJob({...newJob, scheduled_at:e.target.value})} />
                <button className="w-full bg-sky-600 hover:bg-sky-700 text-white rounded-lg px-3 py-2 font-medium">Create job</button>
              </form>
            </div>
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold">Recent jobs</h2>
              </div>
              <div className="divide-y">
                {jobs.length === 0 && (
                  <div className="text-slate-500 text-sm">No jobs yet. Create your first job on the left.</div>
                )}
                {jobs.map((job) => (
                  <div key={job.id} className="py-3 flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-sky-500 mt-2" />
                    <div>
                      <div className="font-medium">{job.title}</div>
                      <div className="text-sm text-slate-600">{job.customer_name} • {job.customer_phone}</div>
                      <div className="text-xs text-slate-500">{job.address} {job.scheduled_at ? `• ${job.scheduled_at}` : ''}</div>
                    </div>
                    <div className="ml-auto text-xs uppercase bg-slate-100 text-slate-700 px-2 py-1 rounded">{job.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
