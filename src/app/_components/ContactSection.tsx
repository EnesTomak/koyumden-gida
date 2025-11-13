import { HomeIcon, MobileIcon, ClockIcon } from '@radix-ui/react-icons';
import { siteConfig } from '@/src/config/site'; // Zaten import edilmişti

export default function ContactSection() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.68359671237764!2d31.388181518690452!3d41.179529345401804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409c510e1730d627%3A0x2754da9c255c2fd!2sMerkez%2C%20Ali%20Alp%20Cd.%20No%3A53%2C%2067852%20Alapl%C4%B1%2FZonguldak!5e0!3m2!1str!2str!4v1763030654078!5m2!1str!2str"; 

  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.locality}, ${siteConfig.address.city}, ${siteConfig.address.country}`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
  
  const whatsappNumber = siteConfig.phone.replace(/\D/g, '');
  const whatsappMessage = "Merhaba, sitenizden ulaşıyorum. Sipariş vermek istiyorum.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  // === GÜNCELLENDİ: İçerik siteConfig'den çekiliyor ===
  const contactContent = siteConfig.content.contact;

  return (
    <section className="bg-gradient-to-br from-parchment via-olive/10 to-earth/10 py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Başlık (Dinamik) */}
        <div className="mb-12 text-center">
          <h2 className="font-serif mb-4 text-4xl font-bold text-slate sm:text-5xl">
            {contactContent.title}
          </h2>
          <p className="text-slate/70 mx-auto max-w-2xl">
            {contactContent.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            {/* Adres (Dinamik) */}
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

            {/* İletişim (Dinamik) */}
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

            {/* Açılış Saatleri (Dinamik) */}
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

            {/* Butonlar (Dinamik) */}
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

          {/* Harita */}
          <div className="rounded-2xl bg-parchment/80 backdrop-blur-sm p-8 shadow-lg">
            <h3 className="font-serif mb-4 text-2xl font-bold text-slate">
              Konum
            </h3>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <iframe
                src={mapEmbedUrl}
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

        {/* Sosyal Medya (Dinamik) */}
        <div className="mt-12 text-center">
          <p className="font-serif mb-6 text-xl font-semibold text-slate">
            Bizi Takip Edin
          </p>
          <div className="flex justify-center gap-6">
            <a
            //  href={siteConfig.social.instagram}
             // target="_blank"
              //rel="noopener noreferrer"
             // className="rounded-full bg-slate p-4 text-white transition-transform hover:scale-110"
            //  aria-label="Instagram'da takip edin"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            //<a
              //href={siteConfig.social.facebook}
              //target="_blank"
              //rel="noopener noreferrer"
              //className="rounded-full bg-slate p-4 text-white transition-transform hover:scale-110"
              //aria-label="Facebook'ta takip edin"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}