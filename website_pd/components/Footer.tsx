import { ArrowRight } from 'lucide-react'

const footerLinks: Record<string, string[]> = {
  Product: ['Features', 'Pricing', 'Shopify App', 'Changelog'],
  Company: ['About', 'Blog', 'Contact', 'Careers'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy'],
}

export default function Footer() {
  return (
    <footer className="bg-[#0F1714] border-t border-[#3e4943]/40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="/pd" className="inline-flex items-center gap-2 no-underline mb-4">
              <div
                className="w-6 h-6 bg-[#047857] flex items-center justify-center shrink-0"
                style={{ borderRadius: 6 }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 9L9.5 2M9.5 2H4.5M9.5 2V7"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-bold text-[18px] text-white" style={{ letterSpacing: '-0.02em' }}>
                The Growth
              </span>
            </a>
            <p className="text-[14px] text-[#c3c7c6] leading-[1.65] max-w-[200px] mb-5">
              COD to prepaid conversion for Indian Shopify brands.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#7bd8b1] hover:text-[#9ffdd3] transition-colors no-underline"
            >
              Install on Shopify
              <ArrowRight size={13} />
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, items]) => (
            <div key={col}>
              <p className="text-[14px] font-semibold text-white mb-4">{col}</p>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[14px] text-[#c3c7c6] hover:text-white transition-colors no-underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(62,73,67,0.4)' }}
        >
          <p className="text-[13px] text-[#64748B]">
            © 2024 The Growth Agency. Made in India.
          </p>
          <p className="text-[13px] text-[#64748B]">
            Built for Shopify · COD to Prepaid
          </p>
        </div>
      </div>
    </footer>
  )
}
