'use client';

import React from 'react';
import { 
  Building, 
  Target, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2,
  HardHat,
  ArrowRight,
  HeartHandshake
} from 'lucide-react';

export default function AboutUs({ onOpenDemo }) {
  const leadershipHighlights = [
    {
      title: "Born on Real Fit-Out Job Sites",
      desc: "Founded by interior project engineers who experienced firsthand the 7% margin leakage caused by unbilled client drawing changes and chaotic paper measurements.",
      icon: HardHat,
    },
    {
      title: "Zero Spreadsheets, Zero Chaos",
      desc: "Our mission is simple: replace disconnected WhatsApp groups, fragile Excel sheets, and 45-day billing delays with a clean, stress-free operating system.",
      icon: Target,
    },
    {
      title: "Native Accounting Harmony",
      desc: "We don't disrupt your accounts team — we empower them with automated, error-free handshakes into Tally Prime, SAP, Zoho Books, and your existing ERP.",
      icon: ShieldCheck,
    },
  ];

  const operationalHubs = [
    { city: "Gurugram (HQ)", scope: "North India Fit-Out Operations" },
    { city: "BKC, Mumbai", scope: "Commercial Enterprise Deployments" },
    { city: "Indiranagar, Bengaluru", scope: "Engineering & Mobile Field Systems" },
    { city: "Business Bay, Dubai", scope: "Middle East Turnkey Projects" },
  ];

  return (
    <section id="about" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent space-y-12">
      
      {/* Section Tag & Headline */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <Building className="w-3.5 h-3.5 text-emerald-400" />
          OUR STORY & MISSION
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          Built by Fit-Out Builders. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            For Fit-Out Business Owners.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed font-sans">
          Construct-O-Genie was created to solve the exact headaches that keep interior contracting founders awake at night: untracked site expenses, unbilled extra work, and delayed client payments.
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
                <span>Engineered for Turnkey Execution</span>
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
              SUPPORT ACROSS MAJOR METRO HUBS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              We Stand Shoulder-to-Shoulder with Your Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
              Our implementation specialists set up your existing quotations, configure your team's access, and conduct hands-on site engineer training within 7 days so you see immediate value.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all cursor-pointer shadow-md"
              >
                <span>Talk to a Solutions Specialist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left font-mono text-xs">
            {operationalHubs.map((hub, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-black/50 border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-white font-bold">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
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