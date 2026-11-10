import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2 } from 'lucide-react';

export default function ExperienceSection({ experience }) {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto font-sans">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E18E7E]/20 pb-5 mb-10">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#F2A99B] uppercase font-bold flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-[#E18E7E]" />
            WORK EXPERIENCE // INDUSTRY IMPACT
          </span>
          <h2 className="text-3xl sm:text-5xl font-poppins font-black uppercase text-[#FFF6F2] mt-2 tracking-tight">
            Work Experience
          </h2>
        </div>
        <p className="text-xs font-mono text-[#D8C6C0] max-w-md">
          APPLIED AI SAAS TESTING, AUTOMATION, AND CLIENT-FACING PRODUCT ENGINEERING
        </p>
      </div>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {experience.map((item, idx) => (
          <div
            key={item.id || idx}
            className="p-7 sm:p-8 rounded-3xl bg-[#1C101A] border border-[#E18E7E]/30 hover:border-[#E18E7E]/80 transition-all duration-300 flex flex-col justify-between shadow-editorial relative overflow-hidden group"
          >
            {/* Ambient Background Flare */}
            <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#E18E7E]/10 group-hover:bg-[#E18E7E]/20 transition-all blur-2xl pointer-events-none" />

            <div className="space-y-5">
              {/* Card Header: Step & Badge */}
              <div className="flex items-center justify-between gap-2 border-b border-[#E18E7E]/15 pb-4">
                <span className="text-xs font-mono tracking-widest text-[#F2A99B] font-bold">
                  0{idx + 1} // {item.company ? item.company.toUpperCase() : 'STARTUP'}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#251422] border border-[#E18E7E]/40 text-[#E18E7E] text-[10px] font-mono tracking-wider font-semibold">
                  {item.badge}
                </span>
              </div>

              {/* Role Title */}
              <div>
                <h3 className="text-xl sm:text-2xl font-poppins font-bold text-[#FFF6F2] group-hover:text-[#F2A99B] transition-colors tracking-tight">
                  {item.role}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-xs font-mono text-[#D8C6C0]">
                  <Building2 className="w-3.5 h-3.5 text-[#E18E7E]" />
                  <span>{item.company}</span>
                  <span>•</span>
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Exact Bullet Points from Resume */}
              <ul className="space-y-3 pt-2">
                {item.points.map((pt, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-3 text-sm text-[#D8C6C0] font-sans leading-relaxed group-hover:text-[#FFF6F2]/90 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E18E7E] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills / Tech Footer Tags with Animated Interactive Stacks */}
            {item.skills && item.skills.length > 0 && (
              <div className="mt-6 pt-5 border-t border-[#E18E7E]/15 flex flex-wrap gap-2">
                {item.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                    whileHover={{ 
                      y: -3, 
                      scale: 1.06, 
                      transition: { type: "spring", stiffness: 450, damping: 15 } 
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="relative px-3 py-1.5 rounded-xl bg-[#251422] border border-[#E18E7E]/30 text-xs font-mono text-[#F2A99B] font-medium cursor-pointer select-none transition-all duration-300 hover:border-[#E18E7E] hover:text-[#FFF6F2] hover:bg-gradient-to-r hover:from-[#351A31] hover:to-[#251422] hover:shadow-[0_4px_14px_rgba(225,142,126,0.3)] flex items-center gap-1.5 overflow-hidden group/pill"
                  >
                    {/* Glowing Micro-dot */}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E18E7E] group-hover/pill:bg-[#F2A99B] group-hover/pill:scale-125 group-hover/pill:shadow-[0_0_8px_#E18E7E] transition-all duration-300 shrink-0" />
                    
                    <span className="relative z-10">{skill}</span>

                    {/* Shimmer Glint Reflection */}
                    <div className="absolute inset-0 -translate-x-full group-hover/pill:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
