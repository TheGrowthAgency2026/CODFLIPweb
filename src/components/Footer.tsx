'use client'

import { usePathname } from 'next/navigation'

const productLinks = [
  { label: 'Features', href: '/codflip#features' },
  { label: 'Pricing', href: '/codflip#pricing' },
  { label: 'How It Works', href: '/codflip#how-it-works' },
  { label: 'Install on Shopify', href: 'https://apps.shopify.com/codflip' },
]

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  const pathname = usePathname()
  const isCodflip = pathname === '/codflip'

  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '14px',
    color: 'var(--text-3)',
    transition: 'color 0.2s',
    display: 'block',
  }

  return (
    <footer style={{ background: 'var(--bg)', padding: '48px 0 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-3 gap-10 pb-12">

          <div className="flex flex-col gap-4">
            {isCodflip ? (
              <a href="/codflip" className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="5" fill="rgba(16,185,129,0.15)" />
                  <path d="M5 10h6M8 7l3 3-3 3" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="11" y="15" fontSize="8" fill="#10B981" fontWeight="bold">₹</text>
                </svg>
                <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '18px' }}>
                  <span style={{ color: 'var(--text)' }}>COD</span>
                  <span style={{ color: '#10B981' }}>FLIP</span>
                </span>
              </a>
            ) : (
              <a href="/" className="flex items-center gap-2">
                <div style={{ width: 24, height: 24, borderRadius: 6, background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h5M5 4.5l2.5 2.5L5 9.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '16px', color: 'var(--text)' }}>
                  The Growth Agency
                </span>
              </a>
            )}

            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-4)', lineHeight: 1.6, maxWidth: '240px' }}>
              {isCodflip
                ? 'The smart COD-to-prepaid conversion tool for Indian D2C brands.'
                : "India's D2C growth studio. Shopify apps, WhatsApp retention, CRO, and performance marketing."}
            </p>

            {isCodflip && (
              <a
                href="/"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-3)' }}
                className="hover-underline inline-block w-fit"
              >
                Built by The Growth Agency
              </a>
            )}
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 500, color: 'var(--text-2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
              CODFLIP
            </p>
            <ul className="flex flex-col gap-3">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-3)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 500, color: 'var(--text-2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
              COMPANY
            </p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-3)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6" style={{ paddingTop: '24px' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-4)' }}>
            {isCodflip ? (
              <>
                © 2025 CODFLIP · Built by{' '}
                <a
                  href="/"
                  className="hover-underline"
                  style={{ color: 'var(--text-4)' }}
                >
                  The Growth Agency
                </a>
              </>
            ) : (
              <>© 2025 The Growth Agency · Mumbai, India</>
            )}
          </p>
          <div className="flex items-center gap-5">
            {[{ label: 'Privacy Policy', href: '/privacy-policy' }, { label: 'Terms', href: '/terms' }].map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-4)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-2)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-4)')}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
