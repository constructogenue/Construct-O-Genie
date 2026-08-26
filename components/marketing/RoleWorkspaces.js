'use client';

import React, { useState } from 'react';
import { ROLE_EXPERIENCES } from './marketingData';
import { Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RoleWorkspaces({ onOpenDemo }) {
  const [activeRoleId, setActiveRoleId] = useState(ROLE_EXPERIENCES[0].id);

  const activeRole = ROLE_EXPERIENCES.find((r) => r.id === activeRoleId) || ROLE_EXPERIENCES[0];

  return (
    <section id="roles" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <Users className="w-3.5 h-3.5 text-emerald-400" />
          ROLE-SPECIFIC WORKSPACES
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          Purpose-Built for Every Fit-Out Stakeholder.
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-sans font-light">
          From founders looking at company-wide margins to site engineers recording daily labor headcounts.
        </p>
      </div>

      {/* Role Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
        {ROLE_EXPERIENCES.map((role) => {
          const isSelected = role.id === activeRoleId;
          return (
            <button
              key={role.id}
              onClick={() => setActiveRoleId(role.id)}
              className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${
                isSelected
                  ? 'bg-white text-slate-950 border-white shadow-xl scale-[1.02]'
                  : 'bg-[#080B10]/80 border-white/10 text-slate-300 hover:border-white/30 hover:text-white'
              }`}
            >
              <div className="text-[10px] font-mono uppercase tracking-wider truncate opacity-70">
                WORKSPACE
              </div>
              <div className="font-bold text-xs sm:text-sm truncate mt-0.5 font-display">
                {role.role.split('/')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Role Content Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#080B10]/95 border border-white/15 backdrop-blur-2xl shadow-2xl text-left space-y-6">
        
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">
              {activeRole.tagline}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
              {activeRole.role}
            </h3>
          </div>
          <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-right font-mono">
            <span className="text-[10px] text-emerald-400 block uppercase font-bold">{activeRole.sampleMetric.label}</span>
            <span className="text-base sm:text-lg font-black text-emerald-300">{activeRole.sampleMetric.value}</span>
            <span className="text-[9px] text-slate-400 block font-sans">{activeRole.sampleMetric.sub}</span>
          </div>
        </div>

        <p className="text-sm text-slate-200 font-sans leading-relaxed">
          {activeRole.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {activeRole.highlights.map((hl, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-black/50 border border-white/10 flex items-start gap-2.5 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{hl}</span>
            </div>
          ))}
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
          >
            <span>Explore {activeRole.role.split('/')[0]} View</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
}
