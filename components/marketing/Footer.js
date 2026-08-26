'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer({ onOpenDemo, onOpenLogin }) {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-xl text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Company Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/brand/logo-icon-white.png"
                alt="Construct-O-Genie Logo"
                className="w-6 h-6 object-contain"
              />
              <span className="font-bold text-sm tracking-tight text-white">
                Construct-O-Genie
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The project operating system for turnkey interior &amp; commercial fit-out contractors. Protecting gross margin from bare shell to certified handover.
            </p>
            <div className="text-[11px] text-slate-400 space-y-1">
              <div>Operating Entity: Construct-O-Genie Technologies</div>
              <div>NCR Operations: Gurugram, Haryana, India</div>
              <div>Direct Contact: <a href="mailto:contact@constructogenie.in" className="text-slate-300 hover:text-white underline">contact@constructogenie.in</a></div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#product-tour" className="hover:text-white transition-colors">Product Tour</a></li>
              <li><button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">Living BOQ</button></li>
              <li><button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">Procurement Caps</button></li>
              <li><button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">Mobile DPR</button></li>
              <li><button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">Certified JMR</button></li>
              <li><button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">Tally &amp; SAP Bridge</button></li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact &amp; Sales</Link></li>
              <li><button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">Book a Demo</button></li>
              <li><a href="#roi-calculator" className="hover:text-white transition-colors">ROI Simulator</a></li>
              <li><button onClick={onOpenLogin} className="hover:text-white transition-colors text-left">Platform Sign In</button></li>
            </ul>
          </div>

          {/* Security & Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider">Security &amp; Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/security" className="hover:text-white transition-colors">Enterprise Security</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Support Desk</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Construct-O-Genie Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/security" className="hover:text-white transition-colors">Security</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
