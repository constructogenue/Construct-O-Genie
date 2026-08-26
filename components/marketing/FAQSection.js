'use client';

import React, { useState } from 'react';
import { FAQS } from './marketingData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQSection({ onOpenDemo }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
          FREQUENTLY ASKED QUESTIONS
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          Operational & Technical Answers.
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-sans font-light">
          Everything you need to know about implementing Construct-O-Genie across your fit-out operations.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3 text-left">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-[#080B10]/90 border border-white/15 backdrop-blur-2xl shadow-md overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-sm sm:text-base text-white font-display">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-emerald-400' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed border-t border-white/10 pt-4">
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
