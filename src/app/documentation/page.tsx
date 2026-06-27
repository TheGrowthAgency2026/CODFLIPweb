import type { Metadata } from 'next'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation — CODFLIP by The Growth Agency',
}

type Plan = 'Free' | 'Pro'

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-syne)',
  fontWeight: 700,
  fontSize: '22px',
  color: 'var(--text)',
  marginBottom: '10px',
}

const h3Style: React.CSSProperties = {
  fontFamily: 'var(--font-syne)',
  fontWeight: 700,
  fontSize: '16px',
  color: 'var(--text)',
}

const pStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '15px',
  color: 'var(--text-2)',
  lineHeight: 1.8,
}

const liStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '15px',
  color: 'var(--text-2)',
  lineHeight: 1.7,
}

function PlanBadge({ plans }: { plans: Plan[] }) {
  return (
    <div style={{ display: 'flex', gap: '6px' }}>
      {plans.map((p) => (
        <span
          key={p}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '11px',
            fontWeight: 600,
            color: p === 'Pro' ? '#10B981' : 'var(--text-3)',
            background: p === 'Pro' ? 'var(--bg-pro)' : 'var(--bg-3)',
            border: `1px solid ${p === 'Pro' ? 'var(--border-a)' : 'var(--border)'}`,
            borderRadius: '999px',
            padding: '2px 10px',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          {p}
        </span>
      ))}
    </div>
  )
}

function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '10px', marginTop: '14px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: 'var(--bg-2)' }}>
            {headers.map((h) => (
              <th
                key={h}
                style={{
                  textAlign: 'left',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--text-2)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  padding: '10px 14px',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderTop: i === 0 ? undefined : '1px solid var(--border)' }}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: j === 0 ? 'var(--text)' : 'var(--text-2)',
                    fontWeight: j === 0 ? 500 : 400,
                    padding: '10px 14px',
                    lineHeight: 1.6,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Note({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p style={{ ...pStyle, fontSize: '13px', color: 'var(--text-3)', marginTop: '12px' }}>
      <strong style={{ color: 'var(--text-2)', fontWeight: 600 }}>{label}</strong> {children}
    </p>
  )
}

function Example({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        marginTop: '14px',
        padding: '12px 16px',
        borderRadius: '8px',
        background: 'var(--bg-3)',
        borderLeft: '2px solid #10B981',
      }}
    >
      <p style={{ ...pStyle, fontSize: '13.5px', margin: 0 }}>
        <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Example. </strong>
        {children}
      </p>
    </div>
  )
}

function AnchorLink({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <a href={`#${id}`} style={{ color: '#10B981', textDecoration: 'none' }} className="hover-underline">
      {children}
    </a>
  )
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ listStyle: 'disc', paddingLeft: '22px', marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map((item, i) => (
        <li key={i} style={liStyle}>
          {item}
        </li>
      ))}
    </ul>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ scrollMarginTop: '100px' }}>
      <h2 style={h2Style}>{title}</h2>
      {children}
    </section>
  )
}

