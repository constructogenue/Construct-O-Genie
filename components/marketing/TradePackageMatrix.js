'use client';

import React, { useState } from 'react';
import { 
  Layers, 
  FileSpreadsheet, 
  CheckCircle2, 
  ArrowRight, 
  Eye, 
  ShieldCheck,
  Compass,
  Boxes,
  FileCheck,
  Building
} from 'lucide-react';

const INTERIOR_PACKAGES = [
  {
    id: 'joinery',
    name: 'Joinery & Millwork',
    tradeCode: 'PACKAGE 01 / JOINERY',
    tagline: 'Bespoke Acoustic Wall Paneling & Fluted Oak Veneer',
    drawingRef: 'GFC / DWG-ARCH-JN-04.2',
    standard: 'FSC Certified & Class-1 Fire Rated',
    boqItemCode: '04.01.A',
    quantity: '480 SQ.M',
    costBudget: '₹26,16,000',
    sellingValue: '₹34,56,000',
    marginPct: '24.3%',
    vendor: 'WoodCraft Studios',
    deliveryStatus: 'Received on Site (100% GRN Verified)',
    installedPct: 85,
    specifications: [
      { label: 'Core Material', val: '18mm FR Grade HDHMR' },
      { label: 'Surface Finish', val: 'Natural American White Oak Veneer' },
      { label: 'CNC Acoustic Slit', val: '3mm Pitch / 16mm Spacing' },
      { label: 'Hardware', val: 'Concealed Hettich Sensys Hinges' },
    ],
    sampleImg: '/building-stage2.jpg',
  },
  {
    id: 'mep',
    name: 'MEP & HVAC',
    tradeCode: 'PACKAGE 02 / MEP',
    tagline: 'VRF Air Conditioning, Fire Sprinklers & DALI Dimming',
    drawingRef: 'GFC / DWG-MEP-HV-08.1',
    standard: 'ASHRAE 90.1 & NBC Compliant',
    boqItemCode: '07.02.C',
    quantity: '620 R.MTR',
    costBudget: '₹41,20,000',
    sellingValue: '₹53,80,000',
    marginPct: '23.4%',
    vendor: 'Voltas Engineering Services',
    deliveryStatus: 'Pressure Testing Passed @ 1.5x WP',
    installedPct: 92,
    specifications: [
      { label: 'Piping Spec', val: 'Hard Drawn Copper Pipe (Class-O)' },
      { label: 'Ductwork', val: 'G.I Sheet 24 Gauge with Nitrile Rubber' },
      { label: 'Control Protocol', val: 'BACnet / IP Gateway System' },
      { label: 'Lighting Track', val: 'DALI-2 Protocol Magnetic Recessed' },
    ],
    sampleImg: '/building-mep.jpg',
  },
  {
    id: 'glazing',
    name: 'Glazing & Partitions',
    tradeCode: 'PACKAGE 03 / GLASS',
    tagline: 'Slimline Acoustic Double Glazing & Fluted Sliders',
    drawingRef: 'GFC / DWG-ARCH-GL-03.4',
    standard: 'Acoustic Rating Rw 42 dB',
    boqItemCode: '03.04.B',
    quantity: '340 SQ.M',
    costBudget: '₹13,94,000',
    sellingValue: '₹19,60,000',
    marginPct: '28.8%',
    vendor: 'Saint-Gobain Glass Solutions',
    deliveryStatus: 'Fabricated & Staged at Local Factory',
    installedPct: 60,
    specifications: [
      { label: 'Glass Specification', val: '12mm Clear Acoustic Laminated' },
      { label: 'Frame Finish', val: 'Matte Anodized Architectural Black' },
      { label: 'Door Hardware', val: 'Dorma Floor Springs & Patch Fittings' },
      { label: 'Gasket System', val: 'Continuous EPDM Acoustic Seals' },
    ],
    sampleImg: '/hero-interior.jpg',
  },
  {
    id: 'flooring',
    name: 'Flooring & Carpeting',
    tradeCode: 'PACKAGE 04 / FLOOR',
    tagline: 'Italian Statuario Marble & Modular Acoustic Carpet',
    drawingRef: 'GFC / DWG-ARCH-FL-09.1',
    standard: 'CRI Green Label Plus Certified',
    boqItemCode: '09.01.F',
    quantity: '1,850 SQ.M',
    costBudget: '₹43,47,500',
    sellingValue: '₹59,20,000',
    marginPct: '26.5%',
    vendor: 'Shaw Contract India',
    deliveryStatus: '100% Lots Landed in Warehouse',
    installedPct: 40,
    specifications: [
      { label: 'Primary Tile', val: '500mm x 500mm Nylon Solution Dyed' },
      { label: 'Backing Layer', val: 'Ecoworx Closed-Loop Recyclable' },
      { label: 'Wet Area Stone', val: 'Book-Matched Statuario Italian Slab' },
      { label: 'Skirting Profile', val: 'Concealed Shadowline Aluminium' },
    ],
    sampleImg: '/building-stage3.jpg',
  },
];

