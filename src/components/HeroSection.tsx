'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useCountUp } from '@/hooks/useCountUp'

const outcomes = [
  { value: 35, suffix: '%', context: 'average RTO reduction' },
  { value: 20, suffix: '%+', context: 'COD-to-prepaid conversion rate' },
]

function OutcomeItem({ value, suffix, context }: { value: number; suffix: string; context: string }) {
  const { count, ref } = useCountUp(value, 2000)
  return (
    <div ref={ref} className="flex items-baseline gap-2">
      <span className="metric-number" style={{ fontSize: '28px' }}>{count}{suffix}</span>
      <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.3 }}>{context}</span>
    </div>
  )
}

const recentFlips = [
  { order: '#4821', amount: '+₹1,240', time: '2 min ago' },
  { order: '#4819', amount: '+₹890', time: '8 min ago' },
  { order: '#4815', amount: '+₹2,100', time: '14 min ago' },
]

export default function HeroSection() {
  return (
    <section
      id="product"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg)', paddingTop: '136px' }}
    >
      {/* Glow orb */}
      <div
        className="glow-orb"
        style={{ top: '-200px', left: '50%', transform: 'translateX(-50%)', zIndex: 0 }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          {/* Left column */}
          <div className="flex-1 lg:w-[60%] flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <span className="badge-green">
                <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                200+ Shopify stores reducing RTO
              </span>
            </motion.div>

            {/* Headline */}
            <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.05, letterSpacing: '-2px' }}>
              {['Stop', 'losing', '₹6L/year', 'to', 'COD', 'returns.'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                  style={{ display: 'inline-block', marginRight: '0.25em', color: word === '₹6L/year' ? '#10B981' : 'var(--text)' }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '480px' }}
            >
              CODFLIP scores every COD order for RTO risk, sends a targeted WhatsApp offer, and converts it to prepaid automatically. You pay only when we flip.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              <span
                className="flex items-center gap-2 px-6 py-3 rounded-lg cursor-not-allowed"
                style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 500, border: '1px solid rgba(16,185,129,0.3)' }}
              >
                Releasing soon on Shopify
              </span>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200"
                style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)', fontFamily: 'var(--font-dm-sans)', fontSize: '15px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#10B981'; e.currentTarget.style.color = '#10B981' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
              >
                See how it works
              </a>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-3 pt-6 pl-1"
              style={{ borderLeft: '1px solid var(--border)' }}
            >
              {outcomes.map((o) => (
                <OutcomeItem key={o.context} {...o} />
              ))}
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'var(--text-4)', marginTop: '2px' }}>
                Median across stores in the first 30 days · Pay 3% on successful flips only
              </span>
            </motion.div>
          </div>

          {/* Right column — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="float-animation w-full lg:w-[40%] max-w-sm mx-auto lg:max-w-none"
          >
            <div
              className="rounded-2xl p-6"
              style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', boxShadow: '0 0 60px rgba(16,185,129,0.08)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>
                  CODFLIP Dashboard
                </span>
                <span className="flex items-center gap-1.5 px-2 py-1 rounded-full" style={{ background: 'rgba(16,185,129,0.1)', fontSize: '11px', color: '#10B981', fontFamily: 'var(--font-dm-sans)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} className="pulse-dot" />
                  Live
                </span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { num: '₹18,240', label: 'Saved today' },
                  { num: '23%', label: 'Flip Rate' },
                  { num: '14', label: 'Converted' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3" style={{ background: 'var(--bg-3)' }}>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '15px', fontWeight: 700, color: '#10B981' }}>{s.num}</div>
                    <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: 'var(--text-4)', marginTop: '2px' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="mb-5">
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: 'var(--text-4)', marginBottom: '8px' }}>Last 7 days</div>
                <div className="flex items-end gap-1.5" style={{ height: '48px' }}>
                  {[30, 45, 38, 55, 42, 70, 85].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{ height: `${h}%`, background: i >= 4 ? '#10B981' : 'var(--border)' }}
                    />
                  ))}
                </div>
              </div>

              {/* Recent flips */}
              <div>
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: 'var(--text-4)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Recent flips
                </div>
                <div className="flex flex-col gap-2">
                  {recentFlips.map((flip, i) => (
                    <motion.div
                      key={flip.order}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.15, duration: 0.4 }}
                      className="flex items-center justify-between rounded-lg px-3 py-2"
                      style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'var(--text-2)' }}>Order {flip.order}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: '#10B981' }}>{flip.amount}</span>
                        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: 'var(--text-4)' }}>{flip.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
