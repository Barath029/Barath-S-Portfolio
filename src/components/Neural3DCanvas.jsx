import React, { useRef, useEffect, useState } from 'react';

export default function Neural3DCanvas({ theme = 'dark' }) {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });

    const isLight = theme === 'light';

    class CelestialNode {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = (Math.random() - 0.5) * width * 1.2;
        this.y = (Math.random() - 0.5) * height * 1.2;
        this.z = initial ? Math.random() * 600 - 300 : 300;

        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.vz = (Math.random() - 0.5) * 0.3;

        this.baseRadius = Math.random() * 1.4 + 0.8;
      }

      update(mouseDeltaX, mouseDeltaY) {
        this.x += this.vx + mouseDeltaX * 0.02;
        this.y += this.vy + mouseDeltaY * 0.02;
        this.z += this.vz;

        const boundX = (width * 1.2) / 2;
        const boundY = (height * 1.2) / 2;

        if (this.x < -boundX || this.x > boundX) this.vx *= -1;
        if (this.y < -boundY || this.y > boundY) this.vy *= -1;
        if (this.z < -300 || this.z > 300) this.vz *= -1;
      }
    }

    const nodeCount = Math.min(38, Math.floor((width * height) / 32000));
    const particles = Array.from({ length: nodeCount }, () => new CelestialNode());

    let mouseX = 0;
    let mouseY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let tiltX = 0;
    let tiltY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX - width / 2;
      mouseY = e.clientY - height / 2;
      targetTiltX = (mouseY / height) * 0.15;
      targetTiltY = (mouseX / width) * 0.15;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let lastMouseX = 0;
    let lastMouseY = 0;
    let isPaused = false;

    const handleVisibilityChange = () => {
      isPaused = document.hidden;
      if (!isPaused) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const strokeRgb = isLight ? '163, 72, 57' : '225, 142, 126';
    const maxDist = 110;
    const fov = 400;

    const render = () => {
      if (isPaused) return;

      ctx.clearRect(0, 0, width, height);

      tiltX += (targetTiltX - tiltX) * 0.05;
      tiltY += (targetTiltY - tiltY) * 0.05;

      const mouseDeltaX = mouseX - lastMouseX;
      const mouseDeltaY = mouseY - lastMouseY;
      lastMouseX = mouseX;
      lastMouseY = mouseY;

      const cx = width / 2;
      const cy = height / 2;

      const cosY = Math.cos(tiltY);
      const sinY = Math.sin(tiltY);
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);

      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update(mouseDeltaX * 0.08, mouseDeltaY * 0.08);

        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        const y1 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        const distance = fov + z2;
        if (distance <= 0) continue;

        const scale = fov / distance;
        const x2d = x1 * scale + cx;
        const y2d = y1 * scale + cy;

        projected.push({
          x: x2d,
          y: y2d,
          scale,
          radius: p.baseRadius * scale
        });
      }

      // Synaptic connections with optimized distance checks
      for (let a = 0; a < projected.length; a++) {
        const pa = projected[a];
        for (let b = a + 1; b < projected.length; b++) {
          const pb = projected[b];
          const dx = pa.x - pb.x;
          if (Math.abs(dx) > maxDist) continue;
          const dy = pa.y - pb.y;
          if (Math.abs(dy) > maxDist) continue;

          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isLight ? 0.2 : 0.16) * Math.min(pa.scale, pb.scale);
            ctx.strokeStyle = `rgba(${strokeRgb}, ${alpha})`;
            ctx.lineWidth = 0.5 * pa.scale;
            ctx.beginPath();
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const alpha = Math.max(0.1, Math.min(0.65, p.scale));
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${strokeRgb}, ${alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, isMobile]);

  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-[#E18E7E]/10 rounded-full blur-[90px]" />
        <div className="absolute top-2/3 left-1/4 w-[260px] h-[260px] bg-[#7B2E3D]/10 rounded-full blur-[80px]" />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-40 transition-opacity duration-500"
    />
  );
}
