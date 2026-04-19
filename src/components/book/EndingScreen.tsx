'use client';

import { motion } from 'framer-motion';
import { RotateCcw, Star, BookOpen } from 'lucide-react';
import type { StoryPage } from '@/lib/story-types';

interface EndingScreenProps {
  page: StoryPage;
  endingsFound: string[];
  onRestart: () => void;
}

const endingLabels: Record<string, { title: string; description: string; emoji: string }> = {
  light: {
    title: 'La Lumière de l\'Âme',
    description: 'Souhayl a atteint la paix intérieure et s\'est rendu à Allah. Son cœur est purifié.',
    emoji: '🌟',
  },
  wisdom: {
    title: 'La Sagesse du Chemin',
    description: 'Souhayl a compris que le chemin est plus important que la destination.',
    emoji: '📖',
  },
  shadow: {
    title: 'L\'Ombre Révélée',
    description: 'Même dans l\'échec apparent, Souhayl a découvert des vérités profondes sur lui-même.',
    emoji: '🌙',
  },
  struggle: {
    title: 'La Lutte Éternelle',
    description: 'Souhayl sait maintenant que la lutte contre l\'ego est un combat de chaque instant.',
    emoji: '⚔️',
  },
};

export default function EndingScreen({ page, endingsFound, onRestart }: EndingScreenProps) {
  const ending = endingLabels[page.endingType || 'wisdom'];
  const totalEndings = 4;
  const foundCount = endingsFound.length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-2xl w-full text-center">
        {/* Ending emoji */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
          className="text-6xl mb-6"
        >
          {ending.emoji}
        </motion.div>

        {/* Ending type label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-amber-500/60 text-sm uppercase tracking-[0.3em] font-serif mb-4"
        >
          Fin découverte
        </motion.p>

        {/* Ending title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-serif text-3xl sm:text-4xl text-amber-100 font-bold mb-6"
          style={{ textShadow: '0 0 30px rgba(212, 165, 116, 0.2)' }}
        >
          {ending.title}
        </motion.h2>

        {/* Ending description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="text-amber-200/60 font-serif text-lg mb-10"
        >
          {ending.description}
        </motion.p>

        {/* Final narrative */}
        <div className="space-y-4 mb-10 text-left">
          {page.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.2, duration: 0.8 }}
              className="font-serif text-amber-100/70 leading-relaxed"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2 + page.paragraphs.length * 0.2, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-700/40" />
          <Star className="w-4 h-4 text-amber-600/40" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-700/40" />
        </motion.div>

        {/* Endings progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-amber-600/50" />
            <span className="text-amber-300/50 text-sm font-serif">
              Fins découvertes : {foundCount}/{totalEndings}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            {['light', 'wisdom', 'shadow', 'struggle'].map((type) => (
              <div
                key={type}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  endingsFound.includes(type)
                    ? 'bg-amber-500 shadow-sm shadow-amber-500/50'
                    : 'bg-amber-900/30'
                }`}
                title={endingLabels[type].title}
              />
            ))}
          </div>
          {foundCount < totalEndings && (
            <p className="text-amber-400/40 text-xs mt-3 font-serif italic">
              D&apos;autres destins attendent Souhayl... Rejouez pour les découvrir.
            </p>
          )}
          {foundCount === totalEndings && (
            <p className="text-amber-400/60 text-xs mt-3 font-serif italic">
              ✦ Tu as découvert tous les chemins de Souhayl. Chaque fin est un enseignement. ✦
            </p>
          )}
        </motion.div>

        {/* Restart button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onRestart}
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-amber-100 font-serif rounded-lg transition-all duration-300 shadow-lg shadow-amber-900/20"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Recommencer le voyage</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
