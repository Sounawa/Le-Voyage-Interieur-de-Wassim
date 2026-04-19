'use client';

import { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Hand } from 'lucide-react';
import type { StoryPage } from '@/lib/story-types';
import StoryIllustration from '@/components/book/StoryIllustration';

interface StoryPageViewProps {
  page: StoryPage;
  onContinue: () => void;
}

export default function StoryPageView({ page, onContinue }: StoryPageViewProps) {
  const baseDelay = page.paragraphs.length * 0.15 + 0.3;
  const isLinear = !page.choices && !!page.next;

  // Keyboard listener for spacebar/enter to continue
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isLinear && (e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
      onContinue();
    }
  }, [isLinear, onContinue]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // For linear pages, make the entire page clickable
  const handlePageClick = useCallback(() => {
    if (isLinear) {
      onContinue();
    }
  }, [isLinear, onContinue]);

  return (
    <motion.div
      key={page.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onClick={handlePageClick}
      className={`flex items-start justify-center min-h-screen px-4 py-20 sm:py-24 ${isLinear ? 'cursor-pointer' : ''}`}
    >
      <div className="max-w-2xl w-full">
        {/* Illustration (if available) */}
        <StoryIllustration pageId={page.id} />

        {/* Page title */}
        {page.title && (
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-2xl sm:text-3xl text-amber-100 font-bold mb-8 text-center"
          >
            {page.title}
          </motion.h3>
        )}

        {/* Narrative paragraphs */}
        <div className="space-y-5">
          {page.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.8 }}
              className="font-serif text-base sm:text-lg text-amber-100/80 leading-relaxed text-justify sm:text-left"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Zaki's speech bubble */}
        {page.zakiSpeaks && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: baseDelay + 0.3, duration: 0.8 }}
            className="mt-6 relative ml-8 sm:ml-16"
          >
            {/* Fox avatar */}
            <div className="absolute -left-10 sm:-left-12 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-sm shadow-lg shadow-amber-900/30 border border-amber-700/30">
              🦊
            </div>
            {/* Speech bubble */}
            <div className="bg-gradient-to-br from-amber-900/30 to-amber-950/40 border border-amber-700/20 rounded-2xl rounded-tl-none px-5 py-3.5">
              <p className="text-amber-200/80 text-sm sm:text-base italic leading-relaxed font-serif">
                {page.zakiSpeaks}
              </p>
              <p className="text-amber-600/50 text-[10px] mt-1.5 tracking-wider uppercase">— Zaki</p>
            </div>
          </motion.div>
        )}

        {/* Shaykh's wisdom quote */}
        {page.shaykhSpeaks && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: baseDelay + (page.zakiSpeaks ? 0.6 : 0), duration: 0.8 }}
            className="mt-8 relative"
          >
            <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/60 via-amber-400/40 to-amber-500/60 rounded-full" />
            <div className="ml-4 pl-4 border-l border-amber-600/30 py-4 px-5 bg-amber-950/20 rounded-r-lg">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-500/70" />
                <span className="text-amber-500/70 text-xs uppercase tracking-wider font-serif">
                  Paroles du Shaykh
                </span>
              </div>
              <p className="font-serif text-amber-200/90 italic leading-relaxed text-base">
                &ldquo;{page.shaykhSpeaks}&rdquo;
              </p>
            </div>
          </motion.div>
        )}

        {/* Continue section (for linear pages) */}
        {isLinear && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: baseDelay + 0.8, duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            {/* Continue button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onContinue();
              }}
              className="group inline-flex items-center gap-2 px-6 py-3 text-amber-400/70 hover:text-amber-300 font-serif text-sm transition-colors duration-300"
            >
              <span>Continuer</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Tap-to-continue hint with pulse animation */}
            <motion.p
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex items-center gap-1.5 text-amber-600/40 text-[11px] font-serif select-none"
            >
              <Hand className="w-3 h-3" />
              <span>Touchez n&apos;importe où pour continuer</span>
            </motion.p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
