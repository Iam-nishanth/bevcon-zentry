'use client'

import Link from 'next/link'

import { useState } from 'react'

import s from './HomeNav.module.css'

const SunIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
)

const MoonIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)

const HamburgerIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const ArrowIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 7H12M8 3L12 7L8 11" />
  </svg>
)

interface HomeNavProps {
  scrolled: boolean
  dark: boolean
  onToggleTheme: () => void
}

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact', label: 'Contact' },
]

export default function HomeNav({
  scrolled,
  dark,
  onToggleTheme,
}: HomeNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className={`${s.nav} ${scrolled ? s.navScrolled : ''}`}>
        <div className={s.navInner}>
          {/* Logo */}
          <Link
            href="/"
            className={s.navLogo}
            onClick={() => setMobileOpen(false)}
          >
            <img
              src="/static/main/bzpl-logo.svg"
              alt="Bevcon Zentry"
              className={s.navLogoImg}
            />
            <span className={s.navLogoText}>
              <span className={s.navLogoGreen}>Bevcon</span>
              <span className={s.navLogoBlue}> Zentry</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className={s.navLinks}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={s.navLink}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right */}
          <div className={s.navRight}>
            <button
              className={s.themeToggle}
              onClick={onToggleTheme}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <Link href="/contact" className={`${s.navCta} ${s.navCtaDesktop}`}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile controls */}
          <div className={s.mobileControls}>
            <button
              className={s.themeToggle}
              onClick={onToggleTheme}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className={s.hamburger}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div className={s.mobileOverlay} onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile drawer */}
      <div
        className={`${s.mobileDrawer} ${mobileOpen ? s.mobileDrawerOpen : ''}`}
      >
        <nav className={s.mobileNav}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={s.mobileNavLink}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className={s.mobileFooter}>
          <Link
            href="/contact"
            className={s.mobileCta}
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote <ArrowIcon />
          </Link>
        </div>
      </div>
    </>
  )
}
