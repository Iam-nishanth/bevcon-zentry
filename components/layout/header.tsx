'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useScroll } from 'framer-motion'
import { Logo } from './logo'
import Navigation from './navigation'
import styles from './header.module.css'

export interface HeaderProps {
  position?: 'absolute' | 'sticky'
}

export const Header = ({ position = 'absolute' }: HeaderProps) => {
  const ref = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (y) => {
      setScrolled(y > (ref.current?.offsetHeight ?? 0))
    })
  }, [scrollY])

  const className = [
    styles.header,
    position === 'sticky' ? styles.headerSticky : '',
    scrolled ? styles.headerScrolled : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header ref={ref} className={className}>
      <div className={styles.inner}>
        <Logo
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        />
        <Navigation />
      </div>
    </header>
  )
}
