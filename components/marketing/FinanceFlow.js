'use client';

import React from 'react';
import { 
  Receipt, 
  ArrowDown, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  CheckCircle2,
  FileCheck2,
  PieChart,
  Layers,
  Sparkles
} from 'lucide-react';
import { DEMO_PROJECT } from './marketingData';

export default function FinanceFlow() {
  return (
    <section id="finance-flow" className="py-28 bg-[#06080B] border-b border-white/[0.08] relative overflow-hidden">
      
      {/* Background CAD Grid */}
      <div className="absolute inset-0 cad-grid-pattern opacity-20 pointer-events-none" />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-4 shadow-lg shadow-cyan-950/30">
            <Receipt className="w-3.5 h-3.5" />
            PROJECT-CENTRIC FINANCIAL CONTROL
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Financial control built <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-white">
              around the project.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Traditional accounting software tracks corporate ledgers months late. Construct-O-Genie tracks live project cashflows, progressive client billings, vendor RA bills, 194C TDS, and net margin in real time.
          </p>
        </div>

        {/* Financial Flow Architecture (Sankey / Connected Stream) */}
        <div className="rounded-3xl bg-[#0B0F16] border border-white/[0.1] p-6 sm:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.8)] space-y-10">
          
          {/* Top Level: Dual Streams */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* INFLOW STREAM */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0E1420] border border-cyan-500/30 space-y-4 font-mono">
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  01. INFLOW STREAM (CLIENT REVENUE)
                </span>
                <span className="text-[10px] text-slate-400">MILESTONE BILLING</span>
              </div>

              <div className="space-y-3.5 text-xs">
                
                <div className="p-4 rounded-2xl bg-[#070A0F] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Contract BOQ Value</div>
                    <div className="text-lg sm:text-xl font-bold text-white font-sans mt-0.5">₹4,82,50,000</div>
                  </div>
                  <span className="text-[10px] text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/40 font-bold">
                    AGREEMENT SIGNED
                  </span>
                </div>

                <div className="flex justify-center text-cyan-400">
                  <ArrowDown className="w-5 h-5" />
                </div>

                <div className="p-4 rounded-2xl bg-[#070A0F] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Progressive Invoices Raised</div>
                    <div className="text-lg sm:text-xl font-bold text-white font-sans mt-0.5">₹3,08,00,000</div>
                  </div>
                  <span className="text-[10px] text-slate-300 font-bold">
                    RA Bills #01, #02, #03
                  </span>
                </div>

                <div className="flex justify-center text-cyan-400">
                  <ArrowDown className="w-5 h-5" />
                </div>

                <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-cyan-400 uppercase font-bold">Collected Inflow</div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-400 font-sans mt-0.5">₹2,62,00,000</div>
                  </div>
                  <div className="text-right font-sans">
                    <span className="text-[11px] text-slate-300 block font-mono">Retention: ₹24.0L</span>
                    <span className="text-xs text-emerald-400 font-bold">85% Realized</span>
                  </div>
                </div>

              </div>
            </div>

            {/* OUTFLOW STREAM */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#14120D] border border-amber-500/30 space-y-4 font-mono">
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  02. OUTFLOW STREAM (PROCUREMENT & VENDORS)
                </span>
                <span className="text-[10px] text-slate-400">MAKER/CHECKER CONTROL</span>
              </div>

              <div className="space-y-3.5 text-xs">
                
                <div className="p-4 rounded-2xl bg-[#070A0F] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Cost Budget (BCS)</div>
                    <div className="text-lg sm:text-xl font-bold text-white font-sans mt-0.5">₹3,94,00,000</div>
                  </div>
                  <span className="text-[10px] text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-500/40 font-bold">
                    APPROVED BUDGET
                  </span>
                </div>

                <div className="flex justify-center text-amber-400">
                  <ArrowDown className="w-5 h-5" />
                </div>

                <div className="p-4 rounded-2xl bg-[#070A0F] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Purchase Orders (14 POs)</div>
                    <div className="text-lg sm:text-xl font-bold text-white font-sans mt-0.5">₹2,14,20,000</div>
                  </div>
                  <span className="text-[10px] text-slate-300 font-bold">
                    Committed to Vendors
                  </span>
                </div>

                <div className="flex justify-center text-amber-400">
                  <ArrowDown className="w-5 h-5" />
                </div>

                <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-amber-400 uppercase font-bold">Net Vendor Remittances</div>
                    <div className="text-xl sm:text-2xl font-black text-white font-sans mt-0.5">₹1,54,00,000</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-purple-400 block font-bold">TDS (194C): ₹3,76,000</span>
                    <span className="text-xs text-teal-400 font-semibold">Auto Advice Sent</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Convergence Node: Realized Project Margin */}
          <div className="p-6 sm:p-9 rounded-3xl bg-gradient-to-r from-[#0e1724] via-[#09111b] to-[#0e1724] border border-cyan-500/50 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 font-mono">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] text-cyan-400 uppercase tracking-widest block font-bold">
                  CONVERGENCE OUTPUT // LIVE PROJECT P&L
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-sans">
                  Realized Net Profit: ₹88,72,000
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-8 text-right">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-bold">Gross Margin</div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-sans">18.4%</div>
              </div>
              <div className="hidden sm:block border-l border-white/10 pl-8 text-left text-xs text-slate-300">
                <span>Budget Variance: <strong className="text-emerald-400">+0.4%</strong></span>
                <span className="block text-cyan-400 font-bold mt-0.5">Tally XML Export: 100% Ready</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
