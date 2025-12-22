import { MobileIcon, SewingPinFilledIcon } from '@radix-ui/react-icons';
import { siteConfig } from '@/src/config/site';

export default function ContactSection() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.68359671237764!2d31.388181518690452!3d41.179529345401804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409c510e1730d627%3A0x2754da9c255c2fd!2sMerkez%2C%20Ali%20Alp%20Cd.%20No%3A53%2C%2067852%20Alapl%C4%B1%2FZonguldak!5e0!3m2!1str!2str!4v1763030654078!5m2!1str!2str"; 

  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.locality}, ${siteConfig.address.city}`;
  const whatsappNumber = siteConfig.phone.replace(/\D/g, '');
  const whatsappMessage = "Merhaba, adres tarifi almak ve sipariş vermek istiyorum.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="bg-deep-green text-cream py-24 px-4 border-t-4 border-gold">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Sol Taraf: Bilgiler */}
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
                Lezzete Bekliyoruz
              </h2>
              <p className="text-cream/80 text-lg font-light">
                İster dükkanımıza uğrayın taze taze alın, ister WhatsApp'tan yazın kapınıza getirelim.
              </p>
            </div>

            <div className="space-y-6">
              {/* Adres Kartı */}
              <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <SewingPinFilledIcon className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2">Dükkan Adresi</h3>
                  <p className="text-cream/70 leading-relaxed">
                    {siteConfig.address.street}<br/>
                    {siteConfig.address.locality}, {siteConfig.address.city}
                  </p>
                </div>
              </div>

              {/* İletişim Kartı */}
              <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <MobileIcon className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2">Hızlı Sipariş</h3>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-2xl font-light hover:text-gold transition-colors block mb-1">
                    {siteConfig.phone}
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-cream/50 hover:text-white transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-green-900/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              WhatsApp'tan Hemen Yaz
            </a>
          </div>

          {/* Sağ Taraf: Harita - Siteye uyumlu grayscale filtreli */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="İşletme Konumu"
            ></iframe>
            {/* Harita üzerine interaktif buton */}
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.address.street + ' ' + siteConfig.address.city)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white text-deep-green px-4 py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-gold hover:text-white transition-colors"
            >
              Yol Tarifi Al ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}