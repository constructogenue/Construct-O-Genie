'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  FileSpreadsheet, 
  ShoppingCart, 
  Smartphone, 
  FileCheck2, 
  ArrowRight, 
  Lock, 
  Receipt
} from 'lucide-react';
import { DEMO_PROJECT, BOQ_SAMPLE_ITEMS, formatINR, PORTFOLIO_PROJECTS } from './marketingData';

export default function ProductExperience({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('portfolio');

  const tabs = [
    { id: 'portfolio', label: 'Executive Portfolio', icon: Building2 },
    { id: 'boq', label: 'Living BOQ & Cost Caps', icon: FileSpreadsheet },
    { id: 'procurement', label: 'Procurement & Approvals', icon: ShoppingCart },
    { id: 'site', label: 'Mobile Site DPR & GRN', icon: Smartphone },
    { id: 'jmr', label: 'JMR & RA Billing', icon: FileCheck2 },
    { id: 'accounting', label: 'Tally & SAP Accounting', icon: Receipt },
  ];

  return (
    <section id="product-tour" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-24">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300">
          <span>PRODUCT TOUR</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
          See Construct-O-Genie in action.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Explore how commercial, procurement, site, and finance workflows connect across an active 42,500 sq.ft fit-out project.
        </p>
      </div>

      {/* Module Selector Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                isSelected
                  ? 'bg-white text-slate-950 shadow-lg shadow-white/10 font-semibold'
                  : 'bg-black/40 text-slate-400 hover:text-white hover:bg-white/[0.05] border border-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive App Screen Mockup */}
      <div className="rounded-2xl bg-black/70 border border-white/10 backdrop-blur-xl p-4 sm:p-7 shadow-2xl">
        
        {/* TOP STATUS BAR: Clear 3-Second Financial Hierarchy */}
        <div className="pb-6 mb-6 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            
            {/* Project Title & Status */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-medium">
                  {DEMO_PROJECT.code}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {DEMO_PROJECT.name}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {DEMO_PROJECT.areaSqFt.toLocaleString('en-IN')} sq.ft • {DEMO_PROJECT.client} • GFC Version {DEMO_PROJECT.gfcVersion}
              </p>
            </div>

            {/* Core 3 High-Impact Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 bg-white/[0.02] p-3 rounded-xl border border-white/5 w-full lg:w-auto">
              <div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Contract Value</div>
                <div className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                  {formatINR(DEMO_PROJECT.contractValue, true)}
                </div>
              </div>
              <div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Committed Cost</div>
                <div className="text-sm sm:text-base font-bold text-slate-200 font-mono mt-0.5">
                  {formatINR(DEMO_PROJECT.committedCost, true)}
                </div>
              </div>
              <div>
                <div className="text-[10px] sm:text-[11px] text-emerald-400 font-medium">Projected Margin</div>
                <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono mt-0.5">
                  {DEMO_PROJECT.projectedMargin}%
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* TAB 1: EXECUTIVE PORTFOLIO */}
        {activeTab === 'portfolio' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Total Billed to Client</div>
                <div className="text-lg font-bold text-white font-mono mt-1">
                  {formatINR(DEMO_PROJECT.billedToClient, true)}
                </div>
                <div className="text-[11px] text-emerald-400 mt-0.5">63.8% of contract</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Cash Collected</div>
                <div className="text-lg font-bold text-white font-mono mt-1">
                  {formatINR(DEMO_PROJECT.collectedFromClient, true)}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">85.1% collection rate</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Vendor Liabilities Paid</div>
                <div className="text-lg font-bold text-white font-mono mt-1">
                  {formatINR(DEMO_PROJECT.vendorPaid, true)}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">{formatINR(DEMO_PROJECT.vendorPayables - DEMO_PROJECT.vendorPaid, true)} pending</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Client Retention Held</div>
                <div className="text-lg font-bold text-white font-mono mt-1">
                  {formatINR(DEMO_PROJECT.retentionHeld, true)}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">5.0% contract retention</div>
              </div>
            </div>

            {/* Active Projects Table */}
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-black/40">
              <table className="w-full text-left text-xs">
                <thead className="bg-white/[0.03] text-slate-400 border-b border-white/5 uppercase tracking-wider font-mono text-[10px]">
                  <tr>
                    <th className="py-3 px-4">Project Name &amp; Client</th>
                    <th className="py-3 px-4">Area</th>
                    <th className="py-3 px-4">Contract Value</th>
                    <th className="py-3 px-4">Committed Cost</th>
                    <th className="py-3 px-4">Progress</th>
                    <th className="py-3 px-4">Projected Margin</th>
                    <th className="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {PORTFOLIO_PROJECTS.map((prj) => (
                    <tr key={prj.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-semibold text-white">{prj.name}</div>
                        <div className="text-slate-400 text-[11px]">{prj.client}</div>
                      </td>
                      <td className="py-3 px-4 font-mono">{prj.area}</td>
                      <td className="py-3 px-4 font-mono font-medium text-white">{formatINR(prj.value, true)}</td>
                      <td className="py-3 px-4 font-mono text-slate-300">{formatINR(prj.committedCost, true)}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-white/10 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${prj.progress}%` }}></div>
                          </div>
                          <span className="font-mono text-[11px]">{prj.progress}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-emerald-400">
                        {prj.margin}%
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-medium border border-emerald-500/20">
                          {prj.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: LIVING BOQ */}
        {activeTab === 'boq' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2">
              <span>Tender BOQ lines with Budget Cost Ceilings (BCC) &amp; live committed PO values:</span>
              <span className="font-mono text-emerald-400">48 Lines Locked</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/5 bg-black/40">
              <table className="w-full text-left text-xs">
                <thead className="bg-white/[0.03] text-slate-400 border-b border-white/5 uppercase tracking-wider font-mono text-[10px]">
                  <tr>
                    <th className="py-3 px-4">Item Code &amp; Specification</th>
                    <th className="py-3 px-4">Unit</th>
                    <th className="py-3 px-4">Tender Qty / Rate</th>
                    <th className="py-3 px-4">Client Total</th>
                    <th className="py-3 px-4">Budget Ceiling (BCC)</th>
                    <th className="py-3 px-4">Committed Cost</th>
                    <th className="py-3 px-4 text-right">Margin %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {BOQ_SAMPLE_ITEMS.map((item) => (
                    <tr key={item.code} className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 max-w-xs">
                        <div className="font-mono font-medium text-white text-[11px]">{item.code} • {item.trade}</div>
                        <div className="text-slate-400 text-[11px] truncate mt-0.5">{item.description}</div>
                      </td>
                      <td className="py-3 px-4 font-mono">{item.unit}</td>
                      <td className="py-3 px-4 font-mono text-[11px]">
                        {item.tenderQty} @ {formatINR(item.tenderRate)}
                      </td>
                      <td className="py-3 px-4 font-mono font-medium text-white">
                        {formatINR(item.clientTotal)}
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-300">
                        {formatINR(item.budgetCeiling)}
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-300">
                        {formatINR(item.committedTotal)}
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-emerald-400">
                        {item.marginPercent}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: PROCUREMENT & APPROVALS */}
        {activeTab === 'procurement' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">POs Issued</div>
                <div className="text-lg font-bold text-white font-mono mt-1">48 Purchase Orders</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Total: {formatINR(21420000, true)}</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Budget Headroom Remaining</div>
                <div className="text-lg font-bold text-emerald-400 font-mono mt-1">{formatINR(17980000, true)}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Within approved baseline</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Maker-Checker Status</div>
                <div className="text-lg font-bold text-white font-mono mt-1">2 Pending Approvals</div>
                <div className="text-[11px] text-amber-400 mt-0.5">Awaiting Director Sign-Off</div>
              </div>
            </div>

            {/* PO Approval Sample */}
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-semibold text-white">Pending Executive Approval: PO-DLF-026 (Acoustic Ceiling Panels)</span>
                </div>
                <span className="font-mono text-slate-400">Threshold: &gt; ₹15 Lakhs</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs bg-black/40 p-3 rounded-lg border border-white/5">
                <div><span className="text-slate-400">Vendor:</span> <span className="text-white font-medium">Saint-Gobain Gyproc Ltd</span></div>
                <div><span className="text-slate-400">PO Value:</span> <span className="text-white font-mono font-medium">₹18,40,000</span></div>
                <div><span className="text-slate-400">BOQ Ceiling:</span> <span className="text-white font-mono font-medium">₹19,20,000</span></div>
                <div><span className="text-slate-400">Budget Variance:</span> <span className="text-emerald-400 font-mono font-medium">+₹80,000 Saved</span></div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SITE DPR & GRN */}
        {activeTab === 'site' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Today&apos;s Labor Headcount</div>
                <div className="text-lg font-bold text-white font-mono mt-1">68 Tradespersons</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Joinery (24), MEP (22), Drywall (22)</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Physical Execution Progress</div>
                <div className="text-lg font-bold text-emerald-400 font-mono mt-1">67.0% Certified</div>
                <div className="text-[11px] text-slate-400 mt-0.5">S-Curve on schedule</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Gate GRN Verification</div>
                <div className="text-lg font-bold text-white font-mono mt-1">3 Deliveries Inspected</div>
                <div className="text-[11px] text-emerald-400 mt-0.5">Challans matched with PO</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-300 font-medium">
                <span>Latest Mobile DPR Log (Site In-Charge: R. Sharma)</span>
                <span className="font-mono text-slate-400">Logged 18:30 IST • Offline Cached &amp; Synced</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Level 15 south-wing acoustic ceiling framing completed (100%). Glass partition channel fixing in progress on Level 14. 240 running meters of primary linear LED conduits laid. All material delivery challans uploaded with gate photos.
              </p>
            </div>
          </div>
        )}

        {/* TAB 5: JMR & RA BILLING */}
        {activeTab === 'jmr' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Cumulative RA Bills Certified</div>
                <div className="text-lg font-bold text-white font-mono mt-1">{formatINR(30800000, true)}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">RA Bill 04 certified by PMC</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Advance Mobilization Recovered</div>
                <div className="text-lg font-bold text-slate-200 font-mono mt-1">{formatINR(4825000, true)}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">10% contract mobilization</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Billing Turnaround Time</div>
                <div className="text-lg font-bold text-emerald-400 font-mono mt-1">~4 Days</div>
                <div className="text-[11px] text-slate-400 mt-0.5">From JMR sign-off to RA bill</div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white">Tripartite Certified JMR #04 Sign-Off Record</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">Signatures Complete</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-400 bg-black/40 p-3 rounded-lg border border-white/5">
                <div><span className="text-slate-400">Fit-Out Contractor:</span> <span className="text-white">Certified (Lead QS)</span></div>
                <div><span className="text-slate-400">Client PMC:</span> <span className="text-white">Certified (Sr. PM)</span></div>
                <div><span className="text-slate-400">Client Rep:</span> <span className="text-white">Approved for Billing</span></div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: TALLY & SAP ACCOUNTING */}
        {activeTab === 'accounting' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Tally / SAP Sync Status</div>
                <div className="text-lg font-bold text-emerald-400 font-mono mt-1">Connected</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Direct XML / REST Bridge</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">TDS u/s 194C Deducted</div>
                <div className="text-lg font-bold text-white font-mono mt-1">{formatINR(376000, true)}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Challan 281 reconciliation</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Bank UTR Reconciled</div>
                <div className="text-lg font-bold text-white font-mono mt-1">{formatINR(15400000, true)}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Matched with vendor POs</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-400 leading-relaxed">
              When finance clears a vendor payment in Tally or NetBanking, the bank UTR reference number automatically updates the Construct-O-Genie purchase order ledger, reconciling committed liability with zero double entry.
            </div>
          </div>
        )}

        {/* Action CTA Bar */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Sanitized reference project data from commercial fit-out operations.
          </div>
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 rounded-xl bg-white text-slate-950 font-semibold text-xs hover:bg-slate-100 transition-all flex items-center gap-2"
          >
            <span>Request a Tailored Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
}
