'use client';

import React from 'react';
import { DEMO_PROJECT, formatINR } from './marketingData';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function CaseBreakdown({ onOpenDemo }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      
      {/* Clearly Identified Illustrative Model */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300">
          <span>MODELLED REFERENCE CASE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Illustrative Project Scenario
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Comparing disconnected manual workflows against connected project controls for a 42,500 sq.ft commercial office fit-out.
        </p>
      </div>

      {/* Side-by-Side Comparison Container */}
      <div className="rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl p-6 sm:p-8">
        
        {/* Project Header Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
          <div>
            <span className="text-xs font-mono text-slate-400">REFERENCE SPECIFICATION</span>
            <h3 className="text-lg font-bold text-white mt-0.5">42,500 sq.ft Commercial Fit-Out (Gurugram)</h3>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-400">Contract Value: </span>
              <span className="font-bold text-white">{formatINR(DEMO_PROJECT.contractValue, true)}</span>
            </div>
            <div>
              <span className="text-slate-400">Tender Baseline: </span>
              <span className="font-bold text-slate-300">{formatINR(DEMO_PROJECT.bcsBudget, true)}</span>
            </div>
          </div>
        </div>

        {/* Before vs With Construct-O-Genie Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Column 1: Disconnected Manual Operations */}
          <div className="p-5 sm:p-6 rounded-xl bg-red-500/[0.02] border border-red-500/15 space-y-4">
            <div className="flex items-center gap-2 text-rose-400">
              <AlertTriangle className="w-4 h-4" />
              <h4 className="text-sm font-bold uppercase tracking-wider">Without Connected Controls</h4>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">JMR &amp; Billing Cycle:</span>
                <span className="font-mono text-rose-300 font-semibold">~28 Days (Disputes)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Uncaptured Scope Variations:</span>
                <span className="font-mono text-rose-300 font-semibold">~5.8% Scope Leakage</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Procurement Budget Control:</span>
                <span className="text-slate-400">Post-facto Tally Entry</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Typical Realized Gross Margin:</span>
                <span className="font-mono text-rose-400 font-bold">~12.5% (Margin Slippage)</span>
              </div>
            </div>
          </div>

          {/* Column 2: With Construct-O-Genie OS */}
          <div className="p-5 sm:p-6 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/20 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <h4 className="text-sm font-bold uppercase tracking-wider">With Integrated Workflow</h4>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Potential JMR Turnaround:</span>
                <span className="font-mono text-emerald-400 font-semibold">~4 Days (Digital Sign-Off)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Variation Capture:</span>
                <span className="font-mono text-emerald-400 font-semibold">Flagged before PO Issuance</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Procurement Budget Control:</span>
                <span className="text-emerald-300">Hard BCC Line Locking</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Target / Protected Gross Margin:</span>
                <span className="font-mono text-emerald-400 font-bold">18.34% ({formatINR(DEMO_PROJECT.projectedGrossProfit, true)})</span>
              </div>
            </div>
          </div>

        </div>

        {/* Prominent Mandatory Disclaimer */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center text-xs text-slate-400">
          Illustrative scenario. Actual results depend on project workflow, client certification, and operating discipline.
        </div>

      </div>

    </section>
  );
}
