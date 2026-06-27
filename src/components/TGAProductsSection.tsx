'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const highlights = [
  'Reduces RTO by up to 35%',
  'WhatsApp Business API, TRAI compliant',
  'Free plan available, no credit card needed',
  'Works on all Shopify plans',
  'Flat monthly pricing, no commission on orders',
]

const metrics = [
  { num: '35%', label: 'RTO reduction' },
  { num: '3.1×', label: 'Average ROI' },
  { num: '₹1,199', label: 'Pro plan / month (≈ $13)' },
  { num: '2 min', label: 'Setup time' },
]

export default function TGAProductsSection() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="products" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14"
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 500, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>
            OUR PRODUCT
          </p>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--text)', lineHeight: 1.1, letterSpacing: '-1.5px' }}>
            Built from the problems<br />we kept seeing.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.8 }}>
              Every client we onboarded had the same problem: 25–35% of their COD orders were returning.
              That&apos;s ₹50,000 walking out the door every month. Nothing on the market fixed it cleanly.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.8 }}>
              So we built CODFLIP. It scores every COD order for RTO risk, sends a targeted WhatsApp nudge,
              and converts it to prepaid automatically. Flat monthly pricing — no commission on your orders.
            </p>

            <div className="flex flex-col gap-3">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <Check size={15} color="#10B981" className="shrink-0" />
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'var(--text-2)' }}>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="/codflip"
                className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200"
                style={{ background: '#10B981', color: '#0a0a0a', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 500 }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#059669')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#10B981')}
              >
                See CODFLIP
                <ArrowRight size={15} />
              </a>
              <span
                className="flex items-center gap-2 px-6 py-3 rounded-lg cursor-not-allowed"
                style={{ background: 'transparent', border: '1px solid rgba(16,185,129,0.3)', color: '#10B981', fontFamily: 'var(--font-dm-sans)', fontSize: '15px' }}
              >
                Releasing soon on Shopify
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="float-animation"
          >
            <div
              className="rounded-2xl p-6"
              style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', boxShadow: '0 0 60px rgba(16,185,129,0.08)' }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect width="20" height="20" rx="5" fill="rgba(16,185,129,0.15)" />
                    <path d="M5 10h6M8 7l3 3-3 3" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <text x="11" y="15" fontSize="8" fill="#10B981" fontWeight="bold">₹</text>
                  </svg>
                  <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '18px' }}>
                    <span style={{ color: 'var(--text)' }}>COD</span>
                    <span style={{ color: '#10B981' }}>FLIP</span>
                  </span>
                </div>
                <span
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(16,185,129,0.1)', fontSize: '11px', color: '#10B981', fontFamily: 'var(--font-dm-sans)' }}
                >
                  <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                  Live on Shopify
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {metrics.map((m) => (
                  <div key={m.label} className="rounded-xl p-4" style={{ background: 'var(--bg-3)' }}>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '20px', fontWeight: 700, color: '#10B981' }}>{m.num}</div>
                    <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'var(--text-4)', marginTop: '3px' }}>{m.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="/codflip"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl transition-all duration-200"
                style={{
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.2)',
                  color: '#10B981',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(16,185,129,0.14)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(16,185,129,0.08)')}
              >
                See CODFLIP →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
