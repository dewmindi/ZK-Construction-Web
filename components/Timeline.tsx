'use client';

import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    title: "Consultation",
    desc: "We dive deep into your vision, requirements, and site constraints to establish a solid foundation.",
    num: "01"
  },
  {
    title: "Blueprint",
    desc: "Our engineers develop precise technical specifications and aesthetic plans for approval.",
    num: "02"
  },
  {
    title: "Execution",
    desc: "Precision builds and rigorous testing ensure the final delivery exceeds industry standards.",
    num: "03"
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 bg-paper relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand text-xs font-bold tracking-[0.4em] uppercase mb-4 block"
          >
            Our Methodology
          </motion.span>
          <h2 className="text-industrial text-4xl md:text-6xl">The Path To Precision</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-industrial/10 hidden md:block" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-brand hidden md:block z-10"
          />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 text-center md:text-right">
                  {i % 2 === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h3 className="text-2xl md:text-4xl mb-4 text-industrial">{step.title}</h3>
                      <p className="text-industrial/60 text-sm leading-relaxed max-w-sm ml-auto">{step.desc}</p>
                    </motion.div>
                  ) : <div className="hidden md:block" />}
                </div>

                <div className="relative z-20">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 rounded-full bg-industrial text-white flex items-center justify-center font-display text-xl border-4 border-paper outline outline-1 outline-industrial/10"
                  >
                    {step.num}
                  </motion.div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  {i % 2 !== 0 ? (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h3 className="text-2xl md:text-4xl mb-4 text-industrial">{step.title}</h3>
                      <p className="text-industrial/60 text-sm leading-relaxed max-w-sm mr-auto">{step.desc}</p>
                    </motion.div>
                  ) : <div className="hidden md:block" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
