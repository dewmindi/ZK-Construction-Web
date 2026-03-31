'use client';

import { motion } from 'motion/react';
import { HardHat, Zap, Droplets } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const services = [
  {
    title: "Commercial Projects",
    description: "From large-scale industrial hubs to modern office complexes, we deliver commercial excellence without the typical construction hurdles.",
    icon: HardHat,
    color: "rgba(255, 107, 0, 0.1)",
    accent: "#FF6B00",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Residential Works",
    description: "Quality-focused residential construction and maintenance. We bring professional-grade management to every home project.",
    icon: Zap, // Using Zap for energy/modern feel or could change
    color: "rgba(0, 122, 255, 0.1)",
    accent: "#007AFF",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Project Management",
    description: "Our platform ensures seamless communication and engagement, taking on complex technical projects other builders refuse.",
    icon: Droplets, // Using Droplets or could change to a management icon
    color: "rgba(0, 210, 255, 0.1)",
    accent: "#00D2FF",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function ServiceGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-industrial overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand text-xs font-bold tracking-[0.4em] uppercase mb-4 block"
            >
              Our Core Expertise
            </motion.span>
            <h2 className="text-white text-4xl md:text-6xl leading-none">
              Engaging & Delivering <br /> Projects of Any Size
            </h2>
          </div>
          <p className="text-white/50 max-w-xs text-sm leading-relaxed">
            We bridge the gap between complex engineering and efficient delivery with an open-door communication policy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-industrial p-12 min-h-[500px] flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Hover Background Image */}
              <motion.div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ scale: hoveredIndex === i ? 1.1 : 1 }}
              >
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  className="object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Accent Glow */}
              <div 
                className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundColor: service.accent }}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 glass flex items-center justify-center mb-8 group-hover:bg-brand transition-colors duration-500">
                  <service.icon 
                    className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" 
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-white text-3xl mb-4 group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-[240px] group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 text-white/20 group-hover:text-white transition-colors">
                <span className="text-[10px] font-bold tracking-widest uppercase">Learn More</span>
                <div className="h-px flex-1 bg-current" />
                <span className="text-xl">0{i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
