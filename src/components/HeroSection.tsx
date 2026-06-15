'use client'

import { motion } from 'framer-motion'

/* ── SVG icon primitives ── */
const IcoCard = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
)
const IcoHome = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
)
const IcoBox = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
)
const IcoLock = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
)
const IcoWA = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.989.572 3.845 1.559 5.408L2 22l4.741-1.523A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
  </svg>
)

/* ── Floating product card composition (Monotree-style right column) ── */

function ProductCards() {
  return (
    <div style={{
      position: 'relative', height: 520,
      backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
      backgroundSize: '22px 22px',
      borderRadius: 24, overflow: 'visible',
    }}>
      {/* ── Main: Checkout widget card ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%) rotate(-2deg)',
          width: 265, background: '#fff',
          borderRadius: 18, border: '1px solid #e8e8e8',
          boxShadow: '0 12px 48px rgba(0,0,0,0.10)',
          overflow: 'hidden', zIndex: 2,
        }}
      >
        {/* Header */}
        <div style={{ background: '#f8f8f8', padding: '12px 14px', borderBottom: '1px solid #ececec' }}>
          <div style={{ fontSize: 9, color: '#bbb', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 8, fontFamily: 'sans-serif' }}>
            ORDER SUMMARY · 1 ITEM
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            {/* product thumbnail — clean gray rect, no emoji */}
            <div style={{ width: 34, height: 34, background: '#ebebeb', borderRadius: 8, flexShrink: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5" strokeLinecap="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11.5, fontWeight: 600, color: '#111', fontFamily: 'sans-serif' }}>Canvas Slip-On · 6/Navy</div>
            </div>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: '#111', fontFamily: 'sans-serif' }}>₹1,799</div>
          </div>
        </div>

        <div style={{ padding: '10px 14px 6px', fontSize: 8.5, color: '#bbb', letterSpacing: '0.1em', textTransform: 'uppercase' as const, fontFamily: 'sans-serif' }}>
          CHOOSE YOUR PAYMENT OPTION
        </div>

        {/* Full Payment — highlighted green */}
        <div style={{ margin: '3px 10px 5px', border: '1.5px solid #10B981', borderRadius: 10, padding: '9px 11px', background: 'rgba(16,185,129,0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <IcoCard />
                <span style={{ fontSize: 11.5, fontWeight: 700, color: '#111', fontFamily: 'sans-serif' }}>Full Payment</span>
                <span style={{ fontSize: 7.5, background: '#10B981', color: '#fff', borderRadius: 4, padding: '1px 4px', fontWeight: 700, fontFamily: 'sans-serif' }}>SAVE ₹70</span>
              </div>
              <div style={{ fontSize: 9.5, color: '#10B981', marginTop: 2, fontFamily: 'sans-serif' }}>Pay ₹1,799 now (prepaid)</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#10B981', fontFamily: 'sans-serif' }}>₹1,799</div>
          </div>
        </div>

        {/* Partial COD */}
        <div style={{ margin: '0 10px 5px', border: '1px solid #ebebeb', borderRadius: 10, padding: '9px 11px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <IcoHome />
                <span style={{ fontSize: 11.5, fontWeight: 600, color: '#111', fontFamily: 'sans-serif' }}>Pay 20% — Rest on Delivery</span>
              </div>
              <div style={{ fontSize: 9.5, color: '#999', marginTop: 2, fontFamily: 'sans-serif' }}>₹360 now, ₹1,439 on delivery</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#333', fontFamily: 'sans-serif' }}>₹360</div>
          </div>
        </div>

        {/* COD with Fee */}
        <div style={{ margin: '0 10px 13px', border: '1px solid #ebebeb', borderRadius: 10, padding: '9px 11px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <IcoBox />
                <span style={{ fontSize: 11.5, fontWeight: 600, color: '#111', fontFamily: 'sans-serif' }}>COD with Fee</span>
              </div>
              <div style={{ fontSize: 9.5, color: '#999', marginTop: 2, fontFamily: 'sans-serif' }}>Pay on delivery · ₹70 handling fee</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#333', fontFamily: 'sans-serif' }}>₹1,869</div>
          </div>
        </div>

        <div style={{ padding: '0 10px 11px' }}>
          <div style={{ background: '#111', borderRadius: 10, padding: '11px', textAlign: 'center', fontFamily: 'sans-serif', fontWeight: 700, fontSize: 12, color: '#fff' }}>
            Proceed to Payment
          </div>
        </div>
        <div style={{ textAlign: 'center', padding: '7px', fontSize: 8.5, color: '#ccc', fontFamily: 'sans-serif', borderTop: '1px solid #f5f5f5', letterSpacing: '0.06em' }}>
          POWERED BY CODFLIP
        </div>
      </motion.div>

      {/* ── WhatsApp nudge card — top-right ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, x: 16 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute', top: 36, right: 10,
          width: 192, background: '#fff',
          borderRadius: 14, border: '1px solid #e8e8e8',
          boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
          padding: '11px 13px', zIndex: 3,
          transform: 'rotate(2.5deg)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
          <div style={{ width: 22, height: 22, background: '#25D366', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <IcoWA />
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#111', fontFamily: 'sans-serif' }}>WhatsApp</div>
            <div style={{ fontSize: 8.5, color: '#999', fontFamily: 'sans-serif' }}>Marigold Fashion · now</div>
          </div>
        </div>
        <div style={{ fontSize: 11, color: '#444', lineHeight: 1.45, fontFamily: 'sans-serif', marginBottom: 8 }}>
          Switch to prepaid &amp; <strong style={{ color: '#10B981' }}>save ₹62</strong>. Offer expires in 24 hrs.
        </div>
        <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 7, padding: '5px 9px', textAlign: 'center', fontSize: 10, color: '#10B981', fontWeight: 700, fontFamily: 'sans-serif' }}>
          Pay ₹1,178 now →
        </div>
      </motion.div>

      {/* ── OTP verified card — bottom-left ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, x: -16 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute', bottom: 50, left: 8,
          width: 168, background: '#fff',
          borderRadius: 14, border: '1px solid #e8e8e8',
          boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
          padding: '10px 12px', zIndex: 3,
          transform: 'rotate(-2.5deg)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
          <div style={{ width: 20, height: 20, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <IcoLock />
          </div>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#111', fontFamily: 'sans-serif', lineHeight: 1.3 }}>Verify your COD order</div>
        </div>
        <div style={{ display: 'flex', gap: 5, marginBottom: 8 }}>
          {['4', '8', '2', '9'].map((d, idx) => (
            <div key={idx} style={{ flex: 1, height: 30, background: '#f8f8f8', border: '1px solid #e5e5e5', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#111', fontFamily: 'sans-serif' }}>
              {d}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(16,185,129,0.08)', borderRadius: 8, padding: '5px 8px', justifyContent: 'center' }}>
          <div style={{ width: 14, height: 14, background: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="7" height="7" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span style={{ fontSize: 10.5, fontWeight: 700, color: '#10B981', fontFamily: 'sans-serif' }}>Verified</span>
        </div>
      </motion.div>
    </div>
  )
}

/* ── Hero section ─────────────────────────────────────────────────── */

export default function HeroSection() {
  return (
    <section style={{ background: '#fff', overflow: 'hidden' }}>
      <div
        style={{
          maxWidth: 1100, margin: '0 auto',
          padding: 'clamp(48px, 7vw, 100px) 48px clamp(60px, 8vw, 110px)',
          display: 'grid', gridTemplateColumns: '44fr 56fr',
          gap: 'clamp(32px, 4vw, 56px)', alignItems: 'center',
        }}
        className="cf-hero-grid"
      >
        {/* ── LEFT ── */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}
          >
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 13, color: '#6b7280', fontWeight: 500 }}>
              COD → Prepaid · Shopify App
            </span>
          </motion.div>

          {/* Mixed-font heading — Monotree style */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-syne)', fontWeight: 800,
              fontSize: 'clamp(38px, 4.8vw, 66px)',
              lineHeight: 1.06, letterSpacing: '-2.5px',
              color: '#0A0A0A', margin: '0 0 22px',
            }}
          >
            Flip COD to{' '}
            <em style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontStyle: 'italic',
              fontWeight: 400,
              letterSpacing: '-0.5px',
              textDecoration: 'underline',
              textDecorationColor: '#10B981',
              textDecorationThickness: '2px',
              textUnderlineOffset: '7px',
            }}>
              prepaid.
            </em>
            <br />
            Automatically.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-dm-sans)', fontSize: 16, lineHeight: 1.68,
              color: '#6B7280', margin: '0 0 28px', maxWidth: 380,
            }}
          >
            Smart checkout options, WhatsApp nudges, and OTP verification — CODFLIP cuts RTO before, during, and after every COD order.
          </motion.p>

          {/* Email + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            style={{ display: 'flex', gap: 8, marginBottom: 36, alignItems: 'center', flexWrap: 'wrap' as const }}
          >
            <input
              type="email"
              placeholder="Enter your store email"
              style={{
                height: 46, padding: '0 16px',
                background: '#F5F5F5', border: '1.5px solid transparent',
                borderRadius: 12, fontSize: 14, color: '#111', outline: 'none',
                fontFamily: 'var(--font-dm-sans)', width: 220,
                transition: 'border-color 0.2s',
              }}
              onFocus={e => { e.currentTarget.style.borderColor = '#10B981'; e.currentTarget.style.background = '#fff' }}
              onBlur={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = '#F5F5F5' }}
            />
            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center',
                height: 46, padding: '0 22px',
                background: '#16a34a', color: '#fff',
                fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 14,
                borderRadius: 12, textDecoration: 'none',
                boxShadow: '0 2px 12px rgba(22,163,74,0.28)',
                transition: 'background 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#15803d'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(22,163,74,0.38)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#16a34a'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(22,163,74,0.28)' }}
            >
              Get early access
            </a>
          </motion.div>

          {/* Stats row — Monotree style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            <div style={{ width: '100%', height: 1, background: '#f0f0f0', marginBottom: 24 }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap' as const }}>
              {[
                { v: '37%', l: 'Avg. RTO rate\nin India' },
                { v: '₹220', l: 'Avg. loss\nper return' },
                { v: '₹0', l: 'Flat fee,\never' },
              ].map((s, i) => (
                <div key={s.v} style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && (
                    <div style={{ width: 1, height: 38, background: '#e5e5e5', margin: '0 24px' }} />
                  )}
                  <div>
                    <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 28, letterSpacing: '-1px', color: '#111', lineHeight: 1 }}>
                      {s.v}
                    </div>
                    <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 11.5, color: '#9ca3af', marginTop: 5, whiteSpace: 'pre-line' as const, lineHeight: 1.3 }}>
                      {s.l}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Launch note — matches Monotree's star rating row */}
            <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[0, 1, 2, 3].map(i => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 13, color: '#9ca3af' }}>
                Launching soon · no flat fee, ever
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT ── */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProductCards />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .cf-hero-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 24px 56px !important;
            gap: 52px !important;
          }
        }
      `}</style>
    </section>
  )
}
