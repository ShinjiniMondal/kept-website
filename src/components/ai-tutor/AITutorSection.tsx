'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, Lightbulb, Split, Check } from 'lucide-react';
import { fadeUpVariant } from '@/lib/animations/presets';

interface MicroStep {
  id: number;
  title: string;
  timeEstimate: string;
  completed: boolean;
}

export function AITutorSection() {
  const [goal, setGoal] = useState('Build my personal portfolio');
  const [isGenerating, setIsGenerating] = useState(false);
  const [steps, setSteps] = useState<MicroStep[]>([
    { id: 1, title: 'Gather top 3 project case studies & images', timeEstimate: '15 mins', completed: true },
    { id: 2, title: 'Draft hero headline & value proposition', timeEstimate: '10 mins', completed: false },
    { id: 3, title: 'Design & code first desktop screen layout', timeEstimate: '30 mins', completed: false },
  ]);

  const presetGoals = [
    'Learn Figma auto-layout',
    'Prepare for marathon',
    'Draft quarterly pitch deck',
    'Organize desktop workspace'
  ];

  const handleDecompose = () => {
    setIsGenerating(true);
    setTimeout(() => {
      if (goal.toLowerCase().includes('figma')) {
        setSteps([
          { id: 1, title: 'Create frame & explore auto-layout direction', timeEstimate: '5 mins', completed: false },
          { id: 2, title: 'Add hugging and filling horizontal containers', timeEstimate: '10 mins', completed: false },
          { id: 3, title: 'Build responsive button component variant', timeEstimate: '15 mins', completed: false },
        ]);
      } else if (goal.toLowerCase().includes('marathon')) {
        setSteps([
          { id: 1, title: 'Schedule 3-mile easy pace morning jog', timeEstimate: '25 mins', completed: false },
          { id: 2, title: 'Hydrate & drink 500ml electrolyte mix', timeEstimate: '2 mins', completed: false },
          { id: 3, title: 'Log distance & recovery heart rate', timeEstimate: '5 mins', completed: false },
        ]);
      } else {
        setSteps([
          { id: 1, title: `Deconstruct "${goal}" into primary outcome`, timeEstimate: '5 mins', completed: false },
          { id: 2, title: 'Draft key bullet points & core structure', timeEstimate: '15 mins', completed: false },
          { id: 3, title: 'Execute first 20-minute focus sprint', timeEstimate: '20 mins', completed: false },
        ]);
      }
      setIsGenerating(false);
    }, 600);
  };

  const toggleStep = (id: number) => {
    setSteps(steps.map((s) => (s.id === id ? { ...s, completed: !s.completed } : s)));
  };

  return (
    <section id="ai-tutor" className="py-24 bg-stone-50 border-b border-stone-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-700 text-xs font-semibold tracking-wide mb-4"
          >
            <Lightbulb className="w-3.5 h-3.5 text-teal-600" />
            <span>AI Guidance & Tutor Engine</span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 mb-6"
          >
            Overwhelmed by big goals?{' '}
            <span className="text-teal-600">Kept breaks them down.</span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-stone-600 leading-relaxed"
          >
            Procrastination often happens when a goal is too vague. Kept AI Tutor transforms intimidating projects into small, effortless micro-actions.
          </motion.p>
        </div>

        {/* DEMO CARD */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl">
          <div className="mb-6">
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
              Enter an Intimidating Project or Goal
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="flex-1 bg-stone-50 border border-stone-200 rounded-2xl px-5 py-3.5 text-stone-900 font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="e.g. Learn Figma auto-layout..."
              />
              <button
                onClick={handleDecompose}
                disabled={isGenerating}
                className="px-6 py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                data-cursor="action"
                data-cursor-text="Breakdown"
              >
                <Split className="w-4 h-4" />
                <span>{isGenerating ? 'Deconstructing...' : 'Deconstruct Goal'}</span>
              </button>
            </div>

            {/* Presets */}
            <div className="flex gap-2 mt-3 flex-wrap">
              <span className="text-xs text-stone-400 font-medium">Try goal:</span>
              {presetGoals.map((p) => (
                <button
                  key={p}
                  onClick={() => setGoal(p)}
                  className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs font-medium transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* GENERATED MICRO-STEPS */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/80 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Kept Tutor Action Plan
                </span>
              </div>
              <span className="text-xs text-stone-400 font-semibold">3 Small Micro-Steps</span>
            </div>

            <div className="space-y-3">
              {steps.map((step) => (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    step.completed
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                      : 'bg-white border-stone-200 hover:border-stone-300 text-stone-900 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-colors ${
                      step.completed ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-300 bg-white'
                    }`}>
                      {step.completed && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                    <span className={`text-sm font-semibold ${step.completed ? 'line-through text-emerald-800' : ''}`}>
                      {step.title}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-stone-100 text-stone-600">
                    {step.timeEstimate}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
