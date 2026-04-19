'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentPageId: string;
  totalPages: number;
}

const chapterOrder = [
  'prologue', 'ch1', 'ch2', 'ch3', 'ch4', 'ending'
];

function getProgress(currentId: string): number {
  const lower = currentId.toLowerCase();
  if (lower.includes('prologue')) return 0.02;
  if (lower.includes('ch1')) return 0.18;
  if (lower.includes('ch2')) return 0.38;
  if (lower.includes('ch3')) return 0.60;
  if (lower.includes('ch4')) return 0.82;
  if (lower.includes('ending')) return 1;
  return 0.01;
}

function getChapterLabel(currentId: string): string {
  const lower = currentId.toLowerCase();
  if (lower.includes('prologue')) return 'Prologue';
  if (lower.includes('ch1')) return 'Chapitre 1 : La Découverte';
  if (lower.includes('ch2')) return 'Chapitre 2 : Le Désert de l\'Âme';
  if (lower.includes('ch3')) return 'Chapitre 3 : La Forêt des Épreuves';
  if (lower.includes('ch4')) return 'Chapitre 4 : La Montagne de la Vérité';
  if (lower.includes('ending')) return 'Fin';
  return '';
}

export default function ProgressBar({ currentPageId }: ProgressBarProps) {
  const progress = getProgress(currentPageId);
  const label = getChapterLabel(currentPageId);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 w-full bg-black/30 backdrop-blur-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-700 via-amber-500 to-yellow-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </div>
      <div className="bg-black/40 backdrop-blur-sm px-4 py-2 flex items-center justify-center">
        <span className="text-amber-200/70 text-xs font-serif tracking-wider uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}
