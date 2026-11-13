import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';
import Lenis from 'lenis';

/* =========================================================================
   MODULAR ANIMATION THEMES CONFIGURATION
   Toggle any theme ON (true) or OFF (false) section by section or globally.
========================================================================= */
export const ANIMATION_CONFIG = {
  cinematicReveal: true,     // Theme 1: blur-to-sharp + scale 1.1 -> 1
  scrollStorytelling: true,  // Theme 2: fade up 40px + 0.12s stagger + timeline draw
  depthParallax: true,       // Theme 3: hero depth & mouse parallax
  glassGlow: true,           // Theme 4: soft burgundy cursor spotlight + 6px lift
  microInteractions: true,   // Theme 5: magnetic buttons, 3D tilt, chip scale 1.05
  dataInMotion: true,        // Theme 6: number count-up from 0 over 2s
  kineticTypography: true,   // Theme 7: word-by-word reveal + drawn underlines
  smoothPageFlow: true,      // Theme 8: Lenis smooth scroll + burgundy progress bar
  imageShowcase: true,       // Theme 9: image zoom 1.05 + burgundy overlay + lightbox
  ambientLife: true,         // Theme 10: 8px float + pulsing dots + faint film grain
};

export const AnimationContext = createContext(ANIMATION_CONFIG);
export const useAnimations = () => useContext(AnimationContext);

/* =========================================================================
   THEME 8: SMOOTH PAGE FLOW (Lenis Smooth Scrolling Provider)
========================================================================= */
export function SmoothScrollProvider({ children }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ANIMATION_CONFIG.smoothPageFlow || reducedMotion) return;
    if (typeof window === 'undefined') return;

    let lenis;
    try {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
      });

      let animationFrameId;
      function raf(time) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }
      animationFrameId = requestAnimationFrame(raf);

      // Handle in-page anchor clicks with Lenis smooth scroll
      const handleAnchorClick = (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl, { offset: -60, duration: 1.2 });
          }
        }
      };
      document.addEventListener('click', handleAnchorClick);

      return () => {
        cancelAnimationFrame(animationFrameId);
        document.removeEventListener('click', handleAnchorClick);
        lenis.destroy();
      };
    } catch (err) {
      console.warn('Lenis smooth scroll failed to initialize:', err);
    }
  }, [reducedMotion]);

  return <>{children}</>;
}

/* =========================================================================
   THEME 8: SCROLL PROGRESS BAR (Thin Burgundy Top Bar)
========================================================================= */
export function ScrollProgressBar() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    restDelta: 0.001,
  });

  if (!ANIMATION_CONFIG.smoothPageFlow || reducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#6D001A] via-[#E0506B] to-[#ff5a4d] z-[9999] origin-left pointer-events-none shadow-[0_0_12px_rgba(224,80,107,0.7)]"
      style={{ scaleX }}
    />
  );
}

/* =========================================================================
   THEME 10: FAINT FILM GRAIN OVERLAY
========================================================================= */
export function FilmGrainOverlay() {
  if (!ANIMATION_CONFIG.ambientLife) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay z-[9998]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grainNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grainNoise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

/* =========================================================================
   THEME 1: CINEMATIC REVEAL (Scale 1.1 -> 1, Blur 12px -> 0, Fade In)
========================================================================= */
export function CinematicHeading({ children, className = '', as = 'h2', delay = 0 }) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as] || motion.h2;

  if (!ANIMATION_CONFIG.cinematicReveal || reducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      initial={{ scale: 1.08, filter: 'blur(10px)', opacity: 0 }}
      whileInView={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.16, 1, 0.3, 1], // power3.out equivalent
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

/* =========================================================================
   THEME 7: KINETIC TYPOGRAPHY (Word-by-word reveal & drawn underline)
========================================================================= */
export function KineticText({ text, className = '', delay = 0 }) {
  const reducedMotion = useReducedMotion();

  if (!ANIMATION_CONFIG.kineticTypography || reducedMotion || typeof text !== 'string') {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em] align-top">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.035,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function KineticUnderline({ children, className = '', delay = 0.3 }) {
  const reducedMotion = useReducedMotion();

  if (!ANIMATION_CONFIG.kineticTypography || reducedMotion) {
    return <span className={`border-b border-[#E0506B]/50 ${className}`}>{children}</span>;
  }

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#6D001A] to-[#E0506B] origin-left pointer-events-none"
      />
    </span>
  );
}

