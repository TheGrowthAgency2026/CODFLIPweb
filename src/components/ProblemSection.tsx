'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const stats = [
  { num: '28%', label: 'Average Indian D2C RTO rate' },
  { num: '₹200', label: 'Average cost per returned order' },
  { num: '60%', label: 'COD share of total orders' },
]

function formatINR(n: number): string {
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`
  if (n >= 1000) return `₹${(n / 1000).toFixed(0)}K`
  return `₹${n}`
}

export default function ProblemSection() {
  const [orders, setOrders] = useState(1000)
  const [rtoRate, setRtoRate] = useState(28)
  const [costPerRto, setCostPerRto] = useState(180)
  const { ref, isInView } = useScrollReveal()

  const monthlyLoss = Math.round((orders * rtoRate) / 100 * costPerRto)
  const yearlyLoss = monthlyLoss * 12
  const recovery = Math.round(monthlyLoss * 0.35)

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 relative" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 500, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              THE PROBLEM
            </p>

            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--text)', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
              Your COD orders are<br />bleeding money.
            </h2>

            <div className="flex flex-col gap-4">
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.8 }}>
                60–75% of Indian D2C orders are COD. Of those, 25–35% return.
                Each return costs you ₹180–240 in shipping, logistics, and restocking.
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.8 }}>
                A ₹10L/month brand with 30% RTO loses ₹50,000 every single month.
                That&apos;s ₹6 lakh a year quietly draining your margins.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-4 mt-2">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-4 pl-4" style={{ borderLeft: '2px solid #10B981' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '28px', fontWeight: 700, color: '#10B981', lineHeight: 1.1 }}>
                      {s.num}
                    </div>
                    <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-2)', marginTop: '2px' }}>
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="rounded-2xl p-7" style={{ background: 'var(--bg-2)', border: '1px solid var(--border)' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: '#10B981', marginBottom: '20px' }}>
                Calculate your RTO loss
              </p>

              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex justify-between mb-2">
                    <label style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-2)' }}>Monthly COD orders</label>
                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '13px', color: '#10B981' }}>{orders.toLocaleString()}</span>
                  </div>
                  <input type="range" min={100} max={10000} step={50} value={orders} onChange={(e) => setOrders(Number(e.target.value))} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-2)' }}>Your RTO rate</label>
                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '13px', color: '#10B981' }}>{rtoRate}%</span>
                  </div>
                  <input type="range" min={5} max={60} step={1} value={rtoRate} onChange={(e) => setRtoRate(Number(e.target.value))} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-2)' }}>Cost per return</label>
                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '13px', color: '#10B981' }}>₹{costPerRto}</span>
                  </div>
                  <input type="range" min={100} max={400} step={10} value={costPerRto} onChange={(e) => setCostPerRto(Number(e.target.value))} />
                </div>

                {/* Result */}
                <div className="rounded-xl p-5 mt-2" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-2)', marginBottom: '8px' }}>
                    Your monthly RTO loss
                  </p>
                  <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '48px', fontWeight: 800, color: '#10B981', lineHeight: 1, marginBottom: '6px' }}>
                    {formatINR(monthlyLoss)}
                  </div>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-2)', marginBottom: '10px' }}>
                    That&apos;s {formatINR(yearlyLoss)} / year
                  </p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>
                    CODFLIP recovers up to 35% of this = <span style={{ color: '#10B981' }}>{formatINR(recovery)}/month</span>
                  </p>
                </div>

                <a
                  href="https://apps.shopify.com/codflip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#10B981' }}
                >
                  Start recovering this money →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
