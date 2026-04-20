'use client';

import { motion, useMotionValue, animate } from 'framer-motion';
import { RotateCcw, Star, BookOpen, Share2 } from 'lucide-react';
import { useMemo, useEffect, useRef, useState, useCallback } from 'react';
import type { StoryPage } from '@/lib/story-types';

interface EndingScreenProps {
  page: StoryPage;
  endingsFound: string[];
  onRestart: () => void;
}

const endingLabels: Record<string, { title: string; description: string; emoji: string }> = {
  rainbow: {
    title: 'L\'Arc-en-Ciel Magique',
    description: 'Wassim a ramené toutes les couleurs dans le monde ! Chaque couleur brille de mille feux.',
    emoji: '🌈',
  },
  sharing: {
    title: 'Le Partage des Couleurs',
    description: 'Wassim a partagé ses couleurs avec tous ses amis, et ensemble ils ont peint le plus beau tableau du monde.',
    emoji: '💗',
  },
  guardian: {
    title: 'Le Gardien des Couleurs',
    description: 'Wassim est devenu le Gardien du Pays des Couleurs, protégeant chaque teinte pour que le monde reste beau.',
    emoji: '🦋',
  },
  artist: {
    title: 'Le Petit Artiste',
    description: 'Wassim a découvert que le plus beau chef-d\'œuvre est celui qu\'on dessine avec son cœur.',
    emoji: '🎨',
  },
  wisdom: {
    title: 'La Sagesse du Chemin',
    description: 'Le chemin est plus important que la destination.',
    emoji: '📖',
  },
  shadow: {
    title: 'L\'Ombre Révélée',
    description: 'Même dans l\'échec apparent, il y a des vérités profondes à découvrir.',
    emoji: '🌙',
  },
  pure: {
    title: 'Le Miroir Pur',
    description: 'La plus grande sagesse est de vivre chaque jour avec un cœur éveillé.',
    emoji: '🪞',
  },
};

// Multicolor confetti palette
const confettiColors = [
  'rgba(168, 85, 247, VAR)',  // purple-500
  'rgba(236, 72, 153, VAR)',  // pink-500
  'rgba(20, 184, 166, VAR)',  // teal-500
  'rgba(251, 191, 36, VAR)',  // amber-400
  'rgba(99, 102, 241, VAR)',  // indigo-500
  'rgba(34, 197, 94, VAR)',   // green-500
];

// 8-pointed star SVG ornament component
function EightPointedStar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      width="40"
      height="40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 8-pointed star formed by two overlapping squares */}
      <rect
        x="30"
        y="5"
        width="40"
        height="40"
        transform="rotate(0 50 50)"
        stroke="rgba(168, 85, 247, 0.3)"
        strokeWidth="1"
        fill="rgba(168, 85, 247, 0.03)"
      />
      <rect
        x="30"
        y="5"
        width="40"
        height="40"
        transform="rotate(45 50 50)"
        stroke="rgba(236, 72, 153, 0.25)"
        strokeWidth="1"
        fill="rgba(236, 72, 153, 0.03)"
      />
      {/* Center dot */}
      <circle
        cx="50"
        cy="50"
        r="2"
        fill="rgba(168, 85, 247, 0.4)"
      />
      {/* Decorative inner diamond */}
      <rect
        x="44"
        y="44"
        width="12"
        height="12"
        transform="rotate(45 50 50)"
        stroke="rgba(168, 85, 247, 0.15)"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  );
}

