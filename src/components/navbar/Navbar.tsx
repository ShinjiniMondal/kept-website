'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const navItems = [
  { label: 'Product', href: '#product-showcase' },
  { label: 'How It Works', href: '#try-kept' },
  { label: 'Features', href: '#features' },
  { label: 'Focus & Matrix', href: '#focus-mode' },
  { label: 'AI Tutor', href: '#ai-tutor' },
  { label: 'About', href: '#philosophy' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-indigo-600 to-teal-400 z-50 origin-left"
        style={{ scaleX }}
      />

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'py-3 bg-white/80 backdrop-blur-md border-b border-stone-200/70 shadow-sm'
            : 'py-5 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Easter Egg micro animation */}
          <a
            href="#"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            data-cursor="hover"
            data-cursor-text="kept."
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <CheckCircle2 className="w-5 h-5 text-white stroke-[2.2]" />
              <motion.span
                animate={{
                  scale: logoHovered ? [1, 1.4, 1] : 1,
                  opacity: logoHovered ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full border-2 border-white"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-bold text-xl tracking-tight text-stone-900 group-hover:text-indigo-600 transition-colors">
                  kept
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-md bg-stone-100 text-stone-500 border border-stone-200">
                  Preview
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-stone-100/70 backdrop-blur-sm p-1.5 rounded-full border border-stone-200/60 shadow-inner">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-4 py-1.5 text-sm font-medium text-stone-600 hover:text-stone-900 rounded-full hover:bg-white/80 transition-all duration-200"
                data-cursor="hover"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#waitlist"
              onClick={(e) => scrollToSection(e, '#waitlist')}
              data-cursor="action"
              data-cursor-text="Join"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-200 group-hover:rotate-12 transition-transform duration-300" />
                Join Early Access
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-white/95 backdrop-blur-xl border-b border-stone-200 shadow-xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="px-4 py-3 text-base font-medium text-stone-700 hover:text-indigo-600 hover:bg-stone-50 rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-stone-100">
                <a
                  href="#waitlist"
                  onClick={(e) => scrollToSection(e, '#waitlist')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-white bg-indigo-600 shadow-md shadow-indigo-600/25"
                >
                  Join Early Access
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
