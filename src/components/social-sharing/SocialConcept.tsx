'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Shield, HeartHandshake } from 'lucide-react';
import { fadeUpVariant } from '@/lib/animations/presets';

export function SocialConcept() {
  return (
    <section className="py-20 bg-white border-b border-stone-200/80 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-semibold tracking-wide mb-6">
          <Users className="w-3.5 h-3.5 text-stone-500" />
          <span>Future Roadmap Preview &middot; Coming Later</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
          Accountability is better together.
        </h2>

        <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed mb-8">
          While Kept&apos;s primary AI agent handles your daily personal follow-through, future releases will introduce optional partner sharing, team commitment boards, and peer accountability circles.
        </p>

        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-500">
          <Shield className="w-4 h-4 text-indigo-600" />
          <span>Privacy First: All social accountability will remain 100% opt-in.</span>
        </div>
      </div>
    </section>
  );
}
