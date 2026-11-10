import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 22, stiffness: 280, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [wobbleRotate, setWobbleRotate] = useState(0);

  useEffect(() => {
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

      const tilt = Math.max(-20, Math.min(20, deltaX * 1.2));
      setWobbleRotate(tilt);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWobbleRotate(0);
      }, 100);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target.closest('button, a, input, select, textarea, [data-interactive="true"], .cursor-pointer');
      if (target) {
        setIsHovered(true);
        const customText = target.getAttribute('data-cursor-text');
        if (customText) {
          setCursorText(customText);
        } else if (target.tagName.toLowerCase() === 'a') {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
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
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer Springy Ring */}
      <motion.div
        className="absolute top-0 left-0 rounded-full border flex items-center justify-center pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 48 : 34,
          height: isHovered ? 48 : 34,
          scale: isClicking ? 0.75 : isHovered ? 1.25 : 1,
          rotate: wobbleRotate,
          borderColor: isHovered ? '#F2A99B' : 'rgba(225, 142, 126, 0.45)',
          backgroundColor: isHovered ? 'rgba(225, 142, 126, 0.12)' : 'rgba(225, 142, 126, 0.03)',
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
          mass: 0.5
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-[10px] text-[#F2A99B] font-bold select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Snappy Laser Dot */}
      <motion.div
        className="absolute top-0 left-0 w-2 h-2 rounded-full bg-[#E18E7E]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 1.8 : isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? '#FFF6F2' : '#E18E7E'
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 450
        }}
      />
    </div>
  );
}
