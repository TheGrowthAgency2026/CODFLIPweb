'use client'

const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Install on Shopify', href: 'https://apps.shopify.com/codflip' },
]

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'thegrowthagency.in', href: 'https://thegrowthagency.in' },
  { label: 'Privacy Policy', href: '#' },
]

export default function Footer() {
  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '14px',
    color: '#6B7280',
    transition: 'color 0.2s',
    display: 'block',
  }

  return (
    <footer style={{ background: '#0a0a0a', padding: '48px 0 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-3 gap-10 pb-12">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="5" fill="rgba(16,185,129,0.15)" />
                <path d="M5 10h6M8 7l3 3-3 3" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="11" y="15" fontSize="8" fill="#10B981" fontWeight="bold">₹</text>
              </svg>
              <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '18px' }}>
                <span className="text-white">COD</span>
                <span style={{ color: '#10B981' }}>FLIP</span>
              </span>
            </a>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#4B5563', lineHeight: 1.6, maxWidth: '240px' }}>
              The smart COD-to-prepaid conversion tool for Indian D2C brands.
            </p>
            <a
              href="https://thegrowthagency.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#6B7280' }}
              className="hover-underline inline-block w-fit"
            >
              Built by The Growth Agency
            </a>
          </div>

          {/* Column 2 — Product */}
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 500, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
              PRODUCT
            </p>
            <ul className="flex flex-col gap-3">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 500, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
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
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6"
          style={{ paddingTop: '24px' }}
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#4B5563' }}>
            © 2025 CODFLIP · Built by{' '}
            <a
              href="https://thegrowthagency.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline"
              style={{ color: '#4B5563' }}
            >
              The Growth Agency
            </a>
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms'].map((t) => (
              <a
                key={t}
                href="#"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#4B5563', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4B5563')}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
