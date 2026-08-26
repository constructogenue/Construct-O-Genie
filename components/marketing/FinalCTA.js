'use client';

import React from 'react';
import { ArrowRight, Play, ShieldCheck } from 'lucide-react';

export default function FinalCTA({ onOpenDemo }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative">
      <div className="p-8 sm:p-14 rounded-3xl bg-[#080B10]/95 border border-white/15 backdrop-blur-3xl shadow-2xl text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-slate-200 font-mono text-[11px] uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          BRING FINANCIAL CERTAINTY TO FIT-OUT EXECUTION
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-display max-w-3xl mx-auto leading-tight">
          Bring financial certainty to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            every square foot.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-sans leading-relaxed">
          Schedule a 15-minute operational walkthrough tailored to your active sites and contracting volume.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 active:scale-95 transition-all shadow-xl cursor-pointer"
          >
            <span>Book a 15-Min Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#product"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold text-xs bg-black/40 border border-white/20 hover:border-white/40 hover:bg-black/60 backdrop-blur-xl transition-all cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/40" />
            <span>Watch Product Tour</span>
          </a>
        </div>

        <div className="pt-6 text-[11px] font-mono text-slate-400">
          Turnkey Interior OS • Tally & SAP Sync • Zero Commitments Beyond Budget
        </div>

      </div>
    </section>
  );
}
