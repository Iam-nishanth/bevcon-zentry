import Link from 'next/link'

import s from './HomeFooter.module.css'

export default function HomeFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.footerInner}>
        <Link href="/home" className={s.footerLogo}>
          <img
            src="/static/main/bzpl-logo.svg"
            alt="Bevcon Zentry"
            className={s.footerLogoImg}
          />
          <span className={s.footerLogoText}>
            Bevcon Zentry
            <span className={s.footerLogoSub}>Industrial Solutions</span>
          </span>
        </Link>
        <span className={s.footerCopy}>
          © {new Date().getFullYear()} Bevcon Zentry Pvt. Ltd. — All rights
          reserved.
        </span>
        <div className={s.footerLinks}>
          <Link href="/products" className={s.footerLink}>
            Products
          </Link>
          <Link href="/industries" className={s.footerLink}>
            Industries
          </Link>
          <Link href="/contact" className={s.footerLink}>
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
