'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Focus, Volume2, VolumeX, Maximize2, ShieldAlert } from 'lucide-react';
import { fadeUpVariant } from '@/lib/animations/presets';

export function FocusSection() {
  const [ambientQuiet, setAmbientQuiet] = useState(true);

  return (
    <section id="focus-mode" className="py-24 bg-stone-950 text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
        ambientQuiet ? 'bg-radial from-indigo-900/20 via-stone-950 to-stone-950' : 'bg-radial from-amber-900/10 via-stone-950 to-stone-950'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800 border border-stone-700 text-stone-300 text-xs font-semibold tracking-wide mb-4"
          >
            <Focus className="w-3.5 h-3.5 text-indigo-400" />
            <span>Kept Focus Environment</span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            One task. No noise. Just progress.
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-stone-400"
          >
            Enter Kept Focus mode to lock in single-task execution and dampen digital distractions.
          </motion.p>
        </div>

        {/* FOCUS INTERFACE CARD */}
        <div className="max-w-3xl mx-auto bg-stone-900/90 border border-stone-800 rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-stone-800">
            <div className="flex items-center gap-2 text-stone-400 text-xs uppercase tracking-wider font-semibold">
              <ShieldAlert className="w-4 h-4 text-indigo-400" />
              <span>Notifications Silenced</span>
            </div>

            <button
              onClick={() => setAmbientQuiet(!ambientQuiet)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold transition-colors"
            >
              {ambientQuiet ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-stone-400" />}
              <span>{ambientQuiet ? 'Ambient White Noise: ON' : 'Ambient Noise: OFF'}</span>
            </button>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-2">
            Active Focus Target
          </span>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-6">
            Write thesis introduction
          </h3>

          <div className="text-7xl sm:text-8xl font-black font-mono tracking-tight text-white mb-6">
            24:18
          </div>

          <p className="text-sm text-stone-400 max-w-md mx-auto mb-8">
            Kept shields your flow state from tab switching and unnecessary app interruptions.
          </p>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold">
            <span>Session 1 of 4 &middot; Deep Work Protocol</span>
          </div>
        </div>
      </div>
    </section>
  );
}
