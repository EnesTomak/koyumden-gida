'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/src/config/site';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const whatsappNumber = siteConfig.phone.replace(/\D/g, '');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-cream/95 backdrop-blur-md py-3 shadow-sm border-b border-gold/10' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a href="/" className="relative z-50 block w-32 md:w-40 transition-all">
                    <Image src="/images/logo.png" alt="Logo" width={160} height={60} className="object-contain" priority />
                </a>
                <nav className="hidden md:flex items-center gap-8">
                    {['Hikayemiz', 'Süreç', 'Galeri', 'İletişim'].map(item => (
                        <a key={item} href={`#${item.toLowerCase().replace('ç', 'c').replace('ş', 's')}`} className={`font-medium hover:text-gold transition-colors ${isScrolled ? 'text-slate' : 'text-white'}`}>{item}</a>
                    ))}
                    <a href={`https://wa.me/${whatsappNumber}`} className="px-6 py-2.5 bg-gold text-slate-dark rounded-full font-bold hover:scale-105 transition-transform text-sm">Sipariş Ver</a>
                </nav>
                {/* Mobile menu button logic here if needed */}
            </div>
        </header>
    );
}
