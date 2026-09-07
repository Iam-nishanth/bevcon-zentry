import posthog from 'posthog-js';

export function initPostHog(): void {
  if (typeof window === 'undefined') return;
  if (!process.env.NEXT_PUBLIC_POSTHOG_API_KEY) return;

  // Prevent double init
  if ((window as any).posthog && (window as any).posthog.__posthogInitialized) return;

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    autocapture: true,
    capture_pageview: true,
  });

  // mark init
  (window as any).posthog = posthog;
  (window as any).posthog.__posthogInitialized = true;
}

export default posthog;
