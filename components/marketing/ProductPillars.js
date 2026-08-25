'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Clock, Wallet } from 'lucide-react';

export default function ProductPillars({ onOpenDemo }) {
  const pillars = [
    {
      id: 'pre-construction',
      number: '01',
      tag: 'PROFIT & SCOPE PROTECTION',
      title: 'Never Do Free Extra Work for Clients Again.',
      desc: 'When clients request drawing changes or extra woodwork on site, your site team often executes without recording it. Construct-O-Genie captures every design change instantly, calculates the extra cost, and gets client approval before work starts.',
      src: '/design-studio.jpg',
      metrics: [
        { label: 'EXTRA WORK CAPTURED', val: '+4.2% Margin Saved' },
        { label: 'BUDGET DISCIPLINE', val: '100% Locked Quotations' },
      ],
      highlights: [
        'Every drawing change is automatically highlighted with cost impact',
        'Your team cannot over-spend because material budgets are locked',
        'Instant digital variation orders sent directly to client for sign-off',
      ],
    },
    {
      id: 'project-controls',
      number: '02',
      tag: 'FOUNDER EXECUTIVE VISIBILITY',
      title: 'Know Your Exact Profit Today, Not 6 Months Later.',
      desc: 'Most fit-out founders only discover their true profit or loss after the project is handed over. Construct-O-Genie gives you a live dashboard showing actual expenses vs budget across all your active sites in real time.',
      src: '/dashboard-screen.jpg',
      metrics: [
        { label: 'LIVE COMPANY MARGIN', val: 'Real-Time Radar' },
        { label: 'EARLY WARNINGS', val: 'Budget Leak Alerts' },
      ],
      highlights: [
        'See which sites are making healthy profits and which have cost overruns',
        'Real-time cash flow radar: see money collected vs pending client dues',
        'Check company health on your phone anytime without calling site PMs',
      ],
    },
    {
      id: 'site-execution',
      number: '03',
      tag: 'FAST BILLING & CASH FLOW',
      title: 'Collect Client Payments in 4 Days, Not 45 Days.',
      desc: 'Delayed client billing is the #1 cash flow killer for turnkey contractors. Your site supervisor logs work on mobile, the client architect signs the measurement digitally on tablet, and your professional invoice is generated instantly.',
      src: '/site-sync.jpg',
      metrics: [
        { label: 'INVOICING SPEED', val: '4 Days vs 40 Days' },
        { label: 'DISPUTE RATE', val: '0% Measurement Conflicts' },
      ],
      highlights: [
        'Daily progress logs & photos submitted directly from site via mobile',
        'Client architect signs digital Joint Measurements on site with zero disputes',
        'Professional Running Account (RA) bills sent out within 24 hours of work',
      ],
    },
    {
      id: 'finance-billing',
      number: '04',
      tag: 'DELEGATION WITHOUT RISK',
      title: 'Approve Big Purchases in 1 Click From Your Phone.',
      desc: 'Empower your project managers to run daily site operations while keeping total control over your company bank account. Set custom approval rules: small items clear automatically, while purchase orders above ₹1 Lakh come straight to your phone.',
      src: '/finance-team.jpg',
      metrics: [
        { label: 'EXECUTIVE CONTROL', val: '1-Click Mobile Sign-Off' },
        { label: 'ACCOUNTING SYNC', val: 'Tally / SAP & ERPs' },
      ],
      highlights: [
        'No vendor gets paid without your verified mobile approval',
        'Prevents duplicate contractor billing and unauthorized material orders',
        'Direct 2-way sync into Tally, SAP & other ERPs keeps your accounts clean',
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent space-y-24">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          BUILT FOR FIT-OUT FOUNDERS & BUSINESS OWNERS
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          How Construct-O-Genie Protects <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            Your Time, Cash Flow & Profit.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed font-sans">
          Eliminate site leakages, stop endless WhatsApp calls, and run multiple commercial fit-out projects with institutional confidence.
        </p>
      </div>

      {/* 4 Founder Spreads */}
      {pillars.map((pillar, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div
            id={pillar.id}
            key={pillar.id}
            className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
              isEven ? '' : 'lg:flex-row-reverse'
            }`}
          >
            {/* Content (5 Cols) */}
            <div className={`lg:col-span-5 space-y-4 text-left ${isEven ? '' : 'lg:order-2'}`}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-black text-emerald-400">
                  {pillar.number}
                </span>
                <div className="h-4 w-px bg-white/20" />
                <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {pillar.tag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight font-display">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed font-sans">
                {pillar.desc}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-1 font-mono">
                {pillar.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-[#0A0D12]/75 border border-white/10 backdrop-blur-xl">
                    <div className="text-[10px] text-slate-400 uppercase truncate">{m.label}</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-300 mt-0.5 truncate">{m.val}</div>
                  </div>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="space-y-2 pt-1 text-xs text-slate-300 font-sans">
                {pillar.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-slate-300 transition-colors cursor-pointer group font-sans"
                >
                  <span>SEE THIS IN ACTION</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Photography Frame (7 Cols) */}
            <div className={`lg:col-span-7 ${isEven ? '' : 'lg:order-1'}`}>
              <div className="rounded-3xl border border-white/15 bg-[#0A0D12]/60 backdrop-blur-2xl p-2 sm:p-2.5 shadow-2xl overflow-hidden group hover:border-white/30 transition-all duration-300">
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src={pillar.src}
                    alt={pillar.title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover object-center filter brightness-[0.95] contrast-[1.06] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        );
      })}

    </section>
  );
}