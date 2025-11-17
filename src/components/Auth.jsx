import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Auth({ mode = 'login' }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', organization: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'register') {
        const res = await fetch(`${API_BASE}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
            organization: form.organization || undefined,
          }),
        })
        if (!res.ok) throw new Error((await res.json()).detail || 'Registration failed')
        // auto-login after register
        await loginAfterRegister()
      } else {
        await loginAfterRegister()
      }
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const loginAfterRegister = async () => {
    const params = new URLSearchParams()
    params.append('username', form.email)
    params.append('password', form.password)
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
    if (!res.ok) throw new Error((await res.json()).detail || 'Login failed')
    const data = await res.json()
    localStorage.setItem('token', data.access_token)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-8 shadow-xl">
        <h1 className="text-2xl font-semibold text-slate-900 mb-1">
          {mode === 'register' ? 'Create your account' : 'Welcome back'}
        </h1>
        <p className="text-slate-600 mb-6">
          {mode === 'register' ? 'Manage jobs, technicians, inventory and more.' : 'Sign in to your dashboard.'}
        </p>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 text-red-700 px-3 py-2 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Full name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Ada Lovelace"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Organization</label>
                <input
                  name="organization"
                  value={form.organization}
                  onChange={onChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="e.g. Lagos Cool Tech"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm text-slate-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="••••••••"
            />
          </div>

          <button
            disabled={loading}
            className="w-full inline-flex items-center justify-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium px-4 py-2 transition disabled:opacity-60"
          >
            {loading ? 'Please wait...' : mode === 'register' ? 'Create account' : 'Sign in'}
          </button>
        </form>

        <div className="mt-4 text-sm text-slate-600">
          {mode === 'register' ? (
            <span>
              Already have an account?{' '}
              <Link to="/login" className="text-sky-700 hover:underline">Sign in</Link>
            </span>
          ) : (
            <span>
              New here?{' '}
              <Link to="/register" className="text-sky-700 hover:underline">Create an account</Link>
            </span>
          )}
        </div>

        <div className="mt-6 text-xs text-slate-500">
          By continuing you agree to our Terms and Privacy Policy.
        </div>
      </div>
    </div>
  )
}
