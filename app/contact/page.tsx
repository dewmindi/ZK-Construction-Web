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
              { icon: MapPin, title: "Office", detail: "9 Langford Street, Banya, 4551" },
              { icon: Phone, title: "Phone", detail: "0476310454" },
              { icon: Mail, title: "Email", detail: "info@zkcg.com.au" },
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
        <section className="w-full h-[400px] bg-industrial/50 relative overflow-hidden ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14183.123456789012!2d153.05600000000002!3d-26.815000000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b93998765432101%3A0x1234567890abcdef!2s9%20Langford%20St%2C%20Banya%20QLD%204551!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
          
        </section>
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
