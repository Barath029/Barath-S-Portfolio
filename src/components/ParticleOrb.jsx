import React, { useRef, useEffect } from 'react';

export default function ParticleOrb() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate 3D sphere particles
    const particleCount = 280;
    const radius = Math.min(width, height) * 0.32;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = Math.sqrt(Math.PI * particleCount) * theta;

      particles.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
        baseX: radius * Math.sin(theta) * Math.cos(phi),
        baseY: radius * Math.sin(theta) * Math.sin(phi),
        baseZ: radius * Math.cos(theta),
        color: Math.random() > 0.45 ? '#00F5D4' : '#CCFF00',
        size: Math.random() * 2 + 1.2
      });
    }

    let rotX = 0;
    let rotY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) / width - 0.5;
      const mouseY = (e.clientY - rect.top) / height - 0.5;
      targetRotY = mouseX * 2.5;
      targetRotX = -mouseY * 2.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const fov = 350;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth rotation dampening
      rotX += (targetRotX - rotX) * 0.05 + 0.002;
      rotY += (targetRotY - rotY) * 0.05 + 0.005;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const cx = width / 2;
      const cy = height / 2;

      // Draw faint orbital ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotY * 0.5);
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 1.2, radius * 0.35, rotX * 0.4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 245, 212, 0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 1.35, radius * 0.5, -rotX * 0.3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(204, 255, 0, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Sort particles by depth for correct 3D occlusion
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 3D rotation matrix
        const y1 = p.baseY * cosX - p.baseZ * sinX;
        const z1 = p.baseY * sinX + p.baseZ * cosX;

        const x2 = p.baseX * cosY + z1 * sinY;
        const z2 = -p.baseX * sinY + z1 * cosY;

        // Perspective projection
        const scale = fov / (fov + z2 + radius * 0.3);
        const x2d = x2 * scale + cx;
        const y2d = y1 * scale + cy;

        projected.push({
          x: x2d,
          y: y2d,
          scale,
          z: z2,
          color: p.color,
          size: p.size * scale
        });
      }

      projected.sort((a, b) => b.z - a.z);

      // Render nodes & connections
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const alpha = Math.max(0.15, Math.min(1, (p.z + radius) / (2 * radius)));

        // Subtle glow halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = p.color === '#00F5D4' 
          ? `rgba(0, 245, 212, ${alpha * 0.25})`
          : `rgba(204, 255, 0, ${alpha * 0.2})`;
        ctx.fill();

        // Node center
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, p.size), 0, Math.PI * 2);
        ctx.fillStyle = p.color === '#00F5D4'
          ? `rgba(0, 245, 212, ${alpha})`
          : `rgba(204, 255, 0, ${alpha})`;
        ctx.fill();

        // Selective connective wireframes
        if (i % 6 === 0 && i > 0) {
          const prev = projected[i - 1];
          const dist = Math.hypot(p.x - prev.x, p.y - prev.y);
          if (dist < 45) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(prev.x, prev.y);
            ctx.strokeStyle = `rgba(0, 245, 212, ${alpha * 0.15})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full relative flex items-center justify-center pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

