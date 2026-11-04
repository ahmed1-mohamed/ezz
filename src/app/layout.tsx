import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Tajawal } from "next/font/google";
import ServerProviders from "@/components/server-providers";
import { Toaster } from "sonner";
import { NotificationSoundManager } from "@/components/shared/NotificationSoundManager";
import { getLocale } from "next-intl/server";
import { BASE_URL as API_BASE_URL } from "@/data/config";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  display: "swap",
  weight: ["400", "500", "700"],
});

const SITE_URL = "https://p-adviser.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Property Adviser",
    default: "Property Adviser – Comprehensive Property Management Platform",
  },
  description:
    "Property Adviser is a professional property management platform for managing properties, tenants, transactions, bookings, and analytics — all in one place.",
  keywords: ["property management", "real estate", "tenant management", "property analytics"],
  authors: [{ name: "Property Adviser", url: SITE_URL }],
  creator: "Property Adviser",
  publisher: "Property Adviser",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Property Adviser",
    title: "Property Adviser – Comprehensive Property Management Platform",
    description:
      "Professional property management platform for properties, tenants, transactions, bookings, and analytics.",
    images: [
      {
        url: "/images/logo_media.png",
        width: 512,
        height: 512,
        alt: "Property Adviser Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Adviser – Comprehensive Property Management Platform",
    description:
      "Professional property management platform for properties, tenants, transactions, bookings, and analytics.",
    images: ["/images/logo_media.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Property Adviser",
    url: SITE_URL,
    description:
      "Professional property management platform for properties, tenants, transactions, bookings, and analytics.",
  };

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href={API_BASE_URL} />
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          id="suppress-browser-extension-errors"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (localStorage.getItem("app_theme") === "dark") document.documentElement.classList.add("dark");
                } catch (e) {}
                function shouldIgnore(msg, stack) {
                  return (
                    (msg && (msg.indexOf("reading 'startTime'") !== -1 || msg.indexOf("reportAllChanges") !== -1)) ||
                    (stack && (stack.indexOf("reportAllChanges") !== -1 || stack.indexOf("startTime") !== -1))
                  );
                }
                window.addEventListener('error', function(e) {
                  var msg = e && (e.message || (e.error && e.error.message)) || "";
                  var stack = e && e.error && e.error.stack || "";
                  if (shouldIgnore(msg, stack)) {
                    e.preventDefault();
                    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
                    return true;
                  }
                }, true);
                window.addEventListener('unhandledrejection', function(e) {
                  var reason = e && e.reason;
                  var msg = reason && (reason.message || String(reason)) || "";
                  var stack = reason && reason.stack || "";
                  if (shouldIgnore(msg, stack)) {
                    e.preventDefault();
                    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
                    return true;
                  }
                }, true);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tajawal.variable} antialiased`}
      >
        <ServerProviders>
          <Toaster
            position={locale === "ar" ? "top-left" : "top-right"}
            dir={locale === "ar" ? "rtl" : "ltr"}
            richColors
          />
          <NotificationSoundManager />
          {children}
        </ServerProviders>
      </body>
    </html>
  );
}