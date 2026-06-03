'use client'

export default function AgencyBanner() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center h-10 px-4 gap-2"
      style={{ background: '#0d0d0d' }}
    >
      <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#6B7280' }}>
        A product by
      </span>
      <a
        href="https://www.thegrowthagency.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 transition-colors duration-200"
        style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 600, color: '#fff' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#10B981')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <rect width="14" height="14" rx="3" fill="rgba(16,185,129,0.2)" />
          <path d="M3 7h5M5.5 5l2.5 2-2.5 2" stroke="#10B981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        The Growth Agency
      </a>
      <span style={{ color: '#2d2d2d', fontSize: '12px' }}>·</span>
      <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#4B5563' }}>
        India&apos;s leading D2C growth studio
      </span>
      <a
        href="https://www.thegrowthagency.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline transition-colors duration-200"
        style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#374151' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#10B981')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
      >
        thegrowthagency.in →
      </a>
    </div>
  )
}