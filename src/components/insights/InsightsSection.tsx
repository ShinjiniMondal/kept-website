'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Flame, Target, Award, PieChart } from 'lucide-react';
import { fadeUpVariant, staggerContainer } from '@/lib/animations/presets';

export function InsightsSection() {
  return (
    <section className="py-24 bg-stone-50/60 border-b border-stone-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold tracking-wide mb-4"
          >
            <BarChart3 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Productivity Analytics & Insights</span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 mb-6"
          >
            Understand your follow-through patterns.
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-stone-600 leading-relaxed"
          >
            Kept converts your day-to-day commitments into clear, actionable analytics that show you when you thrive.
          </motion.p>
        </div>

        {/* INSIGHT CARDS GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1: Completion Rate */}
          <motion.div variants={fadeUpVariant} className="bg-white rounded-3xl p-8 border border-stone-200 shadow-lg shadow-stone-900/5">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                +14% this month
              </span>
            </div>
            <h3 className="text-4xl font-extrabold text-stone-900 mb-2">92.4%</h3>
            <p className="text-sm font-semibold text-stone-700 mb-4">Overall Completion Rate</p>
            <p className="text-xs text-stone-500 leading-relaxed">
              Based on 148 scheduled commitments across work, health, and personal goals over the last 30 days.
            </p>
          </motion.div>

          {/* Card 2: Streak & Momentum */}
          <motion.div variants={fadeUpVariant} className="bg-white rounded-3xl p-8 border border-stone-200 shadow-lg shadow-stone-900/5">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                Active Streak
              </span>
            </div>
            <h3 className="text-4xl font-extrabold text-stone-900 mb-2">12 Days</h3>
            <p className="text-sm font-semibold text-stone-700 mb-4">Unbroken Execution Streak</p>
            <p className="text-xs text-stone-500 leading-relaxed">
              You haven&apos;t missed a primary daily commitment since September 12th.
            </p>
          </motion.div>

          {/* Card 3: Focus Hours */}
          <motion.div variants={fadeUpVariant} className="bg-white rounded-3xl p-8 border border-stone-200 shadow-lg shadow-stone-900/5">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                Deep Work
              </span>
            </div>
            <h3 className="text-4xl font-extrabold text-stone-900 mb-2">38.5 hrs</h3>
            <p className="text-sm font-semibold text-stone-700 mb-4">Logged Focus Sessions</p>
            <p className="text-xs text-stone-500 leading-relaxed">
              Logged across 42 Pomodoro and single-task deep focus sessions with zero notification distractions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
