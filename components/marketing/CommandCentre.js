'use client';

import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from './marketingData';
import { Building2, TrendingUp, AlertCircle, CheckCircle2, DollarSign, Activity, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CommandCentre({ onOpenDemo }) {
  const [activeProjectId, setActiveProjectId] = useState(PORTFOLIO_PROJECTS[0].id);
  const selectedProj = PORTFOLIO_PROJECTS.find((p) => p.id === activeProjectId) || PORTFOLIO_PROJECTS[0];

  return (
    <section id="command-centre" className="scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent">
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider mb-3 backdrop-blur-md">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          EXECUTIVE PORTFOLIO INTELLIGENCE
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] font-display">
          Executive Command Centre. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Multi-Site Radar in One Screen.
          </span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 font-light">
          Track live project margins, committed procurement vs budget actuals, and critical path milestone health across all active turnkey fit-outs.
        </p>
      </div>

      {/* Main Command Console */}
      <div className="rounded-3xl border border-white/15 bg-[#0A0D14]/85 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl space-y-6 text-left">
        
        {/* Project Selector Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase font-bold">Active Fit-Out Sites</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {PORTFOLIO_PROJECTS.map((proj) => {
                const isActive = proj.id === activeProjectId;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProjectId(proj.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-white text-slate-950 font-bold shadow-md'
                        : 'bg-black/40 text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${proj.health === 'healthy' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                    <span>{proj.name}</span>
                    <span className="opacity-60 text-[10px]">({proj.location})</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-black/40 px-3.5 py-2 rounded-xl border border-white/10">
            <span className="text-slate-400">STAGE:</span>
            <span className="text-white font-bold">{selectedProj.stage}</span>
          </div>
        </div>

        {/* Live Project Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <div className="text-[10px] text-slate-400 uppercase">Contract Value</div>
            <div className="text-xl font-bold text-white mt-1">₹{(selectedProj.value / 10000000).toFixed(2)} Cr</div>
            <div className="text-[10px] text-slate-400 mt-1">Client: {selectedProj.client}</div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <div className="text-[10px] text-slate-400 uppercase">Physical Site Progress</div>
            <div className="text-xl font-bold text-white mt-1">{selectedProj.progress}%</div>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${selectedProj.progress}%` }} />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <div className="text-[10px] text-slate-400 uppercase">Projected Gross Margin</div>
            <div className="text-xl font-bold text-emerald-400 mt-1">{selectedProj.margin}%</div>
            <div className="text-[10px] text-slate-400 mt-1">Tender Baseline: 16.0%</div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <div className="text-[10px] text-slate-400 uppercase">Pending Executive Approvals</div>
            <div className="text-xl font-bold text-amber-400 mt-1">{selectedProj.pendingApprovals} POs</div>
            <div className="text-[10px] text-slate-400 mt-1">Maker/Checker Gated</div>
          </div>
        </div>

        {/* Console Action Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-sans">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>All project metrics reconciled with live physical GRNs and JMR measurement logs.</span>
          </div>

          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-all cursor-pointer font-sans uppercase tracking-wider"
          >
            <span>Request Full Console Tour</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
}
