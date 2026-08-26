'use client';

import React, { useState } from 'react';
import { WORKFLOW_STAGES } from './marketingData';
import { GitCommit, ArrowRight, ShieldCheck } from 'lucide-react';

export default function MasterWorkflow({ onOpenDemo }) {
  const [activeStepId, setActiveStepId] = useState(WORKFLOW_STAGES[3].id);

  const activeStage = WORKFLOW_STAGES.find((s) => s.id === activeStepId) || WORKFLOW_STAGES[0];

  return (
    <section id="workflow" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
          END-TO-END FIT-OUT LIFECYCLE
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          From Signed Tender to Final Handover.
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-sans font-light">
          One continuous data pipeline connecting Commercial, Quantity Surveying, Procurement, Site, Billing and Finance.
        </p>
      </div>

      {/* Horizontal Stepper (Desktop) / Vertical Steps (Mobile) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#080B10]/95 border border-white/15 backdrop-blur-2xl shadow-2xl text-left space-y-8">
        
        {/* Step Chips Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
          {WORKFLOW_STAGES.map((st) => {
            const isSelected = st.id === activeStepId;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStepId(st.id)}
                className={`p-2.5 rounded-xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white text-slate-950 border-white shadow-lg font-bold scale-[1.03]'
                    : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/30 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between text-[9px] font-mono">
                  <span>{st.step}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-emerald-600' : 'bg-white/20'}`} />
                </div>
                <div className="text-[11px] font-semibold truncate mt-1 font-sans">
                  {st.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Inspector Panel */}
        <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">
                STAGE {activeStage.step} • {activeStage.title}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                Responsible Role: {activeStage.role}
              </h3>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-right font-mono">
              <span className="text-[10px] text-emerald-400 block uppercase font-bold">{activeStage.impactRole}</span>
              <span className="text-sm sm:text-base font-black text-emerald-300">{activeStage.impactVal}</span>
            </div>
          </div>

          <p className="text-sm text-slate-200 font-sans leading-relaxed">
            {activeStage.action}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs font-sans text-slate-400">
            <span>Every step feeds clean financial data to the next department automatically.</span>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-emerald-300 transition-colors uppercase tracking-wider shrink-0"
            >
              <span>Schedule Live Walkthrough</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
