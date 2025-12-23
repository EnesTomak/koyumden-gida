'use client';

export default function JourneySection() {
    const steps = [
        { time: "05:00", title: "Hasat Zamanı", description: "Günün en verimli saatlerinde hammadde toplanır.", icon: "🌱" },
        { time: "08:00", title: "Üretim", description: "Geleneksel yöntemler modern hijyenle buluşur.", icon: "🏭" },
        { time: "12:00", title: "Usta Eli", description: "Uzmanlar tarafından titizlikle hazırlanır.", icon: "👩‍🍳" },
        { time: "18:00", title: "Teslimat", description: "En taze haliyle yola çıkar.", icon: "📦" }
    ];

    return (
        <section id="surec" className="bg-cream py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Bölüm Başlığı */}
                <div className="text-center mb-16">
                    {/* DÜZELTME: 'text-gold' yerine daha koyu ve okunaklı olan 'text-earth' kullanıldı */}
                    <span className="text-earth font-serif italic text-2xl block mb-2">Süreç</span>
                    <h2 className="font-serif text-5xl font-bold text-slate">Tarladan Sofraya</h2>
                </div>

                {/* Timeline Akışı */}
                <div className="relative max-w-5xl mx-auto space-y-12">
                    {/* Ortadaki Çizgi (Dekoratif olduğu için gold kalabilir) */}
                    <div className="absolute left-[28px] sm:left-1/2 top-0 bottom-0 w-1 bg-gold/30 sm:-translate-x-1/2 rounded-full" />

                    {steps.map((step, i) => (
                        <div key={i} className={`relative flex items-center gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>

                            {/* Boşluk (Layout Düzeni İçin) */}
                            <div className="hidden sm:block sm:w-1/2" />

                            {/* İkon Yuvarlağı */}
                            <div className="absolute left-[28px] sm:left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-4 border-gold rounded-full flex items-center justify-center z-10 text-2xl shadow-lg">
                                {step.icon}
                            </div>

                            {/* İçerik Kartı */}
                            <div className="ml-16 sm:ml-0 sm:w-1/2 sm:px-16 w-full">
                                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-parchment hover:border-gold/30">
                                    {/* DÜZELTME: Saat bilgisi de 'text-earth' yapıldı */}
                                    <div className="text-earth font-bold mb-2">{step.time}</div>

                                    <h3 className="font-serif text-2xl font-bold text-slate mb-2">{step.title}</h3>
                                    <p className="text-slate/90">{step.description}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}