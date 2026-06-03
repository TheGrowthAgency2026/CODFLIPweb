'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed left-0 right-0 z-50 transition-all duration-300"
      style={{
        top: '40px',
        background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-10">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" rx="5" fill="rgba(16,185,129,0.15)" />
            <path d="M5 10h6M8 7l3 3-3 3" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="11" y="15" fontSize="8" fill="#10B981" fontWeight="bold">₹</text>
          </svg>
          <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '20px' }}>
            <span className="text-white">COD</span>
            <span style={{ color: '#10B981' }}>FLIP</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-white"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#9CA3AF' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="https://apps.shopify.com/codflip"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-lg transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: '#10B981',
              color: '#0a0a0a',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '14px',
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#059669')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#10B981')}
          >
            Install Free
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden z-10 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: 'rgba(10,10,10,0.95)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 transition-colors duration-200 hover:text-white"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: '#9CA3AF' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://apps.shopify.com/codflip"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg mt-2"
            style={{
              background: '#10B981',
              color: '#0a0a0a',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '15px',
              fontWeight: 500,
            }}
          >
            Install Free
            <ArrowRight size={14} />
          </a>
        </div>
      )}
    </nav>
  )
}
