'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const starterFeatures = [
  'Up to 500 COD orders/month',
  'COD to Prepaid flow',
  'RTO Cost Estimator',
  'WhatsApp multi-touch sequence',
  'Storefront OTP login',
  'Email support',
]

const growthFeatures = [
  'Unlimited COD orders',
  'Everything in Starter',
  'ML-based risk scoring',
  'Custom WhatsApp templates',
  'Advanced analytics dashboard',
  'Priority Slack support',
  'Dedicated onboarding call',
]

export default function PricingSection() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 500, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>
            PRICING
          </p>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', color: '#fff', lineHeight: 1.1, marginBottom: '16px' }}>
            Pay only when we flip.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: '#9CA3AF', maxWidth: '480px', margin: '0 auto' }}>
            No setup fees. No lock-in. Cancel anytime.<br />
            Flat monthly + 3% of what we actually convert.
          </p>
        </motion.div>

        {/* ROI Example Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="rounded-2xl p-6 mb-10 flex flex-wrap items-center justify-center gap-6 md:gap-0"
          style={{ background: '#111111', border: '1px solid rgba(16,185,129,0.3)' }}
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#9CA3AF', width: '100%', textAlign: 'center', marginBottom: '8px' }}>
            Example: ₹10L/month store with 28% RTO
          </p>
          {[
            { label: 'You pay', val: '₹2,899/month' },
            { label: 'You save', val: '₹11,951/month' },
            { label: 'ROI', val: '4.1×' },
          ].map((item, i, arr) => (
            <div key={item.label} className="flex items-center">
              <div className="text-center px-8">
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '20px', fontWeight: 700, color: '#fff' }}>{item.val}</div>
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#9CA3AF', marginTop: '4px' }}>{item.label}</div>
              </div>
              {i < arr.length - 1 && <div style={{ width: '1px', height: '40px', background: '#1F2937' }} />}
            </div>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="rounded-2xl p-8 flex flex-col"
            style={{ background: '#111111', border: '1px solid #1F2937' }}
          >
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 500, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
              STARTER
            </p>
            <div className="mb-2">
              <span style={{ fontFamily: 'var(--font-syne)', fontSize: '48px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>₹1,999</span>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#9CA3AF' }}>/month</span>
            </div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: '#10B981', marginBottom: '20px' }}>
              + 3% of flipped GMV
            </p>
            <div style={{ height: '1px', background: '#1F2937', marginBottom: '20px' }} />
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {starterFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={16} color="#10B981" className="mt-0.5 shrink-0" />
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#9CA3AF' }}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://apps.shopify.com/codflip"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center rounded-lg transition-all duration-200 block"
              style={{ border: '1px solid #1F2937', color: '#fff', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 500 }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#10B981'; e.currentTarget.style.color = '#10B981' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1F2937'; e.currentTarget.style.color = '#fff' }}
            >
              Get started
            </a>
          </motion.div>

          {/* Growth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="rounded-2xl p-8 flex flex-col relative overflow-hidden"
            style={{ background: '#111111', border: '2px solid #10B981', boxShadow: '0 0 40px rgba(16,185,129,0.12)' }}
          >
            {/* Most Popular badge */}
            <div
              className="absolute top-0 right-0 px-3 py-1"
              style={{ background: '#10B981', color: '#0a0a0a', fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 500, borderBottomLeftRadius: '8px', borderTopRightRadius: '12px' }}
            >
              Most Popular
            </div>

            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 500, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
              GROWTH
            </p>
            <div className="mb-2">
              <span style={{ fontFamily: 'var(--font-syne)', fontSize: '48px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>₹4,999</span>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#9CA3AF' }}>/month</span>
            </div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: '#10B981', marginBottom: '20px' }}>
              + 2% of flipped GMV
            </p>
            <div style={{ height: '1px', background: '#1F2937', marginBottom: '20px' }} />
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {growthFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={16} color="#10B981" className="mt-0.5 shrink-0" />
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#9CA3AF' }}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://apps.shopify.com/codflip"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center rounded-lg transition-all duration-200 block"
              style={{ background: '#10B981', color: '#0a0a0a', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#059669')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#10B981')}
            >
              Start free trial
            </a>
          </motion.div>
        </div>

        {/* Enterprise */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <a
            href="#contact"
            className="hover-underline"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#9CA3AF' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#10B981')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
          >
            Enterprise / Agency plan? Contact us for custom pricing →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
