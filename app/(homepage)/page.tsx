'use client'

import { Barlow, Barlow_Condensed, Bebas_Neue } from 'next/font/google'
import Link from 'next/link'

import { useEffect, useRef, useState } from 'react'

import { flushSync } from 'react-dom'

import HomeFooter from '#components/home/HomeFooter'
import HomeNav from '#components/home/HomeNav'

import s from './page.module.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const barlow = Barlow({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-bc',
  display: 'swap',
})

/* ── Animated counter (triggers on scroll-into-view) ── */
function Counter({
  target,
  suffix = '',
  label,
}: {
  target: number | string
  suffix?: string
  label: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  const isStatic = typeof target === 'string'

  useEffect(() => {
    if (isStatic) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          let startTs: number | null = null
          const step = (ts: number) => {
            if (!startTs) startTs = ts
            const prog = Math.min((ts - startTs) / duration, 1)
            const eased = 1 - Math.pow(1 - prog, 3)
            flushSync(() => setCount(Math.floor(eased * (target as number))))
            if (prog < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.unobserve(el)
  }, [target, isStatic])

  return (
    <div ref={ref} className={s.statItem}>
      <span className={s.statNum}>
        {isStatic ? target : count}
        {suffix}
      </span>
      <span className={s.statLabel}>{label}</span>
    </div>
  )
}

/* ── Icons ── */
const ShieldIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 2L23 6.5V13C23 18.8 18.5 24.2 13 25C7.5 24.2 3 18.8 3 13V6.5L13 2Z" />
    <path d="M9 13L12 16L17 10" />
  </svg>
)

const LeafIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 3C21 3 14 3 9 8C4 13 4 21 4 21C4 21 12 21 17 16C22 11 21 3 21 3Z" />
    <path d="M4 21L11 14" />
  </svg>
)

const HelmetIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 16C5 10.477 8.686 6 13 6C17.314 6 21 10.477 21 16" />
    <path d="M3 16H23" />
    <path d="M5 16V19C5 20.105 5.895 21 7 21H19C20.105 21 21 20.105 21 19V16" />
    <path d="M13 6V3" />
  </svg>
)

const ClockIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="13" cy="13" r="10" />
    <path d="M13 7V13L17 17" />
  </svg>
)

/* ── Data ── */
const heroImages = [
  '/home/industrial-hall-1630742_1280.jpg',
  '/home/Industrial Bay Doors.png',
  '/home/DockLeveller.png',
]

const products = [
  {
    tag: 'Access Solutions',
    name: 'High Speed Doors',
    desc: 'Rapid-access doors for high-traffic industrial environments with integrated safety systems.',
    img: '/home/product-showcase/high-speed-doors.jpg',
    href: '/products?category=High+Speed+Doors',
  },
  {
    tag: 'Loading Bay',
    name: 'Dock Levelers',
    desc: 'Hydraulic and mechanical levelers ensuring seamless, safe loading operations.',
    img: '/home/product-showcase/dock-levellers.jpg',
    href: '/products?category=Dock+Levelers',
  },
  {
    tag: 'Weather Sealing',
    name: 'Dock Shelters',
    desc: 'Weather-tight enclosures maintaining temperature integrity at every loading bay.',
    img: '/home/product-showcase/dock-shelters.jpg',
    href: '/products?category=Dock+Levelers',
  },
  {
    tag: 'Fire Protection',
    name: 'Fire Rated Shutters',
    affix: 'BS 476 Part 22 & UL Rated',
    desc: 'Certified fire protection systems built to the highest compliance standards.',
    img: '/home/product-showcase/fire-rated-shutters.jpg',
    href: '/products?category=Fire+Rated+Shutters',
  },
]

