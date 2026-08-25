'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const FOUNDER_FAQS = [
  {
    q: "Will my site engineers actually use this, or is it too complicated for them?",
    a: "We engineered the site supervisor app to be as simple as WhatsApp. They don't need laptops or complex training. In just 2 minutes at the end of the day, they log worker count, snap 3-4 site photos, and record client measurements. Even supervisors with zero tech background use it easily.",
  },
  {
    q: "Can I monitor my company's profits and approve purchase orders from my phone?",
    a: "Yes. As a founder, you get an executive mobile view. You can check the live profit margin of every active site, see which clients have pending payments, and approve or reject vendor purchase orders in 1 click while traveling.",
  },
  {
    q: "Does my accountant need to change how they use Tally, SAP, or our ERP?",
    a: "No. Construct-O-Genie integrates directly with your accountant's existing Tally Prime, SAP ECC/S4, Zoho Books, or custom ERP. When you approve an RA bill or vendor payment, the accounting voucher is automatically posted with GST and TDS calculated. Your accountant does not need to learn a new accounting system.",
  },
  {
    q: "How does this prevent my team from over-ordering materials on site?",
    a: "When your quotation is finalized, the material and labor budgets are hard-locked. If a project manager tries to raise a purchase order exceeding the agreed quantity or price, the system immediately blocks it and sends an approval notification straight to your phone.",
  },
  {
    q: "How fast can we set this up for our active ongoing projects?",
    a: "Our implementation team gets you live within 5 to 7 days. We import your existing Excel quotations, configure your cost rates, connect your Tally/SAP, and train your site engineers with hands-on support.",
  },
  {
    q: "Are our company's internal cost rates and profit margins visible to clients or subcontractors?",
    a: "Never. Your profit margins, cost breakdowns, and vendor purchase rates are 100% private to your executive team. If you grant client portal access, they only see certified work completion and final billing amounts.",
  },
];

export default function FAQSection({ onOpenDemo }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 relative bg-transparent space-y-10">
      
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-slate-200 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          <HelpCircle className="w-3.5 h-3.5" />
          FOUNDER QUESTIONS & ANSWERS
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
          Everything You Need to Know. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
            Zero Jargon, Simple Answers.
          </span>
        </h2>
        <p className="text-sm text-slate-300 font-light font-sans max-w-xl mx-auto">
          Clear answers on how Construct-O-Genie helps you scale your contracting business smoothly.
        </p>
      </div>

      <div className="space-y-3 text-left">
        {FOUNDER_FAQS.map((faq, idx) => {
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

      <div className="p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <div className="text-sm font-bold text-white">Have specific workflow or team requirements?</div>
          <div className="text-xs text-slate-400 font-sans mt-0.5">Speak directly with our fit-out technology advisors.</div>
        </div>
        <button
          onClick={onOpenDemo}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all cursor-pointer shrink-0 shadow-md"
        >
          <span>Schedule 15-Min Call</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
}