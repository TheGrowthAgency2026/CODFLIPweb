import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About The Growth Agency & CODFLIP',
  description: 'The story behind The Growth Agency and CODFLIP, how we built India\'s leading D2C growth studio and the Shopify app that came from the problems we kept solving.',
}

type Item = string | { term: string; text: string }

type Section = {
  num: string
  title: string
  body?: string | string[]
  list?: Item[]
}

const sections: Section[] = [
  {
    num: '',
    title: '',
    body: [
      'This page tells the story of The Growth Agency who we are, what we do, why we built CODFLIP, and how we work with D2C brands across India. We believe in transparency, so instead of a generic marketing page, we have written this in plain language.',
    ],
  },
  {
    num: '1.',
    title: 'Who We Are',
    body: [
      'The Growth Agency is a performance-focused digital studio built specifically for India\'s direct-to-consumer brands. We work exclusively with Shopify merchants who want to build sustainable, profitable growth not just brands that want to spend more on ads.',
      'We are based in India and have spent over 8 years building on Shopify. Our work combines deep technical development with a working understanding of D2C economics: customer acquisition cost, repeat purchase rate, return-to-origin rate, and contribution margin. We speak the language of brand owners, not just marketers.',
      'The agency is operated by Kadadevaru Technology LLP, registered in India. Our clients span fashion, beauty, health, electronics, and home goods categories where COD is high, returns are costly, and retention determines whether a brand survives its growth phase.',
    ],
  },
  {
    num: '2.',
    title: 'Our Story',
    body: [
      'The Growth Agency was built out of a simple observation: most D2C brands in India were growing their ad spend but not their margins. They were acquiring customers at rising CAC, returning orders at the same rate, and repeating the same cycle: more spend, more returns, no real compounding.',
      'We started as a Shopify development studio. Over time, as we worked more closely inside our client\'s operations, we began to see patterns that no off-the-shelf tool was solving cleanly. The most expensive pattern was COD returns.',
      'In most of our client\'s businesses, 25–35% of all COD orders were being returned. That number represented hundreds of thousands of rupees leaving every single month: in forward shipping costs, reverse logistics fees, restocking labour, and lost working capital. It was the single largest margin leak in their P&L, and no one was addressing it systematically.',
      'We looked for tools that could help. We found nothing that combined risk scoring, WhatsApp messaging, payment link generation, and Shopify order management in a single, affordable app built for Indian merchants. So we built one. That is how CODFLIP was created, not as a product idea, but as a solution we needed for the work we were already doing.',
    ],
  },
  {
    num: '3.',
    title: 'What We Do',
    body: 'We offer three core services to D2C brands on Shopify. Each service is designed to address a specific layer of the growth problem.',
    list: [
      { term: 'Shopify Development & Custom Apps:', text: 'Custom Shopify stores, private apps, and third-party integrations built for conversion. This includes checkout customisation, loyalty and rewards systems, subscription setups, headless builds, and purpose-built tools like CODFLIP.' },
      { term: 'WhatsApp AI Retention:', text: 'Automated WhatsApp flows powered by the WhatsApp Business API. This covers abandoned cart recovery, COD-to-prepaid nudges, delivery tracking messages, re-engagement sequences, and post-purchase flows. All messaging is TRAI-compliant and DLT-registered.' },
      { term: 'Conversion Rate Optimisation:', text: 'Full-funnel CVR audits, heatmap and session recording analysis, A/B test design and execution, and systematic checkout improvements. We identify what is killing your conversion rate and fix it in order of impact.' },
    ],
  },
  {
    num: '4.',
    title: 'Shopify Development & Custom Apps',
    body: [
      'Our Shopify development work is conversion-oriented at every level. Every build decision from page structure to checkout flow to app architectureis evaluated for its expected impact on CVR, AOV, and repeat purchase rate. We do not build Shopify stores as design projects. We build them as revenue infrastructure.',
      'Our development capability extends to custom Shopify apps built from scratch. These are private apps built for specific merchant requirements that cannot be solved with off-the-shelf Shopify app store tools. CODFLIP, our flagship product, is the most prominent example but we have built similar purpose-built tools for several clients addressing problems specific to their category, supply chain, or fulfilment model.',
      'We also handle Shopify theme development, Shopify Plus checkout customisation (checkout.liquid and checkout extensibility), Shopify Functions for pricing and discount logic, and Metafields-based product and content architecture.',
    ],
  },
  {
    num: '5.',
    title: 'WhatsApp AI Retention',
    body: [
      'India has one of the highest WhatsApp adoption rates in the world. For D2C brands, this means WhatsApp is not just a support channel it is the highest-open-rate, highest-response-rate communication channel available. Most brands are not using it strategically.',
      'We build WhatsApp-based retention flows powered by the official WhatsApp Business API. Our flows include: abandoned cart recovery (triggered when a customer adds to cart but does not purchase), COD-to-prepaid conversion nudges (CODFLIP), post-purchase re-engagement (cross-sell and replenishment), delivery tracking notifications, and loyalty and win-back sequences for lapsed customers.',
      'All WhatsApp messaging we deploy is TRAI-compliant and DLT-registered. We handle the DLT registration process, message template creation and submission for approval, opt-in and opt-out management, and compliance with Meta\'s Business Messaging Policy. Brands retain full ownership of their WhatsApp Business number. We never co-mingle client messaging through a shared number.',
      'Our WhatsApp work is API-native, not built on top of a no-code WhatsApp tool with its own subscription layer. This gives us full control over message timing, delivery logic, personalisation depth, and Shopify data integration.',
    ],
  },
  {
    num: '6.',
    title: 'Conversion Rate Optimisation',
    body: [
      'Most D2C brands in India focus almost entirely on the top of funnel. They optimise their ads, their creative, and their audiences but leave their on-site conversion rate largely unaddressed. A brand with a 2% CVR converting 100 visitors a day from ₹50 CPM traffic is spending ₹2,500 per 100 visitors. The same brand with a 3% CVR gets 50% more orders from the same spend.',
      'Our CRO work starts with a full-funnel audit: product pages, collection pages, cart experience, checkout flow, mobile responsiveness, page speed, and trust signals. We use heatmaps, session recordings, and funnel analytics to identify the exact friction points that are costing the brand conversions.',
      'From the audit, we build a prioritised test roadmap interventions ranked by expected impact versus implementation effort. We then design, build, and run A/B tests on the interventions with the highest expected lift. Every test we run has a clear hypothesis, a primary success metric, and a minimum detectable effect size so we know when to call significance.',
      'Our CRO work is not a one-time project. The best results come from running a continuous programme of incremental improvements that compound over time.',
    ],
  },
  {
    num: '8.',
    title: 'About CODFLIP',
    body: [
      'CODFLIP is our flagship Shopify app, available on the Shopify App Store. It is the direct product of our client work built to solve a problem we encountered repeatedly and could not solve with existing tools: COD returns (RTO).',
      'CODFLIP works by scoring every COD order placed on a Shopify store for RTO risk. High-risk orders receive a targeted WhatsApp message with a personalised discount incentive and a one-click UPI payment link. If the customer pays within the offer window, the order converts to prepaid and the incentive is applied. If not, the order proceeds as COD.',
      'The result is a measurable, attributable reduction in RTO typically 25–35% fewer returns on the orders CODFLIP processes. Every prevented return saves the brand ₹160–240 in combined forward shipping, reverse logistics, and restocking costs.',
    ],
  },
  {
    num: '9.',
    title: 'The Problem CODFLIP Solves',
    body: [
      'Cash on delivery represents 60–75% of total orders across most Indian D2C categories. Of those COD orders, 25–35% are returned before they can be delivered or after failed delivery attempts. Industry data puts the average cost of a returned COD order at ₹180–240 when you add together forward shipping, reverse logistics, and restocking labour.',
      'A brand doing ₹10 lakh a month with 30% COD RTO is losing approximately ₹50,000 every single month to returns alone. Over a year, that is ₹6 lakh quietly draining from their margins. In a business where contribution margins are already thin, that number is often the difference between profit and loss.',
      'The standard response to high RTO has been either: (a) restrict COD availability, which reduces total orders and punishes good customers alongside bad ones; or (b) accept it as a cost of doing business in India. CODFLIP offers a third option: identify the high-risk orders specifically, and give those customers a targeted reason to pay upfront.',
    ],
  },
  {
    num: '10.',
    title: 'How CODFLIP Works',
    body: 'When a customer places a COD order on a Shopify store with CODFLIP installed, the following sequence occurs:',
    list: [
      { term: 'Risk Scoring:', text: 'The order is scored for RTO risk based on order history, address data, product category, and order value. Only high-risk orders are targeted we do not send incentive messages to customers who would have paid COD without returning.' },
      { term: 'WhatsApp Message:', text: 'Within a configurable delay window (default: 10–20 minutes post-order), a WhatsApp message is sent to the customer offering a discount (flat ₹ or %) in exchange for switching to prepaid. A UPI/prepaid payment link is included directly in the message.' },
      { term: 'Reminder Sequence:', text: 'If the customer does not act on the first message, a reminder is sent. If they still do not act, an urgency message with an expiring offer is sent. The full sequence runs across a configurable time window, with quiet hours enforced (no messages between 11 PM and 7 AM).' },
      { term: 'Conversion:', text: 'When the customer pays via the link, the Shopify order automatically updates to prepaid, the discount is applied, and the flip is recorded. The merchant pays a 3% commission on the total order value of the converted order.' },
      { term: 'Partial COD:', text: 'CODFLIP also offers a Partial COD mode where the customer pays 20% of the order value upfront via UPI to confirm intent, with the remaining 80% collected as COD on delivery. This reduces RTO risk on hesitant buyers without requiring full prepayment.' },
    ],
  },
  {
    num: '11.',
    title: 'CODFLIP Pricing',
    body: [
      'CODFLIP is available in two plans:',
    ],
    list: [
      { term: 'Free Plan:', text: '₹0 ($0) per month. Includes the core COD-to-prepaid WhatsApp nudge, flat % or ₹ discount offers, basic send delay, up to 50 COD orders per billing period, conversion tracking, and the RTO Cost Estimator. No credit card required.' },
      { term: 'Pro Plan:', text: '₹999 (approx. $11.99) per month + 3% commission on each successfully converted order\'s total value. Includes unlimited COD orders, a 3-message sequence (main, reminder, and urgency), smart incentive formula, custom quiet hours, offer expiry countdown, per-product timing rules, Checkout OTP gate, WhatsApp delivery tracking, and priority email support. A 7-day free trial is included on first activation.' },
    ],
  },
  {
    num: '12.',
    title: 'How We Work With Clients',
    body: [
      'We do not run a large agency model with account managers and offshore delivery teams. We are a focused studio. The work we take on is done by people who have direct context on the brand\'s business, the results we are trying to achieve, and the tools we are using to achieve them.',
      'For CRO engagements, we typically work on a retainer basis with a defined scope of deliverables per month. For Shopify development work, we scope projects individually and quote on a project basis. For CODFLIP, merchants can install and configure the app themselves in approximately 2 minutes via the Shopify App Store.',
      'Onboarding for a full-service engagement typically includes: (a) a discovery call to understand the brand\'s current unit economics, RTO rate, ad performance, and conversion funnel; (b) an audit of the existing Shopify store, WhatsApp setup (if any), and ad account; (c) a written engagement scope with objectives, deliverables, timelines, and success metrics; and (d) a defined reporting cadence.',
      'We work best with brands that already have product-market fit and are looking to scale efficiently not brands in the pre-revenue or very early stage that need brand-building help. Our work is most impactful when there is already a volume of orders, a meaningful RTO challenge, and a founder or marketing team who wants to understand the numbers behind the growth.',
    ],
  },
  {
    num: '13.',
    title: 'Our Values',
    body: 'We try to run our business by a small number of principles that have proven useful:',
    list: [
      { term: 'Numbers over narratives:', text: 'Every recommendation we make should be traceable back to a number a CVR, a CAC, a contribution margin. If we cannot show the data behind a suggestion, we should not be making it.' },
      { term: 'Build for the problem, not for the pitch:', text: 'CODFLIP exists because our clients had a problem that nothing on the market solved cleanly. We did not build it to have a product. We built it because we needed it.' },
      { term: 'Honest about what we do not know:', text: 'D2C in India moves fast. We will not pretend to have answers we do not have. If something is uncertain, we will say so and suggest how to find out.' },
      { term: 'Long-term over short-term:', text: 'We have worked with several clients for multiple years. That happens when the relationship is built on real results and genuine communication, not on locking people into contracts they cannot exit.' },
    ],
  },
  {
    num: '14.',
    title: 'Contact Us',
    body: 'If you would like to work with us, learn more about CODFLIP, or just ask a question, reach out through any of the channels below. We reply to all inquiries within 1 business day.',
    list: [
      { term: 'Email:', text: 'hello@thegrowthagency.in (general enquiries) · support@thegrowthagency.in (CODFLIP support)' },
      { term: 'WhatsApp:', text: '+91 96642 00912' },
      { term: 'Website:', text: 'www.thegrowthagency.in' },
      { term: 'CODFLIP on Shopify:', text: 'apps.shopify.com/codflip' },
      { term: 'Registered address:', text: 'Arihant Atria, Saptapur, Dharwad – 580001, Karnataka, India' },
    ],
  },
]

