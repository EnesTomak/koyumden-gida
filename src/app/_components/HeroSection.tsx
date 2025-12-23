'use client';

import Image from 'next/image';
import { siteConfig } from '@/src/config/site';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  // FAZ 3: Scroll Takibi (Paralaks Efekti İçin)
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Performans için sadece requestAnimationFrame ile güncelleme yapılabilir
      // ama basit kullanımda bu da yeterlidir.
      setScrollY(window.scrollY);
    };

    // Scroll event'ini dinle (passive: true performansı artırır)
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Temizlik (Cleanup) fonksiyonu
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = siteConfig.phone.replace(/\D/g, '');
  const whatsappMessage = "Merhaba, lezzet hikayenize ortak olmak istiyorum.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* === ARKA PLAN (Paralaks Efektli) === */}
      {/* Arka plan kullanıcının scroll hızının yarısı kadar hareket eder (0.5),
         bu da derinlik hissi yaratır. 
      */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        {/* Video - Yavaşça Yakınlaşma (Slow Pan) Efekti Eklendi */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 animate-slow-pan"
          poster="/images/hero-background.webp"
        >
          {/* <source src="/videos/hero-sarma.mp4" type="video/mp4" /> */}
        </video>

        {/* Fallback Image - Yavaşça Yakınlaşma Efekti Eklendi */}
        <Image
          src="/images/hero-background.webp"
          alt="Köyümden Gıda Organik Sarma"
          fill
          priority
          quality={85}
          className="object-cover -z-10 animate-slow-pan"
          sizes="100vw"
        />

        {/* Degrade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10"></div>
      </div>

      {/* === İÇERİK (Ters Paralaks) === */}
      {/* İçerik yukarı doğru daha yavaş çıkar (-0.2) ve scroll yaptıkça 
         yavaşça silinir (opacity değişimi).
      */}
      <div
        className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center will-change-transform"
        style={{
          transform: `translateY(${scrollY * -0.2}px)`,
          opacity: 1 - scrollY / 700
        }}
      >

        {/* Başlık */}
        <h1 className="font-playfair mb-6 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-tight animate-fade-in-up opacity-0 drop-shadow-2xl">
          Köyden Gelen
          <br />
          <span className="text-gold block mt-2 sm:mt-4">Lezzet Öyküsü</span>
        </h1>

        {/* Alt Başlık */}
        <p className="font-inter mb-10 max-w-2xl text-lg sm:text-2xl text-white/90 font-light tracking-wide
                      animate-fade-in-up opacity-0 [animation-delay:200ms] drop-shadow-lg">
          Her sarma, üç nesillik geleneğin ve doğanın<br className="hidden sm:block" /> armağanının buluşması.
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up opacity-0 [animation-delay:400ms]">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-8 py-4 text-lg font-bold text-slate-dark shadow-xl 
                       transition-all duration-300 hover:scale-105 hover:bg-gold-light hover:shadow-gold/20"
          >
            WhatsApp'tan Sipariş Ver
          </a>

          <a
            href="#story"
            className="rounded-full border-2 border-white/80 px-8 py-4 text-lg font-medium text-white 
                       transition-all duration-300 hover:bg-white hover:text-slate-dark backdrop-blur-sm"
          >
            Hikayemizi Keşfet
          </a>
        </div>

        {/* Scroll Göstergesi (Aşağı kaydıkça kaybolur) */}
        <div
          className="absolute bottom-8 animate-bounce z-20 transition-opacity duration-300"
          style={{ opacity: scrollY > 50 ? 0 : 1 }}
        >
          <a href="#story" aria-label="Aşağı kaydır">
            <svg className="h-8 w-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}