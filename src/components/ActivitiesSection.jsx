import React, { useState } from 'react';
import { Trophy, Users, Sparkles, Award, X, ZoomIn } from 'lucide-react';
import { ScrollSection, CinematicHeading, StaggerContainer, StaggerItem, GlassGlowCard, CountUpNumber } from '../animations';

export default function ActivitiesSection({ leadership }) {
  const [selectedAwardImg, setSelectedAwardImg] = useState(null);

  const leadershipItems = [
    {
      role: "Vice President",
      org: "TechSpark • RIT Chennai",
      badge: "VP",
      logo: "/images/techspark_icon.png",
      period: "2024 – Present",
      awardImage: "/images/techspark_club_excellence_award.jpg",
      awardTitle: "Club Excellence Award (2025–2026)",
      description: "Leading TechSpark as Vice President (2025–2026), steering the club to win the prestigious Club Excellence Award for overall club performance and flawless documentation of all academic-year symposiums, workshops, and hackathons."
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
      org: "TECHritZ • International TechFest",
      badge: "FEST",
      logo: "/images/techritz_logo.png",
      logoBg: "bg-[#070B16] p-1 border-[#38BDF8]/40 shadow-[0_0_12px_rgba(56,189,248,0.25)]",
      period: "Annual Edition",
      description: "Organized 10+ technical competitions in the annual college TechFest (TECHritZ), delivered keynote addresses, and helped in event coordination."
    }
  ];

  return (
    <ScrollSection id="activities" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto font-sans">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E18E7E]/20 pb-5 mb-10">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#F2A99B] uppercase font-bold flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5 text-[#E18E7E]" />
            04 // CAMPUS LEADERSHIP & IMPACT
          </span>
          <CinematicHeading as="h2" className="text-3xl sm:text-5xl font-poppins font-black uppercase text-[#FFF6F2] mt-2 tracking-tight">
            Leadership & Community
          </CinematicHeading>
        </div>
        <p className="text-xs font-mono text-[#D8C6C0] max-w-md">
          DRIVING TECHNICAL CULTURE, ORGANIZING 10+ HACKATHONS, AND FOSTERING PEER EXCELLENCE
        </p>
      </div>

      {/* 3 Leadership Cards (Matching Marina Voss Editorial Tone) */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {leadershipItems.map((item, idx) => (
          <StaggerItem key={idx} className="h-full">
            <GlassGlowCard
              className="p-7 sm:p-8 rounded-3xl bg-[#1C101A] border border-[#E18E7E]/30 flex flex-col justify-between space-y-6 shadow-editorial group relative overflow-hidden h-full"
            >
              {/* Top Quote Mark & Description */}
              <div className="space-y-4">
                <span className="text-4xl font-serif text-[#E18E7E] leading-none block select-none">
                  “
                </span>
                <p className="text-sm text-[#D8C6C0] font-sans leading-relaxed italic font-light">
                  {item.description}
                </p>

                {/* Award Image Showcase if available */}
                {item.awardImage && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedAwardImg(item.awardImage);
                    }}
                    className="relative w-full h-44 rounded-2xl overflow-hidden border border-[#E18E7E]/30 group/img cursor-pointer shadow-md mt-4 block"
                    title="Click to view full photo"
                  >
                    <img
                      src={item.awardImage}
                      alt={item.awardTitle}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#130911]/85 via-transparent to-transparent flex items-end justify-between p-3">
                      <span className="text-[10px] font-mono font-bold text-[#FFF6F2] bg-[#1C101A]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#E18E7E]/40 flex items-center gap-1.5 shadow-sm">
                        <Award className="w-3 h-3 text-[#E18E7E]" />
                        {item.awardTitle}
                      </span>
                      <span className="w-6 h-6 rounded-full bg-[#1C101A]/80 border border-[#E18E7E]/40 flex items-center justify-center text-[#E18E7E]">
                        <ZoomIn className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Meta Pill & Role */}
              <div className="pt-5 border-t border-[#E18E7E]/15 flex items-center gap-3.5">
                <div
                  className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-inner overflow-hidden ${
                    item.logoBg
                      ? item.logoBg
                      : item.logo
                      ? 'bg-white p-1.5 shadow-md border-[#E18E7E]/40'
                      : 'bg-[#251422] border-[#E18E7E]/40'
                  }`}
                  title={item.org}
                >
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.org}
                      className="w-full h-full object-contain"
                    />
                  ) : item.badge === '10+' ? (
                    <span className="font-display font-bold text-xs text-[#E18E7E]">
                      <CountUpNumber value={10} suffix="+" />
                    </span>
                  ) : (
                    <span className="font-display font-bold text-xs text-[#E18E7E]">
                      {item.badge}
                    </span>
                  )}
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
            </GlassGlowCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Lightbox Modal for Award Photo */}
      {selectedAwardImg && (
        <div
          onClick={() => setSelectedAwardImg(null)}
          className="fixed inset-0 z-50 bg-[#130911]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#1C101A] border-2 border-[#E18E7E]/60 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center overflow-hidden cursor-default"
          >
            <button
              onClick={() => setSelectedAwardImg(null)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-[#251422] border border-[#E18E7E]/40 text-[#FFF6F2] hover:text-[#E18E7E] hover:border-[#E18E7E] transition-colors cursor-pointer"
              aria-label="Close award modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full max-h-[70vh] rounded-2xl overflow-hidden mb-4 border border-[#E18E7E]/20 bg-black/40 flex items-center justify-center">
              <img
                src={selectedAwardImg}
                alt="TechSpark Club Excellence Award 2025–2026"
                className="w-full h-auto max-h-[68vh] object-contain rounded-2xl"
              />
            </div>

            <div className="w-full text-center space-y-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#251422] text-[#E18E7E] border border-[#E18E7E]/30 text-xs font-mono font-bold uppercase tracking-wider">
                <img
                  src="/images/techspark_icon.png"
                  alt="TechSpark"
                  className="w-4 h-4 object-contain inline-block bg-white rounded-full p-0.5"
                />
                TechSpark • Club Excellence Award (2025–2026)
              </span>
              <p className="text-xs text-[#D8C6C0] font-sans pt-1">
                Rajalakshmi Institute of Technology — Annual Technical Club Excellence Award for outstanding overall performance, symposia, and hackathon documentation.
              </p>
            </div>
          </div>
        </div>
      )}

    </ScrollSection>
  );
}
