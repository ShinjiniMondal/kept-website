'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, CheckCircle2, Clock, Play, Pause, Zap } from 'lucide-react';
import { fadeUpVariant } from '@/lib/animations/presets';

interface DayEvent {
  time: string;
  hourVal: number;
  title: string;
  category: string;
  statusAtHour: (hour: number) => 'planned' | 'approaching' | 'due' | 'completed';
}

const daySchedule: DayEvent[] = [
  {
    time: '08:00 AM',
    hourVal: 8,
    title: 'Morning Intentions & Plan Review',
    category: 'Mindset',
    statusAtHour: (h) => (h < 8 ? 'planned' : 'completed'),
  },
  {
    time: '09:00 AM',
    hourVal: 9,
    title: 'Deep Work: Core system refactoring',
    category: 'Engineering',
    statusAtHour: (h) => (h < 9 ? 'planned' : h === 9 ? 'due' : 'completed'),
  },
  {
    time: '11:30 AM',
    hourVal: 11.5,
    title: 'Kept Product Architecture sync',
    category: 'Startup',
    statusAtHour: (h) => (h < 11 ? 'planned' : h < 12 ? 'approaching' : 'completed'),
  },
  {
    time: '01:00 PM',
    hourVal: 13,
    title: 'Mindful Lunch & Screen Break',
    category: 'Health',
    statusAtHour: (h) => (h < 12.5 ? 'planned' : h === 13 ? 'due' : 'completed'),
  },
  {
    time: '03:00 PM',
    hourVal: 15,
    title: '30-minute Gym Cardio Workout',
    category: 'Health',
    statusAtHour: (h) => (h < 14.5 ? 'planned' : h === 15 ? 'due' : 'completed'),
  },
  {
    time: '06:00 PM',
    hourVal: 18,
    title: 'Figma Design Tokens & UI Specs',
    category: 'Learning',
    statusAtHour: (h) => (h < 17 ? 'planned' : h < 18 ? 'approaching' : h === 18 ? 'due' : 'completed'),
  },
  {
    time: '09:00 PM',
    hourVal: 21,
    title: 'Personal Side Project Coding',
    category: 'Creative',
    statusAtHour: (h) => (h < 20 ? 'planned' : h < 21 ? 'approaching' : 'completed'),
  },
];

export function DayWithKept() {
  const [currentHour, setCurrentHour] = useState<number>(14); // 2:00 PM default

  return (
    <section className="py-24 bg-stone-50 border-b border-stone-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2"
          >
            Tactile Experience
          </motion.span>
          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 mb-4"
          >
            A Day in the Life with Kept.
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-stone-600"
          >
            Drag the time slider to watch how activities dynamically shift states as your day unfolds.
          </motion.p>
        </div>

        {/* TIME SCRUBBER CONTROL */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-3xl border border-stone-200 shadow-md mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {currentHour < 18 ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-500" />}
              <span className="font-bold text-stone-900 text-lg">
                Time Scrubber: {Math.floor(currentHour).toString().padStart(2, '0')}:00 {currentHour < 12 ? 'AM' : 'PM'}
              </span>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-600">
              Interactive Scrubber
            </span>
          </div>

          <input
            type="range"
            min="7"
            max="22"
            step="1"
            value={currentHour}
            onChange={(e) => setCurrentHour(parseFloat(e.target.value))}
            className="w-full h-3 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />

          <div className="flex justify-between text-xs text-stone-400 font-semibold mt-2">
            <span>07:00 AM</span>
            <span>12:00 PM</span>
            <span>05:00 PM</span>
            <span>10:00 PM</span>
          </div>
        </div>

        {/* TIMELINE EVENT CARDS */}
        <div className="max-w-4xl mx-auto space-y-4">
          {daySchedule.map((event) => {
            const status = event.statusAtHour(currentHour);

            return (
              <motion.div
                key={event.time}
                layout
                className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  status === 'completed'
                    ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                    : status === 'due'
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-600/20 scale-[1.01]'
                    : status === 'approaching'
                    ? 'bg-amber-50 border-amber-200 text-stone-900'
                    : 'bg-white border-stone-200 text-stone-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl font-mono text-xs font-bold shrink-0 ${
                    status === 'due' ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-700'
                  }`}>
                    {event.time}
                  </div>
                  <div>
                    <h4 className="font-bold text-base">{event.title}</h4>
                    <span className={`text-xs ${status === 'due' ? 'text-indigo-200' : 'text-stone-500'}`}>
                      Category: {event.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    status === 'completed'
                      ? 'bg-emerald-200 text-emerald-800'
                      : status === 'due'
                      ? 'bg-white text-indigo-700 font-bold'
                      : status === 'approaching'
                      ? 'bg-amber-200 text-amber-900'
                      : 'bg-stone-100 text-stone-500'
                  }`}>
                    {status}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
