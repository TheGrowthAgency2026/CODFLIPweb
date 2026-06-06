'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = ['Shopify Development', 'WhatsApp Retention', 'CRO']

export default function TGAHeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg)', paddingTop: '136px', paddingBottom: '80px' }}
    >
      <div
        className="glow-orb"
        style={{ top: '-200px', left: '50%', transform: 'translateX(-50%)', zIndex: 0 }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="badge-green">
            <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            India&apos;s D2C Growth Studio
          </span>
        </motion.div>

        <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.05, letterSpacing: '-2px' }}>
          {['We', 'build', 'growth', 'infrastructure', 'for', 'Indian', 'D2C', 'brands.'].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              style={{
                display: 'inline-block',
                marginRight: '0.25em',
                color: word === 'infrastructure' ? '#10B981' : 'var(--text)',
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '560px' }}
        >
          Shopify apps, WhatsApp retention, and performance systems that compound.
          We work with India&apos;s top D2C brands to build growth that sticks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {services.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '12px',
                color: 'var(--text-3)',
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '4px 14px',
              }}
            >
              {s}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.75 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200"
            style={{ background: '#10B981', color: '#0a0a0a', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 500 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#059669')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#10B981')}
          >
            Work with us
            <ArrowRight size={15} />
          </a>
          <a
            href="/codflip"
            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200"
            style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)', fontFamily: 'var(--font-dm-sans)', fontSize: '15px' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#10B981'; e.currentTarget.style.color = '#10B981' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
          >
            See CODFLIP →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
