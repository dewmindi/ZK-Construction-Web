'use client';

import { motion } from 'motion/react';
import { HardHat, Zap, Droplets, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Preloader from '@/components/Preloader';
import Image from 'next/image';

const serviceDetails = [
  {
    id: "construction",
    title: "Construction Services",
    subtitle: "Structural Integrity & Precision",
    description: "From ground-breaking to final inspection, our construction team delivers architectural excellence. We specialize in industrial-grade builds, commercial renovations, and high-end residential structures.",
    features: [
      "Structural Engineering & Analysis",
      "Industrial Facility Design",
      "Commercial Build-outs",
      "Sustainable Building Practices",
      "Project Management & Oversight"
    ],
    icon: HardHat,
    image: "/Construction.jpeg"
  },
  {
    id: "electrical",
    title: "Electrical Services",
    subtitle: "Powering Modern Infrastructure",
    description: "Our certified electricians provide comprehensive power solutions. We handle complex wiring, smart system integration, and industrial-scale electrical infrastructure with a focus on safety and efficiency.",
    features: [
      "Industrial Power Distribution",
      "Smart Building Automation",
      "Emergency Power Systems",
      "Energy Efficiency Audits",
      "High-Voltage Installations"
    ],
    icon: Zap,
    image: "/Electrician.jpeg"
  },
  {
    id: "plumbing",
    title: "Plumbing Services",
    subtitle: "Advanced Hydraulic Engineering",
    description: "We deliver sophisticated water management systems. Our plumbing experts specialize in high-pressure hydraulics, commercial sanitation, and precision pipework for complex industrial applications.",
    features: [
      "Commercial Hydraulic Systems",
      "Industrial Waste Management",
      "Water Filtration & Purification",
      "Precision Pipe Fitting",
      "24/7 Emergency Maintenance"
    ],
    icon: Droplets,
    image: "/Plumber.jpeg"
  }
];

export default function ServicesPage() {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <CustomCursor />
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
        <div className="space-y-32 py-32">
          {serviceDetails.map((service, i) => (
            <section 
              key={service.id} 
              id={service.id} 
              className={`container mx-auto px-6 scroll-mt-32`}
            >
              <div className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-[4/3] overflow-hidden group"
                  >
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-industrial/20 group-hover:bg-transparent transition-colors" />
                  </motion.div>
                </div>

                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="w-16 h-16 bg-industrial flex items-center justify-center mb-8">
                      <service.icon className="w-8 h-8 text-brand" />
                    </div>
                    <h2 className="text-4xl md:text-5xl text-industrial mb-2">{service.title}</h2>
                    <h3 className="text-brand text-xs font-bold tracking-widest uppercase mb-6">{service.subtitle}</h3>
                    <p className="text-industrial/60 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-industrial/80 group cursor-default">
                          <div className="w-2 h-2 bg-brand rounded-full group-hover:scale-150 transition-transform" />
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="mt-12 flex items-center gap-4 group text-industrial hover:text-brand transition-colors">
                      <span className="text-xs font-bold tracking-widest uppercase">Request a Quote</span>
                      <div className="w-10 h-10 rounded-full border border-industrial/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </button>
                  </motion.div>
                </div>
              </div>
            </section>
          ))}
        </div>

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
