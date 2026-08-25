'use client';

import React, { useState } from 'react';
import { ROLE_EXPERIENCES } from './marketingData';
import { 
  Building2, 
  Calculator, 
  Layers, 
  HardHat, 
  Receipt,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

const ROLE_ICONS = {
  founder: Building2,
  qs: Calculator,
  pm: Layers,
  site: HardHat,
  finance: Receipt,
};

export default function RoleTabs({ onOpenDemo }) {
  const [activeRoleId, setActiveRoleId] = useState('founder');
  const role = ROLE_EXPERIENCES.find((r) => r.id === activeRoleId) || ROLE_EXPERIENCES[0];
  const IconComponent = ROLE_ICONS[role.id] || Building2;

  return (
    <section id="roles" className="scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider mb-3 backdrop-blur-md">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          TAILORED OPERATIONAL VIEWS
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] font-display">
          One Source of Truth. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Dedicated Views for Every Role.
          </span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 font-light">
          Whether you're estimating tender quantities, managing site progress, or releasing retention, Construct-O-Genie equips your team with specialized workflows.
        </p>
      </div>

      {/* Role Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {ROLE_EXPERIENCES.map((r) => {
          const isActive = r.id === activeRoleId;
          const RoleIcon = ROLE_ICONS[r.id] || Building2;
          return (
            <button
              key={r.id}
              onClick={() => setActiveRoleId(r.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-white text-slate-950 font-bold shadow-lg scale-105'
                  : 'bg-[#0A0D14]/75 text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <RoleIcon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
              <span>{r.role.split('/')[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Role Specification Glass Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-2xl text-left max-w-4xl mx-auto space-y-6">
        
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-white/10 text-white">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                SPECIALIZED WORKSPACE VIEW
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display mt-0.5">
                {role.role}
              </h3>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-white/[0.08] text-white font-mono text-xs font-semibold">
            {role.tagline}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
          {role.description}
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {role.highlights.map((h, i) => (
            <div key={i} className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-start gap-2.5 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{h}</span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
