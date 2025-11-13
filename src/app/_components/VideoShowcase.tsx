'use client'; 

import { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/src/config/site'; // === GÜNCELLENDİ ===

export default function VideoShowcase() {
  const [showVideo, setShowVideo] = useState(false);

  // === GÜNCELLENDİ: İçerik siteConfig'den çekiliyor ===
  const videoContent = siteConfig.content.video;
  const videoId = videoContent.videoId;
  const videoTitle = videoContent.videoTitle;

  return (
    <section className="bg-slate py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Bölüm Başlığı (Dinamik) */}
        <div className="mb-12 text-center">
          <h2 className="font-serif mb-4 text-4xl font-bold text-white sm:text-5xl">
            {videoContent.title}
          </h2>
          <p className="text-parchment/80 mx-auto max-w-2xl">
            {videoContent.description}
          </p>
        </div>

        {/* Video Container (Dinamik Başlık/Alt Etiket) */}
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
            {!showVideo ? (
              <button
                onClick={() => setShowVideo(true)}
                className="group absolute inset-0 h-full w-full cursor-pointer"
                aria-label={`Videoyu Oynat: ${videoTitle}`}
              >
                <Image
                  src="/images/video-poster.webp"
                  alt={videoTitle} // Dinamik alt etiket
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 896px) 100vw, 896px"
                  placeholder="blur" 
                  blurDataURL="data:image/webp;base64,UklGRj4CAABXRUJQVlA4IDICAADwAgCdASoGAAQAAUA0JZwCdAE/AAC1jbAAA"
                />
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
              <iframe
                className="absolute inset-0 h-full w-full rounded-2xl"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={videoTitle} // Dinamik başlık
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