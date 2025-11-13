import { siteConfig } from '@/src/config/site'; // GÜNCELLEME: Burayı ekleyin

export default function SchemaMarkup() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    // GÜNCELLEME: Tüm alanlar siteConfig'den çekildi
    name: siteConfig.name,
    description: siteConfig.description,
    image: `${siteConfig.url}/images/hero-background.webp`, // Örnek görsel eklendi
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    openingHours: siteConfig.openingHoursSchema,
    priceRange: '$$',
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    // GÜNCELLEME: Tüm alanlar siteConfig'den çekildi
    name: siteConfig.product.name,
    description: siteConfig.product.description,
    category: siteConfig.product.category,
    brand: {
      '@type': 'Brand',
      name: siteConfig.product.brandName,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'TRY',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}