'use client';

import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Image from 'next/image';
import { TEAM_MEMBERS } from '@/lib/constants-team';

function TeamMemberSection({ member, index }: { member: any, index: number }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const isEven = index % 2 === 0;

  return (
    <section 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}>
          
          {/* Image Container */}
          <motion.div 
            style={{ y }}
            className="flex-1 relative w-full aspect-[4/5] md:aspect-[4/5] max-w-md"
          >
            <div className="relative w-full h-full rounded-[40px] md:rounded-[80px] overflow-hidden border border-brand/10 shadow-2xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-110"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial/40 to-transparent opacity-60" />
            </div>
            
            {/* Visual Decor - Rounded Frame Accent */}
            <div className={`absolute -inset-4 border border-brand/5 rounded-[50px] md:rounded-[90px] -z-10 ${isEven ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'}`} />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-[2px] bg-brand" />
                <span className="text-brand text-xs font-bold tracking-[0.4em] uppercase">
                  {member.role}
                </span>
              </div>
              <h2 className="text-industrial text-5xl md:text-6xl mb-6 leading-[1.1] font-sans tracking-tight">
                {member.name}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <p className="text-industrial/70 text-lg md:text-xl leading-relaxed italic border-l-2 border-brand/20 pl-6">
                {member.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <button className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-industrial/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-500">
                  <div className="w-2 h-2 rounded-full bg-industrial group-hover:bg-white transition-colors" />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-industrial/50 group-hover:text-industrial transition-colors">
                  Contact Specialist
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Text - More Subtle and Modern */}
      <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? '-right-20' : '-left-20'} pointer-events-none opacity-[0.015] select-none -z-10`}>
        <span className="text-[25vw] font-display whitespace-nowrap leading-none uppercase stroke-text">
          {member.name.split(' ')[0]}
        </span>
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main className="bg-paper min-h-screen">
        {/* Header Hero */}
        <section className="pt-48 pb-24 bg-industrial text-white overflow-hidden relative">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <span className="text-brand text-xs font-bold tracking-[0.5em] uppercase mb-6 block">
                The Leadership
              </span>
              <h1 className="text-6xl md:text-9xl mb-12 leading-[0.9] font-sans tracking-tight">
                Our <span className="text-brand">Strength</span> is <br /> Our Professionals.
              </h1>
              <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
                A collaboration of experts from diverse backgrounds, dedicated to precision, transparency, and hurdle-free construction delivery.
              </p>
            </motion.div>
          </div>
          
          {/* Static decoration */}
          <div className="absolute right-0 bottom-0 text-[30vw] font-display text-white/[0.02] leading-none select-none pointer-events-none">
            TEAM
          </div>
        </section>

        {/* Team List Sections */}
        <div className="bg-paper">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberSection key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <section className="py-32 bg-industrial text-white text-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl mb-12">Building your vision?</h2>
              <a href='/contact' className="px-12 py-5 bg-brand text-white font-bold tracking-widest text-sm hover:bg-white hover:text-industrial transition-all duration-300">
                MEET THE FULL TEAM
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