/* =========================================================================
   THEME 2: SCROLL STORYTELLING (Fade up 40px at 85% viewport + Stagger)
========================================================================= */
export function ScrollSection({ children, className = '', id }) {
  const reducedMotion = useReducedMotion();

  if (!ANIMATION_CONFIG.scrollStorytelling || reducedMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }} // Trigger around top 85-90%
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function StaggerContainer({ children, className = '', delay = 0 }) {
  const reducedMotion = useReducedMotion();

  if (!ANIMATION_CONFIG.scrollStorytelling || reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  const reducedMotion = useReducedMotion();

  if (!ANIMATION_CONFIG.scrollStorytelling || reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

/* =========================================================================
   THEME 4 & 5: GLASS & GLOW + 3D TILT + 6PX LIFT
   Soft burgundy spotlight follows cursor + border brightens + 6deg tilt
========================================================================= */
export function GlassGlowCard({
  children,
  className = '',
  onClick,
  maxTilt = 5,
  lift = 6,
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = useReducedMotion();

  // 3D Tilt Motion Values
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 25 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 25 });

  const handleMouseMove = (e) => {
    if (reducedMotion || (typeof window !== 'undefined' && (window.innerWidth < 1024 || window.matchMedia('(pointer: coarse)').matches))) {
      return;
    }
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    if (ANIMATION_CONFIG.microInteractions) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltY = ((x - centerX) / centerX) * maxTilt;
      const tiltX = -((y - centerY) / centerY) * maxTilt;
      rotateX.set(tiltX);
      rotateY.set(tiltY);
    }
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  const enabled = ANIMATION_CONFIG.glassGlow && !reducedMotion;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={
        enabled
          ? {
              perspective: 1000,
              rotateX: springX,
              rotateY: springY,
              transformStyle: 'preserve-3d',
            }
          : {}
      }
      whileHover={enabled ? { y: -lift } : {}}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className={`relative overflow-hidden transition-all duration-300 border hover:border-[#E0506B]/80 hover:shadow-[0_16px_35px_rgba(109,0,26,0.35)] ${className}`}
    >
      {/* Soft Burgundy Spotlight Following Cursor */}
      {enabled && isHovered && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(340px circle at ${mousePos.x}px ${mousePos.y}px, rgba(109, 0, 26, 0.42), rgba(224, 80, 107, 0.12) 40%, transparent 80%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

/* =========================================================================
   THEME 5: MICRO-INTERACTIONS (Magnetic Button Pull within 60px)
========================================================================= */
export function Magnetic({ children, className = '', strength = 0.28, maxDistance = 60 }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ANIMATION_CONFIG.microInteractions || reducedMotion) return;
    if (typeof window !== 'undefined' && (window.innerWidth < 1024 || window.matchMedia('(pointer: coarse)').matches)) return;
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.hypot(distX, distY);

    if (distance < maxDistance) {
      x.set(distX * strength);
      y.set(distY * strength);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (!ANIMATION_CONFIG.microInteractions || reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================================
   THEME 6: DATA IN MOTION (Numbers count up from 0 over 2s when visible)
========================================================================= */
export function CountUpNumber({ value, prefix = '', suffix = '', decimals = 0 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();

  const numericTarget = typeof value === 'number' ? value : parseFloat(value) || 0;
  const inferredDecimals = decimals || (String(value).includes('.') ? String(value).split('.')[1].length : 0);

  useEffect(() => {
    if (!ANIMATION_CONFIG.dataInMotion || reducedMotion) {
      setDisplayValue(numericTarget);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTimestamp = null;
          const duration = 2000; // 2.0s duration per prompt

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = easeOut * numericTarget;
            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(numericTarget);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericTarget, hasAnimated, reducedMotion]);

  const formatted = inferredDecimals > 0
    ? displayValue.toFixed(inferredDecimals)
    : Math.round(displayValue);

  return (
    <span ref={ref} className="inline-block tabular-nums font-inherit">
      {prefix}{formatted}{suffix}
    </span>
  );
}

/* =========================================================================
   THEME 2: EDUCATION TIMELINE DRAW LINE & PULSING DOTS
========================================================================= */
export function TimelineDrawLine({ className = '' }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'end 50%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001,
  });

  if (!ANIMATION_CONFIG.scrollStorytelling || reducedMotion) {
    return <div ref={ref} className={`w-0.5 bg-[#E0506B]/50 ${className}`} />;
  }

  return (
    <div ref={ref} className={`relative w-0.5 bg-[#251422] overflow-hidden ${className}`}>
      <motion.div
        style={{ scaleY }}
        className="absolute inset-x-0 top-0 bottom-0 w-full bg-gradient-to-b from-[#6D001A] via-[#E0506B] to-[#F2A99B] origin-top"
      />
    </div>
  );
}

/* =========================================================================
   THEME 10: AMBIENT PULSING DOT & 8PX SINE FLOAT
========================================================================= */
export function PulsingDot({ className = '', color = '#E0506B' }) {
  const reducedMotion = useReducedMotion();

  if (!ANIMATION_CONFIG.ambientLife || reducedMotion) {
    return <span className={`w-2.5 h-2.5 rounded-full inline-block ${className}`} style={{ backgroundColor: color }} />;
  }

  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <span
        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
        style={{ backgroundColor: color }}
      />
      <span
        className="relative inline-flex rounded-full h-2.5 w-2.5"
        style={{ backgroundColor: color }}
      />
    </span>
  );
}

export function AmbientFloat({ children, className = '', distance = 8, duration = 4 }) {
  const reducedMotion = useReducedMotion();

  if (!ANIMATION_CONFIG.ambientLife || reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{ y: [0, -distance, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

