import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        olive: {
          light: '#8a9d7a',
          DEFAULT: '#6b7f5a',
          dark: '#4a5a3d',
        },
        earth: {
          light: '#a37f1a',
          DEFAULT: '#8b6914',
          dark: '#6b4f0f',
        },
        parchment: {
          light: '#faf8f4',
          DEFAULT: '#f5f0e8',
          dark: '#e8e0d4',
        },
        slate: {
          light: '#5a6470',
          DEFAULT: '#3d4852',
          dark: '#2a3239',
        },
        gold: {
          light: '#f5d462',
          DEFAULT: '#e8b923',
          dark: '#c29d1a',
        },
        cream: '#fefdf9',
        accent: {
          DEFAULT: '#d97642',
          hover: '#c2643a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      // FAZ 3: YENİ ANİMASYONLAR
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Sonsuz kayma efekti (Referanslar için)
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // Görseller için yavaş yakınlaşma (Sinematik etki)
        'slow-pan': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'marquee': 'marquee 25s linear infinite', // Yavaş ve sürekli akış
        'slow-pan': 'slow-pan 20s linear infinite alternate', // Nefes alır gibi
      },
    },
  },
  plugins: [],
}
export default config