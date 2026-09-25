'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { fadeUpVariant } from '@/lib/animations/presets';

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2"
          >
            The Kept Difference
          </motion.span>
          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 mb-4"
          >
            Stop collecting unkept promises.
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-stone-600"
          >
            Drag the comparison slider to contrast traditional to-do apps with Kept&apos;s accountability system.
          </motion.p>
        </div>

        {/* INTERACTIVE COMPARISON CONTAINER */}
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden border border-stone-200 shadow-2xl select-none bg-stone-100 min-h-[460px]">
          {/* Slider Input Scrubber */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-ew-resize"
            data-cursor="drag"
            data-cursor-text="Compare"
          />

          {/* LEFT SIDE: WITHOUT KEPT (Base Layer) */}
          <div className="absolute inset-0 p-8 sm:p-12 bg-stone-900 text-white flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider mb-6">
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>Without Kept &middot; Traditional To-Do List</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-stone-100 mb-4">&quot;I&apos;ll do it later.&quot;</h3>
              <ul className="space-y-3 text-stone-300 text-sm font-medium">
                <li className="flex items-center gap-2 text-rose-300">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Tasks pile up with 14 overdue notifications</span>
                </li>
                <li className="flex items-center gap-2 text-stone-400">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>Calendar becomes crowded & overwhelming</span>
                </li>
                <li className="flex items-center gap-2 text-stone-400">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>Fragmented progress and guilt accumulation</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/80 max-w-md">
              <span className="text-xs text-stone-400 font-mono">Overdue Task Counter: 14 pending</span>
              <div className="w-full bg-stone-700 h-2 rounded-full mt-2 overflow-hidden">
                <div className="w-[85%] bg-rose-500 h-full rounded-full" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: WITH KEPT (Clipped Overlay Layer) */}
          <div
            className="absolute inset-0 p-8 sm:p-12 bg-indigo-950 text-white flex flex-col justify-between"
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-6">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>With Kept &middot; Active Accountability</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">Intentions turned into action.</h3>
              <ul className="space-y-3 text-emerald-100 text-sm font-medium">
                <li className="flex items-center gap-2 text-emerald-300">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Plan &rarr; Reminder &rarr; AI Check-in &rarr; Completion</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-200">
                  <Flame className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>12-day completion streak maintained</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>92% execution rate with zero guilt</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-900/80 p-4 rounded-2xl border border-indigo-700/80 max-w-md">
              <span className="text-xs text-indigo-300 font-mono">Kept Execution Momentum: 92% Completed</span>
              <div className="w-full bg-indigo-900 h-2 rounded-full mt-2 overflow-hidden">
                <div className="w-[92%] bg-emerald-400 h-full rounded-full" />
              </div>
            </div>
          </div>

          {/* DRAG HANDLE BAR */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-stone-900 shadow-xl flex items-center justify-center font-bold text-xs">
              &harr;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
