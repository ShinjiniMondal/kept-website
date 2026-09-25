'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Square, Clock, Bell, Bot, CheckCircle2, ArrowRight } from 'lucide-react';
import { fadeUpVariant, staggerContainer } from '@/lib/animations/presets';

export function NotAToDoList() {
  const transformationSteps = [
    { title: 'Unchecked Task', desc: 'Vague intent trapped in a static list', icon: Square, color: 'text-stone-400 bg-stone-100' },
    { title: 'Scheduled Target', desc: 'Bound to a specific time window', icon: Clock, color: 'text-blue-600 bg-blue-50' },
    { title: 'Smart Reminder', desc: 'Contextual notification when due', icon: Bell, color: 'text-indigo-600 bg-indigo-50' },
    { title: 'AI Follow-through', desc: 'Active check-in if delayed', icon: Bot, color: 'text-purple-600 bg-purple-50' },
    { title: 'Completed Action', desc: 'Logged victory & built confidence', icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50' },
  ];

  return (
    <section id="philosophy" className="py-24 bg-white border-b border-stone-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.span
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2"
          >
            Product Philosophy
          </motion.span>

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 mb-6 leading-tight"
          >
            A to-do list records intentions.{' '}
            <span className="text-indigo-600">Kept turns intentions into completed actions.</span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-stone-600 max-w-2xl mx-auto"
          >
            Most tools are digital graveyards for things you wanted to do. Kept builds an active bridge between wanting and finishing.
          </motion.p>
        </div>

        {/* TRANSFORMATION PIPELINE */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-5 gap-4 max-w-6xl mx-auto relative"
        >
          {transformationSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={fadeUpVariant}
                className="bg-stone-50 rounded-3xl p-6 border border-stone-200/80 hover:border-stone-300 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${step.color} shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                    Step 0{idx + 1}
                  </span>
                  <h3 className="font-bold text-stone-900 text-base mb-2">{step.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">{step.desc}</p>
                </div>

                {idx < transformationSteps.length - 1 && (
                  <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-stone-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
