
// Dosya Yolu: src/app/_components/ContactSection.tsx
import { HomeIcon, MobileIcon, ClockIcon } from '@radix-ui/react-icons';
import { siteConfig } from '@/src/config/site';

export default function ContactSection() {

  // === GÜNCELLENDİ (Yeni Harita URL'niz) ===
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.68359671237764!2d31.388181518690452!3d41.179529345401804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409c510e1730d627%3A0x2754da9c255c2fd!2sMerkez%2C%20Ali%20Alp%20Cd.%20No%3A53%2C%2067852%20Alapl%C4%B1%2FZonguldak!5e0!3m2!1str!2str!4v1763030654078!5m2!1str!2str"; // Sizin verdiğiniz link

  // Adres ve WhatsApp linklerini config'den al
  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.locality}, ${siteConfig.address.city}, ${siteConfig.address.country}`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
  
  const whatsappNumber = siteConfig.phone.replace(/\D/g, ''); // Sadece rakamları al
  const whatsappMessage = "Merhaba, sitenizden ulaşıyorum. Sipariş vermek istiyorum.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


  return (
    <section className="bg-gradient-to-br from-parchment via-olive/10 to-earth/10 py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          {/* === GÜNCELLENDİ (Marka Adı Eklendi) === */}
          <h2 className="font-serif mb-4 text-4xl font-bold text-slate sm:text-5xl">
            Köyümden Gıda'yı Ziyaret Edin
          </h2>
          <p className="text-slate/70 mx-auto max-w-2xl">
            Sipariş verin veya dükkanımızda bizi ziyaret edin.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            {/* Adres (Config'den dinamik olarak gelir) */}
            <div className="rounded-2xl bg-parchment/80 backdrop-blur-sm p-8 shadow-lg">
              <div className="mb-4 flex items-center">
                <HomeIcon className="mr-3 h-6 w-6 text-olive" />
                <h3 className="font-serif text-2xl font-bold text-slate">
                  Adres
                </h3>
              </div>
              <p className="text-slate/80 mb-4">
                {siteConfig.address.street}<br />
                {siteConfig.address.locality}<br />
                {siteConfig.address.city}, {siteConfig.address.country}
              </p>
            </div>

            {/* İletişim (Config'den dinamik olarak gelir) */}
            <div className="rounded-2xl bg-parchment/80 backdrop-blur-sm p-8 shadow-lg">
              <div className="mb-4 flex items-center">
                <MobileIcon className="mr-3 h-6 w-6 text-olive" />
                <h3 className="font-serif text-2xl font-bold text-slate">
                  İletişim
                </h3>
              </div>
              <div className="space-y-3 text-slate/80">
                <p>
                  <strong>Telefon:</strong>{' '}
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">
                    {siteConfig.phone}
                  </a>
                </p>
                <p>
                  <strong>E-posta:</strong>{' '}
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Açılış Saatleri (Config'den dinamik olarak gelir) */}
            <div className="rounded-2xl bg-parchment/80 backdrop-blur-sm p-8 shadow-lg">
              <div className="mb-4 flex items-center">
                <ClockIcon className="mr-3 h-6 w-6 text-olive" />
                <h3 className="font-serif text-2xl font-bold text-slate">
                  Açılış Saatleri
                </h3>
              </div>
              <div className="space-y-2 text-slate/80">
                {siteConfig.openingHours.map((item) => (
                  <p key={item.day}>{item.day}: {item.hours}</p>
                ))}
              </div>
            </div>

            {/* === GÜNCELLENDİ (İki Buton Eklendi) === */}
            <div className="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                aria-label="WhatsApp'tan Sipariş Ver"
              >
                WhatsApp'tan Sipariş Ver
              </a>
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                aria-label="Google Maps'te yol tarifi al"
              >
                Yol Tarifi Al
              </a>
            </div>

          </div>

          {/* Harita (Config'den dinamik olarak gelir) */}
          <div className="rounded-2xl bg-parchment/80 backdrop-blur-sm p-8 shadow-lg">
            <h3 className="font-serif mb-4 text-2xl font-bold text-slate">
              Konum
            </h3>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <iframe
                src={mapEmbedUrl} // === GÜNCELLENDİ ===
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full rounded-xl"
                title="İşletme Konumu"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Sosyal Medya (Config'den dinamik olarak gelir) */}
        <div className="mt-12 text-center">
          <p className="font-serif mb-6 text-xl font-semibold text-slate">
            Bizi Takip Edin
          </p>
          
        </div>
      </div>
    </section>
  );
}