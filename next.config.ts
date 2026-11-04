import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  productionBrowserSourceMaps: false,
  compress: true,

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "@headlessui/react",
      "@radix-ui/react-select",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-avatar",
      "@radix-ui/react-checkbox",
      "@radix-ui/react-switch",
      "date-fns",
      "react-quill-new",
      "react-phone-input-2",
      "firebase",
    ],
  },

  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demoapi.p-adviser.com",
      },
      {
        protocol: "https",
        hostname: "*.p-adviser.com",
      },
      {
        protocol: "https",
        hostname: "f9c7-156-198-119-225.ngrok-free.app",
      },
      {
        protocol: "https",
        hostname: "*.ngrok-free.app",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "*.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  logging: {
    fetches: {
      fullUrl: false,
    },
  },

  async headers() {
    return [
      {
        source: "/(.*).(woff2?|png|jpg|jpeg|gif|webp|avif|ico|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);