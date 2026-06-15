'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function WhatsAppNotifVisual() {
  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        position: 'absolute', width: 280, height: 280, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        width: 220, height: 450, background: '#111', borderRadius: 36, padding: 3,
        boxShadow: '0 24px 60px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.06)',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 34, overflow: 'hidden', background: '#1a1a1a', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: 28, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 72, height: 16, background: '#000', borderRadius: 10 }} />
          </div>

          <div style={{ flex: 1, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', padding: '20px 12px', position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 300, fontSize: 42, color: '#fff', lineHeight: 1 }}>11:22</div>
              <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>Saturday, 14 June</div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: 16, padding: '12px 14px',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <div style={{ width: 26, height: 26, background: '#25D366', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.989.572 3.845 1.559 5.408L2 22l4.741-1.523A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'sans-serif', fontSize: 11, fontWeight: 700, color: '#fff' }}>WhatsApp</div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: 9.5, color: 'rgba(255,255,255,0.5)' }}>Marigold Fashion · now</div>
                </div>
              </div>
              <div style={{ fontFamily: 'sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.85)', lineHeight: 1.4 }}>
                Switch your COD order to prepaid &amp; save <strong style={{ color: '#4ade80' }}>₹62</strong>. Offer expires in <strong style={{ color: '#fbbf24' }}>24 hrs</strong>.
              </div>
              <div style={{ marginTop: 10, background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 8, padding: '6px 10px', textAlign: 'center', fontFamily: 'sans-serif', fontSize: 11, color: '#4ade80', fontWeight: 700 }}>
                Pay ₹1,178 now →
              </div>
            </motion.div>

            <div style={{ marginTop: 8, background: 'rgba(255,255,255,0.07)', borderRadius: 14, padding: '10px 12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <div style={{ width: 22, height: 22, background: '#f59e0b', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27,6.96 12,12.01 20.73,6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                </div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 10.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.3 }}>
                  Shiprocket · Your order is out for delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const steps = [
  {
    n: '01', label: 'GETS SEEN FIRST',
    title: 'Your message is at the top of their phone.',
    body: 'WhatsApp open rates are 98%. No email clutter, no SMS spam folder. Your COD flip offer lands where the customer actually reads.',
  },
  {
    n: '02', label: 'TIME-SENSITIVE OFFER',
    title: 'A 24-hour expiry creates real urgency.',
    body: 'The exact discount is calculated per order — not a blanket 5% off. Customers act because the offer is personalised and time-limited.',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="how-it-works" style={{ background: '#fff', padding: '100px 48px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.span
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          style={{ display: 'inline-block', fontFamily: 'var(--font-dm-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#10B981', marginBottom: 20 }}
        >
          WHATSAPP NUDGE
        </motion.span>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="cf-hiw-grid">
          {/* LEFT: phone */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <WhatsAppNotifVisual />
          </motion.div>

          {/* RIGHT: text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-syne)', fontWeight: 800,
                fontSize: 'clamp(26px, 3.2vw, 44px)',
                lineHeight: 1.12, letterSpacing: '-1.5px', color: '#0A0A0A', marginBottom: 36,
              }}
            >
              Reach your customer on WhatsApp,{' '}
              <em style={{ fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic', fontWeight: 400, color: '#10B981', textDecoration: 'underline', textDecorationColor: '#10B981', textDecorationThickness: '2px', textUnderlineOffset: '6px', letterSpacing: '-0.5px' }}>
                exclusively.
              </em>
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: 'easeOut' }}
                  style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 12, color: '#10B981',
                    flexShrink: 0, marginTop: 2,
                  }}>
                    {s.n}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 10.5, fontWeight: 600, letterSpacing: '0.1em', color: '#9ca3af', textTransform: 'uppercase' as const, marginBottom: 6 }}>
                      {s.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 16, color: '#111', lineHeight: 1.2, marginBottom: 8 }}>
                      {s.title}
                    </div>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 14, lineHeight: 1.65, color: '#6B7280', margin: 0 }}>
                      {s.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.48 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 36,
                background: '#16a34a', color: '#fff',
                fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 14,
                padding: '13px 24px', borderRadius: 12, textDecoration: 'none',
                boxShadow: '0 2px 12px rgba(22,163,74,0.28)',
              }}
            >
              Get early access
            </motion.a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .cf-hiw-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
