'use client'

import { motion } from 'framer-motion'
import { Check, Info } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const freeFeatures = [
  'Automatic WhatsApp nudge after every COD order',
  'Flat % or ₹ discount for paying online',
  'Configurable nudge delay',
  '20 WhatsApp messages/cycle, then ₹1.50/message',
  'Conversion, conversion rate & delivery analytics',
  'RTO Cost Estimator',
]

const proFeatures = [
  '250 WhatsApp messages/cycle, then ₹1.20/message',
  'Expiry Reminder before the discount link lapses',
  'Variable discount formula (RTO risk + order value)',
  'Quiet Hours — pause overnight, resume each morning',
  'Per-product timing rules',
  'Partial COD (advance online, balance on delivery)',
  'COD Fee on cash-on-delivery orders',
  'Per-product COGS sync for accurate margins',
  'OTP verification before confirming a COD order',
  'Priority email support',
]

export default function PricingSection() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '16px' }}>
            PRICING
          </p>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(30px, 4vw, 50px)', color: 'var(--text)', lineHeight: 1.1, marginBottom: '16px' }}>
            Start free. Scale when you flip.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: 'var(--text-3)', maxWidth: '440px', margin: '0 auto', lineHeight: 1.7 }}>
            No setup fees. No lock-in. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="rounded-2xl p-8 flex flex-col"
            style={{ background: 'var(--bg-2)', border: '1px solid var(--border)' }}
          >
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px' }}>
              FREE
            </p>
            <div className="mb-1">
              <span style={{ fontFamily: 'var(--font-syne)', fontSize: '44px', fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>₹0</span>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'var(--text-3)' }}>/month</span>
            </div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-4)', marginBottom: '28px' }}>
              Free to install, no credit card required
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={15} color="#10B981" className="mt-0.5 shrink-0" />
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>
            <span
              className="w-full py-3 text-center rounded-xl block cursor-not-allowed"
              style={{ border: '1px solid rgba(16,185,129,0.3)', color: '#10B981', fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, background: 'rgba(16,185,129,0.06)' }}
            >
              Releasing soon on Shopify
            </span>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
            className="rounded-2xl p-8 flex flex-col relative overflow-hidden"
            style={{ background: 'var(--bg-pro)', border: '2px solid #10B981', boxShadow: '0 0 48px rgba(16,185,129,0.1)' }}
          >
            <div
              className="absolute top-0 right-0 px-3 py-1.5 flex items-center gap-1.5"
              style={{ background: '#10B981', color: '#0a0a0a', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, borderBottomLeftRadius: '10px', borderTopRightRadius: '14px' }}
            >
              <Info size={10} />
              7-day free trial
            </div>

            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px' }}>
              PRO
            </p>
            <div className="mb-1">
              <span style={{ fontFamily: 'var(--font-syne)', fontSize: '44px', fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>₹1,199</span>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'var(--text-3)' }}>/month</span>
            </div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', fontWeight: 600, color: 'var(--text-2)', marginBottom: '20px' }}>
              Billed as $13.00/month in USD
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 500, color: '#10B981', marginBottom: '4px' }}>
              No commission — flat monthly price
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'var(--text-4)', marginBottom: '28px' }}>
              250 messages included, then ₹1.20/message
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={15} color="#10B981" className="mt-0.5 shrink-0" />
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-green)', lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>
            <span
              className="w-full py-3 text-center rounded-xl block cursor-not-allowed"
              style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981', fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 600, border: '1px solid rgba(16,185,129,0.3)' }}
            >
              Releasing soon on Shopify
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 flex flex-col items-center gap-2"
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-4)' }}>
            Need a custom plan for high-volume stores?
          </p>
          <a
            href="#contact"
            className="hover-underline"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-3)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#10B981')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-3)')}
          >
            Talk to us about enterprise pricing →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
