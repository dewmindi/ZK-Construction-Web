'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { coreServices } from '@/lib/constants-services';

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
          {coreServices.map((service, i) => (
            <Link
              key={i}
              href={service.link}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-industrial"
              aria-label={`Navigate to ${service.title} service details`}
            >
              <motion.div
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