function renderBody(body: string | string[]) {
  const paragraphs = Array.isArray(body) ? body : [body]
  return paragraphs.map((p, i) => (
    <p
      key={i}
      style={{
        fontFamily: 'var(--font-dm-sans)',
        fontSize: '15px',
        color: 'var(--text-2)',
        lineHeight: 1.85,
        marginBottom: i < paragraphs.length - 1 ? '16px' : 0,
      }}
    >
      {p}
    </p>
  ))
}

function renderList(list: Item[]) {
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        marginTop: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      {list.map((item, i) => (
        <li
          key={i}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '15px',
            color: 'var(--text-2)',
            lineHeight: 1.75,
            paddingLeft: '20px',
            position: 'relative',
          }}
        >
          <span
            style={{
              position: 'absolute',
              left: 0,
              top: '9px',
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: '#10B981',
              flexShrink: 0,
            }}
          />
          {typeof item === 'string' ? (
            item
          ) : (
            <>
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{item.term}</strong>{' '}
              {item.text}
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function About() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh', padding: '120px 24px 100px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* Back */}
        <a
          href="/"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '14px',
            color: 'var(--text-3)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '56px',
            textDecoration: 'none',
          }}
        >
          ← Back to home
        </a>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '11px',
              fontWeight: 600,
              color: '#10B981',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              marginBottom: '16px',
            }}
          >
            The Growth Agency
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(30px, 5vw, 52px)',
              color: 'var(--text)',
              lineHeight: 1.1,
              marginBottom: '16px',
              letterSpacing: '-1.5px',
            }}
          >
            About us: who we are,<br />what we do, and why.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '14px',
              color: 'var(--text-4)',
              marginTop: '12px',
              lineHeight: 1.7,
              maxWidth: '520px',
            }}
          >
            Kadadevaru Technology LLP · Arihant Atria, Saptapur, Dharwad – 580001, Karnataka, India
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {sections.map((s, idx) => (
            <div
              key={idx}
              style={
                s.title
                  ? {
                      paddingBottom: '48px',
                      borderBottom: idx < sections.length - 1 ? '1px solid var(--border)' : 'none',
                    }
                  : undefined
              }
            >
              {s.title && (
                <h2
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 700,
                    fontSize: '20px',
                    color: 'var(--text)',
                    marginBottom: '14px',
                    letterSpacing: '-0.3px',
                  }}
                >
                  <span style={{ color: '#10B981', marginRight: '8px', fontFamily: 'var(--font-jetbrains)', fontSize: '14px', fontWeight: 400 }}>
                    {s.num}
                  </span>
                  {s.title}
                </h2>
              )}
              {s.body && renderBody(s.body)}
              {s.list && renderList(s.list)}
            </div>
          ))}
        </div>

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
          <p
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: '20px',
              fontWeight: 700,
              color: 'var(--text)',
            }}
          >
            Ready to work together?
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '15px',
              color: 'var(--text-2)',
              lineHeight: 1.7,
            }}
          >
            Whether you want to reduce RTO with CODFLIP, improve your Shopify store, or talk about a full-service engagement, we are happy to start with a conversation.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '4px' }}>
            <a
              href="/#contact"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '14px',
                fontWeight: 500,
                color: '#0a0a0a',
                background: '#10B981',
                padding: '10px 22px',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Get in touch →
            </a>
            <a
              href="/codflip"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '14px',
                color: 'var(--text-2)',
                padding: '10px 22px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              See CODFLIP →
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}