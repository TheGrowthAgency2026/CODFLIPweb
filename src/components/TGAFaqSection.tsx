'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const faqs = [
  {
    q: 'What does The Growth Agency do?',
    a: 'We are a D2C growth studio for Indian Shopify brands. We build Shopify apps and stores, run WhatsApp retention flows, and improve on-site conversion, all with a focus on protecting margin rather than just chasing ad spend. CODFLIP is our flagship product, built in-house and live on the Shopify App Store.',
  },
  {
    q: 'What is CODFLIP?',
    a: 'CODFLIP is a Shopify app that reduces return-to-origin (RTO) losses by converting cash-on-delivery orders into prepaid orders. It scores every COD order for risk, sends a targeted WhatsApp nudge with a personalised incentive and a one-click UPI payment link, and converts the order to prepaid when the customer pays upfront.',
  },
  {
    q: 'How does CODFLIP reduce RTO?',
    a: 'High-risk COD orders are the ones most likely to be returned. CODFLIP identifies those orders and gives the customer a clear reason to pay upfront. Prepaid orders almost never come back, so every order you convert removes the forward shipping, reverse logistics, and restocking cost of a likely return.',
  },
  {
    q: 'Do I need to pay anything to start?',
    a: 'No. CODFLIP has a free plan that includes the core COD-to-prepaid WhatsApp nudge, discount offers, conversion tracking, and the RTO Cost Estimator for up to 50 COD orders per billing period. No credit card is required to install.',
  },
  {
    q: 'How is pricing structured?',
    a: 'The free plan is always free. The Pro plan is ₹999 (approx. $11.99) per month plus a 3% fee on each order that is successfully converted to prepaid. You only pay the variable fee on conversions that actually happen, so the pricing stays aligned with the value you receive.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most merchants can install and configure CODFLIP from the Shopify App Store in about two minutes. There is no developer work required, and your existing checkout and order flow stay exactly as they are.',
  },
  {
    q: 'Is the WhatsApp messaging compliant?',
    a: 'Yes. All messaging runs on the official WhatsApp Business API and is TRAI compliant and DLT registered. We help with template creation and the DLT registration process, while you remain the registered principal entity and retain full ownership of your WhatsApp Business number.',
  },
  {
    q: 'Is my customer data safe?',
    a: 'Your data and your customers data remain your property. We act as a processor on your behalf, store data on secure access-controlled systems, and never sell it or share it with third parties for marketing. Full details are in our Privacy Policy.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. You can cancel at any time by uninstalling the app from your Shopify store or by writing to support@thegrowthagency.in. On cancellation, pending sequences are deactivated and any active coupons issued by the app are removed.',
  },
]

export default function TGAFaqSection() {
  const { ref, isInView } = useScrollReveal()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14"
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 500, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--text)', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '16px' }}>
            Questions, answered.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: 'var(--text-3)', lineHeight: 1.7 }}>
            Everything you need to know about how we work and how CODFLIP fits into your store.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                  style={{ padding: '22px 0', cursor: 'pointer', background: 'transparent', border: 'none' }}
                >
                  <span style={{ fontFamily: 'var(--font-syne)', fontSize: '17px', fontWeight: 700, color: 'var(--text)', lineHeight: 1.35 }}>
                    {item.q}
                  </span>
                  <span
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{ width: '28px', height: '28px', background: 'rgba(16,185,129,0.1)', color: '#10B981' }}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.75, paddingBottom: '22px', maxWidth: '600px' }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
