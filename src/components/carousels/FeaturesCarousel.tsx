'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckSquare, 
  Bell, 
  Calendar, 
  History, 
  Focus, 
  Timer, 
  Grid2X2, 
  BarChart3, 
  Lightbulb, 
  Bot,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { fadeUpVariant } from '@/lib/animations/presets';

interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  icon: any;
  tag: string;
}

const features: FeatureItem[] = [
  { id: '1', title: 'Smart Activities', desc: 'Creation, past, current, and upcoming activity tracking with zero bloat.', icon: CheckSquare, tag: 'Core' },
  { id: '2', title: 'Contextual Reminders', desc: 'Timely notifications delivered when you are actually available.', icon: Bell, tag: 'Smart Alert' },
  { id: '3', title: 'Calendar Grid', desc: 'Seamless daily and weekly schedule overview with visual status coding.', icon: Calendar, tag: 'Planning' },
  { id: '4', title: 'Timeline & History', desc: 'Complete historical record of completed commitments and growth trends.', icon: History, tag: 'Analytics' },
  { id: '5', title: 'Focus Environment', desc: 'Minimalist single-task mode with noise dampening and app shields.', icon: Focus, tag: 'Deep Work' },
  { id: '6', title: 'Built-in Pomodoro', desc: 'Customizable work/break interval sprints for sustained energy.', icon: Timer, tag: 'Sprints' },
  { id: '7', title: 'Eisenhower Matrix', desc: 'Instant 4-quadrant drag and drop priority organization.', icon: Grid2X2, tag: 'Strategy' },
  { id: '8', title: 'Completion Insights', desc: 'Completion-rate metrics, streak counters, and category breakdowns.', icon: BarChart3, tag: 'Data' },
  { id: '9', title: 'AI Tutor Guidance', desc: 'Deconstruct overwhelming goals into 3 actionable micro-steps.', icon: Lightbulb, tag: 'AI Assistance' },
  { id: '10', title: 'AI Accountability Agent', desc: 'Interactive companion that checks in, listens, and helps you execute.', icon: Bot, tag: 'Differentiator' },
];

export function FeaturesCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="features" className="py-24 bg-stone-50 border-b border-stone-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <motion.span
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2"
            >
              Complete Suite
            </motion.span>
            <motion.h2
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900"
            >
              10 Features built for follow-through.
            </motion.h2>
          </div>

          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
              disabled={activeIdx === 0}
              className="p-3 rounded-full bg-white border border-stone-200 text-stone-700 disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveIdx((prev) => Math.min(features.length - 3, prev + 1))}
              disabled={activeIdx >= features.length - 3}
              className="p-3 rounded-full bg-stone-900 text-white disabled:opacity-30 transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* FEATURES GRID / CAROUSEL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(activeIdx, activeIdx + 3).map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 uppercase tracking-wider">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-stone-900 mb-2">{feat.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
