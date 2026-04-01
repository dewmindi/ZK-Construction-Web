'use client';

import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-industrial text-white pt-24 pb-12 overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.02]">
        <h2 className="text-[25vw] font-display leading-none whitespace-nowrap">ZK CONSTRUCTION</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-display mb-8">ZK CONSTRUCTION <br /> GROUP</h3>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              A collaboration of professionals with intimate knowledge of the construction industry. Delivering excellence from maintenance to large-scale commercial projects.
            </p>
            <div className="flex gap-6">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" }
              ].map((social, i) => (
                <a key={i} href={social.href} className="text-white/30 hover:text-brand transition-colors">
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-brand text-xs font-bold tracking-widest uppercase mb-8">Navigation</h4>
            <ul className="space-y-4 text-white/60">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand text-xs font-bold tracking-widest uppercase mb-8">Support</h4>
            <ul className="space-y-4 text-white/60">
              {['Contact Us', 'Our Policy', 'Project Inquiry', 'Client Portal'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            © 2026 ZK Construction Group. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors"
          >
            Back to top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand group-hover:bg-brand transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
