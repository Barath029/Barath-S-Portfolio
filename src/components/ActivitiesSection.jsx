import React from 'react';
import { Trophy, Users, Sparkles, Award } from 'lucide-react';

export default function ActivitiesSection({ leadership }) {
  const leadershipItems = [
    {
      role: "Vice President",
      org: "TechSpark • RIT Chennai",
      badge: "VP",
      period: "2024 – Present",
      description: "Leading TechSpark as Vice President (2026), steering the club to win the Best Technical Club Excellence Award for overall club performance and flawless documentation of all academic-year symposiums, workshops, and hackathons."
    },
    {
      role: "Lead Event Coordinator",
      org: "10+ Campus & Regional Hackathons",
      badge: "10+",
      period: "2024 – 2026",
      description: "Served as lead event coordinator for 10+ campus hackathons; managed problem statements, jury panels, and round evaluations, ensuring smooth event flow and a positive participant experience."
    },
    {
      role: "Symposium & Event Coordinator",
      org: "TechFest & College Events",
      badge: "FEST",
      period: "Annual Edition",
      description: "Organized 10+ technical competitions in the annual college TechFest, delivered keynote addresses, and helped in event coordination."
    }
  ];

  return (
    <section id="activities" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto font-sans">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E18E7E]/20 pb-5 mb-10">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#F2A99B] uppercase font-bold flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5 text-[#E18E7E]" />
            04 // CAMPUS LEADERSHIP & IMPACT
          </span>
          <h2 className="text-3xl sm:text-5xl font-poppins font-black uppercase text-[#FFF6F2] mt-2 tracking-tight">
            Leadership & Community
          </h2>
        </div>
        <p className="text-xs font-mono text-[#D8C6C0] max-w-md">
          DRIVING TECHNICAL CULTURE, ORGANIZING 10+ HACKATHONS, AND FOSTERING PEER EXCELLENCE
        </p>
      </div>

      {/* 3 Leadership Cards (Matching Marina Voss Editorial Tone) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {leadershipItems.map((item, idx) => (
          <div
            key={idx}
            className="p-7 sm:p-8 rounded-3xl bg-[#1C101A] border border-[#E18E7E]/30 hover:border-[#E18E7E]/70 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-editorial group relative overflow-hidden"
          >
            {/* Top Quote Mark & Description */}
            <div className="space-y-4">
              <span className="text-4xl font-serif text-[#E18E7E] leading-none block select-none">
                “
              </span>
              <p className="text-sm text-[#D8C6C0] font-sans leading-relaxed italic font-light">
                {item.description}
              </p>
            </div>

            {/* Bottom Meta Pill & Role */}
            <div className="pt-5 border-t border-[#E18E7E]/15 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#251422] border border-[#E18E7E]/40 flex items-center justify-center font-display font-bold text-xs text-[#E18E7E] shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                {item.badge}
              </div>
              <div className="text-left">
                <h4 className="font-poppins font-bold text-sm text-white group-hover:text-[#F2A99B] transition-colors uppercase tracking-wider">
                  {item.role}
                </h4>
                <span className="text-xs text-[#D8C6C0] font-sans block">
                  {item.org}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
