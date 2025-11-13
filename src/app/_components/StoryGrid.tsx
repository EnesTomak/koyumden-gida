// Dosya Yolu: src/app/_components/StoryGrid.tsx
'use client'; 

import React, { useEffect, useRef } from 'react';
import {
  CheckCircledIcon,
  BlendingModeIcon,
  OpacityIcon,
  MixIcon,
} from '@radix-ui/react-icons';
import { siteConfig } from '@/src/config/site'; // === GÜNCELLENDİ ===

interface StoryCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
}

const StoryCard: React.FC<
  StoryCardProps & { className?: string; style?: React.CSSProperties }
> = ({ title, description, icon, className, style }) => {
  return (
    <div
      style={style}
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
  const gridRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver useEffect (Animasyon için)
  useEffect(() => {
    if (typeof window === 'undefined' || !gridRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    const cards = gridRef.current.querySelectorAll('.story-card');
    if (cards.length > 0) cards.forEach((card) => observer.observe(card));
    return () => {
      if (cards.length > 0) cards.forEach((card) => observer.unobserve(card));
    };
  }, []); 

  // === GÜNCELLENDİ: İçerik siteConfig'den çekiliyor ===
  const storyContent = siteConfig.content.story;

  return (
    <section id="story" className="bg-parchment py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Bölüm Başlığı (Dinamik) */}
        <div className="mb-16 text-center">
          <h2 className="font-serif mb-4 text-4xl font-bold text-slate sm:text-5xl">
            {storyContent.title}
          </h2>
          <p className="text-slate/70 mx-auto max-w-2xl">
            {storyContent.description}
          </p>
        </div>

        {/* Kartlar (Dinamik) */}
        <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <StoryCard
            title={storyContent.cards[0].title}
            description={storyContent.cards[0].description}
            icon={<CheckCircledIcon className="w-10 h-10 text-accent mb-4" />}
            style={{ transitionDelay: '100ms' }}
          />
          <StoryCard
            title={storyContent.cards[1].title}
            description={storyContent.cards[1].description}
            icon={<BlendingModeIcon className="w-10 h-10 text-accent mb-4" />}
            style={{ transitionDelay: '200ms' }}
          />
          <StoryCard
            title={storyContent.cards[2].title}
            description={storyContent.cards[2].description}
            icon={<OpacityIcon className="w-10 h-10 text-accent mb-4" />}
            style={{ transitionDelay: '300ms' }}
          />
          <StoryCard
            title={storyContent.cards[3].title}
            description={storyContent.cards[3].description}
            icon={<MixIcon className="w-10 h-10 text-accent mb-4" />}
            style={{ transitionDelay: '400ms' }}
          />
        </div>
      </div>
    </section>
  );
}