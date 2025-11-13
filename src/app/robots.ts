import { MetadataRoute } from 'next';
import { siteConfig } from '@/src/config/site'; // Ayar dosyamızı import ediyoruz

export default function robots(): MetadataRoute.Robots {
  // siteConfig'den ana URL'yi alıyoruz
  const siteUrl = siteConfig.url;

  return {
    rules: {
      userAgent: '*', // Tüm arama motorları için geçerli
      allow: '/',     // Sitenin tamamını taramaya izin ver
    },
    // Site haritasının tam adresini belirtiyoruz
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}