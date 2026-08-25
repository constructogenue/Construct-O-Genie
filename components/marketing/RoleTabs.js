'use client';

import React, { useState } from 'react';
import { ROLE_EXPERIENCES } from './marketingData';
import { 
  Building2, 
  Calculator, 
  Layers, 
  HardHat, 
  Receipt,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Activity,
  FileCheck2,
  TrendingUp,
  Smartphone
} from 'lucide-react';

const ROLE_ICONS = {
  founder: Building2,
  qs: Calculator,
  pm: Layers,
  site: HardHat,
  finance: Receipt,
};

export default function RoleTabs({ onOpenDemo }) {
  const [activeRoleId, setActiveRoleId] = useState('founder');
  const role = ROLE_EXPERIENCES.find((r) => r.id === activeRoleId) || ROLE_EXPERIENCES[0];
  const IconComponent = ROLE_ICONS[role.id] || Building2;

  return (
    <section id="roles" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          PERSONA-TAILORED OPERATIONAL VIEWS
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          One Single Source of Truth. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Dedicated Workspaces for Every Role.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light font-sans">
          Whether you're estimating tender quantities, managing site snags, or releasing subcontractor retentions, Construct-O-Genie equips your team with purpose-built workflows.
        </p>
      </div>

      {/* Role Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {ROLE_EXPERIENCES.map((r) => {
          const isActive = r.id === activeRoleId;
          const RoleIcon = ROLE_ICONS[r.id] || Building2;
          return (
            <button
              key={r.id}
              onClick={() => setActiveRoleId(r.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-white text-slate-950 font-bold shadow-xl scale-105'
                  : 'bg-[#0A0D14]/80 text-slate-300 hover:text-white border border-white/10 hover:border-white/25'
              }`}
            >
              <RoleIcon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
              <span>{r.role.split('/')[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Role Interactive Container: 12-Column Split (Left: Specs, Right: Interactive Software UI Mockup) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-2xl text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-3 rounded-2xl bg-white/10 text-white">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  ACTIVE ROLE PERSPECTIVE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display mt-0.5">
                  {role.role}
                </h3>
              </div>
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              {role.tagline}
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
              {role.description}
            </p>

            <div className="space-y-2.5 pt-1">
              {role.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-slate-300 transition-colors uppercase tracking-wider"
              >
                <span>EXPLORE {role.role.split('/')[0].toUpperCase()} WORKSPACE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Live Software UI Mockup Frame (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-black/70 p-4 sm:p-5 shadow-2xl space-y-4 font-mono text-xs">
              
              {/* Mockup Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[10px] text-slate-400 ml-2">COG-OS :: {role.id.toUpperCase()}_CONSOLE</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-emerald-400 font-bold">LIVE SYNCED</span>
              </div>

              {/* Dynamic UI Content based on Role */}
              {activeRoleId === 'founder' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[9px] text-slate-400 block">PORTFOLIO GP</span>
                      <span className="text-emerald-400 font-bold text-sm">21.4% (Locked)</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[9px] text-slate-400 block">UNBILLED RA</span>
                      <span className="text-white font-bold text-sm">₹1.84 Cr</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                      <span className="text-[9px] text-slate-400 block">RISK FLAGS</span>
                      <span className="text-amber-400 font-bold text-sm">0 Critical</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-white font-bold">Pending Executive PO Approval (&gt; ₹5L):</span>
                      <span className="text-amber-400 font-semibold">PO #2604-89</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Vendor: WoodCraft Studios | Value: ₹19.80 Lakhs | Target Margin: 19.2%</div>
                  </div>
                </div>
              )}

              {activeRoleId === 'qs' && (
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex justify-between text-[11px] text-white">
                      <span className="font-bold">Item #04.01.A — Acoustic Fluted Oak Paneling</span>
                      <span className="text-emerald-400">Rev-04 Approved</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Tender: 480 Sqm @ ₹7,200 | Cost Budget: ₹5,450 | PO Commit: ₹19.80L</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-slate-400">Material (58%)</div>
                      <div className="text-white font-bold">₹3,161/Sqm</div>
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-slate-400">Labor (26%)</div>
                      <div className="text-white font-bold">₹1,417/Sqm</div>
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-slate-400">P&M (16%)</div>
                      <div className="text-white font-bold">₹872/Sqm</div>
                    </div>
                  </div>
                </div>
              )}

              {activeRoleId === 'pm' && (
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                    <div>
                      <div className="text-white font-bold text-[11px]">HVAC Ducting & VRF Testing</div>
                      <div className="text-[10px] text-slate-400">Contractor: Climatech Engg | Target: 28 Aug</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">ON SCHEDULE</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                    <div>
                      <div className="text-white font-bold text-[11px]">Toughened Glass 12mm Delivery</div>
                      <div className="text-[10px] text-slate-400">Vendor: Saint-Gobain Certified | GRN #091</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">GRN VERIFIED</span>
                  </div>
                </div>
              )}

              {activeRoleId === 'site' && (
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-white font-bold flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                        Daily Progress Report #42 (Offline Sync)
                      </span>
                      <span className="text-emerald-400 text-[10px] font-bold">VERIFIED</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Site Labor: 38 Heads (Carpenters: 16, Electricians: 12, Masons: 10)</div>
                    <div className="text-[10px] text-slate-300">Tripartite JMR #04 signed by Architect on tablet.</div>
                  </div>
                </div>
              )}

              {activeRoleId === 'finance' && (
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-white font-bold">Client RA Bill #04 (Tally & SAP Synced)</span>
                      <span className="text-emerald-400 font-bold">₹1,48,20,000</span>
                    </div>
                    <div className="text-[10px] text-slate-400 flex justify-between">
                      <span>GST (18%): ₹26,67,600</span>
                      <span>TDS (2%): -₹2,96,400</span>
                      <span>Retention (5%): -₹7,41,000</span>
                    </div>
                    <div className="pt-1 text-[10px] text-emerald-300 font-bold">
                      2-Way Voucher Generated in Tally Prime & SAP ECC
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}