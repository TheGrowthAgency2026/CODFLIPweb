'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/* Key metrics card */
function MetricsCard() {
  const metrics = [
    { value: '98%', label: 'WhatsApp open rate', sub: 'vs 22% email' },
    { value: '₹220', label: 'saved per flip', sub: 'avg. RTO cost avoided' },
    { value: '3%', label: 'only on success', sub: 'zero flat fee ever' },
  ]

  return (
    <div style={{
      background: '#fff', borderRadius: 20, padding: '28px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
    }}>
      <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 11, color: '#9ca3af', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: 28 }}>
        BY THE NUMBERS
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0 }}>
        {metrics.map((m, i) => (
          <div key={m.label}>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '18px 0' }}
            >
              <div style={{
                fontFamily: 'var(--font-syne)', fontWeight: 800,
                fontSize: 36, letterSpacing: '-1.5px', color: '#10B981', lineHeight: 1,
                minWidth: 90, flexShrink: 0,
              }}>{m.value}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 14, color: '#111', marginBottom: 2 }}>{m.label}</div>
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 12, color: '#9ca3af' }}>{m.sub}</div>
              </div>
            </motion.div>
            {i < metrics.length - 1 && <div style={{ height: 1, background: '#f3f4f6' }} />}
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 24, background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)',
        borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 13, color: '#6B7280', lineHeight: 1.5 }}>
          Runs automatically on every order — <strong style={{ color: '#111' }}>zero work from your team.</strong>
        </div>
      </div>
    </div>
  )
}

export default function OutcomesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <>
      {/* ── RETAIN section ── */}
      <section ref={ref} style={{ background: '#F5F5F5', padding: '100px 48px', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            style={{ display: 'inline-block', fontFamily: 'var(--font-dm-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#10B981', marginBottom: 20 }}
          >
            RESULTS
          </motion.span>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="cf-retain-grid">
            {/* LEFT: text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-syne)', fontWeight: 800,
                  fontSize: 'clamp(28px, 3.8vw, 52px)',
                  lineHeight: 1.08, letterSpacing: '-2px', color: '#0A0A0A', marginBottom: 20,
                }}
              >
                Recover.{' '}
                <span style={{ color: '#10B981' }}>Retain.</span>{' '}
                Repeat.
              </h2>

              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 16, lineHeight: 1.65, color: '#6B7280', marginBottom: 32, maxWidth: 440 }}>
                Every COD order flipped saves ₹220 — that&apos;s the avg. RTO cost in India. CODFLIP isn&apos;t a one-time fix: it runs automatically on every order, in the background, with no action needed from you.
              </p>

              {/* Unit economics callout */}
              <div style={{
                display: 'inline-block',
                background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.18)',
                borderRadius: 16, padding: '20px 24px', marginBottom: 36,
              }}>
                <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 42, letterSpacing: '-2px', color: '#10B981', lineHeight: 1 }}>₹220</div>
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 14, color: '#6B7280', marginTop: 6 }}>
                  average RTO cost saved<br />per converted order
                </div>
              </div>

              <a
                href="#contact"
                style={{
                  display: 'block', width: 'fit-content',
                  background: '#10B981', color: '#fff',
                  fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 15,
                  padding: '14px 28px', borderRadius: 100, textDecoration: 'none',
                  boxShadow: '0 4px 24px rgba(16,185,129,0.3)',
                }}
              >
                Book a demo →
              </a>
            </motion.div>

            {/* RIGHT: analytics visual */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <MetricsCard />
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (max-width: 800px) {
            .cf-retain-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #064e35 0%, #0D0D0D 60%)', padding: '100px 48px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)',
              borderRadius: 100, padding: '7px 16px', marginBottom: 32,
            }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981' }} />
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 12, fontWeight: 600, color: '#10B981' }}>EARLY ACCESS OPEN</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-syne)', fontWeight: 800,
                fontSize: 'clamp(32px, 4.5vw, 60px)',
                lineHeight: 1.06, letterSpacing: '-2.5px', color: '#FFFFFF', marginBottom: 20,
              }}
            >
              Your store&apos;s RTO recovery starts today.
            </h2>

            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', marginBottom: 40 }}>
              No subscription. No setup fee. CODFLIP earns 3% only when we convert a COD order to prepaid. You only pay when we save you money.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' as const }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: '#10B981', color: '#fff',
                  fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 16,
                  padding: '16px 32px', borderRadius: 100, textDecoration: 'none',
                  boxShadow: '0 6px 32px rgba(16,185,129,0.4)',
                }}
              >
                Get early access →
              </a>
              <a
                href="#how-it-works"
                style={{
                  fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: 15,
                  color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                }}
              >
                See how it works
              </a>
            </div>

            <div style={{ marginTop: 32, fontFamily: 'var(--font-dm-sans)', fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>
              No flat fee · No lock-in · Pay only when we flip
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
