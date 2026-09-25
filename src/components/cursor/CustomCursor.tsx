'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'drag' | 'action'>('default');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 400 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Check hover targets with data-cursor attributes
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor-text') || '';
        const variant = (cursorTarget.getAttribute('data-cursor') || 'hover') as any;
        setCursorText(text);
        setCursorVariant(variant);
      } else {
        setCursorText('');
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full font-medium text-xs tracking-wide transition-colors duration-200 shadow-lg select-none"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: cursorText ? 'auto' : cursorVariant === 'hover' ? 36 : 14,
        height: cursorText ? 32 : cursorVariant === 'hover' ? 36 : 14,
        paddingLeft: cursorText ? 14 : 0,
        paddingRight: cursorText ? 14 : 0,
        backgroundColor: cursorVariant === 'drag' 
          ? '#4F46E5' 
          : cursorVariant === 'action'
          ? '#0D9488'
          : cursorText
          ? '#121316'
          : 'rgba(79, 70, 229, 0.25)',
        color: '#FFFFFF',
        scale: cursorVariant === 'hover' ? 1.2 : 1,
        backdropFilter: cursorText ? 'blur(8px)' : 'blur(0px)',
      }}
      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="whitespace-nowrap font-sans font-medium text-[11px] text-white uppercase tracking-wider"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
