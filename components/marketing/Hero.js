'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Activity, Building2 } from 'lucide-react';

const LIVE_SITE_UPDATES = [
  { site: 'Horizon HQ (Gurugram)', event: 'Acoustic Paneling: 420 Sqm Verified (GRN #0241)', time: 'Just now' },
  { site: 'Fintech Hub (BKC Mumbai)', event: 'Client Certified RA Bill #04 (₹148.2 Lakhs)', time: '3m ago' },
  { site: 'Aura Biotech (Bengaluru)', event: 'MEP VRF Pressure Test Passed @ 1.5x WP', time: '12m ago' },
  { site: 'Oberoi Penthouse (Worli)', event: 'Tripartite JMR #02 Signed by Principal Architect', time: '18m ago' },
];

export default function Hero({ onOpenDemo }) {
  const [activeUpdateIndex, setActiveUpdateIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveUpdateIndex((prev) => (prev + 1) % LIVE_SITE_UPDATES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const currentUpdate = LIVE_SITE_UPDATES[activeUpdateIndex];

  return (
    <section id="overview" className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 z-10 bg-transparent">
      
      {/* Category Tag */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0D14]/80 border border-white/15 backdrop-blur-2xl text-slate-200 text-xs mb-6 shadow-xl">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="font-semibold text-white tracking-wide">
          Construction Management Software
        </span>
        <span className="text-white/20">|</span>
        <span className="text-slate-300">Built for Turnkey Interior Contractors</span>
      </div>

      {/* Monumental Headline */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.06] uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] font-display">
          FROM BARE SHELL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            TO HANDOVER.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-normal text-slate-200 max-w-2xl mx-auto tracking-normal leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] font-sans">
          Manage estimation, BOQs, site progress, vendor procurement, and project billing on a single unified platform.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8 w-full sm:w-auto">
        <button
          onClick={onOpenDemo}
          className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 active:scale-95 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.25)] cursor-pointer"
        >
          <span>Request Executive Demo</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <a
          href="#command-centre"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold text-xs bg-[#0A0D12]/70 border border-white/20 hover:border-white/40 hover:bg-[#0A0D12]/90 backdrop-blur-xl transition-all cursor-pointer"
        >
          <span>Explore Command Centre</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>

      {/* Live Site Stream Ticker */}
      <div className="mt-12 w-full max-w-xl mx-auto">
        <div className="px-4 py-2.5 rounded-2xl bg-[#0A0D14]/85 border border-white/15 backdrop-blur-2xl shadow-xl flex items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <div className="min-w-0">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block truncate">
                LIVE SITE STREAM • {currentUpdate.site}
              </span>
              <span className="text-xs font-medium text-white block truncate">
                {currentUpdate.event}
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-slate-400 shrink-0 bg-white/10 px-2 py-0.5 rounded-md">
            {currentUpdate.time}
          </span>
        </div>
      </div>

      {/* Core Platform Highlights */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-8 text-xs text-slate-300 font-sans">
        {[
          'Living BOQ Item Locking',
          'Offline Site DPR & Snagging',
          'Automated RA Invoicing',
          'Two-Way Tally Prime Sync',
        ].map((feat) => (
          <div key={feat} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
            <span>{feat}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
