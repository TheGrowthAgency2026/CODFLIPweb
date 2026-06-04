const brands = [
  'Heads Up For Tails',
  'The Souled Store',
  'Bombay Shaving Company',
  'Noise',
  'Wakefit',
  'Mamaearth',
  'WOW Skin',
  'boAt',
  'Plum',
  'Sugar Cosmetics',
]

export default function SocialProofBar() {
  const items = [...brands, ...brands]

  return (
    <div
      className="w-full overflow-hidden"
      style={{ background: 'var(--bg-2)', padding: '20px 0' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex items-center gap-8">
        <p
          className="shrink-0"
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-4)', whiteSpace: 'nowrap' }}
        >
          Trusted by India&apos;s fastest-growing D2C brands
        </p>

        <div className="overflow-hidden flex-1">
          <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
            {items.map((brand, i) => (
              <span key={i} className="flex items-center gap-3">
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 500, color: 'var(--text-3)' }}>
                  {brand}
                </span>
                <span style={{ color: '#10B981', fontSize: '10px' }}>●</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
