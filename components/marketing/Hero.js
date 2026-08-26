'use client';

import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { ARCHITECTURAL_STAGES } from './ArchitecturalCanvas';
import { DEMO_PROJECT, formatINR } from './marketingData';

export default function Hero({ onOpenDemo, onStageSelect, activeStage }) {
  const scrollToPlatform = () => {
    const el = document.getElementById('product-tour');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      
      {/* Top Value Positioning Badge */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-medium text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Fit-Out Project Operating System</span>
          <span className="text-white/30">•</span>
          <span className="text-slate-400">Built for ₹10 Cr – ₹500 Cr+ Turnkey Contractors</span>
        </div>
      </div>

      {/* Main Headline & Supporting Proposition */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12]">
          Run every fit-out project from <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            one operating system.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Living BOQ line locking, itemized purchase ceilings, mobile site DPRs, certified JMR sign-offs, and two-way accounting sync.
        </p>

        {/* Workflow Chain Visual */}
        <div className="pt-2 pb-2">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-400 bg-black/40 px-4 py-2 rounded-lg border border-white/5 backdrop-blur-sm">
            <span className="text-white font-semibold">BOQ</span>
            <span className="text-slate-600">→</span>
            <span className="text-slate-200">Procurement</span>
            <span className="text-slate-600">→</span>
            <span className="text-slate-200">Execution</span>
            <span className="text-slate-600">→</span>
            <span className="text-slate-200">Billing</span>
            <span className="text-slate-600">→</span>
            <span className="text-emerald-400 font-semibold">Margin</span>
          </div>
        </div>

        {/* Primary & Secondary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition-all duration-200 shadow-lg shadow-white/10 flex items-center justify-center gap-2.5 active:scale-[0.98]"
          >
            <span>Book a 15-Min Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToPlatform}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 font-medium text-sm border border-white/10 transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <span>Explore the Platform</span>
          </button>
        </div>
      </div>

      {/* PROJECT X-RAY: Signature Architectural Deconstruction Control */}
      <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
        <div className="rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl p-4 sm:p-6 shadow-2xl">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  PROJECT X-RAY
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Deconstruct a 42,500 sq.ft commercial interior backwards from handover to bare shell
              </p>
            </div>

            {/* Quick Live Demo Metric */}
            <div className="flex items-center gap-3 text-xs bg-white/[0.03] px-3.5 py-1.5 rounded-lg border border-white/5">
              <span className="text-slate-400">Contract Value:</span>
              <span className="font-semibold text-white font-mono">{formatINR(DEMO_PROJECT.contractValue, true)}</span>
              <span className="text-white/20">•</span>
              <span className="text-slate-400">Protected Margin:</span>
              <span className="font-semibold text-emerald-400 font-mono">{DEMO_PROJECT.projectedMargin}%</span>
            </div>
          </div>

          {/* 4 Interactive Stage Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-5">
            {ARCHITECTURAL_STAGES.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => onStageSelect(idx)}
                  className={`text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white/[0.08] border-white/30 shadow-md ring-1 ring-white/20'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/15'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-semibold tracking-wide ${
                        isSelected ? 'text-white' : 'text-slate-400'
                      }`}>
                        {stage.title}
                      </span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 leading-snug line-clamp-2">
                      {stage.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 mt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">
                      {idx === 0 && 'Handover'}
                      {idx === 1 && 'Joinery & Finishes'}
                      {idx === 2 && 'MEP & Conduits'}
                      {idx === 3 && 'Base Building'}
                    </span>
                    <span className={`font-mono font-medium ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                      0{idx + 1}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Helper caption */}
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span>Click any stage above to inspect layer controls or scroll down to deconstruct smoothly.</span>
            <span className="font-mono text-slate-400">Fixed 1-Point Perspective • DLF Cyber City</span>
          </div>

        </div>
      </div>

    </section>
  );
}
