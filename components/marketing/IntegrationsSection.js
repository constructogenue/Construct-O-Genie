'use client';

import React from 'react';
import { INTEGRATIONS_LIST } from './marketingData';

export default function IntegrationsSection({ onOpenDemo }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Connect with your accounting stack.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Integration options available based on your existing systems. Keep your general ledger in Tally or SAP while managing fit-out projects in Construct-O-Genie.
        </p>
      </div>

      {/* Defensible Integration Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {INTEGRATIONS_LIST.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-400 font-mono">
                  {item.badge}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/5">
                  {item.category}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {item.name}
                </h3>
                <div className="text-xs text-slate-400 mt-0.5">{item.type}</div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-400">Capability:</span>
              <span className="text-slate-200 font-medium">{item.status}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
