import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, X, ChevronLeft, ChevronRight, Award, Trophy, Users, Heart, Layers, Flame, Flag } from 'lucide-react';
import { ScrollSection, CinematicHeading, StaggerContainer, StaggerItem, GlassGlowCard } from '../animations';

export default function GallerySection() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const [filterCategory, setFilterCategory] = useState('ALL');

  const galleryItems = [
    {
      id: "gal-techspark-award",
      title: "TechSpark Club Excellence Award (2025–2026)",
      category: "AWARDS",
      tag: "CLUB EXCELLENCE 2025–2026",
      image: "/images/techspark_club_excellence_award.jpg",
      icon: <Trophy className="w-3.5 h-3.5 text-[#E18E7E]" />,
      moment: "TechSpark recognized with the prestigious Club Excellence Award for the 2025–2026 academic year in honor of stellar student leadership, impactful campus events, and flawless documentation of all symposiums, hackathons, and workshops."
    },
    {
      id: "gal-1",
      title: "Academic & Leadership Excellence Award",
      category: "AWARDS",
      tag: "HONOR & RECOGNITION",
      image: "/images/gallery/gallery_award_stage.jpg",
      icon: <Award className="w-3.5 h-3.5 text-[#E18E7E]" />,
      moment: "Honored on stage during the official Excellence Award Ceremony at Rajalakshmi Institute of Technology, receiving recognition from faculty leadership and department dignitaries for technical contributions and student leadership."
    },
    {
      id: "gal-2",
      title: "Faculty Mentorship & Strategic Advisory",
      category: "LEADERSHIP",
      tag: "FACULTY COLLABORATION",
      image: "/images/gallery/gallery_mentors_faculty.jpg",
      icon: <Users className="w-3.5 h-3.5 text-[#F2A99B]" />,
      moment: "A memorable moment with esteemed faculty advisors and department coordinators following an executive club strategy meeting, discussing upcoming campus technical initiatives and student innovation projects."
    },
    {
      id: "gal-3",
      title: "Best Technical Club Excellence Award & Citation",
      category: "AWARDS",
      tag: "OVERALL CLUB EXCELLENCE",
      image: "/images/gallery/gallery_techspark_trophy.jpg",
      icon: <Trophy className="w-3.5 h-3.5 text-[#E18E7E]" />,
      moment: "TechSpark honored with the prestigious Best Technical Club Excellence Award and Citation of Appreciation for overall club performance and meticulous documentation of all technical symposiums, hackathons, and workshops conducted during the academic year."
    },
    {
      id: "gal-4",
      title: "Grand Stage Felicitation & Faculty Dignitaries",
      category: "LEADERSHIP",
      tag: "ANNUAL EXCELLENCE STAGE",
      image: "/images/gallery/gallery_techspark_celebration.jpg",
      icon: <Flag className="w-3.5 h-3.5 text-[#F2A99B]" />,
      moment: "Standing on stage alongside faculty convenors and mentors during the annual felicitation ceremony, celebrating our department technical club's achievements and Best Technical Club victory."
    },
    {
      id: "gal-5",
      title: "Best President of the Academic Year • TechSpark Honors",
      category: "LEADERSHIP",
      tag: "BEST PRESIDENT AWARD",
      image: "/images/gallery/gallery_img_3786.jpg",
      icon: <Trophy className="w-3.5 h-3.5 text-[#E18E7E]" />,
      moment: "A proud milestone celebrating our club receiving the Best President of the Academic Year award. Standing united with our faculty mentor in club colors, deeply honored as club executives and members to celebrate our collective leadership, technical excellence, and campus impact."
    },
    {
      id: "gal-6",
      title: "TechFest Event Coordination & Stage Operations",
      category: "LEADERSHIP",
      tag: "STAGE OPERATIONS",
      image: "/images/gallery/gallery_img_6665.jpg",
      icon: <Sparkles className="w-3.5 h-3.5 text-[#F2A99B]" />,
      moment: "Guiding the floor and coordinating operations during the annual technical symposium — helping in event coordination, participant tracks, keynote announcements, and technical evaluations."
    },
    {
      id: "gal-7",
      title: "Technical Community Building & Peer Workshops",
      category: "COMMUNITY",
      tag: "CAMPUS COMMUNITY",
      image: "/images/gallery/gallery_img_6673.jpg",
      icon: <Users className="w-3.5 h-3.5 text-[#E18E7E]" />,
      moment: "Connecting with engineering students and co-organizers after hosting hands-on technical workshops, fostering an active peer-to-peer coding and problem-solving culture across departments."
    },
    {
      id: "gal-8",
      title: "AI in Healthcare • Industry Mentorship",
      category: "COMMUNITY",
      tag: "HEALTHCARE & AI INNOVATION",
      image: "/images/gallery/gallery_img_7094.jpg",
      icon: <Sparkles className="w-3.5 h-3.5 text-[#E18E7E]" />,
      moment: "Receiving expert mentorship from an industry leader during a collaborative health-tech initiative with Rajalakshmi Medical College, presenting innovative solutions on incorporating AI into clinical workflows and modern healthcare systems."
    },
    {
      id: "gal-9",
      title: "Independence Day Sports Victory • CSE-AIML Honors",
      category: "AWARDS",
      tag: "INDEPENDENCE DAY HONORS",
      image: "/images/gallery/gallery_heic_1813.jpg",
      icon: <Award className="w-3.5 h-3.5 text-[#E18E7E]" />,
      moment: "Honored by our Head of Department (HOD) and CSE-AIML faculty during Independence Day celebrations, felicitated with medals and trophies for winning inter-departmental sports events on behalf of our department."
    },
    {
      id: "gal-10",
      title: "Inter-Club Independence Day Sports Triumph • Coordinator Felicitation",
      category: "AWARDS",
      tag: "INTER-CLUB SPORTS ACHIEVEMENT",
      image: "/images/gallery/gallery_heic_1816.jpg",
      icon: <Trophy className="w-3.5 h-3.5 text-[#E18E7E]" />,
      moment: "Celebrating our sports championship victory with our club coordinator during the college-wide 80th Independence Day festivities at RIT, clinching top honors and medals in athletic competitions conducted across all campus clubs."
    },
    {
      id: "gal-11",
      title: "TECHritZ Organizer Excellence Award • 10+ TechFest Events",
      category: "AWARDS",
      tag: "ORGANIZER EXCELLENCE AWARD",
      image: "/images/gallery/gallery_trophy_stage_award.jpg",
      icon: <Trophy className="w-3.5 h-3.5 text-[#E18E7E]" />,
      moment: "Honored with the Organizer Award presented by our college Principal and visiting industry expert, in recognition of successfully orchestrating and completing 10+ technical competitions and events during our institution's flagship techfest, TECHritZ."
    }
  ];

  const categories = [
    { label: "ALL MOMENTS", value: "ALL" },
    { label: "AWARDS & HONORS", value: "AWARDS" },
    { label: "TECHSPARK LEADERSHIP", value: "LEADERSHIP" },
    { label: "HACKATHONS & SPRINTS", value: "HACKATHONS" },
    { label: "COMMUNITY & MENTORSHIP", value: "COMMUNITY" }
  ];

  const displayedItems = filterCategory === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => 
        item.category === filterCategory || 
        (filterCategory === 'LEADERSHIP' && (item.id === 'gal-techspark-award' || item.id === 'gal-8' || item.id === 'gal-10' || item.id === 'gal-5' || item.id === 'gal-11')) ||
        (filterCategory === 'COMMUNITY' && (item.id === 'gal-8' || item.id === 'gal-9' || item.id === 'gal-10' || item.id === 'gal-5' || item.id === 'gal-11')) ||
        (filterCategory === 'AWARDS' && (item.id === 'gal-9' || item.id === 'gal-10' || item.id === 'gal-5' || item.id === 'gal-11')) ||
        (filterCategory === 'HACKATHONS' && item.id === 'gal-11')
      );

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev + 1) % displayedItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) => (prev - 1 + displayedItems.length) % displayedItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, displayedItems.length]);

  return (
    <ScrollSection id="gallery" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto font-sans">
      
      {/* Section Header (Marina Voss Editorial Style) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E18E7E]/20 pb-5 mb-8">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#F2A99B] uppercase font-bold flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-[#E18E7E]" />
            04 // PHOTOGRAPHIC MOMENTS & ARCHIVE
          </span>
          <CinematicHeading as="h2" className="text-3xl sm:text-5xl font-poppins font-black uppercase text-[#FFF6F2] mt-2 tracking-tight">
            Moments & Milestones
          </CinematicHeading>
        </div>
        <p className="text-xs font-mono text-[#D8C6C0] max-w-md">
          REAL MOMENTS, CORE ACHIEVEMENTS, AND TEAM LEADERSHIP DOCUMENTED IN PHOTOGRAPHS
        </p>
      </div>

      {/* Filter Tabs Row */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilterCategory(cat.value)}
            className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              filterCategory === cat.value
                ? 'bg-[#E18E7E] text-[#130911] font-bold shadow-md'
                : 'bg-[#1C101A] text-[#D8C6C0] border border-[#E18E7E]/20 hover:border-[#E18E7E] hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Editorial Photo Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {displayedItems.map((item, idx) => (
          <StaggerItem key={item.id} className="h-full">
            <GlassGlowCard
              onClick={() => setActivePhotoIndex(idx)}
              className="p-5 rounded-3xl bg-[#1C101A] border border-[#E18E7E]/30 flex flex-col justify-between shadow-editorial group cursor-pointer relative overflow-hidden h-full"
            >
              {/* Corner Ambient Flare */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#E18E7E]/10 group-hover:bg-[#E18E7E]/20 transition-all blur-2xl pointer-events-none" />

              <div>
                {/* Photo Frame Container with Burgundy Hover Overlay & Zoom */}
                <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#251422] border border-[#E18E7E]/20 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-100 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Burgundy-to-transparent hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6D001A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C101A]/90 to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#130911]/85 backdrop-blur-md border border-[#E18E7E]/30 text-[10px] font-mono text-[#F2A99B] font-bold uppercase tracking-wider">
                    {item.icon}
                    <span>{item.tag}</span>
                  </div>

                  {/* Corner Zoom Prompt */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#130911]/80 backdrop-blur-sm border border-[#E18E7E]/30 flex items-center justify-center text-[#F2A99B] group-hover:bg-[#E18E7E] group-hover:text-[#130911] transition-all shadow-md">
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-poppins font-bold text-base sm:text-lg text-white mb-2 group-hover:text-[#F2A99B] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Little Moments Description */}
                <p className="text-xs sm:text-sm text-[#D8C6C0] font-sans leading-relaxed font-light">
                  {item.moment}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#D8C6C0]">
                <span>Moment 0{idx + 1} of 0{displayedItems.length}</span>
                <span className="text-[#E18E7E] font-bold group-hover:translate-x-0.5 transition-transform">
                  View Full Photo ↗
                </span>
              </div>
            </GlassGlowCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* =========================================================================
          LIGHTBOX MODAL (Click to View Full Resolution Photo with Moment Description)
      ========================================================================= */}
      <AnimatePresence>
        {activePhotoIndex !== null && displayedItems[activePhotoIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#130911]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActivePhotoIndex(null)}
          >
            {/* Modal Container with Scale-In Animation */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl w-full max-h-[92vh] bg-[#1C101A] border border-[#E18E7E]/40 rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col justify-between overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar with Title & Close Button */}
              <div className="flex items-center justify-between gap-4 pb-3 mb-3 border-b border-[#E18E7E]/20">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#251422] text-[#F2A99B] border border-[#E18E7E]/30 font-bold uppercase tracking-wider">
                    {displayedItems[activePhotoIndex].tag}
                  </span>
                  <span className="text-xs font-mono text-[#D8C6C0] hidden sm:inline">
                    0{activePhotoIndex + 1} / 0{displayedItems.length}
                  </span>
                </div>

                <button
                  onClick={() => setActivePhotoIndex(null)}
                  aria-label="Close photo preview"
                  className="w-9 h-9 rounded-full bg-[#251422] hover:bg-[#E18E7E] text-[#D8C6C0] hover:text-[#130911] border border-[#E18E7E]/30 flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Main Full Image View with Prev/Next Controls */}
              <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[460px] max-h-[60vh] rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center">
                <img
                  src={displayedItems[activePhotoIndex].image}
                  alt={displayedItems[activePhotoIndex].title}
                  className="max-w-full max-h-[60vh] object-contain rounded-xl drop-shadow-2xl"
                />

                {/* Prev Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex((prev) => (prev - 1 + displayedItems.length) % displayedItems.length);
                  }}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#130911]/80 hover:bg-[#E18E7E] text-white hover:text-[#130911] border border-[#E18E7E]/30 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex((prev) => (prev + 1) % displayedItems.length);
                  }}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#130911]/80 hover:bg-[#E18E7E] text-white hover:text-[#130911] border border-[#E18E7E]/30 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Moment Story Narrative */}
              <div className="pt-4 mt-3 border-t border-[#E18E7E]/20 space-y-1 text-left">
                <h4 className="font-poppins font-bold text-lg text-white">
                  {displayedItems[activePhotoIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#D8C6C0] font-sans leading-relaxed font-light">
                  {displayedItems[activePhotoIndex].moment}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </ScrollSection>
  );
}
