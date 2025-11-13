'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Cross2Icon } from '@radix-ui/react-icons';

// Gallery items with different sizes
const galleryItems = [
  { 
    id: 1, 
    title: 'Modern Üretim Hattı', 
    src: '/images/gallery-1.webp',
    gridClass: 'md:col-span-2 md:row-span-2', // Large card
    description: 'Son teknoloji ekipmanlarla hijyenik üretim'
  },
  { 
    id: 2, 
    title: 'En Taze Asma Yaprakları', 
    src: '/images/gallery-2.webp',
    gridClass: 'md:col-span-1 md:row-span-1', // Small card
    description: 'Organik, sabah toplanan taze yapraklar'
  },
  { 
    id: 3, 
    title: 'Saf Ege Zeytinyağı', 
    src: '/images/gallery-3.webp',
    gridClass: 'md:col-span-1 md:row-span-2', // Tall card
    description: 'Soğuk sıkım, yerel üreticilerden'
  },
  { 
    id: 4, 
    title: 'Mükemmel Sunum', 
    src: '/images/gallery-4.webp',
    gridClass: 'md:col-span-2 md:row-span-1', // Wide card
    description: 'Her tabak bir sanat eseri'
  },
];

export default function PhotoGallery() {
  const [lightboxImage, setLightboxImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section className="bg-white py-12 sm:py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="font-serif mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate">
            Gözler İçin Bir Ziyafet
          </h2>
          <p className="text-slate/70 mx-auto max-w-2xl text-sm sm:text-base">
            Her bir sarma, kalite standartlarımıza uygun olarak titizlikle hazırlanır ve sunulur
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-parchment shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${item.gridClass} text-left`} // 'text-left' eklendi
              onClick={() => setLightboxImage(item)}
              aria-label={`Galeride ${item.title} resmini tam ekran aç`} // <-- GÜNCELLENDİ (Erişilebilirlik)
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  quality={85}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur" // <-- GÜNCELLENDİ
                  // Her resim için ayrı blurDataURL gerekir, şimdilik en yaygın olanı kullanalım:
                  blurDataURL="data:image/webp;base64,UklGRloCAABXRUJQVlA4IE4CAAAwCQCdASoGAAQAAUA0JZwCdAD0/7+AA"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-white text-xl sm:text-2xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {item.description}
                </p>
              </div>

              {/* Subtle corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        {/* Optional: View All Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-slate text-white rounded-full font-semibold hover:bg-slate/90 transition-colors duration-300">
            Tüm Galeriyi Görüntüle
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 group"
            aria-label="Kapat"
          >
            <Cross2Icon className="w-6 h-6 text-white" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-6xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.title}
              fill
              quality={95}
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center max-w-2xl px-4">
            <h3 className="font-serif text-white text-2xl sm:text-3xl font-bold mb-2">
              {lightboxImage.title}
            </h3>
            <p className="text-white/80 text-sm sm:text-base">
              {lightboxImage.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}