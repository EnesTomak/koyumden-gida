// Dosya Yolu: src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import SchemaMarkup from './_components/SchemaMarkup';
import { siteConfig } from '@/src/config/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    url: siteConfig.url,
    images: [`${siteConfig.url}/images/hero-background.webp`],
  },
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <SchemaMarkup />

        {/* === GÜNCELLENDİ: Performans İpuçları (Resource Hints) === */}
        {/*
          Tarayıcıya, bu dış kaynaklara (YouTube, Google Haritalar)
          henüz ihtiyaç duymadan önce bağlanmasını söylüyoruz.
          Bu, sitenizdeki video ve haritanın daha hızlı yüklenmesini sağlar.
        */}

        {/* YouTube (VideoShowcase bileşeni için) */}
        <link
          rel="preconnect"
          href="https://www.youtube.com"
          crossOrigin="anonymous"
        />
        
        {/* Google Haritalar (ContactSection bileşeni için) */}
        <link
          rel="preconnect"
          href="https://googleusercontent.com" // Harita iframe'inin kaynağı
          crossOrigin="anonymous"
        />
        
        {/* Google Analytics (Yakında eklenecek, şimdiden ekleyelim) */}
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}