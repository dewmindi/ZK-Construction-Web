'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if preloader has been shown in this session
    const hasShownPreloader = sessionStorage.getItem('hasShownPreloader');
    
    if (hasShownPreloader) {
      setShouldRender(false);
      return;
    }

    // If not shown, start the preloader
    setShouldRender(true);
    setIsVisible(true);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('hasShownPreloader', 'true');
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-industrial flex flex-col items-center justify-center"
        >
          <div className="relative w-64 h-64">
            {/* House Sketch SVG */}
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Foundation */}
              <motion.path
                d="M20 160 H180"
                stroke="#FF6B00"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
              />
              
              {/* Walls */}
              <motion.path
                d="M40 160 V80 H160 V160"
                stroke="#FF6B00"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: Math.max(0, (progress - 20) / 40) }}
              />

              {/* Roof */}
              <motion.path
                d="M30 85 L100 30 L170 85"
                stroke="#FF6B00"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: Math.max(0, (progress - 60) / 30) }}
              />

              {/* Door */}
              <motion.path
                d="M85 160 V120 H115 V160"
                stroke="#FF6B00"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: Math.max(0, (progress - 85) / 10) }}
              />

              {/* Window */}
              <motion.rect
                x="125" y="100" width="20" height="20"
                stroke="#FF6B00"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: Math.max(0, (progress - 95) / 5) }}
              />

              {/* Architectural Grid Lines (Subtle) */}
              <motion.path
                d="M0 40 H200 M0 120 H200 M40 0 V200 M160 0 V200"
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </svg>

            {/* Progress Percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span 
                className="text-white font-display text-4xl opacity-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
              >
                {progress}%
              </motion.span>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <div className="w-fit">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-brand text-xs font-bold tracking-[0.5em] uppercase whitespace-nowrap"
              >
                Constructing Excellence
              </motion.div>
              <div className="mt-4 w-full h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-brand"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
