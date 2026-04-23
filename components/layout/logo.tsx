import React from 'react'
import Link from 'next/link'
import BevconZentry from '#data/Bevcon-Cropped new.svg'
import styles from './header.module.css'

export interface LogoProps {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  return (
    <Link href={href} className={styles.logoLink} onClick={onClick}>
      <BevconZentry className={styles.logoSvg} />
      <span className={styles.srOnly}>Bevcon Zentry</span>
    </Link>
  )
}
