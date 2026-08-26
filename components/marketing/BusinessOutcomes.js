'use client';

import React from 'react';
import { TrendingUp, Cpu, Clock, CheckCircle2 } from 'lucide-react';

export default function BusinessOutcomes({ onOpenDemo }) {
  const outcomes = [
    {
      icon: TrendingUp,
      title: 'Protect Gross Margin',
      tagline: 'Know the financial impact before approving any commitment.',
      points: [
        { title: 'Budget cost ceilings', desc: 'Prevent unapproved commitments beyond budget.' },
        { title: 'Live committed cost', desc: 'Every PO updates projected project margin in real time.' },
        { title: 'Variation control', desc: 'Capture scope changes and drawing deltas before execution.' }
      ],
      metricLabel: 'Projected Gross Margin',
      metricVal: '18.3%',
      metricSub: 'Protected on ₹4.83 Cr demo contract'
    },
    {
      icon: Cpu,
      title: 'Keep Site & Procurement in Sync',
      tagline: 'Site indents, PO issuances, and gate GRNs in one continuous chain.',
      points: [
        { title: 'BOQ-mapped indents', desc: 'Site engineers requisition only against approved item codes.' },
        { title: 'Maker-checker approval', desc: 'Tiered authority limits for high-value purchases.' },
        { title: 'Gate GRN verification', desc: 'Deliveries inspected against PO specifications before entry.' }
      ],
      metricLabel: 'Material Delivery Compliance',
      metricVal: '98.5%',
      metricSub: 'GRN matched with PO line items'
    },
    {
      icon: Clock,
      title: 'Faster Billing Turnaround',
      tagline: 'Transform certified site measurements into client RA bills in days, not weeks.',
      points: [
        { title: 'Tripartite JMR sign-off', desc: 'Digital measurement certification eliminates client disputes.' },
        { title: 'One-click RA billing', desc: 'Auto-computes advance recovery, retention, and GST.' },
        { title: 'ERP sync & collection', desc: 'Approved bills push directly to Tally Prime or SAP.' }
      ],
      metricLabel: 'Illustrative Turnaround',
      metricVal: '~4 Days',
      metricSub: 'From JMR sign-off to RA bill submission'
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Built for the commercial realities of fit-out.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Replace disconnected spreadsheets and manual phone calls with connected financial controls across commercial, site, and finance teams.
        </p>
      </div>

      {/* 3 Core Outcome Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {outcomes.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-all duration-200"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    OUTCOME 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.tagline}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="text-xs font-semibold text-slate-200">{pt.title}</span>
                      </div>
                      <p className="text-xs text-slate-400 pl-5.5 leading-normal">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric Callout Footer */}
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">{item.metricLabel}</div>
                  <div className="text-xl font-bold text-white font-mono mt-0.5">{item.metricVal}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400 max-w-[140px] leading-tight">{item.metricSub}</div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
