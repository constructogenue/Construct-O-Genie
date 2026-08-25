'use client';

import React, { useState } from 'react';
import { 
  Receipt, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Layers, 
  Building2,
  TrendingUp,
  RefreshCw,
  Percent
} from 'lucide-react';

export default function FinanceFlow({ onOpenDemo }) {
  const [tallySynced, setTallySynced] = useState(true);

  return (
    <section id="finance" className="scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider mb-3 backdrop-blur-md">
          <Receipt className="w-3.5 h-3.5" />
          COMMERCIAL BILLING & TALLY SYNC
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] font-display">
          Accelerate Client Invoicing. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            From 42 Days Down to 4 Days.
          </span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 font-light">
          Generate Running Account (RA) bills directly from digitally signed Joint Measurement Records (JMR) with automated retention, advance recovery, and Tally Prime sync.
        </p>
      </div>

      {/* Main Finance Console */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-2xl text-left space-y-6">
        
        {/* Certificate Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
              CLIENT RUNNING ACCOUNT BILL • RA BILL #04
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display mt-0.5">
              Horizon Technologies Ltd. • ₹48,25,000 Certified
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTallySynced(!tallySynced)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono flex items-center gap-2 cursor-pointer transition-all ${
                tallySynced ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold' : 'bg-amber-500/10 border border-amber-500/20 text-amber-400'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${tallySynced ? '' : 'animate-spin'}`} />
              <span>{tallySynced ? 'TALLY PRIME 2-WAY SYNCED' : 'SYNCING VOUCHERS...'}</span>
            </button>
          </div>
        </div>

        {/* Financial Line Item Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
            <div className="text-[10px] text-slate-400 uppercase">Gross Certified Work Value</div>
            <div className="text-xl font-bold text-white">₹48,25,000</div>
            <div className="text-[10px] text-emerald-400">Backed by JMR Sheets #04A - #04F</div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
            <div className="text-[10px] text-slate-400 uppercase">Statutory Deductions (TDS + Retention)</div>
            <div className="text-xl font-bold text-amber-400">- ₹4,82,500</div>
            <div className="text-[10px] text-slate-400">5% Retention (₹2.41L) + 2% TDS + 3% Advance Rec.</div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
            <div className="text-[10px] text-slate-400 uppercase">Net Realized Client Receivable</div>
            <div className="text-xl font-bold text-emerald-400">₹43,42,500</div>
            <div className="text-[10px] text-slate-400">Due in 15 days as per agreement terms</div>
          </div>

        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans">
          {[
            { title: 'Tripartite JMRs', desc: 'Digital measurement sign-off between Client QS, Contractor PM, and Architect.' },
            { title: 'Tax & GST Native', desc: 'Automatic calculation of CGST, SGST, IGST, and Section 194C TDS withholdings.' },
            { title: 'Retention Ledger', desc: 'Auto-track DLP completion dates for hassle-free retention release without disputes.' },
            { title: 'Tally Prime Connect', desc: 'Auto-post sales invoices, contractor debit notes, and payment vouchers into Tally.' },
          ].map((f, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-black/30 border border-white/5 space-y-1">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{f.title}</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
