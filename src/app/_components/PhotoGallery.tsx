'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Cross2Icon } from '@radix-ui/react-icons';
import { siteConfig } from '@/src/config/site';

// Config dosyasından galeri verilerini çekiyoruz
const galleryContent = siteConfig.content.gallery;
const galleryItems = galleryContent.items;

// Typescript için tip tanımı
type GalleryItem = (typeof galleryItems)[0];

export default function PhotoGallery() {
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // FAZ 3: Intersection Observer ile Scroll Reveal Animasyonu
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Performans için bir kez göründükten sonra takibi bırak
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 } // %15 görünür olduğunda tetikle
    );

    // .reveal-on-scroll sınıfına sahip tüm elemanları izle
    const items = document.querySelectorAll('.gallery-item-reveal');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4 relative overflow-hidden">

      {/* FAZ 3: Dekoratif Arka Plan (Derinlik hissi için) */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-parchment/50 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">

        {/* Başlık - Animasyonlu Gelir */}
        <div className="mb-16 text-center gallery-item-reveal reveal-on-scroll">
          <span className="text-gold font-serif italic text-2xl block mb-2">Göz Alıcı</span>
          <h2 className="font-serif mb-4 text-4xl sm:text-5xl font-bold text-slate">
            {galleryContent.title}
          </h2>
          <p className="text-slate/70 mx-auto max-w-2xl text-lg font-light">
            {galleryContent.description}
          </p>
        </div>

        {/* Bento Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              // FAZ 3: Animasyon sınıfları ve Bento Grid sınıfı (item.gridClass)
              className={`gallery-item-reveal reveal-on-scroll group relative overflow-hidden rounded-3xl bg-parchment shadow-md hover:shadow-2xl transition-all duration-700 cursor-pointer ${item.gridClass} text-left`}
              onClick={() => setLightboxImage(item)}
              style={{ transitionDelay: `${index * 100}ms` }} // Sıralı geliş efekti (stagger)
              aria-label={`Galeride ${item.title} resmini tam ekran aç`}
            >

              {/* Resim */}
              <div className="absolute inset-0">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  quality={85}
                  // FAZ 3: Hover'da çok yumuşak zoom (scale-110)
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  // PERFORMANS: Mobil ve masaüstü için doğru boyutları indir
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRloCAABXRUJQVlA4IE4CAAAwCQCdASoGAAQAAUA0JZwCdAD0/7+AA"
                />
              </div>

              {/* FAZ 3: Overlay Gradient - Sadece altta ve daha belirgin */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* FAZ 3: Metin Animasyonları ve Altın Çizgi Detayı */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-white text-2xl font-bold mb-1 opacity-90 group-hover:opacity-100">
                  {item.title}
                </h3>

                {/* Altın Çizgi (Gold Line) - Hover'da uzar */}
                <div className="h-1 w-0 group-hover:w-12 bg-gold transition-all duration-500 mb-2" />

                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                  {item.description}
                </p>
              </div>

              {/* Dekoratif nokta */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(232,185,35,0.8)]" />
            </button>
          ))}
        </div>

        {/* Buton */}
        <div className="mt-16 text-center gallery-item-reveal reveal-on-scroll">
          <button className="inline-flex items-center gap-3 px-10 py-4 bg-slate text-white rounded-full font-semibold hover:bg-slate/90 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            {galleryContent.buttonText}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </div>

      {/* Lightbox (Büyük Ekran) - Backdrop Blur Eklendi */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          {/* Kapat Butonu */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 group z-50"
            aria-label="Kapat"
          >
            <Cross2Icon className="w-8 h-8 text-white" />
          </button>

          {/* Büyük Resim */}
          <div
            className="relative max-w-7xl w-full aspect-video shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              fill
              quality={95}
              className="object-contain"
              sizes="100vw"
              priority // Tıklandığında anında yükle
            />
          </div>

          {/* Resim Altı Bilgi */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center max-w-3xl px-4">
            <h3 className="font-serif text-white text-3xl font-bold mb-3 drop-shadow-md">
              {lightboxImage.title}
            </h3>
            <p className="text-white/80 text-lg drop-shadow-md">
              {lightboxImage.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}