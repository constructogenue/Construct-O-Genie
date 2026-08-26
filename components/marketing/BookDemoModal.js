'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';

export default function BookDemoModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [turnover, setTurnover] = useState('₹25 Cr – ₹100 Cr');
  const [projectCount, setProjectCount] = useState('4–10 Projects');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate reliable demo scheduling payload
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#080c14] border border-white/15 p-6 sm:p-8 text-slate-100 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/[0.05] text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
                <ShieldCheck className="w-3 h-3" />
                <span>Tailored Fit-Out Demonstration</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Book a 15-Min Executive Demo
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                See how Construct-O-Genie connects tender BOQ rates, purchase caps, mobile DPRs, and Tally/SAP billing for your active fit-out projects.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rajesh@contractor.in"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Mobile / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98100 XXXXX"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Apex Interiors Ltd"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Annual Turnover Range</label>
                  <select
                    value={turnover}
                    onChange={(e) => setTurnover(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#0d121c] border border-white/10 text-white focus:outline-none focus:border-white/30 text-xs"
                  >
                    <option>₹10 Cr – ₹25 Cr</option>
                    <option>₹25 Cr – ₹100 Cr</option>
                    <option>₹100 Cr – ₹300 Cr</option>
                    <option>₹300 Cr+</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Concurrent Active Sites</label>
                  <select
                    value={projectCount}
                    onChange={(e) => setProjectCount(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#0d121c] border border-white/10 text-white focus:outline-none focus:border-white/30 text-xs"
                  >
                    <option>1–3 Projects</option>
                    <option>4–10 Projects</option>
                    <option>10–25 Projects</option>
                    <option>25+ Projects</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-white text-slate-950 font-semibold text-xs hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Scheduling Demo...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm 15-Min Demo Request</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center text-slate-400 pt-1">
                Zero spam. An enterprise product specialist will confirm your slot within 2 business hours.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">Demo Request Received</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-white font-medium">{name}</span>. We will contact you at <span className="text-white font-medium">{email}</span> to confirm your live 15-minute fit-out walkthrough.
              </p>
            </div>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-xs text-white font-medium"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
