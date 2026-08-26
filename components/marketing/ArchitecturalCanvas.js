'use client';

import React, { useState, useEffect } from 'react';

export const ARCHITECTURAL_STAGES = [
  {
    id: 1,
    title: 'STAGE 01 : COMPLETED COMMERCIAL FIT-OUT',
    subtitle: 'High-end boardroom joinery, acoustic ceilings, architectural lighting, verified handover',
    src: '/hero-interior.jpg',
  },
  {
    id: 2,
    title: 'STAGE 02 : FRAMING & SUBSTRATES',
    subtitle: 'Partition framing, HDHMR substrate paneling, glazing tracks, millwork substructure',
    src: '/building-stage2.jpg',
  },
  {
    id: 3,
    title: 'STAGE 03 : MEP FIRST-FIX & CEILING GRIDS',
    subtitle: 'Ductwork, fire protection sprinklers, cable trays, linear lighting conduits',
    src: '/building-mep.jpg',
  },
  {
    id: 4,
    title: 'STAGE 04 : BARE CONCRETE SHELL',
    subtitle: 'Base building handover slab, structural columns, perimeter glazing baseline',
    src: '/building-stage3.jpg',
  },
];

export default function ArchitecturalCanvas({ scrollProgress = 0, manualStage = null }) {
  const [internalProgress, setInternalProgress] = useState(0);

  // Preload background images for smooth zero-lag transitions
  useEffect(() => {
    ARCHITECTURAL_STAGES.forEach((stage) => {
      const img = new Image();
      img.src = stage.src;
    });
  }, []);

  const totalStages = ARCHITECTURAL_STAGES.length;

  let activeIndex = 0;
  let blendFactor = 0;

  if (manualStage !== null && manualStage >= 0 && manualStage < totalStages) {
    activeIndex = manualStage === totalStages - 1 ? totalStages - 2 : manualStage;
    blendFactor = manualStage === totalStages - 1 ? 1 : 0;
  } else {
    // Scroll-linked interpolation
    const scaledProgress = scrollProgress * (totalStages - 1);
    activeIndex = Math.min(Math.floor(scaledProgress), totalStages - 2);
    blendFactor = Math.min(Math.max(scaledProgress - activeIndex, 0), 1);
  }

  return (
    <div
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0 overflow-hidden bg-[#030508]"
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
      aria-hidden="true"
    >
      {/* 4 Progressive Architectural Layers */}
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
            className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-out"
            style={{
              opacity: opacity,
              zIndex: idx,
            }}
          >
            <img
              src={stage.src}
              alt={stage.title}
              loading="eager"
              className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.12] saturate-[1.05]"
              style={{
                transform: `scale(${1.01 + scrollProgress * 0.03})`,
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </div>
        );
      })}

      {/* Atmospheric Contrast Layers for pristine text legibility */}
      <div className="absolute inset-0 bg-[#030508]/65 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030508]/85 via-[#030508]/40 to-[#030508]/95 pointer-events-none z-10" />

      {/* Architectural Blueprint CAD Grid & Coordinate Lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />
    </div>
  );
}
