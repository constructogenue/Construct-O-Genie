'use client';

import React from 'react';
import { INTEGRATIONS_LIST } from './marketingData';
import { RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export default function IntegrationsSection({ onOpenDemo }) {
  return (
    <section id="integrations" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
          ENTERPRISE ACCOUNTING & ERP CONNECTIVITY
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          Synchronizes with Your Existing Financial Ledgers.
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-sans font-light">
          Direct two-way synchronization for purchase vouchers, vendor liabilities, statutory TDS u/s 194C, and client sales bills.
        </p>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {INTEGRATIONS_LIST.map((integ) => (
          <div
            key={integ.name}
            className="p-6 rounded-3xl bg-[#080B10]/90 border border-white/15 backdrop-blur-2xl shadow-xl flex flex-col justify-between space-y-4 hover:border-white/30 transition-all text-left"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  {integ.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                  {integ.badge}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  {integ.name}
                </h3>
                <span className="text-[11px] font-mono text-emerald-300 block mt-0.5">
                  Protocol: {integ.type}
                </span>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {integ.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Bi-directional Data Flow</span>
              <span className="text-emerald-400 font-bold">Verified</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
