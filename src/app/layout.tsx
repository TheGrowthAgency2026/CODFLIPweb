import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CODFLIP — COD to Prepaid Conversion for Indian Shopify Brands',
  description:
    'Reduce RTO by 35%. Convert COD to prepaid automatically using smart WhatsApp nudges. Built for Indian D2C brands. Pay only when we flip.',
  keywords:
    'COD to prepaid, RTO reduction, Shopify India, D2C, WhatsApp conversion, return to origin',
  openGraph: {
    title: 'CODFLIP — Stop losing ₹6L/year to COD returns',
    description: 'Smart RTO prevention for Indian Shopify brands. Install free.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
