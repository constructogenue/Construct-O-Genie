'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck } from 'lucide-react';
import { formatINR } from './marketingData';

export default function ROICalculator({ onOpenDemo }) {
  const [turnoverCr, setTurnoverCr] = useState(50); // ₹50 Cr
  const [marginPct, setMarginPct] = useState(20);   // 20% Gross Margin
  const [leakagePct, setLeakagePct] = useState(4.5); // 4.5% Unbilled Leakage

  const annualRevenue = turnoverCr * 10000000;
  const annualMarginLeakagePrevented = annualRevenue * (leakagePct / 100);
  const daysSavedInBilling = Math.round(18 + (turnoverCr / 25));

  return (
    <section id="roi" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <Calculator className="w-3.5 h-3.5 text-emerald-400" />
          PROFIT LEAKAGE SIMULATOR
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          Calculate Your Protected Margin.
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-sans font-light">
          Simulate how eliminating unbilled scope changes and procurement overruns impacts your bottom line.
        </p>
      </div>

      <div className="p-6 sm:p-10 rounded-3xl bg-[#080B10]/95 border border-white/15 backdrop-blur-2xl shadow-2xl text-left">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="space-y-6">
            
            {/* Turnover Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 uppercase">Annual Fit-Out Turnover</span>
                <span className="text-base font-bold text-white">₹{turnoverCr} Crores</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={turnoverCr}
                onChange={(e) => setTurnoverCr(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>₹10 Cr</span>
                <span>₹250 Cr</span>
                <span>₹500 Cr+</span>
              </div>
            </div>

            {/* Target Margin Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 uppercase">Target Gross Margin</span>
                <span className="text-base font-bold text-emerald-400">{marginPct}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="35"
                step="0.5"
                value={marginPct}
                onChange={(e) => setMarginPct(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>10%</span>
                <span>20%</span>
                <span>35%</span>
              </div>
            </div>

            {/* Scope Leakage Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 uppercase">Estimated Unbilled Scope & Leakage</span>
                <span className="text-base font-bold text-amber-400">{leakagePct}%</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="8.0"
                step="0.5"
                value={leakagePct}
                onChange={(e) => setLeakagePct(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>1% (Low)</span>
                <span>4.5% (Typical)</span>
                <span>8% (Severe)</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 font-sans italic">
              Modelled assumption — adjust sliders to match your company's actual operating profile.
            </p>
          </div>

          {/* Results Column */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black/60 border border-white/10 space-y-6">
            
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                ESTIMATED ANNUAL VALUE RECOVERED
              </span>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono">
                {formatINR(annualMarginLeakagePrevented, true)}
              </div>
              <span className="text-xs text-slate-300 font-sans block mt-1">
                Direct profit protected from unapproved material orders and untracked client revisions.
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-slate-400 block text-[9px] uppercase">Billing Cycle Turnaround</span>
                <span className="text-base font-bold text-emerald-400 block mt-0.5">~4 Days</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">vs 25+ days manual</span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-slate-400 block text-[9px] uppercase">Cash Flow Velocity</span>
                <span className="text-base font-bold text-white block mt-0.5">+{daysSavedInBilling} Days</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Faster collection</span>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full py-3.5 rounded-xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Calculate My ROI on Live Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
