import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — CODFLIP by The Growth Agency',
}

const sections = [
  {
    num: '1.',
    title: 'Service description',
    body: 'The Growth Agency ("we", "us") provides WhatsApp-based AI retention automation for Shopify D2C brands. Services include agent setup, WhatsApp Business API integration, Shopify sync, ongoing agent management, and periodic CAC reporting. The specific scope is defined in the engagement agreement signed before onboarding.',
  },
  {
    num: '2.',
    title: 'Free audit',
    body: 'The free CAC audit offered on this website is a 30-minute advisory session, not a binding contract. No payment is required, and no service agreement is formed, until both parties sign a separate engagement letter.',
  },
  {
    num: '3.',
    title: 'Fees and payment',
    body: 'The Starter plan is priced at ₹25,000/month. Full system pricing is custom-quoted. Invoices are issued monthly in advance. Payment is due within 7 days of invoice. Failure to pay within 14 days may result in suspension of agents. All prices are exclusive of GST where applicable.',
  },
  {
    num: '4.',
    title: '30-day guarantee',
    body: 'If your effective CAC does not show measurable improvement within 30 days of agent go-live, month 2 is provided at no charge. "Measurable improvement" means a statistically significant reduction in cart abandonment rate, RTO rate, or an increase in second-order rate, as tracked in your weekly CAC dashboard. This guarantee applies to the Starter plan and is void if you have materially interfered with the agents\' operation or if Shopify/WhatsApp API access was restricted.',
  },
  {
    num: '5.',
    title: 'Cancellation',
    body: 'You may cancel at any time with 7 days written notice to hello@thegrowthagency.in. No cancellation fee applies after month 1. Amounts paid for the current billing period are non-refundable except as covered by the 30-day guarantee clause above.',
  },
  {
    num: '6.',
    title: 'Client obligations',
    body: "You agree to provide Shopify read-only API access and a valid WhatsApp Business number. You are responsible for ensuring your business is registered on DLT before message template submission (we assist with this process but you remain the registered principal entity). You must not use our service to send content that violates WhatsApp's Business Messaging Policy or Indian telecommunications law.",
  },
  {
    num: '7.',
    title: 'Intellectual property',
    body: 'All agent architectures, prompt systems, automation workflows, and proprietary methodologies remain the intellectual property of The Growth Agency. You retain ownership of your customer data and brand content.',
  },
  {
    num: '8.',
    title: 'Limitation of liability',
    body: 'Our total liability to you for any claim arising under or related to this service is limited to the fees paid in the 3 months preceding the claim. We are not liable for indirect, incidental, or consequential damages including lost revenue, lost profits, or business interruption. We are not liable for WhatsApp platform outages, Meta policy changes, or Shopify service interruptions.',
  },
  {
    num: '9.',
    title: 'Governing law',
    body: 'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.',
  },
  {
    num: '10.',
    title: 'Contact',
    body: 'For queries about these terms: hello@thegrowthagency.in or WhatsApp +91 96642 00912.',
  },
]

export default function Terms() {
  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh', padding: '120px 24px 80px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        {/* Back */}
        <a
          href="/"
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#6B7280', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '48px', textDecoration: 'none' }}
        >
          ← Back to home
        </a>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '16px' }}>
            CODFLIP by The Growth Agency
          </p>
          <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', color: '#fff', lineHeight: 1.1, marginBottom: '12px' }}>
            Terms of Service
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#4B5563' }}>
            Last updated: April 2026
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {sections.map((s) => (
            <div key={s.num}>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '18px', color: '#fff', marginBottom: '10px' }}>
                {s.num} {s.title}
              </h2>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#9CA3AF', lineHeight: 1.8 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
