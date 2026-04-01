'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const headline = "Where Structures Rise and Systems Come to Life.";
  const words = headline.split(" ");

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 scale-110"
      >
        <Image
          // src="https://picsum.photos/seed/construction/1920/1080"
          src="/ZK-Hero.jpeg"
          alt="Construction Site"
          fill
          className="object-cover brightness-[0.4]"
          priority
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        <div className="overflow-hidden mb-4">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-brand font-sans tracking-[0.3em] uppercase font-semibold text-xl"
          >
            ZK Construction Group
          </motion.p>
        </div>

        <h1 className="text-white text-4xl md:text-7xl max-w-5xl mx-auto leading-[1.2] flex flex-wrap justify-center gap-x-4 font-sans tracking-tight">
          {words.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + i * 0.1,
                  ease: [0.33, 1, 0.68, 1] 
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <button className="group relative px-8 py-4 bg-brand text-white font-display text-sm tracking-widest overflow-hidden transition-all hover:pr-12">
            <span className="relative z-10">EXPLORE SERVICES</span>
            <div className="absolute inset-0 bg-industrial translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-brand"
          />
        </div>
      </motion.div>
    </section>
  );
}
