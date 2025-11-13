import HeroSection from './_components/HeroSection';
import StoryGrid from './_components/StoryGrid';
import VideoShowcase from './_components/VideoShowcase';
import dynamic from 'next/dynamic';
import ClientLogos from './_components/ClientLogos'; // ClientLogos (Referanslar) bileşenini import ediyoruz
const PhotoGallery = dynamic(() => import('./_components/PhotoGallery'));
const ContactSection = dynamic(() => import('./_components/ContactSection'));


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StoryGrid />
      <VideoShowcase />
      <PhotoGallery /> 
      <ClientLogos />
      <ContactSection /> 
    </main>
  );
}
