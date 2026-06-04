import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — CODFLIP by The Growth Agency',
}

const sections = [
  {
    num: '1.',
    title: 'Who we are',
    body: 'The Growth Agency is a WhatsApp AI retention service for Shopify D2C brands, operated by Akash Kadadevaru, based in Mumbai, India. Registered contact: hello@thegrowthagency.in.',
  },
  {
    num: '2.',
    title: 'What data we collect',
    body: 'When you fill our audit request form, we collect your name, brand name, monthly order volume, annual revenue range, and your WhatsApp number or email address. We do not collect payment details on this website.',
  },
  {
    num: '3.',
    title: 'How we use your data',
    body: 'We use the information you provide solely to contact you about the free CAC audit you requested, assess whether your brand is a fit for our service, and send you the audit results. We do not sell, rent, or share your data with any third parties for marketing purposes.',
  },
  {
    num: '4.',
    title: 'WhatsApp communications',
    body: "If you become a client, your customers' data (order IDs, phone numbers, purchase history) is processed via WhatsApp Business API and your Shopify store in accordance with Meta's Business Platform Terms and Shopify's data policies. All messaging is TRAI/DLT compliant. We are a data processor on your behalf — you remain the data controller for your customer data.",
  },
  {
    num: '5.',
    title: 'Data storage',
    body: 'Form submissions are processed via Web3Forms (web3forms.com) and delivered to our inbox. We do not maintain a separate database of enquiries. Client data is stored on secure, access-controlled systems. We retain client data for as long as the engagement is active, plus 12 months after termination for legitimate business purposes.',
  },
  {
    num: '6.',
    title: 'Cookies',
    body: 'This website uses no tracking cookies or third-party analytics scripts. No cookie consent banner is needed. We do not use Google Analytics, Facebook Pixel, or any similar tracking.',
  },
  {
    num: '7.',
    title: 'Your rights',
    body: 'You may request access to, correction of, or deletion of any personal data we hold about you by emailing hello@thegrowthagency.in. We will respond within 7 business days.',
  },
  {
    num: '8.',
    title: 'Changes to this policy',
    body: 'We may update this policy to reflect changes in our practices or applicable law. The date at the top of this page indicates when it was last revised. Continued use of our service after changes constitutes acceptance.',
  },
  {
    num: '9.',
    title: 'Contact',
    body: 'For privacy-related queries: hello@thegrowthagency.in or WhatsApp +91 96642 00912.',
  },
]

export default function PrivacyPolicy() {
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
            Privacy Policy
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
