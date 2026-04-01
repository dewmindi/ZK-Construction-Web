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
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const isEven = index % 2 === 0;

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen py-32 flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24`}>
          
          {/* Image Container */}
          <motion.div 
            style={{ y, scale }}
            className="flex-1 relative w-full aspect-[4/5] md:aspect-square overflow-hidden"
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover  transition-all duration-700"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-industrial/20" />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <span className="text-brand text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
                {member.role}
              </span>
              <h2 className="text-industrial text-5xl md:text-7xl mb-8 leading-tight font-sans tracking-tight">
                {member.name}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
              className="relative"
            >
              {/* Animated Text Lines */}
              <p className="text-industrial/70 text-lg md:text-xl leading-relaxed font-light">
                {member.description}
              </p>
              
              {/* Visual Accent */}
              <div className={`absolute top-0 ${isEven ? '-left-8' : '-right-8'} w-[1px] h-full bg-brand/30 hidden md:block`} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: false }}
              className="pt-8"
            >
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-[1px] bg-industrial/20 group-hover:w-20 group-hover:bg-brand transition-all duration-500" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-industrial/40 group-hover:text-industrial transition-colors">
                  View Portfolio
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Text */}
      <motion.div 
        style={{ x: isEven ? -100 : 100 }}
        className="absolute -bottom-10 left-0 w-full pointer-events-none opacity-[0.03] select-none"
      >
        <span className="text-[20vw] font-display whitespace-nowrap leading-none uppercase">
          {member.name.split(' ')[0]}
        </span>
      </motion.div>
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
              <button className="px-12 py-5 bg-brand text-white font-bold tracking-widest text-sm hover:bg-white hover:text-industrial transition-all duration-300">
                MEET THE FULL TEAM
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
