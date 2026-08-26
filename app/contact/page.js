'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#030508] text-slate-200 py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Construct-O-Genie</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-medium text-emerald-400">ENTERPRISE INQUIRIES</span>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Contact &amp; Sales
            </h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              Connect with our fit-out commercial specialists for product demonstrations, technical architecture reviews, or data migration assistance.
            </p>
          </div>

          <div className="space-y-4 pt-4 text-xs">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Direct Inquiries</span>
              </div>
              <div className="text-slate-400 space-y-1 pl-6">
                <div>Sales: <a href="mailto:sales@constructogenie.in" className="text-slate-200 hover:text-white underline">sales@constructogenie.in</a></div>
                <div>Support: <a href="mailto:support@constructogenie.in" className="text-slate-200 hover:text-white underline">support@constructogenie.in</a></div>
                <div>General: <a href="mailto:contact@constructogenie.in" className="text-slate-200 hover:text-white underline">contact@constructogenie.in</a></div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Operating Location</span>
              </div>
              <p className="text-slate-400 pl-6 leading-relaxed">
                Construct-O-Genie Technologies<br />
                Gurugram, NCR, Haryana, India
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h2 className="text-base font-bold text-white">Send an Enterprise Inquiry</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-slate-300 font-medium">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Mehta"
                      className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-300 font-medium">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@contractor.in"
                      className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-slate-300 font-medium">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Turnkey Fit-Out Ltd"
                      className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-300 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98100 XXXXX"
                      className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Project Scale / Inquired Solution</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your active fit-out projects, current ERP/Tally workflow, or specific module requirements..."
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-white text-slate-950 font-semibold text-xs hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">Inquiry Received</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you. A Construct-O-Genie commercial specialist will review your inquiry and follow up within 2 business hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-xs text-white"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
