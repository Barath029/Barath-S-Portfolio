import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Magnetic } from './index';

/* =========================================================================
   FOOTER ANIMATIONS MODULE (Supports Dark & Light Themes Deterministically)
   1. FooterParticleCanvas: 35-40 floating particles (20 on mobile)
   2. FooterCursorSpotlight: 380px cursor-following spotlight
   3. FooterSweepingLine: 2px glowing top border line sweeping left-to-right (4s loop)
   4. GiantNameReveal: Outlined "BARATH S." 14vw letter-by-letter reveal + hover fill & glow
   5. FooterScrollProgressButton: SVG progress ring for back-to-top button with bobbing arrow
   6. FooterLink: Animated draw underline for quick links
   7. PulsingLocationDot: 2s pulsing dot for the location badge
   8. StaggeredFooterText: Fade-up reveal for footer copy
========================================================================= */

/* -------------------------------------------------------------------------
   1. AMBIENT PARTICLES CANVAS (Theme Adaptive)
------------------------------------------------------------------------- */
export function FooterParticleCanvas({ className = '', theme = 'dark' }) {
  const canvasRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || typeof window === 'undefined') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 20 : 38;

    // Palette: dark mode (burgundy/crimson) vs light mode (terracotta/rose gold)
    const colors =
      theme === 'light'
        ? ['#C97262', '#B55242', '#E18E7E', '#A84C3C']
        : ['#6D001A', '#A31535', '#E0506B', '#F2A99B'];

    const baseAlpha = theme === 'light' ? 0.28 : 0.45;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.8,
      speedY: Math.random() * 0.32 + 0.15,
      driftX: (Math.random() - 0.5) * 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * baseAlpha + 0.15,
      phase: Math.random() * Math.PI * 2,
    }));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.phase += 0.02;
        p.y -= p.speedY;
        p.x += Math.sin(p.phase) * p.driftX;

        // Wrap around when particle floats above top
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = theme === 'light' ? 2 : 4;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [reducedMotion, theme]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
}

/* -------------------------------------------------------------------------
   2. CURSOR SPOTLIGHT (380px radial glow following mouse)
------------------------------------------------------------------------- */
export function FooterCursorSpotlight({ containerRef, theme = 'dark' }) {
  const [mousePos, setMousePos] = useState({ x: -400, y: -400 });
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || typeof window === 'undefined') return;
    if (window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches) return;

    const el = containerRef?.current;
    if (!el) return;

    let targetX = -400;
    let targetY = -400;
    let currentX = -400;
    let currentY = -400;
    let rafId;

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      setIsHovered(true);
    };

    const onMouseLeave = () => {
      setIsHovered(false);
    };

    // Smooth lag / lerp interpolation
    const loop = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setMousePos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(loop);
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);
    rafId = requestAnimationFrame(loop);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [containerRef, reducedMotion]);

  if (reducedMotion || !isHovered) return null;

  const spotlightBg =
    theme === 'light'
      ? `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 114, 98, 0.22), rgba(225, 142, 126, 0.06) 45%, transparent 75%)`
      : `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(109, 0, 26, 0.45), rgba(224, 80, 107, 0.12) 45%, transparent 75%)`;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
      style={{ background: spotlightBg }}
    />
  );
}

