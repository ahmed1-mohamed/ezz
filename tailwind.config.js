/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E9F6F3",
          100: "#D3EEE7",
          200: "#A8DDD0",
          300: "#7FC0AA",
          400: "#5F9C85",
          500: "#0F7A6C",
          600: "#0D6A5D",
          700: "#005F54",
          800: "#024F45",
          900: "#013F38",
        },
        accent: {
          teal: "#1a8a7a",
          darkGray: "#2D3E40",
          mediumGray: "#5A6B6D",
          lightMint: "#D9E5E3",
          lightTeal: "#A8D4D4",
          mint: "#F8FFFD",
          paleMint: "#F5FFFC",
        },
        gold: {
          light: "#FED700",
          main: "#D4AF37",
          dark: "#C9A227",
          darker: "#8B7D3A",
        },
        secondary: {
          teal: "#17B89C",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
