export const GOOGLE_ADS_ID = 'AW-18468535293';
export const CONTACT_CONVERSION_SEND_TO = 'AW-18468535293/GyPDCNTqjpcdEP33veZE';

export function trackEvent(action, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
}

export function trackContactConversion() {
  trackEvent('conversion', {
    send_to: CONTACT_CONVERSION_SEND_TO,
  });
}

export default {
  GOOGLE_ADS_ID,
  CONTACT_CONVERSION_SEND_TO,
  trackEvent,
  trackContactConversion,
};

