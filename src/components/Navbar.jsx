import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sun, Moon, Menu, X } from 'lucide-react';

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-8 py-3 sm:py-4 pointer-events-none transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-3.5 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 pointer-events-auto ${
          scrolled
            ? 'bg-[#1C101A]/95 backdrop-blur-xl border border-[#E18E7E]/30 shadow-2xl text-[#FFF6F2]'
            : 'bg-[#1C101A]/75 backdrop-blur-md border border-[#E18E7E]/20 text-[#FFF6F2]'
        }`}
      >
        {/* Left Profile Logo & Name */}
        <a href="#home" className="flex items-center gap-2 group cursor-pointer shrink-0">
          <div className="relative w-8 h-8 rounded-full ring-1.5 ring-[#E18E7E] p-0.5 bg-[#251422] shadow-sm flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-all duration-300">
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
            <div className="hidden w-full h-full items-center justify-center font-poppins font-black text-xs text-[#E18E7E] tracking-tighter">
              BS
            </div>
            {/* Active Status Pip */}
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-[#1C101A]" />
          </div>

          <div className="flex items-center">
            <span className="font-poppins font-bold text-sm sm:text-base tracking-wide text-white group-hover:text-[#F2A99B] transition-colors whitespace-nowrap">
              Barath S.
            </span>
          </div>
        </a>

        {/* Center Nav Links (Desktop) */}
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

        {/* Right Actions: Theme Toggle, Mobile Menu & Contact Pill */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark / Light Mode Switcher */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#251422] hover:bg-[#E18E7E] text-[#F2A99B] hover:text-[#130911] border border-[#E18E7E]/30 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer group shrink-0"
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110 text-[#F2A99B] group-hover:text-[#130911]" />
            ) : (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 text-[#C97262] group-hover:text-white" />
            )}
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#E18E7E] hover:bg-[#F2A99B] text-[#130911] font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 hidden xs:inline" />
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle mobile menu"
            className="md:hidden w-8 h-8 rounded-full bg-[#251422] text-[#F2A99B] hover:text-white border border-[#E18E7E]/30 flex items-center justify-center transition-all cursor-pointer shrink-0"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-sm rounded-3xl bg-[#1C101A]/95 backdrop-blur-2xl border border-[#E18E7E]/30 p-3 shadow-2xl pointer-events-auto animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-between ${
                  activeSection === link.name.toLowerCase()
                    ? 'bg-[#E18E7E] text-[#130911]'
                    : 'text-[#D8C6C0] hover:text-white hover:bg-[#251422]'
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
