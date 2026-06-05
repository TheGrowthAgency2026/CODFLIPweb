'use client'

import { motion } from 'framer-motion'
import { Code2, MessageCircle, TrendingUp, Target } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const services = [
  {
    icon: Code2,
    title: 'Shopify Development',
    description: 'Custom Shopify apps, theme development, and third-party integrations built for conversion. CODFLIP is our flagship product, built in-house and live on the Shopify App Store.',
    tag: 'Apps · Themes · Integrations',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Retention',
    description: 'AI-powered WhatsApp flows that recover abandoned carts, convert COD to prepaid, and re-engage customers at exactly the right moment. TRAI and DLT compliant.',
    tag: 'Automated · TRAI Compliant',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Optimisation',
    description: 'Deep funnel audits and systematic A/B testing across product pages, cart, and checkout. We find and fix what is silently killing your CVR.',
    tag: 'CRO · A/B Testing · Funnel Audits',
  },
  {
    icon: Target,
    title: 'Performance Marketing',
    description: 'Meta and Google campaigns built around contribution margin, not just ROAS. We speak the language of profitable growth and build for the long run.',
    tag: 'Meta · Google · D2C Growth',
  },
]

export default function TGAServicesSection() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14"
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 500, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>
            WHAT WE DO
          </p>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--text)', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '16px' }}>
            Full-stack growth.<br />End to end.
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '17px', color: 'var(--text-3)', maxWidth: '520px', lineHeight: 1.7 }}>
            We don&apos;t just run ads. We build the systems, tools, and flows that make growth compound over time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
                className="rounded-2xl p-7 flex flex-col gap-4"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: 'rgba(16,185,129,0.08)',
                    border: '1px solid rgba(16,185,129,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color="#10B981" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '20px', fontWeight: 700, color: 'var(--text)' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
                    {service.description}
                  </p>
                </div>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'var(--text-4)', marginTop: 'auto' }}>
                  {service.tag}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
