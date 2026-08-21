'use client';

import React from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  FileSpreadsheet, 
  MessageSquare, 
  AlertTriangle, 
  HelpCircle, 
  Clock,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck
} from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="py-28 bg-[#070A0F] border-b border-white/[0.08] relative overflow-hidden">
      
      {/* Background Accent Grids */}
      <div className="absolute inset-0 cad-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-[11px] uppercase tracking-wider mb-4 shadow-lg shadow-red-950/30">
            <AlertTriangle className="w-3.5 h-3.5" />
            THE INTERIOR INDUSTRY BOTTLENECK
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Your business has outgrown <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-amber-500">
              WhatsApp + Excel.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Interior execution is fast and unforgiving. When 15 departments communicate through spreadsheets and disconnected chat groups, drawings get superseded, procurement leaks margin, and client billing is delayed.
          </p>
        </div>

        {/* Dual Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: Without Construct-O-Genie (The Fragmented Chaos) */}
          <div className="p-7 sm:p-10 rounded-3xl bg-[#0B0F16] border border-red-500/25 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-red-500/15 border-l border-b border-red-500/30 font-mono text-[11px] text-red-400 uppercase font-bold">
              WITHOUT CONSTRUCT-O-GENIE
            </div>

            <div>
              <div className="flex items-center gap-3.5 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-sans">The Fragmented Chaos</h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">12 DISCONNECTED TOOLS & CHAT THREADS</p>
                </div>
              </div>

              {/* Abstract Communication Cards */}
              <div className="space-y-3.5 font-mono text-xs">
                
                <div className="p-4 rounded-2xl bg-[#0F141F] border border-white/[0.06] text-slate-300 flex items-start gap-3.5">
                  <FileSpreadsheet className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-bold text-white flex items-center justify-between">
                      <span className="truncate">BOQ_Horizon_v7_FINAL_rev3(2).xlsx</span>
                      <span className="text-[10px] text-red-400 font-bold shrink-0 ml-2">Unverified Version</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-sans">
                      Estimator updated rates on desktop. Site procurement ordered from outdated rev 2.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0F141F] border border-white/[0.06] text-slate-300 flex items-start gap-3.5">
                  <MessageSquare className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-bold text-white">
                      "Sir please approve ₹8.4L marble PO urgently, vendor dispatching"
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-sans">
                      Director doesn't know available category budget or if drawing was revised.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0F141F] border border-white/[0.06] text-slate-300 flex items-start gap-3.5">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-bold text-white">
                      Site installed superseded GFC Rev 02 instead of Rev 04
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-sans">
                      ₹3.2L rework required. Client disputes invoice and delays milestone release.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0F141F] border border-white/[0.06] text-slate-300 flex items-start gap-3.5">
                  <HelpCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-bold text-white">
                      Finance checking bank statements for vendor UTR numbers
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-sans">
                      Subcontractors repeatedly calling site engineers inquiring about payment status.
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-7 pt-4 border-t border-white/[0.08] text-xs font-mono text-red-400 flex items-center justify-between font-bold">
              <span>Result: Uncontrolled margin erosion</span>
              <span>EST. 4-8% REVENUE LOSS</span>
            </div>
          </div>

          {/* RIGHT: With Construct-O-Genie (Unified Project Operating Layer) */}
          <div className="p-7 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0e1624] to-[#0a101a] border border-cyan-500/50 shadow-[0_25px_80px_rgba(0,240,255,0.15)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-cyan-500/20 border-l border-b border-cyan-500/40 font-mono text-[11px] text-cyan-300 uppercase font-black">
              WITH CONSTRUCT-O-GENIE
            </div>

            <div>
              <div className="flex items-center gap-3.5 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-sans">One Project. One Source of Truth.</h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5 font-bold">SYNCHRONIZED OPERATING LAYER</p>
                </div>
              </div>

              {/* Clean Connected Workflows */}
              <div className="space-y-4 font-mono text-xs">
                
                <div className="p-4 rounded-2xl bg-[#09111c]/90 border border-cyan-500/30 text-slate-200 flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-black shrink-0 text-xs">
                    01
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm font-sans">
                      Design knows what changed.
                    </div>
                    <div className="text-slate-300 text-xs mt-0.5 font-sans">
                      GFC Drawing Vault distributes latest approved revisions directly to site tablets.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#12110c]/90 border border-amber-500/30 text-slate-200 flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 font-black shrink-0 text-xs">
                    02
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm font-sans">
                      Procurement knows what to order.
                    </div>
                    <div className="text-slate-300 text-xs mt-0.5 font-sans">
                      POs generated directly from BOQ items with strict category budget guardrails.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0a1410]/90 border border-emerald-500/30 text-slate-200 flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-black shrink-0 text-xs">
                    03
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm font-sans">
                      Site knows what to execute.
                    </div>
                    <div className="text-slate-300 text-xs mt-0.5 font-sans">
                      Digital DPRs, JMRs, and gate delivery notes sync in real-time to HQ.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#110d18]/90 border border-purple-500/30 text-slate-200 flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-black shrink-0 text-xs">
                    04
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm font-sans">
                      Finance knows what it costs & Management sees the margin.
                    </div>
                    <div className="text-slate-300 text-xs mt-0.5 font-sans">
                      Automated 194C TDS, vendor remittance advice & live project P&L.
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-7 pt-4 border-t border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center justify-between font-bold">
              <span>Result: Guaranteed 18.4% projected gross margin</span>
              <span>TOTAL CONTROL</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
