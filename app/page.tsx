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
import { motion } from 'motion/react';
import { workProcess } from '@/lib/constants-services';
import WhyChooseUs from '@/components/WhyChooseUs';

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
        <div id="standard">
          <WhyChooseUs />
        </div>
        <div>
          {/* CTA Section */}
        <section className="py-24 bg-brand text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl mb-8">Have a Complex Project?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg">
              Our multi-disciplinary team is ready to tackle your most challenging infrastructure needs with integrated solutions.
            </p>
            <button className="px-12 py-6 bg-industrial text-white font-display tracking-widest hover:bg-white hover:text-industrial transition-all">
              CONTACT OUR ENGINEERS
            </button>
          </div>
        </section>
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
