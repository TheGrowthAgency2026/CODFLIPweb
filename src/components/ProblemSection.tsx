'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function CountUp({ to, prefix = '', suffix = '' }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    const frame = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(eased * to))
      if (t < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [inView, to])

  return <span ref={ref}>{prefix}{val}{suffix}</span>
}

const stats = [
  { value: 37, suffix: '%', label: 'average RTO rate\nacross Indian D2C' },
  { value: 220, prefix: '₹', label: 'average loss\nper returned order' },
  { value: 68, suffix: '%', label: 'of COD customers\nnever receive a nudge' },
]

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section ref={sectionRef} style={{ background: '#F5F5F5', padding: '100px 48px', overflow: 'hidden' }} id="problem">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 64 }}
        >
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#10B981', display: 'block', marginBottom: 16 }}>
            THE PROBLEM
          </span>
          <h2 style={{
            fontFamily: 'var(--font-syne)', fontWeight: 800,
            fontSize: 'clamp(28px, 3.8vw, 52px)',
            lineHeight: 1.1, letterSpacing: '-1.5px', color: '#0A0A0A', maxWidth: 580,
          }}>
            COD returns are costing you{' '}
            <em style={{ fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic', fontWeight: 400, color: '#ef4444', textDecoration: 'underline', textDecorationColor: '#ef4444', textDecorationThickness: '2px', textUnderlineOffset: '6px', letterSpacing: '-0.5px' }}>
              more than you think.
            </em>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="cf-prob-grid">

          {/* LEFT: stats */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginBottom: 44 }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
                >
                  <div style={{
                    fontFamily: 'var(--font-syne)', fontWeight: 800,
                    fontSize: 'clamp(44px, 5vw, 64px)',
                    letterSpacing: '-2px', color: '#0A0A0A', lineHeight: 1,
                  }}>
                    <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 14, color: '#6B7280', lineHeight: 1.5, marginTop: 6, whiteSpace: 'pre-line' as const }}>
                    {s.label}
                  </div>
                  {i < stats.length - 1 && <div style={{ width: 40, height: 1, background: '#e5e7eb', marginTop: 24 }} />}
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.5 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: '#0A0A0A', color: '#fff',
                fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 14,
                padding: '13px 24px', borderRadius: 100, textDecoration: 'none',
                boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              }}
            >
              See your RTO cost →
            </motion.a>
          </div>

          {/* RIGHT: tilted dashboard screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: '1200px' }}
          >
            <div style={{
              transform: 'rotateY(-10deg) rotateX(3deg)',
              transformStyle: 'preserve-3d',
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.07)',
            }}>
              <img
                src="/codflip_dashboard.png"
                alt="CODFLIP RTO Cost Estimator dashboard"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
            {/* Label below */}
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 12, color: '#9ca3af' }}>
                RTO Cost Estimator — see the exact cost of every COD order
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .cf-prob-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
