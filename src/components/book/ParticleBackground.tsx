'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeSpeed: number;
  phase: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  const createParticle = useCallback((width: number, height: number, startY?: number): Particle => ({
    x: Math.random() * width,
    y: startY !== undefined ? startY : Math.random() * height,
    size: Math.random() * 2 + 0.3,
    speedX: (Math.random() - 0.5) * 0.15,
    speedY: -Math.random() * 0.35 - 0.08,
    opacity: Math.random() * 0.4 + 0.05,
    fadeSpeed: Math.random() * 0.003 + 0.001,
    phase: Math.random() * Math.PI * 2,
  }), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles with varied distribution
    const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 20000));
    for (let i = 0; i < count; i++) {
      particlesRef.current.push(createParticle(canvas.width, canvas.height));
    }

    let time = 0;

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        // Gentle sinusoidal drift
        p.x += p.speedX + Math.sin(time + p.phase) * 0.08;
        p.y += p.speedY;
        
        // Breathing opacity
        const breathOpacity = p.opacity + Math.sin(time * 0.5 + p.phase) * 0.08;
        const finalOpacity = Math.max(0.02, Math.min(0.5, breathOpacity));

        // Reset particle if out of bounds
        if (p.y < -20 || p.x < -20 || p.x > canvas.width + 20) {
          particlesRef.current[i] = createParticle(canvas.width, canvas.height, canvas.height + 20);
        }

        // Main particle - soft glow, not harsh circle
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `rgba(212, 165, 116, ${finalOpacity})`);
        gradient.addColorStop(0.3, `rgba(212, 165, 116, ${finalOpacity * 0.4})`);
        gradient.addColorStop(1, `rgba(212, 165, 116, 0)`);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 230, 200, ${finalOpacity * 0.8})`;
        ctx.fill();
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
