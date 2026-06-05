'use client'

import { usePathname } from 'next/navigation'

export default function AgencyBanner() {
  const pathname = usePathname()
  const isCodflip = pathname === '/codflip'

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center h-10 px-4 gap-2"
      style={{ background: 'var(--bg-2)' }}
    >
      {isCodflip ? (
        <>
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'var(--text-3)' }}>
            A product by
          </span>
          <a
            href="/"
            className="flex items-center gap-1.5 transition-colors duration-200"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#10B981')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect width="14" height="14" rx="3" fill="rgba(16,185,129,0.2)" />
              <path d="M3 7h5M5.5 5l2.5 2-2.5 2" stroke="#10B981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            The Growth Agency
          </a>
          <span style={{ color: 'var(--border)', fontSize: '12px' }}>·</span>
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'var(--text-4)' }}>
            India&apos;s leading D2C growth studio
          </span>
          <a
            href="/"
            className="hidden sm:inline transition-colors duration-200"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: 'var(--text-5)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#10B981')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-5)')}
          >
            thegrowthagency.in →
          </a>
        </>
      ) : (
        <>
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'var(--text-3)' }}>
            New:
          </span>
          <a
            href="/codflip"
            className="flex items-center gap-1.5 transition-colors duration-200"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#10B981')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect width="14" height="14" rx="3" fill="rgba(16,185,129,0.2)" />
              <path d="M3 7h5M5.5 5l2.5 2-2.5 2" stroke="#10B981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            CODFLIP
          </a>
          <span style={{ color: 'var(--border)', fontSize: '12px' }}>·</span>
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: 'var(--text-4)' }}>
            Reduce RTO by 35% with WhatsApp
          </span>
          <a
            href="/codflip"
            className="hidden sm:inline transition-colors duration-200"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: 'var(--text-5)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#10B981')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-5)')}
          >
            Install free →
          </a>
        </>
      )}
    </div>
  )
}
