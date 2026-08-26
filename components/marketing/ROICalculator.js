'use client';

import React, { useState } from 'react';
import { formatINR } from './marketingData';
import { ArrowRight } from 'lucide-react';

export default function ROICalculator({ onOpenDemo }) {
  const [turnoverCr, setTurnoverCr] = useState(50); // ₹50 Cr
  const [activeProjects, setActiveProjects] = useState(6);

  // Transparent, conservative calculation formulas
  const turnoverVal = turnoverCr * 10000000;
  // Estimated 3.2% gross margin protection via budget line locking & variation capture
  const projectedSavings = turnoverVal * 0.032;
  // Working capital acceleration (~20 days faster JMR to RA collection)
  const workingCapitalUnlocked = turnoverVal * 0.055;

  return (
    <section id="roi-calculator" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Estimate Your Protected Margin
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Interactive simulator based on conservative fit-out industry benchmarks and working capital cycles.
        </p>
      </div>

      {/* Interactive Calculator Container */}
      <div className="rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Sliders */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Turnover Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">Annual Fit-Out Turnover:</span>
                <span className="font-mono text-base font-bold text-white">₹{turnoverCr} Cr</span>
              </div>
              <input
                type="range"
                min="10"
                max="300"
                step="5"
                value={turnoverCr}
                onChange={(e) => setTurnoverCr(Number(e.target.value))}
                className="w-full accent-emerald-400 bg-white/10 rounded-lg h-2 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>₹10 Cr</span>
                <span>₹100 Cr</span>
                <span>₹200 Cr</span>
                <span>₹300 Cr+</span>
              </div>
            </div>

            {/* Active Projects Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">Concurrent Active Sites:</span>
                <span className="font-mono text-base font-bold text-white">{activeProjects} Sites</span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                step="1"
                value={activeProjects}
                onChange={(e) => setActiveProjects(Number(e.target.value))}
                className="w-full accent-emerald-400 bg-white/10 rounded-lg h-2 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>2 Sites</span>
                <span>15 Sites</span>
                <span>30+ Sites</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 leading-relaxed">
              Assumes 3.2% margin leakage prevention (scope capture + budget headroom validation) and ~20 days faster client RA certification.
            </div>

          </div>

          {/* Right Column: Projected Impact Output */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/20 space-y-6">
              
              <div className="space-y-1">
                <div className="text-xs text-slate-400">Estimated Annual Margin Protected</div>
                <div className="text-3xl sm:text-4xl font-bold text-emerald-400 font-mono">
                  {formatINR(projectedSavings, true)}
                </div>
                <div className="text-xs text-slate-300">
                  Projected margin gain across {activeProjects} active commercial fit-out projects.
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Working Capital Acceleration:</span>
                  <span className="font-mono font-semibold text-white">{formatINR(workingCapitalUnlocked, true)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">JMR-to-Billing Cycle:</span>
                  <span className="font-mono font-semibold text-emerald-400">~4 Days vs ~28 Days</span>
                </div>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full py-3 rounded-xl bg-white text-slate-950 font-semibold text-xs hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
              >
                <span>Calculate My ROI on Live Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
