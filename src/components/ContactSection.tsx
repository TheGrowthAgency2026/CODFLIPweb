'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Mail, MessageCircle } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const contactOptions = [
  {
    icon: ExternalLink,
    title: 'Releasing soon on Shopify',
    sub: 'Coming to the Shopify App Store soon',
    link: { href: '', label: 'Releasing soon on Shopify' },
  },
  {
    icon: Mail,
    title: 'Email us',
    sub: 'support@thegrowthagency.in',
    link: { href: 'mailto:support@thegrowthagency.in', label: 'support@thegrowthagency.in' },
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    sub: 'Chat with us on WhatsApp',
    link: {
      href: 'https://wa.me/919664200912?text=Hi%2C%20I%27m%20interested%20in%20CODFLIP%20for%20my%20Shopify%20store',
      label: '→ Chat on WhatsApp',
    },
  },
]

const orderVolumes = ['<500 orders/month', '500–2,000 orders/month', '2,000–5,000 orders/month', '5,000+ orders/month']

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+]?[\d\s\-().]{7,15}$/

export default function ContactSection() {
  const { ref, isInView } = useScrollReveal()
  const [form, setForm] = useState({ storeName: '', name: '', email: '', countryCode: '+91', phone: '', volume: '', message: '' })
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const validateEmail = (val: string) => {
    if (!val) return 'Email is required'
    if (!EMAIL_RE.test(val)) return 'Enter a valid email address'
    return ''
  }

  const validatePhone = (val: string) => {
    if (!val) return ''
    if (!PHONE_RE.test(val)) return 'Enter a valid phone number'
    return ''
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const emailErr = validateEmail(form.email)
    const phoneErr = validatePhone(form.phone)
    if (emailErr || phoneErr) {
      setErrors({ email: emailErr, phone: phoneErr })
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    color: 'var(--text)',
    padding: '12px 16px',
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '14px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '13px',
    fontWeight: 500,
    color: 'var(--text-2)',
    marginBottom: '6px',
    display: 'block',
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-8"
          >
            <div>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 500, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>
                GET IN TOUCH
              </p>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text)', lineHeight: 1.1 }}>
                Ready to stop<br />your RTO losses?
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {contactOptions.map((opt) => {
                const Icon = opt.icon
                return (
                  <div
                    key={opt.title}
                    className="rounded-xl px-5 py-4 flex items-start gap-4 transition-all duration-200"
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    <Icon size={20} color="#10B981" className="mt-0.5 shrink-0" />
                    <div>
                      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '2px' }}>{opt.title}</p>
                      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-2)', marginBottom: '4px' }}>{opt.sub}</p>
                      {opt.link.href === '' ? (
                        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#10B981', opacity: 0.55, cursor: 'not-allowed' }}>
                          {opt.link.label}
                        </span>
                      ) : (
                        <a
                          href={opt.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover-underline"
                          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#10B981' }}
                        >
                          {opt.link.label}
                        </a>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right column — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="rounded-2xl p-8" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '28px', color: '#10B981' }}>✓</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '22px', fontWeight: 700, color: 'var(--text)' }}>Message sent!</h3>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'var(--text-2)' }}>We&apos;ll reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="contact-store" style={labelStyle}>Store Name <span style={{ color: '#10B981' }}>*</span></label>
                    <input id="contact-store" type="text" required placeholder="Your Shopify store name" value={form.storeName}
                      onChange={(e) => setForm({ ...form, storeName: e.target.value })} style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#10B981'; e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-name" style={labelStyle}>Your Name <span style={{ color: '#10B981' }}>*</span></label>
                    <input id="contact-name" type="text" required placeholder="Rahul Sharma" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#10B981'; e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={labelStyle}>Email <span style={{ color: '#10B981' }}>*</span></label>
                    <input id="contact-email" type="email" required placeholder="you@email.com" value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors((prev) => ({ ...prev, email: '' })) }}
                      style={{ ...inputStyle, borderColor: errors.email ? '#f87171' : undefined }}
                      onFocus={(e) => { e.target.style.borderColor = errors.email ? '#f87171' : '#10B981'; e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)' }}
                      onBlur={(e) => { const err = validateEmail(form.email); setErrors((prev) => ({ ...prev, email: err })); e.target.style.borderColor = err ? '#f87171' : 'var(--border)'; e.target.style.boxShadow = 'none' }}
                    />
                    {errors.email && <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#f87171', marginTop: '4px' }}>{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-phone" style={labelStyle}>Phone Number</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <select
                        value={form.countryCode}
                        onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                        style={{ ...inputStyle, width: '100px', flexShrink: 0, cursor: 'pointer' }}
                        onFocus={(e) => { e.target.style.borderColor = '#10B981'; e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)' }}
                        onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+65">🇸🇬 +65</option>
                        <option value="+60">🇲🇾 +60</option>
                      </select>
                      <input id="contact-phone" type="tel" placeholder="98765 43210" value={form.phone}
                        onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors((prev) => ({ ...prev, phone: '' })) }}
                        style={{ ...inputStyle, flex: 1, borderColor: errors.phone ? '#f87171' : undefined }}
                        onFocus={(e) => { e.target.style.borderColor = errors.phone ? '#f87171' : '#10B981'; e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)' }}
                        onBlur={(e) => { const err = validatePhone(form.phone); setErrors((prev) => ({ ...prev, phone: err })); e.target.style.borderColor = err ? '#f87171' : 'var(--border)'; e.target.style.boxShadow = 'none' }}
                      />
                    </div>
                    {errors.phone && <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#f87171', marginTop: '4px' }}>{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-volume" style={labelStyle}>Monthly COD orders</label>
                    <select id="contact-volume" value={form.volume} onChange={(e) => setForm({ ...form, volume: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => { e.target.style.borderColor = '#10B981'; e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                    >
                      <option value="">Select volume</option>
                      {orderVolumes.map((v) => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" style={labelStyle}>Message</label>
                    <textarea id="contact-message" rows={4} placeholder="Tell us about your store and your RTO rate..." value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={(e) => { e.target.style.borderColor = '#10B981'; e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  {status === 'error' && (
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#f87171', textAlign: 'center' }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                    style={{ background: status === 'loading' ? '#059669' : '#10B981', color: '#0a0a0a', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 500, cursor: status === 'loading' ? 'wait' : 'pointer' }}
                    onMouseEnter={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#059669' }}
                    onMouseLeave={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#10B981' }}
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" stroke="#0a0a0a" strokeWidth="2" strokeDasharray="20" strokeDashoffset="10" />
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
