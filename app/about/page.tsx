'use client';

import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <Navbar />
      <main className="bg-paper min-h-screen pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-brand text-xs font-bold tracking-[0.5em] uppercase mb-6 block">
              About ZK Construction
            </span>
            <h1 className="text-industrial text-6xl md:text-8xl mb-12">
              Construction <br /> <span className="text-brand">Without Hurdles</span>.
            </h1>
            <p className="text-industrial/60 text-xl leading-relaxed max-w-3xl">
              ZK Construction Group is a collaboration of professionals from different backgrounds, with an intimate knowledge of the Construction Industry. 
              We have developed a platform to engage and deliver projects of any size, from a residential maintenance job to your largest commercial project without the hurdles.
            </p>
          </motion.div>
        </section>

        {/* Image Section */}
        <section className="w-full h-[60vh] relative mb-32 overflow-hidden">
          <Image
            src="/ZK-Hero3.jpeg"
            alt="Professional Construction Management"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-industrial/20" />
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Open Door Policy",
                desc: "We encourage our clients to reach out at any time. Communication is the foundation of our successful project delivery."
              },
              {
                title: "Complex Problem Solvers",
                desc: "We have a track record of taking on complex and technically difficult projects that other builders have refused."
              },
              {
                title: "Diverse Expertise",
                desc: "Our team's multi-disciplinary background allows us to approach construction challenges from multiple professional angles."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-display mb-6 text-industrial">{value.title}</h3>
                <p className="text-industrial/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team/History Section */}
        <section className="bg-industrial text-white py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-24 items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-6xl mb-12">Expertise Across <br /> <span className="text-brand">Every Scale</span></h2>
                <div className="space-y-8 text-white/60 leading-relaxed">
                  <p>
                    Whether you are managing a small residential maintenance task or planning a massive commercial development, ZK Construction Group provides the same level of professional oversight and dedication.
                  </p>
                  <p>
                    Our intimate knowledge of the industry allows us to bypass the common hurdles that slow down traditional building firms, ensuring your project is delivered with precision and efficiency.
                  </p>
                </div>
              </div>
              <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px]">
                <Image
                  src="/Electrician.jpeg"
                  alt="Our Team at Work"
                  fill
                  className="object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -left-8 bg-brand p-12 hidden lg:block">
                  <span className="text-6xl font-display block">18+</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
