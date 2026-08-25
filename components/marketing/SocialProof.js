'use client';

import React from 'react';
import { Building2, ShieldCheck, Quote, Star, ArrowUpRight } from 'lucide-react';

const CONTRACTOR_LOGOS = [
  "Space Matrix Turnkey",
  "Cherry Hill Interiors",
  "DSP Design Associates",
  "Livspace Commercial",
  "Morgan Lovell Projects",
  "Design Infinitum",
  "Aura Turnkey Fit-Outs",
  "Zenith Workspace Solutions",
];

const TESTIMONIALS = [
  {
    quote: "Construct-O-Genie gave our commercial directors live margin visibility. We captured ₹38 Lakhs of unbilled drawing variations on our DLF CyberCity project that would have otherwise leaked.",
    author: "Vikram Malhotra",
    role: "Managing Director",
    company: "Apex Turnkey Projects (Gurugram)",
    metric: "₹38L Scope Leakage Recovered",
  },
  {
    quote: "Earlier, our site supervisors took 4 weeks to compile JMRs and get client sign-offs. With Construct-O-Genie's mobile DPR and digital JMR, our RA billing cycle dropped from 35 days to 4 days.",
    author: "Sunita Rao",
    role: "Chief Commercial Officer",
    company: "Vanguard Fit-Outs (BKC Mumbai)",
    metric: "88% Faster Client Billing Cycle",
  },
  {
    quote: "The direct two-way sync into SAP and Tally transformed our accounts team. Purchase orders are locked against approved BOQ quantities so unauthorized site buying is physically impossible.",
    author: "Rajeshwar Pillai",
    role: "Head of Procurement & QS",
    company: "Matrix Infrastructure (Bengaluru)",
    metric: "0% PO Budget Overruns",
  },
];

export default function SocialProof() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative bg-transparent space-y-12">
      
      {/* Trust Ticker / Logo Marquee */}
      <div className="space-y-4 text-center">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
          TRUSTED BY LEADING FIT-OUT CONTRACTORS & COMMERCIAL TURNKEY BUILDERS
        </span>
        
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 opacity-85">
          {CONTRACTOR_LOGOS.map((name, i) => (
            <div 
              key={i}
              className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono font-medium hover:border-white/20 hover:text-white transition-all"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* 3 Executive Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
        {TESTIMONIALS.map((t, idx) => (
          <div 
            key={idx}
            className="p-6 sm:p-7 rounded-3xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col justify-between space-y-5 hover:border-white/30 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[10px] font-bold">
                  {t.metric}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 font-sans font-light leading-relaxed">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-0.5">
              <div className="text-sm font-bold text-white font-display">{t.author}</div>
              <div className="text-[11px] text-slate-400 font-mono">{t.role}</div>
              <div className="text-[11px] text-slate-300 font-medium">{t.company}</div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}