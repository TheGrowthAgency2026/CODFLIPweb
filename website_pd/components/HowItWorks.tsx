'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const steps = [
  {
    n: '01',
    title: 'Install in one click',
    desc: 'Add CODFLIP from the Shopify App Store. No developer needed, no code changes required.',
  },
  {
    n: '02',
    title: 'Connect WhatsApp Business',
    desc: 'Link your WhatsApp Business API account. Setup takes under 15 minutes with our guided flow.',
  },
  {
    n: '03',
    title: 'AI scores every COD order',
    desc: 'Our model analyses 40+ signals — address history, cart value, COD frequency, delivery zone — in milliseconds.',
  },
  {
    n: '04',
    title: 'Nudge converts, you collect',
    desc: 'High-risk orders get an automated WhatsApp message with a prepaid discount. Conversions tracked in real time.',
  },
]

function WhatsAppMockup() {
  return (
    <div className="relative mx-auto" style={{ maxWidth: 280 }}>
      {/* Phone shell */}
      <div
        className="bg-[#1a1a2e] p-2.5"
        style={{
          borderRadius: 36,
          boxShadow: '0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.06)',
        }}
      >
        {/* Screen */}
        <div className="bg-[#ECE5DD] overflow-hidden" style={{ borderRadius: 28 }}>
          {/* Status bar placeholder */}
          <div className="bg-[#ECE5DD] px-5 py-1.5 flex justify-between items-center">
            <span className="text-[10px] text-[#0F172A] font-semibold">9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-1.5 border border-[#0F172A]/40 rounded-sm">
                <div className="w-2 h-full bg-[#0F172A]/60 rounded-sm" />
              </div>
            </div>
          </div>

          {/* WA Header */}
          <div
            className="px-4 py-3 flex items-center gap-3"
            style={{ background: '#075E54' }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'rgba(255,255,255,0.18)' }}
            >
              <span className="text-white text-[11px] font-bold">CF</span>
            </div>
            <div>
              <p className="text-white text-[13px] font-semibold leading-none mb-0.5">
                CODFLIP
              </p>
              <p className="text-white/60 text-[10px]">Business Account · Verified</p>
            </div>
          </div>

          {/* Chat area */}
          <div className="p-3 flex flex-col gap-2" style={{ minHeight: 280 }}>
            {/* Incoming messages */}
            <div
              className="bg-white px-3 py-2 max-w-[88%] shadow-sm"
              style={{ borderRadius: '8px 8px 8px 2px' }}
            >
              <p className="text-[12px] text-[#0F172A] leading-[1.5]">
                Hi Priya 👋 Your order <strong>#1042</strong> for{' '}
                <em>Nike Air Max</em> is placed as COD.
              </p>
              <p className="text-[10px] text-[#64748B] mt-1 text-right">10:42 AM</p>
            </div>

            <div
              className="bg-white px-3 py-2 max-w-[88%] shadow-sm"
              style={{ borderRadius: '2px 8px 8px 8px' }}
            >
              <p className="text-[12px] text-[#0F172A] leading-[1.5]">
                Pay online now and get <strong>10% OFF</strong> — save ₹180
                instantly. Offer valid for 2 hours only.
              </p>
              <p className="text-[10px] text-[#64748B] mt-1 text-right">10:42 AM</p>
            </div>

            {/* CTA button rendered as WA button */}
            <div className="max-w-[88%]">
              <div
                className="bg-white border-t border-[#E6EAE8] shadow-sm overflow-hidden"
                style={{ borderRadius: '2px 8px 8px 8px' }}
              >
                <p
                  className="text-center text-[12px] font-semibold text-[#00A884] py-2 px-3"
                  style={{ borderTop: '1px solid #E6EAE8' }}
                >
                  Pay ₹1,619 now →
                </p>
              </div>
            </div>

            {/* Outgoing — customer replied */}
            <div className="self-end max-w-[80%]">
              <div
                className="px-3 py-2 shadow-sm"
                style={{ background: '#DCF8C6', borderRadius: '8px 2px 8px 8px' }}
              >
                <p className="text-[12px] text-[#0F172A]">Done! Paid online ✓</p>
                <p className="text-[10px] text-[#64748B] mt-0.5 text-right">10:44 AM ✓✓</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="mx-auto max-w-[1440px] px-6 md:px-16 py-20 md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE }}
        className="mb-14"
      >
        <h2
          className="text-[32px] md:text-[44px] font-extrabold text-[#0F172A] leading-[1.18] mb-3"
          style={{ letterSpacing: '-0.03em' }}
        >
          From install to first<br />conversion in an hour.
        </h2>
        <p className="text-[18px] text-[#64748B] max-w-[380px] leading-[1.65]">
          No engineer needed. No complex setup. Just results.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-14 lg:gap-24 items-center">
        {/* Steps timeline */}
        <div className="w-full md:w-1/2">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: EASE }}
              className="flex gap-5 relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="absolute bg-[#E6EAE8]"
                  style={{ left: 19, top: 40, width: 1, height: 'calc(100% - 24px)' }}
                />
              )}
              {/* Step badge */}
              <div
                className="shrink-0 w-10 h-10 rounded-full border-2 border-[#E6EAE8] bg-white flex items-center justify-center z-10"
              >
                <span
                  className="text-[11px] font-bold text-[#047857]"
                  style={{ fontFamily: 'monospace' }}
                >
                  {step.n}
                </span>
              </div>
              {/* Text */}
              <div className="pb-10">
                <p className="text-[17px] font-bold text-[#0F172A] mb-1.5 leading-snug">
                  {step.title}
                </p>
                <p className="text-[15px] text-[#64748B] leading-[1.65]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="w-full md:w-1/2"
        >
          <WhatsAppMockup />
        </motion.div>
      </div>
    </section>
  )
}
