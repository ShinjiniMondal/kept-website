'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Lock, Mail, User, Target } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitWaitlistEntry } from '@/lib/services/waitlist';
import { fadeUpVariant } from '@/lib/animations/presets';

export function WaitlistSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [goal, setGoal] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setSubmitting(true);
    const result = await submitWaitlistEntry({ name, email, commitmentGoal: goal });
    setSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      setFeedbackMsg(result.message);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950 border border-indigo-800 text-indigo-300 text-xs font-semibold tracking-wide mb-6"
        >
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>Kept VIP Early Access</span>
        </motion.div>

        <motion.h2
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          Be the first to experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-teal-300">Kept.</span>
        </motion.h2>

        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg text-stone-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The Android app is currently in closed development. Join our early access list to receive exclusive preview builds, product updates, and priority access upon launch.
        </motion.p>

        {/* FORM CONTAINER */}
        <div className="bg-stone-900/90 border border-stone-800 p-8 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-xl text-left max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">You&apos;re on the VIP list! 🎉</h3>
              <p className="text-stone-300 text-sm max-w-md mx-auto">{feedbackMsg}</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-300 transition-colors"
              >
                Submit another request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-stone-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-stone-950 border border-stone-800 rounded-2xl pl-12 pr-4 py-3.5 text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-stone-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full bg-stone-950 border border-stone-800 rounded-2xl pl-12 pr-4 py-3.5 text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Commitment Goal */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                  What do you want Kept to help you stay accountable for? <span className="text-stone-500 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Target className="w-5 h-5 text-stone-500 absolute left-4 top-4" />
                  <textarea
                    rows={2}
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder="e.g. Completing my side project, sticking to 5 AM workouts..."
                    className="w-full bg-stone-950 border border-stone-800 rounded-2xl pl-12 pr-4 py-3 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold text-base shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                data-cursor="action"
                data-cursor-text="Reserve"
              >
                <span>{submitting ? 'Registering Entry...' : 'Join Early Access'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-stone-500 pt-2">
                <Lock className="w-3.5 h-3.5" />
                <span>Zero spam. We respect your inbox.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
