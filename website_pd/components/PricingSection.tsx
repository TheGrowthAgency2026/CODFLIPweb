'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    priceSub: 'forever',
    desc: 'For stores beginning to tackle COD risk.',
    cta: 'Install free',
    href: '#',
    highlight: false,
    features: [
      'Up to 500 orders / month',
      'Basic risk scoring',
      'WhatsApp nudges',
      '7-day analytics',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '₹2,999',
    priceSub: '/ month',
    desc: 'For scaling brands that need automation and advanced AI scoring.',
    cta: 'Start free trial',
    href: '#',
    highlight: true,
    badge: 'Most popular',
    features: [
      'Unlimited orders',
      'Advanced AI risk model',
      'Custom discount rules',
      '90-day analytics',
      'COD blocking by segment',
      'Priority support',
    ],
  },
  {
    name: 'Scale',
    price: '₹7,999',
    priceSub: '/ month',
    desc: 'For high-volume operations that need dedicated support and SLAs.',
    cta: 'Talk to us',
    href: '#',
    highlight: false,
    features: [
      'Everything in Growth',
      'Dedicated CSM',
      'Custom integrations',
      'SLA guarantee',
      'Advanced reporting',
      'White-glove onboarding',
    ],
  },
]

export default function PricingSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} id="pricing" className="mx-auto max-w-[1440px] px-6 md:px-16 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE }}
        className="text-center max-w-xl mx-auto mb-14"
      >
        <h2
          className="text-[32px] md:text-[44px] font-extrabold text-[#0F172A] leading-[1.18] mb-3"
          style={{ letterSpacing: '-0.03em' }}
        >
          Simple pricing for serious growth.
        </h2>
        <p className="text-[18px] text-[#64748B] leading-[1.65]">
          No setup fees, no hidden costs. Pay only when you're growing.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: EASE }}
            className="relative flex flex-col border p-7"
            style={{
              borderRadius: 12,
              background: tier.highlight ? '#047857' : '#FFFFFF',
              borderColor: tier.highlight ? '#005d42' : '#E6EAE8',
              boxShadow: tier.highlight
                ? '0 8px 40px rgba(4,120,87,0.28)'
                : '0 2px 12px rgba(0,0,0,0.03)',
            }}
          >
            {tier.badge && (
              <span
                className="absolute -top-3.5 left-6 text-white text-[11px] font-bold px-3 py-1 uppercase tracking-[0.05em]"
                style={{ background: '#0F172A', borderRadius: 999 }}
              >
                {tier.badge}
              </span>
            )}

            {/* Tier name */}
            <p
              className="text-[12px] font-bold uppercase tracking-[0.07em] mb-4"
              style={{ color: tier.highlight ? '#9ffdd3' : '#047857' }}
            >
              {tier.name}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-1.5 mb-2">
              <span
                className="text-[40px] font-extrabold leading-none"
                style={{
                  color: tier.highlight ? '#FFFFFF' : '#0F172A',
                  letterSpacing: '-0.03em',
                }}
              >
                {tier.price}
              </span>
              <span
                className="text-[15px]"
                style={{ color: tier.highlight ? '#9ffdd3' : '#64748B' }}
              >
                {tier.priceSub}
              </span>
            </div>

            <p
              className="text-[14px] leading-[1.6] mb-7"
              style={{ color: tier.highlight ? '#9ffdd3' : '#64748B' }}
            >
              {tier.desc}
            </p>

            {/* Features */}
            <ul className="flex flex-col gap-3 flex-1 mb-8">
              {tier.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <Check
                    size={14}
                    className="shrink-0 mt-0.5"
                    strokeWidth={2.5}
                    style={{ color: tier.highlight ? '#9ffdd3' : '#047857' }}
                  />
                  <span
                    className="text-[14px] leading-snug"
                    style={{ color: tier.highlight ? '#FFFFFF' : '#3e4943' }}
                  >
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={tier.href}
              className="block text-center text-[14px] font-semibold py-3 no-underline transition-colors tracking-[0.01em]"
              style={{
                borderRadius: 4,
                background: tier.highlight ? '#FFFFFF' : '#047857',
                color: tier.highlight ? '#047857' : '#FFFFFF',
              }}
            >
              {tier.cta}
            </a>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
        className="text-center text-[14px] text-[#64748B] mt-8"
      >
        All plans include a 14-day free trial · Cancel anytime · No credit card required
      </motion.p>
    </section>
  )
}
