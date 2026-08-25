'use client';

import React, { useState } from 'react';
import { CheckCircle2, TrendingUp, Calculator, ShieldCheck, ArrowRight, DollarSign, Wallet } from 'lucide-react';

export default function QualitativeOutcomes({ onOpenDemo }) {
  const [turnover, setTurnover] = useState(25); // In Crores (₹25 Cr)
  const [projectCount, setProjectCount] = useState(8);

  const unbilledVariationsSaved = (turnover * 0.038).toFixed(2);
  const procurementLeakageSaved = (turnover * 0.042).toFixed(2);
  const totalAnnualProfitAdded = (
    parseFloat(unbilledVariationsSaved) + 
    parseFloat(procurementLeakageSaved)
  ).toFixed(2);

  return (
    <section id="roi-simulator" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <Calculator className="w-3.5 h-3.5" />
          FOUNDER PROFIT CALCULATOR
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          How Much Money Is Your Business <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            Silently Leaking on Active Sites?
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light font-sans">
          In commercial interiors, 6% to 9% of your total turnover leaks into unbilled client drawing changes and excess material ordering. Move the sliders to see your annual recovered profit.
        </p>
      </div>

      {/* Interactive Calculator Panel */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-2xl text-left max-w-4xl mx-auto space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-b border-white/10 pb-6">
          
          {/* Slider 1: Annual Turnover */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-300 uppercase font-bold">Your Annual Turnover:</span>
              <span className="text-emerald-400 font-black text-base">₹{turnover} Crores / Year</span>
            </div>
            <input
              type="range"
              min="5"
              max="150"
              step="5"
              value={turnover}
              onChange={(e) => setTurnover(Number(e.target.value))}
              aria-label="Annual Turnover in Crores"
              className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>₹5 Cr</span>
              <span>₹75 Cr</span>
              <span>₹150 Cr</span>
            </div>
          </div>

          {/* Slider 2: Active Concurrent Projects */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-300 uppercase font-bold">Concurrent Active Sites:</span>
              <span className="text-white font-black text-base">{projectCount} Projects</span>
            </div>
            <input
              type="range"
              min="2"
              max="30"
              step="1"
              value={projectCount}
              onChange={(e) => setProjectCount(Number(e.target.value))}
              aria-label="Concurrent Active Sites"
              className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>2 Sites</span>
              <span>15 Sites</span>
              <span>30 Sites</span>
            </div>
          </div>

        </div>

        {/* Calculated Savings Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          
          <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-1">
            <div className="text-[10px] text-slate-400 uppercase font-bold">Unbilled Extra Work Recovered</div>
            <div className="text-xl sm:text-2xl font-bold text-white mt-1">₹{unbilledVariationsSaved} Cr</div>
            <div className="text-[10px] text-slate-400">Captured and billed to clients</div>
          </div>

          <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-1">
            <div className="text-[10px] text-slate-400 uppercase font-bold">Material Over-Ordering Saved</div>
            <div className="text-xl sm:text-2xl font-bold text-white mt-1">₹{procurementLeakageSaved} Cr</div>
            <div className="text-[10px] text-slate-400">Locked to approved BOQ quotes</div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
            <div className="text-[10px] text-emerald-400 uppercase font-black">Direct Added Profit / Year</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">₹{totalAnnualProfitAdded} Cr</div>
            <div className="text-[10px] text-emerald-300 font-sans">Straight into your company bank account</div>
          </div>

        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300 flex items-center gap-2 font-sans">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Based on verified industry benchmarks across commercial fit-out companies in India.</span>
          </div>

          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-all cursor-pointer font-sans uppercase tracking-wider shadow-lg"
          >
            <span>Get Your Free Profit Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
}