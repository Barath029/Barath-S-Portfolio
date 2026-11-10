import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Cpu, Code2, ShieldCheck, Database, Sparkles } from 'lucide-react';

export default function Hero({ profile }) {
  const [imgSrc, setImgSrc] = useState('/images/barath_new_cutout.png');

  const services = [
    {
      title: "AI & ML SYSTEMS",
      icon: <Cpu className="w-5 h-5 text-[#E18E7E]" />,
      desc: "Conflict-free railway scheduling algorithms, constraint optimization mathematics, prompt engineering, and model validation."
    },
    {
      title: "FULL-STACK ARCHITECTURE",
      icon: <Code2 className="w-5 h-5 text-[#F2A99B]" />,
      desc: "High-performance web applications, commercial billing platforms, institutional slot allocation engines, and scalable React integrations."
    },
    {
      title: "QA & BETA TESTING",
      icon: <ShieldCheck className="w-5 h-5 text-[#E18E7E]" />,
      desc: "Functional and automation testing with Beta Testing, edge-case bug identification, regression checks, and live AI SaaS validation."
    },
    {
      title: "DATA & CLOUD SYSTEMS",
      icon: <Database className="w-5 h-5 text-[#F2A99B]" />,
      desc: "Relational and document storage (Supabase, PostgreSQL, MongoDB, SQL) with optimized query indexing and CI/CD pipelines."
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden font-sans"
    >
      {/* Background Ambience & Royal Spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[380px] bg-[#E18E7E]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[280px] bg-[#C97262]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* =========================================================================
          MARINA VOSS EDITORIAL COVER HERO
      ========================================================================= */}
      <div className="relative rounded-3xl bg-[#1C101A]/90 border border-[#E18E7E]/30 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-editorial mb-14">
        
        {/* Top Editorial Small Meta Bar */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#E18E7E] uppercase pb-4 mb-2 border-b border-[#E18E7E]/15">
          <span>AI SYSTEMS ARCHITECT & ML ENGINEER</span>
          <span className="hidden sm:inline">RIT LABS • CHENNAI • VOL. 2026</span>
        </div>

        {/* Giant Condensed "PORTFOLIO" Heading in Rose Gold (Marina Voss Signature) */}
        <div className="absolute top-8 sm:top-10 left-0 right-0 text-center select-none pointer-events-none z-0">
          <h1 className="text-[19vw] sm:text-[17vw] font-display font-black uppercase tracking-tight text-[#E18E7E]/75 leading-none">
            PORTFOLIO
          </h1>
        </div>

        {/* Dramatic Velvet Spotlight Radial Swirl Behind Subject */}
        <div className="absolute top-14 right-16 w-72 h-72 sm:w-[460px] sm:h-[460px] rounded-full bg-gradient-to-tr from-[#E18E7E]/35 via-[#7B2E3D]/30 to-transparent blur-md pointer-events-none z-0" />

        {/* Grid Content: Script Quote on Left, Subject in Center, Info on Right */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 sm:pt-14">
          
          {/* Left Column: Cursive Script Quote & Bio (Marina Voss Style) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Elegant Script Quote Overlay */}
            <div className="relative">
              <span className="font-serif italic text-3xl sm:text-5xl text-[#F2A99B] leading-tight block select-none">
                "Ideas that Leave a Mark."
              </span>
              <span className="text-[11px] font-mono tracking-widest text-[#E18E7E] uppercase font-bold mt-2 block">
                MATHEMATICAL INTELLECT • FAULT-TOLERANT ARCHITECTURE
              </span>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono tracking-widest text-[#F2A99B] uppercase font-bold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E18E7E] animate-pulse" />
                HELLO, I'M
              </span>
              <h2 className="text-4xl sm:text-6xl font-poppins font-black text-[#FFF6F2] tracking-tight leading-[1.05]">
                BARATH S
              </h2>
            </div>

            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E18E7E] text-[#130911] font-poppins text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md">
              <span>AI & ML ENGINEER • FULL-STACK ARCHITECT</span>
            </div>

            {/* Bio Narrative */}
            <p className="text-sm sm:text-base text-[#D8C6C0] font-sans leading-relaxed max-w-lg font-light">
              Undergraduate at Rajalakshmi Institute of Technology focused on high-complexity constraint schedulers, full-stack web platforms, and automated QA systems. Vice President of TechSpark with a proven track record leading 10+ hackathons and campus initiatives.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-2xl bg-[#E18E7E] hover:bg-[#F2A99B] text-[#130911] font-sans font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 shadow-md flex items-center gap-2 group cursor-pointer"
              >
                <span>Selected Works</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#about"
                className="px-5 py-3.5 rounded-2xl bg-[#251422] hover:bg-[#301A2C] border border-[#E18E7E]/40 text-[#FFF6F2] font-sans font-medium text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>About & Philosophy</span>
              </a>
            </div>
          </div>

          {/* Center/Right Column: Hero Portrait with High-Fashion Spotlight */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
            
            {/* The Subject's Portrait */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-md sm:max-w-lg h-[340px] sm:h-[460px] lg:h-[520px] flex items-end justify-center z-10"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-end justify-center">
                <img
                  src={imgSrc}
                  alt={profile.name}
                  loading="eager"
                  decoding="async"
                  onError={() => setImgSrc('/images/barath_new_web.jpg')}
                  className="w-full h-full object-cover object-top rounded-2xl filter contrast-[1.08] brightness-105 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
                />

                {/* Subtle gradient overlay at bottom to merge into card base */}
                <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#1C101A] via-[#1C101A]/50 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Bottom Meta Pill under portrait */}
            <div className="w-full max-w-md flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-1.5 sm:gap-0 text-[11px] sm:text-xs font-mono text-[#D8C6C0] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#130911]/90 border border-[#E18E7E]/30 mt-3 shadow-lg">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E18E7E]" />
                <span>BASED IN CHENNAI, INDIA</span>
              </div>
              <span className="text-[#F2A99B] font-bold">● AVAILABLE FOR HIGH-IMPACT ROLES</span>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================================================
          WHAT I DO / SERVICES (Marina Voss 4-Card Domain Strip)
      ========================================================================= */}
      <div className="mb-8">
        <div className="flex items-baseline gap-3 mb-6 border-b border-[#E18E7E]/20 pb-3">
          <span className="text-xs font-mono tracking-widest text-[#F2A99B] uppercase font-bold">
            DOMAINS //
          </span>
          <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold uppercase text-[#FFF6F2]">
            Key Areas & Focus
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, sIdx) => (
            <div
              key={sIdx}
              className="p-6 sm:p-7 rounded-2xl bg-[#1C101A] border border-[#E18E7E]/25 hover:border-[#E18E7E]/70 transition-all duration-300 group flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#251422] border border-[#E18E7E]/35 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-[#E18E7E] transition-all">
                  {svc.icon}
                </div>

                <h4 className="font-poppins font-bold text-base sm:text-lg text-[#FFF6F2] mb-2 tracking-wide uppercase group-hover:text-[#F2A99B] transition-colors">
                  {svc.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#D8C6C0] leading-relaxed font-sans font-light">
                  {svc.desc}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#E18E7E] uppercase font-bold">
                <span>0{sIdx + 1} // DOMAIN</span>
                <span className="text-[#F2A99B] group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
