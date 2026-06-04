'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

gsap.registerPlugin(ScrollTrigger)

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
    title: 'You pay on conversion',
    body: '3% of flipped GMV. Zero flat fee risk. We win only when you win.',
  },
]

export default function HowItWorks() {
  const { ref: sectionRef, isInView } = useScrollReveal()
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: i * 0.15,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
      ScrollTrigger.refresh()
    })
    return () => ctx.revert()
  }, [])

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

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={(el) => { stepRefs.current[i] = el }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
