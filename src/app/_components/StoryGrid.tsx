'use client'; 

import React, { useEffect, useRef } from 'react';
import { siteConfig } from '@/src/config/site';
import { CheckCircledIcon, StarFilledIcon, HeartFilledIcon, SunIcon } from '@radix-ui/react-icons';

interface StoryCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  index: number;
}

const StoryCard: React.FC<StoryCardProps> = ({ title, description, icon, index }) => {
  return (
    <div
      className="story-card flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-500 group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-6 p-4 rounded-full bg-cream group-hover:bg-deep-green transition-colors duration-500">
        {/* İkon rengi değişimi: Yeşilden Altına */}
        <div className="text-deep-green group-hover:text-gold transition-colors duration-500 transform group-hover:scale-110">
          {icon}
        </div>
      </div>
      <h3 className="font-serif text-2xl font-bold text-deep-green mb-3">
        {title}
      </h3>
      <p className="text-earth leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
};

export default function StoryGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const storyContent = siteConfig.content.story;

  // Kartların ekrana girince animasyonla gelmesi için Gözlemci (Observer)
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
      { threshold: 0.1 }
    );
    const cards = gridRef.current.querySelectorAll('.story-card');
    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []); 

  // Sırasıyla ikonlar
  const icons = [
    <StarFilledIcon key="1" className="w-8 h-8" />,
    <SunIcon key="2" className="w-8 h-8" />,
    <HeartFilledIcon key="3" className="w-8 h-8" />,
    <CheckCircledIcon key="4" className="w-8 h-8" />
  ];

  return (
    <section id="story" className="bg-cream py-24 px-4 relative overflow-hidden">
      {/* Arka plan süslemeleri (Zeytin dalı hissi veren flu daireler) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-olive-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-gold font-serif italic text-xl block mb-3">Neden Köyümden Gıda?</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-deep-green mb-6 leading-tight">
            {storyContent.title}
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-8"></div>
          <p className="text-earth text-lg font-light">
            {storyContent.description}
          </p>
        </div>

        <div ref={gridRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {storyContent.cards.map((card, idx) => (
            <StoryCard
              key={idx}
              index={idx}
              title={card.title}
              description={card.description}
              icon={icons[idx]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}