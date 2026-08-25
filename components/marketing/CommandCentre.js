'use client';

import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from './marketingData';
import { 
  Building2, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Activity,
  Layers,
  Wallet,
  Clock,
  ChevronRight
} from 'lucide-react';

export default function CommandCentre({ onOpenDemo }) {
  const [selectedProjectId, setSelectedProjectId] = useState(PORTFOLIO_PROJECTS[0].id);

  const selectedProject = PORTFOLIO_PROJECTS.find((p) => p.id === selectedProjectId) || PORTFOLIO_PROJECTS[0];

  return (
    <section id="command-centre" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          FOUNDER'S EXECUTIVE RADAR
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          All Your Active Projects. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            One Live Executive Screen.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light font-sans">
          No need to call 5 site engineers every evening. See your overall business health, real-time margins, unbilled client dues, and pending approvals in one glance.
        </p>
      </div>

      {/* Main Glass Console */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-2xl text-left max-w-5xl mx-auto space-y-6">
        
        {/* Project Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {PORTFOLIO_PROJECTS.map((proj) => {
            const isSelected = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-white text-slate-950 border-white shadow-xl scale-[1.02]'
                    : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                }`}
              >
                <div className={`text-[10px] font-mono uppercase truncate ${isSelected ? 'text-slate-600 font-bold' : 'text-slate-400'}`}>
                  {proj.location}
                </div>
                <div className="font-bold text-xs sm:text-sm truncate mt-0.5 font-display">
                  {proj.name}
                </div>
                <div className="flex items-center justify-between mt-2 pt-1 border-t border-current/15 text-[11px] font-mono">
                  <span>{(proj.value / 10000000).toFixed(1)} Cr</span>
                  <span className={`font-bold ${isSelected ? 'text-emerald-800' : 'text-emerald-400'}`}>
                    {proj.margin}% Margin
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Executive Project Health Overview */}
        <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                ACTIVE SITE OVERVIEW
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display mt-0.5">
                {selectedProject.name}
              </h3>
              <p className="text-xs text-slate-400 font-sans mt-0.5">Client: {selectedProject.client} • Location: {selectedProject.location}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right font-mono">
                <span className="text-[10px] text-slate-400 block uppercase">PHYSICAL PROGRESS</span>
                <span className="text-lg font-bold text-emerald-400">{selectedProject.progress}% Completed</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold font-mono">
                ON SCHEDULE
              </span>
            </div>
          </div>

          {/* 4 Key Business Metrics Every Founder Needs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 font-mono text-xs">
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase block">Total Contract Value</span>
              <span className="text-base sm:text-lg font-bold text-white">₹{(selectedProject.value / 10000000).toFixed(2)} Cr</span>
              <span className="text-[10px] text-slate-400 block">Signed Client Scope</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase block">Committed Site Expenses</span>
              <span className="text-base sm:text-lg font-bold text-white">₹{((selectedProject.value * (1 - selectedProject.margin / 100)) / 10000000).toFixed(2)} Cr</span>
              <span className="text-[10px] text-emerald-400 block">Under Budget Limit</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
              <span className="text-[10px] text-emerald-400 uppercase block font-bold">Your Protected Margin</span>
              <span className="text-base sm:text-lg font-black text-emerald-400">{selectedProject.margin}% Realized</span>
              <span className="text-[10px] text-emerald-300 block font-sans">Locked against leakages</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase block">Pending Your Approval</span>
              <span className="text-base sm:text-lg font-bold text-amber-400">{selectedProject.pendingApprovals} Purchase Orders</span>
              <span className="text-[10px] text-slate-400 block">Requires Director sign-off</span>
            </div>
          </div>

          {/* Quick Founder Action Banner */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-200 font-sans">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>No extra material or subcontractor invoice can be committed without passing through your locked budget.</span>
            </div>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-slate-300 transition-colors uppercase tracking-wider shrink-0"
            >
              <span>See Full Live Demo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}