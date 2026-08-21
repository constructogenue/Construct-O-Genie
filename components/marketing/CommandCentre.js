'use client';

import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from './marketingData';
import { 
  Building2, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  ChevronRight,
  ShieldAlert,
  ArrowUpRight,
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';

export default function CommandCentre() {
  const [selectedPrjId, setSelectedPrjId] = useState(PORTFOLIO_PROJECTS[0].id);

  const selectedPrj = PORTFOLIO_PROJECTS.find(p => p.id === selectedPrjId) || PORTFOLIO_PROJECTS[0];

  return (
    <section id="command-centre" className="py-28 bg-[#06080B] border-b border-white/[0.08] relative overflow-hidden">
      
      {/* Background CAD Grid */}
      <div className="absolute inset-0 cad-grid-pattern opacity-20 pointer-events-none" />

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[350px] bg-cyan-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-4 shadow-lg shadow-cyan-950/30">
            <Building2 className="w-3.5 h-3.5" />
            MANAGEMENT COMMAND CENTRE
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Know exactly where <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
              every project stands.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Real-time executive portfolio visibility across contract values, site physical milestones, vendor financial exposure, pending approvals, and realized gross margins.
          </p>
        </div>

        {/* Executive Portfolio KPI Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3.5 sm:gap-4 mb-10 font-mono">
          
          <div className="p-4.5 rounded-2xl bg-[#0B1017] border border-white/[0.08] shadow-lg">
            <div className="text-[10px] text-slate-400 uppercase font-bold">Active Portfolio</div>
            <div className="text-xl sm:text-2xl font-bold text-white font-sans mt-1">12 Projects</div>
            <div className="text-[11px] text-cyan-400 font-semibold mt-0.5">₹38.45 Cr Total</div>
          </div>

          <div className="p-4.5 rounded-2xl bg-[#0B1017] border border-white/[0.08] shadow-lg">
            <div className="text-[10px] text-slate-400 uppercase font-bold">Total Receivables</div>
            <div className="text-xl sm:text-2xl font-bold text-white font-sans mt-1">₹4.20 Cr</div>
            <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">85% Within Terms</div>
          </div>

          <div className="p-4.5 rounded-2xl bg-[#0B1017] border border-white/[0.08] shadow-lg">
            <div className="text-[10px] text-slate-400 uppercase font-bold">Vendor Payables</div>
            <div className="text-xl sm:text-2xl font-bold text-white font-sans mt-1">₹2.84 Cr</div>
            <div className="text-[11px] text-teal-400 font-semibold mt-0.5">194C Compliant</div>
          </div>

          <div className="p-4.5 rounded-2xl bg-[#0B1017] border border-white/[0.08] shadow-lg">
            <div className="text-[10px] text-slate-400 uppercase font-bold">Avg Gross Margin</div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-sans mt-1">19.8%</div>
            <div className="text-[11px] text-slate-300 mt-0.5">Target: 18.0%</div>
          </div>

          <div className="p-4.5 rounded-2xl bg-[#0B1017] border border-white/[0.08] shadow-lg">
            <div className="text-[10px] text-slate-400 uppercase font-bold">Pending Approvals</div>
            <div className="text-xl sm:text-2xl font-bold text-amber-400 font-sans mt-1">7 Queue</div>
            <div className="text-[11px] text-amber-300/80 mt-0.5">4 POs, 3 Payments</div>
          </div>

          <div className="p-4.5 rounded-2xl bg-[#0B1017] border border-white/[0.08] shadow-lg">
            <div className="text-[10px] text-slate-400 uppercase font-bold">Financial Risk</div>
            <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-sans mt-1">0 Critical</div>
            <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">Budgets Intact</div>
          </div>

        </div>

        {/* Split Interactive Portfolio View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Project List (5 Cols) */}
          <div className="lg:col-span-5 space-y-3 font-mono">
            <div className="text-xs text-slate-400 uppercase tracking-wider px-1 font-bold">
              Select Project to Inspect Telemetry
            </div>

            {PORTFOLIO_PROJECTS.map((prj) => {
              const isSelected = prj.id === selectedPrjId;

              return (
                <div
                  key={prj.id}
                  onClick={() => setSelectedPrjId(prj.id)}
                  className={`p-4.5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#111824] border-cyan-500/60 shadow-xl shadow-cyan-950/50 text-white'
                      : 'bg-[#0B0F16] border-white/[0.06] hover:bg-white/[0.02] text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-cyan-400 font-bold">{prj.id}</span>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] uppercase font-bold ${
                      prj.health === 'healthy' 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}>
                      {prj.status}
                    </span>
                  </div>

                  <div className="font-bold text-base text-white font-sans">{prj.name}</div>
                  <div className="text-xs text-slate-400 font-sans">{prj.client} · {prj.location}</div>

                  <div className="mt-3.5 pt-3 border-t border-white/[0.06] grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <div className="text-[10px] text-slate-400">Value</div>
                      <div className="font-bold text-white">₹{(prj.value / 10000000).toFixed(2)} Cr</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Progress</div>
                      <div className="font-bold text-cyan-400">{prj.progress}%</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Margin</div>
                      <div className="font-bold text-emerald-400">{prj.margin}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Inspector Panel (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0B0F16] border border-white/[0.1] p-6 sm:p-8 shadow-2xl font-mono text-xs space-y-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-3">
              <div>
                <span className="text-[10px] text-slate-400 uppercase block font-bold">{selectedPrj.client}</span>
                <h3 className="text-2xl font-bold text-white tracking-tight font-sans">{selectedPrj.name}</h3>
              </div>
              <div className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
                STAGE: {selectedPrj.stage}
              </div>
            </div>

            {/* Financial Progress Bar */}
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-2">
                <span>Site Execution Progress: <strong className="text-white">{selectedPrj.progress}%</strong></span>
                <span>Handover Status: <strong className="text-cyan-400 font-bold">On Schedule</strong></span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/[0.08]">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full transition-all duration-500 shadow-[0_0_12px_#00F0FF]"
                  style={{ width: `${selectedPrj.progress}%` }}
                />
              </div>
            </div>

            {/* Core Financial Diagnostic Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/[0.06]">
                <div className="text-[10px] text-slate-400 uppercase">Contract BOQ</div>
                <div className="text-base font-bold text-white mt-1">₹{(selectedPrj.value / 10000000).toFixed(2)} Cr</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/[0.06]">
                <div className="text-[10px] text-slate-400 uppercase">Committed POs</div>
                <div className="text-base font-bold text-teal-400 mt-1">₹{((selectedPrj.value * 0.44) / 10000000).toFixed(2)} Cr</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/[0.06]">
                <div className="text-[10px] text-slate-400 uppercase">Client Invoiced</div>
                <div className="text-base font-bold text-cyan-400 mt-1">₹{((selectedPrj.value * (selectedPrj.progress / 100)) / 10000000).toFixed(2)} Cr</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/[0.06]">
                <div className="text-[10px] text-slate-400 uppercase">Projected Margin</div>
                <div className="text-base font-bold text-emerald-400 mt-1">{selectedPrj.margin}% Net</div>
              </div>
            </div>

            {/* Pending Executive Action Queue for this project */}
            <div className="p-5 rounded-2xl bg-amber-950/25 border border-amber-500/30">
              <div className="flex items-center justify-between text-amber-400 font-bold mb-2">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Pending Executive Approvals ({selectedPrj.pendingApprovals})
                </span>
                <span className="text-[10px] uppercase bg-amber-500/20 px-2 py-0.5 rounded">MAKER / CHECKER</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {selectedPrj.pendingApprovals > 0 
                  ? `2 Purchase Orders awaiting director authorization & 2 Vendor Payment advices pending TDS validation.`
                  : `All purchase orders, vendor invoices, and client billing up to date. Zero bottlenecks.`}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
