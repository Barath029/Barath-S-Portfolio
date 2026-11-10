import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import GallerySection from './components/GallerySection';
import ActivitiesSection from './components/ActivitiesSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Neural3DCanvas from './components/Neural3DCanvas';
import { portfolioData } from './data/portfolioData';
import { Sun, Moon } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Dark theme is the default
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'experience', 'skills', 'gallery', 'activities', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId === 'experience' ? 'projects' : sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#130911] text-[#FFF6F2] selection:bg-[#E18E7E] selection:text-[#130911] font-sans overflow-x-hidden transition-colors duration-300">
      {/* Interactive Elastic Giggle Cursor */}
      <CustomCursor />

      {/* Subtle 3D Celestial / Neural Perspective Mesh */}
      <Neural3DCanvas theme={theme} />

      {/* Floating Velvet Navbar with Theme Switch Icon */}
      <Navbar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-10 space-y-12 sm:space-y-16">
        {/* 1. HERO (Marina Voss Editorial: Large PORTFOLIO Display + Barath Cutout + Quote + 4 Domains) */}
        <Hero profile={portfolioData.profile} />

        {/* 2. ABOUT & EDUCATION (Cathedral Cameo + RIT AI/ML Stance + Clean Score Timeline) */}
        <AboutSection about={portfolioData.about} />

        {/* 3. SELECTED WORK (SELECTED WORK ↘ Magazine Grid + Simple Understandable Architectural Innovation Points) */}
        <ProjectsSection projects={portfolioData.projects} />

        {/* 3.5. WORK EXPERIENCE (SaaS Product Beta Testing & Software Development Intern) */}
        <ExperienceSection experience={portfolioData.experience} />

        {/* 4. TECHNICAL TOOLING & CATEGORIZED SKILLS (7 Resume Categories, Zero Evaluation Bars) */}
        <SkillsSection skills={portfolioData.skills} />

        {/* 5. MOMENTS & ACHIEVEMENTS GALLERY (Photographic Archive with Little Moments Stories) */}
        <GallerySection />

        {/* 6. CAMPUS LEADERSHIP (TechSpark VP & 10+ Hackathons Milestones) */}
        <ActivitiesSection leadership={portfolioData.leadership} />
      </main>

      {/* 6. EDITORIAL FOOTER (Rose Gold Bottom Banner + 6 Direct Platform Links) */}
      <Footer profile={portfolioData.profile} />

      {/* Floating Theme Switch Pill for Quick Access on Any Page */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={toggleTheme}
          type="button"
          aria-label={`Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode (Default: Dark)`}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1C101A]/90 hover:bg-[#E18E7E] text-[#F2A99B] hover:text-[#130911] border border-[#E18E7E]/30 shadow-2xl backdrop-blur-md transition-all duration-300 cursor-pointer group text-xs font-mono"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-3.5 h-3.5 text-[#F2A99B] group-hover:text-[#130911] group-hover:rotate-90 transition-transform" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-[#C97262] group-hover:text-[#130911] group-hover:-rotate-12 transition-transform" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
