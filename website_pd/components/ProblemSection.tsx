'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingDown, Banknote, Users } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const problems = [
  {
    Icon: TrendingDown,
    stat: '35%',
    label: 'Average RTO rate',
    detail:
      "For unverified COD orders in India. That's 1 in 3 packages coming back — before you've collected a rupee.",
  },
  {
    Icon: Banknote,
    stat: '₹200',
    label: 'Per returned package',
    detail:
      'Shipping both ways, handling, repackaging, and restocking. The cost hits before you know the order failed.',
  },
  {
    Icon: Users,
    stat: '3×',
    label: 'Higher churn rate',
    detail:
      'COD customers are 3× more likely to never buy again. Prepaid signals intent — and builds a better customer base.',
  },
]

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-[#0F1714] w-full py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl mb-14"
        >
          <h2
            className="text-[36px] md:text-[48px] font-extrabold text-white leading-[1.13] mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Every COD order is a liability<br />you're quietly funding.
          </h2>
          <p className="text-[18px] text-[#c3c7c6] leading-[1.65]">
            The hidden costs of cash-on-delivery erode your margins before the product
            leaves the warehouse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map(({ Icon, stat, label, detail }, i) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: EASE }}
              className="border border-[#3e4943]/40 p-7 bg-[#18231E]"
              style={{ borderRadius: 12 }}
            >
              <Icon className="text-[#ffb4ac] mb-5" size={26} strokeWidth={1.5} />
              <p
                className="text-[48px] font-extrabold text-white leading-none mb-2"
                style={{ letterSpacing: '-0.03em' }}
              >
                {stat}
              </p>
              <p className="text-[12px] font-bold text-[#047857] uppercase tracking-[0.07em] mb-3">
                {label}
              </p>
              <p className="text-[15px] text-[#c3c7c6] leading-[1.65]">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
