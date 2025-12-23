import HeroSection from './_components/HeroSection';
import JourneySection from './_components/JourneySection';
import StoryGrid from './_components/StoryGrid';
import VideoShowcase from './_components/VideoShowcase';
import dynamic from 'next/dynamic';
import ClientLogos from './_components/ClientLogos';
import Footer from './_components/Footer';

const PhotoGallery = dynamic(() => import('./_components/PhotoGallery'));

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

      <div id="galeri">
        <PhotoGallery />
      </div>

      <div id="iletisim">
        <ClientLogos />
      </div>

      <Footer />
    </main>
  );
}
