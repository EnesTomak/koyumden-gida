'use client'; 

import Image from 'next/image';
import { siteConfig } from '@/src/config/site';

export default function HeroSection() {

  const whatsappNumber = siteConfig.phone.replace(/\D/g, '');
  const whatsappMessage = "Merhaba, yaprak sarması siparişi vermek istiyorum.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero arka plan görseli */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.webp"
          alt="Köyümden Gıda Organik Zeytinyağlı Yaprak Sarması Tabağı"
          fill
          priority
          quality={75}
          className="object-cover"
          sizes="100vw"
          placeholder="blur" 
          blurDataURL="data:image/webp;base64,UklGRloCAABXRUJQVlA4IE4CAAAwCQCdASoGAAQAAUA0JZwCdAD0/7+AA"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero İçerik */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        
        {/* LCP hatasını (NO_LCP) düzeltmek için animasyon ve opacity-0 kaldırıldı. */}
        <h1 className="font-playfair mb-6 text-5xl font-bold text-white sm:text-6xl md:text-7xl">
          Organik Zeytinyağlı
          <br />
          <span className="text-[#f5f0e8]">Yaprak Sarması</span>
        </h1>

        {/* Paragraf (Animasyon kalabilir) */}
        <p className="font-inter mb-8 max-w-2xl text-lg text-white/90 sm:text-xl 
                      animate-fade-in-up opacity-0 [animation-delay:200ms]">
          Köyümden Gıda'nın taze lezzetleri, el değmeden hijyenik üretimle 
          sofranızda.
        </p>

        {/* Buton (Animasyon kalabilir) */}
        <a
          href={whatsappUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white shadow-xl 
                     transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                     animate-fade-in-up opacity-0 [animation-delay:400ms]" // Gecikme ayarlandı
        >
          WhatsApp'tan Sipariş Ver
        </a>

        {/* Aşağı kaydırma göstergesi */}
        <div className="absolute bottom-8 animate-bounce">
          <a href="#story" aria-label="Hikaye bölümüne git">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}