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

      {/* Choice cards */}
      <div className="space-y-3">
        {choices.map((choice, index) => (
          <motion.button
            key={choice.id}
            ref={(el) => { cardRefs.current[index] = el; }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChoose(choice)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => {
              setHoveredIndex(null);
              handleMouseLeave(index);
            }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            className="group relative w-full text-left px-6 py-5 rounded-lg transition-all duration-300 overflow-hidden"
            style={{
              border: hoveredIndex === index
                ? '1px solid rgba(218, 165, 32, 0.5)'
                : '1px solid rgba(120, 53, 15, 0.2)',
              background: hoveredIndex === index
                ? 'linear-gradient(135deg, rgba(120, 53, 15, 0.3), transparent)'
                : 'linear-gradient(to right, rgba(41, 22, 10, 0.3), transparent)',
            }}
          >
            {/* Animated gradient border shimmer on hover */}
            {hoveredIndex === index && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.15), transparent)',
                  backgroundSize: '200% 100%',
                }}
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
                    background: 'linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.1), transparent)',
                    backgroundSize: '200% 100%',
                  }}
                />
              </motion.div>
            )}

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-lg bg-amber-600/0 group-hover:bg-amber-600/5 transition-colors duration-300" />

            <div className="relative flex items-start gap-4">
              {/* Number indicator */}
              <div className="shrink-0 w-7 h-7 rounded-full border border-amber-700/30 bg-amber-950/40 flex items-center justify-center mt-0.5">
                <span className="text-amber-500/60 text-xs font-serif font-bold">
                  {index + 1}
                </span>
              </div>

              {/* Emoji/icon */}
              <span className="text-2xl mt-0.5 shrink-0">
                {choice.emoji || ['🌙', '⚡', '✨'][index]}
              </span>

              {/* Text */}
              <p className="font-serif text-amber-100/90 text-base leading-relaxed group-hover:text-amber-50 transition-colors">
                {choice.text}
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-amber-600/0 via-amber-500/30 to-amber-600/0 transition-all duration-300"
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
