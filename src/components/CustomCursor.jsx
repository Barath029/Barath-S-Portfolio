import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');

  // Raw mouse coordinates for zero-latency pointer precision
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing cyber particles & glow
  const trailSpring = { damping: 24, stiffness: 260, mass: 0.5 };
  const trailX = useSpring(mouseX, trailSpring);
  const trailY = useSpring(mouseY, trailSpring);

  const trail2Spring = { damping: 28, stiffness: 200, mass: 0.8 };
  const trail2X = useSpring(mouseX, trail2Spring);
  const trail2Y = useSpring(mouseY, trail2Spring);

  // Subtle tilt on fast movement
  const [tiltAngle, setTiltAngle] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let timeoutId;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const deltaX = e.clientX - lastX;
      lastX = e.clientX;
      lastY = e.clientY;

      const tilt = Math.max(-12, Math.min(12, deltaX * 0.8));
      setTiltAngle(tilt);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setTiltAngle(0);
      }, 90);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target.closest('button, a, input, select, textarea, [data-interactive="true"], .cursor-pointer');
      if (target) {
        setIsHovered(true);
        const customText = target.getAttribute('data-cursor-text');
        setCursorText(customText || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      clearTimeout(timeoutId);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;
  if (typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none">
      
      {/* =====================================================================
          1. TRAILING CYBER PARTICLES / SPARK DATA TRAIL (Spring lagged behind)
      ===================================================================== */}
      <motion.div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          x: trailX,
          y: trailY,
        }}
      >
        {/* Particle 1 */}
        <div className="absolute top-7 left-6 w-1 h-1 rounded-full bg-[#E0506B] opacity-70 shadow-[0_0_8px_#E0506B]" />
        {/* Particle 2 */}
        <div className="absolute top-9 left-4 w-1.5 h-1.5 rounded-full bg-[#FF5A4D] opacity-60 shadow-[0_0_10px_#FF5A4D]" />
        {/* Circuit micro-trace bit */}
        <div className="absolute top-11 left-7 w-2 h-0.5 bg-[#F2A99B] opacity-50 rotate-45" />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          x: trail2X,
          y: trail2Y,
        }}
      >
        {/* Deeper particle 3 */}
        <div className="absolute top-12 left-8 w-1 h-1 rounded-full bg-[#6D001A] opacity-80 shadow-[0_0_8px_#6D001A]" />
        <div className="absolute top-10 left-10 w-0.5 h-0.5 rounded-full bg-[#FFF6F2] opacity-75" />
      </motion.div>

      {/* =====================================================================
          2. MAIN CYBER ARROW POINTER + CROSSHAIR RETICLE (Zero Latency at mouseX/Y)
      ===================================================================== */}
      <motion.div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isClicking ? 0.88 : isHovered ? 1.18 : 1,
          rotate: tiltAngle,
        }}
        transition={{
          scale: { type: 'spring', damping: 20, stiffness: 400 },
          rotate: { duration: 0.12 }
        }}
      >
        {/* SVG Cyber Arrow Pointer styled to match Portfolio Palette */}
        <svg
          width="42"
          height="42"
          viewBox="-8 -8 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <defs>
            {/* Neon Glow Filter */}
            <filter id="cyberGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Linear Gradient for Arrow Body */}
            <linearGradient id="cyberArrowFill" x1="0" y1="0" x2="26" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E0506B" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#6D001A" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#200305" stopOpacity="0.95" />
            </linearGradient>

            {/* Stroke Neon Gradient */}
            <linearGradient id="cyberStrokeGrad" x1="0" y1="0" x2="26" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF6F2" />
              <stop offset="35%" stopColor="#FF5A4D" />
              <stop offset="85%" stopColor="#E0506B" />
              <stop offset="100%" stopColor="#6D001A" />
            </linearGradient>
          </defs>

          {/* ===============================================================
              CROSSHAIR TARGETING RETICLE (Centered at Tip: (0, 0))
          =============================================================== */}
          <g className={`transition-all duration-300 ${isHovered ? 'opacity-100 scale-125' : 'opacity-85'}`}>
            {/* Outer Target Ring */}
            <circle
              cx="0"
              cy="0"
              r="6.5"
              stroke="#FF5A4D"
              strokeWidth="1.2"
              strokeDasharray={isHovered ? "3 2" : "none"}
              className={isHovered ? "animate-spin" : ""}
              style={{ transformOrigin: "0px 0px" }}
              filter="url(#cyberGlow)"
            />

            {/* Inner Precision Target Pip */}
            <circle
              cx="0"
              cy="0"
              r="1.8"
              fill="#FFF6F2"
              className={isClicking ? "scale-150" : ""}
            />

            {/* Crosshair Ticks: Top, Left, Right, Bottom */}
            <line x1="0" y1="-8.5" x2="0" y2="-4.5" stroke="#F2A99B" strokeWidth="1.2" />
            <line x1="0" y1="4.5" x2="0" y2="8.5" stroke="#F2A99B" strokeWidth="1.2" />
            <line x1="-8.5" y1="0" x2="-4.5" y2="0" stroke="#F2A99B" strokeWidth="1.2" />
            <line x1="4.5" y1="0" x2="8.5" y2="0" stroke="#F2A99B" strokeWidth="1.2" />
          </g>

          {/* ===============================================================
              CYBER POINTER ARROW BODY (Tip points exactly at (0, 0))
          =============================================================== */}
          <g filter="url(#cyberGlow)">
            {/* 3D Under-Bevel / Drop-Shadow Line */}
            <path
              d="M 1 1 L 23 15 L 14 16 L 20 28 L 15 30 L 9 18 L 3 24 Z"
              fill="rgba(109, 0, 26, 0.4)"
              transform="translate(1.5, 1.5)"
            />

            {/* Outer Arrow Solid Polygon */}
            <path
              d="M 0 0 L 22 14 L 13 15 L 19 27 L 14 29 L 8 17 L 2 23 Z"
              fill="url(#cyberArrowFill)"
              stroke="url(#cyberStrokeGrad)"
              strokeWidth="1.6"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* Internal Circuit Board Traces & Nodes */}
            {/* Circuit Line 1 */}
            <path
              d="M 5 7 L 11 11 L 11 14"
              stroke="#FFF6F2"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.85"
            />
            {/* Circuit Node 1 */}
            <circle cx="11" cy="14" r="1.2" fill="#FF5A4D" />

            {/* Circuit Line 2 along tail */}
            <path
              d="M 9 16 L 12 21 L 15 24"
              stroke="#F2A99B"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.75"
            />
            {/* Circuit Node 2 */}
            <circle cx="15" cy="24" r="1" fill="#FFF6F2" />

            {/* Highlight Edge Glint */}
            <path
              d="M 1 1 L 19 12"
              stroke="#FFFFFF"
              strokeWidth="0.9"
              strokeLinecap="round"
              opacity="0.65"
            />
          </g>
        </svg>

        {/* Hover Action Badge Label (e.g. "VIEW", "DRAG") */}
        {cursorText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 26, y: -4 }}
            animate={{ opacity: 1, scale: 1, x: 26, y: -4 }}
            className="px-2 py-0.5 rounded-md bg-[#130911]/90 border border-[#E0506B] shadow-[0_0_12px_rgba(224,80,107,0.6)] backdrop-blur-md pointer-events-none"
          >
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#FFF6F2] uppercase whitespace-nowrap">
              {cursorText}
            </span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
