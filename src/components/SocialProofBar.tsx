'use client'

const brands = [
  'FASHION D2C', 'SKINCARE', 'SUPPLEMENTS', 'ELECTRONICS', 'AYURVEDA',
  'HOME DECOR', 'ATHLEISURE', 'HAIRCARE', 'BABY CARE', 'NUTRITION',
  'FASHION D2C', 'SKINCARE', 'SUPPLEMENTS', 'ELECTRONICS', 'AYURVEDA',
  'HOME DECOR', 'ATHLEISURE', 'HAIRCARE', 'BABY CARE', 'NUTRITION',
]

export default function SocialProofBar() {
  return (
    <section
      style={{
        background: '#F5F5F5',
        padding: '44px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <p style={{
        textAlign: 'center',
        fontFamily: 'var(--font-dm-sans)',
        fontSize: 12, fontWeight: 500,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'rgba(0,0,0,0.38)', marginBottom: 24,
      }}>
        Built for every type of Shopify D2C store
      </p>

      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, zIndex: 1, background: 'linear-gradient(to right, #F5F5F5, transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, zIndex: 1, background: 'linear-gradient(to left, #F5F5F5, transparent)', pointerEvents: 'none' }} />

        <div style={{ display: 'flex', gap: 56, animation: 'logo-scroll 28s linear infinite', willChange: 'transform', width: 'max-content' }}>
          {brands.map((name, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 12,
              letterSpacing: '0.12em', color: 'rgba(0,0,0,0.25)',
              whiteSpace: 'nowrap', textTransform: 'uppercase',
            }}>
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logo-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
