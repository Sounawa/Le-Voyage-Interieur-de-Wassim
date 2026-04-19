'use client';

import { useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, RotateCcw, Star } from 'lucide-react';
import { useStoryStore } from '@/store/story-store';

interface BookCoverProps {
  onStart: () => void;
}

// Ending type metadata
const ENDING_META: Record<string, { emoji: string; title: string }> = {
  light: { emoji: '🌅', title: 'La Lumière' },
  wisdom: { emoji: '📜', title: 'La Sagesse' },
  shadow: { emoji: '🌑', title: 'L\'Ombre' },
  pure: { emoji: '💎', title: 'La Pureté' },
};

// Floating star particle component
function FloatingStar({ delay, size, x, duration }: { delay: number; size: number; x: number; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: '-5%',
        background: 'radial-gradient(circle, rgba(218, 165, 32, 0.6) 0%, rgba(218, 165, 32, 0) 70%)',
      }}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: [0, 0.4, 0],
        y: [0, -100 - Math.random() * 200],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  );
}

export default function BookCover({ onStart }: BookCoverProps) {
  const endingsFound = useStoryStore((s) => s.endingsFound);
  const hasStarted = useStoryStore((s) => s.hasStarted);
  const restart = useStoryStore((s) => s.restart);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleStart = () => {
    useStoryStore.setState({ hasStarted: true });
    onStart();
  };

  const handleRestart = () => {
    restart();
    onStart();
  };

  // Generate star particles data
  const starParticles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      delay: Math.random() * 8,
      size: 2 + Math.random() * 4,
      x: Math.random() * 100,
      duration: 6 + Math.random() * 8,
    }));
  }, []);

  // Subtle animated star field using canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const stars: Array<{
      x: number; y: number; size: number; speed: number; opacity: number; phase: number;
    }> = [];
    for (let i = 0; i < 60; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 0.5 + Math.random() * 1.5,
        speed: 0.2 + Math.random() * 0.5,
        opacity: 0.1 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.speed + star.phase) * 0.3 + 0.7;
        const alpha = star.opacity * twinkle;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(218, 165, 32, ${alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated star field canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Floating particles */}
      {starParticles.map((particle) => (
        <FloatingStar key={particle.id} {...particle} />
      ))}

      {/* Decorative geometric pattern background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 max-w-lg mx-auto"
      >
        {/* Ornamental top border */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-600/50" />
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-amber-600/60">
            <path d="M12 2L14.5 8.5L21 9.5L16.5 14L18 21L12 17.5L6 21L7.5 14L3 9.5L9.5 8.5L12 2Z" fill="currentColor" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-600/50" />
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-amber-100 mb-4 leading-tight"
          style={{ textShadow: '0 0 40px rgba(212, 165, 116, 0.3)' }}
        >
          Le Voyage Intérieur
          <br />
          <span className="text-amber-400">de Souhayl</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-amber-300/60 font-serif text-lg sm:text-xl italic mb-2"
        >
          Tome 1 : L&apos;Éveil
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="text-amber-200/40 text-sm mb-12"
        >
          Une histoire spirituelle interactive
        </motion.p>

        {/* Ornamental divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-700/40" />
          <div className="w-2 h-2 bg-amber-700/40 rotate-45" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-700/40" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="text-amber-100/50 text-sm leading-relaxed mb-10 max-w-sm mx-auto font-serif"
        >
          Souhayl a dix ans. Il rêve de comprendre le Tassawuf, 
          le chemin de la purification du cœur. Pour cela, il devra 
          pénétrer dans son monde intérieur et affronter son plus 
          grand ennemi : son propre ego.
        </motion.p>

        {/* Start button */}
        {!hasStarted ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleStart}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-amber-100 font-serif text-lg rounded-lg transition-all duration-300 shadow-lg shadow-amber-900/30 hover:shadow-amber-800/40"
          >
            <BookOpen className="w-5 h-5" />
            <span>Commencer l&apos;aventure</span>
            <div className="absolute inset-0 rounded-lg border border-amber-500/20" />
          </motion.button>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRestart}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-amber-100 font-serif text-lg rounded-lg transition-all duration-300 shadow-lg shadow-amber-900/30"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Recommencer le voyage</span>
          </motion.button>
        )}

        {/* Endings found badges */}
        {endingsFound.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="mt-8"
          >
            <p className="text-amber-400/50 text-xs mb-3 font-serif flex items-center justify-center gap-1.5">
              <Star className="w-3 h-3" />
              Fins découvertes : {endingsFound.length}/4
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {endingsFound.map((endingType) => {
                const meta = ENDING_META[endingType];
                if (!meta) return null;
                return (
                  <motion.div
                    key={endingType}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-700/30 bg-amber-950/40"
                  >
                    <span className="text-sm">{meta.emoji}</span>
                    <span className="text-amber-300/70 text-[11px] font-serif">{meta.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-800/30" />
          <span className="text-amber-800/30 text-xs font-serif">✦</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-800/30" />
        </motion.div>
      </motion.div>
    </div>
  );
}
