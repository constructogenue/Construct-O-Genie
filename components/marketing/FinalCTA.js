'use client';

import React from 'react';
import { ArrowRight, Layers, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function FinalCTA({ onOpenDemo }) {
  return (
    <section className="py-32 bg-gradient-to-b from-[#06080B] via-[#0b121c] to-[#06080B] border-b border-white/[0.08] relative overflow-hidden text-center">
      
      {/* Background CAD Grid */}
      <div className="absolute inset-0 cad-grid-pattern opacity-30 pointer-events-none" />

      {/* Center Radiant Lighting Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/20 via-teal-500/15 to-transparent blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Technical Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-6 shadow-lg shadow-cyan-950/40">
          <Layers className="w-3.5 h-3.5" />
          READY FOR ENTERPRISE DEPLOYMENT
        </div>

        {/* Master Closing Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] font-sans">
          Your next project deserves <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
            a better operating system.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Connect your design, BOQs, procurement, site execution, and money in one place. Schedule an architectural walkthrough for your leadership team today.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 text-slate-950 font-black text-xs tracking-wider uppercase font-mono shadow-2xl shadow-cyan-400/40 hover:shadow-cyan-400/60 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
          >
            <span>Book a Personalized Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#lifecycle"
            className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-[#0F1522] hover:bg-[#151E2E] text-white text-xs font-mono tracking-wider uppercase border border-white/[0.1] hover:border-cyan-500/40 transition-all shadow-lg"
          >
            Explore Construct-O-Genie
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-300">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            Built exclusively for Interior & Fit-Out Contractors
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Tally & 194C TDS Compliant
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            Zero Setup Fee
          </span>
        </div>

      </div>
    </section>
  );
}
