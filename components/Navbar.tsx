'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    { name: "Construction Services", href: "/services#construction" },
    { name: "Electrical Services", href: "/services#electrical" },
    { name: "Plumbing Services", href: "/services#plumbing" },
  ];

  // Logic to determine if text should be industrial (dark) or white
  // On about/contact pages, it should be dark initially (light background)
  // On home and services page, it should be white initially (dark header)
  // Once scrolled, it's always white (dark background)
  const isLightPage = ['/about'].includes(pathname);
  const textColorClass = (isLightPage && !scrolled) ? 'text-industrial' : 'text-white';
  const navItemColorClass = (isLightPage && !scrolled) ? 'text-industrial/70' : 'text-white/70';
  const borderColorClass = (isLightPage && !scrolled) ? 'border-industrial/20' : 'border-white/20';
  const buttonTextColorClass = (isLightPage && !scrolled) ? 'text-industrial' : 'text-white';

  const getActiveClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) return 'text-brand !opacity-100';
    return navItemColorClass;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 bg-industrial/90 backdrop-blur-md' : 'py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className={`${textColorClass} font-display text-xl tracking-tighter transition-colors duration-500`}>
          <Image
            src="/zk-plumbing-logo.webp"
            alt="ZK Plumbing Logo"
            width={80}
            height={30}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <Link 
            href="/about" 
            className={`${getActiveClass('/about')} text-[10px] uppercase tracking-widest font-bold hover:text-brand transition-colors duration-500`}
          >
            About
          </Link>
          

          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link 
              href="/services"
              className={`${getActiveClass('/services')} text-[10px] uppercase tracking-widest font-bold hover:text-brand transition-colors duration-500 flex items-center gap-1`}
            >
              Services <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </Link>
            
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-4 w-64 glass-dark p-4 flex flex-col gap-4"
                >
                  {serviceLinks.map((link) => (
                    <Link 
                      key={link.name}
                      href={link.href}
                      className="text-white/50 text-[10px] uppercase tracking-widest font-bold hover:text-brand transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link 
            href="/team" 
            className={`${getActiveClass('/team')} text-[10px] uppercase tracking-widest font-bold hover:text-brand transition-colors duration-500`}
          >
            Team
          </Link>

          {/* {['Projects', 'Process'].map((item) => (
            <Link 
              key={item} 
              href={`/#${item.toLowerCase()}`} 
              className={`${navItemColorClass} text-[10px] uppercase tracking-widest font-bold hover:text-brand transition-colors duration-500`}
            >
              {item}
            </Link>
          ))} */}
          <Link 
            href="/contact" 
            className={`${getActiveClass('/contact')} text-[10px] uppercase tracking-widest font-bold hover:text-brand transition-colors duration-500`}
          >
            Contact
          </Link>
          <Link 
            href="#contact" 
            className={`px-6 py-2 border ${borderColorClass} ${buttonTextColorClass} text-[10px] uppercase tracking-widest font-bold hover:bg-brand hover:border-brand hover:text-white transition-all duration-500`}
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${textColorClass} transition-colors duration-500 relative z-[101]`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="fixed inset-0 bg-industrial z-[99] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-display hover:text-brand transition-colors ${pathname === '/' ? 'text-brand' : 'text-white'}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-display hover:text-brand transition-colors ${pathname === '/about' ? 'text-brand' : 'text-white'}`}
            >
              About
            </Link>
            <Link 
              href="/services" 
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-display hover:text-brand transition-colors ${pathname === '/services' ? 'text-brand' : 'text-white'}`}
            >
              Services
            </Link>
            <Link 
              href="/team" 
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-display hover:text-brand transition-colors ${pathname === '/team' ? 'text-brand' : 'text-white'}`}
            >
              Team
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-display hover:text-brand transition-colors ${pathname === '/contact' ? 'text-brand' : 'text-white'}`}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
