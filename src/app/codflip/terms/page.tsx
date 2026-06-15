import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — CODFLIP Shopify App',
  description: 'Terms governing use of the CODFLIP Shopify app, including pricing, billing, and obligations.',
}

const sections = [
  {
    num: '1.',
    title: 'What CODFLIP does',
    body: 'CODFLIP is a Shopify app that identifies high-risk COD orders using a risk-scoring model, sends a targeted WhatsApp offer to the customer with a discount incentive and a UPI payment link, and marks the order as prepaid when the customer completes payment. The app is developed and operated by The Growth Agency (Mumbai, India).',
  },
  {
    num: '2.',
    title: 'Plans and pricing',
    body: 'Free plan: process up to 50 COD orders per billing period at no charge. Includes WhatsApp nudge, flat discount configuration, basic send delay, conversion tracking, and the RTO Cost Estimator. Pro plan: ₹999 per month (billed via Shopify) plus a 3% commission on the total order value of every successfully flipped order. Pro includes unlimited COD orders, the full 3-message sequence, smart incentive formula, custom quiet hours, offer expiry countdown, per-product timing rules, checkout OTP gate, WhatsApp delivery tracking, and priority support. A 7-day free trial is available for new Pro subscribers. All prices exclude GST where applicable.',
  },
  {
    num: '3.',
    title: 'What counts as a successful flip',
    body: 'A flip is counted as successful when a customer who received a CODFLIP WhatsApp offer completes prepaid payment via the UPI link within the offer validity window. The 3% commission is charged on the total order value of that order (the order value at the time of placement, not the discounted value). If the customer cancels or returns the order after converting, the commission is not refunded, as the conversion event has already occurred.',
  },
  {
    num: '4.',
    title: 'Billing',
    body: 'The ₹999 Pro subscription is billed through Shopify\'s app billing system on a 30-day cycle. The 3% commission on successful flips is tallied monthly and charged as a usage charge via the same Shopify billing system. You will receive a billing summary in your Shopify admin. CODFLIP does not store or process payment card information; all billing is handled by Shopify.',
  },
  {
    num: '5.',
    title: 'Cancellation',
    body: 'You may cancel the Pro plan or uninstall CODFLIP at any time from your Shopify admin. Cancellation takes effect at the end of the current billing period. The ₹999 monthly fee paid for the current period is non-refundable. Commissions already accrued for successful flips in the current period will be charged at the next billing date. There is no minimum commitment and no cancellation fee.',
  },
  {
    num: '6.',
    title: 'Your obligations',
    body: 'To use CODFLIP you must: maintain an active Shopify store, connect a WhatsApp Business number registered with an approved BSP (Business Solution Provider), complete DLT registration for your message templates as required by TRAI (we assist with this process), and ensure your customers have opted in to receive WhatsApp communications in accordance with applicable law. You must not use CODFLIP to send content that violates WhatsApp\'s Business Messaging Policy, Indian telecommunications law, or Shopify\'s Partner Program Agreement.',
  },
  {
    num: '7.',
    title: 'Service availability',
    body: 'We aim for high availability but do not guarantee uninterrupted service. CODFLIP depends on Shopify\'s webhook infrastructure and Meta\'s WhatsApp Business API. Outages caused by either platform are outside our control. We will communicate planned maintenance via the app dashboard with reasonable notice.',
  },
  {
    num: '8.',
    title: 'Limitation of liability',
    body: 'Our total liability for any claim related to CODFLIP is limited to the fees paid by you in the 3 months preceding the claim. We are not liable for indirect, incidental, or consequential losses including lost revenue, lost conversions, or business interruption. We are not liable for WhatsApp platform outages, Meta policy changes, Shopify service interruptions, or customer non-response to WhatsApp messages.',
  },
  {
    num: '9.',
    title: 'Intellectual property',
    body: 'The CODFLIP app, its risk-scoring model, message sequencing logic, and all proprietary workflows remain the intellectual property of The Growth Agency. You retain ownership of your store data, customer data, and brand content. You grant us a limited licence to process your store data solely to operate CODFLIP on your behalf.',
  },
  {
    num: '10.',
    title: 'Changes to these terms',
    body: 'We will notify active CODFLIP stores via Shopify admin notification or email at least 14 days before material changes to these terms take effect. Continued use of the app after the effective date constitutes acceptance of the revised terms.',
  },
  {
    num: '11.',
    title: 'Governing law',
    body: 'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.',
  },
  {
    num: '12.',
    title: 'Contact',
    body: 'For queries about these terms: support@thegrowthagency.in · WhatsApp +91 96642 00912.',
  },
]

export default function CodflipTerms() {
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
            Terms of Service
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
