'use client';

import Image from 'next/image';
import { siteConfig } from '@/src/config/site';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = siteConfig.phone.replace(/\D/g, '');
  const whatsappMessage = "Merhaba, ürünleriniz hakkında bilgi almak istiyorum.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
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

        <Image
          src="/images/hero-background.webp"
          alt="Hero Background"
          fill
          priority
          quality={85}
          className="object-cover -z-10 animate-slow-pan"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 z-10"></div>
      </div>

      <div
        className="relative z-20 flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto will-change-transform"
        style={{
          transform: `translateY(${scrollY * -0.2}px)`,
          opacity: 1 - scrollY / 700
        }}
      >
        <h1 className="font-playfair mb-8 font-bold leading-[1.1] tracking-tight animate-fade-in-up opacity-0 drop-shadow-2xl">
          <span className="block text-5xl sm:text-7xl md:text-8xl text-white">
            Doğadan Gelen
          </span>
          <span className="block text-6xl sm:text-8xl md:text-9xl mt-2 sm:mt-4 bg-gradient-to-r from-[#fff5d1] via-[#e8b923] to-[#fff5d1] bg-clip-text text-transparent">
            Gerçek Lezzet
          </span>
        </h1>

        <p className="font-inter mb-10 max-w-2xl text-lg sm:text-2xl text-white/90 font-light tracking-wide leading-relaxed
                      animate-fade-in-up opacity-0 [animation-delay:200ms] drop-shadow-md">
          Üç nesillik aile geleneği, modern üretim anlayışıyla buluştu.
          <br className="hidden sm:block" />
          Katkısız, doğal ve sofranıza layık.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up opacity-0 [animation-delay:400ms]">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gold rounded-full text-slate-dark text-lg font-bold shadow-xl overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">WhatsApp İle Sipariş</span>
            <div className="absolute inset-0 bg-slate-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          <a
            href="#surec"
            className="px-8 py-4 border-2 border-white/70 text-white rounded-full text-lg font-medium hover:bg-white hover:text-slate-dark transition-all duration-300 backdrop-blur-sm"
          >
            Hikayemizi İncele
          </a>
        </div>
      </div>
    </section>
  );
}