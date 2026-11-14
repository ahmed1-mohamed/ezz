import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { trackWhatsAppConversion } from '@/shared/utils/analytics';

const WHATSAPP_PHONE = '971503417838';

const TRIAL_MESSAGE_AR =
  'السلام عليكم، حابب أحجز حصة تجريبية مجانية. عمر الطالب _ وعايزين نتعلم _ (قرآن / لغة عربية).';

const TRIAL_MESSAGE_EN =
  "Hi! I'm interested in a free trial class. My child's age is _ and we'd like to learn _ (Quran / Arabic).";

/**
 * Floating WhatsApp CTA button fixed at the bottom corner.
 * Remains visible while scrolling and triggers Google Ads conversion on click.
 */
function FloatingWhatsAppButton({ customMessage = '' }) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language?.startsWith('ar') ?? true;
  const defaultMessage = isRtl ? TRIAL_MESSAGE_AR : TRIAL_MESSAGE_EN;
  const message = customMessage || defaultMessage;
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  const handleButtonClick = useCallback(
    (e) => {
      e.preventDefault();
      trackWhatsAppConversion(whatsappUrl);
    },
    [whatsappUrl],
  );
  return (
    <aside
      aria-label={isRtl ? 'زر التواصل عبر واتساب' : 'WhatsApp Contact Button'}
      className="fixed bottom-6 end-6 z-50 flex items-center"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleButtonClick}
        className="flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 sm:px-5 py-3 sm:py-3.5 text-white font-bold text-xs sm:text-sm shadow-[0_10px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] hover:bg-[#1EBE5D] hover:scale-105 active:scale-95 transition-all duration-200 group cursor-pointer border-2 border-white/30 backdrop-blur-xs"
        aria-label={isRtl ? 'تواصل معنا عبر واتساب' : 'Chat with us on WhatsApp'}
      >
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 group-hover:rotate-12 transition-transform duration-200"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
        </svg>
        <span className="font-extrabold tracking-tight">
          {isRtl ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
        </span>
      </a>
    </aside>
  );
}

export default memo(FloatingWhatsAppButton);
