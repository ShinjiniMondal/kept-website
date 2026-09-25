'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Compass, Target, BellRing, ShieldCheck, HeartHandshake } from 'lucide-react';
import { fadeUpVariant } from '@/lib/animations/presets';

interface PillarCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: any;
  color: string;
}

const pillars: PillarCard[] = [
  {
    id: 'plan',
    title: '1. Plan',
    subtitle: 'Intention capture without friction',
    description: 'Transform vague desires into concrete, timed commitments in seconds. Kept structures your goals into actionable windows.',
    badge: 'Intent Framework',
    icon: Compass,
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'focus',
    title: '2. Focus',
    subtitle: 'Distraction-free momentum',
    description: 'Eliminate UI noise with ambient focus sessions, Pomodoro timers, and single-task locks designed to protect your attention.',
    badge: 'Zero Noise',
    icon: Target,
    color: 'from-indigo-600 to-purple-700',
  },
  {
    id: 'remember',
    title: '3. Remember',
    subtitle: 'Smart context awareness',
    description: 'Never lose track of what matters. Kept tracks due-today, overdue, and upcoming tasks with intelligent timing.',
    badge: 'Timely Alerts',
    icon: BellRing,
    color: 'from-purple-600 to-pink-700',
  },
  {
    id: 'follow-through',
    title: '4. Follow Through',
    subtitle: 'The AI Accountability Agent',
    description: 'Our core differentiator. When life happens, Kept doesn’t give up — it actively checks in, listens, and helps you execute.',
    badge: 'AI Differentiator',
    icon: ShieldCheck,
    color: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'reflect',
    title: '5. Reflect',
    subtitle: 'Completion analytics & growth',
    description: 'Review completion rates, streak metrics, and category distributions to build lasting self-trust and discipline.',
    badge: 'Insights Engine',
    icon: HeartHandshake,
    color: 'from-amber-600 to-orange-700',
  },
];

export function ProductPillarsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(pillars.length - 1, prev + 1));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
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
              The 5 Pillars of Kept
            </motion.span>
            <motion.h2
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900"
            >
              How Kept turns intentions into reality.
            </motion.h2>
          </div>

          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="p-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 disabled:opacity-30 transition-colors focus:outline-none"
              aria-label="Previous slide"
              data-cursor="hover"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === pillars.length - 1}
              className="p-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white disabled:opacity-30 transition-colors focus:outline-none shadow-md"
              aria-label="Next slide"
              data-cursor="hover"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* DRAGGABLE / SWIPABLE CAROUSEL CONTAINER */}
        <div
          ref={containerRef}
          className="relative overflow-visible cursor-grab active:cursor-grabbing"
          data-cursor="drag"
          data-cursor-text="Swipe"
        >
          <div className="flex gap-6 transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * 75}%)` }}>
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = idx === activeIndex;

              return (
                <motion.div
                  key={pillar.id}
                  onClick={() => setActiveIndex(idx)}
                  animate={{
                    scale: isActive ? 1 : 0.94,
                    opacity: isActive ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-[85vw] sm:w-[420px] shrink-0 rounded-3xl p-8 border transition-all duration-300 ${
                    isActive
                      ? 'bg-stone-950 text-white border-stone-800 shadow-2xl shadow-indigo-950/20'
                      : 'bg-stone-50 text-stone-800 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${pillar.color} shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                      isActive ? 'bg-stone-800 text-stone-300' : 'bg-stone-200 text-stone-700'
                    }`}>
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{pillar.title}</h3>
                  <p className={`text-sm font-semibold mb-4 ${isActive ? 'text-indigo-400' : 'text-indigo-600'}`}>
                    {pillar.subtitle}
                  </p>
                  <p className={`text-sm leading-relaxed ${isActive ? 'text-stone-300' : 'text-stone-600'}`}>
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {pillars.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex ? 'w-8 bg-indigo-600' : 'w-2 bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
