import { MetadataRoute } from 'next';
import { siteConfig } from '@/src/config/site'; // Ayar dosyamızı import ediyoruz

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.url;

  const routes = [
    '/',
    // Gelecekte 'hakkimizda', 'iletisim' gibi sayfalar eklerseniz,
    // buraya '/hakkimizda', '/iletisim' olarak ekleyebilirsiniz.
  ];

  // === DÜZELTME BURADA ===
  // Değişkenin tipini (MetadataRoute.Sitemap) açıkça belirterek
  // TypeScript'in 'changeFrequency' için doğru tipi anlamasını sağlıyoruz.
  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly', // Artık 'string' değil, 'weekly' olarak doğru şekilde anlaşılacak
    priority: route === '/' ? 1 : 0.8,
  }));

  return sitemapEntries;
}