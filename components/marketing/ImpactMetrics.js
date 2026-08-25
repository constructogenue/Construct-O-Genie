'use client';

import React from 'react';
import { TrendingUp, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function ImpactMetrics() {
  const stats = [
    {
      metric: '6% - 9%',
      label: 'Average Profit Protected',
      desc: 'Recovered from unbilled client drawing changes and excess material ordering.',
    },
    {
      metric: '4 Days',
      label: 'Client Billing Cycle',
      desc: 'Down from the 35 to 45 day industry average with instant digital measurements.',
    },
    {
      metric: '0%',
      label: 'Unauthorized PO Overruns',
      desc: 'Hard-locked material cost ceilings prevent site teams from overspending.',
    },
    {
      metric: '1-Click',
      label: 'Executive Approvals',
      desc: 'Approve vendor purchase orders and milestone claims directly from your phone.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent space-y-10">
      
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          COMMERCIAL IMPACT
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          Proven Numbers. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            Real Business Results.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="p-6 sm:p-7 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-xl flex flex-col justify-between space-y-3 text-left hover:border-white/30 transition-all duration-300"
          >
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-100">
                {stat.metric}
              </div>
              <div className="text-sm font-bold text-white font-sans mt-1">
                {stat.label}
              </div>
            </div>
            <p className="text-xs text-slate-400 font-sans font-light leading-relaxed">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}