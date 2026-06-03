'use client'

import { motion } from 'framer-motion'
import { Check, Info } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const freeFeatures = [
  'WhatsApp COD → Prepaid nudge',
  'Flat % or ₹ discount',
  'Basic send delay',
  'Up to 50 COD orders per billing period',
  'Conversion tracking',
  'RTO Cost Estimator',
]

const proFeatures = [
  'Unlimited COD orders',
  '3-message sequence (main + reminder + urgent)',
  'Smart incentive formula',
  'Custom quiet hours',
  'Offer expiry countdown',
  'Per-product timing rules',
  'Checkout OTP gate',
  'WhatsApp delivery tracking',
  'Priority email support',
]

export default function PricingSection() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#0a0a0a' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
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
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(30px, 4vw, 50px)', color: '#fff', lineHeight: 1.1, marginBottom: '16px' }}>
            Start free. Scale when you flip.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: '#6B7280', maxWidth: '440px', margin: '0 auto', lineHeight: 1.7 }}>
            No setup fees. No lock-in. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="rounded-2xl p-8 flex flex-col"
            style={{ background: '#111111', border: '1px solid #1F2937' }}
          >
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '20px' }}>
              FREE
            </p>
            <div className="mb-1">
              <span style={{ fontFamily: 'var(--font-syne)', fontSize: '44px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>₹0</span>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#6B7280' }}>/month</span>
            </div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#4B5563', marginBottom: '28px' }}>
              Up to 50 COD orders/billing period
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={15} color="#10B981" className="mt-0.5 shrink-0" />
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#9CA3AF', lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://apps.shopify.com/codflip"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center rounded-xl transition-all duration-200 block"
              style={{ border: '1px solid #1F2937', color: '#9CA3AF', fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500 }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#10B981'; e.currentTarget.style.color = '#10B981' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1F2937'; e.currentTarget.style.color = '#9CA3AF' }}
            >
              Get started — free
            </a>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
            className="rounded-2xl p-8 flex flex-col relative overflow-hidden"
            style={{ background: '#0f1a14', border: '2px solid #10B981', boxShadow: '0 0 48px rgba(16,185,129,0.1)' }}
          >
            {/* Trial badge */}
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
              <span style={{ fontFamily: 'var(--font-syne)', fontSize: '44px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>₹999</span>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#6B7280' }}>/month</span>
            </div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 500, color: '#10B981', marginBottom: '4px' }}>
              + 3% commission on every successful flip
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#4B5563', marginBottom: '28px' }}>
              Charged on total order value of converted orders
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={15} color="#10B981" className="mt-0.5 shrink-0" />
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#D1FAE5', lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://apps.shopify.com/codflip"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center rounded-xl transition-all duration-200 block"
              style={{ background: '#10B981', color: '#0a0a0a', fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 600 }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#059669')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#10B981')}
            >
              Start 7-day free trial
            </a>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 flex flex-col items-center gap-2"
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#4B5563' }}>
            Need a custom plan for high-volume stores?
          </p>
          <a
            href="#contact"
            className="hover-underline"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#6B7280' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#10B981')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
          >
            Talk to us about enterprise pricing →
          </a>
        </motion.div>
      </div>
    </section>
  )
}