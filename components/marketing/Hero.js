'use client';

import React, { useState } from 'react';
import { ArrowRight, Play, Layers } from 'lucide-react';
import { ARCHITECTURAL_STAGES } from './ArchitecturalCanvas';
import { DEMO_PROJECT, formatINR } from './marketingData';

export default function Hero({ onOpenDemo, onStageSelect, activeStage = 0 }) {
  const [selectedStage, setSelectedStage] = useState(0);

  const handleStageClick = (idx) => {
    setSelectedStage(idx);
    if (onStageSelect) onStageSelect(idx);
  };

  return (
    <section id="overview" className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 z-10 bg-transparent">
      
      {/* Category Eyebrow */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#080B10]/90 border border-white/15 backdrop-blur-2xl text-slate-200 text-xs mb-6 shadow-xl">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="font-semibold text-white tracking-wide">
          Turnkey Interior & Fit-Out OS
        </span>
        <span className="text-white/20">|</span>
        <span className="text-slate-300">BOQ • Procurement • JMR • RA Billing</span>
      </div>

      {/* Monumental Apple-Style Headline */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] apple-headline">
          Run every fit-out project from <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            one operating system.
          </span>
        </h1>

        <p className="apple-lead max-w-2xl mx-auto tracking-normal drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          Manage budgets, procurement, execution, billing and project margins from one connected platform. Built specifically for interior and turnkey contracting companies.
        </p>
      </div>

      {/* Primary & Secondary Action Pair */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8 w-full sm:w-auto">
        <button
          onClick={onOpenDemo}
          className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 active:scale-95 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer apple-interactive"
        >
          <span>Book a 15-Min Demo</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <a
          href="#product"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold text-xs bg-[#080B10]/80 border border-white/20 hover:border-white/40 hover:bg-[#080B10]/95 backdrop-blur-xl transition-all cursor-pointer apple-interactive"
        >
          <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/40" />
          <span>Watch Product Tour</span>
        </a>
      </div>

      {/* Architectural Deconstruction Layer Scrubber */}
      <div className="mt-10 w-full max-w-3xl mx-auto">
        <div className="p-2 rounded-2xl apple-glass shadow-2xl">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2 flex items-center justify-between px-3">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-emerald-400" />
              ARCHITECTURAL DECONSTRUCTION ENGINE
            </span>
            <span className="text-slate-300">INTERACTIVE PROJECT X-RAY</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {ARCHITECTURAL_STAGES.map((st, idx) => {
              const isSelected = (selectedStage ?? activeStage) === idx;
              return (
                <button
                  key={st.id}
                  onClick={() => handleStageClick(idx)}
                  className={`p-2.5 rounded-xl text-left transition-all text-xs font-mono border cursor-pointer apple-interactive ${
                    isSelected
                      ? 'bg-white text-slate-950 border-white shadow-lg font-bold'
                      : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-[9px]">
                    <span>0{idx + 1}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-emerald-600' : 'bg-white/20'}`} />
                  </div>
                  <div className="text-[11px] font-bold truncate mt-0.5 font-sans">
                    {idx === 0 ? 'Finished Interior' : idx === 1 ? 'Joinery & Framing' : idx === 2 ? 'MEP First-Fix' : 'Bare Concrete'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Early Genuine Product Proof Reveal: Elevation Platform Card */}
      <div className="mt-12 w-full max-w-4xl mx-auto">
        <div className="p-5 sm:p-7 rounded-3xl apple-glass shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-left space-y-4">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  CONSTRUCT-O-GENIE OS • EXECUTIVE PORTFOLIO RADAR
                </span>
                <h2 className="text-base sm:text-lg font-bold text-white font-display">
                  {DEMO_PROJECT.name}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-[11px] font-mono text-slate-300">
                GFC REV-04.2 LOCKED
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 font-bold">
                MARGIN PROTECTED 18.4%
              </span>
            </div>
          </div>

          {/* 4 Financial Mechanics Pillars in Hero */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs tabular-nums">
            <div className="p-3 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[10px] text-slate-400 block uppercase">Contract Value</span>
              <span className="text-sm sm:text-base font-bold text-white block mt-0.5">{formatINR(DEMO_PROJECT.contractValue, true)}</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Signed Tender Scope</span>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[10px] text-slate-400 block uppercase">Committed Expenses</span>
              <span className="text-sm sm:text-base font-bold text-white block mt-0.5">{formatINR(DEMO_PROJECT.poIssued, true)}</span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">Within Cost Ceiling</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-[10px] text-emerald-400 font-bold block uppercase">Certified JMR Billing</span>
              <span className="text-sm sm:text-base font-black text-emerald-400 block mt-0.5">{formatINR(DEMO_PROJECT.billedToClient, true)}</span>
              <span className="text-[10px] text-emerald-300 block mt-0.5">4 RA Bills Certified</span>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[10px] text-slate-400 block uppercase">Cash Collected</span>
              <span className="text-sm sm:text-base font-bold text-white block mt-0.5">{formatINR(DEMO_PROJECT.collectedFromClient, true)}</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Tally Sync Verified</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
