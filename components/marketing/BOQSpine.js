'use client';

import React, { useState } from 'react';
import { BOQ_SAMPLE_ITEMS } from './marketingData';
import { 
  FileSpreadsheet, 
  ArrowRight, 
  CheckCircle2, 
  ShoppingCart, 
  Hammer, 
  Receipt, 
  TrendingUp, 
  Sparkles,
  Link2,
  Sliders,
  DollarSign,
  Box,
  Layers
} from 'lucide-react';

export default function BOQSpine() {
  const [selectedItemId, setSelectedItemId] = useState('BOQ-01');

  const selectedItem = BOQ_SAMPLE_ITEMS.find(i => i.id === selectedItemId) || BOQ_SAMPLE_ITEMS[0];

  return (
    <section id="boq-spine" className="py-28 bg-[#06080B] border-b border-white/[0.08] relative overflow-hidden">
      
      {/* CAD Grid Lines */}
      <div className="absolute inset-0 cad-grid-pattern opacity-25 pointer-events-none" />

      {/* Subtle Amber Atmospheric Flare */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[11px] uppercase tracking-wider mb-4 shadow-lg shadow-amber-950/30">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            THE COMMERCIAL SPINE
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Your BOQ shouldn't live <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
              in a spreadsheet.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Turn static scope into a living commercial control layer. Click any BOQ line item below to see how it dynamically commands downstream purchase orders, site installations, progressive billing, and item-level profitability.
          </p>
        </div>

        {/* High-Fidelity BOQ Studio Card */}
        <div className="rounded-3xl bg-[#0B0F16] border border-white/[0.1] shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Header Bar */}
          <div className="p-5 bg-gradient-to-r from-[#101724] to-[#0D121C] border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#F59E0B]" />
              <span className="text-white font-bold tracking-wide">
                PROJECT: HORIZON WORKSPACE // MASTER CONTRACT BOQ (148 ITEMS)
              </span>
            </div>
            <div className="flex items-center gap-4 text-slate-300 text-xs">
              <span>TOTAL CONTRACT VALUE: <strong className="text-white">₹4,82,50,000</strong></span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-bold">AVG MARGIN: 21.8%</span>
            </div>
          </div>

          {/* Interactive Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#080B10] border-b border-white/[0.06] text-[10px] text-slate-400 uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-5 font-bold">Code</th>
                  <th className="py-4 px-5 font-bold">Interior Specification Item</th>
                  <th className="py-4 px-5 font-bold text-right">Quantity</th>
                  <th className="py-4 px-5 font-bold text-right">Selling Rate</th>
                  <th className="py-4 px-5 font-bold text-right">Budget Cost</th>
                  <th className="py-4 px-5 font-bold text-right">Gross Margin</th>
                  <th className="py-4 px-5 font-bold">Linked PO</th>
                  <th className="py-4 px-5 font-bold text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {BOQ_SAMPLE_ITEMS.map((item) => {
                  const isSelected = item.id === selectedItemId;

                  return (
                    <tr
                      key={item.id}
                      onClick={() => setSelectedItemId(item.id)}
                      className={`cursor-pointer transition-all duration-200 ${
                        isSelected 
                          ? 'bg-amber-500/15 border-l-4 border-l-amber-400 text-white' 
                          : 'hover:bg-white/[0.02] text-slate-300'
                      }`}
                    >
                      <td className="py-4.5 px-5 font-bold text-amber-400/90 whitespace-nowrap">
                        {item.code}
                      </td>
                      <td className="py-4.5 px-5 font-medium text-white max-w-sm sm:max-w-md">
                        <div className="font-semibold text-sm text-white">{item.item}</div>
                        <span className="text-[11px] text-slate-400 font-normal">{item.category}</span>
                      </td>
                      <td className="py-4.5 px-5 text-right whitespace-nowrap font-bold text-slate-200">
                        {item.qty.toLocaleString()} {item.unit}
                      </td>
                      <td className="py-4.5 px-5 text-right font-bold text-white whitespace-nowrap">
                        ₹{item.sellingRate.toLocaleString()}
                      </td>
                      <td className="py-4.5 px-5 text-right text-slate-400 whitespace-nowrap">
                        ₹{item.costRate.toLocaleString()}
                      </td>
                      <td className="py-4.5 px-5 text-right whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-bold">
                          {item.marginPct}%
                        </span>
                      </td>
                      <td className="py-4.5 px-5 text-cyan-400 font-semibold whitespace-nowrap">
                        {item.poNo}
                      </td>
                      <td className="py-4.5 px-5 text-center whitespace-nowrap">
                        <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider transition-all ${
                          isSelected 
                            ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30' 
                            : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]'
                        }`}>
                          {isSelected ? 'INSPECTING LINEAGE' : 'SELECT'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Live Relationship Ripple Bar */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-[#090D14] to-[#070A0F] border-t border-amber-500/30">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-2">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                <Link2 className="w-4 h-4" />
                Live Downstream Traceability: [{selectedItem.code}] {selectedItem.item}
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                PROFIT IMPACT: +₹{((selectedItem.sellingRate - selectedItem.costRate) * selectedItem.qty).toLocaleString()} ({(selectedItem.marginPct)}% Margin)
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 font-mono text-xs">
              
              {/* Step 1: BOQ Item */}
              <div className="p-3.5 rounded-2xl bg-[#0F1622] border border-amber-500/30 shadow-lg">
                <div className="text-[10px] text-amber-400 font-bold uppercase mb-1">01. BOQ Contract</div>
                <div className="text-white font-bold">{selectedItem.qty} {selectedItem.unit}</div>
                <div className="text-[11px] text-slate-300 mt-1">Selling: ₹{selectedItem.sellingRate}</div>
              </div>

              {/* Step 2: Linked PO */}
              <div className="p-3.5 rounded-2xl bg-[#0F1622] border border-cyan-500/30 shadow-lg">
                <div className="text-[10px] text-cyan-400 font-bold uppercase mb-1">02. Purchase Order</div>
                <div className="text-white font-bold">{selectedItem.poNo}</div>
                <div className="text-[11px] text-slate-300 mt-1">Committed Budget</div>
              </div>

              {/* Step 3: Vendor Allocation */}
              <div className="p-3.5 rounded-2xl bg-[#0F1622] border border-teal-500/30 shadow-lg">
                <div className="text-[10px] text-teal-400 font-bold uppercase mb-1">03. Vendor Ledger</div>
                <div className="text-white font-bold truncate">{selectedItem.vendor}</div>
                <div className="text-[11px] text-slate-300 mt-1">194C Compliant</div>
              </div>

              {/* Step 4: Site GRN Delivery */}
              <div className="p-3.5 rounded-2xl bg-[#0F1622] border border-blue-500/30 shadow-lg">
                <div className="text-[10px] text-blue-400 font-bold uppercase mb-1">04. Site Delivery</div>
                <div className="text-white font-bold">{selectedItem.grnStatus}</div>
                <div className="text-[11px] text-slate-300 mt-1">Gate Pass Scanned</div>
              </div>

              {/* Step 5: Site Installation */}
              <div className="p-3.5 rounded-2xl bg-[#0F1622] border border-emerald-500/30 shadow-lg">
                <div className="text-[10px] text-emerald-400 font-bold uppercase mb-1">05. Physical Progress</div>
                <div className="text-white font-bold">{selectedItem.installedPct}% Installed</div>
                <div className="text-[11px] text-emerald-400 mt-1">JMR Verified</div>
              </div>

              {/* Step 6: Client Invoicing */}
              <div className="p-3.5 rounded-2xl bg-[#0F1622] border border-purple-500/30 shadow-lg">
                <div className="text-[10px] text-purple-400 font-bold uppercase mb-1">06. Client Billing</div>
                <div className="text-emerald-400 font-bold">₹{selectedItem.billedAmount.toLocaleString()}</div>
                <div className="text-[11px] text-slate-300 mt-1">RA Bill #03 Certified</div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
