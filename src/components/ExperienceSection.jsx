import React from 'react';
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

            {/* Skills / Tech Footer Tags */}
            {item.skills && item.skills.length > 0 && (
              <div className="mt-6 pt-5 border-t border-[#E18E7E]/15 flex flex-wrap gap-1.5">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg bg-[#251422] border border-[#E18E7E]/25 text-[11px] font-mono text-[#E18E7E] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
