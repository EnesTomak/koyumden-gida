import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Yeni Premium Palet: Instagram'daki o doğal ve kaliteli havayı yansıtır
        'deep-green': '#1a2e1a',   // Koyu, asil zeytin yeşili (Ana Metin/Arkaplan)
        'olive-light': '#556b2f',  // Açık zeytin (Vurgular)
        'cream': '#f9f8f4',        // Yumuşak, göz yormayan krem (Ana Arkaplan)
        'gold': '#c5a059',         // Lüks hissi veren mat altın (Butonlar/İkonlar)
        'earth': '#8c7e6c',        // Toprak tonu (İkincil metinler)
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'slow-zoom': 'slowZoom 20s linear infinite', // Yeni: Arka plan resimleri için yavaş, sinematik hareket
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;