'use client';

import React, { useState } from 'react';
import { FAQS } from './marketingData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection({ onOpenDemo }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Key questions about implementing Construct-O-Genie across fit-out commercial, site, and accounts operations.
        </p>
      </div>

      {/* Accordion FAQ Items */}
      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-xl bg-black/50 border border-white/10 backdrop-blur-md overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02]"
              >
                <span className="text-xs sm:text-sm font-bold text-white">
                  {faq.q}
                </span>
                <div className="w-6 h-6 rounded-lg bg-white/[0.04] flex items-center justify-center text-slate-400 flex-shrink-0">
                  {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
