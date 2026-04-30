'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

const COLORS = ['#8b5cf6', '#a78bfa', '#06b6d4', '#7c3aed', '#818cf8'];
const PARTICLE_COUNT = 90;
const CONNECTION_DIST = 150;
const TRIANGLE_DIST = 120;
const MOUSE_RADIUS = 200;

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -1000, y: -1000, clicked: false, ripple: 0 });
  const animRef = useRef<number>(0);
  const dims = useRef({ w: 0, h: 0 });

  const initParticles = useCallback((w: number, h: number) => {
    const arr: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
    particles.current = arr;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      dims.current = { w: rect.width, h: rect.height };
      if (particles.current.length === 0) {
        initParticles(rect.width, rect.height);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    /* ---- Mouse handlers ---- */
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    const onClick = () => {
      mouse.current.clicked = true;
      mouse.current.ripple = 1;
    };
    const onLeave = () => {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
    };

    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('click', onClick);
    canvas.addEventListener('mouseleave', onLeave);

    /* ---- Animation loop ---- */
    const animate = () => {
      const { w, h } = dims.current;
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const pts = particles.current;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      // Update particles
      for (const p of pts) {
        // Mouse interaction — attract gently on hover
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;

          if (mouse.current.clicked && mouse.current.ripple > 0.5) {
            // Click → push away with burst
            p.vx -= (dx / dist) * force * 3;
            p.vy -= (dy / dist) * force * 3;
          } else {
            // Hover → gentle attract
            p.vx += (dx / dist) * force * 0.02;
            p.vy += (dy / dist) * force * 0.02;
          }
        }

        // Damping
        p.vx *= 0.995;
        p.vy *= 0.995;

        // Clamp speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 2) {
          p.vx = (p.vx / speed) * 2;
          p.vy = (p.vy / speed) * 2;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
      }

      // Decay ripple
      if (mouse.current.ripple > 0) {
        mouse.current.ripple -= 0.03;
        if (mouse.current.ripple <= 0) {
          mouse.current.ripple = 0;
          mouse.current.clicked = false;
        }
      }

      // Draw triangles (filled, very subtle)
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d1 = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d1 > TRIANGLE_DIST) continue;

          for (let k = j + 1; k < pts.length; k++) {
            const d2 = Math.hypot(pts[i].x - pts[k].x, pts[i].y - pts[k].y);
            const d3 = Math.hypot(pts[j].x - pts[k].x, pts[j].y - pts[k].y);

            if (d2 < TRIANGLE_DIST && d3 < TRIANGLE_DIST) {
              const avgDist = (d1 + d2 + d3) / 3;
              const alpha = (1 - avgDist / TRIANGLE_DIST) * 0.04;

              ctx.beginPath();
              ctx.moveTo(pts[i].x, pts[i].y);
              ctx.lineTo(pts[j].x, pts[j].y);
              ctx.lineTo(pts[k].x, pts[k].y);
              ctx.closePath();
              ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`;
              ctx.fill();
            }
          }
        }
      }

      // Draw connecting lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx2 = pts[i].x - pts[j].x;
          const dy2 = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (d < CONNECTION_DIST) {
            const alpha = (1 - d / CONNECTION_DIST) * 0.35;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles (dots with glow)
      for (const p of pts) {
        // Glow
        ctx.save();
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.restore();

        // Bright core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.globalAlpha = p.opacity * 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Mouse ripple ring on click
      if (mouse.current.ripple > 0) {
        const r = (1 - mouse.current.ripple) * MOUSE_RADIUS * 1.5;
        ctx.beginPath();
        ctx.arc(mx, my, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${mouse.current.ripple * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Subtle mouse glow
      if (mx > 0 && my > 0) {
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 100);
        grad.addColorStop(0, 'rgba(139, 92, 246, 0.06)');
        grad.addColorStop(1, 'rgba(139, 92, 246, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(mx - 100, my - 100, 200, 200);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('click', onClick);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        borderRadius: '16px',
      }}
    />
  );
}