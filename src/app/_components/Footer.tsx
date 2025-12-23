'use client';

import { siteConfig } from '@/src/config/site';
import { InstagramLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const whatsappNumber = siteConfig.phone.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    const instagramUrl = "https://www.instagram.com/koyumdengidaa/";

    return (
        <footer className="bg-slate text-parchment pt-20 pb-6 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Üst Kısım: Grid Yapısı */}
                <div className="grid md:grid-cols-12 gap-12 mb-20">

                    {/* Sol: Marka Sloganı & Manifesto */}
                    <div className="md:col-span-5">
                        <h3 className="font-serif text-3xl md:text-4xl text-gold mb-6 leading-tight">
                            Doğallık bir seçimdir, <br />
                            vazgeçilmez bir yaşam tarzıdır.
                        </h3>
                        {/* GÜNCELLEME: Opaklık %60'tan %80'e çıkarıldı */}
                        <p className="text-parchment/80 font-light leading-relaxed max-w-md">
                            Dedelerimizin mirası tarifleri, modern dünyanın hijyen standartlarıyla buluşturuyoruz.
                            Katkısız, koruyucusuz ve tamamen doğal.
                        </p>
                    </div>

                    {/* Orta: Hızlı Linkler */}
                    <div className="md:col-span-3 md:col-start-7">
                        <h4 className="font-serif text-xl text-white mb-6">Keşfet</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Süreç', id: 'surec' },
                                { name: 'Hikayemiz', id: 'hikayemiz' },
                                { name: 'Galeri', id: 'galeri' },
                                { name: 'İletişim', id: 'iletisim' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={`#${item.id}`}
                                        // GÜNCELLEME: Linkler daha belirgin (%90)
                                        className="text-parchment/90 hover:text-gold transition-colors duration-300 inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sağ: İletişim (Sosyal Medya & Mail) */}
                    <div className="md:col-span-3">
                        <h4 className="font-serif text-xl text-white mb-6">İletişim</h4>
                        {/* GÜNCELLEME: İletişim bilgileri daha net (%80) */}
                        <div className="space-y-4 text-parchment/80">
                            <p className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gold inline-block"></span>
                                Zonguldak, Türkiye
                            </p>

                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="flex items-center gap-3 hover:text-gold transition-colors group"
                            >
                                {/* İkon rengi de belirginleştirildi */}
                                <EnvelopeClosedIcon className="w-5 h-5 text-parchment/80 group-hover:text-gold transition-colors" />
                                {siteConfig.email}
                            </a>

                            <div className="flex flex-col gap-4 mt-6">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-slate-dark rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-gold/20"
                                >
                                    <span>WhatsApp'tan Yazın</span>
                                </a>

                                <a
                                    href={instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-parchment/90 hover:text-instagram-pink transition-colors duration-300 group"
                                >
                                    <div className="p-2 bg-parchment/10 rounded-full group-hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 transition-all duration-300">
                                        <InstagramLogoIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="font-medium group-hover:text-white transition-colors">Instagram'da Takip Et</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ayırıcı Çizgi */}
                <div className="w-full h-px bg-parchment/10 mb-12"></div>

                {/* Alt Kısım */}
                <div className="flex flex-col items-center">
                    <h1 className="font-serif font-bold text-[10vw] md:text-[11vw] leading-none text-parchment/5 select-none pointer-events-none tracking-tight whitespace-nowrap">
                        KÖYÜMDEN GIDA
                    </h1>

                    {/* GÜNCELLEME: Telif yazısı %40'tan %60'a çıkarıldı */}
                    <div className="flex flex-col md:flex-row justify-between items-center w-full mt-8 text-sm text-parchment/60">
                        <p>&copy; {currentYear} Köyümden Gıda. Tüm hakları saklıdır.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <span className="hover:text-gold transition-colors cursor-pointer">Gizlilik</span>
                            <span className="hover:text-gold transition-colors cursor-pointer">Kullanım Şartları</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}