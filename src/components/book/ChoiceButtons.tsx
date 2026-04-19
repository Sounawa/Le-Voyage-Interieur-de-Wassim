'use client';

import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import type { Choice } from '@/lib/story-types';

interface ChoiceButtonsProps {
  choices: Choice[];
  onChoose: (choice: Choice) => void;
}

export default function ChoiceButtons({ choices, onChoose }: ChoiceButtonsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-8 space-y-4"
    >
      {/* Warning */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex items-center justify-center gap-2 mb-6"
      >
        <AlertTriangle className="w-4 h-4 text-amber-500/60" />
        <span className="text-amber-500/60 text-xs font-serif italic tracking-wide">
          Ce choix est irréversible — il façonnera le destin de Souhayl
        </span>
        <AlertTriangle className="w-4 h-4 text-amber-500/60" />
      </motion.div>

      {/* Choice cards */}
      <div className="space-y-3">
        {choices.map((choice, index) => (
          <motion.button
            key={choice.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChoose(choice)}
            className="group relative w-full text-left px-6 py-5 rounded-lg border border-amber-800/20 bg-gradient-to-r from-amber-950/30 to-transparent hover:from-amber-900/30 hover:border-amber-700/40 transition-all duration-300"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-lg bg-amber-600/0 group-hover:bg-amber-600/5 transition-colors duration-300" />
            
            <div className="relative flex items-start gap-4">
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
            <motion.div
              className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-amber-600/0 via-amber-500/30 to-amber-600/0"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
