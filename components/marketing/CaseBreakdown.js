'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export default function CaseBreakdown({ onOpenDemo }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      <div className="p-6 sm:p-10 rounded-3xl bg-[#080B10]/95 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-8 text-left">
        
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
              MODELLED REFERENCE CASE STUDY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-0.5">
              ₹48.25 Cr Turnkey Corporate Fit-Out (42,500 sq.ft)
            </h2>
          </div>
          <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-right font-mono text-xs">
            <span className="text-slate-400 block uppercase text-[10px]">Contract Duration</span>
            <span className="text-white font-bold">14 Weeks Fast-Track</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Before Column */}
          <div className="p-5 sm:p-6 rounded-2xl bg-red-500/[0.04] border border-red-500/20 space-y-4">
            <div className="flex items-center gap-2 text-red-400 font-bold font-display text-base">
              <XCircle className="w-5 h-5" />
              <span>Before Construct-O-Genie</span>
            </div>
            <div className="space-y-2.5 text-xs text-slate-300 font-sans">
              <div className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Tender BOQs managed in disconnected Excel sheets with untracked rate formulas.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Site engineers ordered extra materials via WhatsApp with no prior margin check.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Joint Measurement Records (JMR) took 28+ days to sign off with client PMCs.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Final gross profit eroded by 6% due to unbilled architectural scope revisions.</span>
              </div>
            </div>
          </div>

          {/* After Column */}
          <div className="p-5 sm:p-6 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/20 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold font-display text-base">
              <CheckCircle2 className="w-5 h-5" />
              <span>With Construct-O-Genie OS</span>
            </div>
            <div className="space-y-2.5 text-xs text-slate-200 font-sans">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>100% purchase orders budget-locked directly against internal cost ceilings.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>High-value POs routed to Director mobile with instant margin impact visibility.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Digital JMR certified in 4 days with 1-click Running Account bill generation.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Baseline project margin protected at 18.4% with full Tally ledger reconciliation.</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
