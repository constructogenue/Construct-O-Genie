'use client';

import React, { useState } from 'react';
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
  TrendingUp,
  Smartphone,
  Sparkles
} from 'lucide-react';

const FOUNDER_ROLES = [
  {
    id: "founder",
    role: "For You (The Founder & MD)",
    tagline: "Live Profit Radar & Total Peace of Mind",
    description: "Run your entire contracting company from your phone. See live gross profit margins across every active site, track money collected vs client dues, and approve large vendor POs in 1 click.",
    highlights: [
      "Real-time company gross profit margin updated live",
      "1-Click mobile approvals for purchase orders > ₹2 Lakhs",
      "Instant visibility into cash flow & unbilled client dues",
      "Zero need to call 5 project managers every evening"
    ],
    mockupType: "founder"
  },
  {
    id: "qs",
    role: "For Your Estimator & QS",
    tagline: "Winning Quotations with Protected Profit",
    description: "Upload client tender BOQs from Excel in seconds. Create accurate quotations that automatically lock material, labor, and subcontractor cost ceilings before site mobilization.",
    highlights: [
      "Instant Excel BOQ upload and smart item mapping",
      "Detailed rate analysis for wood, glass, electrical & civil works",
      "Locks purchase budgets so site teams cannot overspend",
      "Instant client variation orders for every drawing change"
    ],
    mockupType: "qs"
  },
  {
    id: "pm",
    role: "For Your Project Managers",
    tagline: "Smooth Multi-Site Execution Without Chaos",
    description: "Manage multiple turnkey projects simultaneously. Track subcontractor delivery schedules, verify gate receipts (GRNs), and hit project completion dates on time.",
    highlights: [
      "Manage all trade packages from framing to final polish",
      "Generate verified subcontractor work orders in seconds",
      "Verify material delivery at site gate (prevents theft/shortage)",
      "Daily milestone schedule radar with delay alerts"
    ],
    mockupType: "pm"
  },
  {
    id: "site",
    role: "For Your Site Supervisors",
    tagline: "Simple Mobile Logs from the Field",
    description: "Your site engineers don't need laptops. They use a simple mobile app to log daily worker headcounts, snap snag photos, and record client architect measurement sign-offs.",
    highlights: [
      "Simple mobile Daily Progress Reports (DPR) with offline support",
      "Photo snagging pinned directly to room plans",
      "Digital client architect Joint Measurement sign-offs on tablet",
      "Replaces messy, unorganized site WhatsApp groups"
    ],
    mockupType: "site"
  },
  {
    id: "finance",
    role: "For Your Accounts Team",
    tagline: "Fast Client Billing & 2-Way Tally/SAP Sync",
    description: "Generate client Running Account (RA) bills directly from verified site work. Automatically calculate GST, contractor TDS, and retention withholdings, then sync straight into Tally or SAP.",
    highlights: [
      "Client RA bills generated in 24 hours (not 40 days)",
      "Automatic contractor TDS (u/s 194C) & retention tracking",
      "Direct two-way synchronization into Tally, SAP & other ERPs",
      "Faster payment recovery and healthy company cash flow"
    ],
    mockupType: "finance"
  }
];

const ROLE_ICONS = {
  founder: Building2,
  qs: Calculator,
  pm: Layers,
  site: HardHat,
  finance: Receipt,
};

