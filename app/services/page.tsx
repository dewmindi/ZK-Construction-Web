'use client';

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Preloader from '@/components/Preloader';
import Image from 'next/image';
import { serviceDetails, workProcess } from '@/lib/constants-services';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function ServicesPage() {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <Navbar />
      <main className="bg-paper">
        {/* Header */}
        <section className="pt-48 pb-24 bg-industrial text-white">
          <div className="container mx-auto px-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand text-xs font-bold tracking-[0.4em] uppercase mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl leading-none mb-8"
            >
              Professional <br /> Trade Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/50 max-w-xl text-lg leading-relaxed"
            >
              We provide end-to-end solutions across construction, electrical, and plumbing sectors, ensuring every project meets the highest standards of precision and safety.
            </motion.p>
          </div>
        </section>

        {/* Detailed Services */}
        <div className="space-y-48 py-32 bg-paper">
          {serviceDetails.map((service, i) => (
            <section 
              key={service.id} 
              id={service.id} 
              className={`container mx-auto px-6 scroll-mt-32`}
            >
              <div className={`flex flex-col lg:flex-row gap-20 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full lg:sticky lg:top-40">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative aspect-[4/5] overflow-hidden rounded-[80px] shadow-2xl group"
                  >
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-industrial/10 group-hover:bg-transparent transition-colors duration-700" />
                  </motion.div>
                </div>

                <div className="flex-1 lg:pt-10">
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-industrial flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-brand" />
                      </div>
                      <span className="text-brand text-xs font-bold tracking-[0.4em] uppercase">{service.subtitle}</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl text-industrial mb-10 leading-[0.9] font-sans tracking-tighter">
                      {service.title.split(' ').map((word, idx) => (
                        <span key={idx} className={idx === 1 ? 'text-brand' : ''}>{word} </span>
                      ))}
                    </h2>

                    <p className="text-industrial text-xl leading-relaxed mb-12 font-light border-l-2 border-brand/20 pl-8 italic">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-4 group py-2"
                        >
                          <div className="w-1.5 h-1.5 bg-brand/40 rounded-full mt-2.5 group-hover:bg-brand transition-colors" />
                          <span className="text-industrial/80 text-sm font-medium tracking-wide">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <button className="mt-16 group flex items-center gap-6 text-industrial hover:text-brand transition-all duration-500">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full border border-industrial/10 flex items-center justify-center group-hover:border-brand group-hover:bg-brand transition-all duration-500">
                          <ChevronRight className="w-5 h-5 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-industrial/40">Next Step</span>
                        <span className="text-xs font-bold tracking-widest uppercase items-center">Get a Free Scope Validation</span>
                      </div>
                    </button>
                  </motion.div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* How We Work Section */}
        <WhyChooseUs />
        

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
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
