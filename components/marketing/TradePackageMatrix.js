'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  TrendingUp,
  Sparkles,
  DollarSign
} from 'lucide-react';

const TURNKEY_PACKAGES = [
  {
    id: 'joinery',
    name: 'Joinery & Custom Millwork',
    scope: 'Bespoke Oak Veneer Wall Paneling, Executive Desks & Storage Units',
    vendor: 'Approved Joinery & Millwork Partner',
    costBudget: '₹19.80 Lakhs',
    sellingValue: '₹26.16 Lakhs',
    marginPct: '24.3% Realized Profit',
    installedPct: 78,
    deliveryStatus: 'On Track for Handover',
    sampleImg: '/building-stage2.jpg',
    specifications: [
      { label: 'Substrate', val: '18mm FR Grade HDHMR' },
      { label: 'Surface Finish', val: 'Natural Fluted White Oak Veneer' },
      { label: 'Execution Stage', val: 'Final Polish & Ironmongery' },
      { label: 'Quality Check', val: 'Client Architect Approved' },
    ],
  },
  {
    id: 'glazing',
    name: 'Architectural Glazing & Partitions',
    scope: 'Acoustic Glass Partitions for Boardrooms, Cabins & Meeting Suites',
    vendor: 'Approved Architectural Glazing Vendor',
    costBudget: '₹13.94 Lakhs',
    sellingValue: '₹20.06 Lakhs',
    marginPct: '30.5% Realized Profit',
    installedPct: 100,
    deliveryStatus: 'Completed & Certified',
    sampleImg: '/hero-interior.jpg',
    specifications: [
      { label: 'Glass Type', val: '12mm Toughened Acoustic Glass' },
      { label: 'Frame Profile', val: 'Slimline Matte Black Anodized' },
      { label: 'Acoustic Rating', val: 'STC 42 dB Certified' },
      { label: 'Handover Status', val: '100% Signed Off by Client' },
    ],
  },
  {
    id: 'lighting',
    name: 'Electrical & Architectural Lighting',
    scope: 'DALI Dimming Linear Suspended Profiles, Downlights & Smart Drivers',
    vendor: 'Approved Electrical & Lighting Integrator',
    costBudget: '₹17.25 Lakhs',
    sellingValue: '₹23.99 Lakhs',
    marginPct: '28.1% Realized Profit',
    installedPct: 65,
    deliveryStatus: 'Cable First-Fix Completed',
    sampleImg: '/building-mep.jpg',
    specifications: [
      { label: 'Lighting Tech', val: 'DALI Smart Dimming System' },
      { label: 'Color Rendering', val: '3000K Warm White • CRI 95+' },
      { label: 'Load Test', val: '100% Phase Balance Verified' },
      { label: 'Site Delivery', val: 'Fixtures Received at Gate (GRN #031)' },
    ],
  },
  {
    id: 'flooring',
    name: 'Flooring & Modular Carpeting',
    scope: 'High-Traffic Modular Carpet Tiles and Polish-Finished Marble',
    vendor: 'Approved Commercial Flooring Contractor',
    costBudget: '₹35.25 Lakhs',
    sellingValue: '₹47.96 Lakhs',
    marginPct: '26.5% Realized Profit',
    installedPct: 82,
    deliveryStatus: 'Final Layer Under Laying',
    sampleImg: '/building-stage3.jpg',
    specifications: [
      { label: 'Carpet Material', val: 'Tufted Nylon with Eco Backing' },
      { label: 'Sub-base Prep', val: 'Self-Leveling Screed Completed' },
      { label: 'Area Covered', val: '1,850 Sq. Meters' },
      { label: 'Protection', val: 'Corrugated Floor Guard Applied' },
    ],
  },
];

export default function TradePackageMatrix({ onOpenDemo }) {
  const [selectedPkgId, setSelectedPkgId] = useState('joinery');
  const pkg = TURNKEY_PACKAGES.find((p) => p.id === selectedPkgId) || TURNKEY_PACKAGES[0];

  return (
    <section id="trade-packages" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
          TURNKEY PACKAGE CONTROL
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          Track Every Subcontractor. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            Know Your Profit on Every Trade.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light font-sans">
          Whether it is custom joinery, architectural glazing, lighting or flooring — see your committed vendor purchase cost vs client certified billing for each trade package.
        </p>
      </div>

      {/* Package Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {TURNKEY_PACKAGES.map((p) => {
          const isActive = p.id === selectedPkgId;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPkgId(p.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-white text-slate-950 shadow-xl font-bold scale-105'
                  : 'bg-[#0A0D14]/80 text-slate-300 hover:text-white border border-white/10 hover:border-white/25'
              }`}
            >
              <span>{p.name.split('&')[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Package Specification Glass Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-2xl text-left max-w-5xl mx-auto space-y-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                TURNKEY TRADE SCOPE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display mt-0.5">
                {pkg.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1 font-light leading-relaxed">
                {pkg.scope}
              </p>
            </div>

            {/* Specifications Matrix */}
            <div className="space-y-2.5">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                EXECUTION & QUALITY CHECKPOINTS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {pkg.specifications.map((spec, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
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
                <span className="text-slate-400 block text-[10px]">APPROVED SUBCONTRACTOR:</span>
                <span className="text-white font-bold">{pkg.vendor}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">PHYSICAL PROGRESS:</span>
                <span className="text-emerald-400 font-bold">{pkg.installedPct}% INSTALLED</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image & Commercial Margin Box (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-white/15 overflow-hidden relative shadow-2xl">
              <img
                src={pkg.sampleImg}
                alt={pkg.name}
                className="w-full h-52 sm:h-60 object-cover filter brightness-[0.95] contrast-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20">
                  {pkg.name.split('&')[0]}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/90 text-slate-950 font-bold">
                  {pkg.deliveryStatus}
                </span>
              </div>
            </div>

            {/* Commercial Numbers */}
            <div className="p-4 rounded-2xl bg-black/70 border border-white/10 font-mono text-xs space-y-2">
              <div className="flex justify-between text-slate-300">
                <span>Committed Vendor Purchase Cost:</span>
                <span className="text-white font-bold">{pkg.costBudget}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Client Certified Billing Value:</span>
                <span className="text-white font-bold">{pkg.sellingValue}</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between font-bold text-sm">
                <span className="text-slate-200">Your Realized Profit:</span>
                <span className="text-emerald-400">{pkg.marginPct}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}