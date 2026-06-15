'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/* Checkout payment widget — mirrors real CODFLIP product UI */
function CheckoutWidget() {
  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        position: 'absolute', width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        width: 300, background: '#fff', borderRadius: 20, overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
        position: 'relative', zIndex: 1,
      }}>
        {/* Header */}
        <div style={{ background: '#f8f8f8', padding: '14px 16px 12px', borderBottom: '1px solid #ececec' }}>
          <div style={{ fontSize: 9.5, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 10 }}>
            ORDER SUMMARY · 1 ITEM
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 38, height: 38, background: '#ebebeb', borderRadius: 8, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#111', fontFamily: 'sans-serif' }}>Casual Canvas Slip-On · 6/Navy</div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#111', fontFamily: 'sans-serif' }}>₹1,799</div>
          </div>
        </div>

        {/* Options label */}
        <div style={{ padding: '12px 16px 6px', fontSize: 9.5, color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase' as const, fontFamily: 'sans-serif' }}>
          CHOOSE YOUR PAYMENT OPTION
        </div>

        {/* Option 1: Full Prepaid — highlighted */}
        <div style={{ margin: '4px 12px 6px', border: '2px solid #10B981', borderRadius: 12, padding: '11px 13px', background: 'rgba(16,185,129,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: '#111', fontFamily: 'sans-serif' }}>Full Payment</span>
                <span style={{ fontSize: 8.5, background: '#10B981', color: '#fff', borderRadius: 4, padding: '1px 5px', fontWeight: 700, fontFamily: 'sans-serif' }}>SAVE ₹70</span>
              </div>
              <div style={{ fontSize: 10.5, color: '#10B981', marginTop: 2, fontFamily: 'sans-serif' }}>Pay ₹1,799 now (prepaid)</div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#10B981', fontFamily: 'sans-serif' }}>₹1,799</div>
          </div>
        </div>

        {/* Option 2: Partial COD */}
        <div style={{ margin: '0 12px 6px', border: '1px solid #e8e8e8', borderRadius: 12, padding: '11px 13px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: '#111', fontFamily: 'sans-serif' }}>Pay 20% — Rest on Delivery</span>
              </div>
              <div style={{ fontSize: 10.5, color: '#888', marginTop: 2, fontFamily: 'sans-serif' }}>Pay ₹360 now and ₹1,439 on delivery</div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#333', fontFamily: 'sans-serif' }}>₹360</div>
          </div>
        </div>

        {/* Option 3: COD with Fee */}
        <div style={{ margin: '0 12px 14px', border: '1px solid #e8e8e8', borderRadius: 12, padding: '11px 13px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27,6.96 12,12.01 20.73,6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: '#111', fontFamily: 'sans-serif' }}>COD with Fee</span>
              </div>
              <div style={{ fontSize: 10.5, color: '#888', marginTop: 2, fontFamily: 'sans-serif' }}>Pay on delivery — includes ₹70 handling fee</div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#333', fontFamily: 'sans-serif' }}>₹1,869</div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: '0 12px 14px' }}>
          <div style={{ background: '#111', borderRadius: 12, padding: '13px', textAlign: 'center', fontFamily: 'sans-serif', fontWeight: 700, fontSize: 13, color: '#fff' }}>
            Proceed to Payment
          </div>
        </div>

        {/* Powered by */}
        <div style={{ textAlign: 'center', padding: '8px 12px 12px', fontSize: 9.5, color: '#ccc', fontFamily: 'sans-serif', borderTop: '1px solid #f5f5f5', letterSpacing: '0.06em' }}>
          POWERED BY CODFLIP
        </div>
      </div>
    </div>
  )
}

/* OTP verification phone */
function OtpPhoneVisual() {
  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        position: 'absolute', width: 260, height: 260, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(16,185,129,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        width: 220, height: 450, background: '#111', borderRadius: 36, padding: 3,
        boxShadow: '0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 34, overflow: 'hidden', background: '#fff', display: 'flex', flexDirection: 'column' }}>
          {/* Dynamic island */}
          <div style={{ height: 28, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <div style={{ width: 72, height: 16, background: '#000', borderRadius: 10 }} />
          </div>

          {/* Store header */}
          <div style={{ background: '#f9f9f9', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #ebebeb', flexShrink: 0 }}>
            <div style={{ width: 28, height: 28, background: '#10B981', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#111', fontFamily: 'sans-serif' }}>Brand Store</div>
              <div style={{ fontSize: 9, color: '#888', fontFamily: 'sans-serif' }}>Checkout</div>
            </div>
            <div style={{ fontSize: 14, color: '#bbb', fontFamily: 'sans-serif' }}>✕</div>
          </div>

          {/* Order item */}
          <div style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 9, borderBottom: '1px solid #ebebeb', flexShrink: 0 }}>
            <div style={{ width: 38, height: 38, background: '#ebebeb', borderRadius: 8, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5" strokeLinecap="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"/></svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#111', fontFamily: 'sans-serif' }}>Classic Bomber Jacket</div>
              <div style={{ fontSize: 9.5, color: '#888', fontFamily: 'sans-serif' }}>S / Navy</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#111', fontFamily: 'sans-serif' }}>₹1,499</div>
          </div>

          {/* OTP content */}
          <div style={{ flex: 1, padding: '16px 14px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center' }}>
            <div style={{ width: 44, height: 44, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 4, textAlign: 'center', fontFamily: 'sans-serif' }}>Verify your COD order</div>
            <div style={{ fontSize: 10, color: '#888', textAlign: 'center', marginBottom: 14, fontFamily: 'sans-serif' }}>Enter OTP sent to +91 98765 43210</div>

            {/* OTP boxes */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
              {['4', '8', '2', '9'].map((d, idx) => (
                <div key={idx} style={{ width: 36, height: 42, background: '#f7f7f7', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 700, color: '#111', border: '1.5px solid #e0e0e0', fontFamily: 'sans-serif' }}>
                  {d}
                </div>
              ))}
            </div>

            {/* Verified badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 20, padding: '7px 16px' }}>
              <div style={{ width: 16, height: 16, background: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 9, fontWeight: 700 }}>✓</div>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#10B981', fontFamily: 'sans-serif' }}>Verified</span>
            </div>
          </div>

          {/* Bottom CTA */}
          <div style={{ padding: '0 12px 12px', flexShrink: 0 }}>
            <div style={{ background: '#111', borderRadius: 10, padding: '11px', textAlign: 'center', fontSize: 11, fontWeight: 700, color: '#fff', fontFamily: 'sans-serif' }}>
              Continue to Checkout
            </div>
            <div style={{ textAlign: 'center', marginTop: 6, fontSize: 9, color: '#bbb', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              Secure &amp; Trusted Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeaturesSection() {
  const engageRef = useRef<HTMLDivElement>(null)
  const engageInView = useInView(engageRef, { once: true, margin: '-60px' })

  const verifyRef = useRef<HTMLDivElement>(null)
  const verifyInView = useInView(verifyRef, { once: true, margin: '-60px' })

  return (
    <>
      {/* ── CHECKOUT INTERVENTION section ── */}
      <section style={{ background: '#F5F5F5', padding: '100px 48px', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.span
            ref={engageRef}
            initial={{ opacity: 0, y: 14 }}
            animate={engageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            style={{ display: 'inline-block', fontFamily: 'var(--font-dm-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#10B981', marginBottom: 20 }}
          >
            CHECKOUT INTERVENTION
          </motion.span>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="cf-engage-grid">
            {/* LEFT: text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={engageInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-syne)', fontWeight: 800,
                  fontSize: 'clamp(28px, 3.8vw, 52px)',
                  lineHeight: 1.08, letterSpacing: '-2px', color: '#0A0A0A', marginBottom: 20,
                }}
              >
                Reduce RTO{' '}
                <span style={{ color: '#10B981' }}>before</span>{' '}
                the order is placed.
              </h2>

              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 16, lineHeight: 1.65, color: '#6B7280', marginBottom: 36, maxWidth: 440 }}>
                CODFLIP adds a smart payment widget to your Shopify checkout — nudging COD customers to pay partially or fully upfront before the order is even confirmed.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, marginBottom: 36 }}>
                {[
                  { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>, title: 'Partial Advance', body: 'Customer pays 20% now, rest on delivery — lowers your risk, raises their commitment.' },
                  { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27,6.96 12,12.01 20.73,6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>, title: 'COD Handling Fee', body: 'Add a ₹50–100 fee to COD orders — incentivises prepaid without blocking the sale.' },
                  { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>, title: 'Full Prepaid Incentive', body: 'Offer a small discount for full prepayment — highest conversion, lowest RTO.' },
                ].map((f) => (
                  <div key={f.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      {f.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 14, color: '#111', marginBottom: 3 }}>{f.title}</div>
                      <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 13, color: '#6B7280', lineHeight: 1.55 }}>{f.body}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: '#10B981', color: '#fff',
                  fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 14,
                  padding: '13px 24px', borderRadius: 100, textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
                }}
              >
                Start recovering →
              </a>
            </motion.div>

            {/* RIGHT: checkout widget */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={engageInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <CheckoutWidget />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OTP VERIFICATION section ── */}
      <section style={{ background: '#fff', padding: '100px 48px', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.span
            ref={verifyRef}
            initial={{ opacity: 0, y: 14 }}
            animate={verifyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            style={{ display: 'inline-block', fontFamily: 'var(--font-dm-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#10B981', marginBottom: 20 }}
          >
            OTP VERIFICATION
          </motion.span>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="cf-verify-grid">
            {/* LEFT: phone */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={verifyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <OtpPhoneVisual />
            </motion.div>

            {/* RIGHT: text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={verifyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-syne)', fontWeight: 800,
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  lineHeight: 1.1, letterSpacing: '-1.5px', color: '#0A0A0A', marginBottom: 20,
                }}
              >
                Ship orders only to{' '}
                <span style={{ color: '#10B981' }}>verified buyers.</span>
              </h2>

              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 16, lineHeight: 1.65, color: '#6B7280', marginBottom: 36 }}>
                Every COD customer gets a WhatsApp OTP before their order ships. Unverified = unshipped. Block fake, invalid, and prank COD orders before they reach your warehouse.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 36 }}>
                {[
                  'WhatsApp OTP sent instantly at checkout',
                  'Fake & invalid orders blocked before dispatch',
                  'Only genuine buyers proceed to shipping',
                  'Zero extra work — fully automated',
                ].map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 14, color: '#6B7280' }}>{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: '#10B981', color: '#fff',
                  fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 14,
                  padding: '13px 24px', borderRadius: 100, textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
                }}
              >
                Get early access →
              </a>
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (max-width: 800px) {
            .cf-engage-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .cf-verify-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>
    </>
  )
}
