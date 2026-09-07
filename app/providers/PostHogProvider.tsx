'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { initPostHog } from '../../lib/posthog'

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    initPostHog()

    // capture web vitals if web-vitals package is present
    import('web-vitals')
      .then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
        const send = (metric: any) => {
          if (typeof window === 'undefined' || !(window as any).posthog) return
          ;(window as any).posthog.capture('web_vitals', {
            name: metric.name,
            id: metric.id,
            value: metric.value,
            rating: metric.rating,
          })
        }

        try {
          getCLS(send)
          getFID(send)
          getLCP(send)
          getFCP(send)
          getTTFB(send)
        } catch (e) {
          // ignore
        }
      })
      .catch(() => {
        // web-vitals not installed — ignore
      })
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      ;(window as any).posthog.capture('$pageview')
    }
  }, [pathname])

  return <>{children}</>
}
