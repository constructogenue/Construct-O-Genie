'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FinalCTA({ onOpenDemo }) {
  return (
    <section className="relative py-20 overflow-hidden text-center z-10 bg-transparent">
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 font-display">
          READY TO TAKE FULL CONTROL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            OF YOUR FIT-OUT BUSINESS?
          </span>
        </h2>

        <p className="text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed font-light font-sans">
          Eliminate site leakages, stop spreadsheet errors, and run your turnkey interior projects with total peace of mind.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <button
            onClick={onOpenDemo}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:bg-slate-200 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.25)] cursor-pointer"
          >
            <span>Book a 15-Minute Founder Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#command-centre"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold text-xs bg-[#0A0D14]/80 border border-white/20 hover:border-white/40 hover:bg-[#0A0D14] backdrop-blur-xl transition-all"
          >
            <span>See Executive Dashboard</span>
          </a>
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-300">
          {[
            'Built for Turnkey Interior Contractors',
            'Syncs with Tally, SAP & other ERPs',
            '7-Day Team Onboarding Support',
            'No Long-Term Lock-in',
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}