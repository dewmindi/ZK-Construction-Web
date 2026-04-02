"use client";
import { workProcess } from '@/lib/constants-services'
import { motion } from 'motion/react'

const WhyChooseUs = () => {
  return (
    <section className="py-40 bg-industrial text-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
              <div className="max-w-2xl">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-brand text-xs font-bold tracking-[0.5em] uppercase mb-6 block"
                >
                  The ZK Standard
                </motion.span>
                <h2 className="text-6xl md:text-8xl leading-[0.9] mb-8 font-sans tracking-tighter">
                  How We <span className="text-brand">Deliver</span>.
                </h2>
                <p className="text-white/50 text-xl leading-relaxed">
                  We run tight, efficient jobs with clear communication and no surprises. Built for regional conditions and real-world use.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
              {workProcess.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group pr-8"
                >
                  <div className="text-8xl font-display text-white/[0.03] absolute -top-12 -left-4 group-hover:text-brand/[0.05] transition-colors duration-700">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-display mb-4 relative z-10 text-brand">
                    {item.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-brand/30 mb-6 group-hover:w-24 transition-all duration-700" />
                  <p className="text-white/40 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default WhyChooseUs