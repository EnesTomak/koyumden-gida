import Image from 'next/image';
import { siteConfig } from '@/src/config/site';

export default function ClientLogos() {
  const content = siteConfig.content.clients;

  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Bölüm Başlığı (Dinamik) */}
        <div className="mb-16 text-center">
          <h2 className="font-serif mb-4 text-4xl font-bold text-slate sm:text-5xl">
            {content.title}
          </h2>
          <p className="text-slate/70 mx-auto max-w-2xl">
            {content.description}
          </p>
        </div>

        {/* Logo Duvarı */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 lg:gap-x-24">
          {content.list.map((client, index) => (
            <div
              key={index}
              className="relative h-12 w-36 grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              title={client.name} // Logo üzerine gelince firma adını göster
            >
              <Image
                src={client.logo}
                alt={`${client.name} referans logosu`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 150px, 200px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}