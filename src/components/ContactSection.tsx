'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Mail, MessageCircle } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const contactOptions = [
  {
    icon: ExternalLink,
    title: 'Install on Shopify',
    sub: 'Start free — no credit card needed',
    link: { href: 'https://apps.shopify.com/codflip', label: '→ Install CODFLIP on Shopify' },
  },
  {
    icon: Mail,
    title: 'Email us',
    sub: 'hello@thegrowthagency.in',
    link: { href: 'mailto:hello@thegrowthagency.in', label: 'hello@thegrowthagency.in' },
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    sub: 'Chat with us on WhatsApp',
    link: {
      href: 'https://wa.me/91?text=Hi%2C%20I%27m%20interested%20in%20CODFLIP%20for%20my%20Shopify%20store',
      label: '→ Chat on WhatsApp',
    },
  },
]

const orderVolumes = ['<500 orders/month', '500–2,000 orders/month', '2,000–5,000 orders/month', '5,000+ orders/month']

export default function ContactSection() {
  const { ref, isInView } = useScrollReveal()
  const [form, setForm] = useState({ storeName: '', name: '', email: '', volume: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  const inputStyle: React.CSSProperties = {
    background: '#111111',
    border: '1px solid #1F2937',
    borderRadius: '8px',
    color: '#fff',
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
    color: '#9CA3AF',
    marginBottom: '6px',
    display: 'block',
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#111111' }}>
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
              <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', color: '#fff', lineHeight: 1.1 }}>
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
                    style={{ background: '#0a0a0a', border: '1px solid #1F2937' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1F2937')}
                  >
                    <Icon size={20} color="#10B981" className="mt-0.5 shrink-0" />
                    <div>
                      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: '#fff', marginBottom: '2px' }}>{opt.title}</p>
                      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#9CA3AF', marginBottom: '4px' }}>{opt.sub}</p>
                      <a
                        href={opt.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-underline"
                        style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#10B981' }}
                      >
                        {opt.link.label}
                      </a>
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
            <div className="rounded-2xl p-8" style={{ background: '#0a0a0a', border: '1px solid #1F2937' }}>
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '28px', color: '#10B981' }}>✓</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '22px', fontWeight: 700, color: '#fff' }}>Message sent!</h3>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#9CA3AF' }}>We&apos;ll reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label style={labelStyle}>Store Name <span style={{ color: '#10B981' }}>*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="Your Shopify store name"
                      value={form.storeName}
                      onChange={(e) => setForm({ ...form, storeName: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#10B981'; e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)' }}
                      onBlur={(e) => { e.target.style.borderColor = '#1F2937'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Your Name <span style={{ color: '#10B981' }}>*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#10B981'; e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)' }}
                      onBlur={(e) => { e.target.style.borderColor = '#1F2937'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Email <span style={{ color: '#10B981' }}>*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="you@store.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#10B981'; e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)' }}
                      onBlur={(e) => { e.target.style.borderColor = '#1F2937'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Monthly COD orders</label>
                    <select
                      value={form.volume}
                      onChange={(e) => setForm({ ...form, volume: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => { e.target.style.borderColor = '#10B981'; e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)' }}
                      onBlur={(e) => { e.target.style.borderColor = '#1F2937'; e.target.style.boxShadow = 'none' }}
                    >
                      <option value="" style={{ background: '#111111' }}>Select volume</option>
                      {orderVolumes.map((v) => (
                        <option key={v} value={v} style={{ background: '#111111' }}>{v}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your store..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={(e) => { e.target.style.borderColor = '#10B981'; e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.1)' }}
                      onBlur={(e) => { e.target.style.borderColor = '#1F2937'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>

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
                    ) : (
                      'Send Message →'
                    )}
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
