'use client';

import React, { useState } from 'react';
import { CheckCircle2, TrendingUp, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';

export default function QualitativeOutcomes({ onOpenDemo }) {
  const [turnover, setTurnover] = useState(25); // In Crores (₹25 Cr)
  const [projectCount, setProjectCount] = useState(8);

  const unbilledVariationsSaved = (turnover * 0.038).toFixed(2);
  const procurementLeakageSaved = (turnover * 0.042).toFixed(2);
  const adminManhoursSavedInLakhs = Math.round(projectCount * 4.5);
  const totalAnnualSavings = (
    parseFloat(unbilledVariationsSaved) + 
    parseFloat(procurementLeakageSaved) + 
    (adminManhoursSavedInLakhs / 100)
  ).toFixed(2);

  return (
    <section id="roi-simulator" className="scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent">
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-[11px] uppercase tracking-wider mb-3 backdrop-blur-md">
          <Calculator className="w-3.5 h-3.5" />
          COMMERCIAL MARGIN ROI SIMULATOR
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] font-display">
          Protect Your Project Margins. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            Prevent 6% to 9% Profit Erosion.
          </span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 font-light">
          Estimate the direct financial impact of eliminating unbilled site variations and unauthorized material over-ordering.
        </p>
      </div>

      {/* Interactive Calculator Panel */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-2xl text-left max-w-4xl mx-auto space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-b border-white/10 pb-6">
          
          {/* Slider 1: Annual Turnover */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400 uppercase">Annual Fit-Out Turnover:</span>
              <span className="text-white font-bold text-sm">₹{turnover} Crores</span>
            </div>
            <input
              type="range"
              min="5"
              max="250"
              step="5"
              value={turnover}
              onChange={(e) => setTurnover(Number(e.target.value))}
              aria-label="Annual Fit-Out Turnover in Crores"
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>₹5 Cr</span>
              <span>₹125 Cr</span>
              <span>₹250 Cr</span>
            </div>
          </div>

          {/* Slider 2: Active Concurrent Projects */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400 uppercase">Active Turnkey Sites:</span>
              <span className="text-white font-bold text-sm">{projectCount} Projects</span>
            </div>
            <input
              type="range"
              min="2"
              max="40"
              step="1"
              value={projectCount}
              onChange={(e) => setProjectCount(Number(e.target.value))}
              aria-label="Active Turnkey Sites"
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>2 Sites</span>
              <span>20 Sites</span>
              <span>40 Sites</span>
            </div>
          </div>

        </div>

        {/* Calculated Savings Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
            <div className="text-[10px] text-slate-400 uppercase">Scope Creep Recovered</div>
            <div className="text-xl font-bold text-white">₹{unbilledVariationsSaved} Cr</div>
            <div className="text-[10px] text-slate-400">Captured before site execution</div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1">
            <div className="text-[10px] text-slate-400 uppercase">Procurement Leakage Plugged</div>
            <div className="text-xl font-bold text-white">₹{procurementLeakageSaved} Cr</div>
            <div className="text-[10px] text-slate-400">Locked to approved BOQ quantities</div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
            <div className="text-[10px] text-emerald-400 uppercase font-bold">Estimated Annual Margin Saved</div>
            <div className="text-2xl font-black text-emerald-400">₹{totalAnnualSavings} Cr</div>
            <div className="text-[10px] text-emerald-300 font-sans">Pure bottom-line profit retention</div>
          </div>

        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300 flex items-center gap-2 font-sans">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Calculations based on audited Indian fit-out industry averages (3.8% scope creep + 4.2% PO leakage).</span>
          </div>

          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-all cursor-pointer font-sans uppercase tracking-wider"
          >
            <span>Request Margin Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
}
