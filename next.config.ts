import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // GÜNCELLENDİ: images.qualities uyarısını düzeltir
  images: {
    // Özel kalite değerlerini buraya ekliyoruz
    // Artık Next.js, 85 kalite değerine izin verecek.
    qualities: [75, 85, 95], 
  },
}

export default nextConfig