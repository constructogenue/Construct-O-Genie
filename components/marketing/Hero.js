'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, TrendingUp, ShieldCheck, DollarSign } from 'lucide-react';

const FOUNDER_LIVE_UPDATES = [
  { project: 'CyberCity Corporate HQ (₹4.8 Cr)', update: 'Client approved ₹1.4 Cr milestone payment', status: 'Payment Cleared' },
  { project: 'BKC Financial Center (₹12.5 Cr)', update: 'Project gross margin locked at 22.4%', status: 'On Target' },
  { project: 'Bengaluru Tech Park (₹8.9 Cr)', update: '₹19.5L vendor PO approved by Director on mobile', status: 'Approved' },
  { project: 'Worli Luxury Residence (₹6.2 Cr)', update: 'Final client sign-off complete • Retention released', status: 'Handover Done' },
];

export default function Hero({ onOpenDemo }) {
  const [activeUpdateIndex, setActiveUpdateIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveUpdateIndex((prev) => (prev + 1) % FOUNDER_LIVE_UPDATES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentUpdate = FOUNDER_LIVE_UPDATES[activeUpdateIndex];

  return (
    <section id="overview" className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-14 z-10 bg-transparent">
      
      {/* Category Tag for Founders */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0D14]/85 border border-white/15 backdrop-blur-2xl text-slate-200 text-xs mb-6 shadow-xl">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="font-semibold text-white tracking-wide">
          The Business Operating System
        </span>
        <span className="text-white/20">|</span>
        <span className="text-slate-300">Built for Interior & Turnkey Fit-Out Founders</span>
      </div>

      {/* Monumental Founder-First Headline */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
          RUN YOUR FIT-OUT BUSINESS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            WITH TOTAL PROFIT CONTROL.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-normal text-slate-200 max-w-2xl mx-auto tracking-normal leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] font-sans">
          Stop losing 6% to 9% profit on unbilled extra work and site leakages. Track real-time margins across all active sites, approve expenses in 1 click, and get paid 3x faster.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8 w-full sm:w-auto">
        <button
          onClick={onOpenDemo}
          className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 active:scale-95 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.25)] cursor-pointer"
        >
          <span>Book a 15-Min Founder Walkthrough</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <a
          href="#command-centre"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold text-xs bg-[#0A0D12]/70 border border-white/20 hover:border-white/40 hover:bg-[#0A0D12]/90 backdrop-blur-xl transition-all cursor-pointer"
        >
          <span>See Executive Dashboard</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>

      {/* Live Business Stream Ticker */}
      <div className="mt-10 w-full max-w-xl mx-auto">
        <div className="px-4 py-2.5 rounded-2xl bg-[#0A0D14]/85 border border-white/15 backdrop-blur-2xl shadow-xl flex items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <div className="min-w-0">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block truncate">
                LIVE PORTFOLIO ALERT • {currentUpdate.project}
              </span>
              <span className="text-xs font-medium text-white block truncate">
                {currentUpdate.update}
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 shrink-0 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md font-bold">
            {currentUpdate.status}
          </span>
        </div>
      </div>

      {/* Core Business Guarantees for Founders */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-8 text-xs text-slate-300 font-sans">
        {[
          'Know Exact Profit Per Project Today',
          'Zero Unbilled Client Scope Changes',
          '1-Click Mobile PO Approvals',
          'Syncs with Tally, SAP & your existing ERP',
        ].map((feat) => (
          <div key={feat} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{feat}</span>
          </div>
        ))}
      </div>

    </section>
  );
}