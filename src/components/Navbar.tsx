'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { usePathname } from 'next/navigation'

const tgaLinks = [
  { label: 'Services', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '#contact' },
]

const codflipLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const pathname = usePathname()
  const isCodflip = pathname === '/codflip'
  const navLinks = isCodflip ? codflipLinks : tgaLinks

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const themeBtn: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    background: 'var(--bg-2)',
    border: '1px solid var(--border)',
    color: 'var(--text-2)',
    cursor: 'pointer',
    transition: 'color 0.2s, border-color 0.2s',
  }

  return (
    <nav
      className="fixed left-0 right-0 z-50 transition-all duration-300"
      style={{
        top: '40px',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">

        {/* Logo */}
        {isCodflip ? (
          <a href="/codflip" className="flex items-center gap-2 z-10">
            <img src="/codflip-icon.svg" alt="CODFLIP" width={28} height={28} style={{ borderRadius: 7 }} />
            <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '20px' }}>
              <span style={{ color: 'var(--text)' }}>COD</span>
              <span style={{ color: '#10B981' }}>FLIP</span>
            </span>
          </a>
        ) : (
          <a href="/" className="flex items-center gap-2 z-10">
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 7,
                background: 'rgba(16,185,129,0.12)',
                border: '1px solid rgba(16,185,129,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h5M5 4.5l2.5 2.5L5 9.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '16px', color: 'var(--text)' }}>
              The Growth Agency
            </span>
          </a>
        )}

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: 'var(--text-3)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-3)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{ ...themeBtn, width: '36px', height: '36px' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#10B981'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.borderColor = 'var(--border)' }}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {isCodflip ? (
            <span
              className="flex items-center gap-2 px-5 py-2 rounded-lg cursor-not-allowed"
              style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981', fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500, border: '1px solid rgba(16,185,129,0.3)' }}
            >
              Releasing soon on Shopify
            </span>
          ) : (
            <a
              href="/codflip"
              className="flex items-center gap-2 px-5 py-2 rounded-lg transition-all duration-200 hover:scale-[1.02]"
              style={{ background: '#10B981', color: '#0a0a0a', fontFamily: 'var(--font-dm-sans)', fontSize: '14px', fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#059669')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#10B981')}
            >
              See CODFLIP
              <ArrowRight size={14} />
            </a>
          )}
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2 z-10">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{ ...themeBtn, width: '32px', height: '32px' }}
          >
            {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
          </button>
          <button
            className="text-[color:var(--text)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: 'var(--nav-solid)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 transition-colors duration-200"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', color: 'var(--text-3)' }}
              onClick={() => setMobileOpen(false)}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-3)')}
            >
              {link.label}
            </a>
          ))}
          {isCodflip ? (
            <span
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg mt-2 cursor-not-allowed"
              style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 500, border: '1px solid rgba(16,185,129,0.3)' }}
            >
              Releasing soon on Shopify
            </span>
          ) : (
            <a
              href="/codflip"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg mt-2"
              style={{ background: '#10B981', color: '#0a0a0a', fontFamily: 'var(--font-dm-sans)', fontSize: '15px', fontWeight: 500 }}
            >
              See CODFLIP
              <ArrowRight size={14} />
            </a>
          )}
        </div>
      )}
    </nav>
  )
}
