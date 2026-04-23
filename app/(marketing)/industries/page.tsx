'use client'

import { Barlow, Barlow_Condensed, Bebas_Neue } from 'next/font/google'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'

import HomeFooter from '#components/home/HomeFooter'
import HomeNav from '#components/home/HomeNav'
import industries from '#data/industries'

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

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 7H12M8 3L12 7L8 11" />
  </svg>
)

export default function IndustriesPage() {
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const fontVars = `${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`
  const industryList = Object.values(industries)

  return (
    <>
      <title>
        Industries We Serve — Industrial Doors & Loading Bay Solutions | Bevcon
        Zentry
      </title>
      <meta
        name="description"
        content="Specialized industrial doors, high speed doors, and loading bay solutions for manufacturing, warehousing, logistics, cold storage, pharmaceutical, and food processing industries across India."
      />
      <meta
        name="keywords"
        content="industrial doors for warehouses, high speed doors manufacturing, cold storage doors, pharmaceutical facility doors, food processing doors, logistics warehouse solutions"
      />
      <link rel="canonical" href="https://bevconzentry.in/industries/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Industrial Door Solutions',
            provider: {
              '@type': 'Organization',
              name: 'Bevcon Zentry',
              url: 'https://bevconzentry.in',
            },
            areaServed: { '@type': 'Country', name: 'India' },
            description:
              'Specialized industrial doors and loading bay solutions for diverse industries',
          }),
        }}
      />

      <div className={`${s.page} ${dark ? '' : s.light} ${fontVars}`}>
        <HomeNav
          scrolled={scrolled}
          dark={dark}
          onToggleTheme={() => setDark((d) => !d)}
        />

        {/* HERO */}
        <section className={s.hero}>
          <div className={s.heroInner}>
            <span className={`${s.heroEyebrow} ${s.animUp} ${s.animUp1}`}>
              Strategic Industries Landscape
            </span>
            <h1 className={`${s.heroTitle} ${s.animUp} ${s.animUp2}`}>
              Industries <span className={s.heroAccent}>We Serve</span>
            </h1>
            <p className={`${s.heroDesc} ${s.animUp} ${s.animUp3}`}>
              Bevcon Zentry delivers specialized industrial entrance and loading
              bay solutions tailored to the demands of each sector — from cold
              chain logistics to pharmaceutical clean rooms.
            </p>
            <div className={`${s.heroBtns} ${s.animUp} ${s.animUp3}`}>
              <Link href="/products" className={s.btnPrimary}>
                View All Products <ArrowIcon />
              </Link>
              <Link href="/contact" className={s.btnOutline}>
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* GRID */}
        <section className={s.gridSection}>
          <div className={s.industriesGrid}>
            {industryList.map((industry) => (
              <article key={industry.title} className={s.card}>
                <div className={s.cardImgWrap}>
                  <img
                    src={industry.imageSrc}
                    alt={industry.title}
                    className={s.cardImg}
                    loading="lazy"
                  />
                  <span className={s.cardCategoryBadge}>
                    {industry.category}
                  </span>
                </div>

                <div className={s.cardBody}>
                  <h2 className={s.cardTitle}>{industry.title}</h2>
                  <p className={s.cardDesc}>{industry.description}</p>

                  <div className={s.cardDivider} />

                  <p className={s.cardSectionLabel}>Key Benefits</p>
                  <ul className={s.cardList}>
                    {industry.benefits.slice(0, 3).map((b, i) => (
                      <li key={i} className={s.cardListItem}>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <p className={s.cardSectionLabel}>Solutions</p>
                  <ul className={s.cardList}>
                    {industry.solutions.slice(0, 3).map((sol, i) => (
                      <li key={i} className={s.cardListItem}>
                        {sol}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={s.cta}>
          <div className={s.ctaInner}>
            <p className={s.ctaEyebrow}>Ready to Optimize</p>
            <h2 className={s.ctaTitle}>Transform Your Facility</h2>
            <p className={s.ctaDesc}>
              Contact our experts to discuss how Bevcon Zentry can streamline
              your industrial operations with our comprehensive range of doors
              and loading bay solutions.
            </p>
            <div className={s.ctaBtns}>
              <Link href="/contact" className={s.btnPrimary}>
                Get a Custom Quote <ArrowIcon />
              </Link>
              <Link href="/products" className={s.btnOutline}>
                View Products
              </Link>
            </div>
          </div>
        </section>

        <HomeFooter />
      </div>
    </>
  )
}
