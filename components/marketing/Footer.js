'use client';

import React from 'react';

export default function Footer({ onOpenDemo, onOpenLogin }) {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#040609] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-left font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        
        {/* Col 1: Brand Info */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <img
              src="/brand/logo-icon.png"
              alt="Construct-O-Genie"
              className="w-7 h-7 object-contain"
            />
            <span className="font-bold text-white text-base font-display">
              Construct-O-Genie
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            The operating system for interior fit-out, turnkey contracting and project execution businesses. Living BOQ Spine, mobile DPRs, maker-checker approvals and direct Tally/SAP synchronization.
          </p>
          <div className="text-[11px] font-mono text-slate-400">
            Enterprise Architecture • Built in India for Global Turnkey Operations
          </div>
        </div>

        {/* Col 2: Product */}
        <div className="space-y-3 text-xs">
          <div className="font-bold text-white font-mono uppercase tracking-wider text-[10px]">Product</div>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#product" className="hover:text-white transition-colors">Founder Radar</a></li>
            <li><a href="#product" className="hover:text-white transition-colors">Living BOQ Spine</a></li>
            <li><a href="#product" className="hover:text-white transition-colors">Procurement Engine</a></li>
            <li><a href="#product" className="hover:text-white transition-colors">Site DPR & Snagging</a></li>
            <li><a href="#product" className="hover:text-white transition-colors">JMR & RA Billing</a></li>
          </ul>
        </div>

        {/* Col 3: Integrations & Roles */}
        <div className="space-y-3 text-xs">
          <div className="font-bold text-white font-mono uppercase tracking-wider text-[10px]">Integrations</div>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#integrations" className="hover:text-white transition-colors">Tally Prime Sync</a></li>
            <li><a href="#integrations" className="hover:text-white transition-colors">SAP ECC / S4HANA</a></li>
            <li><a href="#integrations" className="hover:text-white transition-colors">Zoho Books</a></li>
            <li><a href="#integrations" className="hover:text-white transition-colors">Excel BOQ Import</a></li>
            <li><a href="#integrations" className="hover:text-white transition-colors">Custom REST APIs</a></li>
          </ul>
        </div>

        {/* Col 4: Company & Security */}
        <div className="space-y-3 text-xs">
          <div className="font-bold text-white font-mono uppercase tracking-wider text-[10px]">Security & Legal</div>
          <ul className="space-y-2 text-slate-400">
            <li><span className="text-slate-400">Data Privacy & Encryption</span></li>
            <li><span className="text-slate-400">Role-Based Access (RBAC)</span></li>
            <li><span className="text-slate-400">Audit Trail Logging</span></li>
            <li><button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">Book a 15-Min Demo</button></li>
            <li><button onClick={onOpenLogin} className="hover:text-white transition-colors text-left">Client & Vendor Portal</button></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
        <div>
          © {new Date().getFullYear()} Construct-O-Genie Technologies. All rights reserved.
        </div>
        <div>
          Fit-Out Construction Operating System
        </div>
      </div>
    </footer>
  );
}
