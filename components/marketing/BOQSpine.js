'use client';

import React, { useState } from 'react';
import { BOQ_SAMPLE_ITEMS } from './marketingData';
import { 
  FileSpreadsheet, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Layers,
  Sparkles,
  TrendingUp
} from 'lucide-react';

export default function BOQSpine({ onOpenDemo }) {
  const [selectedItemId, setSelectedItemId] = useState(BOQ_SAMPLE_ITEMS[0].id);

  const sel = BOQ_SAMPLE_ITEMS.find((item) => item.id === selectedItemId) || BOQ_SAMPLE_ITEMS[0];

  const profitPerUnit = sel.clientRate - sel.budgetCostRate;
  const marginPct = ((profitPerUnit / sel.clientRate) * 100).toFixed(1);

  return (
    <section id="boq-spine" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          BUDGET & MARGIN LOCKING
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          Your Team Cannot Over-Spend. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            Every Rupee Locked to Your Quotation.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light font-sans">
          When you win a project, your quotation becomes a locked budget ceiling. Project managers and site teams cannot issue purchase orders above your approved cost limits without your sign-off.
        </p>
      </div>

      {/* Main Glass Console */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-2xl text-left max-w-5xl mx-auto space-y-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Scope Items (5 Cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              SAMPLE WORK PACKAGES (CLICK TO INSPECT MARGIN)
            </span>

            {BOQ_SAMPLE_ITEMS.map((item) => {
              const isSelected = item.id === selectedItemId;
              const itemMargin = (((item.clientRate - item.budgetCostRate) / item.clientRate) * 100).toFixed(0);
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItemId(item.id)}
                  className={`p-3.5 rounded-2xl transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-white text-slate-950 border-white shadow-xl scale-[1.02]'
                      : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className={isSelected ? 'text-slate-700 font-bold' : 'text-slate-400'}>
                      {item.code} • {item.package}
                    </span>
                    <span className={`font-bold ${isSelected ? 'text-emerald-800' : 'text-emerald-400'}`}>
                      {itemMargin}% Margin
                    </span>
                  </div>
                  <div className="font-bold text-xs sm:text-sm mt-1 truncate font-display">
                    {item.desc}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Margin & Cost Control Breakdown (7 Cols) */}
          <div className="lg:col-span-7 p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 space-y-5 font-mono text-xs flex flex-col justify-between">
            
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">SELECTED WORK PACKAGE</span>
                  <div className="text-white font-bold text-sm font-display mt-0.5">{sel.package} — {sel.desc}</div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                  BUDGET HARD-LOCKED
                </span>
              </div>

              {/* Price & Margin Comparison */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase">Selling to Client</div>
                  <div className="text-white font-bold text-sm sm:text-base mt-0.5">₹{sel.clientRate.toLocaleString()}</div>
                  <div className="text-[9px] text-slate-500">Per {sel.unit}</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase">Target Cost Ceiling</div>
                  <div className="text-white font-bold text-sm sm:text-base mt-0.5">₹{sel.budgetCostRate.toLocaleString()}</div>
                  <div className="text-[9px] text-slate-500">Materials + Labor</div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-[10px] text-emerald-400 uppercase font-bold">Your Profit</div>
                  <div className="text-emerald-400 font-black text-sm sm:text-base mt-0.5">₹{profitPerUnit.toLocaleString()}</div>
                  <div className="text-[9px] text-emerald-300 font-bold">{marginPct}% Net Margin</div>
                </div>
              </div>

              {/* Visual Cost Stack Bar */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Target Cost Distribution:</span>
                  <span>Total Budget: ₹{(sel.totalBudget / 100000).toFixed(1)} Lakhs</span>
                </div>
                <div className="w-full h-3 rounded-full bg-black/60 border border-white/10 overflow-hidden flex">
                  <div className="h-full bg-emerald-400" style={{ width: '58%' }} title="Material (58%)" />
                  <div className="h-full bg-teal-400" style={{ width: '26%' }} title="Labor (26%)" />
                  <div className="h-full bg-cyan-400" style={{ width: '16%' }} title="Plant & Machinery (16%)" />
                </div>
                <div className="flex justify-between text-[9px] text-slate-400 pt-0.5">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Material (58%)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-teal-400" /> Labor (26%)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400" /> Equipment (16%)</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-sans">
              <div className="text-xs text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>PO commitment balance: <strong>₹{(sel.poBalance / 100000).toFixed(1)} Lakhs remaining</strong></span>
              </div>

              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-slate-300 transition-colors uppercase tracking-wider"
              >
                <span>Book 15-Min Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}