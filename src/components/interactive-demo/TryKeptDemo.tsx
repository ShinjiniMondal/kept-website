'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Play, 
  CheckCircle2, 
  Clock, 
  Bell, 
  Bot, 
  RotateCcw,
  Check,
  X,
  Zap,
  Shield,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { fadeUpVariant } from '@/lib/animations/presets';

type AccountabilityMode = 'gentle' | 'firm' | 'ai-partner';

interface SimulationStep {
  time: string;
  badge: string;
  message: string;
  type: 'system' | 'ai' | 'user' | 'result';
}

export function TryKeptDemo() {
  const [activity, setActivity] = useState('Go for a 30-minute run');
  const [time, setTime] = useState('07:00 AM');
  const [mode, setMode] = useState<AccountabilityMode>('ai-partner');
  const [stage, setStage] = useState<'config' | 'timeline' | 'decision' | 'outcome'>('config');
  const [simStepIndex, setSimStepIndex] = useState(0);
  const [userChoice, setUserChoice] = useState<'done' | 'snooze' | 'cancel' | null>(null);

  const startDemo = () => {
    setStage('timeline');
    setSimStepIndex(0);
    setUserChoice(null);

    // Timeline progress simulation
    setTimeout(() => setSimStepIndex(1), 1200);
    setTimeout(() => setSimStepIndex(2), 2600);
    setTimeout(() => setStage('decision'), 4000);
  };

  const handleUserDecision = (choice: 'done' | 'snooze' | 'cancel') => {
    setUserChoice(choice);
    setStage('outcome');

    if (choice === 'done') {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const resetDemo = () => {
    setStage('config');
    setSimStepIndex(0);
    setUserChoice(null);
  };

  return (
    <section id="try-kept" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold tracking-wide mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Simulator</span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 mb-6"
          >
            See what happens when you make a commitment.
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-stone-600 leading-relaxed"
          >
            Experience how Kept transforms a typical forgotten reminder into a supportive, active follow-through loop.
          </motion.p>
        </div>

        {/* INTERACTIVE DEMO CONTAINER */}
        <div className="max-w-4xl mx-auto bg-stone-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-stone-800 relative overflow-hidden">
          {/* Subtle glowing ambient mesh inside dark container */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Header Controls */}
          <div className="flex items-center justify-between border-b border-stone-800 pb-5 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-sm font-semibold text-stone-300 tracking-wide">
                Kept Commitment Engine v1.0
              </span>
            </div>

            {stage !== 'config' && (
              <button
                onClick={resetDemo}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Configure New Task
              </button>
            )}
          </div>

          {/* STAGE 1: CONFIGURATION */}
          {stage === 'config' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              {/* Activity Input */}
              <div>
                <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                  1. Enter Your Activity Intention
                </label>
                <input
                  type="text"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-2xl px-5 py-4 text-white text-lg font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g. Complete Figma prototype..."
                />
                <div className="flex gap-2 mt-3 flex-wrap">
                  {['Go for a 30-minute run', 'Finish Figma prototype', 'Study Spanish vocabulary', 'Draft project proposal'].map((sample) => (
                    <button
                      key={sample}
                      onClick={() => setActivity(sample)}
                      className="px-3 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs text-stone-300 transition-colors"
                    >
                      {sample}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selector */}
              <div>
                <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                  2. Target Completion Time
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['07:00 AM', '12:30 PM', '06:00 PM', '09:00 PM'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                        time === t
                          ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                          : 'bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accountability Preference */}
              <div>
                <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                  3. Select AI Accountability Style
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'gentle', label: 'Gentle Nudge', desc: 'Light notifications with friendly reminders' },
                    { id: 'firm', label: 'Firm Follow-up', desc: 'Direct check-ins until marked complete' },
                    { id: 'ai-partner', label: 'AI Accountability Agent', desc: 'Interactive partner that asks how to unblock you' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setMode(item.id as AccountabilityMode)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        mode === item.id
                          ? 'bg-indigo-950/80 border-indigo-500 text-white ring-1 ring-indigo-500'
                          : 'bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className={`w-4 h-4 ${mode === item.id ? 'text-indigo-400' : 'text-stone-500'}`} />
                        <span className="font-semibold text-sm text-stone-100">{item.label}</span>
                      </div>
                      <p className="text-xs text-stone-400">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Start Simulation Button */}
              <button
                onClick={startDemo}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-base shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                data-cursor="action"
                data-cursor-text="Start"
              >
                <Play className="w-5 h-5 fill-current" />
                Start Simulation Timeline
              </button>
            </motion.div>
          )}

          {/* STAGE 2: TIMELINE & DECISION */}
          {(stage === 'timeline' || stage === 'decision' || stage === 'outcome') && (
            <div className="space-y-6">
              {/* Task Header info */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block">Active Commitment</span>
                  <h4 className="text-lg font-bold text-white">{activity}</h4>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-stone-400 block">Target</span>
                  <span className="text-sm font-semibold text-stone-200">{time}</span>
                </div>
              </div>

              {/* SIMULATED TIMELINE STEPS */}
              <div className="space-y-4 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-stone-800">
                {/* Step 1: Due time */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-4 relative z-10"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold text-xs shrink-0">
                    {time}
                  </div>
                  <div className="bg-stone-900 border border-stone-800 rounded-2xl p-4 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Scheduled Time Reached</span>
                    </div>
                    <p className="text-sm text-stone-200">&quot;Your activity <strong className="text-white">{activity}</strong> is now due.&quot;</p>
                  </div>
                </motion.div>

                {/* Step 2: 20 minutes late */}
                {simStepIndex >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-4 relative z-10"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40 flex items-center justify-center font-bold text-xs shrink-0">
                      +20m
                    </div>
                    <div className="bg-stone-900 border border-stone-800 rounded-2xl p-4 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Bell className="w-4 h-4 text-indigo-400" />
                        <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Smart Follow-up Triggered</span>
                      </div>
                      <p className="text-sm text-stone-200">You haven&apos;t checked it off yet. Kept notices the delay without annoyance.</p>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: AI Check-in Question */}
                {simStepIndex >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-4 relative z-10"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/40 flex items-center justify-center font-bold text-xs shrink-0">
                      +35m
                    </div>
                    <div className="bg-purple-950/60 border border-purple-800/80 rounded-2xl p-5 flex-1 shadow-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="w-5 h-5 text-purple-400 animate-pulse" />
                        <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">Kept AI Accountability Agent</span>
                      </div>
                      <p className="text-base font-semibold text-purple-100 mb-2">
                        &quot;Hey! Still planning to complete <span className="underline underline-offset-4 decoration-purple-400">{activity}</span> today?&quot;
                      </p>
                      <p className="text-xs text-purple-300">Choose your response below to see how Kept handles follow-through.</p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* USER DECISION BUTTONS */}
              {stage === 'decision' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-4 border-t border-stone-800 space-y-3"
                >
                  <span className="block text-xs font-semibold text-stone-400 uppercase tracking-wider text-center">
                    Simulate Your Response:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      onClick={() => handleUserDecision('done')}
                      className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-transform active:scale-95"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      &quot;Done!&quot;
                    </button>

                    <button
                      onClick={() => handleUserDecision('snooze')}
                      className="py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20 transition-transform active:scale-95"
                    >
                      <Clock className="w-4 h-4" />
                      &quot;Snooze for 1 hour&quot;
                    </button>

                    <button
                      onClick={() => handleUserDecision('cancel')}
                      className="py-3.5 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-sm flex items-center justify-center gap-2 border border-stone-700 transition-transform active:scale-95"
                    >
                      <X className="w-4 h-4" />
                      &quot;Not today&quot;
                    </button>
                  </div>
                </motion.div>
              )}

              {/* OUTCOME DISPLAY */}
              {stage === 'outcome' && userChoice && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-6 rounded-2xl border ${
                    userChoice === 'done'
                      ? 'bg-emerald-950/80 border-emerald-500/70 text-emerald-100'
                      : userChoice === 'snooze'
                      ? 'bg-amber-950/80 border-amber-500/70 text-amber-100'
                      : 'bg-stone-900 border-stone-700 text-stone-200'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    {userChoice === 'done' ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    ) : userChoice === 'snooze' ? (
                      <Clock className="w-6 h-6 text-amber-400 shrink-0" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-stone-400 shrink-0" />
                    )}
                    <div>
                      <h4 className="text-lg font-bold">
                        {userChoice === 'done'
                          ? 'Commitment Completed! 🎉'
                          : userChoice === 'snooze'
                          ? 'Adjusted & Rescheduled'
                          : 'Honest Reset Granted'}
                      </h4>
                      <p className="text-sm mt-1">
                        {userChoice === 'done'
                          ? 'Kept logs your victory, updates your daily streak to 7 days, and calculates a 94% completion rate.'
                          : userChoice === 'snooze'
                          ? 'Kept adjusts your timeline gracefully and will gently remind you at the new target time without guilt.'
                          : 'Kept removes the task from today\'s active focus list and offers an optional micro-reflection so you can reschedule when ready.'}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex justify-end">
                    <button
                      onClick={resetDemo}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                    >
                      Try another scenario
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
