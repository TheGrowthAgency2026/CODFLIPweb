import { DM_Sans, Instrument_Serif } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-codflip-dm',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export default function CodflipLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${dmSans.variable} ${instrumentSerif.variable}`}
      style={{ '--font-dm-sans': 'var(--font-codflip-dm)' } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
