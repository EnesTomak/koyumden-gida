'use client';
import { siteConfig } from '@/src/config/site';

export default function Footer() {
    const whatsappNumber = siteConfig.phone.replace(/\D/g, '');
    return (
        <footer className="bg-slate text-parchment pt-24 pb-8 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h3 className="font-serif text-4xl text-gold mb-6 leading-tight">Doğallık bir seçimdir.</h3>
                        <p className="text-parchment/60 max-w-md">Dedelerimizin mirası tarifleri, modern dünyanın hijyen standartlarıyla buluşturuyoruz.</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                        <a href={`https://wa.me/${whatsappNumber}`} className="px-8 py-4 bg-gold text-slate-dark rounded-full font-bold hover:bg-white transition-colors text-lg">WhatsApp'tan Yazın</a>
                        <p className="mt-6 text-parchment/50">İstanbul, Türkiye</p>
                    </div>
                </div>
                <div className="w-full h-px bg-parchment/10 mb-12"></div>
                <div className="text-center">
                    <h1 className="font-serif font-bold text-[13vw] leading-none text-parchment/5 select-none tracking-tighter">KÖYÜMDEN</h1>
                    <p className="mt-8 text-sm text-parchment/30">&copy; {new Date().getFullYear()} Köyümden Gıda. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}