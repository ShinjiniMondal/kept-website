'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, Heart } from 'lucide-react';

export function Footer() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-950 text-white pt-24 pb-12 border-t border-stone-800 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* FINAL CLOSING CTA HERO */}
        <div className="text-center max-w-4xl mx-auto pb-20 border-b border-stone-800/80 mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Keep the promises you make to yourself.
          </h2>
          <p className="text-lg text-stone-400 max-w-xl mx-auto mb-8">
            Kept is built to help plans become progress. Join the early access waitlist today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('#waitlist')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 transition-all text-base"
              data-cursor="action"
              data-cursor-text="Join"
            >
              <span>Join Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection('#try-kept')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-stone-300 bg-stone-900 hover:bg-stone-800 border border-stone-800 transition-all text-base"
            >
              <span>Explore Interactive Demo</span>
            </button>
          </div>
        </div>

        {/* FOOTER LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-600 text-white shadow-md">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">kept</span>
            </a>
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed mb-6">
              The productivity app built to turn intentions into completed actions through smart reminders, focus environments, and active AI accountability.
            </p>
            <span className="text-xs text-stone-500 font-mono">
              &copy; {new Date().getFullYear()} Kept Startup Inc. All rights reserved.
            </span>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-300 mb-4">Product</h3>
            <ul className="space-y-2.5 text-sm font-medium text-stone-400">
              <li><button onClick={() => scrollToSection('#product-showcase')} className="hover:text-white transition-colors">App Showcase</button></li>
              <li><button onClick={() => scrollToSection('#try-kept')} className="hover:text-white transition-colors">How It Works</button></li>
              <li><button onClick={() => scrollToSection('#features')} className="hover:text-white transition-colors">10 Core Features</button></li>
              <li><button onClick={() => scrollToSection('#ai-tutor')} className="hover:text-white transition-colors">AI Tutor</button></li>
              <li><button onClick={() => scrollToSection('#focus-mode')} className="hover:text-white transition-colors">Focus Mode</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-300 mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm font-medium text-stone-400">
              <li><button onClick={() => scrollToSection('#philosophy')} className="hover:text-white transition-colors">Product Philosophy</button></li>
              <li><a href="#waitlist" className="hover:text-white transition-colors">Investor & Partner Preview</a></li>
              <li><a href="#waitlist" className="hover:text-white transition-colors">Early Access VIP</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-300 mb-4">Legal & Privacy</h3>
            <ul className="space-y-2.5 text-sm font-medium text-stone-400">
              <li><span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">Data Protection</span></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BRAND FOOTNOTE */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for people who follow through.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-stone-400 transition-colors cursor-pointer">Twitter/X (Coming Soon)</span>
            <span className="hover:text-stone-400 transition-colors cursor-pointer">GitHub (Coming Soon)</span>
            <span className="hover:text-stone-400 transition-colors cursor-pointer">LinkedIn (Coming Soon)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
