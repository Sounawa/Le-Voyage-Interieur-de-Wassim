'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import type { StoryPage } from '@/lib/story-types';

interface StoryPageViewProps {
  page: StoryPage;
  onContinue: () => void;
}

export default function StoryPageView({ page, onContinue }: StoryPageViewProps) {
  return (
    <motion.div
      key={page.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-start justify-center min-h-screen px-4 py-20 sm:py-24"
    >
      <div className="max-w-2xl w-full">
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

        {/* Shaykh's wisdom quote */}
        {page.shaykhSpeaks && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + page.paragraphs.length * 0.15, duration: 0.8 }}
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

        {/* Continue button (for linear pages) */}
        {!page.choices && page.next && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + page.paragraphs.length * 0.15, duration: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={onContinue}
              className="group inline-flex items-center gap-2 px-6 py-3 text-amber-400/70 hover:text-amber-300 font-serif text-sm transition-colors duration-300"
            >
              <span>Continuer</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
