'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Calendar, 
  History, 
  BarChart2, 
  Focus, 
  Grid2X2,
  CheckCircle2,
  Clock,
  AlertCircle,
  Sparkles,
  TrendingUp,
  ChevronRight,
  Flame,
  Search,
  Filter
} from 'lucide-react';
import { fadeUpVariant } from '@/lib/animations/presets';

type ShowcaseTab = 'dashboard' | 'today' | 'calendar' | 'timeline' | 'stats' | 'focus' | 'matrix';

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('dashboard');

  const tabs: { id: ShowcaseTab; label: string; icon: any }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'today', label: "Today's Activities", icon: CheckSquare },
    { id: 'calendar', label: 'Calendar View', icon: Calendar },
    { id: 'timeline', label: 'Timeline & History', icon: History },
    { id: 'stats', label: 'Analytics', icon: BarChart2 },
    { id: 'focus', label: 'Focus Mode', icon: Focus },
    { id: 'matrix', label: 'Eisenhower Matrix', icon: Grid2X2 },
  ];

  return (
    <section id="product-showcase" className="py-24 bg-stone-50/60 relative overflow-hidden border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold tracking-wide mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Product Concepts Showcase</span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 mb-6"
          >
            Designed for clarity.{' '}
            <span className="text-indigo-600">Engineered for completion.</span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-stone-600 leading-relaxed"
          >
            Explore the floating application surfaces of Kept. Every view is built around momentum rather than endless organization.
          </motion.p>
        </div>

        {/* TAB CONTROLS */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200/80 hover:border-stone-300'
                }`}
                data-cursor="hover"
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-stone-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* PRODUCT PREVIEW FRAME */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-stone-200/90 shadow-2xl shadow-stone-900/10 overflow-hidden relative">
          {/* Mock App Header */}
          <div className="bg-stone-900 px-6 py-4 flex items-center justify-between border-b border-stone-800 text-white">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-medium text-stone-400 pl-3 border-l border-stone-800">
                Kept Android & Desktop Preview &middot; {tabs.find((t) => t.id === activeTab)?.label}
              </span>
            </div>

            <span className="px-2.5 py-0.5 rounded-full bg-stone-800 text-stone-400 text-[10px] font-semibold uppercase tracking-wider">
              Product Preview
            </span>
          </div>

          {/* APP SURFACE CONTENT */}
          <div className="p-6 sm:p-8 min-h-[480px] bg-stone-50/40">
            <AnimatePresence mode="wait">
              {/* TAB 1: DASHBOARD */}
              {activeTab === 'dashboard' && (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Top Stats Banner */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs">
                      <div className="flex items-center justify-between text-stone-500 mb-2">
                        <span className="text-xs font-medium uppercase tracking-wider">Due Today</span>
                        <Clock className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="text-2xl font-bold text-stone-900">4 Activities</div>
                      <span className="text-xs text-indigo-600 font-medium">2 morning, 2 evening</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs">
                      <div className="flex items-center justify-between text-stone-500 mb-2">
                        <span className="text-xs font-medium uppercase tracking-wider">Completion Rate</span>
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="text-2xl font-bold text-stone-900">92%</div>
                      <span className="text-xs text-emerald-600 font-medium">+6% vs last week</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs">
                      <div className="flex items-center justify-between text-stone-500 mb-2">
                        <span className="text-xs font-medium uppercase tracking-wider">Current Streak</span>
                        <Flame className="w-4 h-4 text-amber-500" />
                      </div>
                      <div className="text-2xl font-bold text-stone-900">12 Days</div>
                      <span className="text-xs text-amber-600 font-medium">Personal record</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs">
                      <div className="flex items-center justify-between text-stone-500 mb-2">
                        <span className="text-xs font-medium uppercase tracking-wider">AI Accountability</span>
                        <Sparkles className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="text-2xl font-bold text-stone-900">Active</div>
                      <span className="text-xs text-purple-600 font-medium">Next check-in: 6:00 PM</span>
                    </div>
                  </div>

                  {/* Main Dashboard Activities List */}
                  <div className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-xs">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                      <h3 className="font-bold text-stone-900 text-base">Priority Commitments for Today</h3>
                      <span className="text-xs text-stone-400 font-medium">Sorted by smart urgency</span>
                    </div>

                    <div className="space-y-3">
                      {[
                        { title: 'Complete Figma design system tokens', time: '09:00 AM', tag: 'Work', status: 'completed' },
                        { title: 'Read 20 pages of "Deep Work"', time: '02:00 PM', tag: 'Learning', status: 'completed' },
                        { title: '30-minute high-intensity cardio', time: '06:00 PM', tag: 'Health', status: 'due' },
                        { title: 'Draft Kept investor deck outline', time: '08:30 PM', tag: 'Startup', status: 'upcoming' },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3.5 rounded-xl border border-stone-100 hover:border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded-lg ${
                              item.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-stone-200 text-stone-600'
                            }`}>
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className={`text-sm font-semibold ${item.status === 'completed' ? 'line-through text-stone-400' : 'text-stone-900'}`}>
                                {item.title}
                              </h4>
                              <span className="text-xs text-stone-500 font-medium">{item.time}</span>
                            </div>
                          </div>

                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600">
                            {item.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: TODAY'S ACTIVITIES */}
              {activeTab === 'today' && (
                <motion.div
                  key="today"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-stone-900">Today&apos;s Command Center</h3>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-200 text-stone-700 flex items-center gap-1">
                        <Filter className="w-3.5 h-3.5" /> Filter
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600" />
                        <div>
                          <h4 className="text-sm font-bold text-amber-900">1 Overdue Activity from Yesterday</h4>
                          <p className="text-xs text-amber-700">Submit expense report for client lunch</p>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 rounded-lg bg-amber-600 text-white text-xs font-bold">
                        Reschedule Now
                      </button>
                    </div>

                    {[
                      { title: 'Morning meditation & journal', time: '07:30 AM', category: 'Mindfulness', done: true },
                      { title: 'Review pull requests for web landing page', time: '10:00 AM', category: 'Engineering', done: true },
                      { title: 'User research interview with beta tester', time: '03:00 PM', category: 'Product', done: false },
                      { title: 'Evening walk & reflection', time: '07:00 PM', category: 'Health', done: false },
                    ].map((act, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-stone-200 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" checked={act.done} readOnly className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500" />
                          <span className={`text-sm font-semibold ${act.done ? 'line-through text-stone-400' : 'text-stone-900'}`}>
                            {act.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-stone-500">{act.time}</span>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-100 text-stone-600">{act.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 3: CALENDAR VIEW */}
              {activeTab === 'calendar' && (
                <motion.div
                  key="calendar"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-stone-900">Weekly Commitment Matrix & Calendar</h3>
                    <span className="text-xs font-semibold text-indigo-600">September 2026</span>
                  </div>

                  <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-stone-500 pb-2 border-b border-stone-200">
                    <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {[
                      { day: '21', tasks: 3, done: 3 },
                      { day: '22', tasks: 5, done: 5 },
                      { day: '23', tasks: 4, done: 4 },
                      { day: '24', tasks: 4, done: 2, today: true },
                      { day: '25', tasks: 3, done: 0 },
                      { day: '26', tasks: 2, done: 0 },
                      { day: '27', tasks: 1, done: 0 },
                    ].map((d, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-xl border min-h-[90px] text-left flex flex-col justify-between ${
                          d.today ? 'bg-indigo-50 border-indigo-300 ring-2 ring-indigo-500/20' : 'bg-white border-stone-200'
                        }`}
                      >
                        <span className={`text-xs font-bold ${d.today ? 'text-indigo-700' : 'text-stone-700'}`}>{d.day}</span>
                        <div>
                          <span className="text-[10px] font-semibold text-stone-500 block">{d.tasks} commitments</span>
                          <div className="w-full bg-stone-200 h-1.5 rounded-full mt-1 overflow-hidden">
                            <div
                              className="bg-indigo-600 h-full rounded-full"
                              style={{ width: `${(d.done / d.tasks) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 4: TIMELINE */}
              {activeTab === 'timeline' && (
                <motion.div
                  key="timeline"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-4"
                >
                  <h3 className="font-bold text-stone-900 mb-4">Chronological Commitment Timeline</h3>
                  <div className="space-y-4 border-l-2 border-stone-200 pl-4">
                    {[
                      { time: '08:00 AM', title: 'Plan day priorities with Kept AI', status: 'Completed' },
                      { time: '11:00 AM', title: 'Deep Work: Core app architecture', status: 'Completed' },
                      { time: '03:00 PM', title: 'Design review session', status: 'In Progress' },
                      { time: '06:00 PM', title: 'AI Accountability Check-in scheduled', status: 'Upcoming' },
                    ].map((tl, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-white" />
                        <span className="text-xs font-medium text-stone-400">{tl.time}</span>
                        <h4 className="text-sm font-semibold text-stone-900">{tl.title}</h4>
                        <span className="text-xs text-indigo-600 font-medium">{tl.status}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 5: ANALYTICS */}
              {activeTab === 'stats' && (
                <motion.div
                  key="stats"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-6"
                >
                  <h3 className="font-bold text-stone-900">Completion-Rate Analytics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-stone-200">
                      <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-2">Weekly Completion Trend</span>
                      <div className="h-32 flex items-end justify-between gap-2 pt-4">
                        {[65, 80, 75, 90, 85, 95, 92].map((val, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                            <div className="w-full bg-indigo-600 rounded-t-md transition-all hover:bg-indigo-700" style={{ height: `${val}%` }} />
                            <span className="text-[10px] text-stone-400 font-medium">{['M','T','W','T','F','S','S'][idx]}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-stone-200 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-2">Category Distribution</span>
                        <div className="space-y-2 text-xs font-medium text-stone-700">
                          <div className="flex justify-between"><span>Work & Startup</span><span className="font-bold">45%</span></div>
                          <div className="flex justify-between"><span>Health & Fitness</span><span className="font-bold">25%</span></div>
                          <div className="flex justify-between"><span>Learning</span><span className="font-bold">20%</span></div>
                          <div className="flex justify-between"><span>Personal</span><span className="font-bold">10%</span></div>
                        </div>
                      </div>
                      <div className="text-xs text-stone-400 pt-2 border-t border-stone-100">
                        Calculated from 148 commitments over 30 days.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 6: FOCUS MODE */}
              {activeTab === 'focus' && (
                <motion.div
                  key="focus"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-stone-900 rounded-2xl p-8 text-white text-center flex flex-col items-center justify-center space-y-4"
                >
                  <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Kept Deep Focus Environment</span>
                  <h3 className="text-2xl font-bold">Write thesis introduction</h3>
                  <div className="text-6xl font-extrabold tracking-tighter text-stone-100 font-mono my-2">
                    24:18
                  </div>
                  <p className="text-xs text-stone-400">One task. Zero noise. Absolute progress.</p>
                </motion.div>
              )}

              {/* TAB 7: EISENHOWER MATRIX */}
              {activeTab === 'matrix' && (
                <motion.div
                  key="matrix"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="grid grid-cols-2 gap-3"
                >
                  <div className="bg-rose-50 border border-rose-200 p-4 rounded-2xl">
                    <span className="text-xs font-bold text-rose-700 uppercase">Urgent & Important</span>
                    <p className="text-xs text-stone-700 font-semibold mt-2">Submit investor presentation deck</p>
                  </div>
                  <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-2xl">
                    <span className="text-xs font-bold text-indigo-700 uppercase">Important (Not Urgent)</span>
                    <p className="text-xs text-stone-700 font-semibold mt-2">Design system refactoring & docs</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl">
                    <span className="text-xs font-bold text-amber-700 uppercase">Urgent (Not Important)</span>
                    <p className="text-xs text-stone-700 font-semibold mt-2">Reply to non-critical vendor emails</p>
                  </div>
                  <div className="bg-stone-100 border border-stone-200 p-4 rounded-2xl">
                    <span className="text-xs font-bold text-stone-600 uppercase">Neither Urgent nor Important</span>
                    <p className="text-xs text-stone-500 font-semibold mt-2">Re-organize desktop downloads folder</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