const capabilities = [
  {
    icon: <ShieldIcon />,
    title: 'Reliable Performance',
    desc: 'Engineered for continuous operation in demanding industrial environments with maximum uptime.',
  },
  {
    icon: <LeafIcon />,
    title: 'Energy Efficiency',
    desc: 'Advanced insulation and sealing technology that measurably reduces your operational energy costs.',
  },
  {
    icon: <HelmetIcon />,
    title: 'Safety First',
    desc: 'Comprehensive safety features and full compliance with industry standards across every product.',
  },
  {
    icon: <ClockIcon />,
    title: 'Rapid Service',
    desc: 'Expert installation and maintenance support across India.',
  },
]

const industriesList = [
  {
    cat: 'Healthcare & Life Sciences',
    name: 'Pharmaceutical',
    img: '/products/nergeco/Doors for Clean Processes/Automatic_Nergeco_doors_in_the_pharmaceutical_industry.jpg',
  },
  {
    cat: 'Food & Beverage',
    name: 'Food Processing',
    img: '/products/nergeco/Food Processing Industry/Nergeco_high-speed_doors_forming_air_lock_with_isothermal_doors.jpg',
  },
  {
    cat: 'Temperature Controlled',
    name: 'Cold Storage',
    img: '/products/nergeco/nergeco-onsite/Cold-storage-nergeco.jpeg',
  },
  {
    cat: 'Supply Chain',
    name: 'Warehouse & Logistics',
    img: '/home/DockLeveller.png',
  },
  {
    cat: 'Freight & Logistics',
    name: 'Cargo Hubs',
    img: '/products/nergeco/nergeco-onsite/cargo-nergeco.jpeg',
  },
]

const trustItems = [
  'Pharmaceutical',
  'Automotive',
  'Cold Storage',
  'Food Processing',
  'Warehousing',
  'Cargo Logistics',
  'Clean Rooms',
]

const clientLogos = [
  {
    name: 'Reliance',
    src: '/home/bevcon-clients/Reliance_Industries.png',
    invertDark: true,
  },
  { name: 'Bosch', src: '/home/bevcon-clients/bosch.png' },
  {
    name: 'Dr. Reddys',
    src: '/home/bevcon-clients/dr.reddys.png',
    invertDark: true,
  },
  {
    name: 'Mylan',
    src: '/home/bevcon-clients/Mylan_Logo.png',
    invertDark: true,
  },
  {
    name: 'Saint Gobain',
    src: '/home/bevcon-clients/saint-gobian.png',
    height: '72px',
  },
  { name: 'Sandoz', src: '/home/bevcon-clients/Sandoz-Blue.svg' },
  {
    name: 'Colgate',
    src: '/home/bevcon-clients/colgate-smile.svg',
    invertLight: true,
  },
  { name: 'Alpla', src: '/home/bevcon-clients/alpla.svg' },
  { name: 'Perfetti', src: '/home/bevcon-clients/perfetti.png' },
  { name: 'Granules', src: '/home/bevcon-clients/Granules.png' },
  { name: 'Laurus', src: '/home/bevcon-clients/laurus.svg' },
]

/* ═══════════════════════════════════════════════════════════ */