/* -------------------------------------------------------------------------
   3. SWEEPING TOP BORDER (2px glowing line looping left to right in 4s)
------------------------------------------------------------------------- */
export function FooterSweepingLine({ theme = 'dark' }) {
  const reducedMotion = useReducedMotion();
  const trackBg = theme === 'light' ? 'rgba(201, 114, 98, 0.12)' : 'rgba(255, 255, 255, 0.05)';
  const beamGradient =
    theme === 'light'
      ? 'from-transparent via-[#C97262] to-transparent shadow-[0_0_10px_#C97262]'
      : 'from-transparent via-[#E0506B] to-transparent shadow-[0_0_12px_#E0506B]';

  return (
    <div
      className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none z-10"
      style={{ backgroundColor: trackBg }}
    >
      {!reducedMotion && (
        <motion.div
          aria-hidden="true"
          initial={{ x: '-100%' }}
          animate={{ x: '400%' }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'linear',
          }}
          className={`w-1/3 h-full bg-gradient-to-r ${beamGradient}`}
        />
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------
   4. GIANT NAME REVEAL ("BARATH S.")
   Letter-by-letter reveal rising up from mask (60ms stagger)
   Hover: fills with accent color, soft glow, and lifts 8px.
------------------------------------------------------------------------- */
export function GiantNameReveal({ text = "BARATH S.", className = "", theme = 'dark' }) {
  const reducedMotion = useReducedMotion();
  const letters = Array.from(text);

  const isLight = theme === 'light';
  const defaultStroke = isLight ? '1.5px rgba(28, 16, 26, 0.35)' : '1.5px rgba(255, 255, 255, 0.35)';
  const hoverColor = isLight ? '#C97262' : '#E0506B';
  const hoverGlow = isLight
    ? 'drop-shadow(0 0 16px rgba(201, 114, 98, 0.75))'
    : 'drop-shadow(0 0 18px rgba(224, 80, 107, 0.85))';

  return (
    <div
      className={`relative w-full overflow-hidden flex items-center justify-center py-1 select-none pointer-events-auto ${className}`}
      aria-label={text}
    >
      <div className="flex items-center justify-center flex-nowrap leading-none tracking-tight">
        {letters.map((char, idx) => {
          if (char === ' ') {
            return (
              <span key={idx} className="w-[0.35em] inline-block" aria-hidden="true">
                &nbsp;
              </span>
            );
          }

          if (reducedMotion) {
            return (
              <span
                key={idx}
                className="inline-block font-poppins font-black text-[13vw] sm:text-[14vw] lg:text-[135px] text-transparent tracking-tighter"
                style={{
                  WebkitTextStroke: defaultStroke,
                }}
              >
                {char}
              </span>
            );
          }

          return (
            <div key={idx} className="overflow-hidden inline-block py-1">
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.9,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1], // power3.out equivalent
                }}
                whileHover={{
                  y: -8,
                  color: hoverColor,
                  WebkitTextStrokeColor: hoverColor,
                  filter: hoverGlow,
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                style={{
                  WebkitTextStroke: defaultStroke,
                  color: 'transparent',
                }}
                className="footer-giant-name inline-block font-poppins font-black text-[13vw] sm:text-[14vw] lg:text-[135px] cursor-pointer transition-colors duration-300 leading-none tracking-tighter"
              >
                {char}
              </motion.span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   5. BACK-TO-TOP BUTTON WITH SVG SCROLL PROGRESS RING
------------------------------------------------------------------------- */
export function FooterScrollProgressButton({ onClick, theme = 'dark' }) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    restDelta: 0.001,
  });

  const [progressVal, setProgressVal] = useState(0);

  useEffect(() => {
    return smoothProgress.on('change', (latest) => {
      setProgressVal(latest);
    });
  }, [smoothProgress]);

  const radius = 19;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progressVal * circumference;

  const isLight = theme === 'light';
  const trackStroke = isLight ? 'rgba(201, 114, 98, 0.18)' : 'rgba(225, 142, 126, 0.15)';
  const activeStroke = isLight ? '#C97262' : '#E0506B';

  const buttonClasses = isLight
    ? 'bg-white hover:bg-[#FAF5F0] text-[#1C101A] border-[#C97262]/35 shadow-md hover:shadow-[0_0_18px_rgba(201,114,98,0.35)]'
    : 'bg-[#1C101A] hover:bg-[#251422] text-[#D8C6C0] hover:text-[#E0506B] border-[#E18E7E]/30 shadow-md hover:shadow-[0_0_20px_rgba(224,80,107,0.45)]';

  const arrowClasses = isLight
    ? 'text-[#1C101A] group-hover:text-[#C97262]'
    : 'text-[#FFF6F2] group-hover:text-[#E0506B]';

  return (
    <Magnetic strength={0.35} maxDistance={60}>
      <motion.button
        onClick={onClick}
        whileHover={!reducedMotion ? { scale: 1.12 } : {}}
        whileTap={{ scale: 0.94 }}
        title="Scroll back to top • Click to navigate"
        aria-label="Scroll back to top"
        className={`relative w-11 h-11 rounded-full border flex items-center justify-center transition-all cursor-pointer group ${buttonClasses}`}
      >
        {/* SVG Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke={trackStroke}
            strokeWidth="2.5"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke={activeStroke}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-75"
          />
        </svg>

        {/* Gently Bobbing Arrow */}
        <motion.div
          animate={!reducedMotion ? { y: [0, -4, 0] } : {}}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: 'easeInOut',
          }}
          className="relative z-10"
        >
          <ArrowUp className={`w-4 h-4 transition-transform ${arrowClasses}`} />
        </motion.div>
      </motion.button>
    </Magnetic>
  );
}

/* -------------------------------------------------------------------------
   6. PULSING LOCATION DOT (2s pulse beside MapPin)
------------------------------------------------------------------------- */
export function PulsingLocationDot({ theme = 'dark' }) {
  const dotColor = theme === 'light' ? 'bg-[#C97262]' : 'bg-[#E0506B]';
  return (
    <span className="relative flex h-2 w-2">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75`} />
      <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`} />
    </span>
  );
}

/* -------------------------------------------------------------------------
   7. FOOTER LINK UNDERLINE DRAW INTERACTION
------------------------------------------------------------------------- */
export function FooterLink({ href, children, isExternal = true, theme = 'dark' }) {
  const isLight = theme === 'light';
  const textClass = isLight
    ? 'text-[#4A3240] hover:text-[#1C101A]'
    : 'text-[#D8C6C0] hover:text-[#FFF6F2]';

  const underlineGradient = isLight
    ? 'from-[#8E3F32] via-[#C97262] to-[#E18E7E]'
    : 'from-[#6D001A] via-[#E0506B] to-[#F2A99B]';

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`relative group/link transition-colors py-1 cursor-pointer font-medium ${textClass}`}
    >
      <span>{children}</span>
      <span
        className={`absolute left-0 bottom-0 w-full h-[1.5px] bg-gradient-to-r ${underlineGradient} scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left`}
      />
    </a>
  );
}

/* -------------------------------------------------------------------------
   8. STAGGERED FOOTER TEXT REVEAL
------------------------------------------------------------------------- */
export function StaggeredFooterText({ children, delay = 0.5, className = '' }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
