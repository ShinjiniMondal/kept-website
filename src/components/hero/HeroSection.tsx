'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Bell, 
  Bot, 
  ArrowRight, 
  Play, 
  RotateCcw,
  Check,
  Calendar,
  Zap,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { fadeUpVariant, staggerContainer } from '@/lib/animations/presets';

type StepStatus = 'created' | 'scheduled' | 'due' | 'reminder' | 'accountability' | 'completed';

const presetTasks = [
  'Finish Figma design system',
  '30-minute cardio workout',
  'Submit thesis introduction',
  'Read 20 pages of book'
];

export function HeroSection() {
  const [taskName, setTaskName] = useState('Finish Figma prototype');
  const [stepStatus, setStepStatus] = useState<StepStatus>('due');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simMessage, setSimMessage] = useState<string>('Task scheduled for 6:00 PM today.');

  // Mouse tilt variables for interactive card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: y * -10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);

    // Sequence: Created -> Scheduled -> Due -> Reminder -> Accountability -> Completed
    setStepStatus('created');
    setSimMessage('Intent registered in Kept timeline.');

    setTimeout(() => {
      setStepStatus('scheduled');
      setSimMessage('Scheduled for 6:00 PM with smart reminder trigger.');
    }, 1000);

    setTimeout(() => {
      setStepStatus('due');
      setSimMessage('Time reached: Task is now due.');
    }, 2200);

    setTimeout(() => {
      setStepStatus('reminder');
      setSimMessage('Kept notification sent: Time to start!');
    }, 3400);

    setTimeout(() => {
      setStepStatus('accountability');
      setSimMessage('Kept AI Agent checking in: "Still on track to complete?"');
    }, 4600);

    setTimeout(() => {
      setStepStatus('completed');
      setSimMessage('Completed! High-five on keeping your commitment. 🎉');
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
      setIsSimulating(false);
    }, 6200);
  };

  const resetSim = () => {
    setStepStatus('due');
    setSimMessage('Task ready for simulation.');
    setIsSimulating(false);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-amber-50/40 via-stone-50/60 to-stone-100/30">
      {/* Background glowing meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-teal-200/25 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto mb-12"
        >
          {/* Tagline Badge */}
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold tracking-wide mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Introducing Kept · Early Access Preview</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={fadeUpVariant}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.08] mb-6"
          >
            Don&apos;t just plan it.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-900">
              Keep it.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={fadeUpVariant}
            className="text-lg sm:text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Planning is easy. Following through is hard. Kept turns your plans into commitments — then actively helps you stay accountable until they&apos;re done.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-base"
              data-cursor="action"
              data-cursor-text="Reserve"
            >
              <span>Join Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#try-kept"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-200 shadow-sm hover:border-stone-300 transition-all duration-200 text-base"
              data-cursor="hover"
            >
              <Play className="w-4 h-4 text-indigo-600 fill-indigo-600" />
              <span>Interactive Demo</span>
            </a>
          </motion.div>
        </motion.div>

        {/* LIVING KEPT INTERFACE - Interactive Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xl shadow-indigo-900/10 relative overflow-hidden"
          >
            {/* Top Bar inside simulated app preview */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider pl-2 border-l border-stone-200">
                  Living Product Interactive Simulation
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold transition-colors disabled:opacity-50"
                  data-cursor="hover"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  {isSimulating ? 'Simulating...' : 'Run Simulation'}
                </button>

                <button
                  onClick={resetSim}
                  className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-500 transition-colors"
                  title="Reset demo"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Task Input bar */}
            <div className="mb-6 bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Enter an activity commitment..."
                    className="w-full bg-white px-4 py-2.5 rounded-xl border border-stone-200 text-stone-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-2xs"
                  />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                  <span className="text-xs text-stone-500 font-medium whitespace-nowrap hidden sm:inline">Presets:</span>
                  {presetTasks.slice(0, 2).map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setTaskName(preset)}
                      className="px-2.5 py-1 text-xs rounded-lg bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-300 transition-colors whitespace-nowrap"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* MAIN TASK CARD DISPLAY */}
            <div className="relative rounded-2xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white p-6 shadow-xl overflow-hidden mb-6">
              {/* Subtle background graphic element */}
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl transition-colors ${
                    stepStatus === 'completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-indigo-500/20 text-indigo-400'
                  }`}>
                    {stepStatus === 'completed' ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <Clock className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-stone-400 uppercase tracking-wider block">Today &middot; 6:00 PM</span>
                    <h3 className="text-xl font-bold text-white tracking-tight">{taskName || 'Finish Figma prototype'}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${
                    stepStatus === 'created'
                      ? 'bg-stone-800 text-stone-300 border-stone-700'
                      : stepStatus === 'scheduled'
                      ? 'bg-blue-950/80 text-blue-300 border-blue-800/60'
                      : stepStatus === 'due'
                      ? 'bg-amber-950/80 text-amber-300 border-amber-800/60'
                      : stepStatus === 'reminder'
                      ? 'bg-indigo-950/80 text-indigo-300 border-indigo-800/60'
                      : stepStatus === 'accountability'
                      ? 'bg-purple-950/80 text-purple-300 border-purple-800/60'
                      : 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60'
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                    {stepStatus.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* SIMULATED AGENT MESSAGE OR STATUS REVEAL */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={stepStatus}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-stone-800/80 border border-stone-700/60 rounded-xl p-3.5 flex items-start gap-3"
                >
                  {stepStatus === 'accountability' ? (
                    <Bot className="w-5 h-5 text-purple-400 shrink-0 mt-0.5 animate-bounce" />
                  ) : stepStatus === 'reminder' ? (
                    <Bell className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  ) : (
                    <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                      {stepStatus === 'accountability' ? 'Kept AI Accountability Agent' : 'System Event'}
                    </p>
                    <p className="text-sm text-stone-200 font-medium">{simMessage}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* STATUS PROGRESSION STEPS BAR */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[
                { id: 'created', label: '1. Created', icon: Calendar },
                { id: 'scheduled', label: '2. Scheduled', icon: Clock },
                { id: 'due', label: '3. Due', icon: Zap },
                { id: 'reminder', label: '4. Reminder', icon: Bell },
                { id: 'accountability', label: '5. AI Follow-up', icon: Bot },
                { id: 'completed', label: '6. Completed', icon: CheckCircle2 },
              ].map((step, idx) => {
                const isPassed = ['created', 'scheduled', 'due', 'reminder', 'accountability', 'completed'].indexOf(stepStatus) >= idx;
                const isCurrent = stepStatus === step.id;
                const IconComp = step.icon;

                return (
                  <button
                    key={step.id}
                    onClick={() => {
                      setStepStatus(step.id as StepStatus);
                      setSimMessage(`Manually previewing ${step.label} state.`);
                    }}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      isCurrent
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20 scale-[1.02]'
                        : isPassed
                        ? 'bg-indigo-50 text-indigo-900 border-indigo-200'
                        : 'bg-stone-50 text-stone-400 border-stone-200'
                    }`}
                  >
                    <IconComp className={`w-4 h-4 mb-1 ${isCurrent ? 'text-white' : isPassed ? 'text-indigo-600' : 'text-stone-400'}`} />
                    <span className="text-[11px] font-semibold tracking-tight block truncate">{step.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
