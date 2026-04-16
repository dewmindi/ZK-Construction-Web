'use client';

import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V14a5.91 5.91 0 0 1-5.65 5.91 5.91 5.91 0 0 1-6.15-5.32 5.91 5.91 0 0 1 2.36-5.51c.09-.07.19-.12.28-.19-.01-.01-.01-.02-.02-.03.11-.08.23-.15.35-.21.08-.05.17-.1.25-.15.08-.04.17-.07.25-.11l.24-.1c.11-.04.22-.08.33-.11.01 0 .02-.01.03-.01.14-.04.28-.08.43-.11.45-.1.9-.14 1.35-.14V11a2.126 2.126 0 0 0-1.89 1.1c-.24.44-.31.94-.21 1.44.11.55.45 1.05.93 1.34.4.25.88.35 1.36.27.7-.1 1.28-.62 1.49-1.3.07-.22.1-.46.1-.69V0l.01.02z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
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
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-3xl font-display mb-8">ZK CONSTRUCTION <br /> GROUP</h3>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              A collaboration of professionals with intimate knowledge of the construction industry.
            </p>
            <div className="flex gap-6">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/zkconstructionG/" },
                { Icon: Instagram, href: "https://www.instagram.com/zk_construction_group" },
                { Icon: TikTokIcon, href: "https://www.tiktok.com/@zk_construction_group" }
              ].map((social, i) => (
                <a key={i} href={social.href} className="text-white/30 hover:text-brand transition-colors">
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-brand text-xs font-bold tracking-widest uppercase mb-8">Services</h4>
            <ul className="space-y-4 text-white/60">
              {['Construction', 'Electrical', 'Plumbing'].map((service) => (
                <li key={service}>
                  <Link href="/services" className="hover:text-white transition-colors">{service}</Link>
                </li>
              ))}
            </ul>
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
            <h4 className="text-brand text-xs font-bold tracking-widest uppercase mb-8">Contact Information</h4>
            <ul className="space-y-6 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
                <span className="text-sm">9 Langford Street <br /> Banya, 4551</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand flex-shrink-0" />
                <a href="tel:0409051512" className="text-sm hover:text-white transition-colors">0409051512</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand flex-shrink-0" />
                <a href="mailto:tender@zkcg.com.au" className="text-sm hover:text-white transition-colors">tender@zkcg.com.au</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand flex-shrink-0" />
                <span className="text-sm">Mon - Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            © 2026 ZK Construction Group. All rights reserved.
          </p>
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            Designed by <a href="https://csgraphicmeta.com.au/" className="hover:text-white transition-colors">CS GRAPHIC META</a>
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
