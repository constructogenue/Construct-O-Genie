'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA({ onOpenDemo }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 pb-12">
      <div className="rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 backdrop-blur-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
        
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Take total control of your fit-out gross margins.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            See how your active tender BOQs, procurement indents, and billing cycles run inside Construct-O-Genie.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition-all shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <span>Book a 15-Min Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span>✓ Onboarding in 7–14 days</span>
          <span>✓ Excel BOQ import assistance</span>
          <span>✓ Tally &amp; SAP compatibility</span>
        </div>

      </div>
    </section>
  );
}
