import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';

export default function Navbar({ activeSection, theme = 'dark', toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'ACTIVITIES', href: '#activities' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 pointer-events-none transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 pointer-events-auto ${
          scrolled
            ? 'bg-[#1C101A]/95 backdrop-blur-xl border border-[#E18E7E]/30 shadow-2xl text-[#FFF6F2]'
            : 'bg-[#1C101A]/75 backdrop-blur-md border border-[#E18E7E]/20 text-[#FFF6F2]'
        }`}
      >
        {/* Left Profile Logo & Name with Initial (Removed AI & ML Architect per request) */}
        <a href="#home" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="relative w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full ring-1.5 ring-[#E18E7E] p-0.5 bg-[#251422] shadow-sm flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 group-hover:ring-2 transition-all duration-300">
            <img
              src="/images/barath_mahabalipuram.jpg"
              alt="Barath S."
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextSibling) {
                  e.currentTarget.nextSibling.style.display = 'flex';
                }
              }}
              className="w-full h-full rounded-full object-cover object-[center_25%] filter contrast-[1.05]"
            />
            {/* Fallback Monogram Emblem */}
            <div className="hidden w-full h-full items-center justify-center font-poppins font-black text-xs text-[#E18E7E] tracking-tighter">
              BS
            </div>
            {/* Active Status Pip */}
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-[#1C101A]" />
          </div>

          <div className="flex items-center">
            <span className="font-poppins font-bold text-sm sm:text-base tracking-wide text-white group-hover:text-[#F2A99B] transition-colors">
              Barath S.
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-sans font-semibold tracking-wider transition-colors uppercase ${
                activeSection === link.name.toLowerCase()
                  ? 'text-[#E18E7E]'
                  : 'text-[#D8C6C0] hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle Icon Button & Contact Pill */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Dark / Light Mode Switcher Icon (Dark theme default) */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-9 h-9 rounded-full bg-[#251422] hover:bg-[#E18E7E] text-[#F2A99B] hover:text-[#130911] border border-[#E18E7E]/30 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer group shrink-0"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110 text-[#F2A99B] group-hover:text-[#130911]" />
            ) : (
              <Moon className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 text-[#C97262] group-hover:text-white" />
            )}
          </button>

          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-[#E18E7E] hover:bg-[#F2A99B] text-[#130911] font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
