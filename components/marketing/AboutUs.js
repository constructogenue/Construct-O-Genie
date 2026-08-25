'use client';

import React from 'react';
import { 
  Building, 
  Target, 
  Users2, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  HardHat,
  ArrowRight
} from 'lucide-react';

export default function AboutUs({ onOpenDemo }) {
  const leadershipHighlights = [
    {
      title: "Built on Real Job Sites",
      desc: "Founded by commercial fit-out engineers and tech architects who experienced firsthand the 7% margin erosion caused by unbilled drawing revisions and delayed contractor measurements.",
      icon: HardHat,
    },
    {
      title: "Zero Spreadsheets, Zero Chaos",
      desc: "Our mission is simple: eliminate the disconnected WhatsApp groups, fragile Excel BOQs, and 40-day billing cycles across India's turnkey interior construction ecosystem.",
      icon: Target,
    },
    {
      title: "Native ERP Interoperability",
      desc: "We don't replace your accounts team — we empower them with automated 2-way data handshakes into Tally Prime, SAP S/4HANA, Zoho Books, and enterprise ERPs.",
      icon: ShieldCheck,
    },
  ];

  const operationalHubs = [
    { city: "Gurugram (HQ)", scope: "R&D & North India Project Operations" },
    { city: "BKC, Mumbai", scope: "Commercial Enterprise Deployments" },
    { city: "Indiranagar, Bengaluru", scope: "Engineering & Mobile Field Systems" },
    { city: "Business Bay, Dubai", scope: "Middle East Turnkey Fit-Out Advisory" },
  ];

  return (
    <section id="about" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent space-y-12">
      
      {/* Section Tag & Headline */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <Building className="w-3.5 h-3.5 text-slate-300" />
          OUR STORY & MISSION
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          Engineered by Builders. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Dedicated to Fit-Out Contractors.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed font-sans">
          Construct-O-Genie was founded with one obsession: giving interior general contractors the same institutional financial control and digital precision that large EPC infrastructure giants have.
        </p>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
        {leadershipHighlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#0A0D14]/85 border border-white/15 backdrop-blur-2xl shadow-xl hover:border-white/30 transition-all duration-300 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Built for Commercial & Turnkey Fit-Outs</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Operational Footprint & Callout */}
      <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0C1017]/95 via-[#080B10]/95 to-[#040609]/95 border border-white/15 backdrop-blur-2xl shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block">
              REGIONAL PRESENCE & FIELD TEAMS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Supporting Commercial Fit-Out Contractors Across Major Metro Hubs
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
              Our on-ground implementation specialists train your site supervisors, map your historic BOQ master databases, and configure your accounting sync within 7 days.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all cursor-pointer shadow-md"
              >
                <span>Speak with an Implementation Specialist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left font-mono text-xs">
            {operationalHubs.map((hub, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-black/50 border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-white font-bold">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{hub.city}</span>
                </div>
                <div className="text-[10px] text-slate-400">{hub.scope}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}