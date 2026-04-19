'use client';

import { motion } from 'framer-motion';
import { RotateCcw, Star, BookOpen } from 'lucide-react';
import { useMemo } from 'react';
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
  pure: {
    title: 'Le Miroir Pur',
    description: 'Souhayl a appris que la plus grande sagesse est de vivre chaque jour avec un cœur éveillé.',
    emoji: '🪞',
  },
};

export default function EndingScreen({ page, endingsFound, onRestart }: EndingScreenProps) {
  const ending = endingLabels[page.endingType || 'wisdom'];
  const totalEndings = 4;
  const foundCount = endingsFound.length;
  const allFound = foundCount === totalEndings;

  // Confetti particles (golden dots floating up)
  const confettiParticles = useMemo(() => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      particles.push({
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 6,
        opacity: 0.2 + Math.random() * 0.4,
      });
    }
    return particles;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Confetti particles floating up */}
      {confettiParticles.map((p, i) => (
        <div
          key={i}
          className="confetti-particle absolute rounded-full pointer-events-none"
          style={{
            left: `${p.left}%`,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            background: `rgba(218, 165, 32, ${p.opacity})`,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      <div className="max-w-2xl w-full text-center relative z-10">
        {/* Ending emoji with golden halo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 150, damping: 12 }}
          className="text-6xl mb-6 inline-flex items-center justify-center rounded-full p-4 golden-halo"
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

        {/* Ending title with shimmer */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-serif text-3xl sm:text-4xl text-amber-100 font-bold mb-6 shimmer-text"
          style={{ textShadow: '0 0 30px rgba(212, 165, 116, 0.15)' }}
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
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
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
          <div className="flex items-center justify-center gap-3">
            {['light', 'wisdom', 'shadow', 'pure'].map((type) => {
              const isFound = endingsFound.includes(type);
              return (
                <motion.div
                  key={type}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.7, type: 'spring', stiffness: 200 }}
                  className="relative group"
                >
                  <div
                    className={`w-5 h-5 rounded-full transition-all duration-500 ${
                      isFound
                        ? 'bg-amber-500 shadow-md shadow-amber-500/50 border-2 border-amber-400/60'
                        : 'bg-amber-900/20 border-2 border-amber-800/15'
                    }`}
                    title={endingLabels[type].title}
                  />
                  {/* Tooltip */}
                  {isFound && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="text-[10px] font-serif text-amber-400/70 bg-[#12111a]/90 px-2 py-0.5 rounded border border-amber-800/15">
                        {endingLabels[type].emoji} {endingLabels[type].title}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
          {foundCount < totalEndings && (
            <p className="text-amber-400/40 text-xs mt-3 font-serif italic">
              D&apos;autres destins attendent Souhayl... Rejouez pour les découvrir.
            </p>
          )}
          {allFound && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="mt-4 px-6 py-3 rounded-lg celebration-border"
            >
              <p className="text-amber-300/70 text-sm font-serif italic mb-1">
                ✦ Tu as découvert tous les chemins de Souhayl ✦
              </p>
              <p className="text-amber-400/50 text-xs font-serif">
                Chaque fin est un enseignement. Chaque choix est une lumière.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Restart button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(212, 165, 116, 0.15)' }}
          whileTap={{ scale: 0.98 }}
          onClick={onRestart}
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-amber-100 font-serif rounded-lg transition-all duration-300 shadow-lg shadow-amber-900/20 border border-amber-600/20"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Recommencer le voyage</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
