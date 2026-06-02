'use client'

import { motion } from 'framer-motion'
import { ArrowLeftRight, TrendingDown, MessageCircle, ShieldCheck } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const features = [
  {
    icon: ArrowLeftRight,
    tag: 'CORE',
    title: 'COD to Prepaid',
    body: 'Every COD order is scored for risk and propensity. Only high-risk orders get a targeted WhatsApp offer with the exact right incentive — not a flat discount to everyone.',
    stat: '20%+ conversion rate vs 8–12% industry average',
  },
  {
    icon: TrendingDown,
    tag: 'ANALYTICS',
    title: 'RTO Cost Estimator',
    body: 'Track the true ₹ cost of every RTO — forward shipping, reverse logistics, restocking. See exactly how much CODFLIP saved you this month, this week, today.',
    stat: '₹160–240 saved per prevented RTO',
  },
  {
    icon: MessageCircle,
    tag: 'AUTOMATION',
    title: 'WhatsApp Flow',
    body: '3-touch multi-message sequence. Night delay (no messages 11PM–7AM). Urgency escalation. Auto-expiry on payment links. Everything runs without you touching it.',
    stat: '3-touch sequence · 85%+ open rate',
  },
  {
    icon: ShieldCheck,
    tag: 'SECURITY',
    title: 'OTP Login',
    body: 'Customers log into your store with a WhatsApp OTP — no password needed. Eliminates fake accounts and unverified phone numbers from placing COD orders.',
    stat: 'Eliminates fake COD orders at source',
  },
]

export default function FeaturesSection() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="features" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14"
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 500, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>
            FEATURES
          </p>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 48px)', color: '#fff', maxWidth: '600px', lineHeight: 1.1 }}>
            Everything you need to stop RTO before it ships.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.12 }}
                className="rounded-2xl p-7 flex flex-col gap-4 cursor-default group"
                style={{ background: '#111111', border: '1px solid #1F2937', transition: 'all 0.25s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1F2937'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="flex items-center justify-center rounded-xl"
                    style={{ width: '48px', height: '48px', background: 'rgba(16,185,129,0.1)' }}
                  >
                    <Icon size={24} color="#10B981" />
                  </div>
                  <span
                    className="px-2 py-1 rounded-full"
                    style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', fontSize: '10px', fontFamily: 'var(--font-dm-sans)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}
                  >
                    {f.tag}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                    {f.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#9CA3AF', lineHeight: 1.65 }}>
                    {f.body}
                  </p>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid #1F2937' }}>
                  <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '12px', color: '#10B981' }}>
                    {f.stat}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
