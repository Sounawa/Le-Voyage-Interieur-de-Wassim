'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

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
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-800/8 rounded-full blur-[100px]" />

          <div className="relative z-10 text-center px-6">
            {/* Top ornament */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-600/40" />
              <div className="w-1.5 h-1.5 bg-amber-500/50 rotate-45" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-600/40" />
            </motion.div>

            {/* Chapter number */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-amber-600/70 text-sm uppercase tracking-[0.3em] font-serif mb-4"
            >
              {chapterNames[chapter] || `Chapitre ${chapter}`}
            </motion.p>

            {/* Chapter title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-amber-100 font-bold"
              style={{ textShadow: '0 0 30px rgba(212, 165, 116, 0.2)' }}
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
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-600/40" />
              <div className="w-1.5 h-1.5 bg-amber-500/50 rotate-45" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-600/40" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
