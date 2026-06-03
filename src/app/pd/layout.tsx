import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CODFLIP — Turn COD Orders Into Prepaid Revenue',
  description:
    'Detect high-risk COD orders and convert them to prepaid via WhatsApp. Reduce RTO by 35%. Built for Indian Shopify brands.',
}

export default function PdLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={inter.variable}
      style={{
        fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: '#FAFBFA',
        minHeight: '100vh',
        color: '#191c1c',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
