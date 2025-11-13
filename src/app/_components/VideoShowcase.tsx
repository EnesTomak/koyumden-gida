// Dosya Yolu: src/app/_components/VideoShowcase.tsx
'use client'; // GÜNCELLEME: State kullanacağımız için bu bileşeni client component yapıyoruz.

import { useState } from 'react';
import Image from 'next/image';

export default function VideoShowcase() {
  // GÜNCELLEME: Videonun gösterilip gösterilmeyeceğini takip eden state
  const [showVideo, setShowVideo] = useState(false);

  // GÜNCELLEME: YouTube video ID'si ve başlığı
  const videoId = 'dQw4w9WgXcQ'; // Orijinal src'den alındı
  const videoTitle = 'Geleneksel Yaprak Sarma Yapımı';

  return (
    <section className="bg-slate py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Bölüm Başlığı (Değişiklik yok) */}
        <div className="mb-12 text-center">
          <h2 className="font-serif mb-4 text-4xl font-bold text-white sm:text-5xl">
            Sarma Ritüeli
          </h2>
          <p className="text-parchment/80 mx-auto max-w-2xl">
            Nasıl yapıldığını izleyin: her adımda gösterilen özen ve tutku
          </p>
        </div>

        {/* Video Container (Değişiklik yok) */}
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
            {/* GÜNCELLEME: Koşullu render (Facade veya Iframe) */}
            {!showVideo ? (
              // 1. Video Facade (Cephe) - Hafif HTML/Resim
              <button
                onClick={() => setShowVideo(true)}
                className="group absolute inset-0 h-full w-full cursor-pointer"
                aria-label={`Videoyu Oynat: ${videoTitle}`}
              >
                <Image
                  src="/images/video-poster.webp"
                  alt={videoTitle}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 896px) 100vw, 896px" // max-w-4xl = 896px
                />
                {/* Oynat Butonu Görseli */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/80 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 md:h-20 md:w-20">
                    <svg
                      className="h-10 w-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            ) : (
              // 2. Gerçek Iframe (Kullanıcı tıkladıktan sonra yüklenir)
              <iframe
                className="absolute inset-0 h-full w-full rounded-2xl"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}