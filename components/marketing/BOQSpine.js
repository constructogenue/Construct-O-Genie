'use client';

import React, { useState } from 'react';
import { BOQ_SAMPLE_ITEMS } from './marketingData';
import { FileSpreadsheet, Link2, ArrowRight, Sparkles, CheckCircle2, Layers, Lock } from 'lucide-react';

export default function BOQSpine({ onOpenDemo }) {
  const [selectedItemId, setSelectedItemId] = useState('BOQ-01');
  const sel = BOQ_SAMPLE_ITEMS.find((b) => b.id === selectedItemId) || BOQ_SAMPLE_ITEMS[0];

  return (
    <section id="boq-spine" className="scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider mb-3 backdrop-blur-md">
          <FileSpreadsheet className="w-3.5 h-3.5" />
          ESTIMATION & RATE ANALYSIS ENGINE
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] font-display">
          The Living BOQ Spine. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Never Over-Indent Material Again.
          </span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 font-light">
          Every purchase order and site indent is linked to an approved BOQ line item with live balance locking.
        </p>
      </div>

      {/* Interactive Floating Glass BOQ Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left">
        
        {/* Left: Interactive BOQ Item Selector (5 Cols) */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="text-xs font-mono text-slate-400 px-1 uppercase tracking-wider font-semibold">
            Active Tender & Client BOQ Line Items
          </div>
          
          {BOQ_SAMPLE_ITEMS.map((item) => {
            const isSel = item.id === selectedItemId;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItemId(item.id)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSel
                    ? 'bg-[#0A0D14]/90 border-white/40 shadow-xl scale-[1.01]'
                    : 'bg-[#0A0D14]/60 border-white/10 hover:border-white/20 hover:bg-[#0A0D14]/80'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5 font-mono text-[10px]">
                  <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded">
                    ITEM {item.code}
                  </span>
                  <span className="text-slate-400">{item.package}</span>
                  <span className="text-emerald-400 font-bold">{item.status}</span>
                </div>
                <div className="text-xs font-medium text-slate-200 line-clamp-2">
                  {item.desc}
                </div>
                <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/10 font-mono text-[11px] text-slate-400">
                  <span>Qty: <strong className="text-white">{item.tenderQty} {item.unit}</strong></span>
                  <span>Budget: <strong className="text-white">₹{(item.totalBudget / 100000).toFixed(2)}L</strong></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Real-Time Locking Ledger Card (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-7 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-5">
            
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  ITEMIZED RATE ANALYSIS & BALANCE LOCK
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-display mt-0.5">
                  Item {sel.code} • {sel.package}
                </h3>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] font-bold flex items-center gap-1.5">
                <Lock className="w-3 h-3" />
                <span>PO CAPPED</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
              {sel.desc}
            </p>

            {/* Commercial Takeoff Spread */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-[10px] text-slate-400 uppercase">Tender Qty</div>
                <div className="text-white font-bold mt-0.5">{sel.tenderQty} {sel.unit}</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-[10px] text-slate-400 uppercase">Client Rate</div>
                <div className="text-white font-bold mt-0.5">₹{sel.clientRate.toLocaleString()}</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-[10px] text-slate-400 uppercase">Budget Cost Rate</div>
                <div className="text-emerald-400 font-bold mt-0.5">₹{sel.budgetCostRate.toLocaleString()}</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-[10px] text-slate-400 uppercase">GFC Revision</div>
                <div className="text-white font-bold mt-0.5">{sel.gfcRevision}</div>
              </div>
            </div>

            {/* Commitment Progress Bar */}
            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2 font-mono text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Committed Purchase Orders:</span>
                <span className="text-white font-bold">₹{sel.poCommitted.toLocaleString()} / ₹{sel.totalBudget.toLocaleString()}</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-400 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${(sel.poCommitted / sel.totalBudget) * 100}%` }} 
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                <span>Remaining Uncommitted PO Cap:</span>
                <span className="text-emerald-400 font-bold">₹{sel.poBalance.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <Link2 className="w-3.5 h-3.5 text-slate-300" />
                <span>Linked to Drawing: <strong className="text-white">{sel.drawingRef}</strong></span>
              </div>
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-slate-300 transition-colors cursor-pointer group"
              >
                <span>TEST BOQ REVISION DIFFS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
