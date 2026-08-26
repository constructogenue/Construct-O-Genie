'use client';

import React from 'react';
import { ShieldCheck, FileCheck, Layers, RefreshCw } from 'lucide-react';

export default function TrustStrip() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Living BOQ Locking',
      desc: 'Item-level internal cost caps prevent unbudgeted purchase orders.'
    },
    {
      icon: FileCheck,
      title: 'Joint Measurement (JMR)',
      desc: 'Digital tripartite sign-offs between contractor, client, and PMC.'
    },
    {
      icon: Layers,
      title: 'Variation Register',
      desc: 'Drawing revision deltas captured before material procurement.'
    },
    {
      icon: RefreshCw,
      title: 'Two-Way ERP Sync',
      desc: 'Native connectors for Tally Prime, SAP ECC/S4, and Zoho Books.'
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md p-6 sm:p-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h2 className="text-sm font-semibold text-white tracking-wide">
                    {item.title}
                  </h2>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-10">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