export default function TradePackageMatrix({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState(0);
  const pkg = INTERIOR_PACKAGES[activeTab];

  return (
    <section id="trade-packages" className="scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider mb-3 backdrop-blur-md">
          <Layers className="w-3.5 h-3.5 text-white" />
          INTERIOR TRADE PACKAGE REGISTERS
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] font-display">
          Turnkey Trade Packages. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Locked from BOQ to Site Gate.
          </span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 font-light">
          Every interior package is tied to approved GFC drawings, purchase order quantities, physical site GRN delivery, and subcontractor measurement sheets.
        </p>
      </div>

      {/* Package Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {INTERIOR_PACKAGES.map((item, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-white text-slate-950 shadow-lg font-bold scale-105'
                  : 'bg-[#0A0D14]/75 text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-black' : 'bg-white/40'}`} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Package Specification Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-2xl text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  {pkg.tradeCode}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display mt-0.5">
                  {pkg.tagline}
                </h3>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] font-bold">
                MARGIN: {pkg.marginPct}
              </div>
            </div>

            {/* Reference Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-[10px] text-slate-400 uppercase truncate">GFC Drawing Ref</div>
                <div className="text-white font-bold truncate mt-0.5">{pkg.drawingRef}</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-[10px] text-slate-400 uppercase truncate">BOQ Line Item</div>
                <div className="text-white font-bold truncate mt-0.5">{pkg.boqItemCode} ({pkg.quantity})</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-[10px] text-slate-400 uppercase truncate">Quality Standard</div>
                <div className="text-white font-bold truncate mt-0.5">{pkg.standard}</div>
              </div>
            </div>

            {/* Technical Specifications Grid */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
                Material & Installation Specifications
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {pkg.specifications.map((spec, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-black/30 border border-white/5 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px] font-mono">{spec.label}</span>
                      <span className="text-slate-200 font-medium">{spec.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vendor & Site Status */}
            <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">APPROVED VENDOR / SUBCONTRACTOR:</span>
                <span className="text-white font-bold">{pkg.vendor}</span>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-slate-400 block text-[10px]">PHYSICAL SITE PROGRESS:</span>
                <span className="text-emerald-400 font-bold">{pkg.installedPct}% INSTALLED</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image & Commercial Numbers (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-white/20 overflow-hidden relative shadow-2xl">
              <img
                src={pkg.sampleImg}
                alt={pkg.name}
                className="w-full h-56 sm:h-64 object-cover filter brightness-[0.95] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20">
                  {pkg.name}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/80 text-black font-bold">
                  {pkg.deliveryStatus}
                </span>
              </div>
            </div>

            {/* Commercial Numbers */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-2">
              <div className="flex justify-between text-slate-300">
                <span>Committed Purchase Order Cost:</span>
                <span className="text-white font-bold">{pkg.costBudget}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Client Certified Billing Value:</span>
                <span className="text-white font-bold">{pkg.sellingValue}</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between font-bold text-sm">
                <span className="text-slate-300">Realized Gross Margin:</span>
                <span className="text-emerald-400">{pkg.marginPct}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
