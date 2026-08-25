'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Check, 
  X, 
  FileText, 
  ArrowRight,
  Lock,
  Smartphone,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

export default function ApprovalStack({ onOpenDemo }) {
  const [poStatus, setPoStatus] = useState('pending'); // 'pending' | 'approved' | 'rejected'

  return (
    <section id="approvals" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          DELEGATE WITH TOTAL FINANCIAL CONTROL
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          Approve Big Purchases in 1 Click. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            Directly from Your Phone.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light font-sans">
          Give your project managers the freedom to order materials while ensuring high-value purchase orders never bypass your personal authorization.
        </p>
      </div>

      {/* Interactive Approval Simulator Console */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-2xl text-left max-w-4xl mx-auto space-y-6">
        
        {/* Voucher Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                PURCHASE ORDER VOUCHER #PO-2604-089
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-display">
                WoodCraft Studio — Acoustic Wall Paneling & Millwork
              </h3>
            </div>
          </div>

          <div className="font-mono text-right">
            <div className="text-[10px] text-slate-400 uppercase">PO VALUE</div>
            <div className="text-lg font-bold text-emerald-400">₹19,80,000</div>
          </div>
        </div>

        {/* 3-Tier Multi-Level Approval Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
          
          {/* Level 1: Site Engineer (Verified) */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-500/30 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-[10px]">STEP 1 : SITE PM</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">VERIFIED</span>
            </div>
            <div className="text-white font-bold">Quantity Verified on Site</div>
            <div className="text-[10px] text-slate-400">Matched with latest architectural layout</div>
          </div>

          {/* Level 2: Cost Control / QS (Approved) */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-500/30 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-[10px]">STEP 2 : ESTIMATION / QS</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">BUDGET CHECKED</span>
            </div>
            <div className="text-white font-bold">Under Quotation Limit</div>
            <div className="text-[10px] text-slate-400">Committed rate matches approved vendor deal</div>
          </div>

          {/* Level 3: Founder / Managing Director (Interactive) */}
          <div className={`p-3.5 rounded-2xl bg-black/40 border space-y-1.5 transition-all ${
            poStatus === 'approved' ? 'border-emerald-500/50 bg-emerald-950/20' : poStatus === 'rejected' ? 'border-rose-500/50 bg-rose-950/20' : 'border-amber-500/40'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-[10px]">STEP 3 : YOUR APPROVAL</span>
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${
                poStatus === 'approved' ? 'bg-emerald-500/20 text-emerald-400' : poStatus === 'rejected' ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-500/20 text-amber-400'
              }`}>
                {poStatus}
              </span>
            </div>
            <div className="text-white font-bold">&gt; ₹2 Lakhs Threshold</div>
            <div className="text-[10px] text-slate-400">Your final mobile authorization before dispatch</div>
          </div>

        </div>

        {/* Interactive Action Control */}
        <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300 font-sans">
            {poStatus === 'pending' && 'Simulate your executive decision as the Business Founder:'}
            {poStatus === 'approved' && '✓ Purchase Order approved by Director. Vendor notified automatically.'}
            {poStatus === 'rejected' && '✗ PO returned to Project Manager with modification note.'}
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {poStatus === 'pending' ? (
              <>
                <button
                  onClick={() => setPoStatus('rejected')}
                  className="px-4 py-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold hover:bg-rose-500/30 transition-all cursor-pointer"
                >
                  Reject PO
                </button>
                <button
                  onClick={() => setPoStatus('approved')}
                  className="px-5 py-2 rounded-xl bg-white text-slate-950 text-xs font-bold hover:bg-slate-200 transition-all cursor-pointer shadow-md"
                >
                  Approve PO (₹19.80L)
                </button>
              </>
            ) : (
              <button
                onClick={() => setPoStatus('pending')}
                className="px-4 py-1.5 rounded-xl bg-white/10 text-white text-xs hover:bg-white/20 transition-all cursor-pointer"
              >
                Reset Simulation
              </button>
            )}
          </div>
        </div>

      </div>

    </section>
  );
}