'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: 'Smart Checkout',
    body: 'Show Partial COD, COD handling fee, or a full prepaid incentive right at checkout — reduce RTO before the order is even placed.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    title: 'OTP Verification',
    body: 'Every COD customer gets a WhatsApp OTP before their order ships. Unverified = unshipped. Block fake & prank orders at the source.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    title: 'WhatsApp Flip Nudge',
    body: 'Post-order personalised offer converts high-risk COD to prepaid via a one-tap UPI link. 98% open rate. 24-hour expiry.',
  },
]

export default function ValuePropSection() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section style={{ background: '#fff', padding: '100px 48px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 56 }}
        >
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#10B981', display: 'block', marginBottom: 16 }}>
            HOW IT WORKS
          </span>
          <h2 style={{
            fontFamily: 'var(--font-syne)', fontWeight: 800,
            fontSize: 'clamp(28px, 3.8vw, 52px)',
            lineHeight: 1.1, letterSpacing: '-2px', color: '#0A0A0A', maxWidth: 640,
          }}>
            Stop RTO at{' '}
            <em style={{ fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic', fontWeight: 400, textDecoration: 'underline', textDecorationColor: '#10B981', textDecorationThickness: '2px', textUnderlineOffset: '6px', letterSpacing: '-0.5px' }}>
              every stage
            </em>{' '}
            of the order journey.
          </h2>
        </motion.div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: '#e5e7eb', border: '1px solid #e5e7eb', borderRadius: 20, overflow: 'hidden' }}
          className="cf-vp-grid"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
              style={{ padding: '40px 36px', background: '#fff' }}
              className="cf-vp-col"
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
              }}>
                {p.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 18, color: '#0A0A0A', letterSpacing: '-0.5px', marginBottom: 10 }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 14, lineHeight: 1.65, color: '#6B7280' }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .cf-vp-grid { grid-template-columns: 1fr !important; }
          .cf-vp-col { border-right: none !important; border-bottom: 1px solid #e5e7eb; }
        }
      `}</style>
    </section>
  )
}
