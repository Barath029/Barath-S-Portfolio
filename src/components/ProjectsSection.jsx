import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Globe, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto font-sans">
      
      {/* Section Header (Marina Voss "SELECTED WORK ↘" Style) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E18E7E]/20 pb-5 mb-10">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#F2A99B] uppercase font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#E18E7E]" />
            02 // SELECTED WORK ↘
          </span>
          <h2 className="text-3xl sm:text-5xl font-poppins font-black uppercase text-[#FFF6F2] mt-2 tracking-tight">
            Flagship Engineering Systems
          </h2>
        </div>
        <p className="text-xs font-mono text-[#D8C6C0] max-w-md">
          PRODUCTION PLATFORMS & OPTIMIZATION SYSTEMS ARCHITECTED AND BROUGHT TO LIFE
        </p>
      </div>

      {/* Magazine Editorial Project Cards (Matching Marina Voss Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {projects.map((proj, idx) => {
          const techList = proj.tech || proj.technologies || [];
          const innovationPoints = proj.innovations || proj.deliverables || [];

          return (
            <div
              key={proj.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#1C101A] border border-[#E18E7E]/30 hover:border-[#E18E7E]/80 transition-all duration-300 flex flex-col justify-between shadow-editorial relative overflow-hidden group"
            >
              {/* Corner Ambient Flare */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#E18E7E]/10 group-hover:bg-[#E18E7E]/20 transition-all blur-2xl pointer-events-none" />

              <div className="space-y-4">
                {/* Header: Number 01, 02, 03 & Tag */}
                <div className="flex items-center justify-between gap-2 pb-1">
                  <span className="font-display font-black text-2xl text-[#E18E7E]">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#251422] text-[#F2A99B] border border-[#E18E7E]/30 uppercase font-bold tracking-wider">
                    {proj.tag}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-poppins font-bold text-white mb-1 group-hover:text-[#F2A99B] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-[#F2A99B]">
                    {proj.subtitle}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#D8C6C0] font-sans leading-relaxed font-light">
                  {proj.summary}
                </p>

                {/* Direct Action Link / Prototype Badge */}
                <div className="pt-1">
                  {proj.liveUrl ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E18E7E] hover:bg-[#F2A99B] text-[#130911] text-xs font-sans font-bold uppercase tracking-wider transition-all shadow-md group/btn cursor-pointer"
                    >
                      <Globe className="w-3.5 h-3.5 text-[#130911]" />
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#251422] border border-[#E18E7E]/30 text-[11px] font-mono text-[#F2A99B]">
                      <span className="w-2 h-2 rounded-full bg-[#E18E7E] animate-pulse" />
                      <span>ALGORITHMIC OPTIMIZATION SYSTEM</span>
                    </div>
                  )}
                </div>

                {/* Architectural Innovation Points (Simple & Understandable, Always Displayed on Every Card!) */}
                <div className="pt-4 border-t border-[#E18E7E]/20 space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#E18E7E] font-bold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#E18E7E]" />
                    Architectural Innovations:
                  </span>
                  
                  <div className="space-y-2">
                    {innovationPoints.map((item, dIdx) => {
                      const hasColon = typeof item === 'string' && item.includes(':');
                      const titlePart = hasColon ? item.split(':')[0] : null;
                      const descPart = hasColon ? item.substring(item.indexOf(':') + 1) : item;

                      return (
                        <div
                          key={dIdx}
                          className="p-3 rounded-2xl bg-[#251422]/90 border border-[#E18E7E]/15 text-xs text-[#D8C6C0] font-sans flex items-start gap-2.5 leading-relaxed hover:border-[#E18E7E]/40 transition-colors"
                        >
                          <span className="text-[#E18E7E] font-bold shrink-0 mt-0.5 font-mono text-sm">›</span>
                          <div>
                            {titlePart && (
                              <span className="font-poppins font-bold text-white block mb-0.5 tracking-wide">
                                {titlePart}:
                              </span>
                            )}
                            <span className="font-light text-[#D8C6C0]">
                              {descPart}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Technologies Pill Row with Animated Stacks */}
              <div className="mt-6 pt-4 border-t border-[#E18E7E]/15 flex flex-wrap gap-2">
                {techList.map((t, tIdx) => (
                  <motion.div
                    key={tIdx}
                    whileHover={{ 
                      y: -2.5, 
                      scale: 1.06, 
                      transition: { type: "spring", stiffness: 450, damping: 15 } 
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="relative text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#251422] text-[#F2A99B] border border-[#E18E7E]/25 hover:border-[#E18E7E] hover:text-[#FFF6F2] hover:bg-gradient-to-r hover:from-[#351A31] hover:to-[#251422] hover:shadow-[0_4px_12px_rgba(225,142,126,0.25)] transition-all cursor-pointer flex items-center gap-1.5 group/pill overflow-hidden select-none"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E18E7E]/60 group-hover/pill:bg-[#F2A99B] group-hover/pill:scale-125 transition-transform shrink-0" />
                    <span className="relative z-10">{t}</span>
                    <div className="absolute inset-0 -translate-x-full group-hover/pill:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
