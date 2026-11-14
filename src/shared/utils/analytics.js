export const GOOGLE_ADS_ID = 'AW-18468535293';
export const CONTACT_CONVERSION_SEND_TO = 'AW-18468535293/GyPDCNTqjpcdEP33veZE';
export const WHATSAPP_CONVERSION_SEND_TO = 'AW-18468535293/MVokCM6pxbcdEP33veZE';

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

export function trackTrialSessionConversion() {
  trackEvent('conversion', {
    send_to: CONTACT_CONVERSION_SEND_TO,
  });
}

/**
 * Track WhatsApp click conversion in Google Ads.
 * Opens the WhatsApp URL in a new tab with fallback for ad blockers.
 * @param {string} whatsappUrl - The full wa.me URL to open.
 */
export function trackWhatsAppConversion(whatsappUrl) {
  let hasRedirected = false;
  const openWhatsApp = () => {
    if (hasRedirected) return;
    hasRedirected = true;
    if (whatsappUrl) {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: WHATSAPP_CONVERSION_SEND_TO,
      event_callback: openWhatsApp,
    });
    setTimeout(openWhatsApp, 1000);
  } else {
    openWhatsApp();
  }
}

export default {
  GOOGLE_ADS_ID,
  CONTACT_CONVERSION_SEND_TO,
  WHATSAPP_CONVERSION_SEND_TO,
  trackEvent,
  trackContactConversion,
  trackTrialSessionConversion,
  trackWhatsAppConversion,
};
