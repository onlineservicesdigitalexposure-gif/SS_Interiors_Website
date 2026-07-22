import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Send, CheckCircle2 } from 'lucide-react'
import organization from '../data/organization.js'

const SERVICE_OPTIONS = [
  'Modular Kitchen',
  'Living & Dining',
  'Bedroom Interiors',
  'Wardrobe & Storage',
  'False Ceiling & Lighting',
  'Bathroom Interiors',
  'Balcony & Outdoor',
  'Corporate & Office',
  'Not sure yet',
]

export default function ContactForm() {
  const location = useLocation()
  const preselected = location.state?.service
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselected || '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New enquiry from ${form.name || 'website'} — ${form.service || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${organization.contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="card-glass flex flex-col items-center gap-4 p-10 text-center">
        <CheckCircle2 size={44} className="text-volt-light" />
        <h3 className="font-display text-2xl font-bold text-bone">Thanks, {form.name.split(' ')[0] || 'there'}!</h3>
        <p className="max-w-sm text-sm text-bone-muted">
          Your email app should have opened with your enquiry ready to send. Prefer to talk instead? Call us directly at{' '}
          <a href={`tel:${organization.contact.phone}`} className="text-bronze-light">
            {organization.contact.phoneDisplay}
          </a>.
        </p>
        <button onClick={() => setSent(false)} className="btn-secondary mt-2">
          Send Another Enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card-glass space-y-5 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required>
          <input
            required
            type="text"
            value={form.name}
            onChange={update('name')}
            placeholder="Your name"
            className="field"
          />
        </Field>
        <Field label="Phone Number" required>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="10-digit mobile number"
            className="field"
          />
        </Field>
      </div>

      <Field label="Email Address">
        <input
          type="email"
          value={form.email}
          onChange={update('email')}
          placeholder="you@email.com"
          className="field"
        />
      </Field>

      <Field label="Which service are you interested in?">
        <select value={form.service} onChange={update('service')} className="field">
          <option value="">Select a service</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about your project">
        <textarea
          rows={4}
          value={form.message}
          onChange={update('message')}
          placeholder="Space size, location, timeline, budget — anything that helps us prepare."
          className="field resize-none"
        />
      </Field>

      <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
        Send Enquiry <Send size={16} />
      </button>
    </form>
  )
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-bone-muted">
        {label} {required && <span className="text-bronze">*</span>}
      </span>
      {children}
    </label>
  )
}
