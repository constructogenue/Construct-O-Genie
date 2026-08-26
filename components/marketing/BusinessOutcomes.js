'use client';

import React from 'react';
import { ShieldCheck, Layers, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export default function BusinessOutcomes({ onOpenDemo }) {
  const pillars = [
    {
      id: 'margin',
      num: '01',
      title: 'Protect Margin',
      tagline: 'Track budgets, committed costs and project margin.',
      description: 'Lock tender BOQ selling rates against internal Budget Cost Ceilings (BCC). Every Purchase Order automatically updates committed liability and guards your baseline margin before approval.',
      bulletPoints: [
        'Hard budget caps preventing purchase orders beyond approved rates',
        'Real-time gross margin projection per project and trade package',
        'Automatic variation logging when architectural GFC drawings revise',
      ],
      highlight: 'Committed Cost Protection'
    },
    {
      id: 'execution',
      num: '02',
      title: 'Control Execution',
      tagline: 'Connect BOQ, procurement, approvals and site workflows.',
      description: 'Eliminate disconnected spreadsheets and WhatsApp approvals. Empower site supervisors with mobile Daily Progress Reports (DPR), material GRN verification, and multi-tier Maker-Checker authorization.',
      bulletPoints: [
        'Tiered Maker-Checker approval routing based on PO value threshold',
        'Mobile daily labor headcount, material delivery and photo snagging',
        'Subcontractor measurement entry mapped to itemized work orders',
      ],
      highlight: 'Single Operational Workflow'
    },
    {
      id: 'cash',
      num: '03',
      title: 'Accelerate Cash',
      tagline: 'Connect JMR, RA billing and collections.',
      description: 'Turn site progress into cash faster. Generate certified Joint Measurement Records (JMR) with client PMC sign-offs and produce Running Account (RA) bills with statutory TDS u/s 194C, retention and Tally sync.',
      bulletPoints: [
        'Digital tripartite JMR sign-off against architectural grid coordinates',
        '1-click client RA bill compilation with retention & advance deductions',
        'Direct two-way synchronization with Tally Prime and enterprise ERPs',
      ],
      highlight: '4-Day Billing Turnaround'
    },
  ];

  return (
    <section id="outcomes" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          THREE CORE BUSINESS OUTCOMES
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight apple-headline">
          Engineered for Fit-Out Financial Control.
        </h2>
        <p className="apple-lead font-light">
          Three non-negotiable operational disciplines that protect contracting margins and accelerate cash collection.
        </p>
      </div>

      {/* 3 Outcome Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p) => (
          <div
            key={p.id}
            className="p-6 sm:p-8 rounded-3xl apple-glass shadow-xl flex flex-col justify-between space-y-6 hover:border-white/30 transition-all duration-300 group text-left apple-interactive"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-mono text-white/20 group-hover:text-emerald-400 transition-colors">
                  {p.num}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold uppercase">
                  {p.highlight}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {p.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-300 font-sans">
                  {p.tagline}
                </p>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {p.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10">
                {p.bulletPoints.map((bp, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-emerald-300 transition-colors cursor-pointer uppercase tracking-wider pt-2"
            >
              <span>See in Live Walkthrough</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}
