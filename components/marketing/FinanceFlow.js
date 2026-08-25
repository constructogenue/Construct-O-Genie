'use client';

import React, { useState } from 'react';
import { 
  Receipt, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  RefreshCw, 
  FileSpreadsheet, 
  Building2,
  Lock,
  Sparkles,
  Server
} from 'lucide-react';

const ERP_SYSTEMS = [
  { id: 'tally', name: 'Tally Prime (Gold/Server)', type: 'Direct 2-Way XML Sync' },
  { id: 'sap', name: 'SAP S/4HANA & ECC', type: 'OData / BAPI Integration' },
  { id: 'zoho', name: 'Zoho Books Enterprise', type: 'REST API Webhook' },
  { id: 'oracle', name: 'Oracle NetSuite / Custom ERP', type: 'Database Bridge' },
];

export default function FinanceFlow({ onOpenDemo }) {
  const [selectedErp, setSelectedErp] = useState('tally');
  const [syncState, setSyncState] = useState('idle'); // 'idle' | 'syncing' | 'synced'

  const triggerSync = () => {
    setSyncState('syncing');
    setTimeout(() => {
      setSyncState('synced');
      setTimeout(() => setSyncState('idle'), 4000);
    }, 1200);
  };

  const currentErp = ERP_SYSTEMS.find((e) => e.id === selectedErp) || ERP_SYSTEMS[0];

  return (
    <section id="finance" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <Receipt className="w-3.5 h-3.5" />
          COMMERCIAL BILLING & ERP INTEGRATION
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          From Certified Site JMRs <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            Directly into Tally, SAP & other ERPs.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light font-sans">
          Eliminate double entry between your site measurements and accounts desk. Generate client RA bills with automated statutory deductions and sync ledger vouchers with one click.
        </p>
      </div>

      {/* ERP Platform Selector */}
      <div className="flex flex-wrap justify-center gap-2">
        {ERP_SYSTEMS.map((erp) => {
          const isActive = erp.id === selectedErp;
          return (
            <button
              key={erp.id}
              onClick={() => setSelectedErp(erp.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-white text-slate-950 font-bold shadow-lg scale-105'
                  : 'bg-[#0A0D14]/80 text-slate-300 hover:text-white border border-white/10 hover:border-white/25'
              }`}
            >
              <Server className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
              <span>{erp.name.split('(')[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Billing & ERP Simulator */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-2xl text-left max-w-5xl mx-auto space-y-6">
        
        {/* Bill Overview Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              CLIENT RUNNING ACCOUNT BILL #RA-04 (STATIONARY WORKSPACE HQ)
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-display mt-0.5">
              Cumulative Certified Valuation — Stage 04
            </h3>
          </div>

          {/* Sync Trigger Button */}
          <button
            onClick={triggerSync}
            disabled={syncState === 'syncing'}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-300 active:scale-95 transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${syncState === 'syncing' ? 'animate-spin' : ''}`} />
            <span>
              {syncState === 'idle' && `Sync with ${currentErp.name.split('(')[0]}`}
              {syncState === 'syncing' && `Connecting to ${currentErp.name.split('(')[0]}...`}
              {syncState === 'synced' && 'Synced Successfully ✓'}
            </span>
          </button>
        </div>

        {/* Financial Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left: Commercial Numbers (7 Cols) */}
          <div className="md:col-span-7 space-y-3 font-mono text-xs">
            <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 space-y-2">
              <div className="flex justify-between text-slate-300">
                <span>Gross Certified Work Completed (JMR #04):</span>
                <span className="text-white font-bold">₹1,48,20,000</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Output GST @ 18% (Tax Invoice):</span>
                <span className="text-white font-bold">+₹26,67,600</span>
              </div>
              <div className="flex justify-between text-slate-400 border-t border-white/10 pt-2">
                <span>Total Invoice Billing Value:</span>
                <span className="text-white font-bold text-sm">₹1,74,87,600</span>
              </div>
            </div>

            {/* Statutory Deductions */}
            <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 space-y-1.5 text-[11px]">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                STATUTORY & CONTRACTUAL WITHHOLDINGS
              </span>
              <div className="flex justify-between text-rose-300">
                <span>Client Retention Held (5% of Gross):</span>
                <span>-₹7,41,000</span>
              </div>
              <div className="flex justify-between text-rose-300">
                <span>Contractor TDS u/s 194C (2%):</span>
                <span>-₹2,96,400</span>
              </div>
              <div className="flex justify-between text-rose-300">
                <span>Mobilization Advance Recovery (10%):</span>
                <span>-₹14,82,000</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-bold border-t border-white/10 pt-1.5 text-xs">
                <span>Net Cash Receivable:</span>
                <span>₹1,49,68,200</span>
              </div>
            </div>
          </div>

          {/* Right: Live ERP Transmission Packet (5 Cols) */}
          <div className="md:col-span-5 p-4 rounded-2xl bg-black/70 border border-white/10 font-mono text-[11px] space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400 uppercase text-[10px]">ERP LEDGER PACKET</span>
                <span className="text-emerald-400 text-[10px] font-bold">2-WAY HANDSHAKE</span>
              </div>
              <div className="text-slate-300 space-y-1 text-[10px]">
                <div>&gt; Target: <strong className="text-white">{currentErp.name}</strong></div>
                <div>&gt; Protocol: <span className="text-slate-400">{currentErp.type}</span></div>
                <div>&gt; Ledger: <span className="text-slate-300">CLIENT_DEBTORS_A/C</span></div>
                <div>&gt; Voucher: <strong className="text-emerald-300">#SALES-2604-041</strong></div>
                <div>&gt; Status: <span className="text-white">{syncState === 'synced' ? 'COMMITTED & LOCKED' : 'AWAITING DISPATCH'}</span></div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[10px] text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 inline mr-1" />
              <span>Full GST E-Way Bill & E-Invoicing compliant payload.</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}