'use client'

import { motion, type Variants } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Order placed',
    body: 'Customer places a COD order on your Shopify store. Webhook fires to CODFLIP within 60 seconds.',
  },
  {
    num: '02',
    title: 'Risk scored',
    body: 'Every order gets an RTO probability score (0–1.0) and a prepaid propensity score. Risky orders proceed.',
  },
  {
    num: '03',
    title: 'WhatsApp sent',
    body: 'The exact ₹ offer goes to the customer\'s WhatsApp with a one-tap UPI payment link.',
  },
  {
    num: '04',
    title: 'Flat monthly pricing',
    body: '₹0 to start, ₹1,199/month on Pro. No commission — you only pay for the WhatsApp messages you send.',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const stepVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HowItWorks() {
  const { ref: sectionRef, isInView } = useScrollReveal()

  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 500, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>
            HOW IT WORKS
          </p>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--text)', lineHeight: 1.1 }}>
            From order placed to<br />prepaid in 2 minutes.
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={stepVariants}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    fontFamily: 'var(--font-jetbrains)',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#10B981',
                  }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div style={{ flex: 1, minHeight: '48px' }} />
                )}
              </div>

              <div className="pb-10 flex-1">
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '20px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
