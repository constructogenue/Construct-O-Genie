'use client';

import React, { useState } from 'react';
import { 
  WORKFLOW_STAGES, 
  WORKFLOW_GROUPS 
} from './marketingData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function MasterWorkflow({ onOpenDemo }) {
  const [expandedGroup, setExpandedGroup] = useState('commercial');

  const toggleGroup = (id) => {
    setExpandedGroup(expandedGroup === id ? null : id);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          End-to-End Fit-Out Workflow
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          From initial tender BOQ locking to certified JMR sign-offs and Tally/SAP reconciliation.
        </p>
      </div>

      {/* DESKTOP VIEW: Full 10-Stage Connected Grid */}
      <div className="hidden lg:grid grid-cols-5 gap-4">
        {WORKFLOW_STAGES.map((stage) => (
          <div
            key={stage.id}
            className="p-4 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-slate-400">
                  STAGE {stage.step}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 font-medium border border-white/5">
                  {stage.group}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white tracking-tight leading-snug">
                {stage.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {stage.action}
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-white/5">
              <div className="text-[10px] text-slate-400">{stage.impactRole}</div>
              <div className="text-xs font-semibold text-emerald-400 mt-0.5">{stage.impactVal}</div>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE / TABLET VIEW: 5 Progressive-Disclosure Expandable Groups */}
      <div className="lg:hidden space-y-3">
        {WORKFLOW_GROUPS.map((grp) => {
          const isExpanded = expandedGroup === grp.id;
          const groupStages = WORKFLOW_STAGES.filter((s) => grp.stages.includes(s.step));

          return (
            <div
              key={grp.id}
              className="rounded-xl bg-black/60 border border-white/10 backdrop-blur-md overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleGroup(grp.id)}
                className="w-full p-4 text-left flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">
                    {grp.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {grp.desc}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-lg bg-white/[0.05] flex items-center justify-center text-slate-400 flex-shrink-0">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t border-white/5 space-y-3 bg-white/[0.01]">
                  {groupStages.map((stage) => (
                    <div key={stage.id} className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-bold text-slate-400">Step {stage.step}</span>
                        <span className="text-[10px] font-medium text-emerald-400">{stage.impactVal}</span>
                      </div>
                      <h4 className="text-xs font-semibold text-white">{stage.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{stage.action}</p>
                      <div className="text-[10px] text-slate-400 pt-1 border-t border-white/5">
                        Key Stakeholder: <span className="text-slate-300">{stage.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
