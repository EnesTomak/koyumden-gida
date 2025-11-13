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
        {/* === Font Preload (GÜNCELLENDİ) === */}
        {/* Tarayıcının Ağ sekmesinden bulunan woff2 dosyaları */}
        <link
          rel="preload"
          href="/_next/static/media/8e9860b6e62d6359-s.woff2" // Bulduğun URL'den alındı
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/e4af272ccee01ff0-s.p.woff2" // Bulduğun URL'den alındı
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/28a2004cf8372660-s.woff2" // Bulduğun URL'den alındı
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/eaead17c7dbfcd5d-s.p.woff2" // Bulduğun URL'den alındı
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <SchemaMarkup />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}