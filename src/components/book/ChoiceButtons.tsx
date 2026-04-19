'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Choice } from '@/lib/story-types';

interface ChoiceButtonsProps {
  choices: Choice[];
  onChoose: (choice: Choice) => void;
}

export default function ChoiceButtons({ choices, onChoose }: ChoiceButtonsProps) {
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Keyboard support: press 1, 2, or 3 to choose
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const num = parseInt(e.key);
    if (num >= 1 && num <= choices.length) {
      onChoose(choices[num - 1]);
    }
  }, [choices, onChoose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Parallax effect: subtle Y movement based on mouse position
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(${y * -3}px)`;
  }, []);

  const handleMouseLeave = useCallback((index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = 'translateY(0px)';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-8 space-y-4"
    >
      {/* Child-friendly message instead of warning */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex items-center justify-center gap-2 mb-6"
      >
        <span className="text-amber-500/50 text-xs font-serif italic tracking-wide">
          ✦ Choisir avec le cœur — ce moment est unique ✦
        </span>
      </motion.div>

      {/* Choice cards with glass-morphism */}
      <div className="space-y-3">
        {choices.map((choice, index) => (
          <motion.button
            key={choice.id}
            ref={(el) => { cardRefs.current[index] = el; }}
            initial={{ opacity: 0, y: 15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
            whileHover={{
              scale: 1.02,
              x: 4,
              transition: { duration: 0.25 },
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChoose(choice)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => {
              setHoveredIndex(null);
              handleMouseLeave(index);
            }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            className={`group relative w-full text-left px-6 py-5 rounded-xl overflow-hidden transition-all duration-400
              ${hoveredIndex === index ? 'glass-card gradient-border' : 'glass-card'}`}
          >
            {/* Animated gradient shimmer sweep on hover */}
            {hoveredIndex === index && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    backgroundPosition: ['200% 0%', '-200% 0%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.08), transparent)',
                    backgroundSize: '200% 100%',
                  }}
                />
              </motion.div>
            )}

            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{
                boxShadow: 'inset 0 1px 0 rgba(212, 165, 116, 0.08), inset 0 0 20px rgba(212, 165, 116, 0.03)',
              }}
            />

            {/* Outer glow on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{
                boxShadow: '0 0 20px rgba(212, 165, 116, 0.08), 0 0 40px rgba(212, 165, 116, 0.04)',
              }}
            />

            <div className="relative flex items-start gap-4">
              {/* Number indicator */}
              <div className="shrink-0 w-7 h-7 rounded-full border border-amber-700/30 bg-amber-950/40 flex items-center justify-center mt-0.5 group-hover:border-amber-500/50 group-hover:bg-amber-900/30 transition-all duration-300">
                <span className="text-amber-500/60 text-xs font-serif font-bold group-hover:text-amber-400/80 transition-colors duration-300">
                  {index + 1}
                </span>
              </div>

              {/* Emoji/icon */}
              <span className="text-2xl mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300">
                {choice.emoji || ['🌙', '⚡', '✨'][index]}
              </span>

              {/* Text */}
              <p className="font-serif text-amber-100/90 text-base leading-relaxed group-hover:text-amber-50 transition-colors duration-300">
                {choice.text}
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-amber-600/0 via-amber-500/30 to-amber-600/0 transition-all duration-400"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
              }}
            />
          </motion.button>
        ))}
      </div>

      {/* Keyboard hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="text-center text-amber-700/30 text-[10px] font-serif mt-4"
      >
        Appuyez sur {choices.map((_, i) => (
          <span key={i} className="inline-block px-1 py-0.5 mx-0.5 rounded border border-amber-700/20 text-amber-600/40">
            {i + 1}
          </span>
        ))} pour choisir
      </motion.p>
    </motion.div>
  );
}