function SubSection({
  id,
  title,
  plans,
  children,
}: {
  id: string
  title: string
  plans: Plan[]
  children: React.ReactNode
}) {
  return (
    <div id={id} style={{ scrollMarginTop: '100px', marginTop: '28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <h3 style={h3Style}>{title}</h3>
        <PlanBadge plans={plans} />
      </div>
      {children}
    </div>
  )
}

const toc: { id: string; label: string; children?: { id: string; label: string }[] }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'plans', label: 'Plans' },
  {
    id: 'core',
    label: 'Core',
    children: [
      { id: 'automatic-nudge', label: 'Automatic Nudge' },
      { id: 'flat-discount', label: 'Flat Discount' },
      { id: 'checkout-banner', label: 'Checkout Banner' },
    ],
  },
  {
    id: 'messaging',
    label: 'Messaging',
    children: [
      { id: 'message-quota', label: 'Message Quota' },
      { id: 'expiry-reminder', label: 'Expiry Reminder' },
      { id: 'quiet-hours', label: 'Quiet Hours' },
      { id: 'per-product-timing-rules', label: 'Per-Product Timing Rules' },
    ],
  },
  {
    id: 'incentive-engine',
    label: 'Incentive Engine',
    children: [
      { id: 'variable-discount-formula', label: 'Variable Discount Formula' },
      { id: 'per-product-cogs', label: 'Per-Product COGS' },
    ],
  },
  {
    id: 'checkout-controls',
    label: 'Checkout Controls',
    children: [
      { id: 'partial-cod', label: 'Partial COD' },
      { id: 'cod-fee', label: 'COD Fee' },
      { id: 'otp-verification', label: 'OTP Verification' },
    ],
  },
  {
    id: 'dashboards',
    label: 'Dashboards',
    children: [
      { id: 'dashboard', label: 'Dashboard' },
      { id: 'cod-orders', label: 'COD Orders' },
      { id: 'savings-dashboard', label: 'Savings Dashboard' },
    ],
  },
  { id: 'setup', label: 'Setup' },
  { id: 'data-privacy', label: 'Data & Privacy' },
  { id: 'glossary', label: 'Glossary' },
]

