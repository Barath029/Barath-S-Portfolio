import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Cpu, Code2, ShieldCheck, Database, ChevronRight } from 'lucide-react';
import { GlassGlowCard, StaggerContainer, StaggerItem, Magnetic, CinematicHeading } from '../animations';

export default function Hero({ profile }) {
  const reducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (reducedMotion || (typeof window !== 'undefined' && window.innerWidth < 1024)) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

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
      className="relative min-h-screen pt-24 sm:pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden font-sans"
    >
      {/* =========================================================================
          PREMIUM CREATIVE STUDIO HERO COVER
          Deep red-to-crimson radial gradient, giant "CREATIVE" behind cutout portrait,
          floating glassmorphism stat cards, and edge text blocks.
      ========================================================================= */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-3xl overflow-hidden shadow-2xl mb-14 min-h-[620px] sm:min-h-[720px] lg:min-h-[780px] flex flex-col justify-between p-6 sm:p-10 lg:p-12 border border-white/15 select-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #ff5a4d 0%, #a8131a 38%, #7a0a0f 72%, #200305 100%)',
          ['--hero-glow']: '#ff5a4d',
          ['--hero-edge']: '#7a0a0f',
          ['--hero-dark']: '#200305',
        }}
      >
        {/* Subtle Film-Grain Noise Texture Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Ambient Center Glow Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] h-[340px] sm:h-[540px] bg-[#ff5a4d]/30 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* =====================================================================
            LAYER 1 (z-10): GIANT OUTLINED / SEMI-TRANSPARENT "CREATIVE" TEXT
            Fades in and scales from 1.15 to 1 with blur-to-sharp effect
        ===================================================================== */}
        <motion.div
          initial={reducedMotion ? false : { scale: 1.15, filter: 'blur(12px)', opacity: 0 }}
          animate={{
            scale: 1,
            filter: 'blur(0px)',
            opacity: 0.85,
            x: reducedMotion ? 0 : -mousePos.x * 20,
            y: reducedMotion ? 0 : -mousePos.y * 12
          }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center select-none pointer-events-none z-10 overflow-hidden"
        >
          <span className="text-[26vw] sm:text-[24vw] lg:text-[22vw] font-display font-black tracking-[-0.02em] text-white/85 leading-none whitespace-nowrap drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
            CREATIVE
          </span>
        </motion.div>

        {/* =====================================================================
            LAYER 2 (z-20): PORTRAIT CUTOUT (Sits ABOVE "CREATIVE" Text)
            Text appears to pass behind head and shoulders
        ===================================================================== */}
        <motion.div
          initial={reducedMotion ? false : { y: 80, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            x: reducedMotion ? 0 : mousePos.x * 10,
            translateY: reducedMotion ? 0 : mousePos.y * 8
          }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none z-20"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] h-[380px] sm:h-[480px] lg:h-[580px] flex items-end justify-center">
            {/* Soft Red Rim-Light Glow behind Cutout */}
            <div className="absolute inset-x-12 bottom-12 top-6 bg-[#ff5a4d]/35 blur-[70px] rounded-full pointer-events-none" />

            <img
              src="/images/barath_creative_hero.png"
              alt={profile?.name || "Barath S."}
              loading="eager"
              decoding="async"
              className="relative z-20 w-auto h-full max-h-[580px] object-contain object-bottom filter drop-shadow-[0_0_35px_rgba(255,90,77,0.55)] drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)]"
            />

            {/* Bottom Gradient Overlay to gracefully blend into container bottom */}
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#200305] via-[#200305]/40 to-transparent z-30 pointer-events-none" />
          </div>
        </motion.div>

        {/* =====================================================================
            LAYER 3 (z-30): TOP ROW (Headline & Brand Identity Blocks)
        ===================================================================== */}
        <div className="relative z-30 flex flex-col sm:flex-row items-start sm:items-start justify-between gap-6 pointer-events-auto">
          {/* Top-Left: Bold Headline & Read More Pill */}
          <motion.div
            initial={reducedMotion ? false : { x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xs sm:max-w-sm lg:max-w-md space-y-3"
          >
            <CinematicHeading as="h2" className="text-xl sm:text-2xl lg:text-3xl font-poppins font-black text-white leading-tight tracking-tight drop-shadow-md">
              Give your brand a system it can actually grow into
            </CinematicHeading>
            <div className="flex items-center gap-2.5">
              <Magnetic strength={0.25} maxDistance={55}>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#5e080c] hover:bg-[#7a0a0f] text-white border border-white/25 text-xs font-mono tracking-wider font-semibold shadow-lg transition-all group"
                >
                  <span>Read More</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Magnetic>
              <span className="text-[10px] font-mono tracking-widest text-white/75 uppercase font-medium">
                AI & ML ARCHITECTURE
              </span>
            </div>
          </motion.div>

          {/* Top-Right: [YOUR NAME] — [YOUR ROLE] & 11px description */}
          <motion.div
            initial={reducedMotion ? false : { x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-left sm:text-right max-w-xs sm:max-w-sm space-y-1.5"
          >
            <h3 className="font-poppins font-light text-base sm:text-lg lg:text-xl text-white tracking-wide uppercase drop-shadow-sm">
              BARATH S. — AI & ML SYSTEMS ENGINEER
            </h3>
            <p className="text-[11px] font-sans text-white/80 leading-relaxed font-light drop-shadow-sm">
              Architecting high-concurrency constraint schedulers, full-stack scalable web platforms, and automated QA verification systems.
            </p>
          </motion.div>
        </div>

        {/* =====================================================================
            LAYER 3 (z-30): BOTTOM ROW (Partner Box)
        ===================================================================== */}
        <div className="relative z-30 flex items-end justify-end pt-16 sm:pt-20 pointer-events-auto">
          {/* Bottom-Right: Glass Card ("AI Engineer & Full Stack Systems") */}
          <motion.div
            initial={reducedMotion ? false : { x: 60, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              translateY: reducedMotion ? 0 : [0, 8, 0],
            }}
            transition={{
              x: { duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 1, delay: 0.6 },
              translateY: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <Magnetic strength={0.2} maxDistance={60}>
              <a
                href="#contact"
                className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.14] backdrop-blur-xl border border-white/25 hover:border-white/50 hover:bg-white/[0.22] transition-all shadow-2xl flex items-center justify-between sm:justify-start gap-3.5 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform overflow-hidden shadow-sm">
                  <img
                    src="/images/barath_mahabalipuram.jpg"
                    alt="Barath S."
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-poppins font-bold text-xs sm:text-sm text-white group-hover:text-rose-100 transition-colors">
                    Your Partner in Business Growth
                  </h4>
                  <span className="text-[10px] font-mono tracking-wider text-white/80 block">
                    AI Engineer & Full Stack Systems
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#7a0a0f] transition-all ml-1 shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </Magnetic>
          </motion.div>
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
          <CinematicHeading as="h3" className="text-2xl sm:text-3xl font-poppins font-extrabold uppercase text-[#FFF6F2]">
            Key Areas & Focus
          </CinematicHeading>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, sIdx) => (
            <StaggerItem key={sIdx}>
              <GlassGlowCard className="p-6 sm:p-7 rounded-2xl bg-[#1C101A] border border-[#E18E7E]/25 flex flex-col justify-between shadow-lg h-full group">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#251422] border border-[#E18E7E]/35 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-[#E0506B] transition-all">
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
              </GlassGlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
