'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenDemo, onOpenLogin }) {
  return (
    <footer className="relative z-10 border-t border-white/15 bg-[#06080C]/95 backdrop-blur-2xl pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Col 1: Brand & Identity (2 Cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <img
                src="/brand/logo-icon.png"
                alt="Construct-O-Genie"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              />
            </div>
            <div>
              <span className="font-extrabold text-white text-base tracking-tight font-display block leading-none">
                Construct-O-Genie
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase block mt-0.5">
                Fit-Out Construction Operating System
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400 max-w-sm font-sans font-light leading-relaxed">
            The operating system engineered specifically for turnkey interior design and commercial fit-out contractors. Unified drawing revisions, locked BOQs, offline site DPRs, and Tally-native billing.
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Enterprise Grade Security • 99.9% Uptime</span>
          </div>
        </div>

        {/* Col 2: Platform Modules */}
        <div className="space-y-3 font-sans text-xs">
          <div className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">
            Platform Modules
          </div>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#command-centre" className="hover:text-white transition-colors">Executive Command Centre</a></li>
            <li><a href="#boq-spine" className="hover:text-white transition-colors">Living BOQ Spine & Locking</a></li>
            <li><a href="#approvals" className="hover:text-white transition-colors">Maker/Checker PO Approvals</a></li>
            <li><a href="#finance" className="hover:text-white transition-colors">RA Billing & Tally Prime Sync</a></li>
            <li><a href="#trade-packages" className="hover:text-white transition-colors">Turnkey Trade Package Registers</a></li>
          </ul>
        </div>

        {/* Col 3: Role Solutions */}
        <div className="space-y-3 font-sans text-xs">
          <div className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">
            Solutions By Role
          </div>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#roles" className="hover:text-white transition-colors">Managing Directors & Founders</a></li>
            <li><a href="#roles" className="hover:text-white transition-colors">Quantity Surveyors & Estimators</a></li>
            <li><a href="#roles" className="hover:text-white transition-colors">Fit-Out Project Managers</a></li>
            <li><a href="#roles" className="hover:text-white transition-colors">Site Supervisors & DPR Field Logs</a></li>
            <li><a href="#roles" className="hover:text-white transition-colors">Finance, Accounts & Taxation</a></li>
          </ul>
        </div>

        {/* Col 4: Executive Consultation */}
        <div className="space-y-3 font-sans text-xs">
          <div className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">
            Enterprise Engagement
          </div>
          <p className="text-xs text-slate-400 font-sans">
            Schedule a personalized walkthrough with our construction technology specialists.
          </p>
          <button
            onClick={onOpenDemo}
            className="w-full py-3 rounded-xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all shadow-md cursor-pointer"
          >
            Book a Live Demo
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
        <div>© 2026 Construct-O-Genie Technologies Inc. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Security & Compliance</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
