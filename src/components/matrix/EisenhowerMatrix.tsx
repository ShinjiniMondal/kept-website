'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid2X2, Move, Plus, Check } from 'lucide-react';
import { fadeUpVariant } from '@/lib/animations/presets';

interface MatrixTask {
  id: string;
  title: string;
  quadrant: 'do' | 'schedule' | 'delegate' | 'eliminate';
}

export function EisenhowerMatrix() {
  const [tasks, setTasks] = useState<MatrixTask[]>([
    { id: '1', title: 'Fix critical security vulnerability', quadrant: 'do' },
    { id: '2', title: 'Design system typography audit', quadrant: 'schedule' },
    { id: '3', title: 'Respond to routine newsletter sponsor inquiries', quadrant: 'delegate' },
    { id: '4', title: 'Clean up unused bookmark folders', quadrant: 'eliminate' },
  ]);

  const moveTask = (id: string, targetQuad: MatrixTask['quadrant']) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, quadrant: targetQuad } : t)));
  };

  const getQuadrantTasks = (quad: MatrixTask['quadrant']) => tasks.filter((t) => t.quadrant === quad);

  return (
    <section className="py-24 bg-white border-b border-stone-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold tracking-wide mb-4"
          >
            <Grid2X2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Prioritization System</span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 mb-4"
          >
            Interactive Eisenhower Matrix
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-stone-600"
          >
            Categorize activities by urgency and importance. Move cards between quadrants to organize your workflow instantly.
          </motion.p>
        </div>

        {/* MATRIX GRID BOARD */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Quadrant 1: Do First */}
          <div className="bg-rose-50/70 border border-rose-200 p-6 rounded-3xl min-h-[220px]">
            <div className="flex items-center justify-between mb-4 border-b border-rose-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
                1. Urgent & Important (Do First)
              </span>
              <span className="text-xs font-semibold text-rose-600">
                {getQuadrantTasks('do').length} tasks
              </span>
            </div>

            <div className="space-y-3">
              {getQuadrantTasks('do').map((t) => (
                <motion.div
                  key={t.id}
                  layout
                  className="bg-white p-4 rounded-2xl border border-rose-200 shadow-xs flex items-center justify-between"
                >
                  <span className="text-sm font-semibold text-stone-900">{t.title}</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => moveTask(t.id, 'schedule')}
                      className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-[10px] font-bold rounded-md"
                      title="Move to Schedule"
                    >
                      &rarr; Schedule
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quadrant 2: Schedule */}
          <div className="bg-indigo-50/70 border border-indigo-200 p-6 rounded-3xl min-h-[220px]">
            <div className="flex items-center justify-between mb-4 border-b border-indigo-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-800">
                2. Important (Not Urgent) &middot; Schedule
              </span>
              <span className="text-xs font-semibold text-indigo-600">
                {getQuadrantTasks('schedule').length} tasks
              </span>
            </div>

            <div className="space-y-3">
              {getQuadrantTasks('schedule').map((t) => (
                <motion.div
                  key={t.id}
                  layout
                  className="bg-white p-4 rounded-2xl border border-indigo-200 shadow-xs flex items-center justify-between"
                >
                  <span className="text-sm font-semibold text-stone-900">{t.title}</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => moveTask(t.id, 'do')}
                      className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-[10px] font-bold rounded-md"
                    >
                      &larr; Do
                    </button>
                    <button
                      onClick={() => moveTask(t.id, 'delegate')}
                      className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-[10px] font-bold rounded-md"
                    >
                      &rarr; Delegate
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quadrant 3: Delegate */}
          <div className="bg-amber-50/70 border border-amber-200 p-6 rounded-3xl min-h-[220px]">
            <div className="flex items-center justify-between mb-4 border-b border-amber-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                3. Urgent (Not Important) &middot; Delegate
              </span>
              <span className="text-xs font-semibold text-amber-600">
                {getQuadrantTasks('delegate').length} tasks
              </span>
            </div>

            <div className="space-y-3">
              {getQuadrantTasks('delegate').map((t) => (
                <motion.div
                  key={t.id}
                  layout
                  className="bg-white p-4 rounded-2xl border border-amber-200 shadow-xs flex items-center justify-between"
                >
                  <span className="text-sm font-semibold text-stone-900">{t.title}</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => moveTask(t.id, 'schedule')}
                      className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-[10px] font-bold rounded-md"
                    >
                      &larr; Schedule
                    </button>
                    <button
                      onClick={() => moveTask(t.id, 'eliminate')}
                      className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-[10px] font-bold rounded-md"
                    >
                      &rarr; Eliminate
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quadrant 4: Eliminate */}
          <div className="bg-stone-100/80 border border-stone-200 p-6 rounded-3xl min-h-[220px]">
            <div className="flex items-center justify-between mb-4 border-b border-stone-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                4. Neither Urgent nor Important &middot; Eliminate
              </span>
              <span className="text-xs font-semibold text-stone-500">
                {getQuadrantTasks('eliminate').length} tasks
              </span>
            </div>

            <div className="space-y-3">
              {getQuadrantTasks('eliminate').map((t) => (
                <motion.div
                  key={t.id}
                  layout
                  className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex items-center justify-between"
                >
                  <span className="text-sm font-semibold text-stone-500 line-through">{t.title}</span>
                  <button
                    onClick={() => moveTask(t.id, 'do')}
                    className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-[10px] font-bold rounded-md"
                  >
                    Restore
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
