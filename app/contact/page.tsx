'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import ContactForm from '@/components/ContactForm';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <Navbar />
      <main className="bg-industrial min-h-screen pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-brand text-xs font-bold tracking-[0.5em] uppercase mb-6 block">
              Contact Us
            </span>
            <h1 className="text-white text-6xl md:text-8xl mb-12">
              Let&apos;s Build <br /> <span className="text-brand">Together</span>.
            </h1>
          </motion.div>
        </section>

        {/* Contact Details Grid */}
        <section className="container mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "Office", detail: "124 Industrial Way, New York, NY 10001" },
              { icon: Phone, title: "Phone", detail: "+1 (555) 0123-4567" },
              { icon: Mail, title: "Email", detail: "hello@modernbuild.trade" },
              { icon: Clock, title: "Hours", detail: "Mon - Fri: 8:00 AM - 6:00 PM" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark p-8 border border-white/5 hover:border-brand/30 transition-colors"
              >
                <item.icon className="w-6 h-6 text-brand mb-6" />
                <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Form Section */}
        <ContactForm />

        {/* Map Placeholder */}
        <section className="w-full h-[400px] bg-industrial/50 relative overflow-hidden grayscale opacity-50 hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display text-4xl uppercase tracking-widest">
            Interactive Map Placeholder
          </div>
          {/* In a real app, you'd embed a Google Map here */}
        </section>
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
