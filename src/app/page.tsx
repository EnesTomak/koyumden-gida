import HeroSection from './_components/HeroSection';
import JourneySection from './_components/JourneySection';
import StoryGrid from './_components/StoryGrid';
import VideoShowcase from './_components/VideoShowcase';
// Dynamic import'u kaldırdık, direkt import ediyoruz:
import PhotoGallery from './_components/PhotoGallery';
import ClientLogos from './_components/ClientLogos';
import Footer from './_components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <div id="surec">
        <JourneySection />
      </div>

      <div id="hikayemiz">
        <StoryGrid />
      </div>

      <VideoShowcase />

      {/* ID ekledik ki Header linki çalışsın */}
      <div id="galeri">
        <PhotoGallery />
      </div>

      {/* İletişim ID'si buraya yönlendirsin */}
      <div id="iletisim">
        <ClientLogos />
      </div>

      <Footer />
    </main>
  );
}