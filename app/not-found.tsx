'use client'

import Link from 'next/link'

import React, { useState } from 'react'

const HomeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)
const PackageIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
)
const GridIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
)
const MailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
)
const ArrowLeft = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
)
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

const quickLinks = [
  {
    title: 'Home',
    description: 'Return to homepage',
    Icon: HomeIcon,
    href: '/',
  },
  {
    title: 'Products',
    description: 'Browse our catalog',
    Icon: PackageIcon,
    href: '/products',
  },
  {
    title: 'Industries',
    description: 'See who we serve',
    Icon: GridIcon,
    href: '/industries',
  },
  {
    title: 'Contact',
    description: 'Get in touch',
    Icon: MailIcon,
    href: '/contact',
  },
]

export default function NotFound() {
  const [dark, setDark] = useState(false)

  const t = {
    bg: dark ? '#0D1117' : '#F7F9FC',
    bgCard: dark ? '#1C2230' : '#FFFFFF',
    border: dark ? '#2D3748' : '#E2E8F0',
    accent: '#0b71b7',
    accentDim: dark ? 'rgba(11,113,183,0.12)' : 'rgba(11,113,183,0.08)',
    accentGlow: dark ? 'rgba(11,113,183,0.20)' : 'rgba(11,113,183,0.16)',
    text: dark ? '#E2E8F0' : '#1A202C',
    textDim: dark ? '#718096' : '#4A5568',
    textFaint: dark ? '#4A5568' : '#A0AEC0',
  }

  return (
    <>
      <title>404 — Page Not Found | Bevcon Zentry</title>
      <meta
        name="description"
        content="The page you're looking for doesn't exist. Explore our industrial doors and loading bay solutions."
      />
      <meta name="robots" content="noindex, follow" />

      <div
        style={{
          background: t.bg,
          color: t.text,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
          boxSizing: 'border-box',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          WebkitFontSmoothing: 'antialiased',
          transition: 'background 0.25s, color 0.25s',
        }}
      >
        {/* Theme toggle */}
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle theme"
          style={{
            position: 'fixed',
            top: 20,
            right: 20,
            width: 36,
            height: 36,
            borderRadius: 6,
            background: t.bgCard,
            border: `1px solid ${t.border}`,
            color: t.textDim,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>

        <div style={{ maxWidth: 860, width: '100%', textAlign: 'center' }}>
          {/* 404 */}
          <div
            style={{
              fontSize: 'clamp(100px, 20vw, 180px)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: 4,
              margin: '0 0 8px',
              background: 'linear-gradient(135deg, #0b71b7 0%, #5aab47 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'nfPop 0.7s cubic-bezier(0.34,1.56,0.64,1) both',
            }}
          >
            404
          </div>

          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              letterSpacing: 1,
              color: t.text,
              margin: '0 0 12px',
              animation: 'nfUp 0.6s 0.2s both',
            }}
          >
            Page Not Found
          </h1>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: t.textDim,
              maxWidth: 460,
              margin: '0 auto 32px',
              animation: 'nfUp 0.6s 0.3s both',
            }}
          >
            The page you're looking for seems to have moved or doesn't exist.
            Let us help you find what you need.
          </p>

          {/* Actions */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap',
              marginBottom: 52,
              animation: 'nfUp 0.6s 0.35s both',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                height: 40,
                padding: '0 24px',
                background: t.accent,
                border: `1px solid ${t.accent}`,
                color: '#fff',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: 'uppercase',
                borderRadius: 3,
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              <HomeIcon /> Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                height: 40,
                padding: '0 20px',
                background: 'transparent',
                border: `1px solid ${t.border}`,
                color: t.textDim,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
                borderRadius: 3,
                cursor: 'pointer',
                transition: 'border-color 0.2s, color 0.2s',
              }}
            >
              <ArrowLeft /> Go Back
            </button>
          </div>

          {/* Quick links label */}
          <p
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: t.textFaint,
              marginBottom: 16,
              animation: 'nfUp 0.6s 0.4s both',
            }}
          >
            Quick Links
          </p>

          {/* Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 12,
              animation: 'nfUp 0.6s 0.45s both',
            }}
          >
            {quickLinks.map(({ title, description, Icon, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                  borderRadius: 4,
                  padding: '20px 16px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                  transition:
                    'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                }}
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 3,
                    background: t.accentDim,
                    border: `1px solid rgba(11,113,183,0.2)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: t.accent,
                  }}
                >
                  <Icon />
                </span>
                <span style={{ fontSize: 14, fontWeight: 600, color: t.text }}>
                  {title}
                </span>
                <span style={{ fontSize: 12, color: t.textFaint }}>
                  {description}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes nfPop {
            from { opacity: 0; transform: scale(0.6) rotate(-8deg); }
            to   { opacity: 1; transform: scale(1) rotate(0deg); }
          }
          @keyframes nfUp {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 600px) {
            .nf-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </div>
    </>
  )
}
