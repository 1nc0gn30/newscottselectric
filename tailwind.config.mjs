/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0F19',
          card: '#131B2E',
          cardHover: '#1A253E',
          gold: '#F59E0B',
          goldHover: '#D97706',
          amber: '#FBBF24',
          cyan: '#06B6D4',
          cyanGlow: 'rgba(6, 182, 212, 0.2)',
          text: '#F3F4F6',
          muted: '#9CA3AF',
          border: '#1F2937'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(245, 158, 11, 0.25)',
        'cyan-glow': '0 0 25px rgba(6, 182, 212, 0.25)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
