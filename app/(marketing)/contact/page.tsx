'use client'

import { Barlow, Barlow_Condensed, Bebas_Neue } from 'next/font/google'

import React, { useEffect, useState } from 'react'

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

const MailIcon = () => (
  <svg
    width="16"
    height="16"
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

const MapIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
)

const ClockIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

const SendIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
  </svg>
)

const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setSubmitted(true)
    console.log('Form submitted:', formData)
  }

  const fontVars = `${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`

  return (
    <>
      <title>
        Contact Us — Request Quote for Industrial Doors & Dock Solutions |
        Bevcon Zentry
      </title>
      <meta
        name="description"
        content="Get in touch with Bevcon Zentry for high speed doors, dock levellers, and industrial door solutions. Request a quote, technical support, or product information. Located in Hyderabad, serving all of India."
      />
      <meta
        name="keywords"
        content="contact bevcon zentry, request quote high speed doors, dock leveller price, industrial doors hyderabad, warehouse equipment supplier india"
      />
      <link rel="canonical" href="https://bevconzentry.in/contact/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Bevcon Zentry',
            description: 'Industrial doors and loading bay solutions supplier',
            url: 'https://bevconzentry.in',
            email: 'mktg_support@bevconzentry.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Plot No. E8/C8 - 2A, (24-60/10/11), IDA, UPPAL',
              addressLocality: 'Hyderabad',
              addressRegion: 'Telangana',
              postalCode: '500039',
              addressCountry: 'IN',
            },
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
              Get in Touch
            </span>
            <h1 className={`${s.heroTitle} ${s.animUp} ${s.animUp2}`}>
              Contact <span className={s.heroAccent}>Us</span>
            </h1>
            <p className={`${s.heroDesc} ${s.animUp} ${s.animUp3}`}>
              Have a project in mind or need expert guidance on industrial doors
              and loading bay solutions? Send us a message and we'll respond
              promptly.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className={s.content}>
          <div className={s.contentInner}>
            {/* Sidebar */}
            <aside className={s.sidebar}>
              <h2 className={s.sidebarTitle}>Let's Talk</h2>
              <p className={s.sidebarDesc}>
                All of your industrial and logistics needs are met with our
                products. Reach us through any of the channels below.
              </p>
              <div className={s.sidebarDivider} />

              <div className={s.contactItem}>
                <span className={s.contactIcon}>
                  <MailIcon />
                </span>
                <div>
                  <p className={s.contactLabel}>Email</p>
                  <p className={s.contactValue}>
                    <a href="mailto:mktg_support@bevconzentry.com">
                      mktg_support@bevconzentry.com
                    </a>
                  </p>
                </div>
              </div>

              <div className={s.contactItem}>
                <span className={s.contactIcon}>
                  <MapIcon />
                </span>
                <div>
                  <p className={s.contactLabel}>Address</p>
                  <p className={s.contactValue}>
                    Plot No. E8/C8 - 2A, (24-60/10/11),
                    <br />
                    IDA, UPPAL, Hyderabad,
                    <br />
                    Telangana 500039, India
                  </p>
                </div>
              </div>

              <div className={s.hoursRow}>
                <p className={s.hoursLabel}>Business Hours</p>
                <p className={s.hoursText}>
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM IST
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className={s.formPanel}>
              {submitted ? (
                <div className={s.successBox}>
                  <span className={s.successIcon}>
                    <CheckIcon />
                  </span>
                  <h3 className={s.successTitle}>Message Sent</h3>
                  <p className={s.successText}>
                    Thank you for reaching out. Our team will get back to you
                    within one business day.
                  </p>
                  <button
                    className={s.successBtn}
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                      })
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className={s.formTitle}>Send a Message</h2>
                  <p className={s.formSubtitle}>
                    Fill in the details below and we'll get back to you as soon
                    as possible.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className={s.formRow}>
                      <div className={s.formGroup}>
                        <label className={s.formLabel} htmlFor="name">
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className={s.formInput}
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={s.formGroup}>
                        <label className={s.formLabel} htmlFor="email">
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className={s.formInput}
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={s.formGroup}>
                      <label className={s.formLabel} htmlFor="subject">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        className={s.formInput}
                        placeholder="What can we help you with?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={s.formGroup}>
                      <label className={s.formLabel} htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className={s.formTextarea}
                        placeholder="Tell us about your project, requirements, or questions..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className={s.formSubmit}
                      disabled={submitting}
                    >
                      {submitting ? (
                        'Sending…'
                      ) : (
                        <>
                          <SendIcon /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        <HomeFooter />
      </div>
    </>
  )
}
