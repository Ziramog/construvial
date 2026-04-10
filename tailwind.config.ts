import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFD100',
        accent: '#FFC107',
        dark: '#0A0A0A',
        'dark-2': '#1A1A1A',
        muted: '#6B7280',
        light: '#F5F5F5',
        text: '#1A1A1A',
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
