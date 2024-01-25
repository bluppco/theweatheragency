/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: 'marquee 30s linear infinite',
				marquee2: 'marquee2 30s linear infinite',
        marquee_small: 'marquee 20s linear infinite',
				marquee_small_reverse: 'marquee2 20s linear infinite',
      },
      fontFamily: {
        "museo_sans": ["museo-sans", "sans-serif"],
        "big_caslon_fb": ["big-caslon-fb", "serif"]
      },
      colors: {
        "twa_yellow": "#fff082",
        "twa_grey": "#d2d0dc"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}