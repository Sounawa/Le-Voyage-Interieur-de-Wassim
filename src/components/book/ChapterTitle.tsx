'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

interface ChapterTitleProps {
  chapter: number;
  title: string;
  onComplete: () => void;
}

export default function ChapterTitle({ chapter, title, onComplete }: ChapterTitleProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800);
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const chapterNames: Record<number, string> = {
    0: 'Prologue',
    1: 'Chapitre Premier',
    2: 'Chapitre Deux',
    3: 'Chapitre Trois',
    4: 'Chapitre Quatre',
  };

  // Generate burst particle positions
  const burstParticles = useMemo(() => {
    const particles = [];
    const count = 12;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const distance = 60 + Math.random() * 80;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const duration = 0.8 + Math.random() * 0.6;
      const delay = 0.9 + Math.random() * 0.3;
      const size = 2 + Math.random() * 3;
      particles.push({ tx, ty, duration, delay, size, angle: i });
    }
    return particles;
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-[#0a0a0f] cursor-pointer"
          onClick={() => {
            setShow(false);
            setTimeout(onComplete, 800);
          }}
        >
          {/* Radial glow - circular behind chapter number */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-800/8 rounded-full blur-[100px]" />
          {/* Additional circular glow specifically behind chapter number area */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+30px)] w-[120px] h-[120px] bg-amber-700/10 rounded-full blur-[40px]" />

          <div className="relative z-10 text-center px-6">
            {/* Top ornament with Arabic decoration */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent to-amber-600/40" />
              <span className="text-amber-600/30 text-lg">&#10022;</span>
              <span className="text-amber-500/40 text-base">✶</span>
              <span className="text-amber-600/30 text-lg">&#10022;</span>
              <div className="h-px w-16 sm:w-20 bg-gradient-to-l from-transparent to-amber-600/40" />
            </motion.div>

            {/* Chapter number with spring overshoot */}
            <motion.p
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.9,
                type: 'spring',
                stiffness: 150,
                damping: 12,
              }}
              className="text-amber-600/70 text-sm uppercase tracking-[0.3em] font-serif mb-4 relative"
            >
              {/* Faint circular glow behind the chapter number */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-amber-700/6 blur-xl -z-10" />
              {chapterNames[chapter] || `Chapitre ${chapter}`}
            </motion.p>

            {/* Particle burst effect */}
            {burstParticles.map((p) => (
              <motion.div
                key={p.angle}
                className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
                style={{
                  width: p.size,
                  height: p.size,
                  background: `rgba(212, 165, 116, ${0.4 + Math.random() * 0.3})`,
                }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 1 }}
                animate={{
                  x: p.tx,
                  y: p.ty,
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1, 0.2],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  ease: 'easeOut',
                }}
              />
            ))}

            {/* Chapter title with spring animation */}
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.8,
                duration: 1,
                type: 'spring',
                stiffness: 120,
                damping: 14,
              }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-amber-100 font-bold"
              style={{ textShadow: '0 0 30px rgba(212, 165, 116, 0.2), 0 2px 4px rgba(0,0,0,0.3)' }}
            >
              {title}
            </motion.h2>

            {/* Bottom ornament */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex items-center justify-center gap-4 mt-8"
            >
              <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent to-amber-600/40" />
              <span className="text-amber-600/30 text-lg">&#10022;</span>
              <span className="text-amber-500/40 text-base">✶</span>
              <span className="text-amber-600/30 text-lg">&#10022;</span>
              <div className="h-px w-16 sm:w-20 bg-gradient-to-l from-transparent to-amber-600/40" />
            </motion.div>

            {/* Tap hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-amber-700/25 text-[10px] font-serif mt-8 tracking-wide"
            >
              Touchez pour continuer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
