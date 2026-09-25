'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Timer, Sparkles, Coffee } from 'lucide-react';
import { fadeUpVariant } from '@/lib/animations/presets';

type PomoMode = 'focus' | 'shortBreak' | 'longBreak';

const modeTimes: Record<PomoMode, number> = {
  focus: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

export function PomodoroDemo() {
  const [mode, setMode] = useState<PomoMode>('focus');
  const [timeLeft, setTimeLeft] = useState<number>(modeTimes.focus);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  const changeMode = (m: PomoMode) => {
    setMode(m);
    setTimeLeft(modeTimes[m]);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(modeTimes[mode]);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <section className="py-24 bg-stone-50 border-b border-stone-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold tracking-wide mb-4"
          >
            <Timer className="w-3.5 h-3.5 text-rose-600" />
            <span>Built-in Timer Engine</span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 mb-4"
          >
            Functional Pomodoro Sprint Demo
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-stone-600"
          >
            Experience Kept&apos;s clean Pomodoro interface right here.
          </motion.p>
        </div>

        {/* TIMER CONTAINER */}
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl text-center">
          {/* Mode Switcher */}
          <div className="flex justify-center gap-2 p-1.5 bg-stone-100 rounded-2xl mb-8">
            {[
              { id: 'focus', label: 'Focus (25m)', icon: Timer },
              { id: 'shortBreak', label: 'Short Break (5m)', icon: Coffee },
              { id: 'longBreak', label: 'Long Break (15m)', icon: Sparkles },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => changeMode(m.id as PomoMode)}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  mode === m.id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Time Display */}
          <div className="text-7xl sm:text-8xl font-black font-mono tracking-tight text-stone-900 mb-8">
            {formattedTime}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={toggleTimer}
              className={`px-8 py-4 rounded-2xl font-bold text-white text-base shadow-lg transition-all flex items-center gap-2 ${
                isRunning ? 'bg-amber-600 hover:bg-amber-700' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30'
              }`}
            >
              {isRunning ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
              <span>{isRunning ? 'Pause Session' : 'Start Focus Sprint'}</span>
            </button>

            <button
              onClick={resetTimer}
              className="p-4 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
              title="Reset Timer"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
