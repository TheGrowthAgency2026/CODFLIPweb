'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { label: 'Product', href: '#product', active: true },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-[#E6EAE8]"
      style={{
        transition: 'box-shadow 0.2s',
        boxShadow: scrolled ? '0 1px 16px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div className="mx-auto flex items-center justify-between h-[68px] px-6 md:px-16 max-w-[1440px]">
        {/* Logo */}
        <a href="/pd" className="flex items-center gap-2 no-underline">
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
          <span className="font-bold text-[18px] text-[#005d42] tracking-[-0.02em]">
            The Growth
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={[
                'text-[15px] no-underline transition-colors pb-0.5',
                link.active
                  ? 'font-semibold text-[#005d42] border-b-2 border-[#047857]'
                  : 'font-normal text-[#3e4943] hover:text-[#005d42] border-b-2 border-transparent',
              ].join(' ')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-[15px] text-[#3e4943] hover:text-[#005d42] transition-colors no-underline"
          >
            Sign in
          </a>
          <a
            href="#"
            className="text-[14px] font-semibold text-white bg-[#047857] hover:bg-[#006c4e] transition-colors px-4 py-2 no-underline tracking-[0.01em]"
            style={{ borderRadius: 4 }}
          >
            Install on Shopify
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-1 text-[#191c1c] bg-transparent border-0 cursor-pointer"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[#E6EAE8] bg-white"
          >
            <div className="px-6 py-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[16px] border-b border-[#E6EAE8] no-underline last:border-0"
                  style={{
                    fontWeight: link.active ? 600 : 400,
                    color: link.active ? '#005d42' : '#3e4943',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a href="#" className="text-[15px] text-[#3e4943] no-underline py-2">
                  Sign in
                </a>
                <a
                  href="#"
                  className="text-[14px] font-semibold text-white bg-[#047857] no-underline text-center py-2.5 tracking-[0.01em]"
                  style={{ borderRadius: 4 }}
                >
                  Install on Shopify
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
