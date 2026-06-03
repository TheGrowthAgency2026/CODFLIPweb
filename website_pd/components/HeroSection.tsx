'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

function SparkLine() {
  return (
    <svg viewBox="0 0 200 48" fill="none" className="w-full" style={{ height: 48 }}>
      <defs>
        <linearGradient id="hero-sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#047857" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#047857" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 42 C30 38, 50 34, 70 27 S110 16, 130 11 S165 5, 200 2"
        stroke="#047857"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M0 42 C30 38, 50 34, 70 27 S110 16, 130 11 S165 5, 200 2 L200 48 L0 48 Z"
        fill="url(#hero-sg)"
      />
    </svg>
  )
}

function DashboardWidget() {
  const recentConversions = [
    { id: '#1042', label: 'Prepaid (+10% off)', time: '2m ago' },
    { id: '#1043', label: 'Prepaid (+₹150 off)', time: '8m ago' },
    { id: '#1039', label: 'Prepaid (+10% off)', time: '21m ago' },
  ]

  return (
    <div
      className="bg-white border border-[#E6EAE8] overflow-hidden"
      style={{ borderRadius: 12, boxShadow: '0 8px 40px rgba(0,0,0,0.07)' }}
    >
      {/* Browser chrome */}
      <div className="bg-[#f3f4f3] border-b border-[#E6EAE8] px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#d9dad9]" />
          ))}
        </div>
        <div
          className="flex-1 mx-2 bg-[#edeeed] h-5 px-3 flex items-center"
          style={{ borderRadius: 999 }}
        >
          <span className="text-[11px] text-[#64748B]">app.codflip.io/dashboard</span>
        </div>
      </div>

      {/* Metric grid */}
      <div className="p-5 grid grid-cols-2 gap-3">
        {/* Nudges Sent */}
        <div className="border border-[#E6EAE8] p-4" style={{ borderRadius: 8 }}>
          <p className="text-[11px] text-[#64748B] mb-1.5 uppercase tracking-[0.05em]">Nudges Sent</p>
          <p className="text-[26px] font-extrabold text-[#0F172A] tracking-tight leading-none">
            1,248
          </p>
        </div>

        {/* Conversions */}
        <div
          className="border border-[#047857]/15 p-4"
          style={{ borderRadius: 8, background: '#f0fdf4' }}
        >
          <p className="text-[11px] text-[#64748B] mb-1.5 uppercase tracking-[0.05em]">Converted</p>
          <p className="text-[26px] font-extrabold text-[#047857] tracking-tight leading-none">
            342
          </p>
        </div>

        {/* Revenue — full width with sparkline */}
        <div className="col-span-2 border border-[#E6EAE8] p-4" style={{ borderRadius: 8 }}>
          <p className="text-[11px] text-[#64748B] mb-1 uppercase tracking-[0.05em]">
            Revenue Recovered
          </p>
          <p className="text-[22px] font-extrabold text-[#0F172A] tracking-tight leading-none mb-2">
            ₹4,28,500
          </p>
          <SparkLine />
        </div>

        {/* Recent conversions */}
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#047857]"
              style={{ animation: 'pulse 2s ease-in-out infinite' }}
            />
            <p className="text-[11px] font-semibold text-[#64748B] uppercase tracking-[0.06em]">
              Live conversions
            </p>
          </div>
          <div className="border border-[#E6EAE8] overflow-hidden" style={{ borderRadius: 8 }}>
            {recentConversions.map((item, i) => (
              <div
                key={item.id}
                className="flex items-center justify-between px-3 py-2.5 border-b border-[#E6EAE8] last:border-0"
              >
                <span className="text-[12px] text-[#3e4943]" style={{ fontFamily: 'monospace' }}>
                  {item.id}
                </span>
                <span className="text-[12px] text-[#047857] font-medium">{item.label}</span>
                <span className="text-[11px] text-[#64748B]">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 md:px-16 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
      {/* Left: copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: EASE }}
        className="w-full md:w-[46%] flex flex-col gap-6"
      >
        <span
          className="inline-flex items-center gap-2 bg-[#F1F5F9] text-[#047857] text-[13px] font-semibold px-3 py-1.5 w-fit tracking-[0.01em]"
          style={{ borderRadius: 999 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#047857]" />
          Shopify App — Live
        </span>

        <h1
          className="text-[40px] md:text-[60px] font-extrabold text-[#0F172A] leading-[1.07]"
          style={{ letterSpacing: '-0.04em' }}
        >
          Turn COD orders<br />into prepaid<br />revenue.
        </h1>

        <p className="text-[18px] text-[#64748B] leading-[1.65] max-w-[420px]">
          Stop funding RTOs quietly. Detect high-risk Cash on Delivery orders
          and convert them to prepaid via WhatsApp before they ship.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-[#047857] hover:bg-[#006c4e] text-white text-[14px] font-semibold px-6 py-3 transition-colors no-underline tracking-[0.01em]"
            style={{ borderRadius: 4, boxShadow: '0 2px 12px rgba(4,120,87,0.22)' }}
          >
            Install free on Shopify
            <ArrowRight size={15} />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center bg-white border border-[#E6EAE8] hover:bg-[#f3f4f3] text-[#0F172A] text-[14px] font-semibold px-6 py-3 transition-colors no-underline tracking-[0.01em]"
            style={{ borderRadius: 4 }}
          >
            Book a demo
          </a>
        </div>

        <p className="text-[13px] text-[#64748B]">
          Free to install · No credit card needed · 14-day full access
        </p>
      </motion.div>

      {/* Right: dashboard widget */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        className="w-full md:w-[54%]"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <DashboardWidget />
        </motion.div>
      </motion.div>
    </section>
  )
}
