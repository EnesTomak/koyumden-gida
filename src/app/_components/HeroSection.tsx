'use client'; 

import Image from 'next/image';
import { siteConfig } from '@/src/config/site';

export default function HeroSection() {

  const whatsappNumber = siteConfig.phone.replace(/\D/g, '');
  const whatsappMessage = "Merhaba, yaprak sarması siparişi vermek istiyorum.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Arka Plan: Yavaşça hareket eden (Zoom yapan) sinematik görsel */}
      <div className="absolute inset-0 select-none">
        <Image
          src="/images/hero-background.webp"
          alt="Köyümden Gıda - El Yapımı Zeytinyağlı Yaprak Sarması"
          fill
          priority
          quality={85}
          className="object-cover animate-slow-zoom" // Yavaş zoom efekti ile 'yaşayan' fotoğraf
          sizes="100vw"
          placeholder="blur" 
          blurDataURL="data:image/webp;base64,UklGRloCAABXRUJQVlA4IE4CAAAwCQCdASoGAAQAAUA0JZwCdAD0/7+AA"
        />
        {/* Gradient Overlay: Yazıların okunması için alttan yukarı yumuşak karartma */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-deep-green/90"></div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-24 px-4 text-center sm:justify-center sm:pb-0">
        
        {/* Üst Başlık - Marka İmzası */}
        <span className="font-serif italic text-gold text-xl sm:text-2xl mb-4 tracking-wider animate-fade-in-up">
          Doğadan Sofranıza
        </span>

        {/* Ana Başlık - Devasa, İnce ve Zarif */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-medium text-cream mb-6 leading-tight drop-shadow-lg">
          Zeytinyağlı <br/>
          <span className="italic text-white">Sarma Sanatı</span>
        </h1>

        <p className="font-sans max-w-lg mx-auto text-lg text-cream/90 mb-10 font-light leading-relaxed animate-fade-in-up [animation-delay:200ms]">
          Anne eli değmiş gibi değil, bizzat anne eliyle. 
          En taze asma yaprakları ve hakiki Ege zeytinyağı ile günlük üretim.
        </p>

        {/* Premium Buton - Altın Rengi ve Parlama Efektli */}
        <a
          href={whatsappUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine group relative inline-flex items-center gap-3 bg-gold px-10 py-5 rounded-full text-deep-green font-bold text-lg shadow-xl hover:bg-white hover:text-deep-green transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up [animation-delay:400ms]"
        >
          <span>WhatsApp ile Sipariş Ver</span>
          {/* Ok İkonu */}
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        
        <p className="mt-4 text-sm text-cream/60 animate-fade-in-up [animation-delay:600ms]">
          *Günlük sınırlı sayıda üretim
        </p>
      </div>
    </section>
  );
}