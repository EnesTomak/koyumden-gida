'use client';

import Image from 'next/image';
import { siteConfig } from '@/src/config/site';

export default function ClientLogos() {
  const clients = siteConfig.content.clients;

  // Sonsuz döngü için listeyi iki kere kopyalıyoruz
  const marqueeList = [...clients.list, ...clients.list, ...clients.list];

  return (
    <section className="py-16 bg-cream border-t border-parchment-dark/10 overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h3 className="font-serif text-2xl text-slate/40 uppercase tracking-widest">
          {clients.title}
        </h3>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden group">

        {/* Sol ve Sağ Kenarlarda Fade Efekti (Yumuşak Geçiş) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-cream to-transparent z-10" />

        {/* Hareketli Şerit */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {/* Hover'da durur */}
          {marqueeList.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center mx-8 sm:mx-12 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <div className="relative w-24 h-12 sm:w-32 sm:h-16">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}