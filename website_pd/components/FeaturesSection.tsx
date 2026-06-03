'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, MessageCircle, BarChart3, ShieldCheck, ShoppingBag } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

function RiskScoreVisual() {
  const orders = [
    { id: '#1041', city: 'Jaipur', score: 87, risk: 'High' },
    { id: '#1042', city: 'Mumbai', score: 38, risk: 'Low' },
    { id: '#1043', city: 'Delhi', score: 64, risk: 'Med' },
    { id: '#1044', city: 'Surat', score: 91, risk: 'High' },
  ]

  const riskColor = (score: number) =>
    score > 70 ? '#dc2626' : score > 50 ? '#d97706' : '#047857'

  return (
    <div className="flex flex-col gap-3 w-full">
      {orders.map((o) => (
        <div key={o.id} className="flex items-center gap-3">
          <span
            className="text-[12px] text-[#64748B] shrink-0 w-[100px]"
            style={{ fontFamily: 'monospace' }}
          >
            {o.id} · {o.city}
          </span>
          <div className="flex-1 bg-[#E6EAE8] h-1.5 overflow-hidden" style={{ borderRadius: 999 }}>
            <div
              className="h-full"
              style={{
                width: `${o.score}%`,
                background: riskColor(o.score),
                borderRadius: 999,
                transition: 'width 0.8s ease',
              }}
            />
          </div>
          <span
            className="text-[11px] font-bold w-8 text-right shrink-0"
            style={{ color: riskColor(o.score) }}
          >
            {o.risk}
          </span>
        </div>
      ))}
      <p className="text-[12px] text-[#64748B] mt-1">
        40+ signals scored per order — address history, cart value, COD frequency.
      </p>
    </div>
  )
}

const bottomFeatures = [
  {
    Icon: BarChart3,
    title: 'Real-time analytics',
    desc: 'Track conversion rate, revenue recovered, RTO blocked, and discount cost — all in one dashboard.',
  },
  {
    Icon: ShieldCheck,
    title: 'COD order control',
    desc: 'Block COD automatically for addresses or customer segments that consistently return. Protect your pipeline.',
  },
  {
    Icon: ShoppingBag,
    title: 'Native Shopify integration',
    desc: 'Installs in one click. Works with your existing theme, checkout, and fulfillment workflows without disruption.',
  },
]

export default function FeaturesSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} id="product" className="py-20 md:py-28 bg-[#f3f4f3]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <h2
            className="text-[32px] md:text-[44px] font-extrabold text-[#0F172A] leading-[1.18] mb-3"
            style={{ letterSpacing: '-0.03em' }}
          >
            How can we help?
          </h2>
          <p className="text-[18px] text-[#64748B] max-w-[440px] leading-[1.65]">
            A full operational layer between your COD orders and your fulfillment team.
          </p>
        </motion.div>

        {/* Top row: asymmetric 3/5 + 2/5 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-5">
          {/* Risk Scoring — large card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="md:col-span-3 bg-white border border-[#E6EAE8] p-7"
            style={{ borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Zap size={16} className="text-[#047857]" strokeWidth={2.2} />
              <span className="text-[12px] font-bold text-[#047857] uppercase tracking-[0.06em]">
                AI Risk Scoring
              </span>
            </div>
            <h3
              className="text-[22px] font-bold text-[#0F172A] mb-2 leading-snug"
              style={{ letterSpacing: '-0.02em' }}
            >
              Know which orders to trust,<br />before they ship.
            </h3>
            <p className="text-[15px] text-[#64748B] leading-[1.65] mb-7 max-w-sm">
              Every COD order is scored in milliseconds. High-risk orders get flagged
              for intervention before fulfillment starts.
            </p>
            <RiskScoreVisual />
          </motion.div>

          {/* WhatsApp Automation — dark card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="md:col-span-2 bg-[#0F1714] border border-[#3e4943]/40 p-7 flex flex-col justify-between"
            style={{ borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}
          >
            <div>
              <div className="flex items-center gap-2 mb-5">
                <MessageCircle size={16} className="text-[#7bd8b1]" strokeWidth={2.2} />
                <span className="text-[12px] font-bold text-[#7bd8b1] uppercase tracking-[0.06em]">
                  WhatsApp Automation
                </span>
              </div>
              <h3
                className="text-[22px] font-bold text-white mb-3 leading-snug"
                style={{ letterSpacing: '-0.02em' }}
              >
                Nudge at the right moment.
              </h3>
              <p className="text-[15px] text-[#c3c7c6] leading-[1.65]">
                Automated messages within minutes of order placement, before
                fulfillment starts. WhatsApp delivers — email doesn't.
              </p>
            </div>
            <div
              className="mt-8 bg-[#18231E] p-5 border border-[#3e4943]/40"
              style={{ borderRadius: 8 }}
            >
              <p
                className="text-[36px] font-extrabold text-[#7bd8b1] leading-none mb-1"
                style={{ letterSpacing: '-0.03em' }}
              >
                78%
              </p>
              <p className="text-[13px] text-[#c3c7c6]">
                WhatsApp open rate vs 22% for email
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom row: horizontal feature list */}
        <div
          className="bg-white border border-[#E6EAE8] overflow-hidden"
          style={{ borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}
        >
          {bottomFeatures.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.22 + i * 0.08, ease: EASE }}
              className="flex items-start gap-5 px-7 py-6 border-b border-[#E6EAE8] last:border-0"
            >
              <Icon size={18} className="text-[#047857] shrink-0 mt-0.5" strokeWidth={1.8} />
              <div>
                <p className="text-[16px] font-semibold text-[#0F172A] mb-1">{title}</p>
                <p className="text-[14px] text-[#64748B] leading-[1.65]">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
