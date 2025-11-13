import HeroSection from './_components/HeroSection';
import StoryGrid from './_components/StoryGrid';
import VideoShowcase from './_components/VideoShowcase';
//import PhotoGallery from './_components/PhotoGallery';
//import ContactSection from './_components/ContactSection';
import dynamic from 'next/dynamic';

const PhotoGallery = dynamic(() => import('./_components/PhotoGallery'));
const ContactSection = dynamic(() => import('./_components/ContactSection'));


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StoryGrid />
      <VideoShowcase />
      <PhotoGallery /> {/* Kullanım aynı kalır */}
      <ContactSection /> {/* Kullanım aynı kalır */}
    </main>
  );
}