async function copyToClipboard(text: string): Promise<boolean> {
  // Modern Clipboard API
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to fallback
    }
  }
  // Fallback: textarea + execCommand
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.pointerEvents = 'none';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export default function EndingScreen({ page, endingsFound, onRestart }: EndingScreenProps) {
  const ending = endingLabels[page.endingType || 'wisdom'];
  const totalEndings = 4;
  const foundCount = endingsFound.length;
  const allFound = foundCount === totalEndings;

  // Animated counter using useMotionValue
  const countMotion = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);
  const hasAnimated = useRef(false);
  const [shareCopied, setShareCopied] = useState(false);

  const handleShareEnding = useCallback(async () => {
    const text = [
      `${ending.emoji} J'ai atteint ${ending.title} dans Le Voyage Intérieur de Wassim!`,
      ``,
      ending.description,
      ``,
      `Découvrez votre propre aventure magique!`,
    ].join('\n');

    const ok = await copyToClipboard(text);
    if (ok) {
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  }, [ending]);

  useEffect(() => {
    if (!hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(countMotion, foundCount, {
        duration: 1.5,
        delay: 2.5,
        ease: 'easeOut',
        onUpdate(value) {
          setDisplayCount(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [countMotion, foundCount]);

  // Multicolor confetti particles
  const confettiParticles = useMemo(() => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const colorTemplate = confettiColors[i % confettiColors.length];
      const opacity = 0.2 + Math.random() * 0.4;
      const color = colorTemplate.replace('VAR', String(opacity));
      const isWarmWhite = i % confettiColors.length === 2 || i % confettiColors.length === 4;
      particles.push({
        left: Math.random() * 100,
        size: (isWarmWhite ? 2 : 2) + Math.random() * (i % 5 === 0 ? 4 : 2), // some particles slightly larger
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 6,
        opacity,
        color,
        isWarmWhite,
      });
    }
    return particles;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden footer-noise"
    >
      {/* Confetti particles floating up with varied colors */}
      {confettiParticles.map((p, i) => (
        <div
          key={i}
          className={`${p.isWarmWhite ? 'confetti-warm-white' : 'confetti-particle'} absolute rounded-full pointer-events-none`}
          style={{
            left: `${p.left}%`,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            background: p.color,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      <div className="max-w-2xl w-full text-center relative z-10">
        {/* 8-pointed star ornament above emoji */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 1, type: 'spring', stiffness: 100, damping: 15 }}
          className="flex justify-center mb-2"
        >
          <EightPointedStar className="star-ornament" />
        </motion.div>

        {/* Ending emoji with golden halo and radial glow */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 150, damping: 12 }}
          className="ending-glow text-6xl mb-6 inline-flex items-center justify-center rounded-full p-4 golden-halo"
        >
          {ending.emoji}
        </motion.div>

        {/* Ending type label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-purple-500/60 text-sm uppercase tracking-[0.3em] font-serif mb-4"
        >
          Fin découverte
        </motion.p>

        {/* Ending title with shimmer */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-serif text-3xl sm:text-4xl text-purple-100 font-bold mb-6 shimmer-text ending-title-float"
          style={{ textShadow: '0 0 30px rgba(168, 85, 247, 0.15)' }}
        >
          {ending.title}
        </motion.h2>

        {/* Ending description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="text-purple-200/60 font-serif text-lg mb-10"
        >
          {ending.description}
        </motion.p>

        {/* Final narrative in glass card */}
        <div className="narrative-glass-card mb-10 text-left">
          <div className="relative z-10 space-y-4">
            {page.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.2, duration: 0.8 }}
                className="font-serif text-purple-100/70 leading-relaxed"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2 + page.paragraphs.length * 0.2, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-600/40" />
          <Star className="w-4 h-4 text-purple-500/40" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-600/40" />
        </motion.div>

        {/* Endings progress with animated counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-purple-500/50" />
            <span className="text-purple-300/50 text-sm font-serif">
              Fins découvertes : <span className="text-purple-300/80 font-bold tabular-nums">{displayCount}</span>/{totalEndings}
            </span>
          </div>
          <div className="flex items-center justify-center gap-3">
            {['rainbow', 'sharing', 'guardian', 'artist'].map((type) => {
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
                        ? 'bg-purple-500 shadow-md shadow-purple-500/50 border-2 border-purple-400/60'
                        : 'bg-purple-900/20 border-2 border-purple-800/15'
                    }`}
                    title={endingLabels[type].title}
                  />
                  {/* Tooltip */}
                  {isFound && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="text-[10px] font-serif text-purple-400/70 bg-[#1a0e2e]/90 px-2 py-0.5 rounded border border-purple-800/15">
                        {endingLabels[type].emoji} {endingLabels[type].title}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
          {foundCount < totalEndings && (
            <p className="text-purple-400/40 text-xs mt-3 font-serif italic">
              D&apos;autres destins attendent Wassim... Rejouez pour les découvrir.
            </p>
          )}
          {allFound && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="mt-4 px-6 py-3 rounded-lg celebration-border"
            >
              <p className="text-purple-300/70 text-sm font-serif italic mb-1">
                ✦ Tu as découvert tous les chemins de Wassim ✦
              </p>
              <p className="text-purple-400/50 text-xs font-serif">
                Chaque fin est un enseignement. Chaque choix est une couleur.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Restart button with rotation animation on hover */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onRestart}
          className="restart-btn restart-gradient-border inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-600 hover:to-pink-500 text-purple-100 font-serif rounded-lg shadow-lg shadow-purple-900/20 border border-purple-600/20 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 restart-icon" />
          <span>Recommencer l&apos;aventure</span>
        </motion.button>

        {/* Share ending button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleShareEnding}
          className="inline-flex items-center gap-2 px-8 py-3 mt-3 bg-purple-950/20 border border-purple-800/20 hover:border-purple-700/30 text-purple-400/60 hover:text-purple-300/80 font-serif rounded-lg transition-all duration-300 cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
          <span>{shareCopied ? '✓ Copié !' : 'Partager cette fin'}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
