import type { Metadata } from 'next'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'FAQ | The Growth Agency & CODFLIP',
  description: 'Answers to common questions about The Growth Agency and CODFLIP, our Shopify app for converting COD orders to prepaid and reducing RTO.',
}

export default function Faq() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh', padding: '120px 24px 100px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* Back */}
        <a
          href="/"
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-3)', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '56px', textDecoration: 'none' }}
        >
          ← Back to home
        </a>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '16px' }}>
            The Growth Agency
          </p>
          <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(30px, 5vw, 52px)', color: 'var(--text)', lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-1.5px' }}>
            Frequently asked questions.
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.7, maxWidth: '560px' }}>
            Everything you need to know about how we work and how CODFLIP fits into your store.
          </p>
        </div>

        {/* Accordion */}
        <FaqAccordion />

        {/* Footer CTA */}
        <div
          style={{
            marginTop: '64px',
            padding: '32px',
            borderRadius: '16px',
            background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '20px', fontWeight: 700, color: 'var(--text)' }}>
            Still have a question?
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            Reach out and we are happy to help. Email support@thegrowthagency.in or message us on WhatsApp at +91 96642 00912.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '4px' }}>
            <a
              href="/#contact"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, color: '#0a0a0a', background: '#10B981', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none', display: 'inline-block' }}
            >
              Get in touch →
            </a>
            <a
              href="/codflip"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-2)', padding: '10px 22px', borderRadius: '8px', border: '1px solid var(--border)', textDecoration: 'none', display: 'inline-block' }}
            >
              See CODFLIP →
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}
