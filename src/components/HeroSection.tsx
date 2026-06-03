'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useCountUp } from '@/hooks/useCountUp'

const metrics = [
  { value: 35, suffix: '%', label: 'RTO DROP' },
  { value: 31, suffix: '×', label: 'AVG ROI', display: '3.1×' },
  { value: 160, prefix: '₹', label: 'SAVED/RTO' },
  { value: 20, suffix: '%+', label: 'FLIP RATE' },
]

function MetricItem({ value, suffix = '', prefix = '', label, display }: {
  value: number
  suffix?: string
  prefix?: string
  label: string
  display?: string
}) {
  const { count, ref } = useCountUp(value, 2000)
  return (
    <div ref={ref} className="flex flex-col gap-1 px-4 first:pl-0">
      <span className="metric-number" style={{ fontSize: '32px' }}>
        {display ?? `${prefix}${count}${suffix}`}
      </span>
      <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#4B5563', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        {label}
      </span>
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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0a0a0a', paddingTop: '136px' }}
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
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
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
                Trusted by 200+ Indian D2C brands
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
                  style={{ display: 'inline-block', marginRight: '0.25em', color: word === '₹6L/year' ? '#10B981' : '#fff' }}
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
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: '#9CA3AF', lineHeight: 1.7, maxWidth: '480px' }}
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
              <a
                href="https://apps.shopify.com/codflip"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200"
                style={{ background: '#10B981', color: '#0a0a0a', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 500 }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#059669')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#10B981')}
              >
                Install on Shopify, Free
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200"
                style={{ background: 'transparent', border: '1px solid #1F2937', color: '#fff', fontFamily: 'var(--font-dm-sans)', fontSize: '15px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#10B981'; e.currentTarget.style.color = '#10B981' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1F2937'; e.currentTarget.style.color = '#fff' }}
              >
                See how it works
              </a>
            </motion.div>

            {/* Metrics Ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-x-8 gap-y-4 pt-8"
            >
              {metrics.map((m) => (
                <div key={m.label}>
                  <MetricItem {...m} />
                </div>
              ))}
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
              style={{ background: '#111111', border: '1px solid #1F2937', boxShadow: '0 0 60px rgba(16,185,129,0.08)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 500, color: '#fff' }}>
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
                  <div key={s.label} className="rounded-xl p-3" style={{ background: '#141414' }}>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '15px', fontWeight: 700, color: '#10B981' }}>{s.num}</div>
                    <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#4B5563', marginTop: '2px' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="mb-5">
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#4B5563', marginBottom: '8px' }}>Last 7 days</div>
                <div className="flex items-end gap-1.5" style={{ height: '48px' }}>
                  {[30, 45, 38, 55, 42, 70, 85].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{ height: `${h}%`, background: i >= 4 ? '#10B981' : '#1F2937' }}
                    />
                  ))}
                </div>
              </div>

              {/* Recent flips */}
              <div>
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#4B5563', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
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
                      style={{ background: '#141414', borderLeft: '2px solid #10B981' }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#9CA3AF' }}>Order {flip.order}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: '#10B981' }}>{flip.amount}</span>
                        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#4B5563' }}>{flip.time}</span>
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
