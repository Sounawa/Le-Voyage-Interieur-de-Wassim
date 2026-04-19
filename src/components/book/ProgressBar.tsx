'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProgressBarProps {
  currentPageId: string;
  totalPages: number;
}

const chapterOrder = [
  { id: 'prologue', label: 'Prologue', progress: 0.02 },
  { id: 'ch1', label: 'Chapitre 1 : La Découverte', progress: 0.18 },
  { id: 'ch2', label: 'Chapitre 2 : Le Désert de l\'Âme', progress: 0.38 },
  { id: 'ch3', label: 'Chapitre 3 : La Forêt des Épreuves', progress: 0.60 },
  { id: 'ch4', label: 'Chapitre 4 : La Montagne de la Vérité', progress: 0.82 },
  { id: 'ending', label: 'Fin', progress: 1.0 },
];

function getProgress(currentId: string): number {
  const lower = currentId.toLowerCase();
  for (const ch of chapterOrder) {
    if (lower.includes(ch.id)) return ch.progress;
  }
  return 0.01;
}

function getChapterInfo(currentId: string): { label: string; index: number } {
  const lower = currentId.toLowerCase();
  for (let i = 0; i < chapterOrder.length; i++) {
    if (lower.includes(chapterOrder[i].id)) {
      return { label: chapterOrder[i].label, index: i };
    }
  }
  return { label: '', index: -1 };
}

export default function ProgressBar({ currentPageId }: ProgressBarProps) {
  const progress = getProgress(currentPageId);
  const { label, index: currentChapterIndex } = getChapterInfo(currentPageId);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Progress bar with shimmer */}
      <div className="h-1 w-full bg-black/30 backdrop-blur-sm relative overflow-hidden">
        <motion.div
          className="h-full progress-bar-shimmer"
          initial={{ width: 0 }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </div>

      {/* Chapter label + milestone dots */}
      <div className="bg-black/40 backdrop-blur-sm px-4 py-2">
        <div className="flex items-center justify-center">
          <span className="text-amber-200/70 text-xs font-serif tracking-wider uppercase">
            {label}
          </span>
        </div>

        {/* Milestone dots row */}
        <div className="flex items-center justify-center gap-0 mt-1.5 relative">
          {/* Connecting line behind dots */}
          <div className="absolute top-1/2 left-[calc(12.5%-4px)] right-[calc(12.5%-4px)] h-px bg-amber-800/15 -translate-y-1/2" />

          {chapterOrder.map((ch, i) => {
            const isCompleted = currentChapterIndex > i;
            const isCurrent = currentChapterIndex === i;
            const isFuture = !isCompleted && !isCurrent;

            return (
              <div
                key={ch.id}
                className="relative px-1.5 sm:px-2.5"
                onMouseEnter={() => setHoveredDot(i)}
                onMouseLeave={() => setHoveredDot(null)}
              >
                {/* Dot */}
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-500 relative
                    ${isCompleted
                      ? 'bg-amber-500 shadow-sm shadow-amber-500/40'
                      : isCurrent
                        ? 'bg-amber-400 shadow-md shadow-amber-400/50 milestone-dot-current'
                        : 'bg-amber-900/30 border border-amber-800/20'
                    }
                  `}
                />

                {/* Hover label tooltip */}
                {hoveredDot === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#12111a]/95 backdrop-blur-md border border-amber-800/20 shadow-lg z-50"
                  >
                    <span className="text-amber-300/70 text-[10px] font-serif tracking-wide">
                      {ch.label}
                    </span>
                    {/* Tooltip arrow */}
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#12111a]/95 border-t border-l border-amber-800/20" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
