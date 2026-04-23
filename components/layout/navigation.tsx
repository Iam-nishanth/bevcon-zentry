'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useColorMode } from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiMoon, FiSun, FiX } from 'react-icons/fi'
import useRouteChanged from 'hooks/use-route-changed'
import siteConfig from '#data/config'
import { Logo } from './logo'
import styles from './header.module.css'

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { colorMode, toggleColorMode } = useColorMode()

  useRouteChanged(() => setMenuOpen(false))

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 992px)')
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <>
      <nav className={styles.navArea}>
        <div className={styles.desktopLinks}>
          {siteConfig.header.links.map(({ href, id, label, variant }, i) => {
            const url = href || `/${id}`
            const isPrimary = variant === 'primary'
            return (
              <Link
                key={i}
                href={url}
                className={[
                  styles.navLink,
                  isPrimary ? styles.navLinkPrimary : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {label}
              </Link>
            )
          })}
        </div>

        <button
          className={styles.iconBtn}
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
        >
          {colorMode === 'light' ? <FiMoon size={15} /> : <FiSun size={15} />}
        </button>

        <button
          className={[styles.iconBtn, styles.menuBtn].join(' ')}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <AiOutlineMenu size={20} />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.overlay} role="dialog" aria-modal="true">
          <div className={styles.overlayTop}>
            <Logo />
            <button
              className={styles.iconBtn}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FiX size={20} />
            </button>
          </div>

          {siteConfig.header.links.map(({ href, id, label }, i) => {
            const url = href || `/${id}`
            const isActive = !!pathname?.includes(id || '')
            return (
              <Link
                key={i}
                href={url}
                className={[
                  styles.mobileLink,
                  isActive ? styles.mobileLinkActive : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Navigation
