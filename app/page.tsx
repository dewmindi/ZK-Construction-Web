import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid';
import StatsBar from '@/components/StatsBar';
import Timeline from '@/components/Timeline';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Preloader from '@/components/Preloader';

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <div id="services">
          <ServiceGrid />
        </div>
        <div id="process">
          <Timeline />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
