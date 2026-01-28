// Google Analytics 4 utility functions

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX'

// Initialize GA4
export const initGA4 = (): void => {
  if (!GA4_MEASUREMENT_ID || GA4_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.warn('GA4 Measurement ID not configured. Please set VITE_GA4_MEASUREMENT_ID in your .env file.')
    return
  }

  // Load gtag.js script if not already loaded
  if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`
    document.head.appendChild(script)
  }

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || []
  // Must use function() to access arguments object (not arrow function)
  if (!window.gtag) {
    window.gtag = function() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }
  }

  window.gtag('js', new Date())
  window.gtag('config', GA4_MEASUREMENT_ID)
}

// Track page view
export const trackPageView = (path: string, title?: string): void => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', GA4_MEASUREMENT_ID, {
      page_path: path,
      page_title: title
    })
  }
}

// Track custom event
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
): void => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams)
  }
}
