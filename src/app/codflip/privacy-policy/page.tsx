import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — CODFLIP Shopify App',
  description: 'How CODFLIP collects, uses, and protects data processed through the Shopify app.',
}

const sections = [
  {
    num: '1.',
    title: 'Who we are',
    body: 'CODFLIP is a Shopify app developed and operated by The Growth Agency, based in Mumbai, India. Registered contact: support@thegrowthagency.in. This policy covers data processed by the CODFLIP Shopify app specifically. For The Growth Agency\'s agency services policy, see thegrowthagency.in/privacy-policy.',
  },
  {
    num: '2.',
    title: 'Data we access from your Shopify store',
    body: 'When you install CODFLIP, we request access to: order data (order ID, total value, payment method, COD flag, fulfillment status), customer phone numbers (used solely to send WhatsApp conversion messages), and store configuration (currency, timezone, webhook endpoints). We request only the scopes necessary to operate the service. We do not access product inventory, financial reports, or customer email addresses.',
  },
  {
    num: '3.',
    title: 'How we use your data',
    body: 'Order data is used to: compute an RTO risk score for each COD order, determine whether to send a conversion message, generate the WhatsApp offer with the correct discount and payment link, and track whether the order was successfully converted to prepaid. Customer phone numbers are used exclusively to send the CODFLIP WhatsApp message sequence to that customer. We do not use customer data for any purpose outside your store\'s COD conversion workflow.',
  },
  {
    num: '4.',
    title: 'WhatsApp message delivery',
    body: 'Messages are sent via WhatsApp Business API, operated by Meta Platforms Inc. Your customer\'s phone number and first name are transmitted to Meta\'s servers to deliver the message. All message templates are pre-approved through DLT (Distributed Ledger Technology) registration as required by TRAI regulations. We are a data processor on your behalf: you remain the data controller for your customers\' data, and your use of CODFLIP is subject to your own privacy obligations toward your customers.',
  },
  {
    num: '5.',
    title: 'Commission and billing data',
    body: 'For Pro plan stores, we record the order ID, order value, and conversion timestamp for each successful flip to calculate the 3% commission charge. This billing data is retained for 7 years for accounting and audit purposes. Subscription billing is handled by Shopify\'s billing API; we do not store payment card details.',
  },
  {
    num: '6.',
    title: 'Data storage and security',
    body: 'Order records and conversion logs are stored on access-controlled servers hosted in India. We do not sell, rent, or share your store\'s data or your customers\' data with any third party except: Meta (for WhatsApp delivery), Shopify (for webhook processing and billing), and our payment processor. Access to production data is restricted to engineers who require it to operate and support the service.',
  },
  {
    num: '7.',
    title: 'Data retention after uninstall',
    body: 'When you uninstall CODFLIP, we stop processing new webhook events within 24 hours. Conversion logs and billing records are retained for 7 years as required for tax compliance. Customer phone numbers are deleted within 30 days of uninstall. You may request accelerated deletion by emailing support@thegrowthagency.in.',
  },
  {
    num: '8.',
    title: 'Cookies and analytics',
    body: 'The CODFLIP app dashboard uses no third-party analytics or advertising cookies. This website (codflip page on thegrowthagency.in) uses no tracking scripts. No cookie consent banner is required.',
  },
  {
    num: '9.',
    title: 'Your rights',
    body: 'You may request a copy of all data we hold about your store, correction of inaccurate records, or deletion of data not subject to retention obligations, by emailing support@thegrowthagency.in. We will respond within 7 business days. If you are a customer of a store using CODFLIP and wish to opt out of future WhatsApp messages, reply STOP to any CODFLIP message.',
  },
  {
    num: '10.',
    title: 'Changes to this policy',
    body: 'We will notify active CODFLIP stores by email at least 14 days before material changes to this policy take effect. The date at the top of this page indicates the last revision. Continued use of the app after the effective date constitutes acceptance.',
  },
  {
    num: '11.',
    title: 'Contact',
    body: 'For privacy queries related to the CODFLIP app: support@thegrowthagency.in · WhatsApp +91 96642 00912.',
  },
]

export default function CodflipPrivacyPolicy() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh', padding: '120px 24px 80px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        <a
          href="/codflip"
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-3)', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '48px', textDecoration: 'none' }}
        >
          ← Back to CODFLIP
        </a>

        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '16px' }}>
            CODFLIP — Shopify App
          </p>
          <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text)', lineHeight: 1.1, marginBottom: '12px' }}>
            Privacy Policy
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-4)' }}>
            Last updated: June 2026
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {sections.map((s) => (
            <div key={s.num}>
              <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '18px', color: 'var(--text)', marginBottom: '10px' }}>
                {s.num} {s.title}
              </h2>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.8 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
