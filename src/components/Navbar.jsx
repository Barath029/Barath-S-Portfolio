import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Magnetic } from '../animations';

export default function Navbar({ activeSection, theme = 'dark', toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const isLight = theme === 'light';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-8 py-2.5 sm:py-3.5 pointer-events-none transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-3.5 sm:px-8 rounded-full transition-all duration-300 pointer-events-auto ${
          isLight
            ? scrolled
              ? 'bg-white/90 backdrop-blur-xl border border-[#C97262]/30 shadow-[0_8px_30px_rgba(130,70,60,0.12)] py-1.5 sm:py-2 text-[#1C101A]'
              : 'bg-white/80 backdrop-blur-md border border-[#C97262]/20 py-2 sm:py-3 text-[#1C101A] shadow-sm'
            : scrolled
              ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#6D001A]/60 shadow-[0_8px_30px_rgba(109,0,26,0.35)] py-1.5 sm:py-2 text-[#FFF6F2]'
              : 'bg-[#1C101A]/75 backdrop-blur-md border border-[#E18E7E]/20 py-2 sm:py-3 text-[#FFF6F2]'
        }`}
      >
        {/* Left Profile Logo & Name */}
        <Magnetic strength={0.2} maxDistance={50}>
          <a href="#home" className="flex items-center gap-2 group cursor-pointer shrink-0">
            <div className={`relative w-8 h-8 rounded-full ring-1.5 p-0.5 shadow-sm flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-all duration-300 ${
              isLight ? 'ring-[#C97262] bg-[#F8F1EB]' : 'ring-[#E18E7E] bg-[#251422]'
            }`}>
              <img
                src="/images/barath_mahabalipuram.jpg"
                alt="Barath S."
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextSibling) {
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }
                }}
                className="w-full h-full rounded-full object-cover object-[center_25%] filter contrast-[1.05]"
              />
              {/* Fallback Monogram Emblem */}
              <div className={`hidden w-full h-full items-center justify-center font-poppins font-black text-xs tracking-tighter ${
                isLight ? 'text-[#C97262]' : 'text-[#E18E7E]'
              }`}>
                BS
              </div>
              {/* Active Status Pip with ambient pulse */}
              <span className={`absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border shadow-[0_0_8px_rgba(52,211,153,0.8)] ${
                isLight ? 'border-white' : 'border-[#1C101A]'
              }`} />
            </div>

            <div className="flex items-center">
              <span className={`font-poppins font-bold text-sm sm:text-base tracking-wide whitespace-nowrap transition-colors ${
                isLight ? 'text-[#1C101A] group-hover:text-[#C97262]' : 'text-white group-hover:text-[#F2A99B]'
              }`}>
                Barath S.
              </span>
            </div>
          </a>
        </Magnetic>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 text-xs font-sans font-semibold tracking-wider transition-colors uppercase ${
                  isActive
                    ? isLight ? 'text-[#C97262]' : 'text-[#E0506B]'
                    : isLight ? 'text-[#4A3240] hover:text-[#1C101A]' : 'text-[#D8C6C0] hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className={`absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r ${
                      isLight
                        ? 'from-[#8E3F32] via-[#C97262] to-[#E18E7E]'
                        : 'from-[#6D001A] via-[#E0506B] to-[#F2A99B]'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle, Mobile Menu & Contact Pill */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark / Light Mode Switcher */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer group shrink-0 ${
              isLight
                ? 'bg-[#F8F1EB] hover:bg-[#C97262] text-[#C97262] hover:text-white border-[#C97262]/30'
                : 'bg-[#251422] hover:bg-[#E18E7E] text-[#F2A99B] hover:text-[#130911] border-[#E18E7E]/30'
            }`}
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110 text-[#F2A99B] group-hover:text-[#130911]" />
            ) : (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 text-[#C97262] group-hover:text-white" />
            )}
          </button>

          {/* Contact Button */}
          <Magnetic strength={0.3} maxDistance={60}>
            <a
              href="#contact"
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap ${
                isLight
                  ? 'bg-[#C97262] hover:bg-[#B55242] text-white hover:shadow-[0_0_20px_rgba(201,114,98,0.45)]'
                  : 'bg-[#E18E7E] hover:bg-[#F2A99B] text-[#130911] hover:shadow-[0_0_20px_rgba(224,80,107,0.5)]'
              }`}
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 hidden xs:inline" />
            </a>
          </Magnetic>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle mobile menu"
            className={`md:hidden w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer shrink-0 ${
              isLight
                ? 'bg-[#F8F1EB] text-[#C97262] hover:bg-[#C97262] hover:text-white border-[#C97262]/30'
                : 'bg-[#251422] text-[#F2A99B] hover:text-white border-[#E18E7E]/30'
            }`}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown Panel */}
      {mobileMenuOpen && (
        <div className={`md:hidden mt-2 mx-auto max-w-sm rounded-3xl backdrop-blur-2xl border p-3 shadow-2xl pointer-events-auto animate-in fade-in slide-in-from-top-3 duration-200 ${
          isLight
            ? 'bg-white/95 border-[#C97262]/30 text-[#1C101A]'
            : 'bg-[#1C101A]/95 border-[#E18E7E]/30 text-[#FFF6F2]'
        }`}>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-between ${
                  activeSection === link.name.toLowerCase()
                    ? isLight ? 'bg-[#C97262] text-white' : 'bg-[#E18E7E] text-[#130911]'
                    : isLight ? 'text-[#4A3240] hover:text-[#1C101A] hover:bg-[#F8F1EB]' : 'text-[#D8C6C0] hover:text-white hover:bg-[#251422]'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-[10px] opacity-60">→</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
