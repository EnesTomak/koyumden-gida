'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Cross2Icon } from '@radix-ui/react-icons';
import { siteConfig } from '@/src/config/site'; // === GÜNCELLENDİ ===

// === GÜNCELLENDİ: Galeri içeriği siteConfig'den çekiliyor ===
const galleryContent = siteConfig.content.gallery;
const galleryItems = galleryContent.items;

// Tip tanımını da dinamik hale getiriyoruz
type GalleryItem = (typeof galleryItems)[0];

export default function PhotoGallery() {
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  return (
    <section className="bg-white py-12 sm:py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Başlık (Dinamik) */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="font-serif mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate">
            {galleryContent.title}
          </h2>
          <p className="text-slate/70 mx-auto max-w-2xl text-sm sm:text-base">
            {galleryContent.description}
          </p>
        </div>

        {/* Bento Grid (Dinamik) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {galleryItems.map((item) => (
            <button 
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-parchment shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${item.gridClass} text-left`}
              onClick={() => setLightboxImage(item)}
              aria-label={`Galeride ${item.title} resmini tam ekran aç`}
            >
              <div className="absolute inset-0">
                <Image
                  src={item.src}
                  alt={item.alt} // === GÜNCELLENDİ (Dinamik alt etiket) ===
                  fill
                  quality={85}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur" 
                  blurDataURL="data:image/webp;base64,UklGRloCAABXRUJQVlA4IE4CAAAwCQCdASoGAAQAAUA0JZwCdAD0/7+AA" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-white text-xl sm:text-2xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {item.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button> 
          ))}
        </div>

        {/* Buton (Dinamik) */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-slate text-white rounded-full font-semibold hover:bg-slate/90 transition-colors duration-300">
            {galleryContent.buttonText}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox (Dinamik) */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 group"
            aria-label="Kapat"
          >
            <Cross2Icon className="w-6 h-6 text-white" />
          </button>
          <div 
            className="relative max-w-6xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt} // === GÜNCELLENDİ ===
              fill
              quality={95}
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
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