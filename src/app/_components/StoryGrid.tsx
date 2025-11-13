// Dosya Yolu: src/app/_components/StoryGrid.tsx
'use client'; // Bu, 'use client' olarak kalmalı (useEffect ve useRef kullanacağız)

import React, { useEffect, useRef } from 'react';
import {
  CheckCircledIcon,
  BlendingModeIcon,
  OpacityIcon,
  MixIcon,
} from '@radix-ui/react-icons';
// GÜNCELLEME: GSAP ve ScrollTrigger import'ları SİLİNDİ.

interface StoryCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
}

// GÜNCELLEME: Tip tanımına `style?: React.CSSProperties` eklendi
const StoryCard: React.FC<
  StoryCardProps & { className?: string; style?: React.CSSProperties } // <-- Burayı güncelle
> = ({ title, description, icon, className, style }) => { // <-- style'ı props'tan al
  return (
    <div
      // GÜNCELLEME: style prop'unu div'e aktar
      style={style} // <-- Bu satırı ekle
      className={`story-card group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg ${
        className || ''
      }`}
    >
      <div className="relative z-10">
        {icon}
        <h3 className="font-serif mb-4 text-2xl font-bold text-slate">
          {title}
        </h3>
        <p className="text-slate/80">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-olive/10 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </div>
  );
};

export default function StoryGrid() {
  // GÜNCELLEME: Sadece grid'in ana container'ı için ref'e ihtiyacımız var
  const gridRef = useRef<HTMLDivElement>(null);

  // GÜNCELLEME: GSAP useEffect'i yerine IntersectionObserver useEffect'i
  useEffect(() => {
    // Client-side check
    if (typeof window === 'undefined' || !gridRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Element ekrana girdiğinde 'is-visible' sınıfını ekle
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Animasyon tetiklendikten sonra performansı artırmak için
            // bu elementi izlemeyi bırak
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Kartın %20'si göründüğünde tetikle
        rootMargin: '0px 0px -50px 0px', // Tetiklemeyi biraz geciktir
      }
    );

    // Grid içindeki tüm 'story-card' elementlerini seç ve izle
    const cards = gridRef.current.querySelectorAll('.story-card');
    if (cards.length > 0) {
      cards.forEach((card) => {
        observer.observe(card);
      });
    }

    // Component unmount olduğunda observer'ı temizle
    return () => {
      if (cards.length > 0) {
        cards.forEach((card) => {
          observer.unobserve(card);
        });
      }
    };
  }, []); // Bağımlılık dizisi boş kalmalı

  return (
    <section id="story" className="bg-parchment py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Bölüm Başlığı (Değişiklik yok) */}
        <div className="mb-16 text-center">
          <h2 className="font-serif mb-4 text-4xl font-bold text-slate sm:text-5xl">
            Mutfağımızdan Sofranıza
          </h2>
          <p className="text-slate/70 mx-auto max-w-2xl">
            Her bir sarma, aile geleneğimizin ve doğanın en iyisini sunma
            tutkusunun bir yansımasıdır
          </p>
        </div>

        {/* GÜNCELLEME: Izgaraya ref eklendi */}
        <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {/* GÜNCELLEME: Kademeli gecikme (stagger) için inline style eklendi */}
          <StoryCard
            title="Kalite Standardımız"
            description="Üç nesillik aile tarifimiz, modern teknolojiyle birleşti. El değmeden, hijyenik üretimle her sarmada aynı lezzet."
            icon={<CheckCircledIcon className="w-10 h-10 text-accent mb-4" />}
            style={{ transitionDelay: '100ms' }}
          />
          <StoryCard
            title="En Taze Yapraklar"
            description="Her sabah erken saatlerde toplanan, organik asma yaprakları. Doğanın en saf hali, mutfağımızda."
            icon={<BlendingModeIcon className="w-10 h-10 text-accent mb-4" />}
            style={{ transitionDelay: '200ms' }}
          />
          <StoryCard
            title="Saf Zeytinyağı"
            description="Sadece yerel üreticilerden seçilen, soğuk sıkım zeytinyağı. Her damlası lezzet dolu."
            icon={<OpacityIcon className="w-10 h-10 text-accent mb-4" />}
            style={{ transitionDelay: '300ms' }}
          />
          <StoryCard
            title="Mükemmel Karışım"
            description="Pirinç, baharat ve otların hassas dengesi. Makine hassasiyetiyle her sarmada tutarlı mükemmellik."
            icon={<MixIcon className="w-10 h-10 text-accent mb-4" />}
            style={{ transitionDelay: '400ms' }}
          />
        </div>
      </div>
    </section>
  );
}