export default function HomeNew() {
  const [heroIdx, setHeroIdx] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const id = setInterval(
      () => setHeroIdx((i) => (i + 1) % heroImages.length),
      5000,
    )
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const fontVars = `${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`

  return (
    <div
      className={`${s.page} ${dark ? '' : s.light} ${fontVars}`}
      style={{
        fontFamily: 'var(--font-barlow), Barlow, system-ui, sans-serif',
      }}
    >
      <HomeNav
        scrolled={scrolled}
        dark={dark}
        onToggleTheme={() => setDark((d) => !d)}
      />

      {/* ══════════ HERO ═════════════════════════════════════ */}
      <section className={s.hero}>
        {/* Full-bleed cycling background */}
        <div className={s.heroBg}>
          {heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={s.heroBgImg}
              style={{
                opacity: heroIdx === i ? 1 : 0,
                transition: 'opacity 1.8s ease',
              }}
            />
          ))}
          <div className={s.heroBgOverlay} />
        </div>

        <div className={s.heroMain}>
          <div className={s.heroContent}>
            <span className={`${s.heroEyebrow} ${s.animUp} ${s.animUp1}`}>
              Zero Entry. Seamless Flow.
            </span>

            <h1 className={`${s.heroTitle} ${s.animUp} ${s.animUp2}`}>
              Industrial
              <span className={s.heroTitleAccent}>Doors.</span>
              Docking
              <br />
              Solutions.
            </h1>

            <p className={`${s.heroDesc} ${s.animUp} ${s.animUp3}`}>
              Every facility has unique demands. We deliver the full spectrum of
              Industrial Entrance and Loading Bay solutions from rapid-access{' '}
              <span className={s.heroDescAccent}>High Speed Doors</span> and{' '}
              <span className={s.heroDescAccent}>Fire Rated Shutters</span> to{' '}
              <span className={s.heroDescAccent}>Dock Levellers</span> and{' '}
              <span className={s.heroDescAccent}>Dock Shelters</span> for
              various industries across India.
            </p>

            <div className={`${s.heroCtas} ${s.animUp} ${s.animUp4}`}>
              <Link href="/contact" className={s.btnOrange}>
                Request a Quote
              </Link>
              <Link href="/products" className={s.btnOutline}>
                Explore Products <span className={s.btnArrow}>→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className={`${s.heroScroll} ${s.animFade} ${s.animFade2}`}>
          <div className={s.heroScrollLine} />
          <span className={s.heroScrollText}>Scroll to explore</span>
        </div>
      </section>

      {/* ══════════ STATS BAND ═══════════════════════════════ */}
      <div className={s.statsBand}>
        <div className={s.statsGrid}>
          <Counter target={5000} suffix="+" label="Installations Completed" />
          <Counter target={15} suffix="+" label="Years of Excellence" />
          <Counter target={7} suffix="" label="Industries Served" />
          <Counter target="PAN INDIA" label="Support Available" />
        </div>
      </div>

      {/* ══════════ PRODUCTS ═════════════════════════════════ */}
      <section className={s.products}>
        <div className={s.productsHead}>
          <div>
            <div className={s.sectionTag}>Product Range</div>
            <h2 className={s.sectionHeading}>
              Every Solution,
              <br />
              Precisely Engineered
            </h2>
          </div>
          <Link
            href="/products"
            className={s.btnOutline}
            style={{ flexShrink: 0 }}
          >
            View All Products <span className={s.btnArrow}>→</span>
          </Link>
        </div>

        <div className={s.productsGrid}>
          {products.map((p) => (
            <Link key={p.name} href={p.href} className={s.productCard}>
              <img src={p.img} alt={p.name} className={s.productImg} />
              <div className={s.productOverlay} />
              <div className={s.productBody}>
                <div className={s.productTag}>{p.tag}</div>
                <h3 className={s.productName}>
                  {p.name}
                  {'affix' in p && p.affix && (
                    <span className={s.productAffix}>({p.affix})</span>
                  )}
                </h3>
                <p className={s.productDesc}>{p.desc}</p>
                <span className={s.productCta}>
                  Learn More
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 7H12M8 3L12 7L8 11" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════ OUR CLIENTS ══════════════════════════ */}
      {/*
      <section className={s.clients}>
        <div className={s.clientsHeader}>
          <span className={s.clientsEyebrow}>Trusted By</span>
          <h2 className={s.clientsTitle}>
            Our <span className={s.clientsAccent}>Clients</span>
          </h2>
        </div>

        <div className={s.ticker}>
          <div className={s.tickerTrack}>
            {[...clientLogos, ...clientLogos].map((c, i) => {
              const filter =
                dark && c.invertDark
                  ? 'invert(1)'
                  : !dark && c.invertLight
                    ? 'invert(1)'
                    : undefined
              return (
                <div key={i} className={s.tickerItem}>
                  <img
                    src={c.src}
                    alt={c.name}
                    className={s.tickerLogo}
                    style={{
                      ...(filter ? { filter } : {}),
                      ...(c.height ? { height: c.height } : {}),
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
      */}

      {/* ══════════ WHY BEVCON ZENTRY ════════════════════════ */}
      <section className={s.why}>
        <div className={s.whyBg}>BEVCON</div>
        <div className={s.whyInner}>
          <div className={s.whyHead}>
            <div>
              <div className={s.sectionTag}>Why Choose Us</div>
              <h2 className={s.sectionHeading}>
                The Standard
                <br />
                of Industrial
                <br />
                Excellence
              </h2>
            </div>
            <p className={s.sectionBody}>
              From Clean Rooms to Cold Storage, our solutions are engineered to
              perform where conventional products fail combining Durability,
              Safety, and Operational Continuity in every facility.
            </p>
          </div>

          <div className={s.whyGrid}>
            {capabilities.map((c) => (
              <div key={c.title} className={s.whyCard}>
                <div className={s.whyIconWrap}>{c.icon}</div>
                <h3 className={s.whyTitle}>{c.title}</h3>
                <p className={s.whyDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ INDUSTRIES ═══════════════════════════════ */}
      <section className={s.industries}>
        <div className={s.industriesHead}>
          <div>
            <div className={s.sectionTag}>Industries We Serve</div>
            <h2 className={s.sectionHeading}>
              Across Every
              <br />
              Sector
            </h2>
          </div>
          <Link
            href="/industries"
            className={s.btnOutline}
            style={{ flexShrink: 0 }}
          >
            All Industries <span className={s.btnArrow}>→</span>
          </Link>
        </div>

        <div className={s.industriesGrid}>
          {industriesList.map((ind) => (
            <div key={ind.name} className={s.industryCard}>
              <img src={ind.img} alt={ind.name} className={s.industryImg} />
              <div className={s.industryOverlay} />
              <div className={s.industryBody}>
                <div className={s.industryCat}>{ind.cat}</div>
                <h3 className={s.industryName}>{ind.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ TRUST STRIP ══════════════════════════════ */}
      <div className={s.trustStrip}>
        <span className={s.trustLabel}>Sectors</span>
        <div className={s.trustDivider} />
        <div className={s.trustIndustries}>
          {trustItems.map((item) => (
            <span key={item} className={s.trustItem}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════ CTA ══════════════════════════════════════ */}
      <section className={s.cta}>
        <div className={s.ctaInner}>
          <div className={s.ctaBar} />

          <div className={s.ctaContent}>
            <div>
              <h2 className={s.ctaTitle}>
                Ready to Upgrade
                <br />
                <span>Your Facility?</span>
              </h2>
              <p className={s.ctaBody}>
                Connect with our specialists. We'll assess your facility
                requirements and deliver a tailored industrial door solution —
                fast, precise, and built to last.
              </p>
            </div>

            <div className={s.ctaActions}>
              <Link href="/contact" className={s.btnOrange}>
                Get a Free Quote
              </Link>
              <Link href="/products" className={s.btnOutline}>
                Browse Products
              </Link>
            </div>
          </div>

          <div className={s.ctaAddress}>
            <div className={s.ctaAddressBlock}>
              <span className={s.ctaAddressLabel}>Head Office</span>
              <span className={s.ctaAddressValue}>
                Plot No. E8/C8 – 2A, IDA, UPPAL,
                <br />
                Hyderabad, Telangana 500039, India
              </span>
            </div>
            <div className={s.ctaAddressBlock}>
              <span className={s.ctaAddressLabel}>Email</span>
              <a
                href="mailto:mktg_support@bevconzentry.com"
                className={s.ctaAddressLink}
              >
                mktg_support@bevconzentry.com
              </a>
            </div>
            <div className={s.ctaAddressBlock}>
              <span className={s.ctaAddressLabel}>Support</span>
              <span className={s.ctaAddressValue}>Available pan India</span>
            </div>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  )
}
