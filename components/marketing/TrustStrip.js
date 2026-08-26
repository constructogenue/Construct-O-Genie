'use client';

import React from 'react';
import { Building, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function TrustStrip() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="p-6 sm:p-8 rounded-3xl bg-[#080B10]/85 border border-white/15 backdrop-blur-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
        
        <div className="max-w-xl space-y-1.5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            ENTERPRISE FIT-OUT GOVERNANCE
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white font-display">
            Built for interior fit-out and turnkey contractors managing complex multi-site execution.
          </h2>
          <p className="text-xs text-slate-300 font-sans">
            Standardized operational controls across corporate offices, luxury hospitality, retail flagships, and high-spec turnkey developments.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full md:w-auto font-mono text-xs shrink-0">
          <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center">
            <span className="text-base sm:text-lg font-black text-white block">₹1,200+ Cr</span>
            <span className="text-[10px] text-slate-400 block uppercase">Fit-Out Value Monitored</span>
          </div>
          <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center">
            <span className="text-base sm:text-lg font-black text-emerald-400 block">450+</span>
            <span className="text-[10px] text-slate-400 block uppercase">Active Commercial Sites</span>
          </div>
          <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center col-span-2 sm:col-span-1">
            <span className="text-base sm:text-lg font-black text-teal-300 block">100%</span>
            <span className="text-[10px] text-slate-400 block uppercase">Budget Cost Ceiling Capped</span>
          </div>
        </div>

      </div>
    </section>
  );
}
