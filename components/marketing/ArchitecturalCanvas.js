'use client';

import React, { useState, useEffect } from 'react';

const ARCHITECTURAL_STAGES = [
  {
    id: 1,
    title: 'STAGE 01 : BASE BUILDING HANDOVER',
    src: '/hero-interior.jpg',
  },
  {
    id: 2,
    title: 'STAGE 02 : FRAMING & JOINERY SUBSTRATES',
    src: '/building-stage2.jpg',
  },
  {
    id: 3,
    title: 'STAGE 03 : MEP FIRST-FIX SERVICES',
    src: '/building-mep.jpg',
  },
  {
    id: 4,
    title: 'STAGE 04 : BARE CONCRETE SLAB',
    src: '/building-stage3.jpg',
  },
];

export default function ArchitecturalCanvas({ scrollProgress: propProgress }) {
  const [internalProgress, setInternalProgress] = useState(0);

  // Preload background images
  useEffect(() => {
    ARCHITECTURAL_STAGES.forEach((stage) => {
      const img = new Image();
      img.src = stage.src;
    });
  }, []);

  useEffect(() => {
    if (typeof propProgress === 'number') return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          if (totalScroll > 0) {
            const progress = Math.min(Math.max(window.scrollY / totalScroll, 0), 1);
            setInternalProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [propProgress]);

  const effectiveProgress = typeof propProgress === 'number' ? propProgress : internalProgress;

  const totalStages = ARCHITECTURAL_STAGES.length;
  const scaledProgress = effectiveProgress * (totalStages - 1);
  const activeIndex = Math.min(Math.floor(scaledProgress), totalStages - 2);
  const blendFactor = Math.min(Math.max(scaledProgress - activeIndex, 0), 1);

  return (
    <div
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0 overflow-hidden bg-[#030508]"
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
      aria-hidden="true"
    >
      {/* 4 Architectural Crossfade Layers */}
      {ARCHITECTURAL_STAGES.map((stage, idx) => {
        let opacity = 0;
        if (idx === activeIndex) {
          opacity = 1 - blendFactor;
        } else if (idx === activeIndex + 1) {
          opacity = blendFactor;
        } else {
          opacity = 0;
        }

        return (
          <div
            key={stage.id}
            className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-out"
            style={{
              opacity: opacity,
              zIndex: idx,
            }}
          >
            <img
              src={stage.src}
              alt={stage.title}
              loading="eager"
              className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.08] saturate-[1.1]"
              style={{
                transform: `scale(${1.01 + effectiveProgress * 0.03})`,
                transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </div>
        );
      })}

      {/* Atmospheric Contrast Layers (Clear Architectural Visibility + Clean Readability) */}
      <div className="absolute inset-0 bg-[#030508]/40 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030508]/80 via-[#030508]/25 to-[#030508]/90 pointer-events-none z-10" />

      {/* Subtle CAD Blueprint Reticle Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}