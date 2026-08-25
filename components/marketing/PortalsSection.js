'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  DollarSign,
  TrendingUp,
  Receipt,
  Eye,
  Lock
} from 'lucide-react';

export default function PortalsSection() {
  const [activePortal, setActivePortal] = useState('client'); // 'client' | 'vendor'

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <Eye className="w-3.5 h-3.5 text-emerald-400" />
          ECOSYSTEM TRANSPARENCY
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          Keep Clients & Vendors in Sync. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            Zero Billing Arguments.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light font-sans">
          Give your clients a polished live dashboard to approve milestones, and give subcontractors a vendor portal so you never receive duplicate bills.
        </p>
      </div>

      {/* Portal Selector Switcher */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setActivePortal('client')}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activePortal === 'client'
              ? 'bg-white text-slate-950 font-bold shadow-xl scale-105'
              : 'bg-[#0A0D14]/80 text-slate-300 hover:text-white border border-white/10 hover:border-white/25'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Client Live Progress Portal</span>
        </button>

        <button
          onClick={() => setActivePortal('vendor')}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
            activePortal === 'vendor'
              ? 'bg-white text-slate-950 font-bold shadow-xl scale-105'
              : 'bg-[#0A0D14]/80 text-slate-300 hover:text-white border border-white/10 hover:border-white/25'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Subcontractor & Vendor Hub</span>
        </button>
      </div>

      {/* Interactive Portal Glass Display */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-2xl text-left max-w-5xl mx-auto space-y-6">
        
        {activePortal === 'client' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                CLIENT EXPERIENCE PORTAL
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight font-display">
                Professional Transparency That Builds Trust & Clears Cheques Faster
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
                Clients can view verified site photos, track milestone progress, approve variation estimates digitally, and verify RA invoices without endless meetings.
              </p>

              <div className="space-y-2 pt-1 text-xs text-slate-200 font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Real-time photo updates verified by site architect</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>1-Click digital approval for client variation orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero scope disputes at project handover</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-3">
              <div className="flex justify-between border-b border-white/10 pb-2.5">
                <span className="text-white font-bold truncate pr-2">CLIENT VIEW: HORIZON TECH HQ</span>
                <span className="text-emerald-400 font-semibold shrink-0">STAGE 04 OF 06</span>
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex justify-between items-center">
                  <span>MEP First-Fix & VRF Testing</span>
                  <span className="text-emerald-400 font-bold">100% Verified ✓</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex justify-between items-center">
                  <span>Acoustic Fluted Wall Paneling</span>
                  <span className="text-emerald-400 font-bold">78% Complete</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex justify-between items-center text-emerald-300 font-bold">
                  <span>Certified RA Bill #04 Ready</span>
                  <span>₹1,48,20,000</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                SUBCONTRACTOR & SUPPLIER HUB
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight font-display">
                Locked Work Orders That Stop Duplicate Contractor Invoicing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
                Vendors see their approved purchase orders, upload measurement sheets directly, and track their payment advice (with TDS certificates and bank UTRs) automatically.
              </p>

              <div className="space-y-2 pt-1 text-xs text-slate-200 font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Subcontractor invoices locked to site gate deliveries (GRNs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Automatic calculation of 5% security retention & 2% TDS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Vendors self-serve payment UTRs without calling your accounts team</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-2.5">
              <div className="flex justify-between border-b border-white/10 pb-2.5">
                <span className="text-white font-bold truncate pr-2">SUBCONTRACTOR: GLASS & PARTITIONS</span>
                <span className="text-emerald-400 font-semibold shrink-0">PO-L03-GL-08</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-[10px] text-slate-400 uppercase">RECENT PAYMENT RECORD</div>
                <div className="text-white font-bold text-xs">RA Bill #03: Toughened Glass Partitions (140 Sqm)</div>
                <div className="text-emerald-300 text-xs font-bold">Net Paid: ₹18,42,800 • UTR #HDFC092834710</div>
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                <span>Tax Withheld (TDS): ₹17,200</span>
                <span>Retention Held: ₹43,000</span>
              </div>
            </div>
          </div>
        )}
      </div>

    </section>
  );
}