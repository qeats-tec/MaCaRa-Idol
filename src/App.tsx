/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramDivisions } from './components/ProgramDivisions';
import { VisionProcess } from './components/VisionProcess';
import { SeoulIntegration } from './components/SeoulIntegration';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { OfficialStore } from './components/OfficialStore';
import { CrownPatternBackground } from './components/CrownPatternBackground';
import { Footer } from './components/Footer';

export default function App() {
  // Light Mode default
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('macara_theme');
      if (saved !== null) {
        return saved === 'dark';
      }
    }
    return false; // Default: Light Mode
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('macara_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('macara_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfbf6] via-[#f7eee1] to-[#fbf8f2] dark:from-[#120d09] dark:via-[#090604] dark:to-[#140e0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 flex flex-col font-sans selection:bg-amber-500/25 selection:text-amber-950 dark:selection:text-amber-200 relative">
      
      {/* Luxury Royal Crown Watermark & Ambient Radial Gradient Background */}
      <CrownPatternBackground />

      {/* Sleek Minimalist Top Navbar */}
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
      />

      {/* Main Single-Page Content */}
      <main className="flex-1 relative z-10">
        
        {/* Hero Section with Big Headline, Stadium Stage & Dance Studio Banners */}
        <Hero />

        {/* 4 Professional Academy Training Divisions */}
        <ProgramDivisions />

        {/* Studio & Campus Facilities */}
        <VisionProcess />

        {/* Istanbul x Seoul Integration Pipeline */}
        <SeoulIntegration />

        {/* Visual Showcase & Portfolio Gallery (With Charismatic Idol Visuals) */}
        <ShowcaseGallery />

        {/* Official Merch & Collectibles Store (Display Showcase) */}
        <OfficialStore />

      </main>

      {/* Editorial Footer with Royal Crown */}
      <div className="relative z-10">
        <Footer />
      </div>

    </div>
  );
}
