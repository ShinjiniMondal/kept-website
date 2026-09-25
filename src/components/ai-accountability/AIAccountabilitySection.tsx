'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, CheckCircle2, Sparkles, Send, RefreshCw, Shield } from 'lucide-react';
import { fadeUpVariant } from '@/lib/animations/presets';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export function AIAccountabilitySection() {
  const [step, setStep] = useState<number>(0);

  const scriptMessages: ChatMessage[] = [
    { id: '1', sender: 'ai', text: 'Hey there! Your portfolio review was scheduled for 6:00 PM today.', time: '06:00 PM' },
    { id: '2', sender: 'user', text: "I'm feeling a bit tired, I'll do it later.", time: '06:02 PM' },
    { id: '3', sender: 'ai', text: "Got it. I'll hold off for now and check back with you in an hour. Rest up!", time: '06:03 PM' },
    { id: '4', sender: 'ai', text: '7:15 PM check-in: Still want to spend 20 minutes on that portfolio review tonight?', time: '07:15 PM' },
    { id: '5', sender: 'user', text: 'Yes, starting right now!', time: '07:16 PM' },
    { id: '6', sender: 'ai', text: 'Awesome! I’ve locked in your focus timer. You got this.', time: '07:16 PM' },
  ];

  const visibleMessages = scriptMessages.slice(0, step + 1);

  const advanceChat = () => {
    setStep((prev) => (prev < scriptMessages.length - 1 ? prev + 1 : prev));
  };

  const resetChat = () => {
    setStep(0);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-stone-900 to-stone-950 text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950 border border-purple-800 text-purple-300 text-xs font-semibold tracking-wide mb-4"
          >
            <Bot className="w-3.5 h-3.5 text-purple-400" />
            <span>Main Product Differentiator</span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6"
          >
            Reminders tell you.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-teal-300">
              Accountability stays with you.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-stone-300 leading-relaxed"
          >
            Kept&apos;s AI agent doesn&apos;t just sound an alarm and leave. It engages like an intelligent human partner — supportive, persistent, and un-annoying.
          </motion.p>
        </div>

        {/* CHAT PREVIEW BOX */}
        <div className="max-w-3xl mx-auto bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Kept AI Partner</h3>
                <span className="text-xs text-purple-400 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Active Check-in Engine
                </span>
              </div>
            </div>

            <button
              onClick={resetChat}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 transition-colors"
              title="Reset conversation"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* CHAT MESSAGES CONTAINER */}
          <div className="space-y-4 min-h-[320px] mb-6 flex flex-col justify-end">
            <AnimatePresence>
              {visibleMessages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    msg.sender === 'ai' ? 'bg-purple-600 text-white' : 'bg-indigo-600 text-white'
                  }`}>
                    {msg.sender === 'ai' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>

                  <div className={`p-4 rounded-2xl max-w-[80%] ${
                    msg.sender === 'ai'
                      ? 'bg-stone-800 border border-stone-700/80 text-stone-100'
                      : 'bg-indigo-600 text-white shadow-md'
                  }`}>
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <span className="text-[10px] font-semibold tracking-wider uppercase opacity-70">
                        {msg.sender === 'ai' ? 'Kept AI' : 'You'}
                      </span>
                      <span className="text-[10px] opacity-60 font-mono">{msg.time}</span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* STEP CONTROLS */}
          <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-400">
              Message {step + 1} of {scriptMessages.length}
            </span>

            <button
              onClick={advanceChat}
              disabled={step >= scriptMessages.length - 1}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>{step >= scriptMessages.length - 1 ? 'Conversation Complete' : 'Advance Conversation'}</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
