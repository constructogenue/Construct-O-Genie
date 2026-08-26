'use client';

import React, { useState } from 'react';
import { ROLE_EXPERIENCES } from './marketingData';
import { ArrowRight, CheckCircle2, User, Shield, HardHat, Calculator, Briefcase } from 'lucide-react';

export default function RoleWorkspaces({ onOpenDemo }) {
  const [activeRole, setActiveRole] = useState(ROLE_EXPERIENCES[0].id);

  const roleIcons = {
    founder: Shield,
    qs: Calculator,
    pm: Briefcase,
    site: HardHat,
    finance: User,
  };

  const selectedData = ROLE_EXPERIENCES.find((r) => r.id === activeRole) || ROLE_EXPERIENCES[0];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      
      {/* Direct, Authentic Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          One system. A different view for every team.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          From the managing director tracking portfolio gross margin to the site engineer submitting mobile DPRs and JMRs.
        </p>
      </div>

      {/* Role Tabs Selector */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {ROLE_EXPERIENCES.map((role) => {
          const Icon = roleIcons[role.id] || User;
          const isSelected = activeRole === role.id;
          return (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                isSelected
                  ? 'bg-white text-slate-950 font-semibold shadow-md'
                  : 'bg-black/40 text-slate-400 hover:text-white hover:bg-white/[0.05] border border-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{role.role.split('&')[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Role Workspace Preview Card */}
      <div className="rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Responsibilities & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-xs font-mono text-slate-300">
                <span>{selectedData.role}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {selectedData.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedData.description}
              </p>
            </div>

            <div className="space-y-3">
              {selectedData.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white font-medium text-xs border border-white/15 transition-all inline-flex items-center gap-2"
              >
                <span>Request {selectedData.role.split('&')[0].trim()} Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Role Metric & Interactive Widget */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-5">
              <div className="space-y-1">
                <div className="text-xs text-slate-400">{selectedData.sampleMetric.label}</div>
                <div className="text-3xl font-bold text-white font-mono">{selectedData.sampleMetric.value}</div>
                <div className="text-xs text-emerald-400 font-medium">{selectedData.sampleMetric.sub}</div>
              </div>

              <div className="p-3.5 rounded-lg bg-black/50 border border-white/5 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Active Workspace Role:</span>
                  <span className="font-semibold text-white font-mono">{selectedData.id.toUpperCase()}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Role Permissions:</span>
                  <span className="text-emerald-400 font-medium">Verified &amp; Segregated</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Maker-Checker Tier:</span>
                  <span className="text-slate-300">Delegated Authority</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
