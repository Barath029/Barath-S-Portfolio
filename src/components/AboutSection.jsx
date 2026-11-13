import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Zap,
  CheckCircle2,
  Sparkles,
  MapPin,
  Landmark,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
  Code2
} from 'lucide-react';
import {
  ScrollSection,
  CinematicHeading,
  KineticText,
  GlassGlowCard,
  CountUpNumber,
  TimelineDrawLine,
  PulsingDot,
  Magnetic
} from '../animations';

export default function AboutSection({ about }) {
  // Swiping Image Carousel State
  const [[page, direction], setPage] = useState([0, 0]);
  const [showSpotlightModal, setShowSpotlightModal] = useState(false);

  const swipeImages = [
    {
      src: '/images/about_gallery/barath_about_1.jpg',
      title: 'Barath S. — Systems Engineer',
      caption: 'Shore Temple • Mahabalipuram',
      tag: 'ARCHITECTURAL VISION'
    },
    {
      src: '/images/about_gallery/barath_about_2.jpg',
      title: 'Barath S. — AI & ML Engineer',
      caption: 'Campus Innovation & Technical Community',
      tag: 'ENGINEERING EXCELLENCE'
    },
    {
      src: '/images/about_gallery/barath_about_3.jpg',
      title: 'Barath S. — Student Executive',
      caption: '10+ Hackathons & Technical Sprints',
      tag: 'TECHSPARK VP'
    },
    {
      src: '/images/about_gallery/barath_about_4.jpg',
      title: 'Barath S. — Full-Stack Builder',
      caption: 'Constraint Algorithms & Scalable Platforms',
      tag: 'SYSTEMS BUILDER'
    }
  ];

  const imageIndex = ((page % swipeImages.length) + swipeImages.length) % swipeImages.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 260 : -260,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.28 },
        scale: { duration: 0.28 }
      }
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 260 : -260,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.22 }
      }
    })
  };

  // Tech stack moving at 1x speed circular list
  const techStackItems = [
    "Python",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "REST APIs",
    "Beta Testing",
    "JavaScript",
    "C++",
    "Java",
    "Git",
    "GitHub",
    "Tailwind CSS",
    "Constraint Schedulers"
  ];

  // Duplicate for seamless 1x circular marquee loop
  const marqueeItems = [...techStackItems, ...techStackItems];

  return (
    <ScrollSection id="about" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12 font-sans">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E18E7E]/20 pb-4">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#F2A99B] uppercase font-bold flex items-center gap-1.5">
            <Landmark className="w-3.5 h-3.5 text-[#E18E7E]" />
            01 // BACKGROUND & PERSONA
          </span>
          <CinematicHeading as="h2" className="text-3xl sm:text-5xl font-poppins font-black uppercase text-[#FFF6F2] mt-1 tracking-tight">
            About <span className="font-serif italic font-normal text-[#E0506B] lowercase">Me</span>
          </CinematicHeading>
        </div>
        <p className="text-xs font-mono text-[#D8C6C0]">
          Chennai, Tamil Nadu • Artificial Intelligence & Machine Learning
        </p>
      </div>

      {/* =========================================================================
          HERO PROFILE SHOWCASE: INTERACTIVE SWIPE CAROUSEL + EDITORIAL BIO & MOVING TECH STACK
      ========================================================================= */}
      <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-[#1C101A] border border-[#E18E7E]/30 relative overflow-hidden shadow-editorial grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Ambient Radial Spotlight */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#6D001A]/25 blur-[120px] pointer-events-none" />

        {/* Left Column: Interactive Swipeable Photo Card (Full-Cover Photo Showcase) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          <div 
            onClick={() => setShowSpotlightModal(true)}
            className="relative w-full max-w-[340px] sm:max-w-[380px] h-[450px] sm:h-[490px] rounded-3xl border-2 border-[#E18E7E]/50 shadow-2xl overflow-hidden group select-none cursor-grab active:cursor-grabbing bg-[#130911]"
            title="Drag or swipe to view next photo • Click for full-screen spotlight"
          >
            {/* Full-Cover Central Swipeable Photo Frame */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (offset.x < -40 || swipe < -800) {
                    paginate(1);
                  } else if (offset.x > 40 || swipe > 800) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                <img
                  src={swipeImages[imageIndex].src}
                  alt={swipeImages[imageIndex].title}
                  draggable={false}
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-100 transition-all duration-300 pointer-events-none"
                />
              </motion.div>
            </AnimatePresence>

            {/* Prev Button Overlay */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#130911]/80 hover:bg-[#E0506B] text-white hover:text-[#130911] border border-[#E18E7E]/40 flex items-center justify-center transition-all cursor-pointer shadow-lg backdrop-blur-sm group-hover:scale-105"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Button Overlay */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#130911]/80 hover:bg-[#E0506B] text-white hover:text-[#130911] border border-[#E18E7E]/40 flex items-center justify-center transition-all cursor-pointer shadow-lg backdrop-blur-sm group-hover:scale-105"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Floating Bottom Pagination Dots Overlay */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-[#130911]/60 backdrop-blur-md border border-white/10 shadow-lg pointer-events-auto"
            >
              {swipeImages.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setPage([dotIdx, dotIdx > imageIndex ? 1 : -1])}
                  aria-label={`Jump to slide ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    imageIndex === dotIdx
                      ? 'w-6 bg-[#E0506B] shadow-[0_0_8px_#E0506B]'
                      : 'w-2 bg-white/40 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative, Specializations & 1x Circular Moving Tech Stack */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Engineering Manifesto Quote */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-widest text-[#F2A99B] uppercase font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E0506B]" />
              ENGINEERING & ARCHITECTURAL MANIFESTO
            </span>
            <h3 className="text-xl sm:text-2xl font-poppins font-bold text-[#FFF6F2] leading-snug">
              <KineticText text="“Where timeless architectural principles inspire high-concurrency, fault-tolerant AI systems.”" />
            </h3>
          </div>

          {/* Bio Description */}
          <p className="text-sm sm:text-base text-[#F5EBE6] font-sans font-normal leading-[1.75] tracking-wide">
            I am an <strong className="font-semibold text-white border-b border-[#E18E7E]/40 pb-0.5">Artificial Intelligence & Machine Learning</strong> undergraduate 
            at <span className="text-[#F2A99B] font-semibold">Rajalakshmi Institute of Technology</span>, 
            passionate about solving high-complexity constraint problems and engineering autonomous, AI-driven software architectures. 
            My work spans developing conflict-free constraint schedulers, full-stack scalable web platforms, leading campus initiatives as <span className="text-[#E0506B] font-semibold">Vice President of TechSpark</span>, and testing cutting-edge AI SaaS products.
          </p>

          {/* Specializations & Certifications List */}
          <div className="space-y-3 pt-1">
            <h4 className="text-xs font-mono tracking-widest text-[#F2A99B] uppercase font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E0506B] shadow-[0_0_8px_#E0506B]" />
              <span>Specializations & Core Focus</span>
            </h4>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D8C6C0] font-sans">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0506B] mt-2 shrink-0" />
                <span>
                  <strong className="text-white font-semibold">Optimization & Schedulers:</strong> Algorithmic modeling, conflict-free railway track dispatch & institutional slot engines.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0506B] mt-2 shrink-0" />
                <span>
                  <strong className="text-white font-semibold">Full-Stack Web Architectures:</strong> Production platforms with React.js, Node.js, Express.js & cloud databases (MySQL, MongoDB).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0506B] mt-2 shrink-0" />
                <span>
                  <strong className="text-white font-semibold">QA Automation & Beta Testing:</strong> Edge-case failure diagnosis, regression suites, and live AI SaaS product validation.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0506B] mt-2 shrink-0" />
                <span>
                  <strong className="text-white font-semibold">Campus Leadership:</strong> Vice President of TechSpark; coordinated 10+ campus hackathons and technical symposiums.
                </span>
              </li>
            </ul>
          </div>

          {/* =========================================================================
              TECH STACK: 1x SPEED CIRCULAR CONTINUOUS MOVING LIST
          ========================================================================= */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono tracking-widest text-[#F2A99B] uppercase font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E0506B] shadow-[0_0_8px_#E0506B]" />
                <span>Tech Stack</span>
              </h4>
            </div>

            {/* Continuous Marquee Rail at 1x speed (20s loop) */}
            <div className="relative overflow-hidden w-full py-1.5 rounded-2xl bg-[#130911]/60 border border-[#E18E7E]/20">
              {/* Fade Masks */}
              <div className="absolute left-0 inset-y-0 w-8 sm:w-14 bg-gradient-to-r from-[#1C101A] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 inset-y-0 w-8 sm:w-14 bg-gradient-to-l from-[#1C101A] to-transparent z-10 pointer-events-none" />

              <motion.div
                className="flex items-center gap-2.5 whitespace-nowrap cursor-pointer"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  ease: 'linear',
                  duration: 20, // 1x normal continuous speed
                  repeat: Infinity
                }}
                whileHover={{ animationPlayState: 'paused' }}
              >
                {marqueeItems.map((tech, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-[#251422] border border-[#E18E7E]/30 text-xs font-mono text-[#F5EBE6] hover:text-white hover:border-[#E0506B] hover:bg-[#351930] hover:shadow-[0_0_12px_rgba(224,80,107,0.35)] transition-all shadow-sm flex items-center gap-1.5 shrink-0 select-none group/chip"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E0506B] group-hover/chip:scale-125 transition-transform" />
                    <span>{tech}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <Magnetic strength={0.3} maxDistance={60}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E18E7E] hover:bg-[#F2A99B] text-[#130911] font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-[0_0_25px_rgba(224,80,107,0.5)] group cursor-pointer"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
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
            {/* Continuous Vertical Timeline Rail with Scroll-Triggered Drawing */}
            <TimelineDrawLine className="absolute left-2.5 sm:left-3.5 top-3 bottom-3" />

            {about.education.map((edu, idx) => {
              const isCurrent = edu.status === 'Currently Pursuing';

              return (
                <div key={idx} className="relative group">
                  {/* Timeline Milestone Dot */}
                  <div className="absolute -left-6 sm:-left-8 top-5 -translate-x-1/2 flex items-center justify-center">
                    {isCurrent ? (
                      <PulsingDot color="#E18E7E" />
                    ) : (
                      <span className="w-3.5 h-3.5 rounded-full bg-[#1C101A] border-2 border-[#E18E7E]/80 group-hover:border-[#E18E7E] transition-all" />
                    )}
                  </div>

                  {/* Clean Education Card with Glass Spotlight */}
                  <GlassGlowCard className="p-5 rounded-2xl bg-[#251422] border border-[#E18E7E]/20 shadow-sm">
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

                    {/* Clean Score Line with Animated Count-Up */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#1C101A] border border-[#E18E7E]/30 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-[#E18E7E]" />
                        </div>
                        <span className="text-sm font-poppins font-bold text-white">
                          {edu.scoreType === 'CGPA' ? (
                            <>CGPA: <CountUpNumber value={edu.score} decimals={2} /> / 10</>
                          ) : (
                            <>Percentage: <CountUpNumber value={edu.score} decimals={edu.score % 1 !== 0 ? 1 : 0} />%</>
                          )}
                        </span>
                      </div>

                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#1C101A] text-[#F2A99B] border border-[#E18E7E]/25">
                        {edu.status}
                      </span>
                    </div>
                  </GlassGlowCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Focus (4 Cols) */}
        <div className="md:col-span-4 p-6 sm:p-7 rounded-3xl bg-[#1C101A] border border-[#E18E7E]/30 flex flex-col justify-between shadow-editorial relative overflow-hidden group">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#E18E7E]/10 group-hover:bg-[#E18E7E]/20 transition-all blur-2xl pointer-events-none" />

          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E18E7E]/20">
              <span className="flex items-center gap-1.5 text-xs font-mono text-[#F2A99B] font-bold uppercase">
                <Zap className="w-4 h-4 text-[#E18E7E]" />
                <span>ACTIVE FOCUS</span>
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#E18E7E] animate-pulse" />
            </div>

            <p className="text-xs sm:text-sm text-[#FFF6F2] font-sans font-medium leading-relaxed">
              {typeof about.currentFocus === 'object' ? about.currentFocus.tagline : about.currentFocus}
            </p>

            {/* Focus Initiatives */}
            {about.currentFocus?.areas && (
              <div className="space-y-2.5 pt-1">
                {about.currentFocus.areas.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#251422] border border-[#E18E7E]/20 hover:border-[#E18E7E]/50 transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E18E7E] shrink-0" />
                      <h4 className="text-xs font-poppins font-bold text-white uppercase tracking-wider">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#E8DDD8] font-sans font-medium leading-relaxed pl-3.5 mt-1">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Focus Tags */}
            {about.currentFocus?.tags && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {about.currentFocus.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-[#251422] border border-[#E18E7E]/25 text-[10px] font-mono text-[#F2A99B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 mt-4 border-t border-[#E18E7E]/20 text-[11px] font-mono text-[#D8C6C0] flex items-center justify-between">
            <span className="text-[#F2A99B]">● {about.currentFocus?.status || 'Active Engineering'}</span>
            <span className="text-[#E18E7E]">2026</span>
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

            {/* Image Preview */}
            <div className="relative w-64 h-88 sm:w-76 sm:h-[460px] rounded-2xl p-2 bg-gradient-to-b from-[#E18E7E]/40 via-[#2A1627] to-[#130911] border-2 border-[#E18E7E] shadow-2xl overflow-hidden flex items-center justify-center">
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-[#E18E7E]/35 blur-2xl pointer-events-none" />
              <img
                src={swipeImages[imageIndex].src}
                alt="Barath S."
                className="relative z-10 w-full h-full object-cover object-top rounded-xl filter contrast-[1.08] brightness-105 drop-shadow-[0_25px_40px_rgba(225,142,126,0.45)]"
              />
            </div>
          </div>
        </div>
      )}

    </ScrollSection>
  );
}
