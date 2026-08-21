'use client';

import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  ArrowRight, 
  Play, 
  Activity, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ShieldCheck, 
  Sparkles,
  TrendingUp,
  Cpu,
  ArrowUpRight,
  Maximize2,
  Sliders,
  Compass,
  Building,
  Check,
  ChevronRight
} from 'lucide-react';
import { DEMO_PROJECT } from './marketingData';

export default function Hero({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [livePulse, setLivePulse] = useState(0);

  const pulses = [
    { title: "Lead Won", code: "CRM-26041", metric: "₹4.82 Cr", sub: "85% Conversion probability converted to active project" },
    { title: "GFC Rev 04.2 Released", code: "ARCH-GFC", metric: "340 DWG", sub: "Architectural & MEP drawing sets synced to site tablets" },
    { title: "BOQ Line Items Calibrated", code: "BOQ-FINAL", metric: "148 Items", sub: "Item-level cost rate & margin locked at 21.8%" },
    { title: "PO #COG-0241 Approved", code: "PROC-PO", metric: "₹8.42L", sub: "Committed to WoodCraft Studios within BCS budget" },
    { title: "DPR Progress Logged", code: "SITE-DPR", metric: "67% Done", sub: "Level 14 Fluted Oak panelling installed & verified" },
    { title: "Vendor 194C Remittance", code: "FIN-TDS", metric: "₹4.70L", sub: "2% TDS deducted, UTR AXIS26084920 dispatched" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLivePulse(prev => (prev + 1) % pulses.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [pulses.length]);

  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-mesh-dark border-b border-white/[0.08]">
      
      {/* Background Architectural CAD Lines & Laser Grid */}
      <div className="absolute inset-0 cad-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Radiant Atmospheric Lighting Flares */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-cyan-500/20 via-cyan-950/10 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-48 right-10 w-[450px] h-[300px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Technical Coordinate Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d141e]/90 border border-cyan-500/30 backdrop-blur-xl mb-8 shadow-lg shadow-cyan-950/40">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF]" />
          <span className="text-[11px] font-mono tracking-widest text-cyan-300 font-bold uppercase">
            THE OPERATING SYSTEM FOR INTERIOR & FIT-OUT COMPANIES
          </span>
          <span className="hidden md:inline-block text-[10px] font-mono text-slate-400 border-l border-white/10 pl-2">
            DELHI NCR · MUMBAI · BENGALURU
          </span>
        </div>

        {/* Editorial Master Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7.5xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.05] font-sans">
          Run your entire interior business from <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 drop-shadow-sm">
            one operating system.
          </span>
        </h1>

        {/* Supporting Architectural Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          From the first site survey to the final vendor payment, Construct-O-Genie connects <strong className="text-white">design, BOQs, procurement, site execution, client billing, and finance</strong> around every single project.
        </p>

        {/* Call to Action Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 text-slate-950 font-black text-xs tracking-wider uppercase font-mono shadow-2xl shadow-cyan-400/30 hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group"
          >
            <span>Book a Personalized Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a 
            href="#lifecycle"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0F1520]/80 hover:bg-[#151E2E] text-slate-200 hover:text-white text-xs font-mono tracking-wider uppercase border border-white/[0.1] hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20" />
            <span>Interactive Platform Walkthrough</span>
          </a>
        </div>

        {/* Live Project Choreography Bar */}
        <div className="mt-12 max-w-4xl mx-auto p-4 rounded-2xl bg-[#0b1018]/90 border border-white/[0.08] backdrop-blur-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono text-xs font-black shrink-0">
              0{livePulse + 1}
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <span>{pulses[livePulse].title}</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                  {pulses[livePulse].code}
                </span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5 font-mono">
                {pulses[livePulse].sub}
              </div>
            </div>
          </div>

          <div className="shrink-0 font-mono text-right hidden sm:block">
            <span className="text-[10px] text-slate-400 uppercase block">Impact Value</span>
            <span className="text-sm font-bold text-emerald-400">{pulses[livePulse].metric}</span>
          </div>
        </div>

        {/* Million-Dollar Master Operating Studio UI Component */}
        <div className="mt-12 relative max-w-6xl mx-auto rounded-3xl bg-[#090D14] border border-white/[0.12] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden text-left font-mono">
          
          {/* Top Window Chrome */}
          <div className="px-5 py-3.5 bg-[#0e1420] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-slate-300 font-semibold ml-2 font-sans flex items-center gap-2">
                <span className="text-cyan-400 font-mono">CONSTRUCT-O-GENIE OS</span>
                <span className="text-slate-600">/</span>
                <span>PROJECT: HORIZON WORKSPACE (42,500 SQ.FT)</span>
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-bold">ALL 6 DEPARTMENTS CONNECTED</span>
            </div>
          </div>

          {/* Project Studio Main Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-gradient-to-b from-[#090D14] to-[#06080B]">
            
            {/* Left Telemetry Column (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              
              <div className="p-5 rounded-2xl bg-[#0f1522] border border-cyan-500/30 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500/10 border-l border-b border-cyan-500/20 text-[10px] text-cyan-400 font-bold">
                  CENTRAL REPO
                </div>
                <div className="text-[10px] text-slate-400 uppercase">Contract Value</div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-sans mt-1">₹4,82,50,000</div>
                <div className="text-xs text-slate-300 mt-1">Turnkey Corporate Interior Fit-Out</div>

                <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/[0.06] text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Committed POs</span>
                    <span className="font-bold text-teal-400">₹2.14 Cr</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Net Realized Margin</span>
                    <span className="font-bold text-emerald-400">18.4% (₹88.7L)</span>
                  </div>
                </div>
              </div>

              {/* Connected Modules Quick Switcher */}
              <div className="p-4 rounded-2xl bg-[#0c111a] border border-white/[0.06] space-y-2 text-xs">
                <div className="text-[10px] text-slate-400 uppercase font-bold px-1">Active Modules Linked</div>
                
                <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between text-cyan-300">
                  <span className="font-semibold">01. BOQ Commercial Spine</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 font-bold">148 Items</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.04] flex items-center justify-between text-slate-300">
                  <span>02. GFC Drawing Vault</span>
                  <span className="text-[10px] text-emerald-400">Rev 04.2 GFC</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.04] flex items-center justify-between text-slate-300">
                  <span>03. Vendor POs & 194C TDS</span>
                  <span className="text-[10px] text-teal-400">14 POs Active</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.04] flex items-center justify-between text-slate-300">
                  <span>04. Daily Site Progress & JMR</span>
                  <span className="text-[10px] text-amber-400">67% Physical</span>
                </div>
              </div>

            </div>

            {/* Right Blueprint Studio Visual (8 cols) */}
            <div className="lg:col-span-8 rounded-2xl bg-[#0B1017] border border-white/[0.08] p-6 flex flex-col justify-between relative overflow-hidden shadow-inner">
              
              {/* CAD Floorplan Vector Simulation with Laser Nodes */}
              <div className="relative h-64 sm:h-72 w-full rounded-xl bg-[#060A10] border border-cyan-500/20 p-4 overflow-hidden">
                <div className="absolute inset-0 cad-grid-dense opacity-30" />
                
                {/* SVG Blueprint Geometry */}
                <svg className="w-full h-full text-cyan-400/60" viewBox="0 0 600 240" fill="none">
                  {/* Outer Perimeter */}
                  <rect x="20" y="20" width="560" height="200" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                  
                  {/* Conference Room Zone */}
                  <rect x="30" y="30" width="160" height="100" stroke="#00F0FF" strokeWidth="2" fill="rgba(0, 240, 255, 0.05)" />
                  <text x="40" y="55" fill="#00F0FF" fontSize="10" fontFamily="monospace">ZONE A: BOARDROOM</text>
                  <text x="40" y="70" fill="#94A3B8" fontSize="8" fontFamily="monospace">480 m² Fluted Oak Wall</text>
                  <text x="40" y="85" fill="#10B981" fontSize="9" fontFamily="monospace">PO-COG-0241: 85% INSTALLED</text>

                  {/* Main Workstation Hall */}
                  <rect x="210" y="30" width="350" height="180" stroke="#38BDF8" strokeWidth="1.5" fill="rgba(56, 189, 248, 0.03)" />
                  <text x="225" y="55" fill="#38BDF8" fontSize="10" fontFamily="monospace">ZONE B: OPEN WORKSPACE (240 DESKS)</text>
                  <text x="225" y="70" fill="#94A3B8" fontSize="8" fontFamily="monospace">Steelcase Desks & Backbone</text>
                  
                  {/* Partition Lines */}
                  <line x1="210" y1="120" x2="560" y2="120" stroke="#00F0FF" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="380" y1="30" x2="380" y2="120" stroke="#F59E0B" strokeWidth="1.5" />

                  {/* Measurement Annotations */}
                  <line x1="20" y1="10" x2="580" y2="10" stroke="#F59E0B" strokeWidth="1" />
                  <text x="260" y="9" fill="#F59E0B" fontSize="9" fontFamily="monospace">DIM: 48,500 MM</text>
                </svg>

                {/* Floating Live Sensor Badges */}
                <div className="absolute top-4 right-4 bg-slate-900/90 border border-cyan-500/40 px-2.5 py-1 rounded-md text-[10px] text-cyan-300 font-bold shadow-md">
                  GFC REV 04.2 CALIBRATED
                </div>

                <div className="absolute bottom-3 left-4 bg-[#0A1017]/90 border border-emerald-500/40 px-3 py-1.5 rounded-lg text-[10px] text-emerald-400 flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>LIVE SITE GRN VERIFIED: 420 SQ.M OAK PANELS</span>
                </div>
              </div>

              {/* Bottom Real-time Lineage Strip */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-2">
                <span className="text-cyan-400 font-semibold">
                  Lineage: GFC Drawing → BOQ Item 04.01.A → PO-0241 → GRN-109 → RA Bill #03
                </span>
                <span className="text-slate-400 font-mono text-[10px]">
                  ZERO SPREADSHEETS REQUIRED
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
