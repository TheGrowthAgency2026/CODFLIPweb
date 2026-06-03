'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const agencyStats = [
  { num: '50+', label: 'D2C brands served' },
  { num: '₹100Cr+', label: 'GMV managed on Shopify' },
  { num: '8 years', label: 'Building on Shopify' },
]

const bullets = [
  'Shopify development & custom apps',
  'D2C performance marketing',
  'Conversion rate optimisation',
]

export default function AgencySection() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24"
      style={{ background: '#111111' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 500, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              BUILT BY
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', lineHeight: 1.1 }}>
              The Growth Agency
            </h2>

            <div className="flex flex-col gap-3">
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: '#9CA3AF', lineHeight: 1.8 }}>
                CODFLIP is built and maintained by The Growth Agency —
                a performance-focused digital agency working with India&apos;s
                top D2C brands on Shopify. We built this tool because our
                clients needed it and nothing good enough existed.
              </p>
              <a
                href="https://thegrowthagency.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline inline-block w-fit"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#10B981' }}
              >
                thegrowthagency.in
              </a>
            </div>

            {/* Bullets */}
            <div className="flex flex-col gap-3">
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <span style={{ color: '#10B981', fontSize: '16px', fontWeight: 700 }}>→</span>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#9CA3AF' }}>{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {agencyStats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-5"
                style={{ background: '#0a0a0a', border: '1px solid #1F2937' }}
              >
                <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '32px', fontWeight: 700, color: '#10B981', lineHeight: 1, marginBottom: '6px' }}>
                  {s.num}
                </div>
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#9CA3AF' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
