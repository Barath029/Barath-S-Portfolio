import React, { useState } from 'react';
import { GraduationCap, Zap, CheckCircle2, Sparkles, MapPin, Landmark, Calendar, X } from 'lucide-react';

export default function AboutSection({ about }) {
  const [imgSrc, setImgSrc] = useState('/images/barath_arch_spotlight.png');
  const [showSpotlightModal, setShowSpotlightModal] = useState(false);

  return (
    <section id="about" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12 font-sans">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E18E7E]/20 pb-4">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#F2A99B] uppercase font-bold flex items-center gap-1.5">
            <Landmark className="w-3.5 h-3.5 text-[#E18E7E]" />
            01 // BACKGROUND & PERSONA
          </span>
          <h2 className="text-2xl sm:text-4xl font-poppins font-extrabold uppercase text-[#FFF6F2] mt-1">
            About & System Philosophy
          </h2>
        </div>
        <p className="text-xs font-mono text-[#D8C6C0]">
          Chennai, Tamil Nadu • Artificial Intelligence & Machine Learning
        </p>
      </div>

      {/* Featured Shaped Cathedral Cameo Frame with Dramatic Spotlight */}
      <div className="p-5 sm:p-8 lg:p-11 rounded-3xl bg-[#1C101A] border border-[#E18E7E]/30 relative overflow-hidden shadow-editorial grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        
        {/* Ambient Radial Spotlight */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#E18E7E]/20 blur-[120px] pointer-events-none" />

        {/* Left Column: Shaped Profile Icon Frame with Barath Portrait & Spotlight Popup */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          <div 
            onClick={() => setShowSpotlightModal(true)}
            className="relative w-60 h-80 sm:w-76 sm:h-[400px] rounded-t-full rounded-b-3xl p-2.5 bg-gradient-to-b from-[#E18E7E]/40 via-[#2A1627] to-[#130911] border-2 border-[#E18E7E] shadow-2xl overflow-hidden flex items-end justify-center group cursor-pointer"
            title="Click to view spotlight popup"
          >
            {/* Dynamic Spotlight Glow Aura */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-[#E18E7E]/30 blur-2xl pointer-events-none group-hover:scale-130 group-hover:bg-[#E18E7E]/50 transition-all duration-700" />
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#F2A99B]/40 blur-xl pointer-events-none group-hover:scale-120 transition-all duration-500" />

            {/* Profile Cutout Image with Website Theme Background & Spotlight Popup */}
            <img
              src={imgSrc}
              alt="Barath S. - Aspiring AI & ML Engineer"
              loading="lazy"
              decoding="async"
              onError={() => setImgSrc('/images/barath_arch_spotlight.jpg')}
              className="relative z-10 w-full h-full object-cover object-top rounded-t-full rounded-b-2xl filter contrast-[1.06] brightness-105 group-hover:scale-106 group-hover:-translate-y-1 transition-all duration-500 drop-shadow-[0_20px_35px_rgba(225,142,126,0.35)]"
            />

            {/* Interactive Spotlight Expand Icon */}
            <div className="absolute top-3.5 right-3.5 z-20 w-7 h-7 rounded-full bg-[#130911]/80 border border-[#E18E7E]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#E18E7E]" />
            </div>

            {/* Bottom Glass Name Banner */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#130911] via-[#130911]/85 to-transparent text-center z-20 pointer-events-none">
              <span className="font-poppins text-lg sm:text-xl text-[#FFF6F2] font-bold block leading-tight">
                Barath S.
              </span>
            </div>
          </div>

          {/* Clean Subtitle under Image (Location & Architectural removed per user request) */}
          <div className="mt-3.5 px-4 py-1.5 rounded-full bg-[#251422] border border-[#E18E7E]/30 shadow-md">
            <span className="text-xs font-mono text-[#F2A99B] font-semibold tracking-wide uppercase">
              An Aspiring AI & ML Engineer
            </span>
          </div>
        </div>

        {/* Right Column: Architectural Stance Narrative */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-widest text-[#F2A99B] uppercase font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E18E7E]" />
              ENGINEERING & ARCHITECTURAL MANIFESTO
            </span>
            <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-[#FFF6F2] leading-snug">
              "Where timeless architectural principles inspire high-concurrency, fault-tolerant AI systems."
            </h3>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-[#F5EBE6] font-sans font-normal leading-[1.75] tracking-wide">
            <p>
              I am an <strong className="font-semibold text-white border-b border-[#E18E7E]/40 pb-0.5">Artificial Intelligence & Machine Learning</strong> undergraduate 
              at <span className="text-[#F2A99B] font-semibold">Rajalakshmi Institute of Technology</span>, 
              passionate about solving high-complexity constraint problems and engineering autonomous, AI-driven software architectures.
            </p>

            <p>
              My work spans from developing intelligent constraint schedulers and institutional slot allocation engines to leading campus technical initiatives as <span className="text-[#E18E7E] font-semibold">Vice President of TechSpark</span> and 
              testing cutting-edge AI SaaS products before market release.
            </p>
          </div>

          {/* Tenets Cards */}
          <div className="pt-4 border-t border-[#E18E7E]/20 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {about.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#251422]/90 border border-[#E18E7E]/25 hover:border-[#E18E7E]/60 transition-all flex items-start gap-3 shadow-sm"
              >
                <div className="w-6 h-6 rounded-lg bg-[#1C101A] border border-[#E18E7E]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E18E7E]" />
                </div>
                <span className="font-sans text-xs sm:text-sm text-[#F5EBE6] leading-relaxed font-normal">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* =========================================================================
          EDUCATION & VERIFIED FOUNDATIONS (Clean Timeline Format)
      ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
        
        {/* Academic Foundations (8 Cols) */}
        <div className="md:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#1C101A] border border-[#E18E7E]/30 shadow-editorial">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E18E7E]/20">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#251422] border border-[#E18E7E]/40 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-[#E18E7E]" />
              </div>
              <h3 className="text-lg font-poppins font-bold text-white">Education</h3>
            </div>
            <span className="text-xs font-mono text-[#D8C6C0]">
              VERIFIED CREDENTIALS
            </span>
          </div>

          {/* Vertical Timeline Track */}
          <div className="relative pl-6 sm:pl-8 space-y-5">
            {/* Continuous Vertical Timeline Rail */}
            <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#E18E7E] via-[#E18E7E]/30 to-[#2A1627]" />

            {about.education.map((edu, idx) => {
              const isCurrent = edu.status === 'Currently Pursuing';
              const displayScore = edu.scoreType === 'CGPA' 
                ? `CGPA: ${edu.score} / 10` 
                : `Percentage: ${edu.score}%`;

              return (
                <div key={idx} className="relative group">
                  {/* Timeline Milestone Dot */}
                  <div className="absolute -left-6 sm:-left-8 top-5 -translate-x-1/2 flex items-center justify-center">
                    {isCurrent ? (
                      <span className="relative flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E18E7E] opacity-75" />
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-[#E18E7E] border-2 border-[#1C101A]" />
                      </span>
                    ) : (
                      <span className="w-3.5 h-3.5 rounded-full bg-[#1C101A] border-2 border-[#E18E7E]/80 group-hover:border-[#E18E7E] transition-all" />
                    )}
                  </div>

                  {/* Clean Education Card */}
                  <div className="p-5 rounded-2xl bg-[#251422] border border-[#E18E7E]/20 hover:border-[#E18E7E]/50 transition-all shadow-sm">
                    {/* Header: Degree & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                      <h4 className="font-poppins font-bold text-base text-white group-hover:text-[#F2A99B] transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C101A] border border-[#E18E7E]/30 text-xs font-mono text-[#D8C6C0] font-medium shrink-0 self-start sm:self-auto">
                        <Calendar className="w-3 h-3 text-[#E18E7E]" />
                        {edu.period}
                      </span>
                    </div>

                    {/* Institution */}
                    <p className="text-xs font-mono text-[#D8C6C0] mb-3">
                      {edu.institution} • {edu.location}
                    </p>

                    {/* Clean Score Line (Only Score / Percentage, No fluff) */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#1C101A] border border-[#E18E7E]/30 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-[#E18E7E]" />
                        </div>
                        <span className="text-sm font-poppins font-bold text-white">
                          {displayScore}
                        </span>
                      </div>

                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#1C101A] text-[#F2A99B] border border-[#E18E7E]/25">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Research Focus (4 Cols) */}
        <div className="md:col-span-4 p-6 sm:p-7 rounded-3xl bg-[#1C101A] border border-[#E18E7E]/30 flex flex-col justify-between shadow-editorial">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E18E7E]/20">
              <span className="flex items-center gap-1.5 text-xs font-mono text-[#F2A99B] font-bold uppercase">
                <Zap className="w-4 h-4 text-[#E18E7E]" />
                <span>ACTIVE FOCUS</span>
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#E18E7E] animate-pulse" />
            </div>

            <p className="text-xs sm:text-sm text-[#D8C6C0] leading-relaxed font-sans font-light mb-4">
              {about.currentFocus}
            </p>
          </div>

          <div className="pt-4 border-t border-[#E18E7E]/20 text-[11px] font-mono text-[#D8C6C0]">
            <span>Focus: Real-Time Schedulers & Multi-Agent Constraint Solving</span>
          </div>
        </div>

      </div>

      {/* Spotlight Popup Lightbox Modal */}
      {showSpotlightModal && (
        <div 
          onClick={() => setShowSpotlightModal(false)}
          className="fixed inset-0 z-50 bg-[#130911]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-sm sm:max-w-md w-full rounded-3xl bg-[#1C101A] border-2 border-[#E18E7E]/60 p-6 shadow-2xl flex flex-col items-center overflow-hidden cursor-default"
          >
            {/* Dramatic Radial Spotlight Aura */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#E18E7E]/30 blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setShowSpotlightModal(false)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-[#251422] border border-[#E18E7E]/40 text-[#FFF6F2] hover:text-[#E18E7E] hover:border-[#E18E7E] transition-colors cursor-pointer"
              aria-label="Close spotlight popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Arch Frame */}
            <div className="relative w-64 h-88 sm:w-72 sm:h-[420px] rounded-t-full rounded-b-3xl p-2.5 bg-gradient-to-b from-[#E18E7E]/40 via-[#2A1627] to-[#130911] border-2 border-[#E18E7E] shadow-2xl overflow-hidden flex items-end justify-center">
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-[#E18E7E]/35 blur-2xl pointer-events-none" />
              <img
                src={imgSrc}
                alt="Barath S. Spotlight"
                className="relative z-10 w-full h-full object-cover object-top rounded-t-full rounded-b-2xl filter contrast-[1.08] brightness-105 drop-shadow-[0_25px_40px_rgba(225,142,126,0.45)]"
              />
            </div>

            {/* Caption */}
            <div className="mt-5 text-center relative z-10 space-y-1">
              <h3 className="font-poppins font-bold text-xl text-[#FFF6F2]">
                Barath S.
              </h3>
              <p className="text-xs font-mono text-[#F2A99B] uppercase tracking-wider">
                An Aspiring AI & ML Engineer
              </p>
              <span className="text-[11px] font-mono text-[#D8C6C0] block pt-1">
                Chennai, Tamil Nadu
              </span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
