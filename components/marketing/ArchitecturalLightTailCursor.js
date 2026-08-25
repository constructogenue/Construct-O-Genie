'use client';

import React, { useEffect, useRef } from 'react';

export default function ArchitecturalLightTailCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Only activate on desktop/laptop devices with fine pointer and no reduced motion preference
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = {
      x: -100,
      y: -100,
      targetX: -100,
      targetY: -100,
      vx: 0,
      vy: 0,
      isHovered: false,
      isPressed: false,
      isVisible: false,
      isIdle: true,
      lastMoveTime: Date.now(),
    };

    const trail = [];
    const maxTrailLength = 16;
    const particles = [];
    const maxParticles = 20;

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.lastMoveTime = Date.now();
      mouse.isIdle = false;

      if (!mouse.isVisible) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.isVisible = true;
      }

      const target = e.target;
      const interactive = target && (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer')
      );
      mouse.isHovered = !!interactive;

      const dist = Math.hypot(mouse.targetX - mouse.x, mouse.targetY - mouse.y);
      if (dist > 6 && particles.length < maxParticles) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 4,
          y: e.clientY + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2 + 1,
          alpha: 0.6,
          decay: Math.random() * 0.04 + 0.03,
        });
      }
    };

    const handleMouseDown = () => { mouse.isPressed = true; };
    const handleMouseUp = () => { mouse.isPressed = false; };
    const handleMouseLeave = () => { mouse.isVisible = false; };
    const handleMouseEnter = () => { mouse.isVisible = true; };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animId;
    let ringRadius = 4;
    let targetRingRadius = 4;

    const render = () => {
      // Idle optimization: after 3 seconds of no mouse movement and particles settled, sleep the frame loop
      if (Date.now() - mouse.lastMoveTime > 3000 && particles.length === 0 && Math.abs(mouse.vx) < 0.01) {
        mouse.isIdle = true;
      }

      ctx.clearRect(0, 0, width, height);

      if (mouse.isVisible) {
        const ease = 0.55;
        mouse.vx = (mouse.targetX - mouse.x) * ease;
        mouse.vy = (mouse.targetY - mouse.y) * ease;
        mouse.x += mouse.vx;
        mouse.y += mouse.vy;

        trail.unshift({ x: mouse.x, y: mouse.y });
        if (trail.length > maxTrailLength) {
          trail.pop();
        }

        // Luminous ribbon tail
        if (trail.length > 2) {
          for (let i = 0; i < trail.length - 1; i++) {
            const p1 = trail[i];
            const p2 = trail[i + 1];
            const progress = 1 - i / trail.length;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const lineWidth = progress * (mouse.isHovered ? 4.5 : 2.8);
            ctx.lineWidth = Math.max(lineWidth, 0.5);
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = gba(255, 255, 255, );
            ctx.stroke();
          }
        }

        // Subtle ambient dust
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= p.decay;

          if (p.alpha <= 0) {
            particles.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = gba(255, 255, 255, );
          ctx.fill();
        }

        // Precision Ring & Center
        targetRingRadius = mouse.isPressed ? 5 : mouse.isHovered ? 16 : 4.5;
        ringRadius += (targetRingRadius - ringRadius) * 0.25;

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, ringRadius, 0, Math.PI * 2);
        if (mouse.isHovered) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.lineWidth = 1.2;
          ctx.stroke();
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.isHovered ? 1.8 : 2.2, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[99999] w-screen h-screen"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
}
