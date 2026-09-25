'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, CheckCircle2, AlertCircle, Bot, Sparkles, RefreshCw } from 'lucide-react';

const scenes = [
  {
    id: 'problem-1',
    phase: 'The Typical Productivity Trap',
    heading: 'Most productivity apps stop at the reminder.',
    subtext: 'You set an alarm. It rings once. Life gets busy, and the task sinks into oblivion.',
    bg: 'bg-stone-900 text-white',
    accent: 'text-rose-400',
    icon: AlertCircle,
  },
  {
    id: 'problem-2',
    phase: 'The Cycle of Frustration',
    heading: 'You planned it. You scheduled it. You got distracted. You forgot.',
    subtext: 'Traditional to-do lists accumulate guilt instead of momentum.',
    bg: 'bg-stone-950 text-white',
    accent: 'text-amber-400',
    icon: RefreshCw,
  },
  {
    id: 'solution-1',
    phase: 'The Kept Paradigm Shift',
    heading: 'Kept remembers. Kept checks in.',
    subtext: 'When your scheduled time passes without completion, Kept actively engages.',
    bg: 'bg-indigo-950 text-white',
    accent: 'text-indigo-400',
    icon: Bot,
  },
  {
    id: 'solution-2',
    phase: 'The Result',
    heading: 'Kept helps you actually follow through.',
    subtext: 'Turn intentions into finished victories and rebuild confidence in your promises.',
    bg: 'bg-stone-900 text-white',
    accent: 'text-emerald-400',
    icon: CheckCircle2,
  },
];

export function ScrollStoryteller() {
  const [currentScene, setCurrentScene] = useState(0);

  const nextScene = () => {
    setCurrentScene((prev) => (prev + 1) % scenes.length);
  };

  const active = scenes[currentScene];
  const IconComp = active.icon;

  return (
    <section className={`py-28 ${active.bg} transition-colors duration-700 relative overflow-hidden`}>
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Step Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-stone-300 text-xs font-semibold tracking-wider uppercase mb-8">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Story Scene {currentScene + 1} of {scenes.length} &middot; {active.phase}</span>
        </div>

        {/* Dynamic Scene Content */}
        <div className="min-h-[260px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 max-w-3xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto shadow-inner">
                <IconComp className={`w-8 h-8 ${active.accent}`} />
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                {active.heading}
              </h2>

              <p className="text-lg sm:text-xl text-stone-300 leading-relaxed font-normal">
                {active.subtext}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scene Navigation buttons */}
        <div className="flex items-center justify-center gap-4 mt-12">
          {scenes.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentScene(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentScene ? 'w-10 bg-indigo-500' : 'w-2.5 bg-stone-700 hover:bg-stone-500'
              }`}
              aria-label={`Jump to scene ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextScene}
          className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider text-stone-200 border border-white/15 transition-all"
        >
          <span>Next Scene</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
