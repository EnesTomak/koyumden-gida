'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/src/config/site';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const whatsappNumber = siteConfig.phone.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Merhaba, sipariş vermek istiyorum.`;

    // Scroll takibi
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Menü Linkleri - Sayfa içi ID'ler ile eşleşmeli
    const navItems = [
        { name: 'Süreç', href: '#surec' },
        { name: 'Hikayemiz', href: '#hikayemiz' },
        { name: 'Galeri', href: '#galeri' },
        { name: 'İletişim', href: '#iletisim' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-cream/95 backdrop-blur-md py-3 shadow-sm border-b border-gold/10'
                    : 'bg-transparent py-4 md:py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between relative">

                {/* === LOGO === */}
                <div className="relative z-50">
                    <a href="/" className="block relative group" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className={`relative transition-all duration-500 ${isScrolled ? 'w-24 md:w-32' : 'w-32 md:w-40'}`}>
                            <Image
                                src="/images/logo.png"
                                alt="Köyümden Gıda Logo"
                                width={160}
                                height={60}
                                // LOGO RENGİNE MÜDAHALE EDİLMEDİ: Sadece boyutlandırma sınıfı var.
                                className="object-contain"
                                priority
                            />
                        </div>
                    </a>
                </div>

                {/* === DESKTOP MENU === */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium tracking-wide hover:text-gold transition-colors duration-300 ${isScrolled ? 'text-slate' : 'text-white/90 hover:text-white'
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-md ${isScrolled
                                ? 'bg-gold text-slate-dark hover:bg-gold-dark'
                                : 'bg-white text-slate-dark hover:bg-parchment'
                            }`}
                    >
                        Sipariş Ver
                    </a>
                </nav>

                {/* === MOBILE MENU TOGGLE (Hamburger) === */}
                <button
                    className="md:hidden relative z-50 p-2 focus:outline-none group"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menüyü Aç/Kapat"
                >
                    <div className="w-7 flex flex-col items-end gap-1.5">
                        <span
                            className={`block h-0.5 rounded-full transition-all duration-300 
              ${isMobileMenuOpen ? 'w-7 rotate-45 translate-y-2 bg-slate' : 'w-7'} 
              ${!isMobileMenuOpen && !isScrolled ? 'bg-white' : 'bg-slate'}`}
                        />
                        <span
                            className={`block h-0.5 rounded-full transition-all duration-300 
              ${isMobileMenuOpen ? 'opacity-0' : 'w-5'} 
              ${!isMobileMenuOpen && !isScrolled ? 'bg-white' : 'bg-slate'}`}
                        />
                        <span
                            className={`block h-0.5 rounded-full transition-all duration-300 
              ${isMobileMenuOpen ? 'w-7 -rotate-45 -translate-y-2 bg-slate' : 'w-7'} 
              ${!isMobileMenuOpen && !isScrolled ? 'bg-white' : 'bg-slate'}`}
                        />
                    </div>
                </button>

                {/* === MOBILE MENU DROPDOWN (Kompakt) === */}
                <div
                    className={`absolute top-full right-4 w-64 bg-white rounded-2xl shadow-xl border border-parchment overflow-hidden transition-all duration-300 origin-top-right transform ${isMobileMenuOpen
                            ? 'opacity-100 scale-100 visible translate-y-2'
                            : 'opacity-0 scale-95 invisible translate-y-0 pointer-events-none'
                        }`}
                >
                    <div className="flex flex-col py-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-6 py-3 text-slate hover:bg-parchment/50 hover:text-gold transition-colors font-medium text-left border-b border-parchment/30 last:border-none"
                            >
                                {item.name}
                            </a>
                        ))}

                        <div className="p-4 mt-2 bg-parchment/20">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center px-4 py-3 bg-gold text-slate-dark rounded-xl font-bold shadow-sm active:scale-95 transition-transform"
                            >
                                Sipariş Ver
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}