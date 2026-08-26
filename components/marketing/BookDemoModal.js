'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function BookDemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    workEmail: '',
    companyName: '',
    annualTurnover: '₹20 Cr - ₹50 Cr',
    activeProjects: '3 - 8 Projects',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="fixed inset-0"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#080B10] border border-white/20 backdrop-blur-2xl shadow-2xl text-left z-10 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 font-sans">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              Demo Request Scheduled
            </h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you. Our enterprise solutions team has received your information for <span className="text-white font-semibold">{formData.companyName || 'your company'}</span>. We will connect with a tailored product walkthrough link.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold block">
                15-MINUTE OPERATIONAL WALKTHROUGH
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                Book a 15-Min Demo
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                See live margin locking, mobile DPRs and Tally sync configured for your contracting volume.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="director@fitoutcontractor.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Company Name</label>
                <input
                  type="text"
                  required
                  placeholder="Atelier Interiors & Projects"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Annual Turnover</label>
                  <select
                    value={formData.annualTurnover}
                    onChange={(e) => setFormData({ ...formData, annualTurnover: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-black/80 border border-white/15 text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="₹5 Cr - ₹20 Cr">₹5 Cr - ₹20 Cr</option>
                    <option value="₹20 Cr - ₹50 Cr">₹20 Cr - ₹50 Cr</option>
                    <option value="₹50 Cr - ₹150 Cr">₹50 Cr - ₹150 Cr</option>
                    <option value="₹150 Cr+">₹150 Cr+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Active Projects</label>
                  <select
                    value={formData.activeProjects}
                    onChange={(e) => setFormData({ ...formData, activeProjects: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-black/80 border border-white/15 text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="1 - 3 Projects">1 - 3 Projects</option>
                    <option value="3 - 8 Projects">3 - 8 Projects</option>
                    <option value="8 - 20 Projects">8 - 20 Projects</option>
                    <option value="20+ Projects">20+ Projects</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-4"
            >
              <span>Continue to Schedule</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Strictly confidential • No spam • NDA protected</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