export default function RoleTabs({ onOpenDemo }) {
  const [activeRoleId, setActiveRoleId] = useState('founder');
  const role = FOUNDER_ROLES.find((r) => r.id === activeRoleId) || FOUNDER_ROLES[0];
  const IconComponent = ROLE_ICONS[role.id] || Building2;

  return (
    <section id="roles" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          EMPOWER YOUR ENTIRE TEAM
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          How It Gives You Total Freedom <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            While Your Team Runs the Sites.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light font-sans">
          Construct-O-Genie gives every person in your company a dedicated, simple workspace — while rolling up every Rupee into your executive founder dashboard.
        </p>
      </div>

      {/* Role Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {FOUNDER_ROLES.map((r) => {
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
              <span>{r.role.split('(')[1] ? r.role.split('(')[1].replace(')', '') : r.role}</span>
            </button>
          );
        })}
      </div>

      {/* Role Interactive Container */}
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
                  ROLE WORKSPACE
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
                <span>REQUEST FOUNDER WALKTHROUGH</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Live Software UI Mockup Frame (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-black/75 p-4 sm:p-5 shadow-2xl space-y-4 font-mono text-xs">
              
              {/* Mockup Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[10px] text-slate-400 ml-2">CONSTRUCT-O-GENIE :: {role.id.toUpperCase()}_WORKSPACE</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[10px] text-emerald-400 font-bold">LIVE SYNCED</span>
              </div>

              {/* Dynamic UI Content based on Role */}
              {activeRoleId === 'founder' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[9px] text-slate-400 block">OVERALL NET MARGIN</span>
                      <span className="text-emerald-400 font-bold text-sm">21.8% (Protected)</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[9px] text-slate-400 block">CASH COLLECTED</span>
                      <span className="text-white font-bold text-sm">₹14.8 Cr (92%)</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                      <span className="text-[9px] text-slate-400 block">BUDGET RISKS</span>
                      <span className="text-emerald-400 font-bold text-sm">0 Overruns</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-white font-bold">Awaiting Your 1-Click Sign-Off (&gt; ₹2L):</span>
                      <span className="text-amber-400 font-semibold">PO #2604-89</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Vendor: WoodCraft Studios | Value: ₹19.80 Lakhs | Target Margin: 24.3%</div>
                  </div>
                </div>
              )}

              {activeRoleId === 'qs' && (
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex justify-between text-[11px] text-white">
                      <span className="font-bold">Quotation Master #Q-42 (CyberCity HQ)</span>
                      <span className="text-emerald-400">Budget Locked</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Tender Value: ₹4.82 Cr | Target Cost: ₹3.76 Cr | Target Margin: 22.0%</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-slate-400">Materials (58%)</div>
                      <div className="text-white font-bold">₹2.18 Cr Locked</div>
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-slate-400">Labor (26%)</div>
                      <div className="text-white font-bold">₹97.7L Locked</div>
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-slate-400">Your Profit (22%)</div>
                      <div className="text-emerald-400 font-bold">₹1.06 Cr</div>
                    </div>
                  </div>
                </div>
              )}

              {activeRoleId === 'pm' && (
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                    <div>
                      <div className="text-white font-bold text-[11px]">HVAC Ducting & Acoustic Paneling</div>
                      <div className="text-[10px] text-slate-400">Contractor: Climatech | Deadline: 28 Aug</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">ON TIME</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                    <div>
                      <div className="text-white font-bold text-[11px]">Acoustic Toughened Glass Delivery</div>
                      <div className="text-[10px] text-slate-400">Gate Delivery Verified (GRN #091)</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">MATERIAL INTACT</span>
                  </div>
                </div>
              )}

              {activeRoleId === 'site' && (
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-white font-bold flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                        Mobile Daily Site Log #42 (Submitted at 6:30 PM)
                      </span>
                      <span className="text-emerald-400 text-[10px] font-bold">SYNCED</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Site Labor: 38 Workers on Duty • 4 Photos Pinned to Floor Plan</div>
                    <div className="text-[10px] text-slate-300">Client Architect verified today's partition measurements on tablet.</div>
                  </div>
                </div>
              )}

              {activeRoleId === 'finance' && (
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-white font-bold">Client RA Bill #04 (Tally & SAP Ready)</span>
                      <span className="text-emerald-400 font-bold">₹1,48,20,000</span>
                    </div>
                    <div className="text-[10px] text-slate-400 flex justify-between">
                      <span>GST (18%): ₹26,67,600</span>
                      <span>TDS (2%): -₹2,96,400</span>
                      <span>Retention (5%): -₹7,41,000</span>
                    </div>
                    <div className="pt-1 text-[10px] text-emerald-300 font-bold">
                      Direct Voucher Generated in Tally Prime & SAP ECC
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