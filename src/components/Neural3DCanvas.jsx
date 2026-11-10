import React, { useRef, useEffect } from 'react';

export default function Neural3DCanvas({ theme = 'dark' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const isLight = theme === 'light';

    class CelestialNode {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = (Math.random() - 0.5) * width * 1.3;
        this.y = (Math.random() - 0.5) * height * 1.3;
        this.z = initial ? Math.random() * 800 - 400 : 400;

        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.vz = (Math.random() - 0.5) * 0.4;

        this.baseRadius = Math.random() * 1.6 + 1.0;
        this.color = isLight
          ? (Math.random() > 0.4 ? '#C97262' : '#A34839')
          : (Math.random() > 0.4 ? '#E18E7E' : '#F2A99B');
      }

      update(mouseDeltaX, mouseDeltaY) {
        this.x += this.vx + mouseDeltaX * 0.03;
        this.y += this.vy + mouseDeltaY * 0.03;
        this.z += this.vz;

        const boundX = (width * 1.3) / 2;
        const boundY = (height * 1.3) / 2;

        if (this.x < -boundX || this.x > boundX) this.vx *= -1;
        if (this.y < -boundY || this.y > boundY) this.vy *= -1;
        if (this.z < -400 || this.z > 400) this.vz *= -1;
      }
    }

    const nodeCount = Math.min(65, Math.floor((width * height) / 22000));
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
      targetTiltX = (mouseY / height) * 0.2;
      targetTiltY = (mouseX / width) * 0.2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let lastMouseX = 0;
    let lastMouseY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      tiltX += (targetTiltX - tiltX) * 0.05;
      tiltY += (targetTiltY - tiltY) * 0.05;

      const mouseDeltaX = mouseX - lastMouseX;
      const mouseDeltaY = mouseY - lastMouseY;
      lastMouseX = mouseX;
      lastMouseY = mouseY;

      const fov = 420;
      const cx = width / 2;
      const cy = height / 2;

      const cosY = Math.cos(tiltY);
      const sinY = Math.sin(tiltY);
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);

      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update(mouseDeltaX * 0.1, mouseDeltaY * 0.1);

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
          color: p.color,
          radius: p.baseRadius * scale
        });
      }

      // Fine Rose Gold synaptic connections
      const maxDist = 120;
      const strokeRgb = isLight ? '163, 72, 57' : '225, 142, 126';

      for (let a = 0; a < projected.length; a++) {
        for (let b = a + 1; b < projected.length; b++) {
          const pa = projected[a];
          const pb = projected[b];

          const dx = pa.x - pb.x;
          const dy = pa.y - pb.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isLight ? 0.22 : 0.18) * Math.min(pa.scale, pb.scale);
            ctx.strokeStyle = `rgba(${strokeRgb}, ${alpha})`;
            ctx.lineWidth = 0.6 * pa.scale;
            ctx.beginPath();
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const alpha = Math.max(0.1, Math.min(0.7, p.scale));

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${strokeRgb}, ${alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-40 transition-opacity duration-500"
    />
  );
}