export default function Documentation() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh', padding: '120px 24px 80px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Back */}
        <a
          href="/codflip"
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-3)', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '48px', textDecoration: 'none' }}
        >
          ← Back to CODFLIP
        </a>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '16px' }}>
            CODFLIP by The Growth Agency
          </p>
          <h1 style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text)', lineHeight: 1.1, marginBottom: '12px' }}>
            Documentation
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-4)' }}>
            Last updated: April 2026
          </p>
          <p style={{ ...pStyle, fontSize: '16px', marginTop: '20px', maxWidth: '680px' }}>
            FlipCOD (COD to Prepaid) is a Shopify app that converts Cash on Delivery orders to prepaid by sending
            customers a discounted, one-tap payment link over WhatsApp. This page documents every feature, setting,
            and dashboard available across the Free and Pro plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-14">
          {/* TOC */}
          <details
            className="group md:sticky md:top-[100px]"
            open
            style={{
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '20px',
              background: 'var(--bg-2)',
              alignSelf: 'start',
              height: 'fit-content',
            }}
          >
            <summary
              className="flex items-center justify-between cursor-pointer md:cursor-default list-none [&::-webkit-details-marker]:hidden [&::marker]:hidden"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              Contents
              <ChevronDown size={14} className="transition-transform duration-200 group-open:rotate-180 md:hidden" />
            </summary>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '14px' }}>
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', fontWeight: 600, color: 'var(--text-2)', textDecoration: 'none', display: 'block', padding: '3px 0' }}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '2px', paddingLeft: '12px' }}>
                      {item.children.map((c) => (
                        <li key={c.id}>
                          <a
                            href={`#${c.id}`}
                            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-3)', textDecoration: 'none', display: 'block', padding: '2px 0' }}
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </details>

          {/* Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '52px', minWidth: 0 }}>

            <Section id="overview" title="Overview">
              <p style={pStyle}>
                FlipCOD listens for new orders on a connected Shopify store. For every order placed as Cash on
                Delivery (COD), it runs the following sequence:
              </p>
              <Table
                headers={['Step', 'Action']}
                rows={[
                  ['1', 'Estimate the Return-to-Origin (RTO) cost exposure for the order'],
                  ['2', 'Calculate a discount amount for that customer'],
                  ['3', 'Send a WhatsApp message containing the discount and a payment link'],
                  ['4', 'Record the outcome (sent / failed / converted)'],
                ]}
              />
              <p style={{ ...pStyle, marginTop: '16px' }}>
                A second, independent path operates at checkout, before an order is even placed: customers who
                select COD see a banner offering an online-payment discount; accepting it applies a discount code
                and completes checkout as prepaid.
              </p>
              <p style={{ ...pStyle, marginTop: '12px' }}>
                Both paths write to the same conversion and analytics records.
              </p>
            </Section>

            <Section id="plans" title="Plans">
              <Table
                headers={['', 'Free', 'Pro']}
                rows={[
                  ['Price', '₹0/month', '₹1,199/month (~$13 USD)'],
                  ['Trial', '—', '7 days'],
                  ['WhatsApp messages / billing cycle', '20', '250'],
                  ['Overage rate after quota', '₹1.50/message', '₹1.20/message'],
                  ['Billing cycle length', '30 days', '30 days'],
                  ['Support', 'Standard', 'Priority'],
                ]}
              />
              <p style={{ ...pStyle, marginTop: '16px' }}>
                Overage is billed automatically through the merchant&apos;s existing Shopify account; no separate
                payment method is collected.
              </p>
              <p style={{ ...pStyle, marginTop: '12px' }}>
                Cancelling Pro retains full Pro access until the current billing period ends, then the shop is moved
                to Free automatically. No data is lost on downgrade.
              </p>
              <Note label="No commission:">
                Neither plan charges a percentage fee or per-order commission on converted orders. Pricing is a flat
                monthly fee (₹0 on Free, ₹1,199 on Pro) plus the per-message overage rate once a billing cycle&apos;s
                message quota is used up.
              </Note>
              <Example>
                A Pro store sends 310 WhatsApp messages in a billing cycle. The first 250 are covered by the plan;
                the remaining 60 are billed at ₹1.20 each (₹72 total), added to the ₹1,199 flat fee on the next
                Shopify invoice.
              </Example>
            </Section>

            <Section id="core" title="Core">
              <p style={pStyle}>Available on both plans.</p>

              <SubSection id="automatic-nudge" title="Automatic Nudge" plans={['Free', 'Pro']}>
                <p style={pStyle}>
                  Sends a WhatsApp message to the customer after a COD order is placed, offering a discount to pay
                  online instead.
                </p>
                <Table
                  headers={['Setting', 'Description']}
                  rows={[
                    ['Delay', 'Time between order placement and message send (0–10 hours)'],
                    ['Template', 'Default message, or a custom WhatsApp template'],
                  ]}
                />
                <Note label="See also:">
                  <AnchorLink id="expiry-reminder">Expiry Reminder</AnchorLink>,{' '}
                  <AnchorLink id="quiet-hours">Quiet Hours</AnchorLink>
                </Note>
                <Example>
                  Delay is set to 2 hours with the default template. A customer places a COD order at 3:00 PM; at
                  5:00 PM they receive a WhatsApp message with their discount and a one-tap UPI payment link.
                </Example>
              </SubSection>

              <SubSection id="flat-discount" title="Flat Discount" plans={['Free', 'Pro']}>
                <p style={pStyle}>
                  A fixed discount applied identically to every order — either a percentage or a flat ₹ amount.
                </p>
                <Table
                  headers={['Setting', 'Description']}
                  rows={[
                    ['Type', 'Percentage or fixed ₹ amount'],
                    ['Value', 'The discount magnitude'],
                  ]}
                />
                <p style={{ ...pStyle, marginTop: '12px' }}>
                  On Pro, this can be replaced by the{' '}
                  <AnchorLink id="variable-discount-formula">Variable Discount Formula</AnchorLink>.
                </p>
                <Example>
                  Type is set to Percentage at 10%. Every customer who switches from COD to prepaid sees the same
                  10% discount applied automatically, regardless of order value or RTO risk.
                </Example>
              </SubSection>

              <SubSection id="checkout-banner" title="Checkout Banner" plans={['Free', 'Pro']}>
                <p style={pStyle}>
                  A banner shown at checkout when a customer selects Cash on Delivery, offering the same discount to
                  switch to prepaid before the order is placed.
                </p>
                <p style={{ ...pStyle, marginTop: '12px', fontWeight: 600, color: 'var(--text)' }}>Behavior:</p>
                <List
                  items={[
                    'Triggers only when COD is the selected payment method.',
                    'Accepting the offer applies a discount code automatically; no manual code entry.',
                    'Orders converted this way do not also receive a post-order WhatsApp nudge.',
                  ]}
                />
                <Note label="Why this matters:">
                  Converting at checkout is cheaper than converting after the fact — it uses zero WhatsApp message
                  quota and skips RTO risk scoring entirely, since the order is never placed as COD.
                </Note>
              </SubSection>
            </Section>

            <Section id="messaging" title="Messaging">
              <SubSection id="message-quota" title="Message Quota" plans={['Free', 'Pro']}>
                <p style={pStyle}>
                  Each billing cycle includes a fixed number of WhatsApp messages at no extra charge. Messages
                  beyond that quota are billed per message through Shopify.
                </p>
                <Table
                  headers={['Plan', 'Included / cycle', 'Rate after quota']}
                  rows={[
                    ['Free', '20', '₹1.50'],
                    ['Pro', '250', '₹1.20'],
                  ]}
                />
                <p style={{ ...pStyle, marginTop: '12px' }}>
                  The quota resets every 30 days. Unused messages do not carry over to the next cycle.
                </p>
                <Note label="Billing:">
                  Overage is invoiced automatically through the merchant&apos;s Shopify account at the end of each
                  calendar month — there is no separate payment method to set up, and no order-value-based fee.
                  Every message type counts against the quota, including <AnchorLink id="automatic-nudge">Automatic
                  Nudge</AnchorLink>, <AnchorLink id="expiry-reminder">Expiry Reminder</AnchorLink>, and{' '}
                  <AnchorLink id="otp-verification">OTP Verification</AnchorLink>.
                </Note>
              </SubSection>

              <SubSection id="expiry-reminder" title="Expiry Reminder" plans={['Pro']}>
                <p style={pStyle}>
                  Sends a second WhatsApp message shortly before a customer&apos;s discount offer expires.
                </p>
                <Table
                  headers={['Setting', 'Description']}
                  rows={[
                    ['Offer validity window', 'How long the discount remains valid after the first message'],
                    ['Reminder lead time', 'How long before expiry the reminder is sent'],
                  ]}
                />
                <Note label="Depends on:">
                  <AnchorLink id="automatic-nudge">Automatic Nudge</AnchorLink> being active.
                </Note>
                <Example>
                  Offer validity is 24 hours and reminder lead time is 4 hours. A customer who receives the first
                  nudge at 10:00 AM gets a reminder at 6:00 AM the next day, 4 hours before the discount lapses at
                  10:00 AM.
                </Example>
              </SubSection>

              <SubSection id="quiet-hours" title="Quiet Hours" plans={['Pro']}>
                <p style={pStyle}>
                  Defines a time window during which outgoing WhatsApp messages are held rather than sent
                  immediately. Held messages are released as soon as the window ends.
                </p>
                <Table
                  headers={['Setting', 'Description']}
                  rows={[
                    ['Start time', 'Window start (store local time)'],
                    ['End time', 'Window end (store local time)'],
                  ]}
                />
                <Note label="Overridable by:">
                  <AnchorLink id="per-product-timing-rules">Per-Product Timing Rules</AnchorLink>.
                </Note>
                <Example>
                  Quiet Hours is set from 11:00 PM to 7:00 AM. An order placed at 11:40 PM holds its nudge until
                  7:00 AM the next morning instead of sending overnight.
                </Example>
              </SubSection>

              <SubSection id="per-product-timing-rules" title="Per-Product Timing Rules" plans={['Pro']}>
                <p style={pStyle}>
                  Overrides <AnchorLink id="quiet-hours">Quiet Hours</AnchorLink> for specific products, product
                  types, or order tags, so selected orders can still be nudged immediately.
                </p>
                <Table
                  headers={['Setting', 'Description']}
                  rows={[
                    ['Match criteria', 'Product, product type, or tag'],
                    ['Override behavior', 'Send immediately regardless of Quiet Hours'],
                  ]}
                />
                <Example>
                  A flash-sale product is tagged <code>flash-sale</code>. Orders for that tag still get nudged at
                  1:00 AM even while Quiet Hours is active, since time-sensitive offers lose value if delayed.
                </Example>
              </SubSection>
            </Section>

            <Section id="incentive-engine" title="Incentive Engine">
              <SubSection id="variable-discount-formula" title="Variable Discount Formula" plans={['Pro']}>
                <p style={pStyle}>
                  Replaces the <AnchorLink id="flat-discount">Flat Discount</AnchorLink> with a per-order calculation
                  based on RTO risk, order value, and customer history.
                </p>
                <p style={{ ...pStyle, marginTop: '12px', fontWeight: 600, color: 'var(--text)' }}>Inputs:</p>
                <List
                  items={[
                    'RTO cost estimate for the order',
                    'Order value',
                    'Customer history (new vs. repeat, lifetime value)',
                    'Postcode risk',
                  ]}
                />
                <p style={{ ...pStyle, marginTop: '16px' }}>
                  <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Configurable parameters:</strong> 13
                  total, including base rate, customer-type uplifts, postcode risk multipliers, ceilings, and a
                  floor. Output is rounded to the nearest ₹5.
                </p>
                <Note label="Depends on:">
                  <AnchorLink id="per-product-cogs">Per-Product COGS</AnchorLink> for margin-accurate ceilings (falls
                  back to an estimated margin if unavailable).
                </Note>
                <Example>
                  A repeat customer in a low-risk postcode orders ₹1,200 of products with an estimated RTO cost of
                  ₹210. The formula weighs the RTO cost against the order value and customer-type uplift, then caps
                  the result against the order&apos;s margin ceiling — producing a discount of, say, ₹85, rounded to
                  the nearest ₹5.
                </Example>
              </SubSection>

              <SubSection id="per-product-cogs" title="Per-Product COGS" plans={['Pro']}>
                <p style={pStyle}>
                  Syncs per-variant cost of goods sold (COGS) from Shopify&apos;s inventory data, so the{' '}
                  <AnchorLink id="variable-discount-formula">Variable Discount Formula</AnchorLink> and RTO estimates
                  use real product margins instead of a single store-wide estimate.
                </p>
                <p style={{ ...pStyle, marginTop: '12px' }}>
                  Without this synced, the formula falls back to a single estimated margin across the whole store,
                  which can over- or under-discount products whose actual margins differ significantly from that
                  average.
                </p>
              </SubSection>
            </Section>

            <Section id="checkout-controls" title="Checkout Controls">
              <SubSection id="partial-cod" title="Partial COD" plans={['Pro']}>
                <p style={pStyle}>
                  Lets a customer pay part of the order online at checkout and the remainder in cash on delivery.
                </p>
                <Table
                  headers={['Setting', 'Description']}
                  rows={[['Advance percentage', 'Share of the order value collected online upfront']]}
                />
                <p style={{ ...pStyle, marginTop: '12px' }}>
                  Shown as one of the payment options in the checkout payment picker, alongside Full Payment, Plain
                  COD, and COD with Fee.
                </p>
                <Example>
                  Advance percentage is set to 30%. A ₹2,000 order requires a ₹600 UPI payment at checkout, with the
                  remaining ₹1,400 collected as cash on delivery.
                </Example>
              </SubSection>

              <SubSection id="cod-fee" title="COD Fee" plans={['Pro']}>
                <p style={pStyle}>Adds a fixed handling charge to orders paid by Cash on Delivery.</p>
                <Table
                  headers={['Setting', 'Description']}
                  rows={[['Fee amount', 'Fixed ₹ surcharge applied to COD orders']]}
                />
                <p style={{ ...pStyle, marginTop: '12px' }}>
                  Appears as a separate line item at checkout. Tracked per order, separated by delivered vs. RTO
                  outcome.
                </p>
                <Note label="Why this matters:">
                  Even a small COD fee (₹20–₹50) nudges price-sensitive customers toward the{' '}
                  <AnchorLink id="checkout-banner">Checkout Banner</AnchorLink> prepaid offer, while offsetting some
                  of the RTO cost on COD orders that go through anyway.
                </Note>
              </SubSection>

              <SubSection id="otp-verification" title="OTP Verification" plans={['Pro']}>
                <p style={pStyle}>
                  Requires the customer to verify their WhatsApp number with a one-time password before a COD order
                  is confirmed.
                </p>
                <p style={{ ...pStyle, marginTop: '12px', fontWeight: 600, color: 'var(--text)' }}>Behavior:</p>
                <List
                  items={[
                    'OTP sent via WhatsApp at checkout.',
                    'Order confirmation blocked until the OTP is verified.',
                    'Verification rate tracked per shop.',
                  ]}
                />
                <Note label="Counts toward quota:">
                  Each OTP sent is a WhatsApp message and draws down the same{' '}
                  <AnchorLink id="message-quota">Message Quota</AnchorLink> as nudges and reminders.
                </Note>
              </SubSection>
            </Section>

            <Section id="dashboards" title="Dashboards">
              <SubSection id="dashboard" title="Dashboard" plans={['Free', 'Pro']}>
                <p style={pStyle}>The default landing view after setup.</p>
                <Table
                  headers={['Metric', 'Description']}
                  rows={[
                    ['Nudges Sent', 'Total WhatsApp messages sent (all-time)'],
                    ['Conversions', 'Orders converted to prepaid'],
                    ['Conversion Rate', 'Conversions ÷ nudges sent'],
                    ['Revenue Recovered', 'Total value of converted orders'],
                    ['COD Orders', 'Total COD orders received'],
                    ['Pending Nudges', 'Messages queued, not yet sent'],
                  ]}
                />
                <p style={{ ...pStyle, marginTop: '12px' }}>
                  Pro shops additionally see checkout-feature performance: COD Fee revenue, Partial COD completion
                  rate, and OTP verification rate, for the current calendar month.
                </p>
                <Example>
                  A store sends 400 nudges in a month and converts 92 of them. The dashboard shows a 23% conversion
                  rate and totals the order value of those 92 converted orders as Revenue Recovered.
                </Example>
              </SubSection>

              <SubSection id="cod-orders" title="COD Orders" plans={['Free', 'Pro']}>
                <p style={pStyle}>
                  A log of every nudge, filterable by status (<code>pending</code>, <code>sent</code>,{' '}
                  <code>failed</code>, <code>skipped</code>). Each entry can be manually resent.
                </p>
                <p style={{ ...pStyle, marginTop: '12px' }}>
                  <code>failed</code> typically means the WhatsApp message could not be delivered (invalid number,
                  opted out, or API error); <code>skipped</code> means the order was excluded before sending — for
                  example because it was already converted via the{' '}
                  <AnchorLink id="checkout-banner">Checkout Banner</AnchorLink>, or fell inside{' '}
                  <AnchorLink id="quiet-hours">Quiet Hours</AnchorLink> with no override rule. Manually resending an
                  entry uses one message from the current cycle&apos;s quota.
                </p>
              </SubSection>

              <SubSection id="savings-dashboard" title="Savings Dashboard" plans={['Pro']}>
                <Table
                  headers={['Metric', 'Description']}
                  rows={[
                    ['Net Savings', 'RTO cost avoided minus incentive paid, on converted orders'],
                    ['RTO Cost at Risk', 'RTO cost exposure on orders not yet converted'],
                    ['Avg RTO Cost / Order', 'Mean RTO cost across all COD orders'],
                  ]}
                />
                <p style={{ ...pStyle, marginTop: '12px' }}>
                  Includes a per-order table with courier, COGS, incentive paid, net saving, and conversion status.
                </p>
                <Example>
                  An order with an estimated RTO cost of ₹210 converts after a ₹85 discount is paid out. Net Savings
                  for that order is ₹210 − ₹85 = ₹125.
                </Example>
              </SubSection>
            </Section>

            <Section id="setup" title="Setup">
              <Table
                headers={['Step', 'Action']}
                rows={[
                  ['1', 'Connect a WhatsApp Business number'],
                  ['2', 'Choose a discount type (flat % / ₹, or Variable on Pro) and value'],
                  ['3', 'Activate — enables messaging and starts processing new orders'],
                ]}
              />
              <p style={{ ...pStyle, marginTop: '16px' }}>
                No code or developer involvement is required. All settings remain editable after setup, under
                Features.
              </p>
              <List
                items={[
                  <>
                    <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Connecting WhatsApp</strong> uses the
                    official WhatsApp Business API — the merchant&apos;s number stays under the merchant&apos;s own
                    account and is never shared across shops (see{' '}
                    <AnchorLink id="data-privacy">Data &amp; Privacy</AnchorLink>).
                  </>,
                  <>
                    <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Choosing a discount</strong> on Free
                    means setting a <AnchorLink id="flat-discount">Flat Discount</AnchorLink>; Pro stores can switch
                    to the <AnchorLink id="variable-discount-formula">Variable Discount Formula</AnchorLink> at any
                    time from Features without re-running setup.
                  </>,
                  <>
                    <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Activating</strong> starts processing
                    only new orders going forward — existing COD orders placed before activation are not
                    retroactively nudged.
                  </>,
                ]}
              />
            </Section>

            <Section id="data-privacy" title="Data & Privacy">
              <Table
                headers={['Event', 'Retention']}
                rows={[
                  [
                    'App uninstalled',
                    'Settings and order history retained 30 days, restorable on reinstall. Subscription is cancelled immediately.',
                  ],
                  [
                    '30 days after uninstall (no reinstall)',
                    'Customer personal data (names, phone numbers, OTP records) permanently deleted',
                  ],
                  [
                    'Customer data deletion request',
                    'Matching records anonymized (name, email, phone set to null); associated OTP records deleted',
                  ],
                ]}
              />
              <p style={{ ...pStyle, marginTop: '16px' }}>
                WhatsApp credentials are stored per merchant and are never shared across shops.
              </p>
              <Note label="Anonymized vs. deleted:">
                A customer data deletion request anonymizes that customer&apos;s identifying fields (name, email,
                phone) but keeps the order record itself for accounting purposes; an uninstall with no reinstall
                within 30 days permanently deletes the underlying personal data instead.
              </Note>
              <p style={{ ...pStyle, marginTop: '12px' }}>
                For full details on how data is collected, used, and protected, see the{' '}
                <a href="/privacy-policy" style={{ color: '#10B981', textDecoration: 'none' }} className="hover-underline">
                  Privacy Policy
                </a>
                .
              </p>
            </Section>

            <Section id="glossary" title="Glossary">
              <Table
                headers={['Term', 'Definition']}
                rows={[
                  ['COD', 'Cash on Delivery — customer pays the courier at delivery instead of online'],
                  ['RTO', 'Return to Origin — a COD order refused or undelivered, shipped back to the merchant'],
                  ['Nudge', 'The WhatsApp message offering a customer a discount to switch from COD to prepaid'],
                  ['Conversion', 'A COD order that switched to prepaid via nudge or checkout banner'],
                  ['Flip', 'Internal term for a converted (COD → prepaid) order'],
                  ['Quiet Hours', 'A configured window during which outbound messages are held, not sent'],
                  ['COGS', 'Cost of Goods Sold — per-product cost used in margin and discount calculations'],
                  ['UPI', 'Unified Payments Interface — the instant payment rail used for one-tap discount links'],
                  ['Message quota', 'The number of WhatsApp messages included per billing cycle before overage billing applies'],
                  ['Overage', 'A message sent beyond the plan\'s included quota, billed per message'],
                ]}
              />
            </Section>

          </div>
        </div>
      </div>
    </main>
  )
}
