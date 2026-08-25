'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    q: "Can we import our existing tender BOQs directly from Microsoft Excel?",
    a: "Yes. Construct-O-Genie includes an intelligent BOQ Excel Ingestion Engine. You can upload standard client tender sheets (.xlsx / .csv) and the system automatically maps item codes, units (Sqm, Rmt, Nos), quantities, and client selling rates into locked budget lines.",
  },
  {
    q: "How does the two-way integration with Tally Prime, SAP, and other ERPs work?",
    a: "When an RA bill or vendor purchase order is approved in Construct-O-Genie, our API bridge generates formatted accounting vouchers directly in Tally Prime, SAP ECC/S4, Zoho Books, or Oracle NetSuite without double data entry. Contractor TDS (u/s 194C) and GST withholdings are automatically posted.",
  },
  {
    q: "Does the mobile site supervisor app work offline in basement and poor network sites?",
    a: "Yes. The field app features local SQLite offline persistence. Site supervisors can record worker headcounts, log daily material receipts (GRNs), and take snag photos offline. All records sync automatically as soon as mobile data or site Wi-Fi is detected.",
  },
  {
    q: "How does Construct-O-Genie prevent unauthorized material ordering on site?",
    a: "Every Purchase Order is locked directly to an approved BOQ line item and rate analysis ceiling. If a site supervisor or project manager attempts to raise a PO exceeding the tender quantity or cost budget, the system triggers a Maker/Checker executive approval threshold.",
  },
  {
    q: "How long does team onboarding and data migration take?",
    a: "Standard rollout takes 5 to 7 days. Our dedicated implementation specialists set up your cost master rates, import active project BOQs, configure user access roles, and conduct hands-on training for your site engineers and commercial managers.",
  },
  {
    q: "Can we provide restricted portal access to our clients and subcontractors?",
    a: "Yes. Clients get a branded portal to view certified physical progress, approve variation requests, and verify RA bills. Subcontractors get a vendor portal to view work orders, submit measurement sheets, and track payment UTRs.",
  },
];

export default function FAQSection({ onOpenDemo }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 relative bg-transparent space-y-10">
      
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <HelpCircle className="w-3.5 h-3.5" />
          FREQUENTLY ASKED QUESTIONS
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          Got Questions? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            We Have Answers.
          </span>
        </h2>
        <p className="text-sm text-slate-300 font-light font-sans max-w-xl mx-auto">
          Everything you need to know about deployment, ERP integrations, and site execution.
        </p>
      </div>

      <div className="space-y-3 text-left">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className="rounded-2xl bg-[#0A0D14]/90 border border-white/15 backdrop-blur-2xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-white/[0.03] transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-white text-sm sm:text-base font-display">
                  {faq.q}
                </span>
                <span className="p-1 rounded-lg bg-white/10 text-white shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed border-t border-white/10">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="p-6 rounded-2xl bg-black/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <div className="text-sm font-bold text-white">Have custom enterprise ERP requirements?</div>
          <div className="text-xs text-slate-400 font-sans mt-0.5">We provide dedicated API webhooks for bespoke internal databases.</div>
        </div>
        <button
          onClick={onOpenDemo}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all cursor-pointer shrink-0 shadow-md"
        >
          <span>Ask Our Engineers</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
}