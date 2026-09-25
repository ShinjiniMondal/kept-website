import React from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { CustomCursor } from '@/components/cursor/CustomCursor';
import { HeroSection } from '@/components/hero/HeroSection';
import { TryKeptDemo } from '@/components/interactive-demo/TryKeptDemo';
import { ProductShowcase } from '@/components/product-showcase/ProductShowcase';
import { ProductPillarsCarousel } from '@/components/carousels/ProductPillarsCarousel';
import { ScrollStoryteller } from '@/components/storytelling/ScrollStoryteller';
import { DayWithKept } from '@/components/timeline-day/DayWithKept';
import { AIAccountabilitySection } from '@/components/ai-accountability/AIAccountabilitySection';
import { AITutorSection } from '@/components/ai-tutor/AITutorSection';
import { BeforeAfterSlider } from '@/components/before-after/BeforeAfterSlider';
import { InsightsSection } from '@/components/insights/InsightsSection';
import { FocusSection } from '@/components/focus/FocusSection';
import { EisenhowerMatrix } from '@/components/matrix/EisenhowerMatrix';
import { PomodoroDemo } from '@/components/pomodoro/PomodoroDemo';
import { NotAToDoList } from '@/components/philosophy/NotAToDoList';
import { FeaturesCarousel } from '@/components/carousels/FeaturesCarousel';
import { SocialConcept } from '@/components/social-sharing/SocialConcept';
import { WaitlistSection } from '@/components/waitlist/WaitlistSection';
import { Footer } from '@/components/footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-indigo-500 selection:text-white relative">
      <CustomCursor />
      <Navbar />

      <main>
        {/* 1. HERO SECTION */}
        <HeroSection />

        {/* 2. INTERACTIVE TRY KEPT SIMULATION */}
        <TryKeptDemo />

        {/* 3. PRODUCT SHOWCASE (FLOATING APP SURFACES) */}
        <ProductShowcase />

        {/* 4. HORIZONTAL PRODUCT PILLARS CAROUSEL */}
        <ProductPillarsCarousel />

        {/* 5. SCROLL STORYTELLING SCENE */}
        <ScrollStoryteller />

        {/* 6. A DAY WITH KEPT TIMELINE SCRUBBER */}
        <DayWithKept />

        {/* 7. MAIN DIFFERENTIATOR: AI ACCOUNTABILITY AGENT */}
        <AIAccountabilitySection />

        {/* 8. AI TUTOR GOAL DECONSTRUCTION */}
        <AITutorSection />

        {/* 9. BEFORE / AFTER COMPARISON SLIDER */}
        <BeforeAfterSlider />

        {/* 10. PRODUCTIVITY INSIGHTS & ANALYTICS */}
        <InsightsSection />

        {/* 11. FOCUS MODE & AMBIENT ENVIRONMENT */}
        <FocusSection />

        {/* 12. INTERACTIVE EISENHOWER MATRIX */}
        <EisenhowerMatrix />

        {/* 13. FUNCTIONAL POMODORO SPRINT DEMO */}
        <PomodoroDemo />

        {/* 14. PHILOSOPHY: KEPT IS NOT A TO-DO LIST */}
        <NotAToDoList />

        {/* 15. 10 CORE FEATURES CAROUSEL */}
        <FeaturesCarousel />

        {/* 16. FUTURE SOCIAL ACCOUNTABILITY CONCEPT */}
        <SocialConcept />

        {/* 17. VIP WAITLIST / EARLY ACCESS FORM */}
        <WaitlistSection />
      </main>

      {/* 18. FINAL CTA & FOOTER */}
      <Footer />
    </div>
  );
}
